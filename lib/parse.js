const { readFileSync } = require('fs');
const { resolve } = require('path');
const getDocText = require('js-ejs');

const OriginalTemplate = readFileSync(resolve(__dirname, './index.vue')).toString();

const getInnetHtml = (tagName = 'template') => {
    const TagReg = new RegExp(`<${tagName}\\s*.*>(\\s|\\S)*<\/${tagName}>`);
    return OriginalTemplate.match(TagReg)[0]
        .split('\n')
        .slice(1, -1)
        .join('\n');
};

const templateText = getInnetHtml('template');
const scriptText = getInnetHtml('script');
const styleText = getInnetHtml('style');

module.exports = (results = []) => {
    const docText = getDocText(documentConfig => {
        documentConfig.title = 'ESLint Report';
        // documentConfig.meta = [];
        document.bodyHtml = templateText;
        document.style = [
            'https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css',
            {
                __text: styleText
            }
        ];
        document.script = [
            // 'https://unpkg.com/vue@2.6.10/dist/vue.js',
            'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
            'https://unpkg.com/element-ui@2.8.2/lib/index.js',
            'https://unpkg.com/lodash@4.17.11/lodash.js',
            {
                __text: scriptText
            }
        ];
    });

    return docText;
};
