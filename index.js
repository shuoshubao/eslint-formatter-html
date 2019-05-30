const { relative, resolve } = require('path');
const getDocText = require('js-ejs');

const rootPath = process.cwd();

const formatEslintResults = (results = [], rulesMetaUrlMap) => {
    results.forEach(v => {
        const { filePath, messages } = v;
        v.filePath = relative(rootPath, filePath);
        v.messages = messages.map(v2 => {
            delete v2.fix;
            return {
                ...v2,
                ruleIdUrl: rulesMetaUrlMap[v2.ruleId]
            };
        });
        delete v.source;
    });
};

const getRulesMetaUrlMap = (rulesMeta = {}) => {
    return Object.entries(rulesMeta).reduce((prev, cur) => {
        const [k, v] = cur;
        prev[k] = v.docs.url;
        return prev;
    }, {});
};

const scriptText = results => {
    return `
    window.EslintResults = ${JSON.stringify(results)};


    ;;(async () => {
        const replJavasScript = (url = '') => fetch(url).then(res => res.text()).then(res => eval(res));
        replJavasScript('https://raw.githubusercontent.com/shuoshubao/eslint-formatter-html/master/render.js');
    })();;
`;
};

module.exports = function(results, data) {
    const { rulesMeta = {} } = data;
    const rulesMetaUrlMap = getRulesMetaUrlMap(rulesMeta);

    formatEslintResults(results, rulesMetaUrlMap);

    return getDocText(documentConfig => {
        documentConfig.script = [
            {
                __text: scriptText(results)
            }
        ];
    });
};
