'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <Image
          src="/images/dra-alondra-robles-dentista-guadalajara.webp"
          alt={locale === 'es'
            ? 'Dra. Alondra Robles - Cirujano Dentista en Guadalajara'
            : 'Dr. Alondra Robles - Dentist in Guadalajara'}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
      </motion.div>

      {/* Content overlay */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-6 md:px-12 md:py-8 shadow-2xl text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            {locale === 'es' ? 'Confía tu sonrisa a' : 'Trust your smile to'}
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-[#5BA3C0]">
            Dra. Alondra Robles
          </p>
        </div>
      </motion.div>
    </section>
  );
}
