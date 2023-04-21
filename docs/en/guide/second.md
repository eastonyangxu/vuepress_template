# Practice page

## Links

::: tip Input
``` md
Internal Links：
[Getting Started](/en/guide/start.md)
External Links：
[GitHub](https://github.com/eastonyangxu/vuepress_template)
```
:::
Click link：[Getting Started](/en/guide/start.md)&nbsp;&nbsp;[GitHub](https://github.com/eastonyangxu/vuepress_template)

**Official case**
<blockquote>
Official documents:
[official](https://v1.vuepress.vuejs.org/guide/markdown.html#links)
</blockquote>

## GitHub-Style Tables
::: tip Input
``` md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```
:::
Output<br/>
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |


## Emoji
::: tip Input
``` md
:tada: :100: :orange: :houses: :car: :boy: :clock3: :no_entry_sign:
```
:::
Output<br/>
:tada: :100: :orange: :houses: :car: :boy: :clock3: :no_entry_sign:
<blockquote>
list of all emojis：
[list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
</blockquote>


## Table of Contents
::: tip Input
``` md
[[toc]]
```
:::
Output<br/>
[[toc]]


## Escaping
By default, fenced code blocks are automatically wrapped with `v-pre`. To display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the `v-pre` custom container:<br/>
Input<br/>
``` md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```
Output<br/>
::: v-pre
`{{ This will be displayed as-is }}`
:::

## Deploying  to github pages
:::tip Portal
[GitHub Pages](https://v1.vuepress.vuejs.org/zh/guide/deploy.html#github-pages)
:::
