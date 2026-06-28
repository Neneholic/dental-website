import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing, localePath } from '@/i18n/routing'
import { Navbar } from '../../sections/Navbar'
import { Footer } from '../../sections/Footer'
import { ServiceHero } from './sections/ServiceHero'
import { ServiceStats } from './sections/ServiceStats'
import { ServiceBenefits } from './sections/ServiceBenefits'
import { ServiceProcess } from './sections/ServiceProcess'
import { ParallaxSection } from './sections/ParallaxSection'
import { BeforeAfterGallery } from './sections/BeforeAfterGallery'
import { PricingCards } from './sections/PricingCards'
import { ServiceFaq } from './sections/ServiceFaq'
import { FinalCta } from './sections/FinalCta'

const SITE_URL = 'https://draalondrarobles.com'
const PATH = '/servicios/coronas-dentales'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'crowns.metadata' })

  const keywords =
    locale === 'es'
      ? [
          'coronas dentales guadalajara',
          'corona de zirconio guadalajara',
          'corona de porcelana',
          'restauración dental',
          'rehabilitación dental guadalajara',
          'precio corona dental',
          'dra alondra robles',
        ]
      : [
          'dental crowns guadalajara',
          'zirconium crowns',
          'porcelain crowns',
          'dental restoration guadalajara',
          'dr alondra robles',
        ]

  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}${localePath(l, PATH)}`]),
  )
  languages['x-default'] = `${SITE_URL}${localePath(routing.defaultLocale, PATH)}`

  return {
    title: t('title'),
    description: t('description'),
    keywords,
    alternates: {
      canonical: localePath(locale, PATH),
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_MX',
      url: `${SITE_URL}${localePath(locale, PATH)}`,
      title: t('title'),
      description: t('description'),
      siteName: 'Dra. Alondra Robles',
      images: [
        {
          url: '/images/dra-alondra-robles-dentista-guadalajara.webp',
          width: 1200,
          height: 630,
          alt: locale === 'es'
            ? 'Coronas dentales en Guadalajara con la Dra. Alondra Robles'
            : 'Dental crowns in Guadalajara with Dr. Alondra Robles',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/dra-alondra-robles-dentista-guadalajara.webp'],
    },
  }
}

function ServiceJsonLd({ locale }: { locale: string }) {
  const isEs = locale === 'es'
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: isEs
      ? 'Coronas dentales de porcelana y zirconio'
      : 'Porcelain and zirconium dental crowns',
    description: isEs
      ? 'Coronas dentales hechas a medida que restauran la forma, función y estética de dientes dañados con materiales premium.'
      : 'Custom-made dental crowns that restore the shape, function and aesthetics of damaged teeth with premium materials.',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Teeth',
    url: `${SITE_URL}${localePath(locale, PATH)}`,
    image: `${SITE_URL}/images/dra-alondra-robles-dentista-guadalajara.webp`,
    provider: { '@id': `${SITE_URL}/#dentist` },
    offers: {
      '@type': 'Offer',
      price: '5500',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}${localePath(locale, PATH)}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

async function FaqJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'crowns.faq.questions' })
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [0, 1, 2, 3, 4, 5].map((i) => ({
      '@type': 'Question',
      name: t(`${i}.q`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`${i}.a`),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default async function CoronasDentalesPage({ params }: Props) {
  const { locale } = await params
  return (
    <>
      <ServiceJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <Navbar />
      <main className="min-h-screen">
        <ServiceHero />
        <ServiceStats />
        <ServiceBenefits />
        <ParallaxSection />
        <ServiceProcess />
        <BeforeAfterGallery />
        <PricingCards />
        <ServiceFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
