const { readFileSync } = require('fs')
const { relative, resolve } = require('path')
const { deflateRaw } = require('pako')
const stripAnsi = require('strip-ansi')
const { version: pkgVersion } = require('./package')

const formatEslintData = (results, context) => {
  const { cwd, rulesMeta } = context
  const EslintRulesMeta = {}
  results.forEach(v => {
    const { filePath } = v
    v.filePath = relative(cwd, filePath)
    v.messages = v.messages.map(v2 => {
      const { ruleId, message } = v2
      if (ruleId && !(ruleId in EslintRulesMeta)) {
        EslintRulesMeta[ruleId] = rulesMeta[ruleId]
        delete EslintRulesMeta[ruleId].schema
      }
      return {
        ...v2,
        message: stripAnsi(message)
      }
    })
    delete v.source
    delete v.output
    delete v.usedDeprecatedRules
  })
  return { EslintResults: results, EslintRulesMeta }
}

const getFileContent = fileName => {
  return readFileSync(resolve(__dirname, fileName)).toString()
}

const deflateData = data => {
  return deflateRaw(JSON.stringify(data).toString())
}

module.exports = (results, context) => {
  const { cwd } = context

  const { EslintResults, EslintRulesMeta } = formatEslintData(results, context)

  return getFileContent('./index.html')
    .replace('dist/index.css', `https://unpkg.com/eslint-formatter-html@${pkgVersion}/dist/index.css`)
    .replace(
      '<script src="docs/EslintResults.js"></script>',
      `<script>window.EslintResults = "${deflateData(EslintResults)}";</script>`
    )
    .replace(
      '<script src="docs/EslintRulesMeta.js"></script>',
      `<script>window.EslintRulesMeta = '${deflateData(EslintRulesMeta)}';</script>`
    )
    .replace('</div>', `</div><script>window.EslintCwd = '${cwd}'; window.EslintCreateTime = ${Date.now()};</script>`)
    .replace('dist/index.js', `https://unpkg.com/eslint-formatter-html@${pkgVersion}/dist/index.js`)
}
