declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
    dataLayer?: unknown[]
  }
}

export type WhatsAppClickLocation =
  | 'hero'
  | 'navbar_desktop'
  | 'navbar_mobile'
  | 'navbar_megamenu'
  | 'about'
  | 'services'
  | 'consultation'
  | 'location'
  | 'works'
  | 'footer_social'
  | 'footer_social_link'
  | 'pricing_whitening'
  | 'final_cta_whitening'
  | 'service_hero_whitening'
  | 'pricing_crowns'
  | 'service_hero_crowns'
  | 'pricing_cleaning'
  | 'service_hero_cleaning'
  | 'pricing_endodontics'
  | 'final_cta_endodontics'
  | 'service_hero_endodontics'
  | 'floating_bubble'

export function trackWhatsAppClick(location: WhatsAppClickLocation) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'whatsapp_click', { location })
}
