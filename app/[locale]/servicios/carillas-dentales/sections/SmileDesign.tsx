'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Wand2, CheckCircle2, Sparkles } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const steps = [
  { key: 'step1', icon: Camera },
  { key: 'step2', icon: Wand2 },
  { key: 'step3', icon: CheckCircle2 },
  { key: 'step4', icon: Sparkles },
];

// Diseño de sonrisa: se diseña primero y a partir de ahí empiezan las carillas
export function SmileDesign() {
  const t = useTranslations('veneers.smileDesign');
  const locale = useLocale();

  return (
    <section id="diseno-de-sonrisa" className="py-24 md:py-32 bg-[#B8D4E8]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/diseno-de-sonrisa-guadalajara.webp"
            alt={locale === 'es'
              ? 'La Dra. Alondra Robles diseña una sonrisa en su iPad antes de colocar carillas en Guadalajara'
              : 'Dr. Alondra Robles designs a smile on her iPad before placing veneers in Guadalajara'}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[45%_center]"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            {t('label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{t('subtitle')}</p>

          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 text-gray-800 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t(step.key)}</h3>
                    <p className="text-gray-600">{t(`${step.key}Desc`)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-8 text-gray-700 font-medium">{t('note')}</p>
        </motion.div>
      </div>
    </section>
  );
}
