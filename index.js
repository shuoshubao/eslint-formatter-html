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

module.exports = function(results, data) {
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
            'https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css',
            {
                text: getFileContent('style.css')
            }
        ],
        script: [
            { src: 'https://unpkg.com/vue@2.6.10/dist/vue.min.js' },
            { src: 'https://unpkg.com/element-ui@2.8.2/lib/index.js' },
            { src: 'https://unpkg.com/lodash@4.17.11/lodash.js' },
            {
                text: `window.EslintResults = ${JSON.stringify(results)}`
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
