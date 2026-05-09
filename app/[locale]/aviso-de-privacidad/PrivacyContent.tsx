'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { ArrowLeft } from 'lucide-react'

type Props = {
  locale: string
}

const LAST_UPDATED = '2026-05-09'

export function PrivacyContent({ locale }: Props) {
  const isEs = locale === 'es'
  const sections = isEs ? esContent : enContent

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          {isEs ? 'Volver al inicio' : 'Back to home'}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {isEs ? 'Aviso de Privacidad' : 'Privacy Notice'}
        </h1>

        <p className="text-sm text-gray-500 mb-12">
          {isEs ? 'Última actualización: ' : 'Last updated: '}
          {new Date(LAST_UPDATED).toLocaleDateString(isEs ? 'es-MX' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

type Section = {
  title: string
  body: string[]
  list?: string[]
}

const esContent: Section[] = [
  {
    title: '1. Identidad y domicilio del responsable',
    body: [
      'En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), la Dra. Alondra Robles, en su carácter de profesional de la odontología y responsable del tratamiento de tus datos personales, pone a tu disposición el presente Aviso de Privacidad.',
      'Domicilio: C. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jalisco, México.\nCorreo electrónico: alondra.rrobles@gmail.com\nTeléfono: 33 1067 8412',
    ],
  },
  {
    title: '2. Datos personales que recabamos',
    body: [
      'Para las finalidades descritas en este aviso, podemos recabar los siguientes datos personales:',
    ],
    list: [
      'Datos de identificación: nombre completo.',
      'Datos de contacto: correo electrónico, número de teléfono.',
      'Datos de salud (al agendar consulta o durante la atención): historial médico-dental, alergias, padecimientos relevantes y antecedentes clínicos necesarios para el diagnóstico y tratamiento.',
      'Datos de navegación: dirección IP, tipo de dispositivo, navegador, páginas visitadas y tiempo de permanencia, recabados mediante cookies y tecnologías similares.',
    ],
  },
  {
    title: '3. Finalidades del tratamiento de datos personales',
    body: [
      'Tus datos personales serán utilizados para las siguientes finalidades primarias, necesarias para la prestación del servicio:',
    ],
    list: [
      'Programar, confirmar y gestionar citas dentales.',
      'Brindar atención odontológica y elaborar tu historial clínico.',
      'Realizar diagnósticos, planes de tratamiento y dar seguimiento post-tratamiento.',
      'Cumplir obligaciones legales, fiscales y sanitarias aplicables.',
      'Atender consultas, dudas o solicitudes que nos hagas llegar a través del sitio web o WhatsApp.',
    ],
  },
  {
    title: '4. Finalidades secundarias',
    body: [
      'De manera adicional, podríamos utilizar tus datos para las siguientes finalidades secundarias, las cuales no son necesarias para la prestación del servicio pero nos permiten brindarte una mejor experiencia:',
    ],
    list: [
      'Envío de información sobre promociones, recordatorios de revisión y consejos de cuidado dental.',
      'Análisis estadístico anónimo del uso del sitio web para mejorar nuestros servicios.',
    ],
  },
  {
    title: '5. Transferencia de datos',
    body: [
      'No vendemos, alquilamos ni compartimos tus datos personales con terceros con fines comerciales. Únicamente podemos transferirlos a los siguientes proveedores que nos asisten en la operación del sitio y la atención al paciente, bajo obligaciones de confidencialidad y protección de datos:',
    ],
    list: [
      'Google LLC (Google Analytics) — análisis estadístico de tráfico del sitio web.',
      'Meta Platforms, Inc. (WhatsApp) — para que puedas contactarnos directamente por mensajería.',
      'Proveedores de alojamiento web e infraestructura técnica (Vercel Inc., Neon Inc.) — para el funcionamiento del sitio.',
      'Autoridades competentes, cuando exista mandato legal o requerimiento judicial.',
    ],
  },
  {
    title: '6. Derechos ARCO y revocación del consentimiento',
    body: [
      'Tienes derecho a conocer qué datos personales tenemos de ti, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es tu derecho solicitar la corrección de tu información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando consideres que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerte al uso de tus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.',
      'Para ejercer cualquiera de estos derechos o revocar el consentimiento que has otorgado para el tratamiento de tus datos, puedes enviar una solicitud por escrito al correo alondra.rrobles@gmail.com incluyendo tu nombre completo, una identificación oficial y la descripción clara y precisa de los datos respecto de los cuales buscas ejercer alguno de los derechos ARCO. Daremos respuesta en un plazo máximo de 20 días hábiles.',
    ],
  },
  {
    title: '7. Uso de cookies y tecnologías de rastreo',
    body: [
      'Este sitio web utiliza cookies y tecnologías similares (web beacons, píxeles) para analizar el tráfico, mejorar tu experiencia y ofrecer contenido relevante. En particular, utilizamos Google Analytics 4 para obtener métricas anónimas de uso.',
      'Puedes desactivar las cookies en cualquier momento desde la configuración de tu navegador. Para optar por no participar en Google Analytics, puedes instalar la extensión oficial: https://tools.google.com/dlpage/gaoptout',
    ],
  },
  {
    title: '8. Medidas de seguridad',
    body: [
      'Hemos implementado medidas de seguridad administrativas, técnicas y físicas razonables para proteger tus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.',
    ],
  },
  {
    title: '9. Cambios al aviso de privacidad',
    body: [
      'Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad para atender novedades legislativas, políticas internas o nuevos requerimientos para la prestación de nuestros servicios. Cualquier cambio será publicado en esta misma página, indicando la fecha de la última actualización.',
    ],
  },
  {
    title: '10. Contacto',
    body: [
      'Si tienes alguna pregunta, comentario o queja relacionada con el tratamiento de tus datos personales o con este Aviso de Privacidad, puedes contactarnos en:',
      'Dra. Alondra Robles\nC. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jalisco\nCorreo: alondra.rrobles@gmail.com\nTeléfono: 33 1067 8412',
    ],
  },
]

const enContent: Section[] = [
  {
    title: '1. Data controller identity and address',
    body: [
      'In compliance with the Mexican Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP), Dr. Alondra Robles, in her capacity as a dental professional and controller responsible for the processing of your personal data, makes this Privacy Notice available to you.',
      'Address: C. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jalisco, Mexico.\nEmail: alondra.rrobles@gmail.com\nPhone: +52 33 1067 8412',
    ],
  },
  {
    title: '2. Personal data we collect',
    body: ['For the purposes described in this notice, we may collect the following personal data:'],
    list: [
      'Identification data: full name.',
      'Contact data: email address, phone number.',
      'Health data (when scheduling or during care): dental and medical history, allergies, relevant conditions and clinical background needed for diagnosis and treatment.',
      'Browsing data: IP address, device type, browser, pages visited and time spent, collected through cookies and similar technologies.',
    ],
  },
  {
    title: '3. Purposes of personal data processing',
    body: [
      'Your personal data will be used for the following primary purposes, which are necessary for the provision of the service:',
    ],
    list: [
      'Schedule, confirm and manage dental appointments.',
      'Provide dental care and maintain your clinical record.',
      'Make diagnoses, treatment plans and post-treatment follow-up.',
      'Comply with applicable legal, tax and health obligations.',
      'Respond to inquiries, questions or requests submitted through the website or WhatsApp.',
    ],
  },
  {
    title: '4. Secondary purposes',
    body: [
      'Additionally, we may use your data for the following secondary purposes, which are not necessary for service provision but allow us to offer a better experience:',
    ],
    list: [
      'Sending information about promotions, check-up reminders and dental care tips.',
      'Anonymous statistical analysis of website usage to improve our services.',
    ],
  },
  {
    title: '5. Data transfers',
    body: [
      'We do not sell, rent or share your personal data with third parties for commercial purposes. We only transfer it to the following providers that assist us in the operation of the site and patient care, under confidentiality and data protection obligations:',
    ],
    list: [
      'Google LLC (Google Analytics) — statistical analysis of website traffic.',
      'Meta Platforms, Inc. (WhatsApp) — to allow direct messaging communication.',
      'Web hosting and infrastructure providers (Vercel Inc., Neon Inc.) — for site operation.',
      'Competent authorities, when there is a legal mandate or judicial requirement.',
    ],
  },
  {
    title: '6. ARCO rights and consent withdrawal',
    body: [
      'You have the right to know what personal data we have about you, what we use it for and the conditions of use (Access). You also have the right to request the correction of your personal information if it is outdated, inaccurate or incomplete (Rectification); to request its deletion from our records or databases when you consider it is not being used in accordance with the principles, duties and obligations established by law (Cancellation); and to oppose the use of your personal data for specific purposes (Opposition). These are known as ARCO rights.',
      'To exercise any of these rights or withdraw the consent you have given for the processing of your data, you may send a written request to alondra.rrobles@gmail.com including your full name, an official ID and a clear and precise description of the data on which you wish to exercise any ARCO right. We will respond within a maximum of 20 business days.',
    ],
  },
  {
    title: '7. Cookies and tracking technologies',
    body: [
      'This website uses cookies and similar technologies (web beacons, pixels) to analyze traffic, improve your experience and offer relevant content. In particular, we use Google Analytics 4 to obtain anonymous usage metrics.',
      'You can disable cookies at any time from your browser settings. To opt out of Google Analytics, you can install the official extension: https://tools.google.com/dlpage/gaoptout',
    ],
  },
  {
    title: '8. Security measures',
    body: [
      'We have implemented reasonable administrative, technical and physical security measures to protect your personal data against damage, loss, alteration, destruction, unauthorized use, access or processing.',
    ],
  },
  {
    title: '9. Changes to the privacy notice',
    body: [
      'We reserve the right to make modifications or updates to this privacy notice at any time to address legislative changes, internal policies or new requirements for the provision of our services. Any change will be published on this same page, indicating the date of the last update.',
    ],
  },
  {
    title: '10. Contact',
    body: [
      'If you have any question, comment or complaint regarding the processing of your personal data or this Privacy Notice, you may contact us at:',
      'Dr. Alondra Robles\nC. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jalisco, Mexico\nEmail: alondra.rrobles@gmail.com\nPhone: +52 33 1067 8412',
    ],
  },
]
