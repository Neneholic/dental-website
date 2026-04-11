'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Clock, UserCheck, Smile, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const benefitKeys = [
  { key: 'fast', icon: Zap },
  { key: 'safe', icon: Shield },
  { key: 'longLasting', icon: Clock },
  { key: 'personalized', icon: UserCheck },
  { key: 'painless', icon: Smile },
  { key: 'guaranteed', icon: CheckCircle },
];

export function ServiceBenefits() {
  const t = useTranslations('whitening.benefits');

  return (
    <section id="beneficios" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitKeys.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="bg-[#B8D4E8]/30 rounded-3xl p-8 relative cursor-pointer hover:bg-[#B8D4E8]/50 transition-colors"
              >
                {/* Icon with white/pastel background */}
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-gray-800 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(benefit.key)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${benefit.key}Desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
