import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing, localePath } from '@/i18n/routing'
import { Navbar } from '../../sections/Navbar'
import { Footer } from '../../sections/Footer'
import { ServiceHero } from './sections/ServiceHero'
import { ServiceStats } from './sections/ServiceStats'
import { ServiceSymptoms } from './sections/ServiceSymptoms'
import { ServiceBenefits } from './sections/ServiceBenefits'
import { ServiceProcess } from './sections/ServiceProcess'
import { ParallaxSection } from './sections/ParallaxSection'
import { PricingCards } from './sections/PricingCards'
import { ServiceFaq } from './sections/ServiceFaq'
import { FinalCta } from './sections/FinalCta'

const SITE_URL = 'https://draalondrarobles.com'
const PATH = '/servicios/endodoncia'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'endodontics.metadata' })

  const keywords =
    locale === 'es'
      ? [
          'endodoncia guadalajara',
          'tratamiento de conducto guadalajara',
          'endodoncia precio',
          'dolor de muela guadalajara',
          'matar el nervio de una muela',
          'endodoncia en molar',
          'endodoncista guadalajara',
          'dentista guadalajara',
          'dra alondra robles',
        ]
      : [
          'root canal guadalajara',
          'root canal treatment',
          'endodontist guadalajara',
          'toothache guadalajara',
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
          url: '/images/endodoncia-guadalajara-hero.webp',
          width: 1200,
          height: 630,
          alt: locale === 'es'
            ? 'Endodoncia en Guadalajara con la Dra. Alondra Robles'
            : 'Root canal treatment in Guadalajara with Dr. Alondra Robles',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/endodoncia-guadalajara-hero.webp'],
    },
  }
}

function ServiceJsonLd({ locale }: { locale: string }) {
  const isEs = locale === 'es'
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: isEs ? 'Endodoncia (tratamiento de conducto)' : 'Root canal treatment (endodontics)',
    alternateName: isEs ? ['Tratamiento de conducto', 'Endodoncia'] : ['Root canal', 'Endodontic therapy'],
    description: isEs
      ? 'Tratamiento de conducto con anestesia local para eliminar la infección del nervio del diente, quitar el dolor y conservar el diente natural.'
      : 'Root canal treatment under local anesthesia to remove the infected nerve, stop the pain and save the natural tooth.',
    procedureType: 'https://schema.org/TherapeuticProcedure',
    bodyLocation: isEs ? 'Pulpa y conductos radiculares del diente' : 'Tooth pulp and root canals',
    url: `${SITE_URL}${localePath(locale, PATH)}`,
    image: `${SITE_URL}/images/endodoncia-guadalajara-hero.webp`,
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
  const t = await getTranslations({ locale, namespace: 'endodontics.faq.questions' })
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

export default async function EndodonciaPage({ params }: Props) {
  const { locale } = await params
  return (
    <>
      <ServiceJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <Navbar />
      <main className="min-h-screen">
        <ServiceHero />
        <ServiceStats />
        <ServiceSymptoms />
        <ParallaxSection />
        <ServiceBenefits />
        <ServiceProcess />
        <PricingCards />
        <ServiceFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
