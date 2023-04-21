---
home: true
title: Home Page
heroImage: /hero.png
heroText: VuePress1.x template
tagline: Quick build document
actionText: started quickly →
actionLink: /en/guide/start.md
---
<div class="features">
  <div class="feature">
    <h2>Simplicity First</h2>
    <p>Minimal setup with markdown-centered project structure helps you focus on writing.</p>
  </div>
  <div class="feature">
    <h2>Vue-Powered</h2>
    <p>Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.</p>
  </div>
  <div class="feature">
    <h2>Performant</h2>
    <p>VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</p>
  </div>
</div>

### Quick installation

``` bash
# install
yarn global add vuepress # or：npm install -D vuepress

# Create a new markdown file
echo '# Hello VuePress!' > README.md

# Start writing
vuepress dev .

# Build static file
vuepress build .
```

::: warning
make sure to Node.js version >= 8.6。
:::

::: slot footer
Copyright © 2023-present [eastonyangxu](https://github.com/eastonyangxu)
:::
