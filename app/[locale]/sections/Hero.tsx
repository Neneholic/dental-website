'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { MagneticButton } from '../components/MagneticButton'

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
                  className="inline-block"
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
                      className="inline-block mx-2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline-block text-white"
                      >
                        <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5-.5 1.5-1.5 2.5-2.5 3-1 .5-2 0-2.5-.5-.5 1-1 2.5-.5 4 .5 1.5 2 2.5 3.5 2.5 2 0 3.5-1.5 4-3.5.5 2 2 3.5 4 3.5 1.5 0 3-1 3.5-2.5.5-1.5 0-3-.5-4-.5.5-1.5 1-2.5.5-1-.5-2-1.5-2.5-3 1.2-.7 2-2 2-3.5 0-2-2-3.5-4.5-3.5z" />
                      </svg>
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

          {/* CTA Button */}
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
            <MagneticButton className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-2xl">
              {t('cta')}
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </MagneticButton>
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
