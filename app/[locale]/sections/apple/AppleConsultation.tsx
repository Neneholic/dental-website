'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Check, Phone } from 'lucide-react'
import { cleanLabel } from './AppleAbout'
import { PHONE_DISPLAY, PHONE_TEL, Reveal, Tile, WhatsAppPill } from './ui'

/** Cita de valoración: el punto de partida, en un tile blanco con la foto de la doctora. */
export function AppleConsultation() {
  const t = useTranslations('consultation')
  const tNav = useTranslations('nav')
  const includes = t.raw('includes') as string[]

  return (
    <Tile id="valoracion" surface="canvas">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[18px] sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src="/images/dra-alondra-robles-sonrisa.webp"
            alt="Dra. Alondra Robles mostrando un escaneo dental en una tablet durante una cita de valoración en Guadalajara"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover object-[30%_center]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[17px] font-semibold tracking-[-0.022em] text-ink-48 md:text-[21px] md:tracking-[0.011em]">
            {cleanLabel(tNav('megaStart'))}
          </p>
          <h2 className="mt-2 text-[32px] font-bold leading-[1.1] tracking-[-0.015em] text-ink md:text-[48px]">
            {t('title')}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-ink-80">{t('description')}</p>

          <h3 className="mt-8 text-[17px] font-semibold tracking-[-0.022em] text-ink">{t('includesTitle')}</h3>
          <ul className="mt-2 border-t border-hairline">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-hairline py-3 text-[17px] leading-snug tracking-[-0.022em] text-ink">
                <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-action" strokeWidth={2.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <WhatsAppPill location="consultation">{t('cta')}</WhatsAppPill>
            <a href={PHONE_TEL} className="inline-flex items-center gap-1.5 text-[17px] text-action hover:underline underline-offset-4">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{tNav('megaCall')} </span>
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </Tile>
  )
}
