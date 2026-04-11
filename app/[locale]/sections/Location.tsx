'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function Location() {
  const t = useTranslations('location')
  const locale = useLocale()

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: locale === 'es' ? 'Dirección' : 'Address',
      content: 'C. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jal.',
    },
    {
      icon: <Phone size={24} />,
      title: locale === 'es' ? 'Teléfono' : 'Phone',
      content: '33 1067 8412',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'contacto@dralondrarobles.mx',
    },
    {
      icon: <Clock size={24} />,
      title: locale === 'es' ? 'Horario' : 'Hours',
      content: locale === 'es'
        ? 'Lunes - Viernes: 10:00 AM - 7:00 PM\nSábado: 9:00 AM - 2:00 PM\nDomingo: Cerrado'
        : 'Monday - Friday: 10:00 AM - 7:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed',
    },
  ]

  return (
    <section id="location" className="py-24 md:py-32 bg-[#FDF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm text-gray-500 tracking-wider uppercase mb-4 block">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t('title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('description')}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {locale === 'es' ? 'Información de Contacto' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B8D4E8] to-[#E8D5F2] rounded-xl flex items-center justify-center text-gray-800 flex-shrink-0 shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <WhatsAppButton variant="primary" className="w-full justify-center">
                  {locale === 'es' ? 'Agendar por WhatsApp' : 'Schedule via WhatsApp'}
                </WhatsAppButton>
              </motion.div>

              {/* Directions Link */}
              <motion.a
                href="https://www.google.com/maps/dir//Dr.+Alondra+Robles,+Dentist/@20.6830236,-103.3800708,17z"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                <Navigation size={20} />
                {locale === 'es' ? 'Cómo llegar con Google Maps' : 'Get directions with Google Maps'}
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Google Maps - Sin pastilla de nombre */}
          <AnimatedSection delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6694316819107!2d-103.3800708!3d20.683023599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af8715e63ed3%3A0x230662a0f28a435f!2sDr.%20Alondra%20Robles%2C%20Dentist!5e0!3m2!1sen!2smx!4v1775612686925!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={locale === 'es' ? 'Ubicación de la clínica' : 'Clinic location'}
                className="absolute inset-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
