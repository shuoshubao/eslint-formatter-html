const { relative, resolve } = require('path');
const parseEslint = require('./lib/parse');
const root = process.cwd();

const formatEslintResults = (results = [], rulesMetaUrlMap) => {
    results.forEach(v => {
        const { filePath, messages } = v;
        v.filePath = relative(root, filePath);
        v.messages = messages.map(v2 => {
            return {
                ...v2,
                ruleIdUrl: rulesMetaUrlMap[ruleId]
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

module.exports = function(results, data) {
    const { rulesMeta = {} } = data;
    const rulesMetaUrlMap = getRulesMetaUrlMap(rulesMeta);

    formatEslintResults(results, rulesMetaUrlMap);

    return parseEslint(results);
};
