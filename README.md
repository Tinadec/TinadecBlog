# Astro Blog Starter

一个方便后续自定义主题的 Astro 博客骨架。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 目录

- `src/content/blog/`：Markdown/MDX 文章
- `src/layouts/`：页面布局
- `src/components/`：可复用组件
- `src/pages/`：路由页面
- `src/styles/global.css`：全局样式与主题变量

## 写文章

在 `src/content/blog/` 下新增 `.md` 文件：

```md
---
title: 文章标题
description: 文章摘要
pubDate: 2026-07-02
tags: [Astro, Blog]
draft: false
---

正文内容。
```

后续换主题时，优先改 `src/styles/global.css`、`src/layouts/` 和 `src/components/`。
