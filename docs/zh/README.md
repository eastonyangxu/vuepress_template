---
home: true
title: 首页
heroImage: /hero.png
heroText: VuePress1.x模板
tagline: 快速构建文档
actionText: 快速上手 →
actionLink: /zh/guide/start.md
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue 驱动
  details: 享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
---

### 快速安装

``` bash
# 安装
yarn global add vuepress # 或者：npm install -D vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```

::: warning 注意
请确保你的 Node.js 版本 >= 8.6。
:::

::: slot footer
Copyright © 2023-present [eastonyangxu](https://github.com/eastonyangxu)
:::
