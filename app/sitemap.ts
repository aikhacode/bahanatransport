import { MetadataRoute } from 'next'
import { blogPosts, services } from '@/data/siteData'

const baseUrl = 'https://bahanatransport.id'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/blog',
    ...services.map((s) => `/${s.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as "weekly" | "monthly",
    priority: route === '' ? 1.0 : route.startsWith('/blog/') ? 0.6 : 0.8,
  }))

  return routes
}
