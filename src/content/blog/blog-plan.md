---
title: 这个博客框架包含哪些能力
description: 梳理骨架已经准备好的页面与功能，方便后续在此之上做主题。
pubDate: 2026-06-25
category: 产品
author: John
tags: [规划, Astro]
featured: true
draft: false
---

这个博客骨架先把基础能力放好：

1. 首页展示精选卡片 + 全部文章列表
2. `/blog/` 文章列表
3. `/blog/[slug]/` 文章详情
4. `/blog/tags/` 与 `/blog/tags/[tag]/` 标签索引与筛选
5. `/blog/rss.xml` 输出 RSS
6. 自动生成站点地图

## 内容集合

文章使用 Astro 的内容集合（Content Collections）管理，schema 定义在 `src/content.config.ts`，包含标题、描述、日期、分类、作者、标签、是否精选等字段。

改字段时记得同步改 schema，类型检查会帮你兜住漏改的地方。
