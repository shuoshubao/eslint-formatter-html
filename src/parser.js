const { readFileSync } = require('fs');
const { resolve } = require('path');
const getDocText = require('js-ejs');

const resolvePath = (p = '') => {
    return resolve(__dirname, '..', p);
};

const getSectionText = (sectionName = '') => {
    return readFileSync(resolvePath(`lib/${sectionName}.text`)).toString();
};

const templateText = getSectionText('template');
const scriptText = getSectionText('script');
const styleText = getSectionText('style');

module.exports = (results = []) => {
    const docText = getDocText(documentConfig => {
        documentConfig.title = 'ESLint Report';
        documentConfig.bodyHtml = [templateText];
        documentConfig.style = [
            'https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css',
            {
                __text: styleText
            }
        ];
        documentConfig.script = [
            // 'https://unpkg.com/vue@2.6.10/dist/vue.js',
            'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
            'https://unpkg.com/element-ui@2.8.2/lib/index.js',
            'https://unpkg.com/lodash@4.17.11/lodash.js',
            {
                __text: `
                    window.results = ${JSON.stringify(results)}
                `
            },
            {
                __text: scriptText
            }
        ];
    });

    return docText;
};
