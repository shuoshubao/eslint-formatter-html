const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const { generateDocument } = require('@nbfe/js2html');
const less = require('less');
const CleanCSS = require('clean-css');
const mkdirp = require('mkdirp');

const resolvePath = (p = '') => {
    return resolve(__dirname, '..', p);
};

const OriginalTemplate = readFileSync(resolvePath('bin/index.vue')).toString();

const getInnerHtml = (tagName = 'template') => {
    const TagReg = new RegExp(`<${tagName}\\s*.*>(\\s|\\S)*<\/${tagName}>`);
    return OriginalTemplate.match(TagReg)[0]
        .split('\n')
        .slice(1, -1)
        .join('\n');
};

mkdirp.sync('lib');

const writeFileToLib = (fileName = '', content = '') => {
    writeFileSync(resolvePath(`lib/${fileName}`), `${content}\n`);
};

const templateText = getInnerHtml('template');
const scriptText = getInnerHtml('script');
const lessText = getInnerHtml('style');

less.render(lessText, (e, cssResult) => {
    const styleText = new CleanCSS({}).minify(cssResult.css).styles;

    writeFileToLib('template.html', templateText);
    writeFileToLib('script.js', scriptText);
    writeFileToLib('style.css', styleText);

    const content = generateDocument({
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
                text: styleText
            }
        ],
        script: [
            { src: 'https://static.meituan.net/bs/vue/2.6.11/dist/vue.js' },
            { src: 'https://static.meituan.net/bs/@ss/mtd-vue/0.3.5/lib/index.js' },
            { src: 'https://static.meituan.net/bs/lodash/4.17.15/lodash.min.js' },
            {
                src: 'docs/EslintResults.js'
            },
            {
                src: 'docs/RulesMeta.js'
            },
            {
                text: scriptText
            }
        ],
        bodyHtml: [templateText]
    })
    writeFileSync('index.html', content);
});
