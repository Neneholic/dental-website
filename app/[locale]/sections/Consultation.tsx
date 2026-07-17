'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { WhatsAppButton } from '../components/WhatsAppButton'

const DOCTOR_IMAGE = '/images/dra-alondra-robles-sonrisa.webp'

export function Consultation() {
  const t = useTranslations('consultation')
  const includes = t.raw('includes') as string[]

  return (
    <section id="valoracion" className="py-24 md:py-32 bg-[#FDF8F3] overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-[#B8D4E8]/30">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Left: Content (enters from the left edge) */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12"
            >
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 block">
                {t('label')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {t('title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('description')}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('includesTitle')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#B8D4E8] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-800" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <WhatsAppButton variant="primary" location="consultation">
                {t('cta')}
              </WhatsAppButton>
            </motion.div>

            {/* Right: Doctor photo (enters from the right edge) */}
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-72 lg:h-auto min-h-[420px]"
            >
              <img
                src={DOCTOR_IMAGE}
                alt="Dra. Alondra Robles mostrando un escaneo dental en una tablet durante una cita de valoración en Guadalajara"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center]"
              />
              {/* Experience stat badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  <AnimatedCounter target={6} suffix="" />
                </span>
                <p className="text-gray-600 text-sm mt-1">{t('statLabel')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
