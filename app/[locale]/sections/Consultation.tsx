'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { WhatsAppButton } from '../components/WhatsAppButton'

const images = [
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
]

export function Consultation() {
  const t = useTranslations('consultation')
  const locale = useLocale()

  return (
    <section className="py-24 md:py-32 bg-[#FDF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="text-sm text-gray-500 tracking-wider uppercase mb-4 block">
                {locale === 'es' ? '(primera consulta)' : '(first consultation)'}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {locale === 'es'
                  ? 'Primera Consulta Profesional'
                  : 'Professional First Consultation'}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-gray-600 leading-relaxed mb-8">
                {locale === 'es'
                  ? 'En tu primera visita realizamos un diagnóstico completo, evaluación periodontal y un plan de tratamiento personalizado. Inversión en tu salud dental con atención profesional.'
                  : 'On your first visit we perform a complete diagnosis, periodontal evaluation and a personalized treatment plan. Investment in your dental health with professional care.'}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">
                  <AnimatedCounter target={6} suffix="" />
                </span>
              </div>
              <p className="text-gray-600 mt-2">
                {t('statLabel')}
              </p>
            </AnimatedSection>
          </div>

          {/* Right - Images Grid - Mejorado para evitar encimamiento */}
          <div className="relative space-y-6">
            {/* Main Image */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-default"
              >
                <img
                  src={images[0]}
                  alt={locale === 'es'
                    ? 'Primera consulta dental con la Dra. Alondra Robles en Guadalajara'
                    : 'First dental consultation with Dr. Alondra Robles in Guadalajara'}
                  className="w-full h-64 md:h-72 object-cover"
                />
              </motion.div>
            </AnimatedSection>

            {/* Content Card - Separado de las imágenes */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {locale === 'es'
                    ? 'Tu salud dental es mi prioridad. Agenda tu cita y conoce el mejor cuidado dental personalizado en Guadalajara.'
                    : 'Your dental health is my priority. Schedule your appointment and experience the best personalized dental care in Guadalajara.'}
                </p>
                <WhatsAppButton variant="primary" location="consultation" className="w-full justify-center">
                  {locale === 'es' ? 'Agendar Consulta' : 'Schedule Consultation'}
                </WhatsAppButton>
              </div>
            </AnimatedSection>

            {/* Bottom Images - Grid */}
            <div className="grid grid-cols-2 gap-4">
              <AnimatedSection delay={0.5}>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg cursor-default"
                >
                  <img
                    src={images[1]}
                    alt={locale === 'es'
                      ? 'Procedimiento dental profesional en consultorio'
                      : 'Professional dental procedure in office'}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection delay={0.6}>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg cursor-default"
                >
                  <img
                    src={images[2]}
                    alt={locale === 'es'
                      ? 'Cuidado dental personalizado en clínica de la Dra. Alondra Robles'
                      : 'Personalized dental care at Dr. Alondra Robles clinic'}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
