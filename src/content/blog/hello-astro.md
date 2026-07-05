---
title: 欢迎来到我的博客
description: 第一篇示例文章，介绍这个博客用什么搭的，以及主题的由来。
pubDate: 2026-06-28
category: 公司
author: John
tags: [Astro, Blog]
featured: true
draft: false
---

这是第一篇示例文章。这个博客用 [Astro](https://astro.build) 搭建，主题的排版和布局参考了 Cursor 博客的结构，仅用于学习参考。

你可以在 `src/content/blog/` 目录下继续新增 Markdown 文件，每篇文章都需要 frontmatter：

```md
---
title: 文章标题
description: 文章摘要
pubDate: 2026-07-02
category: 产品
author: 你的名字
tags: [标签一, 标签二]
featured: false
draft: false
---
```

## 主题包含什么

- 吸顶导航与多列页脚
- 首屏精选卡片（`featured: true` 的文章）
- 带缩略图的文章列表行
- 订阅栏、标签页、RSS 与站点地图

## 后续怎么改

主要改这几处即可：`src/styles/global.css` 调配色与字体，`src/layouts/` 改外壳与文章页，`src/components/` 改卡片与列表。
