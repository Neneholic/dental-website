'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Check, Calendar, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { AnimatedSection } from '../components/AnimatedSection'
import { trackWhatsAppClick } from '../lib/analytics'

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

  const whiteningTags = t.raw('whiteningFeature.tags') as string[]
  const whiteningChecklist = t.raw('whiteningFeature.checklist') as string[]

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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-2xl">
              {t('title')}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-6 lg:mt-0 lg:text-right">
            <p className="text-gray-600 max-w-sm mb-6">
              {t('description')}
            </p>
            <a
              href="#valoracion"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('valuationLink')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* Featured Service: Teeth Whitening */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden bg-[#B8D4E8]/30">
            <div className="grid lg:grid-cols-2 items-stretch">
              {/* Left: Content (enters from the left edge) */}
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-12"
              >
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  {t('whiteningFeature.number')}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('whiteningFeature.title')}{' '}
                  <span className="italic">{t('whiteningFeature.titleAccent')}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('whiteningFeature.description')}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {whiteningTags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        i === 1
                          ? 'bg-[#B8D4E8] text-gray-900'
                          : 'bg-white text-gray-700 border border-gray-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Checklist */}
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {whiteningChecklist.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#B8D4E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gray-800" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/5213310678412?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20de%20blanqueamiento%20dental"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('services')}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  {t('whiteningFeature.cta')}
                  <Calendar className="w-5 h-5" />
                </a>
              </motion.div>

              {/* Right: Image (enters from the right edge) */}
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-64 lg:h-auto min-h-[400px]"
              >
                <img
                  src="/images/about-8.webp"
                  alt="Paciente sonriendo tras tratamiento de estética dental con la Dra. Alondra Robles en Guadalajara"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
