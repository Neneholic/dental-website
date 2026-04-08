'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { WhatsAppButton } from '../components/WhatsAppButton'

// Sparkles/Star Icon for title
const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="inline-block w-12 h-12 md:w-16 md:h-16">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
  </svg>
)

export function Hero() {
  const t = useTranslations('hero')
  
  const titleWords = [t('title1'), t('title2'), t('title3')]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Title with Split Text Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-6">
            {titleWords.map((word, index) => (
              <span key={word} className="overflow-hidden inline-block">
                <motion.span
                  className="inline-flex items-center"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                  {index === 1 && (
                    <motion.span
                      className="inline-block mx-2 md:mx-4 text-amber-300"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
                    >
                      <SparkleIcon />
                    </motion.span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Button - WhatsApp con hover simple */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <a
              href="https://wa.me/5213310678412?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20con%20la%20Dra.%20Alondra%20Robles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('cta')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
