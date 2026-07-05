---
title: 用 CSS 变量组织一套可切换的主题
description: 为什么把配色和尺寸都收敛到 CSS 变量里，换肤会变得非常简单。
pubDate: 2026-06-20
category: 创意
author: John
tags: [CSS, 主题]
featured: true
draft: false
---

这套主题把所有视觉相关的值都放到了 `:root` 的 CSS 变量里：背景、表面、边框、文字、强调色、圆角、容器宽度。

## 好处

- 换配色只改一处，不用全局搜索替换
- 深色/浅色切换只是换一组变量
- 组件里只引用变量，语义清晰

```css
:root {
  --bg: #0a0a0a;
  --text: #f4f4f5;
  --accent: #f4f4f5;
}
```

## 想做浅色版？

复制一份 `:root` 的变量，改成浅色数值，再用 `prefers-color-scheme` 或一个 `data-theme` 属性切换即可。当前默认是深色，贴近参考对象的风格。
