import type { MetadataRoute } from 'next'
import { routing, localePath } from '@/i18n/routing'

const SITE_URL = 'https://draalondrarobles.com'

const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/servicios/blanqueamiento-dental', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/servicios/coronas-dentales', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/aviso-de-privacidad', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => {
      const languages: Record<string, string> = Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}${localePath(l, path)}`]),
      )
      languages['x-default'] = `${SITE_URL}${localePath(routing.defaultLocale, path)}`

      return {
        url: `${SITE_URL}${localePath(locale, path)}`,
        lastModified,
        changeFrequency,
        priority: locale === routing.defaultLocale ? priority : priority - 0.1,
        alternates: { languages },
      }
    }),
  )
}
