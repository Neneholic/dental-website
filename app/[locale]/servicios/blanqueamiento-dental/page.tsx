import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Blanqueamiento Dental Profesional | Dental Smile Clinic',
  description:
    'Transforma tu sonrisa con nuestro blanqueamiento dental profesional. Hasta 4 tonos más claros en una sola sesión. Agenda tu consulta gratuita.',
  keywords: [
    'blanqueamiento dental',
    'blanquear dientes',
    'sonrisa blanca',
    'estética dental',
    'clínica dental',
  ],
  openGraph: {
    title: 'Blanqueamiento Dental Profesional | Dental Smile Clinic',
    description:
      'Transforma tu sonrisa hasta 4 tonos más claros en solo 45 minutos. Tecnología LED de última generación.',
    type: 'website',
  },
};

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
