'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { WhatsAppButton } from '../components/WhatsAppButton'

const images = [
  '/images/about-1.webp',
  '/images/about-2.webp',
  '/images/about-3.webp',
]

export function About() {
  const t = useTranslations('about')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#FDF8F3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images Grid */}
          <div className="relative grid grid-cols-2 gap-4 order-2 lg:order-1">
            {/* Left Image */}
            <motion.div
              style={{ y: y1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={images[0]}
                alt="Dra. Alondra Robles realizando un procedimiento dental"
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>

            {/* Center Content + Image */}
            <div className="flex flex-col gap-4">
              <AnimatedSection delay={0.3} className="text-center py-4">
                <span className="text-sm text-gray-500 tracking-wider uppercase">
                  {t('label')}
                </span>
              </AnimatedSection>

              <motion.div
                style={{ y: y2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src={images[1]}
                  alt="Atención odontológica personalizada en clínica dental privada en Guadalajara"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </motion.div>
            </div>

            {/* Right Image - Spans 2 rows visually */}
            <motion.div
              style={{ y: y3 }}
              className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src={images[2]}
                alt="Paciente sonriendo después de tratamiento dental con la Dra. Alondra Robles"
                className="w-full h-48 md:h-64 object-cover"
              />

              {/* Stats Overlay */}
              <motion.div
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-gray-900"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                >
                  <AnimatedCounter target={100} suffix="%" />
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-600 font-medium"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  {t('statLabel')}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('title')}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('description')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <WhatsAppButton variant="primary" location="about">
                {t('cta')}
              </WhatsAppButton>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
