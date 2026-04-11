'use client';

import { motion } from 'framer-motion';
import { Search, Shield, Sparkles, PartyPopper } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Consulta',
    description: 'Evaluación inicial gratuita de tu sonrisa y discusión de tus objetivos.',
    iconBg: 'bg-[#B8D4E8]',
  },
  {
    number: '02',
    icon: Shield,
    title: 'Preparación',
    description: 'Protegemos tus encías y labios antes de aplicar el gel blanqueador.',
    iconBg: 'bg-[#E8D5F2]',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Aplicación LED',
    description: 'Aplicamos el gel y activamos con luz LED de última generación.',
    iconBg: 'bg-[#B8D4E8]',
  },
  {
    number: '04',
    icon: PartyPopper,
    title: 'Resultado',
    description: 'Revelamos tu nueva sonrisa hasta 4 tonos más clara.',
    iconBg: 'bg-[#E8D5F2]',
  },
];

export function ServiceProcess() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-[#E8D5F2]/20">
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
            Proceso
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso simple, seguro y efectivo en solo 4 pasos
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 relative cursor-pointer shadow-sm hover:shadow-md transition-shadow text-center"
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800 font-bold text-sm mb-4">
                {step.number}
              </div>

              {/* Icon with pastel background */}
              <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 text-gray-800`}>
                <step.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
