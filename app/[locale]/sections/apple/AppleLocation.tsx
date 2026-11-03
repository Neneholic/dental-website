'use client'

import { useTranslations, useLocale } from 'next-intl'
import { cleanLabel } from './AppleAbout'
import { PHONE_DISPLAY, PHONE_TEL, Reveal, Tile, TileHeader, WhatsAppPill, pillClass } from './ui'

/** Ubicación: datos en filas con líneas finas y el mapa en una tarjeta redondeada. */
export function AppleLocation() {
  const t = useTranslations('location')
  const locale = useLocale()
  const isEs = locale === 'es'

  const rows = [
    {
      label: isEs ? 'Dirección' : 'Address',
      content: 'C. Pablo Villaseñor 377, Ladrón de Guevara, 44600 Guadalajara, Jal.',
    },
    { label: isEs ? 'Teléfono' : 'Phone', content: PHONE_DISPLAY, href: PHONE_TEL },
    { label: 'Email', content: 'alondra.rrobles@gmail.com', href: 'mailto:alondra.rrobles@gmail.com' },
    {
      label: isEs ? 'Horario' : 'Hours',
      content: isEs
        ? 'Lunes a viernes: 10:00 a 19:00\nSábado: 9:00 a 14:00\nDomingo: cerrado'
        : 'Monday to Friday: 10:00 AM – 7:00 PM\nSaturday: 9:00 AM – 2:00 PM\nSunday: closed',
    },
  ]

  const directions = isEs
    ? 'https://www.google.com/maps/dir//Dentista+Dra.+Alondra+Robles/@20.6830236,-103.3800708,17z'
    : 'https://www.google.com/maps/dir//Dr.+Alondra+Robles,+Dentist/@20.6830236,-103.3800708,17z'

  const mapSrc = isEs
    ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6694316819107!2d-103.3800708!3d20.683023599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af8715e63ed3%3A0x230662a0f28a435f!2sDentista%20Dra.%20Alondra%20Robles!5e0!3m2!1ses!2smx!4v1775612686925!5m2!1ses!2smx'
    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6694316819107!2d-103.3800708!3d20.683023599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af8715e63ed3%3A0x230662a0f28a435f!2sDr.%20Alondra%20Robles%2C%20Dentist!5e0!3m2!1sen!2smx!4v1775612686925!5m2!1sen!2smx'

  return (
    <Tile id="location" surface="canvas">
      <Reveal>
        <TileHeader eyebrow={cleanLabel(t('label'))} title={t('title')} lead={t('description')} />
      </Reveal>

      <div className="mt-12 grid gap-10 md:mt-14 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <Reveal delay={0.05} className="flex flex-col">
          <dl className="border-t border-hairline">
            {rows.map((row) => (
              <div key={row.label} className="border-b border-hairline py-4">
                <dt className="text-[13px] tracking-[-0.01em] text-ink-48">{row.label}</dt>
                <dd className="mt-1 whitespace-pre-line text-[17px] leading-[1.47] tracking-[-0.022em] text-ink">
                  {row.href ? (
                    <a href={row.href} className="text-action hover:underline underline-offset-4">
                      {row.content}
                    </a>
                  ) : (
                    row.content
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppPill location="location">{isEs ? 'Agendar por WhatsApp' : 'Schedule via WhatsApp'}</WhatsAppPill>
            <a href={directions} target="_blank" rel="noopener noreferrer" className={pillClass('secondary')}>
              {isEs ? 'Cómo llegar' : 'Get directions'}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[360px] overflow-hidden rounded-[18px] bg-parchment lg:min-h-full">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={isEs ? 'Ubicación del consultorio' : 'Office location'}
            className="absolute inset-0 h-full w-full"
          />
        </Reveal>
      </div>
    </Tile>
  )
}
