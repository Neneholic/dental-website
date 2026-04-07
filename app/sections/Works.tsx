'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { MagneticButton } from '../components/MagneticButton'

const works = [
  {
    id: 1,
    title: 'Teeth Straightening',
    description: 'Improve your smile with cleaning.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80',
  },
  {
    id: 2,
    title: 'Dental Implant',
    description: 'Improve your smile with cleaning.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80',
  },
]

export function Works() {
  return (
    <section className="py-24 md:py-32 bg-[#D4E4D1] rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="text-sm text-gray-600 tracking-wider uppercase mb-4 block">
                (our works)
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Services We Provide Are Listed Below
              </h2>
              <p className="text-gray-700 mb-8 max-w-md">
                Our team of skilled and experienced dental professionals
                strives to create comfortable and welcoming environment for
                each.
              </p>
              <MagneticButton className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Book Appointment
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </MagneticButton>
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
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                      alt="Happy member"
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
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                      alt="Happy member"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">happy member</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Work Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
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
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                    >
                      <ArrowRight className="w-5 h-5 text-gray-900" />
                    </motion.div>
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
