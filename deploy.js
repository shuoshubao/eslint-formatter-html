/*
 * @Author: shuoshubao
 * @Date: 2024-06-06 10:51:47
 * @LastEditors: shuoshubao
 * @LastEditTime: 2024-06-06 11:45:01
 * @Description: 生成demo页面
 */
const { readFileSync, writeFileSync } = require('fs');
const DemoData = require('./data');

const template = readFileSync('./dist/index.html', 'utf-8');

writeFileSync('docs/index.html', template.replace('docs/EslintResults.js', 'EslintResults.js'));

DemoData.forEach((v, i) => {
    const { EslintCwd, EslintCreateTime, EslintResults, EslintRulesMeta } = v;
    const fileName = `docs/demo${i + 1}.html`;

    const scriptContent = `
        <script>
            window.EslintCwd = '${EslintCwd}';
            window.EslintCreateTime = ${EslintCreateTime};
            window.EslintResults = '${EslintResults}';
            window.EslintRulesMeta = '${EslintRulesMeta}';
        </script>
    `;

    const content = template.replace('<script src="docs/EslintResults.js"></script>', scriptContent);

    writeFileSync(fileName, content);
});
