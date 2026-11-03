'use client'

// Piezas compartidas del inicio estilo Apple: botones píldora, enlaces con chevrón y
// el enlace de WhatsApp. Un solo acento (Action Blue), pesos 400/600/700, sin sombras.

import type { ReactNode } from 'react'
import { useLocale } from 'next-intl'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { trackWhatsAppClick, type WhatsAppClickLocation } from '../../lib/analytics'

export const PHONE_DISPLAY = '33 2225 9513'
export const PHONE_TEL = 'tel:+523322259513'

export function useWhatsAppHref(message?: { es: string; en: string }) {
  const locale = useLocale() as 'es' | 'en'
  const text =
    message?.[locale] ??
    (locale === 'es'
      ? 'Hola, me gustaría agendar una cita con la Dra. Alondra Robles'
      : 'Hello, I would like to schedule an appointment with Dr. Alondra Robles')
  return `https://wa.me/523322259513?text=${encodeURIComponent(text)}`
}

export const WhatsAppGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn('h-[1.1em] w-[1.1em] shrink-0', className)} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

type PillVariant = 'primary' | 'secondary' | 'secondaryOnDark'

const pillBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-[22px] py-[11px] text-[17px] font-normal leading-none tracking-[-0.022em] transition-[transform,background-color,color] duration-200 ease-out active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-focus'

const pillVariants: Record<PillVariant, string> = {
  primary: 'bg-action text-white hover:bg-[#0077ed]',
  secondary: 'border border-action text-action hover:bg-action hover:text-white',
  secondaryOnDark: 'border border-action-dark text-action-dark hover:bg-action-dark hover:text-black',
}

export function pillClass(variant: PillVariant = 'primary', className?: string) {
  return cn(pillBase, pillVariants[variant], className)
}

/** Botón píldora que abre WhatsApp y registra la conversión en GA4. */
export function WhatsAppPill({
  children,
  location,
  variant = 'primary',
  message,
  className,
  icon = true,
}: {
  children: ReactNode
  location: WhatsAppClickLocation
  variant?: PillVariant
  message?: { es: string; en: string }
  className?: string
  icon?: boolean
}) {
  const href = useWhatsAppHref(message)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      className={pillClass(variant, className)}
    >
      {icon && <WhatsAppGlyph />}
      {children}
    </a>
  )
}

/** Enlace de texto azul con chevrón, el "Más información ›" de Apple. */
export function ChevronLabel({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span className={cn('group/cl inline-flex items-center gap-0.5', onDark ? 'text-action-dark' : 'text-action')}>
      <span className="group-hover/cl:underline underline-offset-4">{children}</span>
      <ChevronRight className="h-[1em] w-[1em] translate-y-px transition-transform group-hover/cl:translate-x-0.5" strokeWidth={2.25} aria-hidden="true" />
    </span>
  )
}

/** Encabezado de sección centrado: eyebrow + título grande + texto de apoyo. */
export function TileHeader({
  eyebrow,
  title,
  lead,
  onDark = false,
  className,
  children,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  onDark?: boolean
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      {eyebrow && (
        <p className={cn('mb-3 text-[17px] font-semibold tracking-[-0.022em] md:text-[21px] md:tracking-[0.011em]', onDark ? 'text-body-muted' : 'text-ink-48')}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-balance text-[32px] font-bold leading-[1.1] tracking-[-0.015em] md:text-[48px] lg:text-[56px] lg:leading-[1.07]',
          onDark ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mx-auto mt-4 max-w-2xl text-pretty text-[19px] leading-[1.42] tracking-[0.012em] md:text-[21px] md:leading-[1.38]',
            onDark ? 'text-body-muted' : 'text-ink-80'
          )}
        >
          {lead}
        </p>
      )}
      {children}
    </div>
  )
}

/** Envoltura de cada "tile" a todo lo ancho: el cambio de color es el divisor. */
export function Tile({
  id,
  surface = 'canvas',
  className,
  bleed = false,
  children,
}: {
  id?: string
  surface?: 'canvas' | 'parchment' | 'dark'
  className?: string
  /** Sin contenedor centrado: el contenido decide su propio ancho (galerías a sangre) */
  bleed?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-12 overflow-hidden py-16 md:py-24 lg:py-28',
        surface === 'canvas' && 'bg-white text-ink',
        surface === 'parchment' && 'bg-parchment text-ink',
        surface === 'dark' && 'bg-black text-white',
        className
      )}
    >
      {bleed ? children : <div className="mx-auto max-w-[1080px] px-6">{children}</div>}
    </section>
  )
}

/** Entrada discreta al hacer scroll (fade + 16px), sin rebote. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
