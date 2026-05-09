import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import '../globals.css'

const SITE_URL = 'https://draalondrarobles.com'
const GA_ID = 'G-4NELPWY2MJ'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  const keywords =
    locale === 'es'
      ? [
          'dentista guadalajara',
          'clínica dental guadalajara',
          'odontóloga guadalajara',
          'estética dental guadalajara',
          'blanqueamiento dental guadalajara',
          'implantes dentales guadalajara',
          'ortodoncia guadalajara',
          'endodoncia guadalajara',
          'dra alondra robles',
          'dentista ladrón de guevara',
        ]
      : [
          'dentist guadalajara',
          'dental clinic guadalajara',
          'cosmetic dentistry guadalajara',
          'teeth whitening guadalajara',
          'dental implants guadalajara',
          'orthodontics guadalajara',
          'dr alondra robles',
        ]

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}`]),
  )

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: `%s | Dra. Alondra Robles`,
    },
    description: t('description'),
    keywords,
    authors: [{ name: 'Dra. Alondra Robles' }],
    creator: 'Dra. Alondra Robles',
    publisher: 'Dra. Alondra Robles',
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_MX',
      url: `${SITE_URL}/${locale}`,
      title: t('title'),
      description: t('description'),
      siteName: 'Dra. Alondra Robles',
      images: [
        {
          url: '/images/dra-alondra-robles-dentista-guadalajara.webp',
          width: 1200,
          height: 630,
          alt: locale === 'es'
            ? 'Dra. Alondra Robles - Cirujano Dentista en Guadalajara'
            : 'Dr. Alondra Robles - Dentist in Guadalajara',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/dra-alondra-robles-dentista-guadalajara.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  }
}

function DentistJsonLd({ locale }: { locale: string }) {
  const isEs = locale === 'es'
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${SITE_URL}/#dentist`,
    name: isEs
      ? 'Dra. Alondra Robles - Clínica Dental'
      : 'Dr. Alondra Robles - Dental Clinic',
    description: isEs
      ? 'Clínica dental privada de la Dra. Alondra Robles en Guadalajara. Odontología estética, blanqueamiento dental, implantes y ortodoncia.'
      : 'Private dental clinic of Dr. Alondra Robles in Guadalajara. Cosmetic dentistry, teeth whitening, implants and orthodontics.',
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/images/dra-alondra-robles-dentista-guadalajara.webp`,
    logo: `${SITE_URL}/images/dra-alondra-robles-dentista-guadalajara.webp`,
    telephone: '+523310678412',
    email: 'contacto@dralondrarobles.mx',
    priceRange: '$$',
    currenciesAccepted: 'MXN',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C. Pablo Villaseñor 377',
      addressLocality: 'Guadalajara',
      addressRegion: 'Jalisco',
      postalCode: '44600',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.6830236,
      longitude: -103.3800708,
    },
    hasMap:
      'https://www.google.com/maps/dir//Dr.+Alondra+Robles,+Dentist/@20.6830236,-103.3800708,17z',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    medicalSpecialty: ['CosmeticDentistry', 'GeneralDental'],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: isEs ? 'Blanqueamiento dental profesional' : 'Professional teeth whitening',
        url: `${SITE_URL}/${locale}/servicios/blanqueamiento-dental`,
      },
      { '@type': 'MedicalProcedure', name: isEs ? 'Estética dental' : 'Cosmetic dentistry' },
      { '@type': 'MedicalProcedure', name: isEs ? 'Endodoncia' : 'Endodontics' },
      { '@type': 'MedicalProcedure', name: isEs ? 'Implantes dentales' : 'Dental implants' },
      { '@type': 'MedicalProcedure', name: isEs ? 'Ortodoncia' : 'Orthodontics' },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Guadalajara',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function WebsiteJsonLd({ locale }: { locale: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: 'Dra. Alondra Robles',
    inLanguage: locale === 'es' ? 'es-MX' : 'en-US',
    publisher: { '@id': `${SITE_URL}/#dentist` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale === 'es' ? 'es-MX' : 'en-US'} className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <DentistJsonLd locale={locale} />
        <WebsiteJsonLd locale={locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
