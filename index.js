const { readFileSync } = require('fs')
const { relative, resolve } = require('path')
const { deflateRaw } = require('pako')
const stripAnsi = require('strip-ansi')
const pkg = require('./package')

const { name: pkgName, version: pkgVersion } = pkg

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

const unpkgPrefix = `https://unpkg.com/${pkgName}@${pkgVersion}`

module.exports = (results, context) => {
  const { cwd } = context

  const { EslintResults, EslintRulesMeta } = formatEslintData(results, context)

  return getFileContent('./index.html')
    .replace('dist/index.css', [unpkgPrefix, `dist/index.css`].join('/'))
    .replace('dist/index.js', [unpkgPrefix, `dist/index.js`].join('/'))
    .replace('<script src="docs/EslintResults.js">', `<script>window.EslintResults = '${deflateData(EslintResults)}'`)
    .replace(
      '<script src="docs/EslintRulesMeta.js">',
      `<script>window.EslintRulesMeta = '${deflateData(EslintRulesMeta)}'`
    )
    .replace(
      '<div id="app"></div>',
      [
        `<div id="app"></div>`,
        '<script>',
        `window.EslintCwd = '${cwd}';`,
        `window.EslintCreateTime = ${Date.now()};`,
        `window.EslintPkg = ${JSON.stringify(pkg)};`,
        '</script>'
      ].join('\n')
    )
}
