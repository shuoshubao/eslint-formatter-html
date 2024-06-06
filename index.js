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
    try {
        const tableFormatter = require('eslint-formatter-table');
        console.log(tableFormatter(results, context));
    } catch (e) {}

    const { cwd: EslintCwd } = context;

    const EslintCreateTime = Date.now();

    const { EslintResults, EslintRulesMeta } = formatEslintData(results, context);

    const scriptContent = `
        <script>
            window.EslintCwd = '${EslintCwd}';
            window.EslintCreateTime = ${EslintCreateTime};
            window.EslintResults = '${deflateData(EslintResults)}';
            window.EslintRulesMeta = '${deflateData(EslintRulesMeta)}';
        </script>
    `;

    const template = getFileContent('./dist/index.html');

    return template.replace('<script src="docs/EslintResults.js"></script>', scriptContent);
};
