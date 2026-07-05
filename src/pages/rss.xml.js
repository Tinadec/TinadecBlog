import rss from '@astrojs/rss';
import { getPublishedPosts } from '@/utils/posts';

const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: '我的博客',
    description: '一个基于 Astro 的个人博客',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${base}${post.id}/`,
    })),
  });
}
