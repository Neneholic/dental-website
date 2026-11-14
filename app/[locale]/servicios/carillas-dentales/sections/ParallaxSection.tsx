'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useLocale } from 'next-intl';
import { realGoogleReviews } from '../../../sections/Testimonials';

// Reseñas reales de Google (las mismas del inicio) sobre la foto de la doctora
const REVIEW_IDS = [5, 2, 4];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.17 3.57-8.81z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95h-4v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1z" />
      <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.59 1.8l3.43-3.43A11.97 11.97 0 0 0 1.27 6.6l4 3.1C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const locale = useLocale() as 'es' | 'en';
  const reviews = REVIEW_IDS.map((id) => realGoogleReviews[locale].find((r) => r.id === id)!).filter(Boolean);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gray-900">
      {/* Foto de fondo con parallax suave */}
      <motion.div className="absolute inset-0 h-[120%] -top-[10%]" style={{ y }}>
        <Image
          src="/images/carillas-dentales-consulta-guadalajara.webp"
          alt={locale === 'es'
            ? 'La Dra. Alondra Robles compara el color de las carillas con su paciente en Guadalajara'
            : 'Dr. Alondra Robles matches the veneer shade with her patient in Guadalajara'}
          fill
          sizes="100vw"
          className="object-cover object-[30%_center]"
        />
      </motion.div>
      {/* Oscurece el lado de las reseñas (abajo en celular, derecha en escritorio) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/85 lg:bg-gradient-to-r lg:from-transparent lg:via-black/30 lg:to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 min-h-[640px] flex items-end lg:items-center lg:justify-end">
        <div className="w-full lg:max-w-md pt-56 sm:pt-72 lg:pt-0">
          {/* Encabezado: calificación de Google */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/25 text-sm mb-3">
              <GoogleG className="w-4 h-4" />
              <span className="font-semibold">5.0</span>
              <span className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-white/80">{locale === 'es' ? 'en Google' : 'on Google'}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold drop-shadow">
              {locale === 'es' ? 'Lo que dicen los pacientes de la Dra. Alondra Robles' : 'What Dr. Alondra Robles’ patients say'}
            </h3>
          </motion.div>

          {/* Reseñas */}
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <motion.figure
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-5 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#E8D5F2] flex items-center justify-center text-xs font-semibold text-gray-800">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <figcaption className="text-sm font-semibold text-gray-900">{review.name}</figcaption>
                    <div className="flex">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <GoogleG className="w-4 h-4" />
                </div>
                <blockquote className="text-sm text-gray-700 leading-relaxed">“{review.content}”</blockquote>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
