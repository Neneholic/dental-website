'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Clock, Zap, Timer } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export function ServiceHero() {
  const t = useTranslations('whitening.hero');
  const locale = useLocale();
  
  const whatsappText = locale === 'es' 
    ? 'Hola, me gustaría agendar una cita de blanqueamiento dental'
    : 'Hello, I would like to schedule a teeth whitening appointment';
  const whatsappLink = `https://wa.me/5213310678412?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#B8D4E8]/40 via-white to-[#E8D5F2]/40">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#B8D4E8]/60 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#B8D4E8]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#E8D5F2]/50 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8D5F2] text-gray-800 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              {t('badge')}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              {t('title1')}{' '}
              <span className="text-[#5BA3C0]">{t('titleHighlight')}</span> {t('title2')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
            >
              {t('subtitle')}
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span>{t('safe')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-5 h-5 text-green-600" />
                <span>{t('duration')}</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('ctaPrimary')}
              </a>
              
              <a
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
              >
                {t('ctaSecondary')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-xl p-4 md:p-6">
              {/* Image from carousel #1 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-3.webp"
                  alt={t('titleHighlight')}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Floating stats - Pastilla 1: +4 tonos */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    opacity: { delay: 0.8, duration: 0.5 },
                    scale: { delay: 0.8, duration: 0.5 },
                    y: { delay: 1.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-6 left-6 bg-gradient-to-br from-[#B8D4E8] to-[#E8D5F2] rounded-2xl shadow-xl px-6 py-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Zap className="w-6 h-6 text-[#5BA3C0]" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">+4</p>
                      <p className="text-sm font-medium text-gray-700">{t('stat1')}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating stats - Pastilla 2: 45min */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [0, -6, 0],
                  }}
                  transition={{ 
                    opacity: { delay: 1, duration: 0.5 },
                    scale: { delay: 1, duration: 0.5 },
                    y: { delay: 2, duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border-2 border-[#E8D5F2] cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#E8D5F2] rounded-xl flex items-center justify-center">
                      <Timer className="w-6 h-6 text-gray-800" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">45<span className="text-xl">min</span></p>
                      <p className="text-sm font-medium text-gray-700">{t('stat2')}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Badge extra - Resultados inmediatos */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute top-6 right-6 bg-green-500 text-white rounded-full px-4 py-2 shadow-lg"
                >
                  <span className="text-sm font-bold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {locale === 'es' ? 'Resultados inmediatos' : 'Immediate results'}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
