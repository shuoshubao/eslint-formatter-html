window.RulesMeta = {
    'accessor-pairs': {
        type: 'suggestion',
        docs: {
            description: 'enforce getter and setter pairs in objects',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/accessor-pairs'
        },
        schema: [
            {
                type: 'object',
                properties: { getWithoutSet: { type: 'boolean', default: false }, setWithoutGet: { type: 'boolean', default: true } },
                additionalProperties: false
            }
        ],
        messages: { getter: 'Getter is not present.', setter: 'Setter is not present.' }
    },
    'array-bracket-newline': {
        type: 'layout',
        docs: {
            description: 'enforce linebreaks after opening and before closing array brackets',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/array-bracket-newline'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never', 'consistent'] },
                    {
                        type: 'object',
                        properties: { multiline: { type: 'boolean' }, minItems: { type: ['integer', 'null'], minimum: 0 } },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: {
            unexpectedOpeningLinebreak: "There should be no linebreak after '['.",
            unexpectedClosingLinebreak: "There should be no linebreak before ']'.",
            missingOpeningLinebreak: "A linebreak is required after '['.",
            missingClosingLinebreak: "A linebreak is required before ']'."
        }
    },
    'array-bracket-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing inside array brackets',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/array-bracket-spacing'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['always', 'never'] },
            {
                type: 'object',
                properties: { singleValue: { type: 'boolean' }, objectsInArrays: { type: 'boolean' }, arraysInArrays: { type: 'boolean' } },
                additionalProperties: false
            }
        ],
        messages: {
            unexpectedSpaceAfter: "There should be no space after '{{tokenValue}}'.",
            unexpectedSpaceBefore: "There should be no space before '{{tokenValue}}'.",
            missingSpaceAfter: "A space is required after '{{tokenValue}}'.",
            missingSpaceBefore: "A space is required before '{{tokenValue}}'."
        }
    },
    'array-callback-return': {
        type: 'problem',
        docs: {
            description: 'enforce `return` statements in callbacks of array methods',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/array-callback-return'
        },
        schema: [{ type: 'object', properties: { allowImplicit: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: {
            expectedAtEnd: 'Expected to return a value at the end of {{name}}.',
            expectedInside: 'Expected to return a value in {{name}}.',
            expectedReturnValue: '{{name}} expected a return value.'
        }
    },
    'array-element-newline': {
        type: 'layout',
        docs: {
            description: 'enforce line breaks after each array element',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/array-element-newline'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never', 'consistent'] },
                    {
                        type: 'object',
                        properties: { multiline: { type: 'boolean' }, minItems: { type: ['integer', 'null'], minimum: 0 } },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: { unexpectedLineBreak: 'There should be no linebreak here.', missingLineBreak: 'There should be a linebreak after this element.' }
    },
    'arrow-body-style': {
        type: 'suggestion',
        docs: {
            description: 'require braces around arrow function bodies',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/arrow-body-style'
        },
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['always', 'never'] }], minItems: 0, maxItems: 1 },
                {
                    type: 'array',
                    items: [
                        { enum: ['as-needed'] },
                        { type: 'object', properties: { requireReturnForObjectLiteral: { type: 'boolean' } }, additionalProperties: false }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        fixable: 'code',
        messages: {
            unexpectedOtherBlock: 'Unexpected block statement surrounding arrow body.',
            unexpectedEmptyBlock: 'Unexpected block statement surrounding arrow body; put a value of `undefined` immediately after the `=>`.',
            unexpectedObjectBlock: 'Unexpected block statement surrounding arrow body; parenthesize the returned value and move it immediately after the `=>`.',
            unexpectedSingleBlock: 'Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.',
            expectedBlock: 'Expected block statement surrounding arrow body.'
        }
    },
    'arrow-parens': {
        type: 'layout',
        docs: {
            description: 'require parentheses around arrow function arguments',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/arrow-parens'
        },
        fixable: 'code',
        schema: [
            { enum: ['always', 'as-needed'] },
            { type: 'object', properties: { requireForBlockBody: { type: 'boolean', default: false } }, additionalProperties: false }
        ],
        messages: {
            unexpectedParens: 'Unexpected parentheses around single function argument.',
            expectedParens: 'Expected parentheses around arrow function argument.',
            unexpectedParensInline: 'Unexpected parentheses around single function argument having a body with no curly braces.',
            expectedParensBlock: 'Expected parentheses around arrow function argument having a body with curly braces.'
        }
    },
    'arrow-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before and after the arrow in arrow functions',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/arrow-spacing'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                additionalProperties: false
            }
        ],
        messages: {
            expectedBefore: 'Missing space before =>.',
            unexpectedBefore: 'Unexpected space before =>.',
            expectedAfter: 'Missing space after =>.',
            unexpectedAfter: 'Unexpected space after =>.'
        }
    },
    'block-scoped-var': {
        type: 'suggestion',
        docs: {
            description: 'enforce the use of variables within the scope they are defined',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/block-scoped-var'
        },
        schema: [],
        messages: { outOfScope: "'{{name}}' used outside of binding context." }
    },
    'block-spacing': {
        type: 'layout',
        docs: {
            description: 'disallow or enforce spaces inside of blocks after opening block and before closing block',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/block-spacing'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }],
        messages: { missing: "Requires a space {{location}} '{{token}}'.", extra: "Unexpected space(s) {{location}} '{{token}}'." }
    },
    'brace-style': {
        type: 'layout',
        docs: {
            description: 'enforce consistent brace style for blocks',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/brace-style'
        },
        schema: [
            { enum: ['1tbs', 'stroustrup', 'allman'] },
            { type: 'object', properties: { allowSingleLine: { type: 'boolean', default: false } }, additionalProperties: false }
        ],
        fixable: 'whitespace',
        messages: {
            nextLineOpen: 'Opening curly brace does not appear on the same line as controlling statement.',
            sameLineOpen: 'Opening curly brace appears on the same line as controlling statement.',
            blockSameLine: 'Statement inside of curly braces should be on next line.',
            nextLineClose: 'Closing curly brace does not appear on the same line as the subsequent block.',
            singleLineClose: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.',
            sameLineClose: 'Closing curly brace appears on the same line as the subsequent block.'
        }
    },
    'callback-return': {
        type: 'suggestion',
        docs: {
            description: 'require `return` statements after callbacks',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/callback-return'
        },
        schema: [{ type: 'array', items: { type: 'string' } }],
        messages: { missingReturn: 'Expected return with your callback function.' }
    },
    camelcase: {
        type: 'suggestion',
        docs: {
            description: 'enforce camelcase naming convention',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/camelcase'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreDestructuring: { type: 'boolean', default: false },
                    properties: { enum: ['always', 'never'] },
                    allow: { type: 'array', items: [{ type: 'string' }], minItems: 0, uniqueItems: true }
                },
                additionalProperties: false
            }
        ],
        messages: { notCamelCase: "Identifier '{{name}}' is not in camel case." }
    },
    'capitalized-comments': {
        type: 'suggestion',
        docs: {
            description: 'enforce or disallow capitalization of the first letter of a comment',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/capitalized-comments'
        },
        fixable: 'code',
        schema: [
            { enum: ['always', 'never'] },
            {
                oneOf: [
                    {
                        type: 'object',
                        properties: {
                            ignorePattern: { type: 'string' },
                            ignoreInlineComments: { type: 'boolean' },
                            ignoreConsecutiveComments: { type: 'boolean' }
                        },
                        additionalProperties: false
                    },
                    {
                        type: 'object',
                        properties: {
                            line: {
                                type: 'object',
                                properties: {
                                    ignorePattern: { type: 'string' },
                                    ignoreInlineComments: { type: 'boolean' },
                                    ignoreConsecutiveComments: { type: 'boolean' }
                                },
                                additionalProperties: false
                            },
                            block: {
                                type: 'object',
                                properties: {
                                    ignorePattern: { type: 'string' },
                                    ignoreInlineComments: { type: 'boolean' },
                                    ignoreConsecutiveComments: { type: 'boolean' }
                                },
                                additionalProperties: false
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: {
            unexpectedLowercaseComment: 'Comments should not begin with a lowercase character.',
            unexpectedUppercaseComment: 'Comments should not begin with an uppercase character.'
        }
    },
    'class-methods-use-this': {
        type: 'suggestion',
        docs: {
            description: 'enforce that class methods utilize `this`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/class-methods-use-this'
        },
        schema: [{ type: 'object', properties: { exceptMethods: { type: 'array', items: { type: 'string' } } }, additionalProperties: false }],
        messages: { missingThis: "Expected 'this' to be used by class method '{{name}}'." }
    },
    'comma-dangle': {
        type: 'layout',
        docs: {
            description: 'require or disallow trailing commas',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/comma-dangle'
        },
        fixable: 'code',
        schema: {
            definitions: {
                value: { enum: ['always-multiline', 'always', 'never', 'only-multiline'] },
                valueWithIgnore: { enum: ['always-multiline', 'always', 'ignore', 'never', 'only-multiline'] }
            },
            type: 'array',
            items: [
                {
                    oneOf: [
                        { $ref: '#/definitions/value' },
                        {
                            type: 'object',
                            properties: {
                                arrays: { $ref: '#/definitions/valueWithIgnore' },
                                objects: { $ref: '#/definitions/valueWithIgnore' },
                                imports: { $ref: '#/definitions/valueWithIgnore' },
                                exports: { $ref: '#/definitions/valueWithIgnore' },
                                functions: { $ref: '#/definitions/valueWithIgnore' }
                            },
                            additionalProperties: false
                        }
                    ]
                }
            ]
        },
        messages: { unexpected: 'Unexpected trailing comma.', missing: 'Missing trailing comma.' }
    },
    'comma-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before and after commas',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/comma-spacing'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: { before: { type: 'boolean', default: false }, after: { type: 'boolean', default: true } },
                additionalProperties: false
            }
        ],
        messages: { missing: "A space is required {{loc}} ','.", unexpected: "There should be no space {{loc}} ','." }
    },
    'comma-style': {
        type: 'layout',
        docs: {
            description: 'enforce consistent comma style',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/comma-style'
        },
        fixable: 'code',
        schema: [
            { enum: ['first', 'last'] },
            { type: 'object', properties: { exceptions: { type: 'object', additionalProperties: { type: 'boolean' } } }, additionalProperties: false }
        ],
        messages: {
            unexpectedLineBeforeAndAfterComma: "Bad line breaking before and after ','.",
            expectedCommaFirst: "',' should be placed first.",
            expectedCommaLast: "',' should be placed last."
        }
    },
    complexity: {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum cyclomatic complexity allowed in a program',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/complexity'
        },
        schema: [
            {
                oneOf: [
                    { type: 'integer', minimum: 0 },
                    {
                        type: 'object',
                        properties: { maximum: { type: 'integer', minimum: 0 }, max: { type: 'integer', minimum: 0 } },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: { complex: '{{name}} has a complexity of {{complexity}}.' }
    },
    'computed-property-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing inside computed property brackets',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/computed-property-spacing'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }],
        messages: {
            unexpectedSpaceBefore: "There should be no space before '{{tokenValue}}'.",
            unexpectedSpaceAfter: "There should be no space after '{{tokenValue}}'.",
            missingSpaceBefore: "A space is required before '{{tokenValue}}'.",
            missingSpaceAfter: "A space is required after '{{tokenValue}}'."
        }
    },
    'consistent-return': {
        type: 'suggestion',
        docs: {
            description: 'require `return` statements to either always or never specify values',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/consistent-return'
        },
        schema: [{ type: 'object', properties: { treatUndefinedAsUnspecified: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: {
            missingReturn: 'Expected to return a value at the end of {{name}}.',
            missingReturnValue: '{{name}} expected a return value.',
            unexpectedReturnValue: '{{name}} expected no return value.'
        }
    },
    'consistent-this': {
        type: 'suggestion',
        docs: {
            description: 'enforce consistent naming when capturing the current execution context',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/consistent-this'
        },
        schema: { type: 'array', items: { type: 'string', minLength: 1 }, uniqueItems: true },
        messages: {
            aliasNotAssignedToThis: "Designated alias '{{name}}' is not assigned to 'this'.",
            unexpectedAlias: "Unexpected alias '{{name}}' for 'this'."
        }
    },
    'constructor-super': {
        type: 'problem',
        docs: {
            description: 'require `super()` calls in constructors',
            category: 'ECMAScript 6',
            recommended: true,
            url: 'https://eslint.org/docs/rules/constructor-super'
        },
        schema: [],
        messages: {
            missingSome: "Lacked a call of 'super()' in some code paths.",
            missingAll: "Expected to call 'super()'.",
            duplicate: "Unexpected duplicate 'super()'.",
            badSuper: "Unexpected 'super()' because 'super' is not a constructor.",
            unexpected: "Unexpected 'super()'."
        }
    },
    curly: {
        type: 'suggestion',
        docs: {
            description: 'enforce consistent brace style for all control statements',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/curly'
        },
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['all'] }], minItems: 0, maxItems: 1 },
                { type: 'array', items: [{ enum: ['multi', 'multi-line', 'multi-or-nest'] }, { enum: ['consistent'] }], minItems: 0, maxItems: 2 }
            ]
        },
        fixable: 'code',
        messages: {
            missingCurlyAfter: "Expected { after '{{name}}'.",
            missingCurlyAfterCondition: "Expected { after '{{name}}' condition.",
            unexpectedCurlyAfter: "Unnecessary { after '{{name}}'.",
            unexpectedCurlyAfterCondition: "Unnecessary { after '{{name}}' condition."
        }
    },
    'default-case': {
        type: 'suggestion',
        docs: {
            description: 'require `default` cases in `switch` statements',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/default-case'
        },
        schema: [{ type: 'object', properties: { commentPattern: { type: 'string' } }, additionalProperties: false }],
        messages: { missingDefaultCase: 'Expected a default case.' }
    },
    'dot-location': {
        type: 'layout',
        docs: {
            description: 'enforce consistent newlines before and after dots',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/dot-location'
        },
        schema: [{ enum: ['object', 'property'] }],
        fixable: 'code',
        messages: {
            expectedDotAfterObject: 'Expected dot to be on same line as object.',
            expectedDotBeforeProperty: 'Expected dot to be on same line as property.'
        }
    },
    'dot-notation': {
        type: 'suggestion',
        docs: {
            description: 'enforce dot notation whenever possible',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/dot-notation'
        },
        schema: [
            {
                type: 'object',
                properties: { allowKeywords: { type: 'boolean', default: true }, allowPattern: { type: 'string', default: '' } },
                additionalProperties: false
            }
        ],
        fixable: 'code',
        messages: { useDot: '[{{key}}] is better written in dot notation.', useBrackets: '.{{key}} is a syntax error.' }
    },
    'eol-last': {
        type: 'layout',
        docs: {
            description: 'require or disallow newline at the end of files',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/eol-last'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never', 'unix', 'windows'] }],
        messages: { missing: 'Newline required at end of file but not found.', unexpected: 'Newline not allowed at end of file.' }
    },
    eqeqeq: {
        type: 'suggestion',
        docs: {
            description: 'require the use of `===` and `!==`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/eqeqeq'
        },
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        { enum: ['always'] },
                        { type: 'object', properties: { null: { enum: ['always', 'never', 'ignore'] } }, additionalProperties: false }
                    ],
                    additionalItems: false
                },
                { type: 'array', items: [{ enum: ['smart', 'allow-null'] }], additionalItems: false }
            ]
        },
        fixable: 'code',
        messages: { unexpected: "Expected '{{expectedOperator}}' and instead saw '{{actualOperator}}'." }
    },
    'for-direction': {
        type: 'problem',
        docs: {
            description: 'enforce "for" loop update clause moving the counter in the right direction.',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/for-direction'
        },
        fixable: null,
        schema: [],
        messages: { incorrectDirection: 'The update clause in this loop moves the variable in the wrong direction.' }
    },
    'func-call-spacing': {
        type: 'layout',
        docs: {
            description: 'require or disallow spacing between function identifiers and their invocations',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/func-call-spacing'
        },
        fixable: 'whitespace',
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['never'] }], minItems: 0, maxItems: 1 },
                {
                    type: 'array',
                    items: [{ enum: ['always'] }, { type: 'object', properties: { allowNewlines: { type: 'boolean' } }, additionalProperties: false }],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        messages: { unexpected: 'Unexpected newline between function name and paren.', missing: 'Missing space between function name and paren.' }
    },
    'func-name-matching': {
        type: 'suggestion',
        docs: {
            description: 'require function names to match the name of the variable or property to which they are assigned',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/func-name-matching'
        },
        schema: {
            anyOf: [
                {
                    type: 'array',
                    additionalItems: false,
                    items: [
                        { enum: ['always', 'never'] },
                        {
                            type: 'object',
                            properties: { considerPropertyDescriptor: { type: 'boolean' }, includeCommonJSModuleExports: { type: 'boolean' } },
                            additionalProperties: false
                        }
                    ]
                },
                {
                    type: 'array',
                    additionalItems: false,
                    items: [
                        {
                            type: 'object',
                            properties: { considerPropertyDescriptor: { type: 'boolean' }, includeCommonJSModuleExports: { type: 'boolean' } },
                            additionalProperties: false
                        }
                    ]
                }
            ]
        },
        messages: {
            matchProperty: 'Function name `{{funcName}}` should match property name `{{name}}`.',
            matchVariable: 'Function name `{{funcName}}` should match variable name `{{name}}`.',
            notMatchProperty: 'Function name `{{funcName}}` should not match property name `{{name}}`.',
            notMatchVariable: 'Function name `{{funcName}}` should not match variable name `{{name}}`.'
        }
    },
    'func-names': {
        type: 'suggestion',
        docs: {
            description: 'require or disallow named `function` expressions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/func-names'
        },
        schema: {
            definitions: { value: { enum: ['always', 'as-needed', 'never'] } },
            items: [
                { $ref: '#/definitions/value' },
                { type: 'object', properties: { generators: { $ref: '#/definitions/value' } }, additionalProperties: false }
            ]
        },
        messages: { unnamed: 'Unexpected unnamed {{name}}.', named: 'Unexpected named {{name}}.' }
    },
    'func-style': {
        type: 'suggestion',
        docs: {
            description: 'enforce the consistent use of either `function` declarations or expressions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/func-style'
        },
        schema: [
            { enum: ['declaration', 'expression'] },
            { type: 'object', properties: { allowArrowFunctions: { type: 'boolean', default: false } }, additionalProperties: false }
        ],
        messages: { expression: 'Expected a function expression.', declaration: 'Expected a function declaration.' }
    },
    'function-paren-newline': {
        type: 'layout',
        docs: {
            description: 'enforce consistent line breaks inside function parentheses',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/function-paren-newline'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never', 'consistent', 'multiline'] },
                    { type: 'object', properties: { minItems: { type: 'integer', minimum: 0 } }, additionalProperties: false }
                ]
            }
        ],
        messages: {
            expectedBefore: "Expected newline before ')'.",
            expectedAfter: "Expected newline after '('.",
            unexpectedBefore: "Unexpected newline before '('.",
            unexpectedAfter: "Unexpected newline after ')'."
        }
    },
    'generator-star-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing around `*` operators in generator functions',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/generator-star-spacing'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['before', 'after', 'both', 'neither'] },
                    {
                        type: 'object',
                        properties: {
                            before: { type: 'boolean' },
                            after: { type: 'boolean' },
                            named: {
                                oneOf: [
                                    { enum: ['before', 'after', 'both', 'neither'] },
                                    { type: 'object', properties: { before: { type: 'boolean' }, after: { type: 'boolean' } }, additionalProperties: false }
                                ]
                            },
                            anonymous: {
                                oneOf: [
                                    { enum: ['before', 'after', 'both', 'neither'] },
                                    { type: 'object', properties: { before: { type: 'boolean' }, after: { type: 'boolean' } }, additionalProperties: false }
                                ]
                            },
                            method: {
                                oneOf: [
                                    { enum: ['before', 'after', 'both', 'neither'] },
                                    { type: 'object', properties: { before: { type: 'boolean' }, after: { type: 'boolean' } }, additionalProperties: false }
                                ]
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: {
            missingBefore: 'Missing space before *.',
            missingAfter: 'Missing space after *.',
            unexpectedBefore: 'Unexpected space before *.',
            unexpectedAfter: 'Unexpected space after *.'
        }
    },
    'getter-return': {
        type: 'problem',
        docs: {
            description: 'enforce `return` statements in getters',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/getter-return'
        },
        fixable: null,
        schema: [{ type: 'object', properties: { allowImplicit: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: { expected: 'Expected to return a value in {{name}}.', expectedAlways: 'Expected {{name}} to always return a value.' }
    },
    'global-require': {
        type: 'suggestion',
        docs: {
            description: 'require `require()` calls to be placed at top-level module scope',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/global-require'
        },
        schema: [],
        messages: { unexpected: 'Unexpected require().' }
    },
    'guard-for-in': {
        type: 'suggestion',
        docs: {
            description: 'require `for-in` loops to include an `if` statement',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/guard-for-in'
        },
        schema: [],
        messages: { wrap: 'The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.' }
    },
    'handle-callback-err': {
        type: 'suggestion',
        docs: {
            description: 'require error handling in callbacks',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/handle-callback-err'
        },
        schema: [{ type: 'string' }],
        messages: { expected: 'Expected error to be handled.' }
    },
    'id-blacklist': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified identifiers',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/id-blacklist'
        },
        schema: { type: 'array', items: { type: 'string' }, uniqueItems: true },
        messages: { blacklisted: "Identifier '{{name}}' is blacklisted." }
    },
    'id-length': {
        type: 'suggestion',
        docs: {
            description: 'enforce minimum and maximum identifier lengths',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/id-length'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    min: { type: 'integer', default: 2 },
                    max: { type: 'integer' },
                    exceptions: { type: 'array', uniqueItems: true, items: { type: 'string' } },
                    properties: { enum: ['always', 'never'] }
                },
                additionalProperties: false
            }
        ],
        messages: { tooShort: "Identifier name '{{name}}' is too short (< {{min}}).", tooLong: "Identifier name '{{name}}' is too long (> {{max}})." }
    },
    'id-match': {
        type: 'suggestion',
        docs: {
            description: 'require identifiers to match a specified regular expression',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/id-match'
        },
        schema: [
            { type: 'string' },
            {
                type: 'object',
                properties: {
                    properties: { type: 'boolean', default: false },
                    onlyDeclarations: { type: 'boolean', default: false },
                    ignoreDestructuring: { type: 'boolean', default: false }
                }
            }
        ],
        messages: { notMatch: "Identifier '{{name}}' does not match the pattern '{{pattern}}'." }
    },
    'implicit-arrow-linebreak': {
        type: 'layout',
        docs: {
            description: 'enforce the location of arrow function bodies',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/implicit-arrow-linebreak'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['beside', 'below'] }],
        messages: { expected: 'Expected a linebreak before this expression.', unexpected: 'Expected no linebreak before this expression.' }
    },
    indent: {
        type: 'layout',
        docs: { description: 'enforce consistent indentation', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/indent' },
        fixable: 'whitespace',
        schema: [
            { oneOf: [{ enum: ['tab'] }, { type: 'integer', minimum: 0 }] },
            {
                type: 'object',
                properties: {
                    SwitchCase: { type: 'integer', minimum: 0, default: 0 },
                    VariableDeclarator: {
                        oneOf: [
                            { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                            {
                                type: 'object',
                                properties: {
                                    var: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                                    let: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                                    const: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] }
                                },
                                additionalProperties: false
                            }
                        ]
                    },
                    outerIIFEBody: { type: 'integer', minimum: 0 },
                    MemberExpression: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['off'] }] },
                    FunctionDeclaration: {
                        type: 'object',
                        properties: {
                            parameters: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                            body: { type: 'integer', minimum: 0 }
                        },
                        additionalProperties: false
                    },
                    FunctionExpression: {
                        type: 'object',
                        properties: {
                            parameters: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                            body: { type: 'integer', minimum: 0 }
                        },
                        additionalProperties: false
                    },
                    CallExpression: {
                        type: 'object',
                        properties: { arguments: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] } },
                        additionalProperties: false
                    },
                    ArrayExpression: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                    ObjectExpression: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                    ImportDeclaration: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first', 'off'] }] },
                    flatTernaryExpressions: { type: 'boolean', default: false },
                    ignoredNodes: { type: 'array', items: { type: 'string', not: { pattern: ':exit$' } } },
                    ignoreComments: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ],
        messages: { wrongIndentation: 'Expected indentation of {{expected}} but found {{actual}}.' }
    },
    'indent-legacy': {
        type: 'layout',
        docs: {
            description: 'enforce consistent indentation',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/indent-legacy'
        },
        deprecated: true,
        replacedBy: ['indent'],
        fixable: 'whitespace',
        schema: [
            { oneOf: [{ enum: ['tab'] }, { type: 'integer', minimum: 0 }] },
            {
                type: 'object',
                properties: {
                    SwitchCase: { type: 'integer', minimum: 0 },
                    VariableDeclarator: {
                        oneOf: [
                            { type: 'integer', minimum: 0 },
                            {
                                type: 'object',
                                properties: {
                                    var: { type: 'integer', minimum: 0 },
                                    let: { type: 'integer', minimum: 0 },
                                    const: { type: 'integer', minimum: 0 }
                                }
                            }
                        ]
                    },
                    outerIIFEBody: { type: 'integer', minimum: 0 },
                    MemberExpression: { type: 'integer', minimum: 0 },
                    FunctionDeclaration: {
                        type: 'object',
                        properties: { parameters: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first'] }] }, body: { type: 'integer', minimum: 0 } }
                    },
                    FunctionExpression: {
                        type: 'object',
                        properties: { parameters: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first'] }] }, body: { type: 'integer', minimum: 0 } }
                    },
                    CallExpression: { type: 'object', properties: { parameters: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first'] }] } } },
                    ArrayExpression: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first'] }] },
                    ObjectExpression: { oneOf: [{ type: 'integer', minimum: 0 }, { enum: ['first'] }] }
                },
                additionalProperties: false
            }
        ],
        messages: { expected: 'Expected indentation of {{expected}} but found {{actual}}.' }
    },
    'init-declarations': {
        type: 'suggestion',
        docs: {
            description: 'require or disallow initialization in variable declarations',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/init-declarations'
        },
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['always'] }], minItems: 0, maxItems: 1 },
                {
                    type: 'array',
                    items: [{ enum: ['never'] }, { type: 'object', properties: { ignoreForLoopInit: { type: 'boolean' } }, additionalProperties: false }],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        messages: {
            initialized: "Variable '{{idName}}' should be initialized on declaration.",
            notInitialized: "Variable '{{idName}}' should not be initialized on declaration."
        }
    },
    'jsx-quotes': {
        type: 'layout',
        docs: {
            description: 'enforce the consistent use of either double or single quotes in JSX attributes',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/jsx-quotes'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['prefer-single', 'prefer-double'] }],
        messages: { unexpected: 'Unexpected usage of {{description}}.' }
    },
    'key-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing between keys and values in object literal properties',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/key-spacing'
        },
        fixable: 'whitespace',
        schema: [
            {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            align: {
                                anyOf: [
                                    { enum: ['colon', 'value'] },
                                    {
                                        type: 'object',
                                        properties: {
                                            mode: { enum: ['strict', 'minimum'] },
                                            on: { enum: ['colon', 'value'] },
                                            beforeColon: { type: 'boolean' },
                                            afterColon: { type: 'boolean' }
                                        },
                                        additionalProperties: false
                                    }
                                ]
                            },
                            mode: { enum: ['strict', 'minimum'] },
                            beforeColon: { type: 'boolean' },
                            afterColon: { type: 'boolean' }
                        },
                        additionalProperties: false
                    },
                    {
                        type: 'object',
                        properties: {
                            singleLine: {
                                type: 'object',
                                properties: { mode: { enum: ['strict', 'minimum'] }, beforeColon: { type: 'boolean' }, afterColon: { type: 'boolean' } },
                                additionalProperties: false
                            },
                            multiLine: {
                                type: 'object',
                                properties: {
                                    align: {
                                        anyOf: [
                                            { enum: ['colon', 'value'] },
                                            {
                                                type: 'object',
                                                properties: {
                                                    mode: { enum: ['strict', 'minimum'] },
                                                    on: { enum: ['colon', 'value'] },
                                                    beforeColon: { type: 'boolean' },
                                                    afterColon: { type: 'boolean' }
                                                },
                                                additionalProperties: false
                                            }
                                        ]
                                    },
                                    mode: { enum: ['strict', 'minimum'] },
                                    beforeColon: { type: 'boolean' },
                                    afterColon: { type: 'boolean' }
                                },
                                additionalProperties: false
                            }
                        },
                        additionalProperties: false
                    },
                    {
                        type: 'object',
                        properties: {
                            singleLine: {
                                type: 'object',
                                properties: { mode: { enum: ['strict', 'minimum'] }, beforeColon: { type: 'boolean' }, afterColon: { type: 'boolean' } },
                                additionalProperties: false
                            },
                            multiLine: {
                                type: 'object',
                                properties: { mode: { enum: ['strict', 'minimum'] }, beforeColon: { type: 'boolean' }, afterColon: { type: 'boolean' } },
                                additionalProperties: false
                            },
                            align: {
                                type: 'object',
                                properties: {
                                    mode: { enum: ['strict', 'minimum'] },
                                    on: { enum: ['colon', 'value'] },
                                    beforeColon: { type: 'boolean' },
                                    afterColon: { type: 'boolean' }
                                },
                                additionalProperties: false
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: {
            extraKey: "Extra space after {{computed}}key '{{key}}'.",
            extraValue: "Extra space before value for {{computed}}key '{{key}}'.",
            missingKey: "Missing space after {{computed}}key '{{key}}'.",
            missingValue: "Missing space before value for {{computed}}key '{{key}}'."
        }
    },
    'keyword-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before and after keywords',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/keyword-spacing'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    before: { type: 'boolean', default: true },
                    after: { type: 'boolean', default: true },
                    overrides: {
                        type: 'object',
                        properties: {
                            abstract: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            as: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            async: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            await: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            boolean: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            break: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            byte: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            case: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            catch: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            char: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            class: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            const: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            continue: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            debugger: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            default: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            delete: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            do: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            double: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            else: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            enum: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            export: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            extends: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            false: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            final: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            finally: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            float: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            for: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            from: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            function: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            get: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            goto: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            if: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            implements: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            import: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            in: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            instanceof: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            int: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            interface: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            let: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            long: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            native: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            new: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            null: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            of: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            package: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            private: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            protected: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            public: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            return: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            set: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            short: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            static: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            super: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            switch: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            synchronized: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            this: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            throw: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            throws: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            transient: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            true: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            try: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            typeof: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            var: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            void: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            volatile: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            while: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            with: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            },
                            yield: {
                                type: 'object',
                                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                                additionalProperties: false
                            }
                        },
                        additionalProperties: false
                    }
                },
                additionalProperties: false
            }
        ],
        messages: {
            expectedBefore: 'Expected space(s) before "{{value}}".',
            expectedAfter: 'Expected space(s) after "{{value}}".',
            unexpectedBefore: 'Unexpected space(s) before "{{value}}".',
            unexpectedAfter: 'Unexpected space(s) after "{{value}}".'
        }
    },
    'line-comment-position': {
        type: 'layout',
        docs: {
            description: 'enforce position of line comments',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/line-comment-position'
        },
        schema: [
            {
                oneOf: [
                    { enum: ['above', 'beside'] },
                    {
                        type: 'object',
                        properties: {
                            position: { enum: ['above', 'beside'], default: 'above' },
                            ignorePattern: { type: 'string' },
                            applyDefaultPatterns: { type: 'boolean' },
                            applyDefaultIgnorePatterns: { type: 'boolean' }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: { above: 'Expected comment to be above code.', beside: 'Expected comment to be beside code.' }
    },
    'linebreak-style': {
        type: 'layout',
        docs: {
            description: 'enforce consistent linebreak style',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/linebreak-style'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['unix', 'windows'] }],
        messages: { expectedLF: "Expected linebreaks to be 'LF' but found 'CRLF'.", expectedCRLF: "Expected linebreaks to be 'CRLF' but found 'LF'." }
    },
    'lines-around-comment': {
        type: 'layout',
        docs: {
            description: 'require empty lines around comments',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/lines-around-comment'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    beforeBlockComment: { type: 'boolean', default: true },
                    afterBlockComment: { type: 'boolean', default: false },
                    beforeLineComment: { type: 'boolean', default: false },
                    afterLineComment: { type: 'boolean', default: false },
                    allowBlockStart: { type: 'boolean', default: false },
                    allowBlockEnd: { type: 'boolean', default: false },
                    allowClassStart: { type: 'boolean' },
                    allowClassEnd: { type: 'boolean' },
                    allowObjectStart: { type: 'boolean' },
                    allowObjectEnd: { type: 'boolean' },
                    allowArrayStart: { type: 'boolean' },
                    allowArrayEnd: { type: 'boolean' },
                    ignorePattern: { type: 'string' },
                    applyDefaultIgnorePatterns: { type: 'boolean' }
                },
                additionalProperties: false
            }
        ],
        messages: { after: 'Expected line after comment.', before: 'Expected line before comment.' }
    },
    'lines-around-directive': {
        type: 'layout',
        docs: {
            description: 'require or disallow newlines around directives',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/lines-around-directive'
        },
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never'] },
                    {
                        type: 'object',
                        properties: { before: { enum: ['always', 'never'] }, after: { enum: ['always', 'never'] } },
                        additionalProperties: false,
                        minProperties: 2
                    }
                ]
            }
        ],
        fixable: 'whitespace',
        messages: { expected: 'Expected newline {{location}} "{{value}}" directive.', unexpected: 'Unexpected newline {{location}} "{{value}}" directive.' },
        deprecated: true,
        replacedBy: ['padding-line-between-statements']
    },
    'lines-between-class-members': {
        type: 'layout',
        docs: {
            description: 'require or disallow an empty line between class members',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/lines-between-class-members'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['always', 'never'] },
            { type: 'object', properties: { exceptAfterSingleLine: { type: 'boolean', default: false } }, additionalProperties: false }
        ],
        messages: { never: 'Unexpected blank line between class members.', always: 'Expected blank line between class members.' }
    },
    'max-classes-per-file': {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum number of classes per file',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-classes-per-file'
        },
        schema: [{ type: 'integer', minimum: 1 }],
        messages: { maximumExceeded: 'Number of classes per file must not exceed {{ max }}.' }
    },
    'max-depth': {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum depth that blocks can be nested',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-depth'
        },
        schema: [
            {
                oneOf: [
                    { type: 'integer', minimum: 0 },
                    {
                        type: 'object',
                        properties: { maximum: { type: 'integer', minimum: 0 }, max: { type: 'integer', minimum: 0 } },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: { tooDeeply: 'Blocks are nested too deeply ({{depth}}).' }
    },
    'max-len': {
        type: 'layout',
        docs: { description: 'enforce a maximum line length', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/max-len' },
        schema: [
            {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            code: { type: 'integer', minimum: 0, default: 80 },
                            comments: { type: 'integer', minimum: 0 },
                            tabWidth: { type: 'integer', minimum: 0, default: 4 },
                            ignorePattern: { type: 'string' },
                            ignoreComments: { type: 'boolean', default: false },
                            ignoreStrings: { type: 'boolean', default: false },
                            ignoreUrls: { type: 'boolean', default: false },
                            ignoreTemplateLiterals: { type: 'boolean', default: false },
                            ignoreRegExpLiterals: { type: 'boolean', default: false },
                            ignoreTrailingComments: { type: 'boolean', default: false }
                        },
                        additionalProperties: false
                    },
                    { type: 'integer', minimum: 0 }
                ]
            },
            {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            code: { type: 'integer', minimum: 0, default: 80 },
                            comments: { type: 'integer', minimum: 0 },
                            tabWidth: { type: 'integer', minimum: 0, default: 4 },
                            ignorePattern: { type: 'string' },
                            ignoreComments: { type: 'boolean', default: false },
                            ignoreStrings: { type: 'boolean', default: false },
                            ignoreUrls: { type: 'boolean', default: false },
                            ignoreTemplateLiterals: { type: 'boolean', default: false },
                            ignoreRegExpLiterals: { type: 'boolean', default: false },
                            ignoreTrailingComments: { type: 'boolean', default: false }
                        },
                        additionalProperties: false
                    },
                    { type: 'integer', minimum: 0 }
                ]
            },
            {
                type: 'object',
                properties: {
                    code: { type: 'integer', minimum: 0, default: 80 },
                    comments: { type: 'integer', minimum: 0 },
                    tabWidth: { type: 'integer', minimum: 0, default: 4 },
                    ignorePattern: { type: 'string' },
                    ignoreComments: { type: 'boolean', default: false },
                    ignoreStrings: { type: 'boolean', default: false },
                    ignoreUrls: { type: 'boolean', default: false },
                    ignoreTemplateLiterals: { type: 'boolean', default: false },
                    ignoreRegExpLiterals: { type: 'boolean', default: false },
                    ignoreTrailingComments: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ],
        messages: {
            max: 'Line {{lineNumber}} exceeds the maximum line length of {{maxLength}}.',
            maxComment: 'Line {{lineNumber}} exceeds the maximum comment line length of {{maxCommentLength}}.'
        }
    },
    'max-lines': {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum number of lines per file',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-lines'
        },
        schema: [
            {
                oneOf: [
                    { type: 'integer', minimum: 0 },
                    {
                        type: 'object',
                        properties: { max: { type: 'integer', minimum: 0 }, skipComments: { type: 'boolean' }, skipBlankLines: { type: 'boolean' } },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: { exceed: "File must be at most {{max}} lines long. It's {{actual}} lines long." }
    },
    'max-lines-per-function': {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum number of line of code in a function',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-lines-per-function'
        },
        schema: [
            {
                oneOf: [
                    {
                        type: 'object',
                        properties: {
                            max: { type: 'integer', minimum: 0, default: 50 },
                            skipComments: { type: 'boolean', default: false },
                            skipBlankLines: { type: 'boolean', default: false },
                            IIFEs: { type: 'boolean', default: false }
                        },
                        additionalProperties: false
                    },
                    { type: 'integer', minimum: 1 }
                ]
            }
        ],
        messages: { exceed: '{{name}} has too many lines ({{lineCount}}). Maximum allowed is {{maxLines}}.' }
    },
    'max-nested-callbacks': {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum depth that callbacks can be nested',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-nested-callbacks'
        },
        schema: [
            {
                oneOf: [
                    { type: 'integer', minimum: 0 },
                    {
                        type: 'object',
                        properties: { maximum: { type: 'integer', minimum: 0 }, max: { type: 'integer', minimum: 0 } },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: { exceed: 'Too many nested callbacks ({{num}}). Maximum allowed is {{max}}.' }
    },
    'max-params': {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum number of parameters in function definitions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-params'
        },
        schema: [
            {
                oneOf: [
                    { type: 'integer', minimum: 0 },
                    {
                        type: 'object',
                        properties: { maximum: { type: 'integer', minimum: 0 }, max: { type: 'integer', minimum: 0 } },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: { exceed: '{{name}} has too many parameters ({{count}}). Maximum allowed is {{max}}.' }
    },
    'max-statements': {
        type: 'suggestion',
        docs: {
            description: 'enforce a maximum number of statements allowed in function blocks',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-statements'
        },
        schema: [
            {
                oneOf: [
                    { type: 'integer', minimum: 0 },
                    {
                        type: 'object',
                        properties: { maximum: { type: 'integer', minimum: 0 }, max: { type: 'integer', minimum: 0 } },
                        additionalProperties: false
                    }
                ]
            },
            { type: 'object', properties: { ignoreTopLevelFunctions: { type: 'boolean' } }, additionalProperties: false }
        ],
        messages: { exceed: '{{name}} has too many statements ({{count}}). Maximum allowed is {{max}}.' }
    },
    'max-statements-per-line': {
        type: 'layout',
        docs: {
            description: 'enforce a maximum number of statements allowed per line',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/max-statements-per-line'
        },
        schema: [{ type: 'object', properties: { max: { type: 'integer', minimum: 1, default: 1 } }, additionalProperties: false }],
        messages: { exceed: 'This line has {{numberOfStatementsOnThisLine}} {{statements}}. Maximum allowed is {{maxStatementsPerLine}}.' }
    },
    'multiline-comment-style': {
        type: 'suggestion',
        docs: {
            description: 'enforce a particular style for multiline comments',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/multiline-comment-style'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['starred-block', 'separate-lines', 'bare-block'] }],
        messages: {
            expectedBlock: 'Expected a block comment instead of consecutive line comments.',
            startNewline: "Expected a linebreak after '/*'.",
            endNewline: "Expected a linebreak before '*/'.",
            missingStar: "Expected a '*' at the start of this line.",
            alignment: 'Expected this line to be aligned with the start of the comment.',
            expectedLines: 'Expected multiple line comments instead of a block comment.'
        }
    },
    'multiline-ternary': {
        type: 'layout',
        docs: {
            description: 'enforce newlines between operands of ternary expressions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/multiline-ternary'
        },
        schema: [{ enum: ['always', 'always-multiline', 'never'] }],
        messages: {
            expectedTestCons: 'Expected newline between test and consequent of ternary expression.',
            expectedConsAlt: 'Expected newline between consequent and alternate of ternary expression.',
            unexpectedTestCons: 'Unexpected newline between test and consequent of ternary expression.',
            unexpectedConsAlt: 'Unexpected newline between consequent and alternate of ternary expression.'
        }
    },
    'new-cap': {
        type: 'suggestion',
        docs: {
            description: 'require constructor names to begin with a capital letter',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/new-cap'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    newIsCap: { type: 'boolean', default: true },
                    capIsNew: { type: 'boolean', default: true },
                    newIsCapExceptions: { type: 'array', items: { type: 'string' } },
                    newIsCapExceptionPattern: { type: 'string' },
                    capIsNewExceptions: { type: 'array', items: { type: 'string' } },
                    capIsNewExceptionPattern: { type: 'string' },
                    properties: { type: 'boolean', default: true }
                },
                additionalProperties: false
            }
        ],
        messages: {
            upper: 'A function with a name starting with an uppercase letter should only be used as a constructor.',
            lower: 'A constructor name should not start with a lowercase letter.'
        }
    },
    'new-parens': {
        type: 'layout',
        docs: {
            description: 'require parentheses when invoking a constructor with no arguments',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/new-parens'
        },
        fixable: 'code',
        schema: [],
        messages: { missing: "Missing '()' invoking a constructor." }
    },
    'newline-after-var': {
        type: 'layout',
        docs: {
            description: 'require or disallow an empty line after variable declarations',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/newline-after-var'
        },
        schema: [{ enum: ['never', 'always'] }],
        fixable: 'whitespace',
        messages: { expected: 'Expected blank line after variable declarations.', unexpected: 'Unexpected blank line after variable declarations.' },
        deprecated: true,
        replacedBy: ['padding-line-between-statements']
    },
    'newline-before-return': {
        type: 'layout',
        docs: {
            description: 'require an empty line before `return` statements',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/newline-before-return'
        },
        fixable: 'whitespace',
        schema: [],
        messages: { expected: 'Expected newline before return statement.' },
        deprecated: true,
        replacedBy: ['padding-line-between-statements']
    },
    'newline-per-chained-call': {
        type: 'layout',
        docs: {
            description: 'require a newline after each call in a method chain',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/newline-per-chained-call'
        },
        fixable: 'whitespace',
        schema: [
            { type: 'object', properties: { ignoreChainWithDepth: { type: 'integer', minimum: 1, maximum: 10, default: 2 } }, additionalProperties: false }
        ],
        messages: { expected: 'Expected line break before `{{callee}}`.' }
    },
    'no-alert': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of `alert`, `confirm`, and `prompt`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-alert'
        },
        schema: [],
        messages: { unexpected: 'Unexpected {{name}}.' }
    },
    'no-array-constructor': {
        type: 'suggestion',
        docs: {
            description: 'disallow `Array` constructors',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-array-constructor'
        },
        schema: [],
        messages: { preferLiteral: 'The array literal notation [] is preferable.' }
    },
    'no-async-promise-executor': {
        type: 'problem',
        docs: {
            description: 'disallow using an async function as a Promise executor',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-async-promise-executor'
        },
        fixable: null,
        schema: [],
        messages: { async: 'Promise executor functions should not be async.' }
    },
    'no-await-in-loop': {
        type: 'problem',
        docs: {
            description: 'disallow `await` inside of loops',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-await-in-loop'
        },
        schema: [],
        messages: { unexpectedAwait: 'Unexpected `await` inside a loop.' }
    },
    'no-bitwise': {
        type: 'suggestion',
        docs: { description: 'disallow bitwise operators', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/no-bitwise' },
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        items: { enum: ['^', '|', '&', '<<', '>>', '>>>', '^=', '|=', '&=', '<<=', '>>=', '>>>=', '~'] },
                        uniqueItems: true
                    },
                    int32Hint: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ],
        messages: { unexpected: "Unexpected use of '{{operator}}'." }
    },
    'no-buffer-constructor': {
        type: 'problem',
        docs: {
            description: 'disallow use of the `Buffer()` constructor',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-buffer-constructor'
        },
        schema: [],
        messages: { deprecated: '{{expr}} is deprecated. Use Buffer.from(), Buffer.alloc(), or Buffer.allocUnsafe() instead.' }
    },
    'no-caller': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of `arguments.caller` or `arguments.callee`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-caller'
        },
        schema: [],
        messages: { unexpected: 'Avoid arguments.{{prop}}.' }
    },
    'no-case-declarations': {
        type: 'suggestion',
        docs: {
            description: 'disallow lexical declarations in case clauses',
            category: 'Best Practices',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-case-declarations'
        },
        schema: [],
        messages: { unexpected: 'Unexpected lexical declaration in case block.' }
    },
    'no-catch-shadow': {
        type: 'suggestion',
        docs: {
            description: 'disallow `catch` clause parameters from shadowing variables in the outer scope',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-catch-shadow'
        },
        replacedBy: ['no-shadow'],
        deprecated: true,
        schema: [],
        messages: { mutable: "Value of '{{name}}' may be overwritten in IE 8 and earlier." }
    },
    'no-class-assign': {
        type: 'problem',
        docs: {
            description: 'disallow reassigning class members',
            category: 'ECMAScript 6',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-class-assign'
        },
        schema: [],
        messages: { class: "'{{name}}' is a class." }
    },
    'no-compare-neg-zero': {
        type: 'problem',
        docs: {
            description: 'disallow comparing against -0',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-compare-neg-zero'
        },
        fixable: null,
        schema: [],
        messages: { unexpected: "Do not use the '{{operator}}' operator to compare against -0." }
    },
    'no-cond-assign': {
        type: 'problem',
        docs: {
            description: 'disallow assignment operators in conditional expressions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-cond-assign'
        },
        schema: [{ enum: ['except-parens', 'always'] }],
        messages: { unexpected: 'Unexpected assignment within {{type}}.', missing: 'Expected a conditional expression and instead saw an assignment.' }
    },
    'no-confusing-arrow': {
        type: 'suggestion',
        docs: {
            description: 'disallow arrow functions where they could be confused with comparisons',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-confusing-arrow'
        },
        fixable: 'code',
        schema: [{ type: 'object', properties: { allowParens: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: { confusing: 'Arrow function used ambiguously with a conditional expression.' }
    },
    'no-console': {
        type: 'suggestion',
        docs: { description: 'disallow the use of `console`', category: 'Possible Errors', recommended: true, url: 'https://eslint.org/docs/rules/no-console' },
        schema: [
            { type: 'object', properties: { allow: { type: 'array', items: { type: 'string' }, minItems: 1, uniqueItems: true } }, additionalProperties: false }
        ],
        messages: { unexpected: 'Unexpected console statement.' }
    },
    'no-const-assign': {
        type: 'problem',
        docs: {
            description: 'disallow reassigning `const` variables',
            category: 'ECMAScript 6',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-const-assign'
        },
        schema: [],
        messages: { const: "'{{name}}' is constant." }
    },
    'no-constant-condition': {
        type: 'problem',
        docs: {
            description: 'disallow constant expressions in conditions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-constant-condition'
        },
        schema: [{ type: 'object', properties: { checkLoops: { type: 'boolean', default: true } }, additionalProperties: false }],
        messages: { unexpected: 'Unexpected constant condition.' }
    },
    'no-continue': {
        type: 'suggestion',
        docs: {
            description: 'disallow `continue` statements',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-continue'
        },
        schema: [],
        messages: { unexpected: 'Unexpected use of continue statement.' }
    },
    'no-control-regex': {
        type: 'problem',
        docs: {
            description: 'disallow control characters in regular expressions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-control-regex'
        },
        schema: [],
        messages: { unexpected: 'Unexpected control character(s) in regular expression: {{controlChars}}.' }
    },
    'no-debugger': {
        type: 'problem',
        docs: {
            description: 'disallow the use of `debugger`',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-debugger'
        },
        fixable: null,
        schema: [],
        messages: { unexpected: "Unexpected 'debugger' statement." }
    },
    'no-delete-var': {
        type: 'suggestion',
        docs: { description: 'disallow deleting variables', category: 'Variables', recommended: true, url: 'https://eslint.org/docs/rules/no-delete-var' },
        schema: [],
        messages: { unexpected: 'Variables should not be deleted.' }
    },
    'no-div-regex': {
        type: 'suggestion',
        docs: {
            description: 'disallow division operators explicitly at the beginning of regular expressions',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-div-regex'
        },
        schema: [],
        messages: { unexpected: "A regular expression literal can be confused with '/='." }
    },
    'no-dupe-args': {
        type: 'problem',
        docs: {
            description: 'disallow duplicate arguments in `function` definitions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-dupe-args'
        },
        schema: [],
        messages: { unexpected: "Duplicate param '{{name}}'." }
    },
    'no-dupe-class-members': {
        type: 'problem',
        docs: {
            description: 'disallow duplicate class members',
            category: 'ECMAScript 6',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-dupe-class-members'
        },
        schema: [],
        messages: { unexpected: "Duplicate name '{{name}}'." }
    },
    'no-dupe-keys': {
        type: 'problem',
        docs: {
            description: 'disallow duplicate keys in object literals',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-dupe-keys'
        },
        schema: [],
        messages: { unexpected: "Duplicate key '{{name}}'." }
    },
    'no-duplicate-case': {
        type: 'problem',
        docs: {
            description: 'disallow duplicate case labels',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-duplicate-case'
        },
        schema: [],
        messages: { unexpected: 'Duplicate case label.' }
    },
    'no-duplicate-imports': {
        type: 'problem',
        docs: {
            description: 'disallow duplicate module imports',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-duplicate-imports'
        },
        schema: [{ type: 'object', properties: { includeExports: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: {
            import: "'{{module}}' import is duplicated.",
            importAs: "'{{module}}' import is duplicated as export.",
            export: "'{{module}}' export is duplicated.",
            exportAs: "'{{module}}' export is duplicated as import."
        }
    },
    'no-else-return': {
        type: 'suggestion',
        docs: {
            description: 'disallow `else` blocks after `return` statements in `if` statements',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-else-return'
        },
        schema: [{ type: 'object', properties: { allowElseIf: { type: 'boolean', default: true } }, additionalProperties: false }],
        fixable: 'code',
        messages: { unexpected: "Unnecessary 'else' after 'return'." }
    },
    'no-empty': {
        type: 'suggestion',
        docs: { description: 'disallow empty block statements', category: 'Possible Errors', recommended: true, url: 'https://eslint.org/docs/rules/no-empty' },
        schema: [{ type: 'object', properties: { allowEmptyCatch: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: { unexpected: 'Empty {{type}} statement.' }
    },
    'no-empty-character-class': {
        type: 'problem',
        docs: {
            description: 'disallow empty character classes in regular expressions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-empty-character-class'
        },
        schema: [],
        messages: { unexpected: 'Empty class.' }
    },
    'no-empty-function': {
        type: 'suggestion',
        docs: {
            description: 'disallow empty functions',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-empty-function'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        items: {
                            enum: ['functions', 'arrowFunctions', 'generatorFunctions', 'methods', 'generatorMethods', 'getters', 'setters', 'constructors']
                        },
                        uniqueItems: true
                    }
                },
                additionalProperties: false
            }
        ],
        messages: { unexpected: 'Unexpected empty {{name}}.' }
    },
    'no-empty-pattern': {
        type: 'problem',
        docs: {
            description: 'disallow empty destructuring patterns',
            category: 'Best Practices',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-empty-pattern'
        },
        schema: [],
        messages: { unexpected: 'Unexpected empty {{type}} pattern.' }
    },
    'no-eq-null': {
        type: 'suggestion',
        docs: {
            description: 'disallow `null` comparisons without type-checking operators',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-eq-null'
        },
        schema: [],
        messages: { unexpected: "Use '===' to compare with null." }
    },
    'no-eval': {
        type: 'suggestion',
        docs: { description: 'disallow the use of `eval()`', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-eval' },
        schema: [{ type: 'object', properties: { allowIndirect: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: { unexpected: 'eval can be harmful.' }
    },
    'no-ex-assign': {
        type: 'problem',
        docs: {
            description: 'disallow reassigning exceptions in `catch` clauses',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-ex-assign'
        },
        schema: [],
        messages: { unexpected: 'Do not assign to the exception parameter.' }
    },
    'no-extend-native': {
        type: 'suggestion',
        docs: {
            description: 'disallow extending native types',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-extend-native'
        },
        schema: [{ type: 'object', properties: { exceptions: { type: 'array', items: { type: 'string' }, uniqueItems: true } }, additionalProperties: false }],
        messages: { unexpected: '{{builtin}} prototype is read only, properties should not be added.' }
    },
    'no-extra-bind': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary calls to `.bind()`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-extra-bind'
        },
        schema: [],
        fixable: 'code',
        messages: { unexpected: 'The function binding is unnecessary.' }
    },
    'no-extra-boolean-cast': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary boolean casts',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-extra-boolean-cast'
        },
        schema: [],
        fixable: 'code',
        messages: { unexpectedCall: 'Redundant Boolean call.', unexpectedNegation: 'Redundant double negation.' }
    },
    'no-extra-label': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary labels',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-extra-label'
        },
        schema: [],
        fixable: 'code',
        messages: { unexpected: "This label '{{name}}' is unnecessary." }
    },
    'no-extra-parens': {
        type: 'layout',
        docs: {
            description: 'disallow unnecessary parentheses',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-extra-parens'
        },
        fixable: 'code',
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['functions'] }], minItems: 0, maxItems: 1 },
                {
                    type: 'array',
                    items: [
                        { enum: ['all'] },
                        {
                            type: 'object',
                            properties: {
                                conditionalAssign: { type: 'boolean' },
                                nestedBinaryExpressions: { type: 'boolean' },
                                returnAssign: { type: 'boolean' },
                                ignoreJSX: { enum: ['none', 'all', 'single-line', 'multi-line'] },
                                enforceForArrowConditionals: { type: 'boolean' }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        messages: { unexpected: 'Unnecessary parentheses around expression.' }
    },
    'no-extra-semi': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary semicolons',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-extra-semi'
        },
        fixable: 'code',
        schema: [],
        messages: { unexpected: 'Unnecessary semicolon.' }
    },
    'no-fallthrough': {
        type: 'problem',
        docs: {
            description: 'disallow fallthrough of `case` statements',
            category: 'Best Practices',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-fallthrough'
        },
        schema: [{ type: 'object', properties: { commentPattern: { type: 'string', default: '' } }, additionalProperties: false }],
        messages: { case: "Expected a 'break' statement before 'case'.", default: "Expected a 'break' statement before 'default'." }
    },
    'no-floating-decimal': {
        type: 'suggestion',
        docs: {
            description: 'disallow leading or trailing decimal points in numeric literals',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-floating-decimal'
        },
        schema: [],
        fixable: 'code',
        messages: { leading: 'A leading decimal point can be confused with a dot.', trailing: 'A trailing decimal point can be confused with a dot.' }
    },
    'no-func-assign': {
        type: 'problem',
        docs: {
            description: 'disallow reassigning `function` declarations',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-func-assign'
        },
        schema: []
    },
    'no-global-assign': {
        type: 'suggestion',
        docs: {
            description: 'disallow assignments to native objects or read-only global variables',
            category: 'Best Practices',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-global-assign'
        },
        schema: [{ type: 'object', properties: { exceptions: { type: 'array', items: { type: 'string' }, uniqueItems: true } }, additionalProperties: false }]
    },
    'no-implicit-coercion': {
        type: 'suggestion',
        docs: {
            description: 'disallow shorthand type conversions',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-implicit-coercion'
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    boolean: { type: 'boolean', default: true },
                    number: { type: 'boolean', default: true },
                    string: { type: 'boolean', default: true },
                    allow: { type: 'array', items: { enum: ['~', '!!', '+', '*'] }, uniqueItems: true }
                },
                additionalProperties: false
            }
        ]
    },
    'no-implicit-globals': {
        type: 'suggestion',
        docs: {
            description: 'disallow variable and `function` declarations in the global scope',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-implicit-globals'
        },
        schema: []
    },
    'no-implied-eval': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of `eval()`-like methods',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-implied-eval'
        },
        schema: []
    },
    'no-inline-comments': {
        type: 'suggestion',
        docs: {
            description: 'disallow inline comments after code',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-inline-comments'
        },
        schema: []
    },
    'no-inner-declarations': {
        type: 'problem',
        docs: {
            description: 'disallow variable or `function` declarations in nested blocks',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-inner-declarations'
        },
        schema: [{ enum: ['functions', 'both'] }]
    },
    'no-invalid-regexp': {
        type: 'problem',
        docs: {
            description: 'disallow invalid regular expression strings in `RegExp` constructors',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-invalid-regexp'
        },
        schema: [{ type: 'object', properties: { allowConstructorFlags: { type: 'array', items: { type: 'string' } } }, additionalProperties: false }]
    },
    'no-invalid-this': {
        type: 'suggestion',
        docs: {
            description: 'disallow `this` keywords outside of classes or class-like objects',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-invalid-this'
        },
        schema: []
    },
    'no-irregular-whitespace': {
        type: 'problem',
        docs: {
            description: 'disallow irregular whitespace',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-irregular-whitespace'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    skipComments: { type: 'boolean', default: false },
                    skipStrings: { type: 'boolean', default: true },
                    skipTemplates: { type: 'boolean', default: false },
                    skipRegExps: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ]
    },
    'no-iterator': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of the `__iterator__` property',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-iterator'
        },
        schema: []
    },
    'no-label-var': {
        type: 'suggestion',
        docs: {
            description: 'disallow labels that share a name with a variable',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-label-var'
        },
        schema: []
    },
    'no-labels': {
        type: 'suggestion',
        docs: { description: 'disallow labeled statements', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-labels' },
        schema: [
            {
                type: 'object',
                properties: { allowLoop: { type: 'boolean', default: false }, allowSwitch: { type: 'boolean', default: false } },
                additionalProperties: false
            }
        ]
    },
    'no-lone-blocks': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary nested blocks',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-lone-blocks'
        },
        schema: []
    },
    'no-lonely-if': {
        type: 'suggestion',
        docs: {
            description: 'disallow `if` statements as the only statement in `else` blocks',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-lonely-if'
        },
        schema: [],
        fixable: 'code'
    },
    'no-loop-func': {
        type: 'suggestion',
        docs: {
            description: 'disallow `function` declarations and expressions inside loop statements',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-loop-func'
        },
        schema: []
    },
    'no-magic-numbers': {
        type: 'suggestion',
        docs: { description: 'disallow magic numbers', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-magic-numbers' },
        schema: [
            {
                type: 'object',
                properties: {
                    detectObjects: { type: 'boolean', default: false },
                    enforceConst: { type: 'boolean', default: false },
                    ignore: { type: 'array', items: { type: 'number' }, uniqueItems: true },
                    ignoreArrayIndexes: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ],
        messages: { useConst: "Number constants declarations must use 'const'.", noMagic: 'No magic number: {{raw}}.' }
    },
    'no-misleading-character-class': {
        type: 'problem',
        docs: {
            description: 'disallow characters which are made with multiple code points in character class syntax',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-misleading-character-class'
        },
        schema: [],
        messages: {
            surrogatePairWithoutUFlag: "Unexpected surrogate pair in character class. Use 'u' flag.",
            combiningClass: 'Unexpected combined character in character class.',
            emojiModifier: 'Unexpected modified Emoji in character class.',
            regionalIndicatorSymbol: 'Unexpected national flag in character class.',
            zwj: 'Unexpected joined character sequence in character class.'
        }
    },
    'no-mixed-operators': {
        type: 'suggestion',
        docs: {
            description: 'disallow mixed binary operators',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-mixed-operators'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    groups: {
                        type: 'array',
                        items: {
                            type: 'array',
                            items: {
                                enum: [
                                    '+',
                                    '-',
                                    '*',
                                    '/',
                                    '%',
                                    '**',
                                    '&',
                                    '|',
                                    '^',
                                    '~',
                                    '<<',
                                    '>>',
                                    '>>>',
                                    '==',
                                    '!=',
                                    '===',
                                    '!==',
                                    '>',
                                    '>=',
                                    '<',
                                    '<=',
                                    '&&',
                                    '||',
                                    'in',
                                    'instanceof'
                                ]
                            },
                            minItems: 2,
                            uniqueItems: true
                        },
                        uniqueItems: true
                    },
                    allowSamePrecedence: { type: 'boolean', default: true }
                },
                additionalProperties: false
            }
        ]
    },
    'no-mixed-requires': {
        type: 'suggestion',
        docs: {
            description: 'disallow `require` calls to be mixed with regular variable declarations',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-mixed-requires'
        },
        schema: [
            {
                oneOf: [
                    { type: 'boolean' },
                    { type: 'object', properties: { grouping: { type: 'boolean' }, allowCall: { type: 'boolean' } }, additionalProperties: false }
                ]
            }
        ]
    },
    'no-mixed-spaces-and-tabs': {
        type: 'layout',
        docs: {
            description: 'disallow mixed spaces and tabs for indentation',
            category: 'Stylistic Issues',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-mixed-spaces-and-tabs'
        },
        schema: [{ enum: ['smart-tabs', true, false] }]
    },
    'no-multi-assign': {
        type: 'suggestion',
        docs: {
            description: 'disallow use of chained assignment expressions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-multi-assign'
        },
        schema: []
    },
    'no-multi-spaces': {
        type: 'layout',
        docs: { description: 'disallow multiple spaces', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-multi-spaces' },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    exceptions: { type: 'object', patternProperties: { '^([A-Z][a-z]*)+$': { type: 'boolean' } }, additionalProperties: false },
                    ignoreEOLComments: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ]
    },
    'no-multi-str': {
        type: 'suggestion',
        docs: { description: 'disallow multiline strings', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-multi-str' },
        schema: []
    },
    'no-multiple-empty-lines': {
        type: 'layout',
        docs: {
            description: 'disallow multiple empty lines',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-multiple-empty-lines'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: { max: { type: 'integer', minimum: 0 }, maxEOF: { type: 'integer', minimum: 0 }, maxBOF: { type: 'integer', minimum: 0 } },
                required: ['max'],
                additionalProperties: false
            }
        ]
    },
    'no-native-reassign': {
        type: 'suggestion',
        docs: {
            description: 'disallow assignments to native objects or read-only global variables',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-native-reassign'
        },
        deprecated: true,
        replacedBy: ['no-global-assign'],
        schema: [{ type: 'object', properties: { exceptions: { type: 'array', items: { type: 'string' }, uniqueItems: true } }, additionalProperties: false }]
    },
    'no-negated-condition': {
        type: 'suggestion',
        docs: {
            description: 'disallow negated conditions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-negated-condition'
        },
        schema: []
    },
    'no-negated-in-lhs': {
        type: 'problem',
        docs: {
            description: 'disallow negating the left operand in `in` expressions',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-negated-in-lhs'
        },
        replacedBy: ['no-unsafe-negation'],
        deprecated: true,
        schema: []
    },
    'no-nested-ternary': {
        type: 'suggestion',
        docs: {
            description: 'disallow nested ternary expressions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-nested-ternary'
        },
        schema: []
    },
    'no-new': {
        type: 'suggestion',
        docs: {
            description: 'disallow `new` operators outside of assignments or comparisons',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-new'
        },
        schema: []
    },
    'no-new-func': {
        type: 'suggestion',
        docs: {
            description: 'disallow `new` operators with the `Function` object',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-new-func'
        },
        schema: []
    },
    'no-new-object': {
        type: 'suggestion',
        docs: {
            description: 'disallow `Object` constructors',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-new-object'
        },
        schema: []
    },
    'no-new-require': {
        type: 'suggestion',
        docs: {
            description: 'disallow `new` operators with calls to `require`',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-new-require'
        },
        schema: []
    },
    'no-new-symbol': {
        type: 'problem',
        docs: {
            description: 'disallow `new` operators with the `Symbol` object',
            category: 'ECMAScript 6',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-new-symbol'
        },
        schema: []
    },
    'no-new-wrappers': {
        type: 'suggestion',
        docs: {
            description: 'disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-new-wrappers'
        },
        schema: []
    },
    'no-obj-calls': {
        type: 'problem',
        docs: {
            description: 'disallow calling global object properties as functions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-obj-calls'
        },
        schema: []
    },
    'no-octal': {
        type: 'suggestion',
        docs: { description: 'disallow octal literals', category: 'Best Practices', recommended: true, url: 'https://eslint.org/docs/rules/no-octal' },
        schema: []
    },
    'no-octal-escape': {
        type: 'suggestion',
        docs: {
            description: 'disallow octal escape sequences in string literals',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-octal-escape'
        },
        schema: []
    },
    'no-param-reassign': {
        type: 'suggestion',
        docs: {
            description: 'disallow reassigning `function` parameters',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-param-reassign'
        },
        schema: [
            {
                oneOf: [
                    { type: 'object', properties: { props: { enum: [false] } }, additionalProperties: false },
                    {
                        type: 'object',
                        properties: {
                            props: { enum: [true] },
                            ignorePropertyModificationsFor: { type: 'array', items: { type: 'string' }, uniqueItems: true }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },
    'no-path-concat': {
        type: 'suggestion',
        docs: {
            description: 'disallow string concatenation with `__dirname` and `__filename`',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-path-concat'
        },
        schema: []
    },
    'no-plusplus': {
        type: 'suggestion',
        docs: {
            description: 'disallow the unary operators `++` and `--`',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-plusplus'
        },
        schema: [{ type: 'object', properties: { allowForLoopAfterthoughts: { type: 'boolean', default: false } }, additionalProperties: false }]
    },
    'no-process-env': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of `process.env`',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-process-env'
        },
        schema: []
    },
    'no-process-exit': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of `process.exit()`',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-process-exit'
        },
        schema: []
    },
    'no-proto': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of the `__proto__` property',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-proto'
        },
        schema: []
    },
    'no-prototype-builtins': {
        type: 'problem',
        docs: {
            description: 'disallow calling some `Object.prototype` methods directly on objects',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-prototype-builtins'
        },
        schema: []
    },
    'no-redeclare': {
        type: 'suggestion',
        docs: {
            description: 'disallow variable redeclaration',
            category: 'Best Practices',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-redeclare'
        },
        schema: [{ type: 'object', properties: { builtinGlobals: { type: 'boolean', default: false } }, additionalProperties: false }]
    },
    'no-regex-spaces': {
        type: 'suggestion',
        docs: {
            description: 'disallow multiple spaces in regular expressions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-regex-spaces'
        },
        schema: [],
        fixable: 'code'
    },
    'no-restricted-globals': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified global variables',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-globals'
        },
        schema: {
            type: 'array',
            items: {
                oneOf: [
                    { type: 'string' },
                    { type: 'object', properties: { name: { type: 'string' }, message: { type: 'string' } }, required: ['name'], additionalProperties: false }
                ]
            },
            uniqueItems: true,
            minItems: 0
        }
    },
    'no-restricted-imports': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified modules when loaded by `import`',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-imports'
        },
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: {
                        anyOf: [
                            { type: 'string' },
                            {
                                type: 'object',
                                properties: {
                                    name: { type: 'string' },
                                    message: { type: 'string', minLength: 1 },
                                    importNames: { type: 'array', items: { type: 'string' } }
                                },
                                additionalProperties: false,
                                required: ['name']
                            }
                        ]
                    },
                    uniqueItems: true
                },
                {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            paths: {
                                type: 'array',
                                items: {
                                    anyOf: [
                                        { type: 'string' },
                                        {
                                            type: 'object',
                                            properties: {
                                                name: { type: 'string' },
                                                message: { type: 'string', minLength: 1 },
                                                importNames: { type: 'array', items: { type: 'string' } }
                                            },
                                            additionalProperties: false,
                                            required: ['name']
                                        }
                                    ]
                                },
                                uniqueItems: true
                            },
                            patterns: { type: 'array', items: { type: 'string' }, uniqueItems: true }
                        },
                        additionalProperties: false
                    },
                    additionalItems: false
                }
            ]
        }
    },
    'no-restricted-modules': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified modules when loaded by `require`',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-modules'
        },
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: {
                        anyOf: [
                            { type: 'string' },
                            {
                                type: 'object',
                                properties: { name: { type: 'string' }, message: { type: 'string', minLength: 1 } },
                                additionalProperties: false,
                                required: ['name']
                            }
                        ]
                    },
                    uniqueItems: true
                },
                {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            paths: {
                                type: 'array',
                                items: {
                                    anyOf: [
                                        { type: 'string' },
                                        {
                                            type: 'object',
                                            properties: { name: { type: 'string' }, message: { type: 'string', minLength: 1 } },
                                            additionalProperties: false,
                                            required: ['name']
                                        }
                                    ]
                                },
                                uniqueItems: true
                            },
                            patterns: { type: 'array', items: { type: 'string' }, uniqueItems: true }
                        },
                        additionalProperties: false
                    },
                    additionalItems: false
                }
            ]
        }
    },
    'no-restricted-properties': {
        type: 'suggestion',
        docs: {
            description: 'disallow certain properties on certain objects',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-properties'
        },
        schema: {
            type: 'array',
            items: {
                anyOf: [
                    {
                        type: 'object',
                        properties: { object: { type: 'string' }, property: { type: 'string' }, message: { type: 'string' } },
                        additionalProperties: false,
                        required: ['object']
                    },
                    {
                        type: 'object',
                        properties: { object: { type: 'string' }, property: { type: 'string' }, message: { type: 'string' } },
                        additionalProperties: false,
                        required: ['property']
                    }
                ]
            },
            uniqueItems: true
        }
    },
    'no-restricted-syntax': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified syntax',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-syntax'
        },
        schema: {
            type: 'array',
            items: [
                {
                    oneOf: [
                        { type: 'string' },
                        {
                            type: 'object',
                            properties: { selector: { type: 'string' }, message: { type: 'string' } },
                            required: ['selector'],
                            additionalProperties: false
                        }
                    ]
                }
            ],
            uniqueItems: true,
            minItems: 0
        }
    },
    'no-return-assign': {
        type: 'suggestion',
        docs: {
            description: 'disallow assignment operators in `return` statements',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-return-assign'
        },
        schema: [{ enum: ['except-parens', 'always'] }]
    },
    'no-return-await': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary `return await`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-return-await'
        },
        fixable: null,
        schema: []
    },
    'no-script-url': {
        type: 'suggestion',
        docs: {
            description: 'disallow `javascript:` urls',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-script-url'
        },
        schema: []
    },
    'no-self-assign': {
        type: 'problem',
        docs: {
            description: 'disallow assignments where both sides are exactly the same',
            category: 'Best Practices',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-self-assign'
        },
        schema: [{ type: 'object', properties: { props: { type: 'boolean', default: true } }, additionalProperties: false }]
    },
    'no-self-compare': {
        type: 'problem',
        docs: {
            description: 'disallow comparisons where both sides are exactly the same',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-self-compare'
        },
        schema: []
    },
    'no-sequences': {
        type: 'suggestion',
        docs: { description: 'disallow comma operators', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-sequences' },
        schema: []
    },
    'no-shadow': {
        type: 'suggestion',
        docs: {
            description: 'disallow variable declarations from shadowing variables declared in the outer scope',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-shadow'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    builtinGlobals: { type: 'boolean', default: false },
                    hoist: { enum: ['all', 'functions', 'never'], default: 'functions' },
                    allow: { type: 'array', items: { type: 'string' } }
                },
                additionalProperties: false
            }
        ]
    },
    'no-shadow-restricted-names': {
        type: 'suggestion',
        docs: {
            description: 'disallow identifiers from shadowing restricted names',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-shadow-restricted-names'
        },
        schema: []
    },
    'no-spaced-func': {
        type: 'layout',
        docs: {
            description: 'disallow spacing between function identifiers and their applications (deprecated)',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-spaced-func'
        },
        deprecated: true,
        replacedBy: ['func-call-spacing'],
        fixable: 'whitespace',
        schema: []
    },
    'no-sparse-arrays': {
        type: 'problem',
        docs: { description: 'disallow sparse arrays', category: 'Possible Errors', recommended: true, url: 'https://eslint.org/docs/rules/no-sparse-arrays' },
        schema: []
    },
    'no-sync': {
        type: 'suggestion',
        docs: {
            description: 'disallow synchronous methods',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-sync'
        },
        schema: [{ type: 'object', properties: { allowAtRootLevel: { type: 'boolean', default: false } }, additionalProperties: false }]
    },
    'no-tabs': {
        type: 'layout',
        docs: { description: 'disallow all tabs', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/no-tabs' },
        schema: [{ type: 'object', properties: { allowIndentationTabs: { type: 'boolean', default: false } }, additionalProperties: false }]
    },
    'no-template-curly-in-string': {
        type: 'problem',
        docs: {
            description: 'disallow template literal placeholder syntax in regular strings',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-template-curly-in-string'
        },
        schema: []
    },
    'no-ternary': {
        type: 'suggestion',
        docs: { description: 'disallow ternary operators', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/no-ternary' },
        schema: []
    },
    'no-this-before-super': {
        type: 'problem',
        docs: {
            description: 'disallow `this`/`super` before calling `super()` in constructors',
            category: 'ECMAScript 6',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-this-before-super'
        },
        schema: []
    },
    'no-throw-literal': {
        type: 'suggestion',
        docs: {
            description: 'disallow throwing literals as exceptions',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-throw-literal'
        },
        schema: []
    },
    'no-trailing-spaces': {
        type: 'layout',
        docs: {
            description: 'disallow trailing whitespace at the end of lines',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-trailing-spaces'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: { skipBlankLines: { type: 'boolean', default: false }, ignoreComments: { type: 'boolean', default: false } },
                additionalProperties: false
            }
        ]
    },
    'no-undef': {
        type: 'problem',
        docs: {
            description: 'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
            category: 'Variables',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-undef'
        },
        schema: [{ type: 'object', properties: { typeof: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: { undef: "'{{name}}' is not defined." }
    },
    'no-undef-init': {
        type: 'suggestion',
        docs: {
            description: 'disallow initializing variables to `undefined`',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-undef-init'
        },
        schema: [],
        fixable: 'code'
    },
    'no-undefined': {
        type: 'suggestion',
        docs: {
            description: 'disallow the use of `undefined` as an identifier',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-undefined'
        },
        schema: []
    },
    'no-underscore-dangle': {
        type: 'suggestion',
        docs: {
            description: 'disallow dangling underscores in identifiers',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-underscore-dangle'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allow: { type: 'array', items: { type: 'string' } },
                    allowAfterThis: { type: 'boolean', default: false },
                    allowAfterSuper: { type: 'boolean', default: false },
                    enforceInMethodNames: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ]
    },
    'no-unexpected-multiline': {
        type: 'problem',
        docs: {
            description: 'disallow confusing multiline expressions',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-unexpected-multiline'
        },
        schema: [],
        messages: {
            function: 'Unexpected newline between function and ( of function call.',
            property: 'Unexpected newline between object and [ of property access.',
            taggedTemplate: 'Unexpected newline between template tag and template literal.',
            division: 'Unexpected newline between numerator and division operator.'
        }
    },
    'no-unmodified-loop-condition': {
        type: 'problem',
        docs: {
            description: 'disallow unmodified loop conditions',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-unmodified-loop-condition'
        },
        schema: []
    },
    'no-unneeded-ternary': {
        type: 'suggestion',
        docs: {
            description: 'disallow ternary operators when simpler alternatives exist',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-unneeded-ternary'
        },
        schema: [{ type: 'object', properties: { defaultAssignment: { type: 'boolean', default: true } }, additionalProperties: false }],
        fixable: 'code'
    },
    'no-unreachable': {
        type: 'problem',
        docs: {
            description: 'disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-unreachable'
        },
        schema: []
    },
    'no-unsafe-finally': {
        type: 'problem',
        docs: {
            description: 'disallow control flow statements in `finally` blocks',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-unsafe-finally'
        },
        schema: []
    },
    'no-unsafe-negation': {
        type: 'problem',
        docs: {
            description: 'disallow negating the left operand of relational operators',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-unsafe-negation'
        },
        schema: [],
        fixable: 'code',
        messages: { unexpected: "Unexpected negating the left operand of '{{operator}}' operator." }
    },
    'no-unused-expressions': {
        type: 'suggestion',
        docs: {
            description: 'disallow unused expressions',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-unused-expressions'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowShortCircuit: { type: 'boolean', default: false },
                    allowTernary: { type: 'boolean', default: false },
                    allowTaggedTemplates: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ]
    },
    'no-unused-labels': {
        type: 'suggestion',
        docs: { description: 'disallow unused labels', category: 'Best Practices', recommended: true, url: 'https://eslint.org/docs/rules/no-unused-labels' },
        schema: [],
        fixable: 'code',
        messages: { unused: "'{{name}}:' is defined but never used." }
    },
    'no-unused-vars': {
        type: 'problem',
        docs: { description: 'disallow unused variables', category: 'Variables', recommended: true, url: 'https://eslint.org/docs/rules/no-unused-vars' },
        schema: [
            {
                oneOf: [
                    { enum: ['all', 'local'] },
                    {
                        type: 'object',
                        properties: {
                            vars: { enum: ['all', 'local'] },
                            varsIgnorePattern: { type: 'string' },
                            args: { enum: ['all', 'after-used', 'none'] },
                            ignoreRestSiblings: { type: 'boolean' },
                            argsIgnorePattern: { type: 'string' },
                            caughtErrors: { enum: ['all', 'none'] },
                            caughtErrorsIgnorePattern: { type: 'string' }
                        }
                    }
                ]
            }
        ]
    },
    'no-use-before-define': {
        type: 'problem',
        docs: {
            description: 'disallow the use of variables before they are defined',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-use-before-define'
        },
        schema: [
            {
                oneOf: [
                    { enum: ['nofunc'] },
                    {
                        type: 'object',
                        properties: { functions: { type: 'boolean' }, classes: { type: 'boolean' }, variables: { type: 'boolean' } },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },
    'no-useless-call': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary calls to `.call()` and `.apply()`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-useless-call'
        },
        schema: []
    },
    'no-useless-catch': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary `catch` clauses',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-useless-catch'
        },
        schema: []
    },
    'no-useless-computed-key': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary computed property keys in object literals',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-useless-computed-key'
        },
        schema: [],
        fixable: 'code'
    },
    'no-useless-concat': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary concatenation of literals or template literals',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-useless-concat'
        },
        schema: []
    },
    'no-useless-constructor': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary constructors',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-useless-constructor'
        },
        schema: []
    },
    'no-useless-escape': {
        type: 'suggestion',
        docs: {
            description: 'disallow unnecessary escape characters',
            category: 'Best Practices',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-useless-escape'
        },
        schema: []
    },
    'no-useless-rename': {
        type: 'suggestion',
        docs: {
            description: 'disallow renaming import, export, and destructured assignments to the same name',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-useless-rename'
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreDestructuring: { type: 'boolean', default: false },
                    ignoreImport: { type: 'boolean', default: false },
                    ignoreExport: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ]
    },
    'no-useless-return': {
        type: 'suggestion',
        docs: {
            description: 'disallow redundant return statements',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-useless-return'
        },
        fixable: 'code',
        schema: []
    },
    'no-var': {
        type: 'suggestion',
        docs: {
            description: 'require `let` or `const` instead of `var`',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-var'
        },
        schema: [],
        fixable: 'code'
    },
    'no-void': {
        type: 'suggestion',
        docs: { description: 'disallow `void` operators', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-void' },
        schema: []
    },
    'no-warning-comments': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified warning terms in comments',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-warning-comments'
        },
        schema: [
            {
                type: 'object',
                properties: { terms: { type: 'array', items: { type: 'string' } }, location: { enum: ['start', 'anywhere'] } },
                additionalProperties: false
            }
        ]
    },
    'no-whitespace-before-property': {
        type: 'layout',
        docs: {
            description: 'disallow whitespace before properties',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-whitespace-before-property'
        },
        fixable: 'whitespace',
        schema: []
    },
    'no-with': {
        type: 'suggestion',
        docs: { description: 'disallow `with` statements', category: 'Best Practices', recommended: false, url: 'https://eslint.org/docs/rules/no-with' },
        schema: []
    },
    'nonblock-statement-body-position': {
        type: 'layout',
        docs: {
            description: 'enforce the location of single-line statements',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/nonblock-statement-body-position'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['beside', 'below', 'any'] },
            {
                properties: {
                    overrides: {
                        properties: {
                            if: { enum: ['beside', 'below', 'any'] },
                            else: { enum: ['beside', 'below', 'any'] },
                            while: { enum: ['beside', 'below', 'any'] },
                            do: { enum: ['beside', 'below', 'any'] },
                            for: { enum: ['beside', 'below', 'any'] }
                        },
                        additionalProperties: false
                    }
                },
                additionalProperties: false
            }
        ]
    },
    'object-curly-newline': {
        type: 'layout',
        docs: {
            description: 'enforce consistent line breaks inside braces',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/object-curly-newline'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    {
                        oneOf: [
                            { enum: ['always', 'never'] },
                            {
                                type: 'object',
                                properties: { multiline: { type: 'boolean' }, minProperties: { type: 'integer', minimum: 0 }, consistent: { type: 'boolean' } },
                                additionalProperties: false,
                                minProperties: 1
                            }
                        ]
                    },
                    {
                        type: 'object',
                        properties: {
                            ObjectExpression: {
                                oneOf: [
                                    { enum: ['always', 'never'] },
                                    {
                                        type: 'object',
                                        properties: {
                                            multiline: { type: 'boolean' },
                                            minProperties: { type: 'integer', minimum: 0 },
                                            consistent: { type: 'boolean' }
                                        },
                                        additionalProperties: false,
                                        minProperties: 1
                                    }
                                ]
                            },
                            ObjectPattern: {
                                oneOf: [
                                    { enum: ['always', 'never'] },
                                    {
                                        type: 'object',
                                        properties: {
                                            multiline: { type: 'boolean' },
                                            minProperties: { type: 'integer', minimum: 0 },
                                            consistent: { type: 'boolean' }
                                        },
                                        additionalProperties: false,
                                        minProperties: 1
                                    }
                                ]
                            },
                            ImportDeclaration: {
                                oneOf: [
                                    { enum: ['always', 'never'] },
                                    {
                                        type: 'object',
                                        properties: {
                                            multiline: { type: 'boolean' },
                                            minProperties: { type: 'integer', minimum: 0 },
                                            consistent: { type: 'boolean' }
                                        },
                                        additionalProperties: false,
                                        minProperties: 1
                                    }
                                ]
                            },
                            ExportDeclaration: {
                                oneOf: [
                                    { enum: ['always', 'never'] },
                                    {
                                        type: 'object',
                                        properties: {
                                            multiline: { type: 'boolean' },
                                            minProperties: { type: 'integer', minimum: 0 },
                                            consistent: { type: 'boolean' }
                                        },
                                        additionalProperties: false,
                                        minProperties: 1
                                    }
                                ]
                            }
                        },
                        additionalProperties: false,
                        minProperties: 1
                    }
                ]
            }
        ]
    },
    'object-curly-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing inside braces',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/object-curly-spacing'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['always', 'never'] },
            { type: 'object', properties: { arraysInObjects: { type: 'boolean' }, objectsInObjects: { type: 'boolean' } }, additionalProperties: false }
        ]
    },
    'object-property-newline': {
        type: 'layout',
        docs: {
            description: 'enforce placing object properties on separate lines',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/object-property-newline'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowAllPropertiesOnSameLine: { type: 'boolean', default: false },
                    allowMultiplePropertiesPerLine: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ],
        fixable: 'whitespace'
    },
    'object-shorthand': {
        type: 'suggestion',
        docs: {
            description: 'require or disallow method and property shorthand syntax for object literals',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/object-shorthand'
        },
        fixable: 'code',
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [{ enum: ['always', 'methods', 'properties', 'never', 'consistent', 'consistent-as-needed'] }],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: 'array',
                    items: [
                        { enum: ['always', 'methods', 'properties'] },
                        { type: 'object', properties: { avoidQuotes: { type: 'boolean' } }, additionalProperties: false }
                    ],
                    minItems: 0,
                    maxItems: 2
                },
                {
                    type: 'array',
                    items: [
                        { enum: ['always', 'methods'] },
                        {
                            type: 'object',
                            properties: {
                                ignoreConstructors: { type: 'boolean' },
                                avoidQuotes: { type: 'boolean' },
                                avoidExplicitReturnArrows: { type: 'boolean' }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        }
    },
    'one-var': {
        type: 'suggestion',
        docs: {
            description: 'enforce variables to be declared either together or separately in functions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/one-var'
        },
        fixable: 'code',
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never', 'consecutive'] },
                    {
                        type: 'object',
                        properties: {
                            separateRequires: { type: 'boolean', default: false },
                            var: { enum: ['always', 'never', 'consecutive'] },
                            let: { enum: ['always', 'never', 'consecutive'] },
                            const: { enum: ['always', 'never', 'consecutive'] }
                        },
                        additionalProperties: false
                    },
                    {
                        type: 'object',
                        properties: { initialized: { enum: ['always', 'never', 'consecutive'] }, uninitialized: { enum: ['always', 'never', 'consecutive'] } },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },
    'one-var-declaration-per-line': {
        type: 'suggestion',
        docs: {
            description: 'require or disallow newlines around variable declarations',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/one-var-declaration-per-line'
        },
        schema: [{ enum: ['always', 'initializations'] }],
        fixable: 'whitespace'
    },
    'operator-assignment': {
        type: 'suggestion',
        docs: {
            description: 'require or disallow assignment operator shorthand where possible',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/operator-assignment'
        },
        schema: [{ enum: ['always', 'never'] }],
        fixable: 'code',
        messages: { replaced: 'Assignment can be replaced with operator assignment.', unexpected: 'Unexpected operator assignment shorthand.' }
    },
    'operator-linebreak': {
        type: 'layout',
        docs: {
            description: 'enforce consistent linebreak style for operators',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/operator-linebreak'
        },
        schema: [
            { enum: ['after', 'before', 'none', null] },
            {
                type: 'object',
                properties: { overrides: { type: 'object', properties: { anyOf: { type: 'string', enum: ['after', 'before', 'none', 'ignore'] } } } },
                additionalProperties: false
            }
        ],
        fixable: 'code'
    },
    'padded-blocks': {
        type: 'layout',
        docs: {
            description: 'require or disallow padding within blocks',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/padded-blocks'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never'] },
                    {
                        type: 'object',
                        properties: { blocks: { enum: ['always', 'never'] }, switches: { enum: ['always', 'never'] }, classes: { enum: ['always', 'never'] } },
                        additionalProperties: false,
                        minProperties: 1
                    }
                ]
            },
            { type: 'object', properties: { allowSingleLineBlocks: { type: 'boolean' } } }
        ]
    },
    'padding-line-between-statements': {
        type: 'layout',
        docs: {
            description: 'require or disallow padding lines between statements',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/padding-line-between-statements'
        },
        fixable: 'whitespace',
        schema: {
            definitions: {
                paddingType: { enum: ['any', 'never', 'always'] },
                statementType: {
                    anyOf: [
                        {
                            enum: [
                                '*',
                                'block-like',
                                'cjs-export',
                                'cjs-import',
                                'directive',
                                'expression',
                                'iife',
                                'multiline-block-like',
                                'multiline-expression',
                                'multiline-const',
                                'multiline-let',
                                'multiline-var',
                                'singleline-const',
                                'singleline-let',
                                'singleline-var',
                                'block',
                                'empty',
                                'function',
                                'break',
                                'case',
                                'class',
                                'const',
                                'continue',
                                'debugger',
                                'default',
                                'do',
                                'export',
                                'for',
                                'if',
                                'import',
                                'let',
                                'return',
                                'switch',
                                'throw',
                                'try',
                                'var',
                                'while',
                                'with'
                            ]
                        },
                        {
                            type: 'array',
                            items: {
                                enum: [
                                    '*',
                                    'block-like',
                                    'cjs-export',
                                    'cjs-import',
                                    'directive',
                                    'expression',
                                    'iife',
                                    'multiline-block-like',
                                    'multiline-expression',
                                    'multiline-const',
                                    'multiline-let',
                                    'multiline-var',
                                    'singleline-const',
                                    'singleline-let',
                                    'singleline-var',
                                    'block',
                                    'empty',
                                    'function',
                                    'break',
                                    'case',
                                    'class',
                                    'const',
                                    'continue',
                                    'debugger',
                                    'default',
                                    'do',
                                    'export',
                                    'for',
                                    'if',
                                    'import',
                                    'let',
                                    'return',
                                    'switch',
                                    'throw',
                                    'try',
                                    'var',
                                    'while',
                                    'with'
                                ]
                            },
                            minItems: 1,
                            uniqueItems: true,
                            additionalItems: false
                        }
                    ]
                }
            },
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    blankLine: { $ref: '#/definitions/paddingType' },
                    prev: { $ref: '#/definitions/statementType' },
                    next: { $ref: '#/definitions/statementType' }
                },
                additionalProperties: false,
                required: ['blankLine', 'prev', 'next']
            },
            additionalItems: false
        }
    },
    'prefer-arrow-callback': {
        type: 'suggestion',
        docs: {
            description: 'require using arrow functions for callbacks',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-arrow-callback'
        },
        schema: [
            {
                type: 'object',
                properties: { allowNamedFunctions: { type: 'boolean', default: false }, allowUnboundThis: { type: 'boolean', default: true } },
                additionalProperties: false
            }
        ],
        fixable: 'code'
    },
    'prefer-const': {
        type: 'suggestion',
        docs: {
            description: 'require `const` declarations for variables that are never reassigned after declared',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-const'
        },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: { destructuring: { enum: ['any', 'all'], default: 'any' }, ignoreReadBeforeAssign: { type: 'boolean', default: false } },
                additionalProperties: false
            }
        ],
        messages: { useConst: "'{{name}}' is never reassigned. Use 'const' instead." }
    },
    'prefer-destructuring': {
        type: 'suggestion',
        docs: {
            description: 'require destructuring from arrays and/or objects',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-destructuring'
        },
        fixable: 'code',
        schema: [
            {
                oneOf: [
                    {
                        type: 'object',
                        properties: {
                            VariableDeclarator: {
                                type: 'object',
                                properties: { array: { type: 'boolean' }, object: { type: 'boolean' } },
                                additionalProperties: false
                            },
                            AssignmentExpression: {
                                type: 'object',
                                properties: { array: { type: 'boolean' }, object: { type: 'boolean' } },
                                additionalProperties: false
                            }
                        },
                        additionalProperties: false
                    },
                    { type: 'object', properties: { array: { type: 'boolean' }, object: { type: 'boolean' } }, additionalProperties: false }
                ]
            },
            { type: 'object', properties: { enforceForRenamedProperties: { type: 'boolean' } }, additionalProperties: false }
        ]
    },
    'prefer-named-capture-group': {
        type: 'suggestion',
        docs: {
            description: 'enforce using named capture group in regular expression',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-named-capture-group'
        },
        schema: [],
        messages: { required: "Capture group '{{group}}' should be converted to a named or non-capturing group." }
    },
    'prefer-numeric-literals': {
        type: 'suggestion',
        docs: {
            description: 'disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-numeric-literals'
        },
        schema: [],
        fixable: 'code'
    },
    'prefer-object-spread': {
        type: 'suggestion',
        docs: {
            description: 'disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-object-spread'
        },
        schema: [],
        fixable: 'code',
        messages: {
            useSpreadMessage: 'Use an object spread instead of `Object.assign` eg: `{ ...foo }`.',
            useLiteralMessage: 'Use an object literal instead of `Object.assign`. eg: `{ foo: bar }`.'
        }
    },
    'prefer-promise-reject-errors': {
        type: 'suggestion',
        docs: {
            description: 'require using Error objects as Promise rejection reasons',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-promise-reject-errors'
        },
        fixable: null,
        schema: [{ type: 'object', properties: { allowEmptyReject: { type: 'boolean', default: false } }, additionalProperties: false }]
    },
    'prefer-reflect': {
        type: 'suggestion',
        docs: {
            description: 'require `Reflect` methods where applicable',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-reflect'
        },
        deprecated: true,
        replacedBy: [],
        schema: [
            {
                type: 'object',
                properties: {
                    exceptions: {
                        type: 'array',
                        items: {
                            enum: [
                                'apply',
                                'call',
                                'delete',
                                'defineProperty',
                                'getOwnPropertyDescriptor',
                                'getPrototypeOf',
                                'setPrototypeOf',
                                'isExtensible',
                                'getOwnPropertyNames',
                                'preventExtensions'
                            ]
                        },
                        uniqueItems: true
                    }
                },
                additionalProperties: false
            }
        ]
    },
    'prefer-rest-params': {
        type: 'suggestion',
        docs: {
            description: 'require rest parameters instead of `arguments`',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-rest-params'
        },
        schema: []
    },
    'prefer-spread': {
        type: 'suggestion',
        docs: {
            description: 'require spread operators instead of `.apply()`',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-spread'
        },
        schema: [],
        fixable: null
    },
    'prefer-template': {
        type: 'suggestion',
        docs: {
            description: 'require template literals instead of string concatenation',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-template'
        },
        schema: [],
        fixable: 'code'
    },
    'quote-props': {
        type: 'suggestion',
        docs: {
            description: 'require quotes around object literal property names',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/quote-props'
        },
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['always', 'as-needed', 'consistent', 'consistent-as-needed'] }], minItems: 0, maxItems: 1 },
                {
                    type: 'array',
                    items: [
                        { enum: ['always', 'as-needed', 'consistent', 'consistent-as-needed'] },
                        {
                            type: 'object',
                            properties: { keywords: { type: 'boolean' }, unnecessary: { type: 'boolean' }, numbers: { type: 'boolean' } },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        fixable: 'code'
    },
    quotes: {
        type: 'layout',
        docs: {
            description: 'enforce the consistent use of either backticks, double, or single quotes',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/quotes'
        },
        fixable: 'code',
        schema: [
            { enum: ['single', 'double', 'backtick'] },
            {
                anyOf: [
                    { enum: ['avoid-escape'] },
                    {
                        type: 'object',
                        properties: { avoidEscape: { type: 'boolean' }, allowTemplateLiterals: { type: 'boolean' } },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },
    radix: {
        type: 'suggestion',
        docs: {
            description: 'enforce the consistent use of the radix argument when using `parseInt()`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/radix'
        },
        schema: [{ enum: ['always', 'as-needed'] }]
    },
    'require-atomic-updates': {
        type: 'problem',
        docs: {
            description: 'disallow assignments that can lead to race conditions due to usage of `await` or `yield`',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/require-atomic-updates'
        },
        fixable: null,
        schema: [],
        messages: { nonAtomicUpdate: 'Possible race condition: `{{value}}` might be reassigned based on an outdated value of `{{value}}`.' }
    },
    'require-await': {
        type: 'suggestion',
        docs: {
            description: 'disallow async functions which have no `await` expression',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/require-await'
        },
        schema: []
    },
    'require-jsdoc': {
        type: 'suggestion',
        docs: { description: 'require JSDoc comments', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/require-jsdoc' },
        schema: [
            {
                type: 'object',
                properties: {
                    require: {
                        type: 'object',
                        properties: {
                            ClassDeclaration: { type: 'boolean', default: false },
                            MethodDefinition: { type: 'boolean', default: false },
                            FunctionDeclaration: { type: 'boolean', default: true },
                            ArrowFunctionExpression: { type: 'boolean', default: false },
                            FunctionExpression: { type: 'boolean', default: false }
                        },
                        additionalProperties: false,
                        default: {}
                    }
                },
                additionalProperties: false
            }
        ],
        deprecated: true,
        replacedBy: []
    },
    'require-unicode-regexp': {
        type: 'suggestion',
        docs: {
            description: 'enforce the use of `u` flag on RegExp',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/require-unicode-regexp'
        },
        messages: { requireUFlag: "Use the 'u' flag." },
        schema: []
    },
    'require-yield': {
        type: 'suggestion',
        docs: {
            description: 'require generator functions to contain `yield`',
            category: 'ECMAScript 6',
            recommended: true,
            url: 'https://eslint.org/docs/rules/require-yield'
        },
        schema: []
    },
    'rest-spread-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce spacing between rest and spread operators and their expressions',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/rest-spread-spacing'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }]
    },
    semi: {
        type: 'layout',
        docs: {
            description: 'require or disallow semicolons instead of ASI',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/semi'
        },
        fixable: 'code',
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        { enum: ['never'] },
                        { type: 'object', properties: { beforeStatementContinuationChars: { enum: ['always', 'any', 'never'] } }, additionalProperties: false }
                    ],
                    minItems: 0,
                    maxItems: 2
                },
                {
                    type: 'array',
                    items: [{ enum: ['always'] }, { type: 'object', properties: { omitLastInOneLineBlock: { type: 'boolean' } }, additionalProperties: false }],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        }
    },
    'semi-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before and after semicolons',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/semi-spacing'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: { before: { type: 'boolean', default: false }, after: { type: 'boolean', default: true } },
                additionalProperties: false
            }
        ]
    },
    'semi-style': {
        type: 'layout',
        docs: {
            description: 'enforce location of semicolons',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/semi-style'
        },
        schema: [{ enum: ['last', 'first'] }],
        fixable: 'whitespace'
    },
    'sort-imports': {
        type: 'suggestion',
        docs: {
            description: 'enforce sorted import declarations within modules',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/sort-imports'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreCase: { type: 'boolean', default: false },
                    memberSyntaxSortOrder: {
                        type: 'array',
                        items: { enum: ['none', 'all', 'multiple', 'single'] },
                        uniqueItems: true,
                        minItems: 4,
                        maxItems: 4
                    },
                    ignoreDeclarationSort: { type: 'boolean', default: false },
                    ignoreMemberSort: { type: 'boolean', default: false }
                },
                additionalProperties: false
            }
        ],
        fixable: 'code'
    },
    'sort-keys': {
        type: 'suggestion',
        docs: {
            description: 'require object keys to be sorted',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/sort-keys'
        },
        schema: [
            { enum: ['asc', 'desc'] },
            {
                type: 'object',
                properties: { caseSensitive: { type: 'boolean', default: true }, natural: { type: 'boolean', default: false } },
                additionalProperties: false
            }
        ]
    },
    'sort-vars': {
        type: 'suggestion',
        docs: {
            description: 'require variables within the same declaration block to be sorted',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/sort-vars'
        },
        schema: [{ type: 'object', properties: { ignoreCase: { type: 'boolean', default: false } }, additionalProperties: false }],
        fixable: 'code'
    },
    'space-before-blocks': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before blocks',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/space-before-blocks'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never'] },
                    {
                        type: 'object',
                        properties: {
                            keywords: { enum: ['always', 'never', 'off'] },
                            functions: { enum: ['always', 'never', 'off'] },
                            classes: { enum: ['always', 'never', 'off'] }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },
    'space-before-function-paren': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before `function` definition opening parenthesis',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/space-before-function-paren'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['always', 'never'] },
                    {
                        type: 'object',
                        properties: {
                            anonymous: { enum: ['always', 'never', 'ignore'] },
                            named: { enum: ['always', 'never', 'ignore'] },
                            asyncArrow: { enum: ['always', 'never', 'ignore'] }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ]
    },
    'space-in-parens': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing inside parentheses',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/space-in-parens'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['always', 'never'] },
            {
                type: 'object',
                properties: { exceptions: { type: 'array', items: { enum: ['{}', '[]', '()', 'empty'] }, uniqueItems: true } },
                additionalProperties: false
            }
        ]
    },
    'space-infix-ops': {
        type: 'layout',
        docs: {
            description: 'require spacing around infix operators',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/space-infix-ops'
        },
        fixable: 'whitespace',
        schema: [{ type: 'object', properties: { int32Hint: { type: 'boolean', default: false } }, additionalProperties: false }]
    },
    'space-unary-ops': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before or after unary operators',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/space-unary-ops'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    words: { type: 'boolean', default: true },
                    nonwords: { type: 'boolean', default: false },
                    overrides: { type: 'object', additionalProperties: { type: 'boolean' } }
                },
                additionalProperties: false
            }
        ],
        messages: {
            unexpectedBefore: "Unexpected space before unary operator '{{operator}}'.",
            unexpectedAfter: "Unexpected space after unary operator '{{operator}}'.",
            unexpectedAfterWord: "Unexpected space after unary word operator '{{word}}'.",
            wordOperator: "Unary word operator '{{word}}' must be followed by whitespace.",
            operator: "Unary operator '{{operator}}' must be followed by whitespace.",
            beforeUnaryExpressions: "Space is required before unary expressions '{{token}}'."
        }
    },
    'spaced-comment': {
        type: 'suggestion',
        docs: {
            description: 'enforce consistent spacing after the `//` or `/*` in a comment',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/spaced-comment'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['always', 'never'] },
            {
                type: 'object',
                properties: {
                    exceptions: { type: 'array', items: { type: 'string' } },
                    markers: { type: 'array', items: { type: 'string' } },
                    line: {
                        type: 'object',
                        properties: { exceptions: { type: 'array', items: { type: 'string' } }, markers: { type: 'array', items: { type: 'string' } } },
                        additionalProperties: false
                    },
                    block: {
                        type: 'object',
                        properties: {
                            exceptions: { type: 'array', items: { type: 'string' } },
                            markers: { type: 'array', items: { type: 'string' } },
                            balanced: { type: 'boolean', default: false }
                        },
                        additionalProperties: false
                    }
                },
                additionalProperties: false
            }
        ]
    },
    strict: {
        type: 'suggestion',
        docs: {
            description: 'require or disallow strict mode directives',
            category: 'Strict Mode',
            recommended: false,
            url: 'https://eslint.org/docs/rules/strict'
        },
        schema: [{ enum: ['never', 'global', 'function', 'safe'] }],
        fixable: 'code',
        messages: {
            function: "Use the function form of 'use strict'.",
            global: "Use the global form of 'use strict'.",
            multiple: "Multiple 'use strict' directives.",
            never: 'Strict mode is not permitted.',
            unnecessary: "Unnecessary 'use strict' directive.",
            module: "'use strict' is unnecessary inside of modules.",
            implied: "'use strict' is unnecessary when implied strict mode is enabled.",
            unnecessaryInClasses: "'use strict' is unnecessary inside of classes.",
            nonSimpleParameterList: "'use strict' directive inside a function with non-simple parameter list throws a syntax error since ES2016.",
            wrap: "Wrap {{name}} in a function with 'use strict' directive."
        }
    },
    'switch-colon-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce spacing around colons of switch statements',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/switch-colon-spacing'
        },
        schema: [
            {
                type: 'object',
                properties: { before: { type: 'boolean', default: false }, after: { type: 'boolean', default: true } },
                additionalProperties: false
            }
        ],
        fixable: 'whitespace',
        messages: {
            expectedBefore: 'Expected space(s) before this colon.',
            expectedAfter: 'Expected space(s) after this colon.',
            unexpectedBefore: 'Unexpected space(s) before this colon.',
            unexpectedAfter: 'Unexpected space(s) after this colon.'
        }
    },
    'symbol-description': {
        type: 'suggestion',
        docs: {
            description: 'require symbol descriptions',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/symbol-description'
        },
        fixable: null,
        schema: [],
        messages: { expected: 'Expected Symbol to have a description.' }
    },
    'template-curly-spacing': {
        type: 'layout',
        docs: {
            description: 'require or disallow spacing around embedded expressions of template strings',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/template-curly-spacing'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }],
        messages: {
            expectedBefore: "Expected space(s) before '}'.",
            expectedAfter: "Expected space(s) after '${'.",
            unexpectedBefore: "Unexpected space(s) before '}'.",
            unexpectedAfter: "Unexpected space(s) after '${'."
        }
    },
    'template-tag-spacing': {
        type: 'layout',
        docs: {
            description: 'require or disallow spacing between template tags and their literals',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/template-tag-spacing'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }],
        messages: {
            unexpected: 'Unexpected space between template tag and template literal.',
            missing: 'Missing space between template tag and template literal.'
        }
    },
    'unicode-bom': {
        type: 'layout',
        docs: {
            description: 'require or disallow Unicode byte order mark (BOM)',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/unicode-bom'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }],
        messages: { expected: 'Expected Unicode BOM (Byte Order Mark).', unexpected: 'Unexpected Unicode BOM (Byte Order Mark).' }
    },
    'use-isnan': {
        type: 'problem',
        docs: {
            description: 'require calls to `isNaN()` when checking for `NaN`',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/use-isnan'
        },
        schema: [],
        messages: { useIsNaN: 'Use the isNaN function to compare with NaN.' }
    },
    'valid-jsdoc': {
        type: 'suggestion',
        docs: {
            description: 'enforce valid JSDoc comments',
            category: 'Possible Errors',
            recommended: false,
            url: 'https://eslint.org/docs/rules/valid-jsdoc'
        },
        schema: [
            {
                type: 'object',
                properties: {
                    prefer: { type: 'object', additionalProperties: { type: 'string' } },
                    preferType: { type: 'object', additionalProperties: { type: 'string' } },
                    requireReturn: { type: 'boolean', default: true },
                    requireParamDescription: { type: 'boolean', default: true },
                    requireReturnDescription: { type: 'boolean', default: true },
                    matchDescription: { type: 'string' },
                    requireReturnType: { type: 'boolean', default: true },
                    requireParamType: { type: 'boolean', default: true }
                },
                additionalProperties: false
            }
        ],
        fixable: 'code',
        messages: {
            unexpectedTag: 'Unexpected @{{title}} tag; function has no return statement.',
            expected: "Expected JSDoc for '{{name}}' but found '{{jsdocName}}'.",
            use: 'Use @{{name}} instead.',
            useType: "Use '{{expectedTypeName}}' instead of '{{currentTypeName}}'.",
            syntaxError: 'JSDoc syntax error.',
            missingBrace: 'JSDoc type missing brace.',
            missingParamDesc: "Missing JSDoc parameter description for '{{name}}'.",
            missingParamType: "Missing JSDoc parameter type for '{{name}}'.",
            missingReturnType: 'Missing JSDoc return type.',
            missingReturnDesc: 'Missing JSDoc return description.',
            missingReturn: 'Missing JSDoc @{{returns}} for function.',
            missingParam: "Missing JSDoc for parameter '{{name}}'.",
            duplicateParam: "Duplicate JSDoc parameter '{{name}}'.",
            unsatisfiedDesc: 'JSDoc description does not satisfy the regex pattern.'
        },
        deprecated: true,
        replacedBy: []
    },
    'valid-typeof': {
        type: 'problem',
        docs: {
            description: 'enforce comparing `typeof` expressions against valid strings',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/valid-typeof'
        },
        schema: [{ type: 'object', properties: { requireStringLiterals: { type: 'boolean', default: false } }, additionalProperties: false }],
        messages: { invalidValue: 'Invalid typeof comparison value.', notString: 'Typeof comparisons should be to string literals.' }
    },
    'vars-on-top': {
        type: 'suggestion',
        docs: {
            description: 'require `var` declarations be placed at the top of their containing scope',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/vars-on-top'
        },
        schema: [],
        messages: { top: "All 'var' declarations must be at the top of the function scope." }
    },
    'wrap-iife': {
        type: 'layout',
        docs: {
            description: 'require parentheses around immediate `function` invocations',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/wrap-iife'
        },
        schema: [
            { enum: ['outside', 'inside', 'any'] },
            { type: 'object', properties: { functionPrototypeMethods: { type: 'boolean', default: false } }, additionalProperties: false }
        ],
        fixable: 'code',
        messages: {
            wrapInvocation: 'Wrap an immediate function invocation in parentheses.',
            wrapExpression: 'Wrap only the function expression in parens.',
            moveInvocation: 'Move the invocation into the parens that contain the function.'
        }
    },
    'wrap-regex': {
        type: 'layout',
        docs: {
            description: 'require parenthesis around regex literals',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/wrap-regex'
        },
        schema: [],
        fixable: 'code',
        messages: { requireParens: 'Wrap the regexp literal in parens to disambiguate the slash.' }
    },
    'yield-star-spacing': {
        type: 'layout',
        docs: {
            description: 'require or disallow spacing around the `*` in `yield*` expressions',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/yield-star-spacing'
        },
        fixable: 'whitespace',
        schema: [
            {
                oneOf: [
                    { enum: ['before', 'after', 'both', 'neither'] },
                    { type: 'object', properties: { before: { type: 'boolean' }, after: { type: 'boolean' } }, additionalProperties: false }
                ]
            }
        ],
        messages: {
            missingBefore: 'Missing space before *.',
            missingAfter: 'Missing space after *.',
            unexpectedBefore: 'Unexpected space before *.',
            unexpectedAfter: 'Unexpected space after *.'
        }
    },
    yoda: {
        type: 'suggestion',
        docs: {
            description: 'require or disallow "Yoda" conditions',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/yoda'
        },
        schema: [
            { enum: ['always', 'never'] },
            {
                type: 'object',
                properties: { exceptRange: { type: 'boolean', default: false }, onlyEquality: { type: 'boolean', default: false } },
                additionalProperties: false
            }
        ],
        fixable: 'code',
        messages: { expected: 'Expected literal to be on the {{expectedSide}} side of {{operator}}.' }
    },
    'import/no-unresolved': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-unresolved.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    commonjs: { type: 'boolean' },
                    amd: { type: 'boolean' },
                    esmodule: { type: 'boolean' },
                    ignore: { type: 'array', minItems: 1, items: { type: 'string' }, uniqueItems: true },
                    caseSensitive: { type: 'boolean', default: true }
                },
                additionalProperties: false
            }
        ]
    },
    'import/named': { type: 'problem', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/named.md' } },
    'import/default': { type: 'problem', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/default.md' } },
    'import/namespace': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/namespace.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    allowComputed: {
                        description: 'If `false`, will report computed (and thus, un-lintable) references to namespace members.',
                        type: 'boolean',
                        default: false
                    }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-namespace': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-namespace.md' } },
    'import/export': { type: 'problem', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/export.md' } },
    'import/no-mutable-exports': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-mutable-exports.md' }
    },
    'import/extensions': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/extensions.md' },
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['always', 'ignorePackages', 'never'] }], additionalItems: false },
                {
                    type: 'array',
                    items: [
                        { enum: ['always', 'ignorePackages', 'never'] },
                        {
                            type: 'object',
                            properties: {
                                pattern: { type: 'object', patternProperties: { '.*': { enum: ['always', 'ignorePackages', 'never'] } } },
                                ignorePackages: { type: 'boolean' }
                            }
                        }
                    ],
                    additionalItems: false
                },
                {
                    type: 'array',
                    items: [
                        {
                            type: 'object',
                            properties: {
                                pattern: { type: 'object', patternProperties: { '.*': { enum: ['always', 'ignorePackages', 'never'] } } },
                                ignorePackages: { type: 'boolean' }
                            }
                        }
                    ],
                    additionalItems: false
                },
                {
                    type: 'array',
                    items: [{ type: 'object', patternProperties: { '.*': { enum: ['always', 'ignorePackages', 'never'] } } }],
                    additionalItems: false
                },
                {
                    type: 'array',
                    items: [
                        { enum: ['always', 'ignorePackages', 'never'] },
                        { type: 'object', patternProperties: { '.*': { enum: ['always', 'ignorePackages', 'never'] } } }
                    ],
                    additionalItems: false
                }
            ]
        }
    },
    'import/no-restricted-paths': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-restricted-paths.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    zones: {
                        type: 'array',
                        minItems: 1,
                        items: { type: 'object', properties: { target: { type: 'string' }, from: { type: 'string' } }, additionalProperties: false }
                    },
                    basePath: { type: 'string' }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-internal-modules': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-internal-modules.md' },
        schema: [{ type: 'object', properties: { allow: { type: 'array', items: { type: 'string' } } }, additionalProperties: false }]
    },
    'import/group-exports': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/group-exports.md' } },
    'import/no-relative-parent-imports': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-relative-parent-imports.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    commonjs: { type: 'boolean' },
                    amd: { type: 'boolean' },
                    esmodule: { type: 'boolean' },
                    ignore: { type: 'array', minItems: 1, items: { type: 'string' }, uniqueItems: true }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-self-import': {
        type: 'problem',
        docs: {
            description: 'Forbid a module from importing itself',
            recommended: true,
            url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-self-import.md'
        },
        schema: []
    },
    'import/no-cycle': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-cycle.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    commonjs: { type: 'boolean' },
                    amd: { type: 'boolean' },
                    esmodule: { type: 'boolean' },
                    ignore: { type: 'array', minItems: 1, items: { type: 'string' }, uniqueItems: true },
                    maxDepth: { description: 'maximum dependency depth to traverse', type: 'integer', minimum: 1 }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-named-default': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-named-default.md' }
    },
    'import/no-named-as-default': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-named-as-default.md' }
    },
    'import/no-named-as-default-member': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-named-as-default-member.md' }
    },
    'import/no-anonymous-default-export': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-anonymous-default-export.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    allowArray: { description: 'If `false`, will report default export of an array', type: 'boolean' },
                    allowArrowFunction: { description: 'If `false`, will report default export of an arrow function', type: 'boolean' },
                    allowCallExpression: { description: 'If `false`, will report default export of a function call', type: 'boolean' },
                    allowAnonymousClass: { description: 'If `false`, will report default export of an anonymous class', type: 'boolean' },
                    allowAnonymousFunction: { description: 'If `false`, will report default export of an anonymous function', type: 'boolean' },
                    allowLiteral: { description: 'If `false`, will report default export of a literal', type: 'boolean' },
                    allowObject: { description: 'If `false`, will report default export of an object expression', type: 'boolean' }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-unused-modules': {
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-unused-modules.md' },
        schema: [
            {
                properties: {
                    src: {
                        description: 'files/paths to be analyzed (only for unused exports)',
                        type: 'array',
                        minItems: 1,
                        items: { type: 'string', minLength: 1 }
                    },
                    ignoreExports: {
                        description: 'files/paths for which unused exports will not be reported (e.g module entry points)',
                        type: 'array',
                        minItems: 1,
                        items: { type: 'string', minLength: 1 }
                    },
                    missingExports: { description: 'report modules without any exports', type: 'boolean' },
                    unusedExports: { description: 'report exports without any usage', type: 'boolean' }
                },
                not: { properties: { unusedExports: { enum: [false] }, missingExports: { enum: [false] } } },
                anyOf: [
                    { not: { properties: { unusedExports: { enum: [true] } } }, required: ['missingExports'] },
                    { not: { properties: { missingExports: { enum: [true] } } }, required: ['unusedExports'] },
                    { properties: { unusedExports: { enum: [true] } }, required: ['unusedExports'] },
                    { properties: { missingExports: { enum: [true] } }, required: ['missingExports'] }
                ]
            }
        ]
    },
    'import/no-commonjs': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-commonjs.md' },
        schema: {
            anyOf: [
                { type: 'array', items: [{ enum: ['allow-primitive-modules'] }], additionalItems: false },
                {
                    type: 'array',
                    items: [
                        {
                            type: 'object',
                            properties: { allowPrimitiveModules: { type: 'boolean' }, allowRequire: { type: 'boolean' } },
                            additionalProperties: false
                        }
                    ],
                    additionalItems: false
                }
            ]
        }
    },
    'import/no-amd': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-amd.md' } },
    'import/no-duplicates': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-duplicates.md' },
        fixable: 'code'
    },
    'import/first': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/first.md' },
        fixable: 'code'
    },
    'import/max-dependencies': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/max-dependencies.md' },
        schema: [{ type: 'object', properties: { max: { type: 'number' } }, additionalProperties: false }]
    },
    'import/no-extraneous-dependencies': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-extraneous-dependencies.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    devDependencies: { type: ['boolean', 'array'] },
                    optionalDependencies: { type: ['boolean', 'array'] },
                    peerDependencies: { type: ['boolean', 'array'] },
                    packageDir: { type: ['string', 'array'] }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-absolute-path': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-absolute-path.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    commonjs: { type: 'boolean' },
                    amd: { type: 'boolean' },
                    esmodule: { type: 'boolean' },
                    ignore: { type: 'array', minItems: 1, items: { type: 'string' }, uniqueItems: true }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-nodejs-modules': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-nodejs-modules.md' }
    },
    'import/no-webpack-loader-syntax': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-webpack-loader-syntax.md' }
    },
    'import/order': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/order.md' },
        fixable: 'code',
        schema: [
            {
                type: 'object',
                properties: { groups: { type: 'array' }, 'newlines-between': { enum: ['ignore', 'always', 'always-and-inside-groups', 'never'] } },
                additionalProperties: false
            }
        ]
    },
    'import/newline-after-import': {
        type: 'layout',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/newline-after-import.md' },
        schema: [{ type: 'object', properties: { count: { type: 'integer', minimum: 1 } }, additionalProperties: false }],
        fixable: 'whitespace'
    },
    'import/prefer-default-export': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/prefer-default-export.md' }
    },
    'import/no-default-export': { type: 'suggestion', docs: {} },
    'import/no-named-export': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-named-export.md' }
    },
    'import/no-dynamic-require': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-dynamic-require.md' }
    },
    'import/unambiguous': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/unambiguous.md' } },
    'import/no-unassigned-import': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-unassigned-import.md' },
        schema: [
            {
                type: 'object',
                properties: {
                    devDependencies: { type: ['boolean', 'array'] },
                    optionalDependencies: { type: ['boolean', 'array'] },
                    peerDependencies: { type: ['boolean', 'array'] },
                    allow: { type: 'array', items: { type: 'string' } }
                },
                additionalProperties: false
            }
        ]
    },
    'import/no-useless-path-segments': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-useless-path-segments.md' },
        schema: [{ type: 'object', properties: { commonjs: { type: 'boolean' }, noUselessIndex: { type: 'boolean' } }, additionalProperties: false }],
        fixable: 'code'
    },
    'import/dynamic-import-chunkname': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/dynamic-import-chunkname.md' },
        schema: [
            {
                type: 'object',
                properties: { importFunctions: { type: 'array', uniqueItems: true, items: { type: 'string' } }, webpackChunknameFormat: { type: 'string' } }
            }
        ]
    },
    'import/exports-last': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/exports-last.md' } },
    'import/no-deprecated': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.3/docs/rules/no-deprecated.md' } },
    'import/imports-first': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md' },
        fixable: 'code',
        deprecated: true
    },
    'vue/array-bracket-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing inside array brackets',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/array-bracket-spacing.html'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['always', 'never'] },
            {
                type: 'object',
                properties: { singleValue: { type: 'boolean' }, objectsInArrays: { type: 'boolean' }, arraysInArrays: { type: 'boolean' } },
                additionalProperties: false
            }
        ],
        messages: {
            unexpectedSpaceAfter: "There should be no space after '{{tokenValue}}'.",
            unexpectedSpaceBefore: "There should be no space before '{{tokenValue}}'.",
            missingSpaceAfter: "A space is required after '{{tokenValue}}'.",
            missingSpaceBefore: "A space is required before '{{tokenValue}}'."
        }
    },
    'vue/arrow-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before and after the arrow in arrow functions',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/arrow-spacing.html'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: { before: { type: 'boolean', default: true }, after: { type: 'boolean', default: true } },
                additionalProperties: false
            }
        ],
        messages: {
            expectedBefore: 'Missing space before =>.',
            unexpectedBefore: 'Unexpected space before =>.',
            expectedAfter: 'Missing space after =>.',
            unexpectedAfter: 'Unexpected space after =>.'
        }
    },
    'vue/attribute-hyphenation': {
        type: 'suggestion',
        docs: {
            description: 'enforce attribute naming style on custom components in template',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/attribute-hyphenation.html'
        },
        fixable: 'code',
        schema: [
            { enum: ['always', 'never'] },
            {
                type: 'object',
                properties: {
                    ignore: {
                        type: 'array',
                        items: { allOf: [{ type: 'string' }, { not: { type: 'string', pattern: ':exit$' } }, { not: { type: 'string', pattern: '^\\s*$' } }] },
                        uniqueItems: true,
                        additionalItems: false
                    }
                },
                additionalProperties: false
            }
        ]
    },
    'vue/attributes-order': {
        type: 'suggestion',
        docs: { description: 'enforce order of attributes', category: 'recommended', url: 'https://eslint.vuejs.org/rules/attributes-order.html' },
        fixable: 'code',
        schema: { type: 'array', properties: { order: { items: { type: 'string' }, maxItems: 10, minItems: 10 } } }
    },
    'vue/block-spacing': {
        type: 'layout',
        docs: {
            description: 'disallow or enforce spaces inside of blocks after opening block and before closing block',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/block-spacing.html'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }],
        messages: { missing: "Requires a space {{location}} '{{token}}'.", extra: "Unexpected space(s) {{location}} '{{token}}'." }
    },
    'vue/brace-style': {
        type: 'layout',
        docs: {
            description: 'enforce consistent brace style for blocks',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/brace-style.html'
        },
        schema: [
            { enum: ['1tbs', 'stroustrup', 'allman'] },
            { type: 'object', properties: { allowSingleLine: { type: 'boolean', default: false } }, additionalProperties: false }
        ],
        fixable: 'whitespace',
        messages: {
            nextLineOpen: 'Opening curly brace does not appear on the same line as controlling statement.',
            sameLineOpen: 'Opening curly brace appears on the same line as controlling statement.',
            blockSameLine: 'Statement inside of curly braces should be on next line.',
            nextLineClose: 'Closing curly brace does not appear on the same line as the subsequent block.',
            singleLineClose: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.',
            sameLineClose: 'Closing curly brace appears on the same line as the subsequent block.'
        }
    },
    'vue/camelcase': {
        type: 'suggestion',
        docs: { description: 'enforce camelcase naming convention', recommended: false, url: 'https://vuejs.github.io/eslint-plugin-vue/rules/camelcase.html' },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreDestructuring: { type: 'boolean', default: false },
                    properties: { enum: ['always', 'never'] },
                    allow: { type: 'array', items: [{ type: 'string' }], minItems: 0, uniqueItems: true }
                },
                additionalProperties: false
            }
        ],
        messages: { notCamelCase: "Identifier '{{name}}' is not in camel case." }
    },
    'vue/comma-dangle': {
        type: 'layout',
        docs: {
            description: 'require or disallow trailing commas',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/comma-dangle.html'
        },
        fixable: 'code',
        schema: {
            definitions: {
                value: { enum: ['always-multiline', 'always', 'never', 'only-multiline'] },
                valueWithIgnore: { enum: ['always-multiline', 'always', 'ignore', 'never', 'only-multiline'] }
            },
            type: 'array',
            items: [
                {
                    oneOf: [
                        { $ref: '#/definitions/value' },
                        {
                            type: 'object',
                            properties: {
                                arrays: { $ref: '#/definitions/valueWithIgnore' },
                                objects: { $ref: '#/definitions/valueWithIgnore' },
                                imports: { $ref: '#/definitions/valueWithIgnore' },
                                exports: { $ref: '#/definitions/valueWithIgnore' },
                                functions: { $ref: '#/definitions/valueWithIgnore' }
                            },
                            additionalProperties: false
                        }
                    ]
                }
            ]
        },
        messages: { unexpected: 'Unexpected trailing comma.', missing: 'Missing trailing comma.' }
    },
    'vue/comment-directive': {
        type: 'problem',
        docs: { description: 'support comment-directives in `<template>`', category: 'base', url: 'https://eslint.vuejs.org/rules/comment-directive.html' },
        schema: []
    },
    'vue/component-name-in-template-casing': {
        type: 'suggestion',
        docs: {
            description: 'enforce specific casing for the component naming style in template',
            url: 'https://eslint.vuejs.org/rules/component-name-in-template-casing.html'
        },
        fixable: 'code',
        schema: [
            { enum: ['PascalCase', 'kebab-case'] },
            {
                type: 'object',
                properties: {
                    ignores: { type: 'array', items: { type: 'string' }, uniqueItems: true, additionalItems: false },
                    registeredComponentsOnly: { type: 'boolean' }
                },
                additionalProperties: false
            }
        ]
    },
    'vue/eqeqeq': {
        type: 'suggestion',
        docs: { description: 'require the use of `===` and `!==`', recommended: false, url: 'https://vuejs.github.io/eslint-plugin-vue/rules/eqeqeq.html' },
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        { enum: ['always'] },
                        { type: 'object', properties: { null: { enum: ['always', 'never', 'ignore'] } }, additionalProperties: false }
                    ],
                    additionalItems: false
                },
                { type: 'array', items: [{ enum: ['smart', 'allow-null'] }], additionalItems: false }
            ]
        },
        fixable: 'code',
        messages: { unexpected: "Expected '{{expectedOperator}}' and instead saw '{{actualOperator}}'." }
    },
    'vue/html-closing-bracket-newline': {
        type: 'layout',
        docs: {
            description: "require or disallow a line break before tag's closing brackets",
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/html-closing-bracket-newline.html'
        },
        fixable: 'whitespace',
        schema: [
            { type: 'object', properties: { singleline: { enum: ['always', 'never'] }, multiline: { enum: ['always', 'never'] } }, additionalProperties: false }
        ]
    },
    'vue/html-closing-bracket-spacing': {
        type: 'layout',
        docs: {
            description: "require or disallow a space before tag's closing brackets",
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html'
        },
        schema: [
            {
                type: 'object',
                properties: { startTag: { enum: ['always', 'never'] }, endTag: { enum: ['always', 'never'] }, selfClosingTag: { enum: ['always', 'never'] } },
                additionalProperties: false
            }
        ],
        fixable: 'whitespace'
    },
    'vue/html-end-tags': {
        type: 'suggestion',
        docs: { description: 'enforce end tag style', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/html-end-tags.html' },
        fixable: 'code',
        schema: []
    },
    'vue/html-indent': {
        type: 'layout',
        docs: {
            description: 'enforce consistent indentation in `<template>`',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/html-indent.html'
        },
        fixable: 'whitespace',
        schema: [
            { anyOf: [{ type: 'integer', minimum: 1 }, { enum: ['tab'] }] },
            {
                type: 'object',
                properties: {
                    attribute: { type: 'integer', minimum: 0 },
                    baseIndent: { type: 'integer', minimum: 0 },
                    closeBracket: { type: 'integer', minimum: 0 },
                    switchCase: { type: 'integer', minimum: 0 },
                    alignAttributesVertically: { type: 'boolean' },
                    ignores: {
                        type: 'array',
                        items: { allOf: [{ type: 'string' }, { not: { type: 'string', pattern: ':exit$' } }, { not: { type: 'string', pattern: '^\\s*$' } }] },
                        uniqueItems: true,
                        additionalItems: false
                    }
                },
                additionalProperties: false
            }
        ]
    },
    'vue/html-quotes': {
        type: 'layout',
        docs: {
            description: 'enforce quotes style of HTML attributes',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/html-quotes.html'
        },
        fixable: 'code',
        schema: [{ enum: ['double', 'single'] }]
    },
    'vue/html-self-closing': {
        type: 'layout',
        docs: { description: 'enforce self-closing style', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/html-self-closing.html' },
        fixable: 'code',
        schema: {
            definitions: { optionValue: { enum: ['always', 'never', 'any'] } },
            type: 'array',
            items: [
                {
                    type: 'object',
                    properties: {
                        html: {
                            type: 'object',
                            properties: {
                                normal: { $ref: '#/definitions/optionValue' },
                                void: { $ref: '#/definitions/optionValue' },
                                component: { $ref: '#/definitions/optionValue' }
                            },
                            additionalProperties: false
                        },
                        svg: { $ref: '#/definitions/optionValue' },
                        math: { $ref: '#/definitions/optionValue' }
                    },
                    additionalProperties: false
                }
            ],
            maxItems: 1
        }
    },
    'vue/jsx-uses-vars': {
        type: 'problem',
        docs: {
            description: 'prevent variables used in JSX to be marked as unused',
            category: 'base',
            url: 'https://eslint.vuejs.org/rules/jsx-uses-vars.html'
        },
        schema: []
    },
    'vue/key-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing between keys and values in object literal properties',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/key-spacing.html'
        },
        fixable: 'whitespace',
        schema: [
            {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            align: {
                                anyOf: [
                                    { enum: ['colon', 'value'] },
                                    {
                                        type: 'object',
                                        properties: {
                                            mode: { enum: ['strict', 'minimum'] },
                                            on: { enum: ['colon', 'value'] },
                                            beforeColon: { type: 'boolean' },
                                            afterColon: { type: 'boolean' }
                                        },
                                        additionalProperties: false
                                    }
                                ]
                            },
                            mode: { enum: ['strict', 'minimum'] },
                            beforeColon: { type: 'boolean' },
                            afterColon: { type: 'boolean' }
                        },
                        additionalProperties: false
                    },
                    {
                        type: 'object',
                        properties: {
                            singleLine: {
                                type: 'object',
                                properties: { mode: { enum: ['strict', 'minimum'] }, beforeColon: { type: 'boolean' }, afterColon: { type: 'boolean' } },
                                additionalProperties: false
                            },
                            multiLine: {
                                type: 'object',
                                properties: {
                                    align: {
                                        anyOf: [
                                            { enum: ['colon', 'value'] },
                                            {
                                                type: 'object',
                                                properties: {
                                                    mode: { enum: ['strict', 'minimum'] },
                                                    on: { enum: ['colon', 'value'] },
                                                    beforeColon: { type: 'boolean' },
                                                    afterColon: { type: 'boolean' }
                                                },
                                                additionalProperties: false
                                            }
                                        ]
                                    },
                                    mode: { enum: ['strict', 'minimum'] },
                                    beforeColon: { type: 'boolean' },
                                    afterColon: { type: 'boolean' }
                                },
                                additionalProperties: false
                            }
                        },
                        additionalProperties: false
                    },
                    {
                        type: 'object',
                        properties: {
                            singleLine: {
                                type: 'object',
                                properties: { mode: { enum: ['strict', 'minimum'] }, beforeColon: { type: 'boolean' }, afterColon: { type: 'boolean' } },
                                additionalProperties: false
                            },
                            multiLine: {
                                type: 'object',
                                properties: { mode: { enum: ['strict', 'minimum'] }, beforeColon: { type: 'boolean' }, afterColon: { type: 'boolean' } },
                                additionalProperties: false
                            },
                            align: {
                                type: 'object',
                                properties: {
                                    mode: { enum: ['strict', 'minimum'] },
                                    on: { enum: ['colon', 'value'] },
                                    beforeColon: { type: 'boolean' },
                                    afterColon: { type: 'boolean' }
                                },
                                additionalProperties: false
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: {
            extraKey: "Extra space after {{computed}}key '{{key}}'.",
            extraValue: "Extra space before value for {{computed}}key '{{key}}'.",
            missingKey: "Missing space after {{computed}}key '{{key}}'.",
            missingValue: "Missing space before value for {{computed}}key '{{key}}'."
        }
    },
    'vue/match-component-file-name': {
        type: 'suggestion',
        docs: { description: 'require component name property to match its file name', url: 'https://eslint.vuejs.org/rules/match-component-file-name.html' },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    extensions: { type: 'array', items: { type: 'string' }, uniqueItems: true, additionalItems: false },
                    shouldMatchCase: { type: 'boolean' }
                },
                additionalProperties: false
            }
        ]
    },
    'vue/max-attributes-per-line': {
        type: 'layout',
        docs: {
            description: 'enforce the maximum number of attributes per line',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/max-attributes-per-line.html'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    singleline: {
                        anyOf: [
                            { type: 'number', minimum: 1 },
                            { type: 'object', properties: { max: { type: 'number', minimum: 1 } }, additionalProperties: false }
                        ]
                    },
                    multiline: {
                        anyOf: [
                            { type: 'number', minimum: 1 },
                            {
                                type: 'object',
                                properties: { max: { type: 'number', minimum: 1 }, allowFirstLine: { type: 'boolean' } },
                                additionalProperties: false
                            }
                        ]
                    }
                }
            }
        ]
    },
    'vue/multiline-html-element-content-newline': {
        type: 'layout',
        docs: {
            description: 'require a line break before and after the contents of a multiline element',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreWhenEmpty: { type: 'boolean' },
                    ignores: { type: 'array', items: { type: 'string' }, uniqueItems: true, additionalItems: false },
                    allowEmptyLines: { type: 'boolean' }
                },
                additionalProperties: false
            }
        ],
        messages: {
            unexpectedAfterClosingBracket: 'Expected 1 line break after opening tag (`<{{name}}>`), but {{actual}} line breaks found.',
            unexpectedBeforeOpeningBracket: 'Expected 1 line break before closing tag (`</{{name}}>`), but {{actual}} line breaks found.'
        }
    },
    'vue/mustache-interpolation-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce unified spacing in mustache interpolations',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html'
        },
        fixable: 'whitespace',
        schema: [{ enum: ['always', 'never'] }]
    },
    'vue/name-property-casing': {
        type: 'suggestion',
        docs: {
            description: 'enforce specific casing for the name property in Vue components',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/name-property-casing.html'
        },
        fixable: 'code',
        schema: [{ enum: ['PascalCase', 'kebab-case'] }]
    },
    'vue/no-async-in-computed-properties': {
        type: 'problem',
        docs: {
            description: 'disallow asynchronous actions in computed properties',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/no-async-in-computed-properties.html'
        },
        fixable: null,
        schema: []
    },
    'vue/no-boolean-default': {
        type: 'suggestion',
        docs: { description: 'disallow boolean defaults', url: 'https://eslint.vuejs.org/rules/no-boolean-default.html' },
        fixable: 'code',
        schema: [{ enum: ['default-false', 'no-default'] }]
    },
    'vue/no-confusing-v-for-v-if': {
        type: 'suggestion',
        docs: {
            description: 'disallow confusing `v-for` and `v-if` on the same element',
            category: 'recommended',
            url: 'https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html',
            replacedBy: ['no-use-v-if-with-v-for']
        },
        deprecated: true,
        fixable: null,
        schema: []
    },
    'vue/no-dupe-keys': {
        type: 'problem',
        docs: { description: 'disallow duplication of field names', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-dupe-keys.html' },
        fixable: null,
        schema: [{ type: 'object', properties: { groups: { type: 'array' } }, additionalProperties: false }]
    },
    'vue/no-duplicate-attributes': {
        type: 'problem',
        docs: { description: 'disallow duplication of attributes', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-duplicate-attributes.html' },
        fixable: null,
        schema: [{ type: 'object', properties: { allowCoexistClass: { type: 'boolean' }, allowCoexistStyle: { type: 'boolean' } } }]
    },
    'vue/no-multi-spaces': {
        type: 'layout',
        docs: { description: 'disallow multiple spaces', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/no-multi-spaces.html' },
        fixable: 'whitespace',
        schema: [{ type: 'object', properties: { ignoreProperties: { type: 'boolean' } }, additionalProperties: false }]
    },
    'vue/no-parsing-error': {
        type: 'problem',
        docs: { description: 'disallow parsing errors in `<template>`', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-parsing-error.html' },
        fixable: null,
        schema: [
            {
                type: 'object',
                properties: {
                    'abrupt-closing-of-empty-comment': { type: 'boolean' },
                    'absence-of-digits-in-numeric-character-reference': { type: 'boolean' },
                    'cdata-in-html-content': { type: 'boolean' },
                    'character-reference-outside-unicode-range': { type: 'boolean' },
                    'control-character-in-input-stream': { type: 'boolean' },
                    'control-character-reference': { type: 'boolean' },
                    'eof-before-tag-name': { type: 'boolean' },
                    'eof-in-cdata': { type: 'boolean' },
                    'eof-in-comment': { type: 'boolean' },
                    'eof-in-tag': { type: 'boolean' },
                    'incorrectly-closed-comment': { type: 'boolean' },
                    'incorrectly-opened-comment': { type: 'boolean' },
                    'invalid-first-character-of-tag-name': { type: 'boolean' },
                    'missing-attribute-value': { type: 'boolean' },
                    'missing-end-tag-name': { type: 'boolean' },
                    'missing-semicolon-after-character-reference': { type: 'boolean' },
                    'missing-whitespace-between-attributes': { type: 'boolean' },
                    'nested-comment': { type: 'boolean' },
                    'noncharacter-character-reference': { type: 'boolean' },
                    'noncharacter-in-input-stream': { type: 'boolean' },
                    'null-character-reference': { type: 'boolean' },
                    'surrogate-character-reference': { type: 'boolean' },
                    'surrogate-in-input-stream': { type: 'boolean' },
                    'unexpected-character-in-attribute-name': { type: 'boolean' },
                    'unexpected-character-in-unquoted-attribute-value': { type: 'boolean' },
                    'unexpected-equals-sign-before-attribute-name': { type: 'boolean' },
                    'unexpected-null-character': { type: 'boolean' },
                    'unexpected-question-mark-instead-of-tag-name': { type: 'boolean' },
                    'unexpected-solidus-in-tag': { type: 'boolean' },
                    'unknown-named-character-reference': { type: 'boolean' },
                    'end-tag-with-attributes': { type: 'boolean' },
                    'duplicate-attribute': { type: 'boolean' },
                    'end-tag-with-trailing-solidus': { type: 'boolean' },
                    'non-void-html-element-start-tag-with-trailing-solidus': { type: 'boolean' },
                    'x-invalid-end-tag': { type: 'boolean' },
                    'x-invalid-namespace': { type: 'boolean' }
                },
                additionalProperties: false
            }
        ]
    },
    'vue/no-reserved-keys': {
        type: 'suggestion',
        docs: { description: 'disallow overwriting reserved keys', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-reserved-keys.html' },
        fixable: null,
        schema: [{ type: 'object', properties: { reserved: { type: 'array' }, groups: { type: 'array' } }, additionalProperties: false }]
    },
    'vue/no-restricted-syntax': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified syntax',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/no-restricted-syntax.html'
        },
        schema: {
            type: 'array',
            items: [
                {
                    oneOf: [
                        { type: 'string' },
                        {
                            type: 'object',
                            properties: { selector: { type: 'string' }, message: { type: 'string' } },
                            required: ['selector'],
                            additionalProperties: false
                        }
                    ]
                }
            ],
            uniqueItems: true,
            minItems: 0
        }
    },
    'vue/no-shared-component-data': {
        type: 'problem',
        docs: {
            description: "enforce component's data property to be a function",
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/no-shared-component-data.html'
        },
        fixable: 'code',
        schema: []
    },
    'vue/no-side-effects-in-computed-properties': {
        type: 'problem',
        docs: {
            description: 'disallow side effects in computed properties',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html'
        },
        fixable: null,
        schema: []
    },
    'vue/no-spaces-around-equal-signs-in-attribute': {
        type: 'layout',
        docs: {
            description: 'disallow spaces around equal signs in attribute',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html'
        },
        fixable: 'whitespace',
        schema: []
    },
    'vue/no-template-key': {
        type: 'problem',
        docs: { description: 'disallow `key` attribute on `<template>`', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-template-key.html' },
        fixable: null,
        schema: []
    },
    'vue/no-template-shadow': {
        type: 'suggestion',
        docs: {
            description: 'disallow variable declarations from shadowing variables declared in the outer scope',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/no-template-shadow.html'
        },
        fixable: null,
        schema: []
    },
    'vue/no-textarea-mustache': {
        type: 'problem',
        docs: { description: 'disallow mustaches in `<textarea>`', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-textarea-mustache.html' },
        fixable: null,
        schema: []
    },
    'vue/no-unused-components': {
        type: 'suggestion',
        docs: {
            description: 'disallow registering components that are not used inside templates',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/no-unused-components.html'
        },
        fixable: null,
        schema: [{ type: 'object', properties: { ignoreWhenBindingPresent: { type: 'boolean' } }, additionalProperties: false }]
    },
    'vue/no-unused-vars': {
        type: 'suggestion',
        docs: {
            description: 'disallow unused variable definitions of v-for directives or scope attributes',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/no-unused-vars.html'
        },
        fixable: null,
        schema: []
    },
    'vue/no-use-v-if-with-v-for': {
        type: 'suggestion',
        docs: {
            description: 'disallow use v-if on the same element as v-for',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html'
        },
        fixable: null,
        schema: [{ type: 'object', properties: { allowUsingIterationVar: { type: 'boolean' } } }]
    },
    'vue/no-v-html': {
        type: 'suggestion',
        docs: { description: 'disallow use of v-html to prevent XSS attack', category: 'recommended', url: 'https://eslint.vuejs.org/rules/no-v-html.html' },
        fixable: null,
        schema: []
    },
    'vue/object-curly-spacing': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing inside braces',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/object-curly-spacing.html'
        },
        fixable: 'whitespace',
        schema: [
            { enum: ['always', 'never'] },
            { type: 'object', properties: { arraysInObjects: { type: 'boolean' }, objectsInObjects: { type: 'boolean' } }, additionalProperties: false }
        ]
    },
    'vue/order-in-components': {
        type: 'suggestion',
        docs: {
            description: 'enforce order of properties in components',
            category: 'recommended',
            url: 'https://eslint.vuejs.org/rules/order-in-components.html'
        },
        fixable: 'code',
        schema: [{ type: 'object', properties: { order: { type: 'array' } }, additionalProperties: false }]
    },
    'vue/prop-name-casing': {
        type: 'suggestion',
        docs: {
            description: 'enforce specific casing for the Prop name in Vue components',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/prop-name-casing.html'
        },
        fixable: 'code',
        schema: [{ enum: ['camelCase', 'snake_case'] }]
    },
    'vue/require-component-is': {
        type: 'problem',
        docs: {
            description: 'require `v-bind:is` of `<component>` elements',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/require-component-is.html'
        },
        fixable: null,
        schema: []
    },
    'vue/require-default-prop': {
        type: 'suggestion',
        docs: {
            description: 'require default value for props',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/require-default-prop.html'
        },
        fixable: null,
        schema: []
    },
    'vue/require-direct-export': {
        type: 'suggestion',
        docs: { description: 'require the component to be directly exported', url: 'https://eslint.vuejs.org/rules/require-direct-export.html' },
        fixable: null,
        schema: []
    },
    'vue/require-prop-type-constructor': {
        type: 'suggestion',
        docs: {
            description: 'require prop type to be a constructor',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/require-prop-type-constructor.html'
        },
        fixable: 'code',
        schema: []
    },
    'vue/require-prop-types': {
        type: 'suggestion',
        docs: {
            description: 'require type definitions in props',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/require-prop-types.html'
        },
        fixable: null,
        schema: []
    },
    'vue/require-render-return': {
        type: 'problem',
        docs: {
            description: 'enforce render function to always return value',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/require-render-return.html'
        },
        fixable: null,
        schema: []
    },
    'vue/require-v-for-key': {
        type: 'problem',
        docs: {
            description: 'require `v-bind:key` with `v-for` directives',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/require-v-for-key.html'
        },
        fixable: null,
        schema: []
    },
    'vue/require-valid-default-prop': {
        type: 'suggestion',
        docs: {
            description: 'enforce props default values to be valid',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/require-valid-default-prop.html'
        },
        fixable: null,
        schema: []
    },
    'vue/return-in-computed-property': {
        type: 'problem',
        docs: {
            description: 'enforce that a return statement is present in computed property',
            category: 'essential',
            url: 'https://eslint.vuejs.org/rules/return-in-computed-property.html'
        },
        fixable: null,
        schema: [{ type: 'object', properties: { treatUndefinedAsUnspecified: { type: 'boolean' } }, additionalProperties: false }]
    },
    'vue/script-indent': {
        type: 'layout',
        docs: { description: 'enforce consistent indentation in `<script>`', url: 'https://eslint.vuejs.org/rules/script-indent.html' },
        fixable: 'whitespace',
        schema: [
            { anyOf: [{ type: 'integer', minimum: 1 }, { enum: ['tab'] }] },
            {
                type: 'object',
                properties: {
                    baseIndent: { type: 'integer', minimum: 0 },
                    switchCase: { type: 'integer', minimum: 0 },
                    ignores: {
                        type: 'array',
                        items: { allOf: [{ type: 'string' }, { not: { type: 'string', pattern: ':exit$' } }, { not: { type: 'string', pattern: '^\\s*$' } }] },
                        uniqueItems: true,
                        additionalItems: false
                    }
                },
                additionalProperties: false
            }
        ]
    },
    'vue/singleline-html-element-content-newline': {
        type: 'layout',
        docs: {
            description: 'require a line break before and after the contents of a singleline element',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreWhenNoAttributes: { type: 'boolean' },
                    ignoreWhenEmpty: { type: 'boolean' },
                    ignores: { type: 'array', items: { type: 'string' }, uniqueItems: true, additionalItems: false }
                },
                additionalProperties: false
            }
        ],
        messages: {
            unexpectedAfterClosingBracket: 'Expected 1 line break after opening tag (`<{{name}}>`), but no line breaks found.',
            unexpectedBeforeOpeningBracket: 'Expected 1 line break before closing tag (`</{{name}}>`), but no line breaks found.'
        }
    },
    'vue/space-infix-ops': {
        type: 'layout',
        docs: {
            description: 'require spacing around infix operators',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/space-infix-ops.html'
        },
        fixable: 'whitespace',
        schema: [{ type: 'object', properties: { int32Hint: { type: 'boolean', default: false } }, additionalProperties: false }]
    },
    'vue/space-unary-ops': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before or after unary operators',
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/space-unary-ops.html'
        },
        fixable: 'whitespace',
        schema: [
            {
                type: 'object',
                properties: {
                    words: { type: 'boolean', default: true },
                    nonwords: { type: 'boolean', default: false },
                    overrides: { type: 'object', additionalProperties: { type: 'boolean' } }
                },
                additionalProperties: false
            }
        ],
        messages: {
            unexpectedBefore: "Unexpected space before unary operator '{{operator}}'.",
            unexpectedAfter: "Unexpected space after unary operator '{{operator}}'.",
            unexpectedAfterWord: "Unexpected space after unary word operator '{{word}}'.",
            wordOperator: "Unary word operator '{{word}}' must be followed by whitespace.",
            operator: "Unary operator '{{operator}}' must be followed by whitespace.",
            beforeUnaryExpressions: "Space is required before unary expressions '{{token}}'."
        }
    },
    'vue/this-in-template': {
        type: 'suggestion',
        docs: { description: 'disallow usage of `this` in template', category: 'recommended', url: 'https://eslint.vuejs.org/rules/this-in-template.html' },
        fixable: null,
        schema: [{ enum: ['always', 'never'] }]
    },
    'vue/use-v-on-exact': {
        type: 'suggestion',
        docs: { description: 'enforce usage of `exact` modifier on `v-on`', category: 'essential', url: 'https://eslint.vuejs.org/rules/use-v-on-exact.html' },
        fixable: null,
        schema: []
    },
    'vue/v-bind-style': {
        type: 'suggestion',
        docs: { description: 'enforce `v-bind` directive style', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/v-bind-style.html' },
        fixable: 'code',
        schema: [{ enum: ['shorthand', 'longform'] }]
    },
    'vue/v-on-function-call': {
        type: 'suggestion',
        docs: {
            description: 'enforce or forbid parentheses after method calls without arguments in `v-on` directives',
            url: 'https://eslint.vuejs.org/rules/v-on-function-call.html'
        },
        fixable: 'code',
        schema: [{ enum: ['always', 'never'] }]
    },
    'vue/v-on-style': {
        type: 'suggestion',
        docs: { description: 'enforce `v-on` directive style', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/v-on-style.html' },
        fixable: 'code',
        schema: [{ enum: ['shorthand', 'longform'] }]
    },
    'vue/valid-template-root': {
        type: 'problem',
        docs: { description: 'enforce valid template root', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-template-root.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-bind': {
        type: 'problem',
        docs: { description: 'enforce valid `v-bind` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-bind.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-cloak': {
        type: 'problem',
        docs: { description: 'enforce valid `v-cloak` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-cloak.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-else-if': {
        type: 'problem',
        docs: { description: 'enforce valid `v-else-if` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-else-if.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-else': {
        type: 'problem',
        docs: { description: 'enforce valid `v-else` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-else.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-for': {
        type: 'problem',
        docs: { description: 'enforce valid `v-for` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-for.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-html': {
        type: 'problem',
        docs: { description: 'enforce valid `v-html` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-html.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-if': {
        type: 'problem',
        docs: { description: 'enforce valid `v-if` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-if.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-model': {
        type: 'problem',
        docs: { description: 'enforce valid `v-model` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-model.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-on': {
        type: 'problem',
        docs: { description: 'enforce valid `v-on` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-on.html' },
        fixable: null,
        schema: [{ type: 'object', properties: { modifiers: { type: 'array' } }, additionalProperties: false }]
    },
    'vue/valid-v-once': {
        type: 'problem',
        docs: { description: 'enforce valid `v-once` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-once.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-pre': {
        type: 'problem',
        docs: { description: 'enforce valid `v-pre` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-pre.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-show': {
        type: 'problem',
        docs: { description: 'enforce valid `v-show` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-show.html' },
        fixable: null,
        schema: []
    },
    'vue/valid-v-text': {
        type: 'problem',
        docs: { description: 'enforce valid `v-text` directives', category: 'essential', url: 'https://eslint.vuejs.org/rules/valid-v-text.html' },
        fixable: null,
        schema: []
    }
};
