'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'

// RESEÑAS REALES - Reemplaza con tus reseñas de Google My Business
const realGoogleReviews = {
  es: [
    {
      id: 1,
      name: 'María Elena Sánchez',
      rating: 5,
      date: 'Hace 2 semanas',
      content: 'Excelente atención de la Dra. Alondra. Me hizo un blanqueamiento y carillas y quedé encantada con los resultados. El consultorio está muy limpio y el personal es muy amable. Sin duda la recomiendo al 100%.',
      avatar: 'M',
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      rating: 5,
      date: 'Hace 1 mes',
      content: 'Tenía mucho miedo al dentista pero la Dra. Robles tiene manos muy suaves y me explicó todo el procedimiento. Me colocó un implante y no sentí nada de dolor. Muy profesional y cálida su atención.',
      avatar: 'C',
    },
    {
      id: 3,
      name: 'Ana Lucía Gómez',
      rating: 5,
      date: 'Hace 3 semanas',
      content: 'Llevé a mis hijos a su primera revisión y quedé muy satisfecha. La Dra. Alondra es muy paciente con los niños y tiene un consultorio muy bien equipado. Los precios son justos y la calidad excelente.',
      avatar: 'A',
    },
    {
      id: 4,
      name: 'Fernando Ruiz',
      rating: 5,
      date: 'Hace 2 meses',
      content: 'Después de años buscando un buen dentista, finalmente encontré a la Dra. Robles. Me hizo un diseño de sonrisa completo y superó mis expectativas. Es una profesional muy capacitada y actualizada.',
      avatar: 'F',
    },
    {
      id: 5,
      name: 'Diana Patricia',
      rating: 5,
      date: 'Hace 1 semana',
      content: 'La mejor experiencia dental que he tenido. La consulta de valoración fue gratuita y me dieron todas las opciones de tratamiento sin presión. Excelente servicio y trato humano.',
      avatar: 'D',
    },
    {
      id: 6,
      name: 'Roberto Kú',
      rating: 5,
      date: 'Hace 1 mes',
      content: 'Me atendieron de urgencia un domingo por la noche. La Dra. Alondra llegó especialmente para ayudarme con un dolor terrible. Eso habla muy bien de su compromiso con los pacientes.',
      avatar: 'R',
    },
  ],
  en: [
    {
      id: 1,
      name: 'María Elena Sánchez',
      rating: 5,
      date: '2 weeks ago',
      content: 'Excellent care from Dr. Alondra. She did whitening and veneers for me and I was delighted with the results. The office is very clean and the staff is very friendly. I definitely recommend her 100%.',
      avatar: 'M',
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      rating: 5,
      date: '1 month ago',
      content: 'I was very afraid of the dentist but Dr. Robles has very gentle hands and explained the entire procedure to me. She placed an implant and I felt no pain at all. Very professional and warm attention.',
      avatar: 'C',
    },
    {
      id: 3,
      name: 'Ana Lucía Gómez',
      rating: 5,
      date: '3 weeks ago',
      content: 'I took my children for their first check-up and was very satisfied. Dr. Alondra is very patient with children and has a very well-equipped office. Prices are fair and quality is excellent.',
      avatar: 'A',
    },
    {
      id: 4,
      name: 'Fernando Ruiz',
      rating: 5,
      date: '2 months ago',
      content: 'After years looking for a good dentist, I finally found Dr. Robles. She did a complete smile design for me and exceeded my expectations. She is a highly trained and up-to-date professional.',
      avatar: 'F',
    },
    {
      id: 5,
      name: 'Diana Patricia',
      rating: 5,
      date: '1 week ago',
      content: 'The best dental experience I\'ve ever had. The evaluation consultation was free and they gave me all the treatment options without pressure. Excellent service and human treatment.',
      avatar: 'D',
    },
    {
      id: 6,
      name: 'Roberto Kú',
      rating: 5,
      date: '1 month ago',
      content: 'They attended to me urgently on a Sunday night. Dr. Alondra came especially to help me with terrible pain. That speaks very well of her commitment to patients.',
      avatar: 'R',
    },
  ],
}

export function Testimonials() {
  const t = useTranslations('testimonials')
  const locale = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const reviews = realGoogleReviews[locale as 'es' | 'en'] || realGoogleReviews.es

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = reviews.length - 1
      if (nextIndex >= reviews.length) nextIndex = 0
      return nextIndex
    })
  }, [reviews.length])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [paginate])

  const currentReview = reviews[currentIndex]

  return (
    <section className="py-24 md:py-32 bg-[#E8D5F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-sm text-gray-600 tracking-wider uppercase mb-4 block">
              {locale === 'es' ? '(reseñas de google)' : '(google reviews)'}
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
                ? 'Basado en más de 150 reseñas verificadas de Google' 
                : 'Based on over 150 verified Google reviews'}
            </p>
          </AnimatedSection>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 bg-white rounded-3xl p-8 md:p-12 shadow-xl cursor-grab active:cursor-grabbing"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-[#D4E4D1] rounded-2xl flex items-center justify-center mb-6">
                  <Quote size={32} className="text-gray-700" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: currentReview.rating }).map((_, i) => (
                    <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed line-clamp-4">
                  &ldquo;{currentReview.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {currentReview.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{currentReview.name}</h4>
                    <p className="text-gray-500">{currentReview.date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label={locale === 'es' ? 'Anterior' : 'Previous'}
            >
              <ChevronLeft size={24} className="text-gray-900" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-gray-900 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`${locale === 'es' ? 'Ir a reseña' : 'Go to review'} ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              aria-label={locale === 'es' ? 'Siguiente' : 'Next'}
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-gray-500 text-sm mt-4">
            {locale === 'es' ? 'Desliza para ver más reseñas' : 'Swipe to see more reviews'}
          </p>
        </div>

        {/* Google Link */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Dentista+Dra.+Alondra+Robles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-700 hover:text-gray-900 transition-colors shadow-md hover:shadow-lg"
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
