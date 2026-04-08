'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Globe } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { MagneticButton } from '../components/MagneticButton'
import { cn } from '../lib/utils'

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('home'), href: '#home' as const },
    { name: t('about'), href: '#about' as const },
    { name: t('product'), href: '#services' as const },
    { name: t('services'), href: '#services' as const },
    { name: t('appointment'), href: '#contact' as const },
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
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className={cn(
                'text-2xl font-bold tracking-tight transition-colors',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}
              whileHover={{ scale: 1.02 }}
            >
              DENTALO
            </motion.a>

            {/* Desktop Navigation */}
            <div
              className={cn(
                'hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full',
                isScrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'
              )}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.name}
                  <motion.span
                    className={cn(
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-current rounded-full',
                      isScrolled ? 'bg-gray-900' : 'bg-white'
                    )}
                    initial={{ width: 0 }}
                    whileHover={{ width: '60%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button & Language Switch */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switch */}
              <button
                onClick={handleLanguageSwitch}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors',
                  isScrolled
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
                  isScrolled
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
                isScrolled
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
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-gray-600 transition-colors"
                  >
                    {link.name}
                  </motion.a>
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
