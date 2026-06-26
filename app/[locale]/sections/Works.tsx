'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider'

export function Works() {
  const t = useTranslations('works')
  const locale = useLocale()
  const isEs = locale === 'es'

  return (
    <section className="py-24 md:py-32 bg-[#D4E4D1] rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="text-sm text-gray-600 tracking-wider uppercase mb-4 block">
                {t('label')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('title')}
              </h2>
              <p className="text-gray-700 mb-8 max-w-md">
                {t('description')}
              </p>
              <WhatsAppButton variant="primary" location="works">
                {t('cta')}
              </WhatsAppButton>
            </AnimatedSection>

            {/* Happy Member Avatar */}
            <AnimatedSection delay={0.3} className="mt-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      delay: 0.4,
                    }}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src="/images/about-6.webp"
                      alt="Paciente feliz tras tratamiento dental"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      delay: 0.5,
                    }}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src="/images/about-7.webp"
                      alt="Paciente feliz tras tratamiento dental"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5,000+</div>
                  <div className="text-sm text-gray-600">{t('happyMembers')}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <BeforeAfterSlider
              beforeSrc="/images/limpieza-dental-antes.webp"
              afterSrc="/images/limpieza-dental-despues.webp"
              beforeAlt={
                isEs
                  ? 'Antes de la limpieza dental profesional con la Dra. Alondra Robles en Guadalajara'
                  : 'Before professional dental cleaning by Dr. Alondra Robles in Guadalajara'
              }
              afterAlt={
                isEs
                  ? 'Resultado tras la limpieza dental profesional con la Dra. Alondra Robles en Guadalajara'
                  : 'Result after professional dental cleaning by Dr. Alondra Robles in Guadalajara'
              }
              beforeLabel={isEs ? 'Antes' : 'Before'}
              afterLabel={isEs ? 'Después' : 'After'}
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                {isEs
                  ? 'Limpieza dental profesional · Desliza para ver el resultado'
                  : 'Professional dental cleaning · Slide to see the result'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
