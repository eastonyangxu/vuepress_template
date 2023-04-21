import {
  NavItems4EN,
  NavItems4ZH,
  Sidebar4EN,
  Sidebar4ZH
} from './config/index'

module.exports = {
  // 设置根路径默认是 /
  base: '/vuepress_template/',
  // 打包路径
  dest: './dist',
  // head样式
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'author', content: 'eastonyangxu' }],
  ],
  locales: {
    // 根据语言选择显示的head样式
    '/en/': {
      lang: 'en-US',
      title: 'VuePress Template',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress Template',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    // 仓库地址默认是github，也可以是完整地址
    repo: 'eastonyangxu/vuepress_template',
    // 编辑模式开关，可以跳转到github进行编辑
    editLinks: false,
    docsDir: '/docs',
    // #697 Provided by the official algolia team. Algolia 搜索，我们这里不适用。
    // algolia: {
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress',
    //   algoliaOptions: {
    //     facetFilters: ['tags:v1']
    //   }
    // },
    // 页面滚动效果
    smoothScroll: true,
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        // editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: NavItems4EN,
        sidebar: Sidebar4EN
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        // 中文导航栏
        nav: NavItems4ZH,
        // 中文侧边栏
        sidebar: Sidebar4ZH
      }
    },
    // 根目录(docs)导航栏
    nav: NavItems4ZH
  },
  // 指定额外的需要被监听的文件，文件变动就会更新
  extraWatchFiles: ['/docs/**'],
  // 浏览器兼容性
  evergreen: false,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  // 插件
  plugins: [
    // to-top 插件
    ['@vuepress/back-to-top', true],
    // 富文本插件
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ],
    // 支持图片缩放
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.theme-default-content img:not(.no-medium-zoom)',
      },
    ],
    ['vuepress-plugin-cat']
  ]
}
