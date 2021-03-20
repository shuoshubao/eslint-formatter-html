const { readFileSync } = require('fs');
const { relative, resolve } = require('path');
const stripAnsi = require('strip-ansi');
const { generateDocument } = require('@nbfe/js2html');
const { name: pkgName, version: pkgVersion } = require('./package');

const getCdnUrl = (filePath = '') => {
    const source = [pkgName, pkgVersion].join('@');
    return ['https://static.meituan.net/bs/', filePath, '?source=', source].join('');
};

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

    return generateDocument({
        title: ['EslintReport', pkgVersion].join('@'),
        link: [
            {
                rel: 'icon',
                href: 'https://eslint.org/assets/img/favicon.512x512.png'
            }
        ],
        style: [
            getCdnUrl('@ss/mtd-vue/0.3.5/lib/theme2/index.css'),
            {
                text: getFileContent('style.css')
            }
        ],
        script: [
            { src: getCdnUrl('vue/2.6.11/vue.min.js') },
            { src: getCdnUrl('@ss/mtd-vue/0.3.5/lib/index.js') },
            { src: getCdnUrl('lodash/4.17.15/lodash.min.js') },
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
