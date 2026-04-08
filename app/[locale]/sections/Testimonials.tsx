'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'

export function Testimonials() {
  const t = useTranslations('testimonials')
  const locale = useLocale()

  // Real Google Reviews style testimonials
  const testimonials = [
    {
      id: 1,
      name: 'María Elena S.',
      rating: 5,
      date: locale === 'es' ? 'Hace 2 semanas' : '2 weeks ago',
      content: locale === 'es' 
        ? 'Excelente atención de la Dra. Alondra. Me hizo un blanqueamiento y carillas y quedé encantada con los resultados. El consultorio está muy limpio y el personal es muy amable. Sin duda la recomiendo al 100%.'
        : 'Excellent care from Dr. Alondra. She did whitening and veneers for me and I was delighted with the results. The office is very clean and the staff is very friendly. I definitely recommend her 100%.',
      avatar: 'M',
      color: 'bg-[#F5D5A8]',
    },
    {
      id: 2,
      name: 'Carlos M.',
      rating: 5,
      date: locale === 'es' ? 'Hace 1 mes' : '1 month ago',
      content: locale === 'es'
        ? 'Tenía mucho miedo al dentista pero la Dra. Robles tiene manos muy suaves y me explicó todo el procedimiento. Me colocó un implante y no sentí nada de dolor. Muy profesional y cálida su atención.'
        : 'I was very afraid of the dentist but Dr. Robles has very gentle hands and explained the entire procedure to me. She placed an implant and I felt no pain at all. Very professional and warm attention.',
      avatar: 'C',
      color: 'bg-[#E8D5F2]',
    },
    {
      id: 3,
      name: 'Ana Lucía G.',
      rating: 5,
      date: locale === 'es' ? 'Hace 3 semanas' : '3 weeks ago',
      content: locale === 'es'
        ? 'Llevé a mis hijos a su primera revisión y quedé muy satisfecha. La Dra. Alondra es muy paciente con los niños y tiene un consultorio muy bien equipado. Los precios son justos y la calidad excelente.'
        : 'I took my children for their first check-up and was very satisfied. Dr. Alondra is very patient with children and has a very well-equipped office. Prices are fair and quality is excellent.',
      avatar: 'A',
      color: 'bg-[#B8D4E8]',
    },
    {
      id: 4,
      name: 'Fernando R.',
      rating: 5,
      date: locale === 'es' ? 'Hace 2 meses' : '2 months ago',
      content: locale === 'es'
        ? 'Después de años buscando un buen dentista, finalmente encontré a la Dra. Robles. Me hizo un diseño de sonrisa completo y superó mis expectativas. Es una profesional muy capacitada y actualizada.'
        : 'After years looking for a good dentist, I finally found Dr. Robles. She did a complete smile design for me and exceeded my expectations. She is a highly trained and up-to-date professional.',
      avatar: 'F',
      color: 'bg-[#D4E4D1]',
    },
    {
      id: 5,
      name: 'Diana P.',
      rating: 5,
      date: locale === 'es' ? 'Hace 1 semana' : '1 week ago',
      content: locale === 'es'
        ? 'La mejor experiencia dental que he tenido. La consulta de valoración fue gratuita y me dieron todas las opciones de tratamiento sin presión. Excelente servicio y trato humano.'
        : 'The best dental experience I\'ve ever had. The evaluation consultation was free and they gave me all the treatment options without pressure. Excellent service and human treatment.',
      avatar: 'D',
      color: 'bg-[#F5D5A8]',
    },
    {
      id: 6,
      name: 'Roberto K.',
      rating: 5,
      date: locale === 'es' ? 'Hace 1 mes' : '1 month ago',
      content: locale === 'es'
        ? 'Me atendieron de urgencia un domingo por la noche. La Dra. Alondra llegó especialmente para ayudarme con un dolor terrible. Eso habla muy bien de su compromiso con los pacientes.'
        : 'They attended to me urgently on a Sunday night. Dr. Alondra came especially to help me with terrible pain. That speaks very well of her commitment to patients.',
      avatar: 'R',
      color: 'bg-[#E8D5F2]',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-sm text-gray-500 tracking-wider uppercase mb-4 block">
              {locale === 'es' ? '(opiniones de google)' : '(google reviews)'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {locale === 'es' ? 'Lo que Dicen Nuestros Pacientes' : 'What Our Patients Say'}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={28} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
            </div>
            <p className="text-gray-600">
              {locale === 'es' 
                ? 'Basado en más de 150 reseñas de Google' 
                : 'Based on over 150 Google reviews'}
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              {/* Quote Icon */}
              <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center mb-4`}>
                <Quote size={20} className="text-gray-700" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center font-bold text-gray-700`}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Link */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Dentista+Dra.+Alondra+Robles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            {locale === 'es' ? 'Ver todas las reseñas en Google' : 'See all reviews on Google'}
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
