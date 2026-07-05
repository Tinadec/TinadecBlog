---
title: 缺省缩略图：用渐变代替占位图
description: 没有配图时，用标题生成稳定的渐变色块，列表依然好看。
pubDate: 2026-06-14
category: 工程
author: John
tags: [设计, Astro]
draft: false
---

参考对象的列表每篇都有缩略图。我们不一定有配图，于是做了一个降级方案：没有 `cover` 时，用文章 id 生成一个稳定的深色渐变作为缩略图。

## 思路

把字符串哈希成一个色相，再取相邻色相组成渐变。同一篇文章每次生成的颜色都一样，列表不会闪。

```ts
export function gradientFor(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const a = h % 360;
  return `linear-gradient(135deg, hsl(${a} 42% 22%), hsl(${(a + 42) % 360} 55% 11%))`;
}
```

想用真实配图时，在 frontmatter 里加 `cover: /images/xxx.jpg` 即可覆盖渐变。
