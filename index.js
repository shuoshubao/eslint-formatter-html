const { readFileSync } = require('fs');
const { relative, resolve } = require('path');
const { gzipSync } = require('zlib');
// strip-ansi 7+ 是 ESM only, 通过 require(esm) 加载后取 default
const stripAnsi = require('strip-ansi').default;

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

// gzip + base64, 浏览器端用 DecompressionStream 解压
const serializeData = data => {
    return gzipSync(JSON.stringify(data), { level: 9 }).toString('base64');
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
            window.EslintResults = '${serializeData(EslintResults)}';
            window.EslintRulesMeta = '${serializeData(EslintRulesMeta)}';
        </script>
    `;

    const template = getFileContent('./dist/index.html');

    return template.replace('<script src="docs/EslintResults.js"></script>', scriptContent);
};
