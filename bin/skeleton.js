const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const less = require('less');
const CleanCSS = require('clean-css');
const getDocText = require('@nbfe/js2html');

const resolvePath = (p = '') => {
    return resolve(__dirname, '..', p);
};

const OriginalTemplate = readFileSync(resolvePath('src/index.vue')).toString();

const getInnerHtml = (tagName = 'template') => {
    const TagReg = new RegExp(`<${tagName}\\s*.*>(\\s|\\S)*<\/${tagName}>`);
    return OriginalTemplate.match(TagReg)[0]
        .split('\n')
        .slice(1, -1)
        .join('\n');
};

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
});
