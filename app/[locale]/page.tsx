import { AppleNavbar } from "./sections/apple/AppleNavbar";
import { AppleHero } from "./sections/apple/AppleHero";
import { AppleAbout } from "./sections/apple/AppleAbout";
import { AppleServices } from "./sections/apple/AppleServices";
import { AppleResults } from "./sections/apple/AppleResults";
import { AppleConsultation } from "./sections/apple/AppleConsultation";
import { AppleTestimonials } from "./sections/apple/AppleTestimonials";
import { AppleLocation } from "./sections/apple/AppleLocation";
import { AppleFooter } from "./sections/apple/AppleFooter";

// Inicio con el sistema de diseño estilo Apple: tiles a todo lo ancho que alternan
// blanco, gris claro y negro; un solo acento azul; tipografía SF Pro / Inter.
export default function Home() {
  return (
    <main className="relative bg-white font-apple text-[17px] leading-[1.47] tracking-[-0.022em] text-ink antialiased">
      <AppleNavbar />
      <AppleHero />
      <AppleAbout />
      <AppleServices />
      <AppleResults />
      <AppleConsultation />
      <AppleTestimonials />
      <AppleLocation />
      <AppleFooter />
    </main>
  );
}
