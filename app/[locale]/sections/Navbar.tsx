'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import { MagneticButton } from '../components/MagneticButton'
import { cn } from '../lib/utils'

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.05 2zm5.43 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.48-.5-.67-.51-.17 0-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.24-.7.24-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
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
    { name: t('home'), href: getNavHref('#home'), hash: '#home' },
    { name: t('about'), href: getNavHref('#about'), hash: '#about' },
    { 
      name: t('services'), 
      href: getNavHref('#services'),
      hash: '#services',
      submenu: [
        { name: t('whitening'), href: '/servicios/blanqueamiento-dental' },
      ]
    },
    { name: t('appointment'), href: getNavHref('#contact'), hash: '#contact' },
  ]

  const switchLocale = locale === 'es' ? 'en' : 'es'

  const handleLanguageSwitch = () => {
    router.push(pathname, { locale: switchLocale })
  }

  const whatsappLink = 'https://wa.me/5213310678412'
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
              className="flex flex-col transition-colors"
            >
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
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                              >
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
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-gray-600 py-2 hover:text-gray-900"
                          >
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
