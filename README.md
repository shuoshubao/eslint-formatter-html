# eslint-formatter-html

A enhanced ESLint formatter

# Examples

-   https://shuoshubao.github.io/eslint-formatter-html
-   https://shuoshubao.github.io/eslint-formatter-html/demo1
-   https://shuoshubao.github.io/eslint-formatter-html/demo2
-   https://shuoshubao.github.io/eslint-formatter-html/demo3
-   https://shuoshubao.github.io/eslint-formatter-html/demo4
-   https://shuoshubao.github.io/eslint-formatter-html/demo5
-   https://shuoshubao.github.io/eslint-formatter-html/demo6
-   https://shuoshubao.github.io/eslint-formatter-html/demo7
-   https://shuoshubao.github.io/eslint-formatter-html/demo8

## ESLint official example

-   https://eslint.org/docs/latest/user-guide/formatters/html-formatter-example
-   https://shuoshubao.github.io/eslint-formatter-html/built-in

# Install

```sh
npm i -D eslint-formatter-html
```

# Usage

```sh
npx eslint -f html -o ESLintReport.html
```

> More information about formatters can be found on https://eslint.org/docs/latest/user-guide/formatters

# Features

-   The html page is built based on `react` and `antd`, and the interaction is very good
-   The file path is a relative path, very short
-   Both file paths and code lines and columns can be copied, that you can quickly locate the specific location of the code
-   Supports `ansi` code display
-   Supports dark mode, depending on your Mac settings
-   Using [pako](https://www.npmjs.com/package/pako) compression, even if the project is large, the report file size is small
