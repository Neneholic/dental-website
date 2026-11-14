'use client';

import { motion } from 'framer-motion';
import { Check, Stethoscope, Gem, Sparkles } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { trackWhatsAppClick } from '../../../lib/analytics';

export function PricingCards() {
  const t = useTranslations('veneers.pricing');
  const locale = useLocale();
  
  const whatsappText = locale === 'es'
    ? 'Hola, quiero información y precio de carillas dentales'
    : 'Hello, I would like information and pricing for dental veneers';
  const whatsappLink = `https://wa.me/523322259513?text=${encodeURIComponent(whatsappText)}`;

  // Solo dos tipos de carilla, con precio "desde" por diente
  const options = [
    { key: 'resin', price: '2,900', accent: 'bg-[#B8D4E8]' },
    { key: 'ceramic', price: '6,000', accent: 'bg-[#E8D5F2]' },
  ] as const;

  return (
    <section id="precios" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Dos tarjetas: resina inyectada y cerámica */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {options.map((option, index) => {
            const Icon = option.key === 'resin' ? Sparkles : Gem;
            const features = t.raw(`${option.key}.features`) as string[];
            return (
              <motion.div
                key={option.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col"
              >
                <div className={`w-14 h-14 ${option.accent} rounded-2xl flex items-center justify-center mb-6 text-gray-800`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`${option.key}.name`)}</h3>
                <p className="text-gray-600 mb-6">{t(`${option.key}.desc`)}</p>

                {/* Precio desde, por diente */}
                <div className="mb-6">
                  <span className="text-sm text-gray-500">{t('from')}</span>
                  <p className="text-4xl md:text-5xl font-bold text-gray-900">
                    ${option.price} <span className="text-lg font-medium text-gray-500">MXN</span>
                  </p>
                  <span className="text-sm text-gray-500">{t('perTooth')}</span>
                </div>

                <div className="space-y-3 text-left flex-1">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${option.accent} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-gray-800" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota y CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8D5F2] rounded-full text-sm font-medium mb-4">
            <Stethoscope className="w-4 h-4" />
            {t('badge')}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t('note')}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('pricing_veneers')}
            className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg w-full md:w-auto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t('cta')}
          </a>
          <p className="text-sm text-gray-500 mt-4">{t('consultation')}</p>
        </motion.div>
      </div>
    </section>
  );
}
