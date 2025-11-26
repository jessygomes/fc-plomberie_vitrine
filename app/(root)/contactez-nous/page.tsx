/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Contactez-nous | FC Plomberie - Chauffage - Sanitaire | Devis Gratuit",
  description:
    "Contactez FC Plomberie pour vos besoins en plomberie, chauffage, sanitaire. Intervention 24h/24 en région Centre & Île-de-France. Devis gratuit ✓",
  keywords:
    "contact plombier, devis gratuit, urgence plomberie, région centre, île-de-france, orléans, tours, blois, dépannage 24h",
  openGraph: {
    title: "Contactez FC Plomberie | Devis Gratuit & Intervention Rapide",
    description:
      "Besoin d'un plombier-chauffagiste ? Contactez-nous pour un devis gratuit. Intervention rapide en région Centre et Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fc-plomberie.com/contactez-nous",
  },
};

export default function ContactezNousPage() {
  const contactMethods = [
    {
      icon: <FaPhone size={40} />,
      title: "Téléphone",
      info: "06.99.02.40.75",
      description: "Disponible 24h/24, 7j/7 pour les urgences",
      link: "tel:0699024075",
      ariaLabel:
        "Appeler FC Plomberie Chauffage Sanitaire au 06.99.02.40.75 pour prendre rendez-vous",
    },
    {
      icon: <FaEnvelope size={40} />,
      title: "Email",
      info: "fc.plomberie45@gmail.com",
      description: "Réponse sous 24h, devis par email",
      link: "mailto:contact@fc-plomberie.com",
      ariaLabel:
        "Envoyer un email à FC Plomberie Chauffage Sanitaire à l'adresse fc.plomberie45@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "Zone d'intervention",
      info: "Région Centre & Île-de-France",
      description: "Orléans, Blois... & Paris et communes",
    },
    // {
    //   icon: <FaClock size={40} />,
    //   title: "Horaires",
    //   info: "Lundi - Dimanche",
    //   description: "Service d'urgence disponible 24h/24",
    // },
  ];

  const services = [
    "Dépannage plomberie urgence",
    "Installation et entretien chauffage",
    "Rénovation sanitaire complète",
    "Réparation fuites d'eau",
    "Installation chaudière",
    "Débouchage canalisations",
  ];

  return (
    <div className="pt-18">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-linear-to-br from-primary-500 to-second-500 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/10 to-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl">
            <h1 className="font-one text-4xl md:text-5xl font-bold mb-6 tracking-wide drop-shadow-lg">
              Contactez FC Plomberie
            </h1>
            <p className="font-two text-xl md:text-2xl mb-8 opacity-90">
              Votre plombier-chauffagiste en région Centre & Île-de-France
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0699024075"
                aria-label="Appeler FC Plomberie Chauffage Sanitaire au 06.99.02.40.75 pour prendre rendez-vous"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-two font-medium text-lg rounded-lg hover:bg-white/30 transition-all duration-300 shadow-lg"
              >
                <FaPhone />
                06.99.02.40.75
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodes de contact */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
              Comment nous contacter ?
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-linear-to-br from-primary-500 to-second-500 rounded-xl text-white shadow-lg">
                    {method.icon}
                  </div>
                </div>
                <h3 className="font-one text-xl font-bold text-noir-700 mb-3">
                  {method.title}
                </h3>
                {method.link ? (
                  <a
                    href={method.link}
                    aria-label={method.ariaLabel}
                    className="font-two text-lg font-semibold text-primary-500 mb-3 block hover:text-primary-600 transition-colors"
                  >
                    {method.info}
                  </a>
                ) : (
                  <p className="font-two text-lg font-semibold text-primary-500 mb-3">
                    {method.info}
                  </p>
                )}
                <p className="font-two text-noir-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section urgence */}
      <section className="py-16 bg-linear-to-r from-noir-500 to-noir-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="font-one text-3xl md:text-4xl font-bold text-white mb-6">
              Urgence Plomberie 24h/24
            </h3>
            <p className="font-two text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Fuite d'eau, panne de chauffage, canalisation bouchée ? Nous
              intervenons rapidement dans toute la région Centre et
              Île-de-France.
            </p>
            <a
              href="tel:0699024075"
              aria-label="Appeler FC Plomberie Chauffage Sanitaire au 06.99.02.40.75 pour prendre rendez-vous"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-primary-500 to-second-500 text-white font-two font-bold text-xl rounded-lg hover:from-primary-600 hover:to-second-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaPhone />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Services et avantages */}
      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-8">
                Nos services à votre disposition
              </h4>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary-500 shrink-0" />
                    <span className="font-two text-noir-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-md p-8 shadow-xl border border-gray-100">
              <h5 className="font-one text-2xl font-bold text-noir-700 mb-6 text-center">
                Pourquoi nous faire confiance ?
              </h5>
              <div className="space-y-4">
                {[
                  "Plus de 30 ans d'expérience",
                  "Intervention rapide garantie",
                  "Devis gratuit et transparent",
                  "Matériaux de qualité professionnelle",
                  "Garantie sur tous nos travaux",
                ].map((avantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="font-two text-noir-500">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention détaillée */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
              Nos zones d'intervention
            </h3>
            <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-primary-400 to-primary-500 rounded-2xl p-8">
              <h4 className="font-one text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt /> Région Centre-Val de Loire
              </h4>
              <div className="grid grid-cols-2 gap-3 text-noir-600 font-two">
                <span>• Orléans</span>
                <span>• Blois</span>
                <span>• Chartres</span>
                <span>• Bourges</span>
                <span>• Châteauroux</span>
                <span>• Dreux</span>
                <span>• Montargis</span>
                <span>• et plus</span>
              </div>
            </div>

            <div className="bg-linear-to-br from-second-500 to-second-400 rounded-2xl p-8">
              <h4 className="font-one text-2xl font-bold text-second-600 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt /> Île-de-France
              </h4>
              <div className="grid grid-cols-2 gap-3 text-noir-600 font-two">
                <span>• Paris</span>
                <span>• Boulogne-Billancourt</span>
                <span>• Argenteuil</span>
                <span>• Montreuil</span>
                <span>• Créteil</span>
                <span>• Nanterre</span>
                <span>• Courbevoie</span>
                <span>• et plus</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="font-two text-noir-700 text-lg">
              Votre commune n'apparaît pas ? Contactez-nous, nous étudions
              toutes les demandes !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
