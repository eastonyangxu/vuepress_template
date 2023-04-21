import { NavItem } from 'vuepress/config'

export const NavItems4EN: NavItem[] = [
  {
    text: 'Guide',
    link: '/en/guide/'
  },
  {
    text: 'Learn More',
    ariaLabel: 'Learn More',
    items: [
      {
        text: 'official document',
        items: [
          {
            text: 'vuepress 1.x',
            link: 'https://v1.vuepress.vuejs.org/'
          }
        ]
      },
      {
        text: 'Grouping effect display',
        items: [
          {
            text: 'Getting Started',
            link: '/en/guide/start.md'
          },
          {
            text: 'Practice page',
            link: '/en/guide/second.md'
          },
          {
            text: 'Plugin',
            link: '/en/guide/plugin.md'
          }
        ]
      }
    ]
  },
  {
    text: 'VuePress Docs',
    items: [
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/'
      },
      {
        text: 'v2.x',
        link: 'https://v2.vuepress.vuejs.org/'
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/'
      }
    ]
  }
]
