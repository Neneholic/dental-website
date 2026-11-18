'use client'

import { motion } from 'framer-motion'
import { LordIcon } from '@lordicon/react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { trackWhatsAppClick } from '../lib/analytics'

// Social Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Icono animado de Lordicon (mismos que el megamenú y las tarjetas del hero)
const ServiceIcon = ({ src }: { src: string }) => (
  <LordIcon
    src={src}
    trigger="hover"
    target="a"
    colors="primary:#164e63,secondary:#0891b2"
    loading="lazy"
    aria-hidden="true"
    className="shrink-0"
    style={{ width: 28, height: 28 }}
  />
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function Footer() {
  const t = useTranslations('footer')
  const tn = useTranslations('nav')
  const locale = useLocale()
  const es = locale === 'es'
  const currentYear = new Date().getFullYear()
  const whatsappLink = 'https://wa.me/523322259513'

  const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/od.alondrarobles/' },
    { name: 'TikTok', icon: <TikTokIcon />, url: 'https://www.tiktok.com/@od.alondra.robles' },
    { name: 'WhatsApp', icon: <WhatsAppIcon />, url: whatsappLink },
  ]

  const treatments = [
    { key: 'cleaning', href: '/servicios/limpieza-dental' },
    { key: 'whitening', href: '/servicios/blanqueamiento-dental' },
    { key: 'crowns', href: '/servicios/coronas-dentales' },
    { key: 'endodontics', href: '/servicios/endodoncia' },
    { key: 'veneers', href: '/servicios/carillas-dentales' },
  ].map(({ key, href }) => ({ name: tn(key), href, icon: `/icons/lordicon/${key}.json` }))

  const clinicLinks = [
    { name: es ? 'Inicio' : 'Home', href: '/' },
    { name: es ? 'Nosotros' : 'About', href: '/#about' },
    { name: tn('valuation'), href: '/#valoracion' },
    { name: es ? 'Contacto' : 'Contact', href: '/#location' },
    { name: t('privacy'), href: '/aviso-de-privacidad' },
  ]

  const mapsLink = es
    ? 'https://www.google.com/maps/dir//Dentista+Dra.+Alondra+Robles/@20.6830236,-103.3800708,17z'
    : 'https://www.google.com/maps/dir//Dr.+Alondra+Robles,+Dentist/@20.6830236,-103.3800708,17z'

  const headingClass = 'text-sm font-semibold uppercase tracking-wider text-[#164e63] mb-5'
  const linkClass = 'text-[#164e63]/75 hover:text-[#164e63] transition-colors'

  return (
    <footer className="bg-gradient-to-b from-[#EAF2F8] via-[#B8D4E8]/60 via-35% to-[#B8D4E8] text-[#164e63] pt-16 md:pt-24 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Franja de cierre */}
        <motion.div
          {...fadeUp}
          className="rounded-3xl bg-white/70 backdrop-blur-sm shadow-sm px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {es ? '¿Lista para tu nueva sonrisa?' : 'Ready for your new smile?'}
            </h3>
            <p className="text-gray-600">
              {es
                ? 'Escríbenos por WhatsApp y agenda tu cita con la Dra. Alondra Robles.'
                : 'Message us on WhatsApp and book your appointment with Dr. Alondra Robles.'}
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('footer_cta')}
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-full font-medium transition-colors shadow-lg"
          >
            <WhatsAppIcon />
            {es ? 'Agendar por WhatsApp' : 'Book on WhatsApp'}
          </a>
        </motion.div>

        {/* Columnas */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1fr_1.3fr] lg:gap-12 mb-12">
          {/* Marca */}
          <motion.div {...fadeUp}>
            <p className="text-2xl font-bold text-gray-900 mb-3">Dra. Alondra Robles</p>
            <p className="text-[#164e63]/75 mb-6 max-w-xs">
              {es
                ? 'Consulta dental privada en Guadalajara. Atención personalizada para tu sonrisa.'
                : 'Private dental practice in Guadalajara. Personalized care for your smile.'}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (social.name === 'WhatsApp') trackWhatsAppClick('footer_social')
                  }}
                  className="w-11 h-11 bg-white/80 rounded-full flex items-center justify-center text-[#164e63] hover:bg-white hover:text-[#0891b2] hover:-translate-y-0.5 transition-all shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tratamientos */}
          <motion.div {...fadeUp} transition={{ delay: 0.05 }}>
            <h4 className={headingClass}>{es ? 'Tratamientos' : 'Treatments'}</h4>
            <ul className="space-y-2">
              {treatments.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`group flex items-center gap-3 py-1 ${linkClass}`}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-sm transition-colors group-hover:bg-white">
                      <ServiceIcon src={item.icon} />
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Clínica */}
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <h4 className={headingClass}>{t('company')}</h4>
            <ul className="space-y-3">
              {clinicLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visítanos */}
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <h4 className={headingClass}>{es ? 'Visítanos' : 'Visit us'}</h4>
            <ul className="space-y-4 text-[#164e63]/80">
              <li className="flex gap-3">
                <span className="mt-0.5 text-[#0891b2]"><PinIcon /></span>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#164e63] transition-colors">
                  C. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jal.
                  <span className="block mt-1 text-sm font-medium text-[#0891b2]">
                    {es ? 'Cómo llegar →' : 'Get directions →'}
                  </span>
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[#0891b2]"><ClockIcon /></span>
                <span>
                  {es ? 'Lun - Vie: 10:00 AM - 7:00 PM' : 'Mon - Fri: 10:00 AM - 7:00 PM'}
                  <br />
                  {es ? 'Sábado: 9:00 AM - 2:00 PM' : 'Saturday: 9:00 AM - 2:00 PM'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[#0891b2]"><PhoneIcon /></span>
                <a href="tel:+523322259513" className="hover:text-[#164e63] transition-colors">
                  33 2225 9513
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Nombre grande */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden flex items-center justify-center py-2"
          aria-hidden="true"
        >
          <p className="text-[clamp(1.75rem,9vw,7rem)] font-bold text-white/60 leading-none tracking-tighter select-none whitespace-nowrap text-center">
            Dra. Alondra Robles
          </p>
        </motion.div>

        {/* Barra inferior */}
        <div className="border-t border-[#164e63]/15 mt-4 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[#164e63]/70">
          <p>© {currentYear} Dra. Alondra Robles. {t('copyright')}</p>
          <Link href="/aviso-de-privacidad" className="hover:text-[#164e63] transition-colors">
            {t('privacy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
