'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const relatedServices = [
  {
    title: 'Ortodoncia Invisible',
    description: 'Alinea tus dientes sin brackets metálicos. Tratamiento discreto y efectivo.',
    color: 'bg-[#B8D4E8]',
  },
  {
    title: 'Limpieza Dental Profunda',
    description: 'Eliminación completa de placa y tártaro para una sonrisa saludable.',
    color: 'bg-[#B8D4E8]',
  },
  {
    title: 'Carillas Dentales',
    description: 'Transforma la forma y color de tus dientes con carillas de porcelana.',
    color: 'bg-[#E8D5F2]',
  },
];

export function RelatedServices() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Servicios relacionados
          </h2>
          <p className="text-gray-600">
            Descubre otros tratamientos para mejorar tu sonrisa
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {relatedServices.map((service, index) => (
            <motion.a
              key={service.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`${service.color} rounded-3xl p-8 hover:shadow-lg transition-all cursor-pointer block`}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">{service.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-gray-900">
                Saber más
                <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
