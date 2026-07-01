'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Shield, Clock } from 'lucide-react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { trackWhatsAppClick } from '../../../lib/analytics'

export function ServiceHero() {
  const t = useTranslations('crowns.hero')
  const locale = useLocale()

  const whatsappText = locale === 'es'
    ? 'Hola, me gustaría agendar una cita para evaluación de corona dental'
    : 'Hello, I would like to schedule an appointment for a dental crown evaluation'
  const whatsappLink = `https://wa.me/5213310678412?text=${encodeURIComponent(whatsappText)}`

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image fullscreen */}
      <Image
        src="/images/corona-dental-colocacion-guadalajara.webp"
        alt={
          locale === 'es'
            ? 'Colocación de corona dental de porcelana con la Dra. Alondra Robles en Guadalajara'
            : 'Placement of a porcelain dental crown by Dr. Alondra Robles in Guadalajara'
        }
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay: oscuro a la izquierda para legibilidad del texto, transparente a la derecha */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
      {/* Overlay vertical sutil para reforzar contraste del navbar arriba */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md text-white rounded-full text-sm font-medium mb-6 border border-white/25"
          >
            <Sparkles className="w-4 h-4" />
            {t('badge')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
          >
            {t('title1')}{' '}
            <span className="text-[#E8D5F2]">{t('titleHighlight')}</span>{' '}
            {t('title2')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl drop-shadow"
          >
            {t('subtitle')}
          </motion.p>

          {/* Trust pills integrados (Shield + Clock) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md text-white rounded-full text-sm border border-white/25">
              <Shield className="w-4 h-4 text-green-400" />
              {t('safe')}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md text-white rounded-full text-sm border border-white/25">
              <Clock className="w-4 h-4 text-green-400" />
              {t('duration')}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* WhatsApp Primary */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('service_hero_crowns')}
              className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('ctaPrimary')}
            </a>

            {/* Secondary (glassmorphism) */}
            <a
              href="#proceso"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/25 transition-colors border border-white/30"
            >
              {t('ctaSecondary')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator (matches home Hero) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-3 bg-white/80 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
