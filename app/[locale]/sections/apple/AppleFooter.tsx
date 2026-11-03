'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { trackWhatsAppClick } from '../../lib/analytics'
import { PHONE_DISPLAY, PHONE_TEL } from './ui'

/** Pie de página estilo Apple: fondo gris claro, columnas densas de enlaces y letra pequeña. */
export function AppleFooter() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const isEs = locale === 'es'
  const year = new Date().getFullYear()

  const columns = [
    {
      title: tNav('services'),
      links: [
        { name: tNav('valuation'), href: '#valoracion' },
        { name: tNav('cleaning'), href: '/servicios/limpieza-dental' },
        { name: tNav('whitening'), href: '/servicios/blanqueamiento-dental' },
        { name: tNav('crowns'), href: '/servicios/coronas-dentales' },
        { name: tNav('endodontics'), href: '/servicios/endodoncia' },
      ],
    },
    {
      title: t('company'),
      links: [
        { name: tNav('about'), href: '#about' },
        { name: isEs ? 'Resultados' : 'Results', href: '#resultados' },
        { name: tNav('contact'), href: '#location' },
        { name: t('privacy'), href: '/aviso-de-privacidad' },
      ],
    },
  ]

  const social = [
    { name: 'Instagram', url: 'https://www.instagram.com/od.alondrarobles/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@od.alondra.robles' },
    { name: 'WhatsApp', url: 'https://wa.me/523322259513' },
  ]

  return (
    <footer className="bg-parchment font-apple text-[12px] leading-[1.33] tracking-[-0.01em] text-ink-48">
      <div className="mx-auto max-w-[1080px] px-6 pb-8 pt-10">
        <p className="border-b border-hairline pb-4">
          {isEs
            ? 'Consulta dental privada en Guadalajara. Atención personalizada para tu sonrisa. Agenda tu cita de valoración por WhatsApp o al '
            : 'Private dental practice in Guadalajara. Personalized care for your smile. Book your evaluation on WhatsApp or call '}
          <a href={PHONE_TEL} className="text-action hover:underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>

        <div className="grid grid-cols-2 gap-8 py-6 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-2 font-semibold text-ink">{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="inline-block py-1 text-ink-80 hover:text-ink hover:underline">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-2 font-semibold text-ink">{t('social')}</h3>
            <ul>
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (s.name === 'WhatsApp') trackWhatsAppClick('footer_social_link')
                    }}
                    className="inline-block py-1 text-ink-80 hover:text-ink hover:underline"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-hairline pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Dra. Alondra Robles. {t('copyright')}
          </p>
          <p>C. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jal.</p>
        </div>
      </div>
    </footer>
  )
}
