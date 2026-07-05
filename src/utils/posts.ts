import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export const SITE = {
  title: '我的博客',
  description: '一个基于 Astro 的个人博客，主题参考 Cursor 博客布局，仅用于学习。',
  author: '匿名',
};

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** 精选文章优先，其余按时间排序。 */
export async function getSortedPosts() {
  const posts = await getPublishedPosts();
  const featured = posts.filter((p) => p.data.featured);
  const rest = posts.filter((p) => !p.data.featured);
  return { posts, featured, rest };
}

export async function getAllTags() {
  const posts = await getPublishedPosts();
  const tagMap = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    }
  }

  return [...tagMap.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function slugifyTag(tag: string) {
  return tag.trim().toLowerCase();
}

/** 粗略估算中文/英文混排的阅读时长（分钟）。 */
export function readingTime(body?: string) {
  const text = (body ?? '').replace(/```[\s\S]*?```/g, ' ');
  const chars = text.replace(/\s+/g, '').length;
  return Math.max(1, Math.round(chars / 380));
}

/** 依据种子字符串生成稳定的浅色渐变，用作缺省缩略图。 */
export function gradientFor(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const a = h % 360;
  const b = (a + 40) % 360;
  return `linear-gradient(135deg, hsl(${a} 32% 90%), hsl(${b} 28% 82%))`;
}

/** 取名字首字用于头像占位。 */
export function initials(name: string) {
  const s = name.trim();
  if (!s) return '·';
  return [...s][0].toUpperCase();
}
