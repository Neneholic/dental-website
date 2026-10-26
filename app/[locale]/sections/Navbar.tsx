'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import { MagneticButton } from '../components/MagneticButton'
import { cn } from '../lib/utils'
import { LordIcon } from '@lordicon/react'
import { trackWhatsAppClick } from '../lib/analytics'

// Tooth Icon (lucide-react has no tooth icon; matches Lucide's stroke style)
const ToothIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M12 5.5c-1.074 -.998 -2.583 -1.5 -4 -1.5c-2.5 0 -4 1.5 -4 4.5c0 2 .5 3.5 1 5.5c.5 2 .5 4 1 5.5c.5 1.5 1.5 2 2 2c1 0 1.5 -1 2 -3c.5 -2 .5 -3 2 -3s1.5 1 2 3c.5 2 1 3 2 3c.5 0 1.5 -.5 2 -2c.5 -1.5 .5 -3.5 1 -5.5c.5 -2 1 -3.5 1 -5.5c0 -3 -1.5 -4.5 -4 -4.5c-1.417 0 -2.926 .502 -4 1.5z" />
  </svg>
)

// Icono animado de Lordicon para el submenú de servicios (mismos que las tarjetas del hero)
const SubmenuIcon = ({ src, size }: { src: string; size: number }) => (
  <LordIcon
    src={src}
    trigger="hover"
    target="a"
    colors="primary:#164e63,secondary:#0891b2"
    loading="lazy"
    aria-hidden="true"
    className="shrink-0"
    style={{ width: size, height: size }}
  />
)

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

type NavbarProps = {
  /** Forces the white/solid style regardless of scroll position. Use on pages with light backgrounds (e.g. legal pages). */
  solid?: boolean
}

export function Navbar({ solid = false }: NavbarProps = {}) {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const useLightStyle = solid || isScrolled

  // Detect if we're on the home page (handle both with and without locale prefix)
  const currentLocale = (params?.locale as string) || locale
  const isHomePage = pathname === '/' || pathname === '' || pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`

  // Helper to generate correct href for nav links
  const getNavHref = (hash: string) => {
    if (isHomePage) {
      return hash
    }
    // If not on home page, link to home with hash
    return `/${hash}`
  }

  const navLinks = [
    { name: t('about'), href: getNavHref('#about'), hash: '#about' },
    {
      name: t('services'),
      href: getNavHref('#services'),
      hash: '#services',
      icon: <ToothIcon />,
      submenu: [
        { name: t('valuation'), href: getNavHref('#valoracion'), lordicon: '/icons/lordicon/valuation.json' },
        { name: t('cleaning'), href: '/servicios/limpieza-dental', lordicon: '/icons/lordicon/cleaning.json' },
        { name: t('whitening'), href: '/servicios/blanqueamiento-dental', lordicon: '/icons/lordicon/whitening.json' },
        { name: t('crowns'), href: '/servicios/coronas-dentales', lordicon: '/icons/lordicon/crowns.json' },
      ]
    },
    { name: t('contact'), href: getNavHref('#location'), hash: '#location' },
  ]

  // En el inicio, Link a la misma URL no hace nada: subir al tope a mano
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHomePage) return
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (window.location.hash) {
      window.history.replaceState(window.history.state, '', window.location.pathname)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const switchLocale = locale === 'es' ? 'en' : 'es'

  const handleLanguageSwitch = () => {
    router.push(pathname, { locale: switchLocale })
  }

  const whatsappLink = 'https://wa.me/523322259513'
  const whatsappText = locale === 'es' 
    ? 'Hola, me gustaría agendar una cita con la Dra. Alondra Robles'
    : 'Hello, I would like to schedule an appointment with Dr. Alondra Robles'
  const fullWhatsAppLink = `${whatsappLink}?text=${encodeURIComponent(whatsappText)}`

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          useLightStyle
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 transition-colors"
            >
              <img
                src="/images/logo-dra-alondra-robles.png"
                alt="Logo Dra. Alondra Robles - Cirujano Dentista en Guadalajara"
                className="h-11 w-auto md:h-12"
              />
              <div className="flex flex-col">
                <span className={cn(
                  'text-xl md:text-2xl font-bold tracking-tight',
                  useLightStyle ? 'text-gray-900' : 'text-white'
                )}>
                  Dra. Alondra Robles
                </span>
                <span className={cn(
                  'text-xs md:text-sm font-medium tracking-wider uppercase',
                  useLightStyle ? 'text-gray-600' : 'text-white/80'
                )}>
                  Cirujano Dentista
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div
              className={cn(
                'hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full',
                useLightStyle ? 'bg-gray-100' : 'bg-white/30 backdrop-blur-md'
              )}
            >
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative">
                  {link.submenu ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <Link
                          href={link.href as any}
                          className={cn(
                            'relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1',
                            useLightStyle
                              ? 'text-gray-700 hover:text-gray-900'
                              : 'text-white/90 hover:text-white'
                          )}
                        >
                          {link.icon}
                          {link.name}
                          <ChevronDown className="w-4 h-4" />
                          <motion.span
                            className={cn(
                              'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-current rounded-full',
                              useLightStyle ? 'bg-gray-900' : 'bg-white'
                            )}
                            initial={{ width: 0 }}
                            whileHover={{ width: '60%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      </motion.div>
                      
                      {/* Submenu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              'absolute top-full left-0 mt-2 py-2 px-1 rounded-xl shadow-lg min-w-[200px]',
                              useLightStyle ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'
                            )}
                          >
                            {link.submenu.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap"
                              >
                                <SubmenuIcon src={item.lordicon} size={28} />
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <Link
                        href={link.href as any}
                        className={cn(
                          'relative px-4 py-2 text-sm font-medium transition-colors block',
                          useLightStyle
                            ? 'text-gray-700 hover:text-gray-900'
                            : 'text-white/90 hover:text-white'
                        )}
                      >
                        {link.name}
                        <motion.span
                          className={cn(
                            'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-current rounded-full',
                            useLightStyle ? 'bg-gray-900' : 'bg-white'
                          )}
                          initial={{ width: 0 }}
                          whileHover={{ width: '60%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Language Switch */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switch */}
              <button
                onClick={handleLanguageSwitch}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors',
                  useLightStyle
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                )}
              >
                <Globe size={16} />
                {locale === 'es' ? 'EN' : 'ES'}
              </button>

              {/* WhatsApp CTA */}
              <a
                href={fullWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('navbar_desktop')}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                  useLightStyle
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-white text-green-600 hover:bg-gray-100'
                )}
              >
                <WhatsAppIcon />
                {t('callNow')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                useLightStyle
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl p-6 pt-20"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <div key={link.name}>
                    <Link
                      href={link.href as any}
                      onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-gray-600 transition-colors block"
                    >
                      <span className="inline-flex items-center gap-2">
                        {link.icon}
                        {link.name}
                      </span>
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 text-sm text-gray-600 py-2 hover:text-gray-900"
                          >
                            <SubmenuIcon src={item.lordicon} size={28} />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Language Switch Mobile */}
                <button
                  onClick={() => {
                    handleLanguageSwitch()
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-2 text-lg font-medium text-gray-900 py-3 border-b border-gray-100 text-left"
                >
                  <Globe size={20} />
                  {locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                </button>

                {/* WhatsApp CTA Mobile */}
                <motion.a
                  href={fullWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('navbar_mobile')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  <WhatsAppIcon />
                  {t('callNow')}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
