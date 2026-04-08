import { useTranslations } from 'next-intl';
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Works } from "./sections/Works";
import { Consultation } from "./sections/Consultation";
import { Testimonials } from "./sections/Testimonials";
import { Blog } from "./sections/Blog";
import { Footer } from "./sections/Footer";

export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Consultation />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
