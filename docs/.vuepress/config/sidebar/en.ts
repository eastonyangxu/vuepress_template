import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getGuideSidebar,
} from './shared'

export const Sidebar4EN: SidebarConfig4Multiple = {
  '/en/guide/': getGuideSidebar('Guide', 'Advanced'),
}
