const { relative, resolve } = require('path');
const root = process.cwd();

module.exports = function(results, data) {
    const { rulesMeta = {} } = data;

    results.forEach(v => {
        v.filePath = relative(root, v.filePath);
        delete v.source;
    });

    return 'hello';
};
