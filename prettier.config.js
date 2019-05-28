module.exports = {
    parser: 'babel',
    arrowParens: 'avoid',
    bracketSpacing: true,
    insertPragma: false,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 160,
    proseWrap: 'never',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false,
    overrides: [
        {
            files: '*.json',
            options: {
                parser: 'json',
                tabWidth: 2
            }
        },
        {
            files: '*.vue',
            options: {
                parser: 'vue'
            }
        },
        {
            files: '*.{css,scss,less}',
            options: {
                parser: 'css',
                singleQuote: false
            }
        },
        {
            files: '*.md',
            options: {
                parser: 'markdown'
            }
        },
        {
            files: '*.{yml,yaml}',
            options: {
                parser: 'yaml'
            }
        }
    ]
};
