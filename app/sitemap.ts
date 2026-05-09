import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const SITE_URL = 'https://draalondrarobles.com'

const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/servicios/blanqueamiento-dental', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/aviso-de-privacidad', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority: locale === routing.defaultLocale ? priority : priority - 0.1,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
        ),
      },
    })),
  )
}
