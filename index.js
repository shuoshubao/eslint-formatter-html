const { readFileSync } = require('fs');
const { relative, resolve } = require('path');
const { deflateRaw } = require('pako');
const stripAnsi = require('strip-ansi');

const formatEslintData = (results, context) => {
    const { cwd, rulesMeta } = context;
    const EslintRulesMeta = {};
    results.forEach(v => {
        const { filePath } = v;
        v.filePath = relative(cwd, filePath);
        v.messages = v.messages.map(v2 => {
            const { ruleId, message } = v2;
            if (ruleId && !(ruleId in EslintRulesMeta)) {
                EslintRulesMeta[ruleId] = rulesMeta[ruleId];
                delete EslintRulesMeta[ruleId].schema;
            }
            return {
                ...v2,
                message: stripAnsi(message)
            };
        });
        delete v.source;
        delete v.output;
        delete v.usedDeprecatedRules;
        delete v.suppressedMessages;
    });
    return { EslintResults: results, EslintRulesMeta };
};

const getFileContent = fileName => {
    return readFileSync(resolve(__dirname, fileName), 'utf-8');
};

const deflateData = data => {
    return deflateRaw(JSON.stringify(data).toString());
};

module.exports = (results, context) => {
    const { cwd } = context;

    const { EslintResults, EslintRulesMeta } = formatEslintData(results, context);

    return getFileContent('./dist/index.html')
        .replace('<script src="docs/EslintResults.js">', `<script>window.EslintResults = '${deflateData(EslintResults)}'`)
        .replace('<script src="docs/EslintRulesMeta.js">', `<script>window.EslintRulesMeta = '${deflateData(EslintRulesMeta)}'`)
        .replace(
            '<div id="app"></div>',
            [`<div id="app"></div>`, '<script>', `window.EslintCwd = '${cwd}';`, `window.EslintCreateTime = ${Date.now()};`, '</script>'].join('\n')
        );
};
