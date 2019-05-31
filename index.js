const { relative, resolve } = require('path');
const getDocText = require('js-ejs');

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
        delete v.source;
        delete v.output;
    });
};

const getScriptText = (results, rulesMeta) => {
    return `
    window.EslintResults = ${JSON.stringify(results)};
    window.RulesMeta = ${JSON.stringify(rulesMeta)};

    ;;(async () => {
        const replJavasScript = (url = '') => fetch(url).then(res => res.text()).then(res => eval(res));
        replJavasScript('https://raw.githubusercontent.com/shuoshubao/eslint-formatter-html/master/render.js');
    })();;
`;
};

module.exports = function(results, data) {
    const { rulesMeta = {} } = data;

    formatEslintResults(results);

    return getDocText(documentConfig => {
        documentConfig.script = [
            {
                __text: getScriptText(results, rulesMeta)
            }
        ];
    });
};
