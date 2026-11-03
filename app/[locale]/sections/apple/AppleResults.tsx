'use client'

import { useTranslations, useLocale } from 'next-intl'
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider'
import { cleanLabel } from './AppleAbout'
import { Reveal, Tile, TileHeader, WhatsAppPill } from './ui'

/** Antes y después: tile oscuro para que la fotografía resalte. */
export function AppleResults() {
  const t = useTranslations('works')
  const locale = useLocale()
  const isEs = locale === 'es'

  return (
    <Tile id="resultados" surface="dark">
      <Reveal>
        <TileHeader onDark eyebrow={cleanLabel(t('label'))} title={t('title')} lead={t('description')} />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-[720px] md:mt-14">
        <BeforeAfterSlider
          className="rounded-[18px] shadow-[3px_5px_30px_rgba(0,0,0,0.22)]"
          beforeSrc="/images/limpieza-dental-antes.webp"
          afterSrc="/images/limpieza-dental-despues.webp"
          beforeAlt={
            isEs
              ? 'Antes de la limpieza dental profesional con la Dra. Alondra Robles en Guadalajara'
              : 'Before professional dental cleaning by Dr. Alondra Robles in Guadalajara'
          }
          afterAlt={
            isEs
              ? 'Resultado tras la limpieza dental profesional con la Dra. Alondra Robles en Guadalajara'
              : 'Result after professional dental cleaning by Dr. Alondra Robles in Guadalajara'
          }
          beforeLabel={isEs ? 'Antes' : 'Before'}
          afterLabel={isEs ? 'Después' : 'After'}
          afterLabelClassName="bg-black/60 font-semibold backdrop-blur-sm"
        />
        <p className="mt-4 text-center text-[14px] tracking-[-0.016em] text-body-muted">
          {isEs
            ? 'Limpieza dental profesional · Desliza para ver el resultado'
            : 'Professional dental cleaning · Slide to see the result'}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <WhatsAppPill location="works">{t('cta')}</WhatsAppPill>
      </Reveal>
    </Tile>
  )
}
