'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

// TODO: cuando haya fotos reales antes/despues de coronas dentales,
// migrar esta seccion al patron BeforeAfterSlider (ver blanqueamiento).

export function BeforeAfterGallery() {
  const t = useTranslations('crowns.gallery')
  const locale = useLocale()
  const isEs = locale === 'es'

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            {t('label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </motion.div>

        {/* Showcase estatico: corona de zirconio (mientras no haya pares antes/despues) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#E8D5F2]/30 rounded-3xl p-6 md:p-10">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/corona-zirconio-guadalajara.webp"
                alt={
                  isEs
                    ? 'Corona dental de zirconio realizada por la Dra. Alondra Robles en Guadalajara'
                    : 'Zirconium dental crown made by Dr. Alondra Robles in Guadalajara'
                }
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
