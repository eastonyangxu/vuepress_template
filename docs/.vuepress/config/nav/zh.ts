import { NavItem } from 'vuepress/config'

export const NavItems4ZH: NavItem[] = [
  {
    text: '指南',
    link: '/zh/guide/'
  },
  {
    text: '了解更多',
    ariaLabel: '了解更多',
    items: [
      {
        text: '官方文档',
        items: [
          {
            text: 'vuepress官方文档',
            link: 'https://v1.vuepress.vuejs.org/zh/'
          }
        ]
      },
      {
        text: '分组效果展示',
        items: [
          {
            text: '快速上手',
            link: '/zh/guide/start.md'
          },
          {
            text: '练习页面',
            link: '/zh/guide/second.md'
          },
          {
            text: '插件',
            link: '/zh/guide/plugin.md'
          }
        ]
      }
    ]
  },
  {
    text: 'vuepress文档',
    items: [
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/zh/'
      },
      {
        text: 'v2.x',
        link: 'https://v2.vuepress.vuejs.org/zh/'
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/zh/'
      }
    ]
  }
]
