'use client'

import { useRef } from 'react'
import { useLocale } from 'next-intl'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { realGoogleReviews } from '../Testimonials'
import { ChevronLabel, Reveal, Tile, TileHeader } from './ui'

const Stars = ({ count, size }: { count: number; size: number }) => (
  <span className="flex gap-0.5 text-action" aria-label={`${count}/5`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} style={{ width: size, height: size }} className="fill-current" strokeWidth={0} aria-hidden="true" />
    ))}
  </span>
)

/** Reseñas de Google en una galería horizontal de tarjetas, como las de apple.com. */
export function AppleTestimonials() {
  const locale = useLocale()
  const isEs = locale === 'es'
  const reviews = realGoogleReviews[locale as 'es' | 'en'] || realGoogleReviews.es
  const scroller = useRef<HTMLUListElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <Tile surface="parchment" bleed>
      <Reveal className="mx-auto max-w-[1080px] px-6">
        <TileHeader
          eyebrow={isEs ? 'Reseñas verificadas de Google' : 'Verified Google reviews'}
          title={isEs ? 'Lo que dicen nuestros pacientes.' : 'What our patients say.'}
        >
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-[40px] font-bold leading-none tracking-[-0.015em] text-ink">5.0</span>
            <Stars count={5} size={22} />
          </div>
        </TileHeader>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 md:mt-12">
        <ul
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:scroll-px-[max(1.5rem,calc((100vw-1080px)/2+1.5rem))] md:px-[max(1.5rem,calc((100vw-1080px)/2+1.5rem))]"
        >
          {reviews.map((r) => (
            <li
              key={r.id}
              className="flex w-[84%] shrink-0 snap-start flex-col rounded-[18px] bg-white p-6 sm:w-[340px] md:p-7"
            >
              <Stars count={r.rating} size={16} />
              <p className="mt-4 flex-1 text-[17px] leading-[1.47] tracking-[-0.022em] text-ink">
                &ldquo;{r.content}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-hairline pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-parchment text-[14px] font-semibold text-ink-80">
                  {r.avatar}
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold text-ink">{r.name}</span>
                  <span className="block text-[13px] text-ink-48">{r.date} · Google</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mx-auto mt-6 flex max-w-[1080px] items-center justify-between gap-4 px-6">
        <a
          href="https://www.google.com/maps/place/Dentista+Dra.+Alondra+Robles"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[17px]"
        >
          <ChevronLabel>{isEs ? 'Ver todas las reseñas en Google' : 'See all reviews on Google'}</ChevronLabel>
        </a>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={isEs ? 'Reseña anterior' : 'Previous review'}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-chip/65 text-ink transition-[background-color,transform] hover:bg-chip active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={isEs ? 'Siguiente reseña' : 'Next review'}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-chip/65 text-ink transition-[background-color,transform] hover:bg-chip active:scale-95"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </Tile>
  )
}
