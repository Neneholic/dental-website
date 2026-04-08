'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'
import { WhatsAppButton } from '../components/WhatsAppButton'

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

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

          {/* Google Maps */}
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
              
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dr. Alondra Robles</h4>
                    <p className="text-gray-600 text-sm">
                      {locale === 'es' ? 'Dentista · Guadalajara, Jal.' : 'Dentist · Guadalajara, Jal.'}
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
