const { relative, resolve } = require('path');
const root = process.cwd();

module.exports = function(results, data) {
    const { rulesMeta = {} } = data;

    results.forEach(v => {
        v.fileRelativePath = relative(root, v.filePath);
    });

    return 'hello';
};
