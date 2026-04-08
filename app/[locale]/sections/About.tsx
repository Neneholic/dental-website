'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { MagneticButton } from '../components/MagneticButton'

const images = [
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
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
                alt="Dental procedure"
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
                  alt="Dental care"
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
                alt="Patient smiling"
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
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  <AnimatedCounter target={98} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">
                  {t('statLabel')}
                </div>
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
              <MagneticButton className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                {t('cta')}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </MagneticButton>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
