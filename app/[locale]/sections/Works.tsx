'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { WhatsAppButton } from '../components/WhatsAppButton'

// Imágenes de stock - Diseño de sonrisa
const images = [
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
]

export function Works() {
  const t = useTranslations('works')

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

          {/* Right - Work Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: t('teethStraightening'), desc: t('improveSmile'), img: images[0] },
              { title: t('dentalImplant'), desc: t('improveSmile'), img: images[1] },
            ].map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 50, clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group cursor-pointer"
              >
                <div className="block relative rounded-2xl overflow-hidden mb-4">
                  <motion.img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Hover Overlay - sin WhatsApp */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">Ver transformación</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm">{work.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
