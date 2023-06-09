# 快速上手
::: tip
使用vurpress_template搭建本地项目，快速查看效果。
:::
## 搭建本地项目
1. 克隆模板代码
``` sh
git clone https://github.com/eastonyangxu/vuepress_template.git
```

2. 初始化项目
``` sh
cd vuepress_template
npm install
```

3. 运行
``` sh
npm run docs:dev
```

4. 访问查看效果
```
在浏览器地址栏输入：http://localhost:8080
```

## 目录介绍
::: vue
.
├── docs
│   ├── .vuepress _
│   │   ├── components
│   │   ├── `config` _(**可选的，英文目录**)_
│   │   │   │── nav
│   │   │   └── sidebar
│   │   ├── public
│   │   ├── styles
│   │   │   └── index.styl
│   │   └── config.ts
│   │ 
│   ├── `en` _(**可选的，英文目录**)_
│   ├── `zh` _(**中文目录**)_
│   │   │── guide
│   │   │    └── README.md
│   │   └── README.md
│   │
│   └── README.md
│
└── package.json
:::

::: upgrade 信息
下面是本项目所用目录介绍
:::

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/config`: 组件目录
- `docs/.vuepress/config/nav`: 导航栏组件目录
- `docs/.vuepress/config/sidebar`: 侧边栏组件目录
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/en`: 英文目录。
- `docs/zh`: 中文目录。
- `docs/zh/guide`: 中文指南文档目录，同级可以添加其他文档目录。
- `docs/zh/README.md`: 网页地址/zh显示的页面，例如：http://localhost:8080/zh。
- `docs/README.md`: 网页地址/显示的页面，例如：http://localhost:8080。
- `package.json`: npm管理配置文件。


官方目录介绍：
<blockquote>
完整的目录介绍请查看官网：[目录结构](https://v1.vuepress.vuejs.org/zh/guide/directory-structure.html)
</blockquote>
