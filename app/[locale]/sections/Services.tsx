'use client'

import { useState } from 'react'
import { motion, type PanInfo } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Check, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { LordIcon } from '@lordicon/react'
import { Link } from '@/i18n/routing'
import { AnimatedSection } from '../components/AnimatedSection'
import { trackWhatsAppClick } from '../lib/analytics'
import { cn } from '../lib/utils'

// Servicios del carrusel: textos tomados de cada página de servicio (messages/*.json)
const SERVICE_SLIDES = [
  {
    key: 'cleaning',
    href: '/servicios/limpieza-dental',
    lordicon: '/icons/lordicon/cleaning.json',
    image: '/images/limpieza-dental-guadalajara-hero.webp',
    imagePosition: 'object-[40%_center]',
    alt: {
      es: 'Limpieza dental profesional con la Dra. Alondra Robles en Guadalajara',
      en: 'Professional dental cleaning with Dr. Alondra Robles in Guadalajara',
    },
    tint: 'bg-[#B8D4E8]/30',
    accent: 'bg-[#B8D4E8]',
    checklist: ['precision', 'prevention', 'freshBreath', 'brighter', 'painless', 'recommended'],
    whatsapp: {
      es: 'Hola, me gustaría agendar una limpieza dental',
      en: 'Hello, I would like to book a dental cleaning',
    },
  },
  {
    key: 'whitening',
    href: '/servicios/blanqueamiento-dental',
    lordicon: '/icons/lordicon/whitening.json',
    image: '/images/about-8.webp',
    imagePosition: 'object-center',
    alt: {
      es: 'Paciente sonriendo tras tratamiento de estética dental con la Dra. Alondra Robles en Guadalajara',
      en: 'Patient smiling after a cosmetic dental treatment with Dr. Alondra Robles in Guadalajara',
    },
    tint: 'bg-[#E8D5F2]/30',
    accent: 'bg-[#E8D5F2]',
    checklist: null, // usa services.whiteningFeature.checklist
    whatsapp: {
      es: 'Hola, me gustaría agendar una cita de blanqueamiento dental',
      en: 'Hello, I would like to book a teeth whitening appointment',
    },
  },
  {
    key: 'crowns',
    href: '/servicios/coronas-dentales',
    lordicon: '/icons/lordicon/crowns.json',
    image: '/images/corona-dental-colocacion-guadalajara.webp',
    imagePosition: 'object-center',
    alt: {
      es: 'Corona dental de porcelana colocada por la Dra. Alondra Robles en Guadalajara',
      en: 'Porcelain dental crown placed by Dr. Alondra Robles in Guadalajara',
    },
    tint: 'bg-[#F5D5A8]/30',
    accent: 'bg-[#F5D5A8]',
    checklist: ['fast', 'safe', 'longLasting', 'personalized', 'painless', 'guaranteed'],
    whatsapp: {
      es: 'Hola, me gustaría agendar una consulta para coronas dentales',
      en: 'Hello, I would like to book a dental crown consultation',
    },
  },
  {
    key: 'endodontics',
    href: '/servicios/endodoncia',
    lordicon: '/icons/lordicon/endodontics.json',
    image: '/images/endodoncia-guadalajara-hero.webp',
    imagePosition: 'object-[62%_center]',
    alt: {
      es: 'La Dra. Alondra Robles, dentista que realiza endodoncias en Guadalajara',
      en: 'Dr. Alondra Robles, dentist who performs root canals in Guadalajara',
    },
    tint: 'bg-[#D4E4D1]/40',
    accent: 'bg-[#D4E4D1]',
    checklist: ['saveTooth', 'painRelief', 'anesthesia', 'precise', 'fewVisits', 'restoration'],
    whatsapp: {
      es: 'Hola, me gustaría agendar una valoración para endodoncia',
      en: 'Hello, I would like to book a root canal evaluation',
    },
  },
] as const

const SWIPE_THRESHOLD = 60

type Slide = (typeof SERVICE_SLIDES)[number]

