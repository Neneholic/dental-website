'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { WhatsAppButton } from '../components/WhatsAppButton'

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
            <WhatsAppButton variant="primary" className="px-6 py-3 text-base">
              {t('cta')}
            </WhatsAppButton>
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

              {/* Read More Link - Now goes to WhatsApp */}
              <motion.a
                href={`https://wa.me/5213310678412?text=${encodeURIComponent(`Hola, me interesa el servicio de ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
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
              <motion.a
                href={`https://wa.me/5213310678412?text=${encodeURIComponent('Hola, me gustaría agendar una cita')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-xl"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.a>
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
