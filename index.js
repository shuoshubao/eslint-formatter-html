import { readFileSync } from 'fs';
import { createRequire } from 'module';
import { relative, resolve } from 'path';
import { gzipSync } from 'zlib';
import stripAnsi from 'strip-ansi';

const require = createRequire(import.meta.url);

const formatEslintData = (results, context) => {
    const { cwd, rulesMeta } = context;
    const EslintRulesMeta = {};
    results.forEach(item => {
        const { filePath } = item;
        item.filePath = relative(cwd, filePath);
        item.messages = item.messages.map(item2 => {
            const { ruleId, message } = item2;
            if (ruleId && !(ruleId in EslintRulesMeta)) {
                EslintRulesMeta[ruleId] = rulesMeta[ruleId];
                delete EslintRulesMeta[ruleId].schema;
            }
            return {
                ...item2,
                message: stripAnsi(message)
            };
        });
        delete item.source;
        delete item.output;
        delete item.usedDeprecatedRules;
        delete item.suppressedMessages;
    });

    return { EslintResults: results, EslintRulesMeta };
};

const getFileContent = fileName => {
    return readFileSync(resolve(import.meta.dirname, fileName), 'utf-8');
};

const serializeData = data => {
    return gzipSync(JSON.stringify(data), { level: 9 }).toString('base64');
};

export default (results, context) => {
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
