import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', (post) => post.data.draft !== true)
  const sorted = blog.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  )

  return rss({
    title: "Zayez — Enio E. Zanatta's blog",
    description: 'Essays, notes, and solved problems',
    site: context.site ?? 'https://zayez.xyz',
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}.html`,
      categories: post.data.tags,
    })),
  })
}
