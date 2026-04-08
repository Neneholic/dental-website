'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Globe } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { MagneticButton } from '../components/MagneticButton'
import { cn } from '../lib/utils'

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
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
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('product'), href: '#services' },
    { name: t('services'), href: '#services' },
    { name: t('appointment'), href: '#contact' },
  ]

  const switchLocale = locale === 'es' ? 'en' : 'es'
  const newPath = pathname.replace(`/${locale}`, `/${switchLocale}`)

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
              <Link
                href={newPath}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors',
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/20'
                )}
              >
                <Globe size={16} />
                {locale === 'es' ? 'EN' : 'ES'}
              </Link>

              <MagneticButton
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                  isScrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                )}
              >
                <Phone size={16} />
                {t('callNow')}
              </MagneticButton>
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
                <Link
                  href={newPath}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                >
                  <Globe size={20} />
                  {locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                </Link>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3 bg-gray-900 text-white rounded-full font-medium"
                >
                  <Phone size={18} />
                  {t('callNow')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
