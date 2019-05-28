# 说明

> [Eslint-Report 内置 html 模板](https://eslint.org/docs/user-guide/formatters/#html) 的替代品

# 安装

> yarn add -D eslint-formatter-html

# 使用

```
npx eslint **/src/**/*.{js,vue} --ignore-path .gitignore -f html -o ESLintReport.html
```

> 根据[官方文档](https://eslint.org/docs/user-guide/command-line-interface) 定义
>
> *An npm-installed formatter is resolved with or without eslint-formatter- prefix.*
> 
> Eslint直接加参数 `-f html` 即可覆盖 Eslint 内置的 html 模板
> 
> 或者 `-f eslint-formatter-html`


# WHY?

* 路径可复制
* 路径显示为 *相对路径* (相对于项目根路径)
* 显示宽度不设置最大值 `1000px`
* 增加全部展开/折叠功能, 默认全展开
* 显示一些统计分析信息


## 开发者须知

* 将 `src/index.vue` 拆解为 `lib/{template,script,style}.text`
* 因此 `lib` 目录请不要手动去修改


### mark

* npm publish --registry https://registry.npmjs.org
