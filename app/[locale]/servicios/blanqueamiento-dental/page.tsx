import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
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
const PATH = '/servicios/blanqueamiento-dental'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'whitening.metadata' })

  const keywords =
    locale === 'es'
      ? [
          'blanqueamiento dental guadalajara',
          'blanqueamiento dental profesional',
          'blanquear dientes guadalajara',
          'sonrisa blanca',
          'blanqueamiento led',
          'estética dental guadalajara',
          'precio blanqueamiento dental',
          'dra alondra robles',
        ]
      : [
          'teeth whitening guadalajara',
          'professional teeth whitening',
          'led teeth whitening',
          'white smile',
          'cosmetic dentistry guadalajara',
          'dr alondra robles',
        ]

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${PATH}`]),
  )

  return {
    title: t('title'),
    description: t('description'),
    keywords,
    alternates: {
      canonical: `/${locale}${PATH}`,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_MX',
      url: `${SITE_URL}/${locale}${PATH}`,
      title: t('title'),
      description: t('description'),
      siteName: 'Dra. Alondra Robles',
      images: [
        {
          url: '/images/dra-alondra-robles-dentista-guadalajara.webp',
          width: 1200,
          height: 630,
          alt: locale === 'es'
            ? 'Blanqueamiento dental profesional con la Dra. Alondra Robles'
            : 'Professional teeth whitening with Dr. Alondra Robles',
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
      ? 'Blanqueamiento dental profesional con luz LED'
      : 'Professional LED teeth whitening',
    description: isEs
      ? 'Blanqueamiento dental profesional con tecnología LED. Hasta 4 tonos más claros en una sola sesión de 45 minutos.'
      : 'Professional LED teeth whitening. Up to 4 shades lighter in a single 45-minute session.',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: 'Teeth',
    url: `${SITE_URL}/${locale}/servicios/blanqueamiento-dental`,
    image: `${SITE_URL}/images/dra-alondra-robles-dentista-guadalajara.webp`,
    provider: { '@id': `${SITE_URL}/#dentist` },
    offers: {
      '@type': 'Offer',
      price: '2200',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/${locale}/servicios/blanqueamiento-dental`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default async function BlanqueamientoDentalPage({ params }: Props) {
  const { locale } = await params
  return (
    <>
      <ServiceJsonLd locale={locale} />
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
