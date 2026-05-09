import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Navbar } from '../sections/Navbar'
import { Footer } from '../sections/Footer'
import { PrivacyContent } from './PrivacyContent'

const SITE_URL = 'https://draalondrarobles.com'
const PATH = '/aviso-de-privacidad'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEs = locale === 'es'

  const title = isEs ? 'Aviso de Privacidad' : 'Privacy Notice'
  const description = isEs
    ? 'Aviso de Privacidad de la Dra. Alondra Robles conforme a la LFPDPPP. Información sobre el tratamiento de datos personales y derechos ARCO.'
    : 'Privacy Notice of Dr. Alondra Robles in compliance with Mexican data protection law (LFPDPPP).'

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}${PATH}`]),
  )

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${PATH}`,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: isEs ? 'es_MX' : 'en_US',
      url: `${SITE_URL}/${locale}${PATH}`,
      title,
      description,
      siteName: 'Dra. Alondra Robles',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function AvisoDePrivacidadPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDF8F3] pt-32 pb-24">
        <PrivacyContent locale={locale} />
      </main>
      <Footer />
    </>
  )
}
