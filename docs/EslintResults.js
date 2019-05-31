window.EslintResults = [
    { filePath: 'src/api/ars.js', messages: [], errorCount: 0, warningCount: 0, fixableErrorCount: 0, fixableWarningCount: 0 },
    { filePath: 'src/api/auth.js', messages: [], errorCount: 0, warningCount: 0, fixableErrorCount: 0, fixableWarningCount: 0 },
    {
        filePath: 'src/api/expand.js',
        messages: [
            {
                ruleId: 'no-unused-vars',
                severity: 1,
                message: "'post' is defined but never used.",
                line: 1,
                column: 15,
                nodeType: 'Identifier',
                endLine: 1,
                endColumn: 19,
                ruleIdUrl: 'https://eslint.org/docs/rules/no-unused-vars'
            },
            {
                ruleId: 'no-restricted-globals',
                severity: 1,
                message: "Unexpected use of 'location'.",
                line: 7,
                column: 21,
                nodeType: 'Identifier',
                endLine: 7,
                endColumn: 29,
                ruleIdUrl: 'https://eslint.org/docs/rules/no-restricted-globals'
            },
            {
                ruleId: 'no-restricted-globals',
                severity: 1,
                message: "Unexpected use of 'location'.",
                line: 23,
                column: 21,
                nodeType: 'Identifier',
                endLine: 23,
                endColumn: 29,
                ruleIdUrl: 'https://eslint.org/docs/rules/no-restricted-globals'
            }
        ],
        errorCount: 0,
        warningCount: 3,
        fixableErrorCount: 0,
        fixableWarningCount: 0
    },
    { filePath: 'src/components/PoiSelect.vue', messages: [], errorCount: 0, warningCount: 0, fixableErrorCount: 0, fixableWarningCount: 0 },
    {
        filePath: 'src/components/replenishment/repSkuTable.vue',
        messages: [
            {
                ruleId: 'no-unused-vars',
                severity: 1,
                message: "'format' is defined but never used.",
                line: 74,
                column: 5,
                nodeType: 'Identifier',
                endLine: 74,
                endColumn: 11,
                ruleIdUrl: 'https://eslint.org/docs/rules/no-unused-vars'
            },
            {
                ruleId: 'no-unused-vars',
                severity: 1,
                message: "'toLink' is defined but never used.",
                line: 76,
                column: 5,
                nodeType: 'Identifier',
                endLine: 76,
                endColumn: 11,
                ruleIdUrl: 'https://eslint.org/docs/rules/no-unused-vars'
            },
            {
                ruleId: 'no-unused-vars',
                severity: 1,
                message: "'e' is defined but never used.",
                line: 85,
                column: 50,
                nodeType: 'Identifier',
                endLine: 85,
                endColumn: 51,
                ruleIdUrl: 'https://eslint.org/docs/rules/no-unused-vars'
            },
            {
                ruleId: 'max-statements-per-line',
                severity: 2,
                message: 'This line has 2 statements. Maximum allowed is 1.',
                line: 182,
                column: 15,
                nodeType: 'IfStatement',
                messageId: 'exceed',
                endLine: 184,
                endColumn: 14,
                ruleIdUrl: 'https://eslint.org/docs/rules/max-statements-per-line'
            },
            {
                ruleId: 'eqeqeq',
                severity: 2,
                message: "Expected '!==' and instead saw '!='.",
                line: 207,
                column: 28,
                nodeType: 'BinaryExpression',
                messageId: 'unexpected',
                ruleIdUrl: 'https://eslint.org/docs/rules/eqeqeq'
            }
        ],
        errorCount: 2,
        warningCount: 3,
        fixableErrorCount: 0,
        fixableWarningCount: 0
    },
    {
        filePath: 'src/components/replenishment/scrollTable/index.vue',
        messages: [],
        errorCount: 0,
        warningCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0
    },
    {
        filePath: 'src/components/replenishment/SupplyAddFromSkuList.vue',
        messages: [
            {
                ruleId: 'array-callback-return',
                severity: 2,
                message: 'Expected to return a value at the end of arrow function.',
                line: 234,
                column: 64,
                nodeType: 'ArrowFunctionExpression',
                messageId: 'expectedAtEnd',
                ruleIdUrl: 'https://eslint.org/docs/rules/array-callback-return'
            },
            {
                ruleId: 'no-console',
                severity: 1,
                message: 'Unexpected console statement.',
                line: 256,
                column: 21,
                nodeType: 'MemberExpression',
                messageId: 'unexpected',
                endLine: 256,
                endColumn: 33,
                ruleIdUrl: 'https://eslint.org/docs/rules/no-console'
            }
        ],
        errorCount: 1,
        warningCount: 1,
        fixableErrorCount: 0,
        fixableWarningCount: 0
    }
];
