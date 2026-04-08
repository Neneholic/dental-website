'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'

export function Testimonials() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      id: 1,
      title: t('review1.title'),
      content: t('review1.content'),
      author: t('review1.author'),
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
    {
      id: 2,
      title: t('review2.title'),
      content: t('review2.content'),
      author: t('review2.author'),
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
    {
      id: 3,
      title: t('review3.title'),
      content: t('review3.content'),
      author: t('review3.author'),
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-[#E8D5F2] rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('title')}
            </h2>
            <p className="text-gray-600 mt-4 max-w-md">
              {t('description')}
            </p>
          </AnimatedSection>

          {/* Navigation Arrows */}
          <AnimatedSection delay={0.2} className="flex gap-3 mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <ArrowLeft size={20} className="text-gray-900" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <ArrowRight size={20} className="text-white" />
            </motion.button>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Avatar */}
              <motion.div
                className="w-14 h-14 rounded-full overflow-hidden mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  delay: index * 0.15 + 0.3,
                }}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author & Rating */}
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">
                  {testimonial.author}
                </span>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + 0.4 + i * 0.1,
                        type: 'spring',
                        stiffness: 300,
                      }}
                    >
                      <Star
                        size={14}
                        className="text-amber-400 fill-amber-400"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
