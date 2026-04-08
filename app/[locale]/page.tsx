import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Works } from "./sections/Works";
import { Consultation } from "./sections/Consultation";
import { Testimonials } from "./sections/Testimonials";
import { Location } from "./sections/Location";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Consultation />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
