import HeroSection from "@/components/Home/HeroSection";
import XpSection from "@/components/Home/XpSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SavoirSection from "@/components/Home/SavoirSection";
import AvisSection from "@/components/Home/AvisSection";
import DevisSection from "@/components/Shared/DevisSection";
import LocalisationSection from "@/components/Home/LocalisationSection";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "FC Plomberie - Chauffage - Sanitaire | Artisan Région Centre & Île-de-France",
  description:
    "Artisan plombier-chauffagiste en région Centre et Île-de-France. Plomberie, chauffage, sanitaire. Intervention 24h/24, devis gratuit ✓ +30 ans d'expérience",
  keywords:
    "plombier, chauffagiste, sanitaire, région centre, île-de-france, orléans, tours, blois, artisan, dépannage, installation, réparation, urgence plomberie, entretien chaudière, rénovation salle de bains, débouchage canalisation, fuite eau",
  openGraph: {
    title: "FC Plomberie - Chauffage - Sanitaire | Votre artisan de confiance",
    description:
      "Artisan plombier-chauffagiste : plomberie, chauffage, sanitaire. Intervention rapide en région Centre et Île-de-France.",
    type: "website",
    locale: "fr_FR",
    siteName: "FC Plomberie",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FC Plomberie - Chauffage - Sanitaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC Plomberie - Chauffage - Sanitaire",
    description:
      "Artisan plombier-chauffagiste en région Centre et Île-de-France",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://artisanat-fcplomberie.fr",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function Home() {
  return (
    <>
      {/* Données structurées JSON-LD */}
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://artisanat-fcplomberie.fr",
            name: "FC Plomberie - Chauffage - Sanitaire",
            description:
              "Artisan plombier-chauffagiste en région Centre et Île-de-France",
            url: "https://artisanat-fcplomberie.fr",
            telephone: "06.99.02.40.75",
            email: "fc.plomberie45@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Centre-Val de Loire",
              addressCountry: "FR",
            },
            areaServed: [
              {
                "@type": "Place",
                name: "Région Centre-Val de Loire",
              },
              {
                "@type": "Place",
                name: "Île-de-France",
              },
            ],
            serviceType: ["Plomberie", "Chauffage", "Sanitaire"],
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: [],
          }),
        }}
      />

      <div>
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
    </>
  );
}
