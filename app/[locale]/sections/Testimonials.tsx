'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useLocale } from 'next-intl'
import { AnimatedSection } from '../components/AnimatedSection'

// RESEÑAS REALES DE GOOGLE MY BUSINESS - DRA. ALONDRA ROBLES
const realGoogleReviews = {
  es: [
    {
      id: 1,
      name: 'Julia Castillo',
      rating: 5,
      date: 'Hace 1 mes',
      content: '¡Me encantó! Es muy profesional y amigable. Transmite una sensación de calma, y lo mejor es que tiene unas manos increíblemente suaves, así que no te duele el cuello. ¡La recomiendo muchísimo!',
      avatar: 'JC',
    },
    {
      id: 2,
      name: 'Juan Rivera',
      rating: 5,
      date: 'Hace 1 mes',
      content: 'La Dra. Robles tiene una increíble manera de tratar a los pacientes y un excelente manejo de sus instrumentos. Creo que es muy importante que un dentista tenga destreza. Su consultorio está impecablemente limpio, y es muy precisa tanto en su trabajo como en sus consultas. ¡La recomiendo mucho!',
      avatar: 'JR',
    },
    {
      id: 3,
      name: 'Erick Morales',
      rating: 5,
      date: 'Hace 1 mes',
      content: 'Excelente servicio y resultados increíbles. Me hice una limpieza y tratamiento de blanqueamiento y quedé encantado con el resultado. Muy profesional y a precios razonables. ¡Definitivamente volveré!',
      avatar: 'EM',
    },
    {
      id: 4,
      name: 'Erika Bañales',
      rating: 5,
      date: 'Hace 2 meses',
      content: 'La Dra. Alondra es súper paciente y explica todo de manera simple y comprensible.',
      avatar: 'EB',
    },
    {
      id: 5,
      name: 'Diego Rivera',
      rating: 5,
      date: 'Hace 1 semana',
      content: '¡¡Excelente servicio!! La Dra. Alondra es súper profesional, atenta y amable. Las instalaciones están impecables, y siempre ha sido puntual para las citas. Los tratamientos que he solicitado se realizan con gran cuidado y atención al detalle. Altamente recomendada.',
      avatar: 'DR',
    },
    {
      id: 6,
      name: 'Saith Castillo',
      rating: 5,
      date: 'Hace 2 meses',
      content: 'La mejor de todas, altamente recomendada.',
      avatar: 'SC',
    },
  ],
  en: [
    {
      id: 1,
      name: 'Julia Castillo',
      rating: 5,
      date: '1 month ago',
      content: 'I loved it! She\'s very professional and friendly. She exudes a sense of calm, and the best part is that she has incredibly gentle hands, so she doesn\'t hurt your neck. I highly recommend her!',
      avatar: 'JC',
    },
    {
      id: 2,
      name: 'Juan Rivera',
      rating: 5,
      date: '1 month ago',
      content: 'Dr. Robles has an incredible bedside manner and excellent handling of her instruments. I think it\'s very important for a dentist to have dexterity. Her office is impeccably clean, and she\'s very precise in both her work and her consultations. I highly recommend her!',
      avatar: 'JR',
    },
    {
      id: 3,
      name: 'Erick Morales',
      rating: 5,
      date: '1 month ago',
      content: 'Great service and amazing results. I had a cleaning and whitening treatment and I was thrilled with the result. Very professional and reasonably priced. I\'ll definitely be back!',
      avatar: 'EM',
    },
    {
      id: 4,
      name: 'Erika Bañales',
      rating: 5,
      date: '2 months ago',
      content: 'Dr. Alondra is super patient and explains everything in a simple and understandable way.',
      avatar: 'EB',
    },
    {
      id: 5,
      name: 'Diego Rivera',
      rating: 5,
      date: '1 week ago',
      content: 'Excellent service!! Dr. Alondra is super professional, attentive, and kind. The facilities are spotless, and she has always been punctual for appointments. The treatments I\'ve requested are performed with great care and attention to detail. Highly recommended.',
      avatar: 'DR',
    },
    {
      id: 6,
      name: 'Saith Castillo',
      rating: 5,
      date: '2 months ago',
      content: 'The best of all, highly recommended.',
      avatar: 'SC',
    },
  ],
}

export function Testimonials() {
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
    }, 6000)
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
              {locale === 'es' ? '(reseñas verificadas de google)' : '(verified google reviews)'}
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
              <span className="text-2xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-600">
              {locale === 'es' 
                ? 'Basado en reseñas verificadas de Google My Business' 
                : 'Based on verified Google My Business reviews'}
            </p>
          </AnimatedSection>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative h-[450px] md:h-[380px]">
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
                {/* Google Logo Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-600">Google</span>
                </div>

                {/* Quote Icon */}
                <div className="w-14 h-14 bg-[#D4E4D1] rounded-2xl flex items-center justify-center mb-6">
                  <Quote size={28} className="text-gray-700" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: currentReview.rating }).map((_, i) => (
                    <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed line-clamp-4">
                  &ldquo;{currentReview.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {currentReview.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{currentReview.name}</h4>
                      <p className="text-gray-500">{currentReview.date}</p>
                    </div>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="hidden sm:flex items-center gap-1 text-green-600 text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {locale === 'es' ? 'Verificado' : 'Verified'}
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
