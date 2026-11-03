'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { LordIcon } from '@lordicon/react'
import { Link } from '@/i18n/routing'
import { cn } from '../../lib/utils'
import { SERVICE_SLIDES } from '../Services'
import { ChevronLabel, Reveal, Tile, TileHeader, WhatsAppPill } from './ui'

const SWIPE_THRESHOLD = 60

export function AppleServices() {
  const t = useTranslations('services')
  const tAll = useTranslations()
  const locale = useLocale() as 'es' | 'en'

  const [[active, direction], setSlide] = useState<[number, number]>([0, 0])
  const total = SERVICE_SLIDES.length

  const goTo = (index: number) => {
    const next = (index + total) % total
    if (next === active) return
    setSlide([next, index > active ? 1 : -1])
  }
  const prev = () => setSlide([(active - 1 + total) % total, -1])
  const next = () => setSlide([(active + 1) % total, 1])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next()
    else if (info.offset.x > SWIPE_THRESHOLD) prev()
  }

  const slide = SERVICE_SLIDES[active]
  const title = tAll(`nav.${slide.key}`)
  const description =
    slide.key === 'whitening' ? t('whiteningFeature.description') : tAll(`${slide.key}.hero.subtitle`)
  const checklist: string[] =
    slide.checklist === null
      ? (t.raw('whiteningFeature.checklist') as string[])
      : slide.checklist.map((k) => tAll(`${slide.key}.benefits.${k}`))

  return (
    <Tile id="services" surface="canvas">
      <Reveal>
        <TileHeader eyebrow={tAll('nav.services')} title={t('title')} lead={t('description')}>
          <a href="#valoracion" className="mt-5 inline-block text-[17px] md:text-[19px]">
            <ChevronLabel>{t('valuationLink')}</ChevronLabel>
          </a>
        </TileHeader>
      </Reveal>

      {/* Pestañas en píldora (filtro estilo Apple: gris claro inactivo, azul activo) */}
      <Reveal delay={0.05} className="-mx-6 mt-10 md:mt-12">
        <div
          role="tablist"
          aria-label={t('title')}
          className="flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center"
        >
          {SERVICE_SLIDES.map((s, i) => {
            const isActive = i === active
            return (
              <button
                key={s.key}
                type="button"
                role="tab"
                id={`service-tab-${s.key}`}
                aria-selected={isActive}
                aria-controls="service-panel"
                onClick={() => goTo(i)}
                className={cn(
                  'service-tab flex shrink-0 items-center gap-2 rounded-full py-2 pl-2 pr-4 text-[14px] tracking-[-0.016em] transition-[background-color,color,transform] duration-200 active:scale-[0.96]',
                  isActive ? 'bg-action text-white' : 'bg-parchment text-ink hover:bg-[#ebebef]'
                )}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <LordIcon
                    src={s.lordicon}
                    trigger="hover"
                    target=".service-tab"
                    colors="primary:#1d1d1f,secondary:#0066cc"
                    loading="lazy"
                    aria-hidden="true"
                    style={{ width: 24, height: 24 }}
                  />
                </span>
                <span className="whitespace-nowrap font-semibold">{tAll(`nav.${s.key}`)}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* Carrusel */}
      <div className="mt-6">
        <div
          id="service-panel"
          role="tabpanel"
          aria-labelledby={`service-tab-${slide.key}`}
          className="relative overflow-hidden rounded-[18px] bg-parchment"
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={slide.key}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d >= 0 ? 48 : -48 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d >= 0 ? -48 : 48 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="grid items-stretch lg:grid-cols-2"
            >
              {/* Imagen (arriba en móvil, a la derecha en escritorio) */}
              <div className="relative h-64 sm:h-80 lg:order-2 lg:h-auto lg:min-h-[520px]">
                <img
                  src={slide.image}
                  alt={slide.alt[locale]}
                  draggable={false}
                  className={cn('absolute inset-0 h-full w-full object-cover', slide.imagePosition)}
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col p-7 md:p-12 lg:order-1">
                <h3 className="text-[28px] font-bold leading-[1.1] tracking-[-0.01em] text-ink md:text-[40px]">{title}</h3>
                <p className="mt-4 text-[17px] leading-[1.47] tracking-[-0.022em] text-ink-80">{description}</p>

                <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 border-b border-hairline py-2.5 text-[15px] leading-snug text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-action" strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-8">
                  <WhatsAppPill location="services" message={slide.whatsapp}>
                    {t('cta')}
                  </WhatsAppPill>
                  <Link href={slide.href} className="text-[17px]">
                    <ChevronLabel>{locale === 'es' ? 'Conoce más' : 'Learn more'}</ChevronLabel>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Puntos y flechas (controles circulares grises, como en apple.com) */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-parchment px-4 py-3">
            {SERVICE_SLIDES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => goTo(i)}
                aria-label={tAll(`nav.${s.key}`)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === active ? 'w-6 bg-ink' : 'w-2 bg-[#aeaeb2] hover:bg-ink-48'
                )}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label={locale === 'es' ? 'Servicio anterior' : 'Previous service'}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-chip/65 text-ink transition-[background-color,transform] hover:bg-chip active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={locale === 'es' ? 'Siguiente servicio' : 'Next service'}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-chip/65 text-ink transition-[background-color,transform] hover:bg-chip active:scale-95"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </Tile>
  )
}
