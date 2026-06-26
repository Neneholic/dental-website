'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { BeforeAfterSlider } from '../../../components/BeforeAfterSlider'

// TODO: cuando haya fotos reales de blanqueamiento dental antes/despues,
// reemplazar las imagenes placeholder y agregar mas casos.
type WhiteningCase = {
  beforeSrc: string
  afterSrc: string
  shades: string
  /** Si las fotos son reales del tratamiento, marcar true para mostrar el badge de tonos. */
  isRealWhitening?: boolean
}

const cases: WhiteningCase[] = [
  {
    // Caso real de blanqueamiento dental con la Dra. Alondra Robles
    beforeSrc: '/images/blanqueamiento-dental-guadalajara-antes.png',
    afterSrc: '/images/blanqueamiento-dental-guadalajara-despues.png',
    shades: '+4 tonos',
    isRealWhitening: true,
  },
  {
    // Caso real: paciente de zona Providencia
    beforeSrc: '/images/blanqueamiento-dental-providencia-antes.webp',
    afterSrc: '/images/blanqueamiento-dental-providencia-despues.webp',
    shades: '+4 tonos',
    isRealWhitening: true,
  },
  {
    // Placeholder: imagenes de limpieza dental (eliminar cuando haya mas casos reales)
    beforeSrc: '/images/limpieza-dental-antes.webp',
    afterSrc: '/images/limpieza-dental-despues.webp',
    shades: '+6 tonos',
    isRealWhitening: false,
  },
]

export function BeforeAfterGallery() {
  const t = useTranslations('whitening.gallery')
  const locale = useLocale()
  const isEs = locale === 'es'
  const [currentIndex, setCurrentIndex] = useState(0)

  const showNav = cases.length > 1
  const currentCase = cases[currentIndex]

  const nextCase = () => setCurrentIndex((prev) => (prev + 1) % cases.length)
  const prevCase = () =>
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)

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

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#E8D5F2]/30 rounded-3xl p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BeforeAfterSlider
                  beforeSrc={currentCase.beforeSrc}
                  afterSrc={currentCase.afterSrc}
                  beforeAlt={
                    isEs
                      ? 'Sonrisa antes del tratamiento dental'
                      : 'Smile before dental treatment'
                  }
                  afterAlt={
                    isEs
                      ? 'Sonrisa después del tratamiento dental con la Dra. Alondra Robles'
                      : 'Smile after dental treatment with Dr. Alondra Robles'
                  }
                  beforeLabel={t('before')}
                  afterLabel={t('after')}
                />
              </motion.div>
            </AnimatePresence>

            {/* Badge de tonos: solo se muestra si la imagen es realmente de blanqueamiento */}
            {currentCase.isRealWhitening && (
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                  <span className="text-[#5BA3C0]">✨</span>
                  {currentCase.shades}
                </span>
              </div>
            )}

            {/* Controles (solo si hay mas de un caso) */}
            {showNav && (
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevCase}
                  className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors shadow-sm"
                  aria-label={isEs ? 'Caso anterior' : 'Previous case'}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {cases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-[#B8D4E8]' : 'bg-gray-300'
                      }`}
                      aria-label={`${isEs ? 'Caso' : 'Case'} ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCase}
                  className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors shadow-sm"
                  aria-label={isEs ? 'Caso siguiente' : 'Next case'}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
