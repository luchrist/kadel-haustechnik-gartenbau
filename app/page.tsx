import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Leistungen } from "@/components/Leistungen";
import { Arbeitsweise } from "@/components/Arbeitsweise";
import { Faq } from "@/components/Faq";
import { Einsatzgebiet } from "@/components/Einsatzgebiet";
import { Reviews } from "@/components/Reviews";
import { Referenzen } from "@/components/Referenzen";
import { Galerie } from "@/components/Galerie";
import { RecruitingTeaser } from "@/components/RecruitingTeaser";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Footer } from "@/components/Footer";

// Reviews, Referenzen, Galerie und Recruiting rendern nur mit echten Daten
// (Google-Rezensionen, eigene Projektfotos, aktive Stellen) und blenden sich
// sonst selbst aus.
export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <Leistungen />
      <Arbeitsweise />
      <Faq />
      <Einsatzgebiet />
      <Reviews />
      <Referenzen />
      <Galerie />
      <RecruitingTeaser />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
