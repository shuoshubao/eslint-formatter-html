const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const less = require('less');
const getDocText = require('js-ejs');

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

const templateText = getInnerHtml('template');
const scriptText = getInnerHtml('script');
const lessText = getInnerHtml('style');

less.render(lessText, (e, cssResult) => {
    writeFileSync(resolvePath('lib/template.text'), templateText);
    writeFileSync(resolvePath('lib/script.text'), scriptText);
    writeFileSync(resolvePath('lib/style.text'), cssResult.css);
});
