'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const cases = [
  { id: 1, shades: '+6 tonos' },
  { id: 2, shades: '+4 tonos' },
  { id: 3, shades: '+5 tonos' },
];

export function BeforeAfterGallery() {
  const t = useTranslations('whitening.gallery');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            {t('label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#E8D5F2]/30 rounded-3xl p-8 md:p-12">
            {/* Before/After Slider */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {/* After (Background) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#B8D4E8]/30 to-[#E8D5F2]/30">
                    <div className="text-center">
                      <div className="text-6xl mb-4">😁</div>
                      <p className="text-green-600 font-semibold">{t('after')}</p>
                      <p className="text-2xl font-bold text-gray-900">{cases[currentIndex].shades}</p>
                    </div>
                  </div>

                  {/* Before (Clipped) */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">😐</div>
                      <p className="text-gray-600 font-semibold">{t('before')}</p>
                    </div>
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="flex gap-0.5">
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevCase}
                className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSliderPosition(50);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#B8D4E8]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCase}
                className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
