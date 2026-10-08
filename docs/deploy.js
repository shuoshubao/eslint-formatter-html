/*
 * @Author: shuoshubao
 * @Date: 2024-06-06 10:51:47
 * @LastEditors: shuoshubao
 * @LastEditTime: 2024-06-06 11:45:01
 * @Description: 生成demo页面
 */
import { readFileSync, writeFileSync } from 'fs';
import { gzipSync } from 'zlib';
import DemoData from './data.js';

const serializeData = data => {
    return gzipSync(JSON.stringify(data), { level: 9 }).toString('base64');
};

const template = readFileSync('./dist/index.html', 'utf-8');

writeFileSync('docs/index.html', template.replace('docs/EslintResults.js', 'EslintResults.js'));

DemoData.forEach((item, index) => {
    const { EslintCwd, EslintCreateTime, EslintResults, EslintRulesMeta } = item;
    const fileName = `docs/demo${index + 1}.html`;

    const scriptContent = `
        <script>
            window.EslintCwd = '${EslintCwd}';
            window.EslintCreateTime = ${EslintCreateTime};
            window.EslintResults = '${serializeData(EslintResults)}';
            window.EslintRulesMeta = '${serializeData(EslintRulesMeta)}';
        </script>
    `;

    const content = template.replace('<script src="docs/EslintResults.js"></script>', scriptContent);

    writeFileSync(fileName, content);
});
