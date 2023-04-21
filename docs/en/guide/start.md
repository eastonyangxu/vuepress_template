# Getting Started
::: tip
Use vurpress_template to set up a local project and quickly view the effect.
:::
## Set up local projects
1. git clone
``` sh
git clone https://github.com/eastonyangxu/vuepress_template.git
```

1. Initialize item
``` sh
cd vuepress_template
npm install
```

1. running
``` sh
npm run docs:dev
```

1. Visit to see the effect
```
Enter in the browser address bar：http://localhost:8080
```

## Directory Structure
::: vue
.
├── docs
│   ├── .vuepress _
│   │   ├── components
│   │   ├── `config` _(**Optional**)_
│   │   │   │── nav
│   │   │   └── sidebar
│   │   ├── public
│   │   ├── styles
│   │   │   └── index.styl
│   │   └── config.ts
│   │ 
│   ├── `en` _(**Optional，english**)_
│   ├── `zh` _(**chinese**)_
│   │   │── guide
│   │   │    └── README.md
│   │   └── README.md
│   │
│   └── README.md
│
└── package.json
:::

::: upgrade message
The following is a description of the directories used for this project
:::

- `docs/.vuepress`: Used to store global configuration, components, static resources, etc.
- `docs/.vuepress/components`: The Vue components in this directory will be automatically registered as global components.
- `docs/.vuepress/config`: Component catalog.
- `docs/.vuepress/config/nav`: Navigation bar component directory.
- `docs/.vuepress/config/sidebar`: Sidebar component directory.
- `docs/.vuepress/public`: Static resource directory.
- `docs/.vuepress/styles`: Stores style related files.
- `docs/.vuepress/styles/index.styl`: Automatically applied global style files, generated at the ending of the CSS file, have a higher priority than the default style.
- `docs/.vuepress/config.js`: Entry file of configuration, can also be  `YML` or `toml`。
- `docs/en`: English directory.
- `docs/zh`: chinese directory.
- `docs/en/guide`: English guide document directory, you can add other document directories to the same directory
- `docs/en/README.md`: English page，example: http://localhost:8080/en
- `docs/README.md`: Default page，example: http://localhost:8080
- `package.json`: npm package。


Official document：
<blockquote>
Official document：[Directory structure](https://v1.vuepress.vuejs.org/guide/directory-structure.html)
</blockquote>
