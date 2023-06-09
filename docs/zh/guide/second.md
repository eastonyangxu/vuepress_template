# 练习页面

## 链接

::: tip 输入
``` md
内部链接：
[快速上手](/zh/guide/start.md)
外部链接：
[GitHub](https://github.com/eastonyangxu/vuepress_template)
```
:::
点击链接：[快速上手](/zh/guide/start.md)&nbsp;&nbsp;[GitHub](https://github.com/eastonyangxu/vuepress_template)

**官方案例**
<blockquote>
官方文档：
[链接](https://v1.vuepress.vuejs.org/zh/guide/markdown.html#%E9%93%BE%E6%8E%A5)
</blockquote>

## GitHub风格表格
::: tip 输入
``` md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```
:::
输出<br/>
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |


## Emoji
::: tip 输入
``` md
:tada: :100: :orange: :houses: :car: :boy: :clock3: :no_entry_sign:
```
:::
输出<br/>
:tada: :100: :orange: :houses: :car: :boy: :clock3: :no_entry_sign:
<blockquote>
参考列表：
[emoji列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
</blockquote>


## 目录
::: tip 输入
``` md
[[toc]]
```
:::
输出(本页的目录)<br/>
[[toc]]


## Escaping
默认情况下，块级 (block) 的代码块将会被自动包裹在 `v-pre` 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 `v-pre` 来包裹: <br/>
输入<br/>
``` md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```
输出<br/>
::: v-pre
`{{ This will be displayed as-is }}`
:::

## 部署到Github Pages
:::tip 传送门
[GitHub Pages部署](https://v1.vuepress.vuejs.org/zh/guide/deploy.html#github-pages)
:::


## 自定义components
输入<br/>
::: tip demo.vue
``` vue
<style scoped lang="css">
h1 {
  color: red;
  font-size: 20px;
}
</style>

<template>
  <h1>这是我第一个自定义的components</h1>
</template>

<script>
export default {
  name: "demo",
};
</script>
```
使用componnets：
``` md
<demo/>
```
:::

输出<br/>
<demo/>
