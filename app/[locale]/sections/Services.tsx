'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { MagneticButton } from '../components/MagneticButton'

export function Services() {
  const t = useTranslations('services')

  const services = [
    {
      id: 1,
      title: t('cavityProtection.title'),
      description: t('cavityProtection.description'),
      readMore: t('cavityProtection.readMore'),
      color: 'bg-[#F5D5A8]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5-.5 1.5-1.5 2.5-2.5 3-1 .5-2 0-2.5-.5-.5 1-1 2.5-.5 4 .5 1.5 2 2.5 3.5 2.5 2 0 3.5-1.5 4-3.5.5 2 2 3.5 4 3.5 1.5 0 3-1 3.5-2.5.5-1.5 0-3-.5-4-.5.5-1.5 1-2.5.5-1-.5-2-1.5-2.5-3 1.2-.7 2-2 2-3.5 0-2-2-3.5-4.5-3.5z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: t('rootCanal.title'),
      description: t('rootCanal.description'),
      readMore: t('rootCanal.readMore'),
      color: 'bg-[#E8D5F2]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5-.5 1.5-1.5 2.5-2.5 3-1 .5-2 0-2.5-.5-.5 1-1 2.5-.5 4 .5 1.5 2 2.5 3.5 2.5 2 0 3.5-1.5 4-3.5.5 2 2 3.5 4 3.5 1.5 0 3-1 3.5-2.5.5-1.5 0-3-.5-4-.5.5-1.5 1-2.5.5-1-.5-2-1.5-2.5-3 1.2-.7 2-2 2-3.5 0-2-2-3.5-4.5-3.5z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: t('oralSurgery.title'),
      description: t('oralSurgery.description'),
      readMore: t('oralSurgery.readMore'),
      color: 'bg-[#B8D4E8]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C9.5 2 7.5 3.5 7.5 5.5c0 1.5.8 2.8 2 3.5-.5 1.5-1.5 2.5-2.5 3-1 .5-2 0-2.5-.5-.5 1-1 2.5-.5 4 .5 1.5 2 2.5 3.5 2.5 2 0 3.5-1.5 4-3.5.5 2 2 3.5 4 3.5 1.5 0 3-1 3.5-2.5.5-1.5 0-3-.5-4-.5.5-1.5 1-2.5.5-1-.5-2-1.5-2.5-3 1.2-.7 2-2 2-3.5 0-2-2-3.5-4.5-3.5z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-md">
              {t('title')}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-6 lg:mt-0 lg:text-right">
            <p className="text-gray-600 max-w-sm mb-6">
              {t('description')}
            </p>
            <MagneticButton className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              {t('cta')}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </MagneticButton>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 relative">
          {/* Vertical Label */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap z-10">
            <span className="text-xs tracking-[0.3em] text-gray-400 uppercase">
              {t('ourServices')}
            </span>
          </div>

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className={`${service.color} rounded-3xl p-8 relative group cursor-pointer`}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Link */}
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-gray-900 font-medium group/link"
                whileHover="hover"
              >
                <span className="relative">
                  {service.readMore}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gray-900"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: '100%' },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
                <motion.span
                  variants={{
                    hover: { x: 4 },
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}

          {/* Video/Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 relative rounded-3xl overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80"
              alt="Patient smiling"
              className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-900 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </div>
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="w-16 h-16 border-2 border-white rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
