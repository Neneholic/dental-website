import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '../../sections/Navbar';
import { Footer } from '../../sections/Footer';
import { ServiceHero } from './sections/ServiceHero';
import { ServiceStats } from './sections/ServiceStats';
import { ServiceBenefits } from './sections/ServiceBenefits';
import { ServiceProcess } from './sections/ServiceProcess';
import { BeforeAfterGallery } from './sections/BeforeAfterGallery';
import { PricingCards } from './sections/PricingCards';
import { ServiceFaq } from './sections/ServiceFaq';
import { FinalCta } from './sections/FinalCta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'whitening.metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'blanqueamiento dental',
      'blanquear dientes',
      'sonrisa blanca',
      'estética dental',
      'consulta dental',
      'dra alondra robles',
      'teeth whitening',
      'white smile',
      'cosmetic dentistry',
      'dental practice',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
  };
}

export default function BlanqueamientoDentalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ServiceHero />
        <ServiceStats />
        <ServiceBenefits />
        <ServiceProcess />
        <BeforeAfterGallery />
        <PricingCards />
        <ServiceFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
