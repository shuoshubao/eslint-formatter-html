# eslint-formatter-html

A nice and more functional eslint reporter

# Example output

- https://shuoshubao.github.io/eslint-formatter-html
- https://shuoshubao.github.io/eslint-formatter-html/demo1
- https://shuoshubao.github.io/eslint-formatter-html/demo2
- https://shuoshubao.github.io/eslint-formatter-html/demo3
- https://shuoshubao.github.io/eslint-formatter-html/demo4

# Install

```sh
npm i D eslint-formatter-html
```

# Usage

```sh
npx eslint -f html -o ESLintReport.html
```

> More information about formatters can be found on https://eslint.org/docs/latest/user-guide/formatters

# Feature

- The file path is a relative path, very short
- The file path can be copied
- Code line and column numbers can be copied, and you can quickly locate the specific location of the code
- Support ansi code display
- The html page is built based on react and antd, and the interaction is very good
- Supports dark mode and remembers your settings
- Using [pako](https://www.npmjs.com/package/pako) compression, even if the project is large, the report file size is small
