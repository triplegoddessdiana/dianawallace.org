import { MetadataRoute } from 'next'
import { getPublicEssays } from '@/app/lib/essays'

export default function sitemap(): MetadataRoute.Sitemap {
  const publicEssays = getPublicEssays().map((essay) => ({
    url: `https://dianawallace.org/essays/${essay.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: 'https://dianawallace.org', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://dianawallace.org/books', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://dianawallace.org/books/the-poet-who-forgot-her-name', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://dianawallace.org/books/the-girl-who-grew-fangs', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://dianawallace.org/audio', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://dianawallace.org/audio/the-girl-returns', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dianawallace.org/essays', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...publicEssays,
    { url: 'https://dianawallace.org/philosophy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://dianawallace.org/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://dianawallace.org/work', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dianawallace.org/start', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://dianawallace.org/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://dianawallace.org/press', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: 'https://dianawallace.org/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: 'https://dianawallace.org/need-more-wildlife', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ]
}
