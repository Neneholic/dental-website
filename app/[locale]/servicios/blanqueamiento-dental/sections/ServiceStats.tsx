'use client';

import { motion } from 'framer-motion';
import { CountUp } from '@/app/components/animations/CountUp';
import { Users, ThumbsUp, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '',
    label: 'Sonrisas transformadas',
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: '%',
    label: 'Satisfacción garantizada',
  },
  {
    icon: Clock,
    value: 45,
    suffix: 'min',
    label: 'Por sesión',
  },
  {
    icon: Award,
    value: 6,
    suffix: '+',
    label: 'Años de experiencia',
  },
];

export function ServiceStats() {
  return (
    <section className="bg-[#E8D5F2]/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-gray-800 mb-4 shadow-sm">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
