import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'es',

  // Default locale ('es') serves at '/' without prefix; '/en' for English.
  // Old '/es/*' URLs still work (next-intl redirects them to '/*' preserving SEO).
  // Avoids the root-redirect that can drop gclid/utm params for Ads traffic.
  localePrefix: 'as-needed'
});

// Helper: build a locale-aware path (default locale has no prefix)
export function localePath(locale: string, path: string = ''): string {
  return locale === routing.defaultLocale ? path || '/' : `/${locale}${path}`
}
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
