import HeroSection from "@/components/Home/HeroSection";
import XpSection from "@/components/Home/XpSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SavoirSection from "@/components/Home/SavoirSection";
import AvisSection from "@/components/Home/AvisSection";
import DevisSection from "@/components/Shared/DevisSection";
import LocalisationSection from "@/components/Home/LocalisationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FC Plomberie - Chauffage - Sanitaire | Artisan Région Centre & Île-de-France",
  description:
    "Artisan plombier-chauffagiste en région Centre et Île-de-France. Plomberie, chauffage, sanitaire. Intervention 24h/24, devis gratuit ✓ +30 ans d'expérience",
  keywords:
    "plombier, chauffagiste, sanitaire, région centre, île-de-france, orléans, tours, blois, artisan, dépannage, installation, réparation",
  openGraph: {
    title: "FC Plomberie - Chauffage - Sanitaire | Votre artisan de confiance",
    description:
      "Artisan plombier-chauffagiste : plomberie, chauffage, sanitaire. Intervention rapide en région Centre et Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fc-plomberie.com",
  },
};

export default function Home() {
  return (
    <div>
      <div className="">
        <HeroSection />
      </div>

      <div>
        <ServicesSection />
      </div>

      <div>
        <XpSection />
      </div>

      <div>
        <SavoirSection />
      </div>

      <div>
        <AvisSection />
      </div>

      <div>
        <DevisSection />
      </div>

      <div>
        <LocalisationSection />
      </div>
    </div>
  );
}
