'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { WhatsAppButton } from '../components/WhatsAppButton'

const images = [
  '/images/about-4.webp',
  '/images/about-5.webp',
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
              <WhatsAppButton variant="primary">
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
                      alt="Happy patient"
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
                      alt="Happy patient"
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
                <a
                  href={`https://wa.me/5213310678412?text=${encodeURIComponent(`Hola, me interesa el servicio de ${work.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden mb-4"
                >
                  <motion.img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                  </div>
                </a>
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