export function Services() {
  const t = useTranslations('services')
  const tAll = useTranslations()
  const locale = useLocale() as 'es' | 'en'

  // [activa, anterior]: la anterior sirve para saber qué tarjeta dio la vuelta
  const [[active, previous], setSlide] = useState<[number, number]>([0, 0])
  const total = SERVICE_SLIDES.length

  // Posición de cada tarjeta respecto a la activa en un carrusel circular:
  // -1 = asoma a la izquierda, 0 = centro, 1 = asoma a la derecha, 2 = oculta.
  const offsetOf = (i: number, current: number) => ((i - current + total + 1) % total) - 1
  // Las tarjetas que pasan de un extremo al otro saltan sin animarse (van ocultas)
  const jumps = SERVICE_SLIDES.map((_, i) => Math.abs(offsetOf(i, active) - offsetOf(i, previous)) > 1)

  const goTo = (index: number) => {
    const target = (index + total) % total
    if (target !== active) setSlide([target, active])
  }
  const prev = () => goTo(active - 1)
  const next = () => goTo(active + 1)

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next()
    else if (info.offset.x > SWIPE_THRESHOLD) prev()
  }

  const slideContent = (slide: Slide, index: number) => {
    const description =
      slide.key === 'whitening'
        ? t('whiteningFeature.description')
        : tAll(`${slide.key}.hero.subtitle`)
    const checklist: string[] =
      slide.checklist === null
        ? (t.raw('whiteningFeature.checklist') as string[])
        : slide.checklist.map((k) => tAll(`${slide.key}.benefits.${k}`))
    const whatsappHref = `https://wa.me/523322259513?text=${encodeURIComponent(slide.whatsapp[locale])}`

    return (
      // Info y foto en dos columnas que se estiran a la misma altura
      <div className={cn('grid h-full lg:grid-cols-2 items-stretch rounded-3xl overflow-hidden', slide.tint)}>
        {/* Imagen (arriba en móvil, a la derecha en escritorio) */}
        <div className="relative h-56 sm:h-72 lg:order-2 lg:h-full lg:min-h-[480px]">
          <img
            src={slide.image}
            alt={slide.alt[locale]}
            draggable={false}
            loading={index === 0 ? undefined : 'lazy'}
            className={cn('absolute inset-0 h-full w-full object-cover', slide.imagePosition)}
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col p-6 md:p-10 lg:order-1">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            {`/0${index + 1}`}
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{tAll(`nav.${slide.key}`)}</h3>
          <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className={cn('w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5', slide.accent)}>
                  <Check className="w-3 h-3 text-gray-800" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('services')}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              {t('cta')}
              <Calendar className="w-5 h-5" />
            </a>
            <Link
              href={slide.href}
              className="inline-flex items-center gap-1 font-medium text-gray-800 hover:text-gray-950"
            >
              {locale === 'es' ? 'Conoce más' : 'Learn more'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-2xl">
              {t('title')}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-6 lg:mt-0 lg:text-right">
            <a
              href="#valoracion"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('valuationLink')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
        </div>

        {/* Pestañas con íconos (en móvil se desplazan de lado) */}
        <div
          role="tablist"
          aria-label={t('title')}
          className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                  'service-tab flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors sm:px-5 sm:py-4',
                  isActive
                    ? `${s.accent} border-transparent text-gray-900 shadow-sm`
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                )}
              >
                <span
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12',
                    isActive ? 'bg-white' : 'bg-gray-100'
                  )}
                >
                  <LordIcon
                    src={s.lordicon}
                    trigger="hover"
                    target=".service-tab"
                    colors="primary:#164e63,secondary:#0891b2"
                    loading="lazy"
                    aria-hidden="true"
                    style={{ width: 34, height: 34 }}
                  />
                </span>
                <span className="whitespace-nowrap text-sm font-semibold sm:text-base">
                  {tAll(`nav.${s.key}`)}
                </span>
              </button>
            )
          })}
        </div>

        {/* Carrusel centrado: la tarjeta activa al centro y las vecinas asomando a los lados.
            Todas comparten la misma celda de la cuadrícula, así miden lo mismo de alto. */}
        <div className="relative mt-6">
          <div className="-mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
            <div
              id="service-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${SERVICE_SLIDES[active].key}`}
              className="grid"
            >
              {SERVICE_SLIDES.map((s, i) => {
                const offset = offsetOf(i, active)
                const isActive = offset === 0
                const isVisible = Math.abs(offset) <= 1
                return (
                  <motion.div
                    key={s.key}
                    aria-hidden={!isActive}
                    inert={!isActive}
                    initial={false}
                    animate={{
                      x: `${offset * 100}%`,
                      opacity: isActive ? 1 : isVisible ? 0.45 : 0,
                    }}
                    transition={jumps[i] ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    onClick={!isActive && isVisible ? () => goTo(i) : undefined}
                    className={cn(
                      'col-start-1 row-start-1 w-[86%] justify-self-center px-1.5 sm:px-2 lg:w-[78%]',
                      isActive ? 'z-10' : 'z-0',
                      !isActive && isVisible && 'cursor-pointer'
                    )}
                  >
                    {slideContent(s, i)}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Flechas y puntos */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label={locale === 'es' ? 'Servicio anterior' : 'Previous service'}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {SERVICE_SLIDES.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={tAll(`nav.${s.key}`)}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    i === active ? 'w-8 bg-gray-800' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label={locale === 'es' ? 'Siguiente servicio' : 'Next service'}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
