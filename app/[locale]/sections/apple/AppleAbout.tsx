'use client'

import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { AnimatedCounter } from '../../components/AnimatedCounter'
import { Reveal, Tile, TileHeader, WhatsAppPill } from './ui'

/** Quita los paréntesis de las etiquetas heredadas, p. ej. "(Acerca de mi)". */
export const cleanLabel = (label: string) => {
  const s = label.replace(/[()]/g, '').trim()
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function AppleAbout() {
  const t = useTranslations('about')
  const tc = useTranslations('consultation')
  const locale = useLocale()
  const isEs = locale === 'es'

  const stats = [
    { value: <AnimatedCounter target={100} suffix="%" />, label: t('statLabel') },
    { value: <AnimatedCounter target={6} suffix="" />, label: tc('statLabel') },
    { value: '5,000+', label: isEs ? 'Pacientes atendidos' : 'Patients treated' },
  ]

  return (
    <Tile id="about" surface="parchment">
      <Reveal>
        <TileHeader eyebrow={cleanLabel(t('label'))} title={t('title')} lead={t('description')}>
          <div className="mt-8 flex justify-center">
            <WhatsAppPill location="about">{t('cta')}</WhatsAppPill>
          </div>
        </TileHeader>
      </Reveal>

      {/* Fotografías */}
      <Reveal delay={0.1} className="mt-14 grid gap-4 md:mt-16 md:grid-cols-[3fr_2fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] md:aspect-auto md:h-[440px]">
          <Image
            src="/images/about-1.webp"
            alt="Dra. Alondra Robles realizando un procedimiento dental"
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] md:aspect-auto md:h-[440px]">
          <Image
            src="/images/about-3.webp"
            alt="Paciente sonriendo después de tratamiento dental con la Dra. Alondra Robles"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* Cifras: número grande + leyenda, divididas por líneas finas */}
      <Reveal delay={0.15} className="mt-12 grid grid-cols-3 divide-x divide-hairline text-center md:mt-16">
        {stats.map((s) => (
          <div key={s.label} className="px-2">
            <div className="text-[32px] font-bold leading-none tracking-[-0.015em] text-ink md:text-[56px]">{s.value}</div>
            <div className="mt-2 text-[13px] leading-snug text-ink-48 md:text-[17px]">{s.label}</div>
          </div>
        ))}
      </Reveal>
    </Tile>
  )
}
