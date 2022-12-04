const { readFileSync } = require('fs')
const { relative, resolve } = require('path')
const { map, uniq, flatten } = require('lodash')
const { deflateRaw } = require('pako')
const stripAnsi = require('strip-ansi')
const { version: pkgVersion } = require('./package')

/**
 * filePath => relative path
 * source => remove
 * output => remove
 */
const formatEslintResults = (results, cwd) => {
  results.forEach(v => {
    const { filePath } = v
    v.filePath = relative(cwd, filePath)
    v.messages = v.messages.map(v2 => {
      return {
        ...v2,
        message: stripAnsi(v2.message)
      }
    })
    delete v.source
    delete v.output
  })
  return results
}

const getFileContent = fileName => {
  return readFileSync(resolve(__dirname, fileName)).toString()
}

const deflateData = data => {
  return deflateRaw(JSON.stringify(data).toString())
}

module.exports = (results, context) => {
  const { cwd, rulesMeta } = context
  const EslintRulesMeta = uniq(map(flatten(map(results, 'messages')), 'ruleId'))
    .filter(Boolean)
    .reduce((prev, cur) => {
      const meta = rulesMeta[cur]
      if (meta) {
        prev[cur] = meta
      }
      return prev
    }, {})

  const EslintResults = formatEslintResults(results, cwd)

  return getFileContent('./index.html')
    .replace('dist/index.css', `https://unpkg.com/eslint-formatter-html@${pkgVersion}/dist/index.css`)
    .replace(
      '<script src="docs/EslintResults.js"></script>',
      `<script>window.EslintResults = "${deflateData(EslintResults)}";</script>`
    )
    .replace(
      '<script src="docs/EslintRulesMeta.js"></script>',
      `<script>window.EslintRulesMeta = "${deflateData(EslintRulesMeta)}";</script>`
    )
    .replace('</div>', `</div><script>window.EslintCwd = "${cwd}";window.EslintCreateTime = ${Date.now()}</script>`)
    .replace('dist/index.js', `https://unpkg.com/eslint-formatter-html@${pkgVersion}/dist/index.js`)
}
