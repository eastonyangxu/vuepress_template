# Plugin

::: tip
[VuePress Community Plugins](https://vuepress-community.netlify.app/en/)
[Official Plugins](https://v1.vuepress.vuejs.org/plugin/)
:::

## Rich text experience

Installation `npm install -D vuepress-plugin-container`
::: upgrade Rich text effect
config.ts config
``` ts
module.exports = {
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ]
  ]
}
```
This is using the rich text plugin `vuepress-plugin-container`【upgrade】of effect.
:::
**Official Case**
<blockquote>
Official case: 
[Custom Containers](https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers)
</blockquote>


## This plugin will make your images zoomable.
Installation `npm install -D vuepress-plugin-medium-zoom`
::: tip config.ts config
``` ts
module.exports = {
  plugins: [
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.theme-default-content img:not(.no-medium-zoom)',
      },
    ]
  ]
}
```
:::
Click the image: <br/>
<img src="/vuepress_template/hero.png" alt="demo" width="200"/>
<blockquote>
Source:
[zooming](https://vuepress-community.netlify.app/zh/plugins/zooming/)
</blockquote>

## The cat in the lower right corner
Installation `npm install -D vuepress-plugin-cat`
::: tip config.ts config
``` ts
module.exports = {
  plugins: [
    ['vuepress-plugin-cat']
  ]
}
```
:::
Source:
<blockquote>
[Github](https://github.com/QiShaoXuan/vuepress-plugin-cat)
</blockquote>
