const { readFileSync } = require('fs');
const { relative, resolve } = require('path');
const stripAnsi = require('strip-ansi');
const getDocText = require('@nbfe/js2html');

const rootPath = process.cwd();

/**
 * filePath => 相对路径
 * source => 删掉
 * output => 删掉
 */
const formatEslintResults = (results = []) => {
    results.forEach(v => {
        const { filePath } = v;
        v.filePath = relative(rootPath, filePath);
        v.messages = v.messages.map(v2 => {
            return {
                ...v2,
                message: stripAnsi(v2.message)
            };
        });
        delete v.source;
        delete v.output;
    });
};

const getFileContent = fileName => {
    return readFileSync(resolve(__dirname, 'lib', fileName)).toString();
};

module.exports = (results, data) => {
    const { rulesMeta = {} } = data;

    formatEslintResults(results);

    return getDocText({
        title: 'EslintReport',
        link: [
            {
                rel: 'icon',
                href: 'https://eslint.org/assets/img/favicon.512x512.png'
            }
        ],
        style: [
            'https://static.meituan.net/bs/@ss/mtd-vue/0.3.5/lib/theme2/index.css',
            {
                text: getFileContent('style.css')
            }
        ],
        script: [
            { src: 'https://static.meituan.net/bs/vue/2.6.11/vue.min.js' },
            { src: 'https://static.meituan.net/bs/@ss/mtd-vue/0.3.5/lib/index.js' },
            { src: 'https://static.meituan.net/bs/lodash/4.17.15/lodash.min.js' },
            {
                text: `window.EslintResults = ${JSON.stringify(results)};`
            },
            {
                text: `window.RulesMeta = ${JSON.stringify(rulesMeta)};`
            },
            {
                text: getFileContent('script.js')
            }
        ],
        bodyHtml: [getFileContent('template.html')]
    });
};
