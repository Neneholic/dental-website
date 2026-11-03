'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { CalendarCheck, ShieldCheck, Sparkles, Crown, Activity } from 'lucide-react'
import { LordIcon } from '@lordicon/react'
import { Link } from '@/i18n/routing'
import { WhatsAppPill, pillClass } from './ui'

// Accesos rápidos (como la barra de íconos de la tienda de Apple). Mismos destinos que el menú.
const quickServices = [
  { key: 'valuation', href: '#valoracion', icon: CalendarCheck },
  { key: 'cleaning', href: '/servicios/limpieza-dental', icon: ShieldCheck },
  { key: 'whitening', href: '/servicios/blanqueamiento-dental', icon: Sparkles },
  { key: 'crowns', href: '/servicios/coronas-dentales', icon: Crown },
  { key: 'endodontics', href: '/servicios/endodoncia', icon: Activity },
] as const

const ease = [0.25, 0.1, 0.25, 1] as const

export function AppleHero() {
  const t = useTranslations('hero')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const title = [t('title1'), t('title2').trim(), t('title3')].join(' ')

  return (
    <section id="home" className="bg-white pt-12 text-ink">
      <div className="mx-auto max-w-[1080px] px-6 pt-14 text-center md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-[17px] font-semibold tracking-[-0.022em] text-ink-48 md:text-[21px] md:tracking-[0.011em]"
        >
          {locale === 'es' ? 'Dra. Alondra Robles · Cirujano Dentista' : 'Dr. Alondra Robles · Dental Surgeon'}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="mx-auto mt-2 max-w-4xl text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[56px] md:text-[72px] lg:text-[80px]"
        >
          {title}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="mx-auto mt-5 max-w-2xl text-pretty text-[19px] leading-[1.42] tracking-[0.012em] text-ink-80 md:text-[24px] md:leading-[1.33] md:tracking-[0.009em]"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <WhatsAppPill location="hero">{t('cta')}</WhatsAppPill>
          <a href="#services" className={pillClass('secondary')}>
            {tNav('megaAll')}
          </a>
        </motion.div>

        {/* Accesos rápidos a servicios */}
        <motion.nav
          aria-label={t('servicesLabel')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="-mx-6 mt-12 md:mt-14"
        >
          <ul className="flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-4 md:gap-8">
            {quickServices.map(({ key, href, icon: Icon }) => (
              <li key={key} className="shrink-0">
                <Link href={href} className="group flex w-[88px] flex-col items-center gap-2 text-center md:w-[104px]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-parchment transition-colors group-hover:bg-[#ebebef]" aria-hidden="true">
                    <LordIcon
                      src={`/icons/lordicon/${key}.json`}
                      trigger="hover"
                      target="a"
                      colors="primary:#1d1d1f,secondary:#0066cc"
                      style={{ width: 36, height: 36 }}
                    >
                      <Icon className="h-6 w-6" />
                    </LordIcon>
                  </span>
                  <span className="text-[12px] font-semibold leading-tight tracking-[-0.01em] text-ink group-hover:text-action">
                    {t(`services.${key}.title`)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>

      {/* Foto principal a todo lo ancho: la fotografía es la protagonista */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease }}
        className="relative mt-12 h-[56vh] min-h-[320px] max-h-[680px] w-full overflow-hidden md:mt-16"
      >
        <Image
          src="/images/dra-alondra-robles-dentista-guadalajara.webp"
          alt={
            locale === 'es'
              ? 'La Dra. Alondra Robles, cirujano dentista en Guadalajara, en su consultorio'
              : 'Dr. Alondra Robles, dentist in Guadalajara, at her practice'
          }
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
      </motion.div>
    </section>
  )
}
