'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { AnimatedSection } from '../components/AnimatedSection'

// Dental Icons
const WhiteningIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <circle cx="32" cy="32" r="12" />
    <path d="M32 8v8M32 48v8M8 32h8M48 32h8" />
    <path d="M15 15l5.5 5.5M43.5 43.5L49 49M15 49l5.5-5.5M43.5 20.5L49 15" />
  </svg>
)

const EndodonticsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <path d="M32 8c-8 0-12 6-12 14 0 6 4 10 6 14 2 4 2 8 2 12 0 4-2 8-6 8s-6-4-6-8M32 8c8 0 12 6 12 14 0 6-4 10-6 14-2 4-2 8-2 12 0 4 2 8 6 8s6-4 6-8" />
    <path d="M32 16v32" strokeDasharray="4 4" />
  </svg>
)

const ImplantIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
    <path d="M28 8h8v12h-8zM28 20h8v8a8 8 0 01-8 8 8 8 0 01-8-8v-8h8z" />
    <path d="M32 36v20M28 48h8" />
    <circle cx="32" cy="12" r="3" fill="currentColor" />
  </svg>
)

export function Services() {
  const t = useTranslations('services')
  const locale = useLocale()
  const imageRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start']
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const services = [
    {
      id: 1,
      title: t('cavityProtection.title'),
      description: t('cavityProtection.description'),
      color: 'bg-[#F5D5A8]',
      icon: <WhiteningIcon />,
      href: '/servicios/blanqueamiento-dental',
      isLink: true,
    },
    {
      id: 2,
      title: t('rootCanal.title'),
      description: t('rootCanal.description'),
      color: 'bg-[#E8D5F2]',
      icon: <EndodonticsIcon />,
      isLink: false,
    },
    {
      id: 3,
      title: t('oralSurgery.title'),
      description: t('oralSurgery.description'),
      color: 'bg-[#B8D4E8]',
      icon: <ImplantIcon />,
      isLink: false,
    },
  ]

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const cardContent = (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -8 }}
        className={`${service.color} rounded-3xl p-8 relative cursor-pointer h-full`}
      >
        {/* Icon */}
        <div className="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mb-6 text-gray-800">
          {service.icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {service.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {service.description}
        </p>
        
        {service.isLink && (
          <div className="mt-4 flex items-center text-sm font-medium text-gray-800">
            {locale === 'es' ? 'Ver más' : 'Learn more'}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </motion.div>
    )

    if (service.isLink && service.href) {
      return (
        <Link href={service.href} className="block h-full">
          {cardContent}
        </Link>
      )
    }

    return cardContent
  }

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
            <a
              href="https://wa.me/5213310678412?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('cta')}
            </a>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* Full Width Image Card with Parallax */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden group h-[400px] md:h-[500px]"
          >
            <motion.div 
              className="absolute inset-0"
              style={{ scale, y }}
            >
              <img
                src="/images/about-8.webp"
                alt="Patient smiling"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Caption */}
            <motion.div 
              className="absolute bottom-8 left-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-white text-2xl md:text-3xl font-bold">
                Sonrisas que transforman vidas
              </p>
              <p className="text-white/80 mt-2">
                Descubre el poder de una sonrisa saludable
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
