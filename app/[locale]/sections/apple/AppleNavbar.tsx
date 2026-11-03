'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { LordIcon } from '@lordicon/react'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { cn } from '../../lib/utils'
import { trackWhatsAppClick } from '../../lib/analytics'
import { ChevronLabel, PHONE_DISPLAY, PHONE_TEL, WhatsAppGlyph, useWhatsAppHref } from './ui'

// Íconos animados de Lordicon en el tono del sistema (tinta + Action Blue)
const ICON_COLORS = 'primary:#1d1d1f,secondary:#0066cc'

const MenuIcon = ({ src, size }: { src: string; size: number }) => (
  <LordIcon
    src={src}
    trigger="hover"
    target="a"
    colors={ICON_COLORS}
    loading="lazy"
    aria-hidden="true"
    className="shrink-0"
    style={{ width: size, height: size }}
  />
)

/** Barra global estilo Apple: delgada, translúcida con desenfoque y línea fina inferior. */
export function AppleNavbar() {
  const t = useTranslations('nav')
  const th = useTranslations('hero')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const whatsappHref = useWhatsAppHref()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  // Bloquear el scroll del fondo con el menú móvil abierto
  useEffect(() => {
    document.documentElement.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [isMobileOpen])

  const links = [
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services', submenu: true },
    { name: t('valuation'), href: '#valoracion' },
    { name: t('contact'), href: '#location' },
  ]

  // Megamenú: la valoración va destacada y los tratamientos en lista
  const featured = {
    name: t('valuation'),
    desc: th('services.valuation.desc'),
    href: '#valoracion',
  }
  const treatments = [
    { key: 'cleaning', href: '/servicios/limpieza-dental' },
    { key: 'whitening', href: '/servicios/blanqueamiento-dental' },
    { key: 'crowns', href: '/servicios/coronas-dentales' },
    { key: 'endodontics', href: '/servicios/endodoncia' },
  ].map(({ key, href }) => ({
    name: t(key),
    desc: th(`services.${key}.desc`),
    href,
    lordicon: `/icons/lordicon/${key}.json`,
  }))

  // Link a la misma URL no hace nada en el inicio: subir al tope a mano
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMobileOpen(false)
    if (window.location.hash) {
      window.history.replaceState(window.history.state, '', window.location.pathname)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const switchLocale = () => router.push(pathname, { locale: locale === 'es' ? 'en' : 'es' })

  return (
    <>
      {/* Desenfoque de la página mientras el menú de Servicios está abierto (escritorio) */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            key="flyout-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="pointer-events-none fixed inset-0 z-40 hidden bg-black/20 backdrop-blur-md md:block"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b font-apple transition-colors duration-200',
          isServicesOpen || isMobileOpen
            ? 'border-transparent bg-white'
            : 'border-black/[0.08] bg-white/80 backdrop-blur-xl backdrop-saturate-[1.8]'
        )}
      >
        <div className="mx-auto flex h-12 max-w-[1080px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5" aria-label="Dra. Alondra Robles">
            <img src="/images/logo-dra-alondra-robles.png" alt="Logo Dra. Alondra Robles - Cirujano Dentista en Guadalajara" className="h-7 w-auto" />
            <span className="text-[15px] font-semibold tracking-[-0.016em] text-ink">Dra. Alondra Robles</span>
          </Link>

          {/* Enlaces de escritorio */}
          <ul className="hidden h-full items-center gap-7 md:flex">
            {links.map((link) =>
              link.submenu ? (
                <li
                  key={link.href}
                  className="flex h-full items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsServicesOpen(false)}
                    aria-expanded={isServicesOpen}
                    className="flex items-center gap-1 text-[13px] tracking-[-0.01em] text-ink-80 transition-colors hover:text-ink"
                  >
                    {link.name}
                    <ChevronDown className={cn('h-3 w-3 transition-transform duration-200', isServicesOpen && 'rotate-180')} strokeWidth={2.25} />
                  </a>

                  {/* Menú desplegable a todo lo ancho, como los de apple.com */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute inset-x-0 top-12 overflow-hidden bg-white"
                      >
                        <div className="mx-auto grid max-w-[1080px] grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 px-6 pb-14 pt-8">
                          {/* Destacado: Cita de Valoración */}
                          <div>
                            <p className="text-[12px] tracking-[-0.01em] text-ink-48">{t('megaStart')}</p>
                            <div className="mt-3 overflow-hidden rounded-[18px] bg-parchment">
                              <img
                                src="/images/endodoncia-radiografia-consulta-guadalajara.webp"
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className="aspect-[16/9] w-full object-cover object-[36%_20%]"
                              />
                              <div className="p-5">
                                <a href={featured.href} onClick={() => setIsServicesOpen(false)} className="group block">
                                  <span className="block text-[21px] font-semibold leading-tight tracking-[0.011em] text-ink group-hover:underline underline-offset-4">
                                    {featured.name}
                                  </span>
                                  <span className="mt-1 block text-[14px] leading-snug text-ink-80">{featured.desc}</span>
                                </a>
                                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
                                  <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackWhatsAppClick('navbar_megamenu')}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-action px-4 py-2 text-white transition-transform active:scale-95"
                                  >
                                    <WhatsAppGlyph />
                                    {t('megaCta')}
                                  </a>
                                  <a href={PHONE_TEL} className="inline-flex items-center gap-1.5 text-action hover:underline underline-offset-4">
                                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                                    <span className="sr-only">{t('megaCall')} </span>
                                    {PHONE_DISPLAY}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tratamientos: enlaces grandes en negritas */}
                          <div>
                            <p className="text-[12px] tracking-[-0.01em] text-ink-48">{t('megaTreatments')}</p>
                            <ul className="mt-3">
                              {treatments.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="group flex items-center gap-4 py-2.5"
                                  >
                                    <MenuIcon src={item.lordicon} size={36} />
                                    <span className="min-w-0">
                                      <span className="block text-[24px] font-semibold leading-[1.15] tracking-[0.009em] text-ink transition-colors group-hover:text-action">
                                        {item.name}
                                      </span>
                                      <span className="block text-[13px] text-ink-48">{item.desc}</span>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <a href={link.href} onClick={() => setIsServicesOpen(false)} className="mt-4 inline-block text-[14px]">
                              <ChevronLabel>{t('megaAll')}</ChevronLabel>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.href}>
                  <a href={link.href} className="text-[13px] tracking-[-0.01em] text-ink-80 transition-colors hover:text-ink">
                    {link.name}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Idioma + CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={switchLocale}
              className="text-[13px] text-ink-80 transition-colors hover:text-ink"
              aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar_desktop')}
              className="inline-flex items-center gap-1.5 rounded-full bg-action px-3.5 py-1.5 text-[13px] text-white transition-transform hover:bg-[#0077ed] active:scale-95"
            >
              <WhatsAppGlyph />
              {locale === 'es' ? 'Agendar' : 'Book'}
            </a>
          </div>

          {/* Botón de menú móvil: dos líneas que se cruzan, como en apple.com */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? (locale === 'es' ? 'Cerrar menú' : 'Close menu') : (locale === 'es' ? 'Abrir menú' : 'Open menu')}
            className="relative -mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className={cn('absolute h-[1.5px] w-[18px] rounded-full bg-ink transition-transform duration-300', isMobileOpen ? 'rotate-45' : '-translate-y-[4px]')} />
            <span className={cn('absolute h-[1.5px] w-[18px] rounded-full bg-ink transition-transform duration-300', isMobileOpen ? '-rotate-45' : 'translate-y-[4px]')} />
          </button>
        </div>
      </nav>

      {/* Menú móvil: hoja blanca a pantalla completa con enlaces grandes */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-x-0 bottom-0 top-12 z-40 overflow-y-auto bg-white px-6 pb-10 pt-4 font-apple md:hidden"
          >
            <ul>
              {links.map((link) =>
                link.submenu ? (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen((open) => !open)}
                      aria-expanded={isMobileServicesOpen}
                      className="flex w-full items-center justify-between py-2.5 text-left text-[28px] font-semibold tracking-[0.007em] text-ink"
                    >
                      {link.name}
                      <ChevronDown className={cn('h-6 w-6 text-ink-48 transition-transform', isMobileServicesOpen && 'rotate-180')} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isMobileServicesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <li>
                            <a
                              href={featured.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="my-2 block rounded-[18px] bg-parchment p-4"
                            >
                              <span className="block text-[12px] text-ink-48">{t('megaStart')}</span>
                              <span className="block text-[19px] font-semibold text-ink">{featured.name}</span>
                              <span className="block text-[14px] text-ink-80">{featured.desc}</span>
                            </a>
                          </li>
                          {treatments.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center gap-3 py-2"
                              >
                                <MenuIcon src={item.lordicon} size={30} />
                                <span>
                                  <span className="block text-[17px] font-semibold text-ink">{item.name}</span>
                                  <span className="block text-[13px] text-ink-48">{item.desc}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-2.5 text-[28px] font-semibold tracking-[0.007em] text-ink"
                    >
                      {link.name}
                    </a>
                  </li>
                )
              )}
            </ul>

            <div className="mt-8 border-t border-hairline pt-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('navbar_mobile')}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-action px-6 py-3.5 text-[17px] text-white active:scale-95 transition-transform"
              >
                <WhatsAppGlyph />
                {t('megaCta')}
              </a>
              <div className="mt-5 flex items-center justify-between text-[14px]">
                <a href={PHONE_TEL} className="inline-flex items-center gap-1.5 text-action">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    switchLocale()
                    setIsMobileOpen(false)
                  }}
                  className="text-ink-80"
                >
                  {locale === 'es' ? 'English' : 'Español'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
