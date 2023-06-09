# 插件

::: tip
[社区插件文档](https://vuepress-community.netlify.app/zh/)
[官方插件文档](https://v1.vuepress.vuejs.org/zh/plugin/)
:::

## 富文本体验

安装 `npm install -D vuepress-plugin-container`
::: upgrade 富文本效果
config.ts配置
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
这是使用了富文本插件 `vuepress-plugin-container`【upgrade】的效果。
:::
**官方案例**
<blockquote>
官方案例查看：
[自定义容器](https://v1.vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)
</blockquote>


## 图片缩放效果
安装 `npm install -D vuepress-plugin-medium-zoom`
::: tip config.ts配置
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
点击图片：<br/>
<img src="/vuepress_template/hero.png" alt="演示" width="200"/>
<blockquote>
来源：
[zooming](https://vuepress-community.netlify.app/zh/plugins/zooming/)
</blockquote>

## 右下角的猫
安装 `npm install -D vuepress-plugin-cat`
::: tip config.ts配置
``` ts
module.exports = {
  plugins: [
    ['vuepress-plugin-cat']
  ]
}
```
:::
来源：
<blockquote>
[Github](https://github.com/QiShaoXuan/vuepress-plugin-cat)
</blockquote>
