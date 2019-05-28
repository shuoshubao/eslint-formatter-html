window.rulesMeta = {
    'accessor-pairs': {
        type: 'suggestion',
        docs: {
            description: 'enforce getter and setter pairs in objects',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/accessor-pairs'
        },
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: { anyOf: [Array] },
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: { definitions: [Object], type: 'array', items: [Array] },
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: { type: 'array', items: [Object], uniqueItems: true },
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
        schema: { anyOf: [Array] },
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: { anyOf: [Array] },
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
        schema: { anyOf: [Array] },
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
        schema: { anyOf: [Array] },
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
        schema: { definitions: [Object], items: [Array] },
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: { type: 'array', items: [Object], uniqueItems: true },
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
        messages: { expected: 'Expected a linebreak before this expression.', unexpected: 'Expected no linebreak before this expression.' }
    },
    indent: {
        type: 'layout',
        docs: { description: 'enforce consistent indentation', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/indent' },
        fixable: 'whitespace',
        schema: [[Object], [Object]],
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
        schema: [[Object], [Object]],
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
        schema: { anyOf: [Array] },
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
        messages: { tooDeeply: 'Blocks are nested too deeply ({{depth}}).' }
    },
    'max-len': {
        type: 'layout',
        docs: { description: 'enforce a maximum line length', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/max-len' },
        schema: [[Object], [Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
        messages: { confusing: 'Arrow function used ambiguously with a conditional expression.' }
    },
    'no-console': {
        type: 'suggestion',
        docs: { description: 'disallow the use of `console`', category: 'Possible Errors', recommended: true, url: 'https://eslint.org/docs/rules/no-console' },
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
        fixable: 'code',
        messages: { unexpected: "Unnecessary 'else' after 'return'." }
    },
    'no-empty': {
        type: 'suggestion',
        docs: { description: 'disallow empty block statements', category: 'Possible Errors', recommended: true, url: 'https://eslint.org/docs/rules/no-empty' },
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: { anyOf: [Array] },
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
        schema: [[Object]],
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
    },
    'no-invalid-regexp': {
        type: 'problem',
        docs: {
            description: 'disallow invalid regular expression strings in `RegExp` constructors',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-invalid-regexp'
        },
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]],
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
        schema: [[Object]]
    },
    'no-mixed-requires': {
        type: 'suggestion',
        docs: {
            description: 'disallow `require` calls to be mixed with regular variable declarations',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-mixed-requires'
        },
        schema: [[Object]]
    },
    'no-mixed-spaces-and-tabs': {
        type: 'layout',
        docs: {
            description: 'disallow mixed spaces and tabs for indentation',
            category: 'Stylistic Issues',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-mixed-spaces-and-tabs'
        },
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: { type: 'array', items: [Object], uniqueItems: true, minItems: 0 }
    },
    'no-restricted-imports': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified modules when loaded by `import`',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-imports'
        },
        schema: { anyOf: [Array] }
    },
    'no-restricted-modules': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified modules when loaded by `require`',
            category: 'Node.js and CommonJS',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-modules'
        },
        schema: { anyOf: [Array] }
    },
    'no-restricted-properties': {
        type: 'suggestion',
        docs: {
            description: 'disallow certain properties on certain objects',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-properties'
        },
        schema: { type: 'array', items: [Object], uniqueItems: true }
    },
    'no-restricted-syntax': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified syntax',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-restricted-syntax'
        },
        schema: { type: 'array', items: [Array], uniqueItems: true, minItems: 0 }
    },
    'no-return-assign': {
        type: 'suggestion',
        docs: {
            description: 'disallow assignment operators in `return` statements',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-return-assign'
        },
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
    },
    'no-tabs': {
        type: 'layout',
        docs: { description: 'disallow all tabs', category: 'Stylistic Issues', recommended: false, url: 'https://eslint.org/docs/rules/no-tabs' },
        schema: [[Object]]
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
        schema: [[Object]]
    },
    'no-undef': {
        type: 'problem',
        docs: {
            description: 'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
            category: 'Variables',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-undef'
        },
        schema: [[Object]],
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
        schema: [[Object]]
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
        schema: [[Object]],
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
        schema: [[Object]]
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
        schema: [[Object]]
    },
    'no-use-before-define': {
        type: 'problem',
        docs: {
            description: 'disallow the use of variables before they are defined',
            category: 'Variables',
            recommended: false,
            url: 'https://eslint.org/docs/rules/no-use-before-define'
        },
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object], [Object]]
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
        schema: [[Object]]
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
        schema: [[Object], [Object]]
    },
    'object-property-newline': {
        type: 'layout',
        docs: {
            description: 'enforce placing object properties on separate lines',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/object-property-newline'
        },
        schema: [[Object]],
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
        schema: { anyOf: [Array] }
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
        schema: [[Object]]
    },
    'one-var-declaration-per-line': {
        type: 'suggestion',
        docs: {
            description: 'require or disallow newlines around variable declarations',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/one-var-declaration-per-line'
        },
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object], [Object]]
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
        schema: { definitions: [Object], type: 'array', items: [Object], additionalItems: false }
    },
    'prefer-arrow-callback': {
        type: 'suggestion',
        docs: {
            description: 'require using arrow functions for callbacks',
            category: 'ECMAScript 6',
            recommended: false,
            url: 'https://eslint.org/docs/rules/prefer-arrow-callback'
        },
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]]
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: { anyOf: [Array] },
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
        schema: [[Object], [Object]]
    },
    radix: {
        type: 'suggestion',
        docs: {
            description: 'enforce the consistent use of the radix argument when using `parseInt()`',
            category: 'Best Practices',
            recommended: false,
            url: 'https://eslint.org/docs/rules/radix'
        },
        schema: [[Object]]
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
        schema: [[Object]],
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
        schema: [[Object]]
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
        schema: { anyOf: [Array] }
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
        schema: [[Object]]
    },
    'semi-style': {
        type: 'layout',
        docs: {
            description: 'enforce location of semicolons',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/semi-style'
        },
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]]
    },
    'sort-vars': {
        type: 'suggestion',
        docs: {
            description: 'require variables within the same declaration block to be sorted',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://eslint.org/docs/rules/sort-vars'
        },
        schema: [[Object]],
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
        schema: [[Object]]
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
        schema: [[Object]]
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
        schema: [[Object], [Object]]
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
        schema: [[Object]]
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
        schema: [[Object]],
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
        schema: [[Object], [Object]]
    },
    strict: {
        type: 'suggestion',
        docs: {
            description: 'require or disallow strict mode directives',
            category: 'Strict Mode',
            recommended: false,
            url: 'https://eslint.org/docs/rules/strict'
        },
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
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
        schema: [[Object]],
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
        schema: [[Object], [Object]],
        fixable: 'code',
        messages: { expected: 'Expected literal to be on the {{expectedSide}} side of {{operator}}.' }
    },
    'import/no-unresolved': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-unresolved.md' },
        schema: [[Object]]
    },
    'import/named': { type: 'problem', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/named.md' } },
    'import/default': { type: 'problem', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/default.md' } },
    'import/namespace': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/namespace.md' },
        schema: [[Object]]
    },
    'import/no-namespace': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-namespace.md' } },
    'import/export': { type: 'problem', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/export.md' } },
    'import/no-mutable-exports': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-mutable-exports.md' }
    },
    'import/extensions': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/extensions.md' },
        schema: { anyOf: [Array] }
    },
    'import/no-restricted-paths': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-restricted-paths.md' },
        schema: [[Object]]
    },
    'import/no-internal-modules': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-internal-modules.md' },
        schema: [[Object]]
    },
    'import/group-exports': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/group-exports.md' } },
    'import/no-relative-parent-imports': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-relative-parent-imports.md' },
        schema: [[Object]]
    },
    'import/no-self-import': {
        type: 'problem',
        docs: {
            description: 'Forbid a module from importing itself',
            recommended: true,
            url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-self-import.md'
        },
        schema: []
    },
    'import/no-cycle': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-cycle.md' },
        schema: [[Object]]
    },
    'import/no-named-default': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-named-default.md' }
    },
    'import/no-named-as-default': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-named-as-default.md' }
    },
    'import/no-named-as-default-member': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-named-as-default-member.md' }
    },
    'import/no-anonymous-default-export': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-anonymous-default-export.md' },
        schema: [[Object]]
    },
    'import/no-unused-modules': {
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-unused-modules.md' },
        schema: [[Object]]
    },
    'import/no-commonjs': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-commonjs.md' },
        schema: { anyOf: [Array] }
    },
    'import/no-amd': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-amd.md' } },
    'import/no-duplicates': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-duplicates.md' },
        fixable: 'code'
    },
    'import/first': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/first.md' },
        fixable: 'code'
    },
    'import/max-dependencies': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/max-dependencies.md' },
        schema: [[Object]]
    },
    'import/no-extraneous-dependencies': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-extraneous-dependencies.md' },
        schema: [[Object]]
    },
    'import/no-absolute-path': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-absolute-path.md' },
        schema: [[Object]]
    },
    'import/no-nodejs-modules': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-nodejs-modules.md' }
    },
    'import/no-webpack-loader-syntax': {
        type: 'problem',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-webpack-loader-syntax.md' }
    },
    'import/order': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/order.md' },
        fixable: 'code',
        schema: [[Object]]
    },
    'import/newline-after-import': {
        type: 'layout',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/newline-after-import.md' },
        schema: [[Object]],
        fixable: 'whitespace'
    },
    'import/prefer-default-export': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/prefer-default-export.md' }
    },
    'import/no-default-export': { type: 'suggestion', docs: {} },
    'import/no-named-export': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-named-export.md' }
    },
    'import/no-dynamic-require': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-dynamic-require.md' }
    },
    'import/unambiguous': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/unambiguous.md' } },
    'import/no-unassigned-import': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-unassigned-import.md' },
        schema: [[Object]]
    },
    'import/no-useless-path-segments': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-useless-path-segments.md' },
        schema: [[Object]],
        fixable: 'code'
    },
    'import/dynamic-import-chunkname': {
        type: 'suggestion',
        docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/dynamic-import-chunkname.md' },
        schema: [[Object]]
    },
    'import/exports-last': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/exports-last.md' } },
    'import/no-deprecated': { type: 'suggestion', docs: { url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-deprecated.md' } },
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
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/array-bracket-spacing.html'
        },
        fixable: 'whitespace',
        schema: [[Object], [Object]],
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
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/arrow-spacing.html'
        },
        fixable: 'whitespace',
        schema: [[Object]],
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
        schema: [[Object], [Object]]
    },
    'vue/attributes-order': {
        type: 'suggestion',
        docs: { description: 'enforce order of attributes', category: 'recommended', url: 'https://eslint.vuejs.org/rules/attributes-order.html' },
        fixable: 'code',
        schema: { type: 'array', properties: [Object] }
    },
    'vue/block-spacing': {
        type: 'layout',
        docs: {
            description: 'disallow or enforce spaces inside of blocks after opening block and before closing block',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/block-spacing.html'
        },
        fixable: 'whitespace',
        schema: [[Object]],
        messages: { missing: "Requires a space {{location}} '{{token}}'.", extra: "Unexpected space(s) {{location}} '{{token}}'." }
    },
    'vue/brace-style': {
        type: 'layout',
        docs: {
            description: 'enforce consistent brace style for blocks',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/brace-style.html'
        },
        schema: [[Object], [Object]],
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
        docs: {
            description: 'enforce camelcase naming convention',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/camelcase.html'
        },
        schema: [[Object]],
        messages: { notCamelCase: "Identifier '{{name}}' is not in camel case." }
    },
    'vue/comma-dangle': {
        type: 'layout',
        docs: {
            description: 'require or disallow trailing commas',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/comma-dangle.html'
        },
        fixable: 'code',
        schema: { definitions: [Object], type: 'array', items: [Array] },
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
            category: undefined,
            url: 'https://eslint.vuejs.org/rules/component-name-in-template-casing.html'
        },
        fixable: 'code',
        schema: [[Object], [Object]]
    },
    'vue/eqeqeq': {
        type: 'suggestion',
        docs: {
            description: 'require the use of `===` and `!==`',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/eqeqeq.html'
        },
        schema: { anyOf: [Array] },
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
        schema: [[Object]]
    },
    'vue/html-closing-bracket-spacing': {
        type: 'layout',
        docs: {
            description: "require or disallow a space before tag's closing brackets",
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html'
        },
        schema: [[Object]],
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
        schema: [[Object], [Object]]
    },
    'vue/html-quotes': {
        type: 'layout',
        docs: {
            description: 'enforce quotes style of HTML attributes',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/html-quotes.html'
        },
        fixable: 'code',
        schema: [[Object]]
    },
    'vue/html-self-closing': {
        type: 'layout',
        docs: { description: 'enforce self-closing style', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/html-self-closing.html' },
        fixable: 'code',
        schema: { definitions: [Object], type: 'array', items: [Array], maxItems: 1 }
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
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/key-spacing.html'
        },
        fixable: 'whitespace',
        schema: [[Object]],
        messages: {
            extraKey: "Extra space after {{computed}}key '{{key}}'.",
            extraValue: "Extra space before value for {{computed}}key '{{key}}'.",
            missingKey: "Missing space after {{computed}}key '{{key}}'.",
            missingValue: "Missing space before value for {{computed}}key '{{key}}'."
        }
    },
    'vue/match-component-file-name': {
        type: 'suggestion',
        docs: {
            description: 'require component name property to match its file name',
            category: undefined,
            url: 'https://eslint.vuejs.org/rules/match-component-file-name.html'
        },
        fixable: null,
        schema: [[Object]]
    },
    'vue/max-attributes-per-line': {
        type: 'layout',
        docs: {
            description: 'enforce the maximum number of attributes per line',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/max-attributes-per-line.html'
        },
        fixable: 'whitespace',
        schema: [[Object]]
    },
    'vue/multiline-html-element-content-newline': {
        type: 'layout',
        docs: {
            description: 'require a line break before and after the contents of a multiline element',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html'
        },
        fixable: 'whitespace',
        schema: [[Object]],
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
        schema: [[Object]]
    },
    'vue/name-property-casing': {
        type: 'suggestion',
        docs: {
            description: 'enforce specific casing for the name property in Vue components',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/name-property-casing.html'
        },
        fixable: 'code',
        schema: [[Object]]
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
        docs: { description: 'disallow boolean defaults', category: undefined, url: 'https://eslint.vuejs.org/rules/no-boolean-default.html' },
        fixable: 'code',
        schema: [[Object]]
    },
    'vue/no-confusing-v-for-v-if': {
        type: 'suggestion',
        docs: {
            description: 'disallow confusing `v-for` and `v-if` on the same element',
            category: 'recommended',
            url: 'https://eslint.vuejs.org/rules/no-confusing-v-for-v-if.html',
            replacedBy: [Array]
        },
        deprecated: true,
        fixable: null,
        schema: []
    },
    'vue/no-dupe-keys': {
        type: 'problem',
        docs: { description: 'disallow duplication of field names', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-dupe-keys.html' },
        fixable: null,
        schema: [[Object]]
    },
    'vue/no-duplicate-attributes': {
        type: 'problem',
        docs: { description: 'disallow duplication of attributes', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-duplicate-attributes.html' },
        fixable: null,
        schema: [[Object]]
    },
    'vue/no-multi-spaces': {
        type: 'layout',
        docs: { description: 'disallow multiple spaces', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/no-multi-spaces.html' },
        fixable: 'whitespace',
        schema: [[Object]]
    },
    'vue/no-parsing-error': {
        type: 'problem',
        docs: { description: 'disallow parsing errors in `<template>`', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-parsing-error.html' },
        fixable: null,
        schema: [[Object]]
    },
    'vue/no-reserved-keys': {
        type: 'suggestion',
        docs: { description: 'disallow overwriting reserved keys', category: 'essential', url: 'https://eslint.vuejs.org/rules/no-reserved-keys.html' },
        fixable: null,
        schema: [[Object]]
    },
    'vue/no-restricted-syntax': {
        type: 'suggestion',
        docs: {
            description: 'disallow specified syntax',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/no-restricted-syntax.html'
        },
        schema: { type: 'array', items: [Array], uniqueItems: true, minItems: 0 }
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
        schema: [[Object]]
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
        schema: [[Object]]
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
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/object-curly-spacing.html'
        },
        fixable: 'whitespace',
        schema: [[Object], [Object]]
    },
    'vue/order-in-components': {
        type: 'suggestion',
        docs: {
            description: 'enforce order of properties in components',
            category: 'recommended',
            url: 'https://eslint.vuejs.org/rules/order-in-components.html'
        },
        fixable: 'code',
        schema: [[Object]]
    },
    'vue/prop-name-casing': {
        type: 'suggestion',
        docs: {
            description: 'enforce specific casing for the Prop name in Vue components',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/prop-name-casing.html'
        },
        fixable: 'code',
        schema: [[Object]]
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
        docs: {
            description: 'require the component to be directly exported',
            category: undefined,
            url: 'https://eslint.vuejs.org/rules/require-direct-export.html'
        },
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
        schema: [[Object]]
    },
    'vue/script-indent': {
        type: 'layout',
        docs: { description: 'enforce consistent indentation in `<script>`', category: undefined, url: 'https://eslint.vuejs.org/rules/script-indent.html' },
        fixable: 'whitespace',
        schema: [[Object], [Object]]
    },
    'vue/singleline-html-element-content-newline': {
        type: 'layout',
        docs: {
            description: 'require a line break before and after the contents of a singleline element',
            category: 'strongly-recommended',
            url: 'https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html'
        },
        fixable: 'whitespace',
        schema: [[Object]],
        messages: {
            unexpectedAfterClosingBracket: 'Expected 1 line break after opening tag (`<{{name}}>`), but no line breaks found.',
            unexpectedBeforeOpeningBracket: 'Expected 1 line break before closing tag (`</{{name}}>`), but no line breaks found.'
        }
    },
    'vue/space-infix-ops': {
        type: 'layout',
        docs: {
            description: 'require spacing around infix operators',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/space-infix-ops.html'
        },
        fixable: 'whitespace',
        schema: [[Object]]
    },
    'vue/space-unary-ops': {
        type: 'layout',
        docs: {
            description: 'enforce consistent spacing before or after unary operators',
            category: undefined,
            recommended: false,
            url: 'https://vuejs.github.io/eslint-plugin-vue/rules/space-unary-ops.html'
        },
        fixable: 'whitespace',
        schema: [[Object]],
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
        schema: [[Object]]
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
        schema: [[Object]]
    },
    'vue/v-on-function-call': {
        type: 'suggestion',
        docs: {
            description: 'enforce or forbid parentheses after method calls without arguments in `v-on` directives',
            category: undefined,
            url: 'https://eslint.vuejs.org/rules/v-on-function-call.html'
        },
        fixable: 'code',
        schema: [[Object]]
    },
    'vue/v-on-style': {
        type: 'suggestion',
        docs: { description: 'enforce `v-on` directive style', category: 'strongly-recommended', url: 'https://eslint.vuejs.org/rules/v-on-style.html' },
        fixable: 'code',
        schema: [[Object]]
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
        schema: [[Object]]
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
