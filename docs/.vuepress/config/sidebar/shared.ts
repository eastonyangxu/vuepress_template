import { SidebarConfigArray } from 'vuepress/config'

export function getGuideSidebar (groupA, groupB): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'start',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'second',
        'plugin',
      ]
    }
  ]

  return sidebar
}
