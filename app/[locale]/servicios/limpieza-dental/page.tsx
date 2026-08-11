import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing, localePath } from '@/i18n/routing'
import { Navbar } from '../../sections/Navbar'
import { Footer } from '../../sections/Footer'
import { Location } from '../../sections/Location'
import { ServiceHero } from './sections/ServiceHero'
import { ServiceStats } from './sections/ServiceStats'
import { ServiceBenefits } from './sections/ServiceBenefits'
import { ServiceProcess } from './sections/ServiceProcess'
import { ParallaxSection } from './sections/ParallaxSection'
import { PricingCards } from './sections/PricingCards'
import { ServiceFaq } from './sections/ServiceFaq'

const SITE_URL = 'https://draalondrarobles.com'
const PATH = '/servicios/limpieza-dental'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cleaning.metadata' })

  const keywords =
    locale === 'es'
      ? [
          'limpieza dental guadalajara',
          'limpieza dental precio',
          'profilaxis dental',
          'destartraje dental',
          'limpieza dental profunda',
          'dra alondra robles',
        ]
      : [
          'dental cleaning guadalajara',
          'dental cleaning price',
          'dental prophylaxis',
          'teeth scaling',
          'deep dental cleaning',
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
          url: '/images/dra-alondra-robles-procedimiento-dental.webp',
          width: 1200,
          height: 630,
          alt: locale === 'es'
            ? 'Limpieza dental en Guadalajara con la Dra. Alondra Robles'
            : 'Dental cleaning in Guadalajara with Dr. Alondra Robles',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/dra-alondra-robles-procedimiento-dental.webp'],
    },
  }
}

function ServiceJsonLd({ locale }: { locale: string }) {
  const isEs = locale === 'es'
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: isEs
      ? 'Limpieza dental profesional con ultrasonido'
      : 'Professional ultrasound dental cleaning',
    description: isEs
      ? 'Limpieza dental profesional que elimina sarro, placa bacteriana y manchas superficiales con tecnología de ultrasonido, cuidando la salud de tus encías y dientes.'
      : 'Professional dental cleaning that removes tartar, plaque and surface stains with ultrasound technology, protecting the health of your gums and teeth.',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Teeth',
    url: `${SITE_URL}${localePath(locale, PATH)}`,
    image: `${SITE_URL}/images/dra-alondra-robles-procedimiento-dental.webp`,
    provider: { '@id': `${SITE_URL}/#dentist` },
    offers: {
      '@type': 'Offer',
      price: '800',
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
  const t = await getTranslations({ locale, namespace: 'cleaning.faq.questions' })
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [0, 1, 2, 3, 4].map((i) => ({
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

export default async function LimpiezaDentalPage({ params }: Props) {
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
        <PricingCards />
        <ServiceFaq />
        <Location bgClassName="bg-gradient-to-br from-[#B8D4E8]/40 via-white to-[#E8D5F2]/40" />
      </main>
      <Footer />
    </>
  )
}
