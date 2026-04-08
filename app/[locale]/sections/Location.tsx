'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'

export function Location() {
  const t = useTranslations('location')
  const locale = useLocale()

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: locale === 'es' ? 'Dirección' : 'Address',
      content: locale === 'es' 
        ? 'Av. División del Norte 1234, Col. Del Valle, Ciudad de México' 
        : 'Av. División del Norte 1234, Col. Del Valle, Mexico City',
    },
    {
      icon: <Phone size={24} />,
      title: locale === 'es' ? 'Teléfono' : 'Phone',
      content: '+52 55 5523 4567',
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
        ? 'Lun - Vie: 9:00 - 19:00\nSáb: 9:00 - 14:00\nDom: Cerrado'
        : 'Mon - Fri: 9:00 AM - 7:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed',
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
                    <div className="w-12 h-12 bg-[#D4E4D1] rounded-xl flex items-center justify-center text-gray-700 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://www.google.com/maps/dir//Dentista+Dra.+Alondra+Robles"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                <Navigation size={20} />
                {locale === 'es' ? 'Cómo llegar con Google Maps' : 'Get directions with Google Maps'}
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Google Maps - Sin efecto hover que cause temblor */}
          <AnimatedSection delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1234567890123!2d-99.12345678901234!3d19.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x230662a0f28a435f!2sDentista%20Dra.%20Alondra%20Robles!5e0!3m2!1ses!2smx!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={locale === 'es' ? 'Ubicación de la clínica' : 'Clinic location'}
                className="absolute inset-0"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    DR
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dra. Alondra Robles</h4>
                    <p className="text-gray-600 text-sm">
                      {locale === 'es' ? 'Clínica Dental Privada' : 'Private Dental Clinic'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
