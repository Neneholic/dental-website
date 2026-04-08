'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { MagneticButton } from '../components/MagneticButton'

const images = [
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
]

export function Consultation() {
  const t = useTranslations('consultation')

  return (
    <section className="py-24 md:py-32 bg-[#FDF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="text-sm text-gray-500 tracking-wider uppercase mb-4 block">
                {t('label')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('title')}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('description')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">
                  <AnimatedCounter target={98} suffix="%" />
                </span>
              </div>
              <p className="text-gray-600 mt-2">
                {t('statLabel')}
              </p>
            </AnimatedSection>
          </div>

          {/* Right - Images Grid */}
          <div className="relative">
            {/* Main Image */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={images[0]}
                  alt="Dental consultation"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </motion.div>
            </AnimatedSection>

            {/* Floating Content Card */}
            <AnimatedSection delay={0.4}>
              <div className="mt-6 lg:absolute lg:-left-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('detailedDescription')}
                </p>
                <MagneticButton className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  {t('cta')}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </MagneticButton>
              </div>
            </AnimatedSection>

            {/* Bottom Images */}
            <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-32">
              <AnimatedSection delay={0.5}>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={images[1]}
                    alt="Dental procedure"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection delay={0.6}>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={images[2]}
                    alt="Dental care"
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
