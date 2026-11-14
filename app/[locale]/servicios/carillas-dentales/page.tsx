import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing, localePath } from '@/i18n/routing'
import { Navbar } from '../../sections/Navbar'
import { Footer } from '../../sections/Footer'
import { ServiceHero } from './sections/ServiceHero'
import { ServiceStats } from './sections/ServiceStats'
import { ServiceCandidates } from './sections/ServiceCandidates'
import { ServiceBenefits } from './sections/ServiceBenefits'
import { SmileDesign } from './sections/SmileDesign'
import { ServiceProcess } from './sections/ServiceProcess'
import { ParallaxSection } from './sections/ParallaxSection'
import { PricingCards } from './sections/PricingCards'
import { ServiceFaq } from './sections/ServiceFaq'
import { FinalCta } from './sections/FinalCta'

const SITE_URL = 'https://draalondrarobles.com'
const PATH = '/servicios/carillas-dentales'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'veneers.metadata' })

  const keywords =
    locale === 'es'
      ? [
          'carillas dentales guadalajara',
          'carillas de resina guadalajara',
          'carillas de resina inyectada',
          'carillas de cerámica guadalajara',
          'carillas de porcelana guadalajara',
          'carillas dentales precio',
          'diseño de sonrisa guadalajara',
          'dentista guadalajara',
          'dra alondra robles',
        ]
      : [
          'dental veneers guadalajara',
          'composite veneers guadalajara',
          'injected composite veneers',
          'ceramic veneers guadalajara',
          'porcelain veneers mexico',
          'dentist guadalajara',
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
          url: '/images/carillas-dentales-guadalajara-hero.webp',
          width: 1200,
          height: 630,
          alt: locale === 'es'
            ? 'Carillas dentales en Guadalajara con la Dra. Alondra Robles'
            : 'Dental veneers in Guadalajara with Dr. Alondra Robles',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/carillas-dentales-guadalajara-hero.webp'],
    },
  }
}

function ServiceJsonLd({ locale }: { locale: string }) {
  const isEs = locale === 'es'
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: isEs ? 'Carillas dentales' : 'Dental veneers',
    alternateName: isEs
      ? ['Carillas de resina inyectada', 'Carillas de cerámica', 'Carillas de porcelana', 'Diseño de sonrisa']
      : ['Injected composite veneers', 'Ceramic veneers', 'Porcelain veneers', 'Smile makeover'],
    description: isEs
      ? 'Carillas de resina inyectada y de cerámica para mejorar el color, la forma y el tamaño de tus dientes con un resultado natural.'
      : 'Injected composite and ceramic veneers to improve the color, shape and size of your teeth with a natural-looking result.',
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    bodyLocation: isEs ? 'Cara visible de los dientes' : 'Front surface of the teeth',
    url: `${SITE_URL}${localePath(locale, PATH)}`,
    image: `${SITE_URL}/images/carillas-dentales-guadalajara-hero.webp`,
    offers: [
      {
        '@type': 'Offer',
        name: isEs ? 'Carillas de resina inyectada' : 'Injected composite veneers',
        price: '2900',
        priceCurrency: 'MXN',
        priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: 2900, priceCurrency: 'MXN' },
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}${localePath(locale, PATH)}`,
      },
      {
        '@type': 'Offer',
        name: isEs ? 'Carillas de cerámica' : 'Ceramic veneers',
        price: '6000',
        priceCurrency: 'MXN',
        priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: 6000, priceCurrency: 'MXN' },
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}${localePath(locale, PATH)}`,
      },
    ],
    provider: { '@id': `${SITE_URL}/#dentist` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

async function FaqJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'veneers.faq.questions' })
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
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

export default async function CarillasPage({ params }: Props) {
  const { locale } = await params
  return (
    <>
      <ServiceJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <Navbar />
      <main className="min-h-screen">
        <ServiceHero />
        <ServiceStats />
        <ServiceCandidates />
        <ParallaxSection />
        <ServiceBenefits />
        <SmileDesign />
        <ServiceProcess />
        <PricingCards />
        <ServiceFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
