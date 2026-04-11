'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿El blanqueamiento dental duele?',
    answer:
      'No, el procedimiento es completamente indoloro. Algunos pacientes pueden experimentar una ligera sensibilidad después del tratamiento, pero esto desaparece en 24-48 horas.',
  },
  {
    question: '¿Cuánto duran los resultados?',
    answer:
      'Los resultados pueden durar entre 1 y 2 años, dependiendo de tus hábitos. Evitar café, té, vino tinto y tabaco ayuda a mantener tu sonrisa blanca.',
  },
  {
    question: '¿Es seguro para el esmalte dental?',
    answer:
      'Sí, nuestro blanqueamiento es 100% seguro para el esmalte cuando se realiza por profesionales. Usamos productos aprobados y técnicas que protegen tu esmalte.',
  },
  {
    question: '¿Puedo blanquear si tengo brackets?',
    answer:
      'Los brackets deben retirarse antes del blanqueamiento. Los implantes no se blanquean, por lo que recomendamos coordinar el color con el tratamiento previo.',
  },
  {
    question: '¿Cuántas sesiones necesito?',
    answer:
      'La mayoría de pacientes logra excelentes resultados con una sola sesión de 45 minutos. En casos de manchas profundas, podríamos recomendar una segunda sesión.',
  },
  {
    question: '¿Hay restricciones después del tratamiento?',
    answer:
      'Durante las primeras 48 horas es recomendable evitar alimentos y bebidas que tiñan (café, té, vino). Te proporcionaremos un kit de cuidado específico.',
  },
];

export function ServiceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#B8D4E8]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Resolvemos tus dudas sobre el blanqueamiento dental
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
