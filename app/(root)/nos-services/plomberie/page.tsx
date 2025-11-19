/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FaWrench,
  FaTools,
  FaTint,
  FaCog,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import Btn from "@/components/Shared/Btn";
import DevisSection from "@/components/Shared/DevisSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Plombier Région Centre & Île-de-France | FC Plomberie - Chauffage - Sanitaire",
  description:
    "Plombier professionnel en région Centre et Île-de-France. Réparation fuites d'eau, débouchage, installation chauffe-eau. Intervention 24h/24. Devis gratuit ✓",
  keywords:
    "plombier, région centre, île-de-france, orléans, tours, blois, réparation fuite eau, débouchage canalisation, installation chauffe-eau, urgence plomberie, orléans, eure-et-loir, chartres, bourges, châteauroux, Cher, Loire-et-Cher, Loiret, Eure, Essonne, Yvelines, Hauts-de-Seine, Val-de-Marne, Val-d'Oise, Seine-et-Marne, Paris Centre",
  openGraph: {
    title: "Plombier Expert | FC Plomberie - Région Centre & Île-de-France",
    description:
      "Plombier professionnel : réparation, installation, dépannage 24h/24. Devis gratuit en région Centre et Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fc-plomberie.com/nos-services/plomberie",
  },
};

export default function ServicePlomberiePage() {
  const services = [
    {
      icon: <FaTint size={40} />,
      title: "Réparation de fuites d'eau",
      description:
        "Détection précise et réparation durable de toutes fuites d'eau : robinets, canalisations, joints défaillants. Intervention rapide pour éviter les dégâts des eaux dans votre habitation.",
      img: "/images/plomberie-3.jpg",
    },
    {
      icon: <FaTools size={40} />,
      title: "Remplacement de robinetterie et joints",
      description:
        "Installation et remplacement de robinetterie moderne, éviers, lavabos et tous équipements sanitaires. Changement de joints d'étanchéité pour une plomberie performante.",
      img: "/images/plomberie-2.jpg",
    },
    {
      icon: <FaCog size={40} />,
      title: "Débouchage de canalisations",
      description:
        "Débouchage professionnel de canalisations bouchées : évier, lavabo, WC, évacuations. Utilisation d'équipements spécialisés pour un résultat efficace et durable.",
      img: "/images/plomberie-4.jpg",
    },
    {
      icon: <FaWrench size={40} />,
      title:
        "Installation de chauffe-eau, ballons d’eau chaude et adoucisseurs",
      description:
        "Installation complète et entretien de chauffe-eau électriques, gaz, ballons d'eau chaude et systèmes d'adoucissement d'eau. Conseils personnalisés selon vos besoins.",
      img: "/images/plomberie-5.jpg",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Diagnostic",
      description: "Évaluation complète de vos besoins",
    },
    {
      step: "2",
      title: "Devis",
      description: "Proposition détaillée et transparente",
    },
    {
      step: "3",
      title: "Intervention",
      description: "Travaux réalisés par nos experts",
    },
    {
      step: "4",
      title: "Garantie",
      description: "Suivi et garantie de nos prestations",
    },
  ];

  return (
    <div className="pt-18">
      {/* Hero Section avec balises H1 SEO */}
      <section className="relative h-[65vh] bg-linear-to-br from-primary-500 to-primary-400 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/plomberie.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="font-one text-4xl md:text-5xl font-bold mb-6 tracking-wide drop-shadow-2xl text-shadow-lg">
              Plombier Professionnel Région Centre & Île-de-France
            </h1>
            <p className="font-two text-xl md:text-2xl mb-8 drop-shadow-lg text-shadow font-medium">
              Installation, réparation et maintenance plomberie
            </p>
            <Btn href="/contactez-nous">DEMANDEZ VOTRE DEVIS</Btn>
          </div>
        </div>
      </section>

      {/* Services avec structure H2 SEO */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
              Services de Plomberie Professionnels
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
            <p className="font-two text-lg text-noir-700 max-w-3xl mx-auto mt-4">
              FC Plomberie intervient rapidement pour tous vos besoins en
              plomberie : réparation de fuites, débouchage de canalisations,
              installation de chauffe-eau dans toute la région Centre-Val de
              Loire et Île-de-France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-md shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-1"
              >
                {/* Header avec icône */}
                <div className="relative bg-linear-to-r from-primary-500 to-primary-400 p-6 text-center h-32 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-100"
                    style={{
                      backgroundImage: `url('${service.img}')`,
                    }}
                  />
                  <div className="relative z-10 flex justify-center items-center h-full">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <h3 className="font-one text-xl font-bold text-noir-700 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-two text-noir-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Indicateur hover */}
                  <div className="mt-6 flex justify-center">
                    <div className="w-8 h-px bg-linear-to-r from-primary-500 to-primary-400 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section avec contenu SEO enrichi */}
      <section className="max-w-7xl mx-auto rounded-md relative overflow-hidden bg-linear-to-r from-noir-500 to-noir-700">
        <div className="relative z-10 py-10 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="w-16 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full mb-6"></div>
            </div>
            <h3 className="font-one text-2xl md:text-3xl font-bold text-white mb-6">
              Votre Plombier de Confiance en Région Centre et Île-de-France
            </h3>
            <p className="text-white text-lg md:text-base font-two leading-relaxed tracking-wide">
              Depuis 2024, FC Plomberie est votre plombier de référence dans
              toute la région Centre-Val de Loire (Orléans, Blois, Chartres,
              Bourges, Châteauroux...) et en Île-de-France. Spécialisés en
              installation, réparation et maintenance de systèmes de plomberie,
              nous intervenons 24h/24 pour les urgences plomberie. Artisan
              plombier qualifié, nous garantissons des interventions soignées,
              durables et aux normes pour particuliers et professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Processus avec H3 SEO */}
      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
              Comment se déroule notre intervention plomberie ?
            </h3>
            <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-primary-500 to-primary-400 rounded-full flex items-center justify-center text-white font-one text-2xl font-bold shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="font-one text-xl font-bold text-noir-700 mb-3">
                  {process.title}
                </h3>
                <p className="font-two text-noir-700">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section avantages avec contenu SEO */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-6">
                Pourquoi choisir FC Plomberie pour vos travaux ?
              </h4>
              <div className="space-y-4">
                {[
                  "Intervention rapide 24h/24, 7j/7",
                  "Devis gratuit et sans engagement",
                  "Matériaux de qualité professionnelle",
                  "Garantie sur tous nos travaux",
                  "Tarifs transparents et compétitifs",
                ].map((avantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary-500 shrink-0" />
                    <span className="font-two text-noir-700">{avantage}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="tel:0699024075"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-primary-500 to-second-500 text-white font-two font-medium rounded-lg hover:from-primary-600 hover:to-second-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaPhone />
                  06.99.02.40.75
                </a>
              </div>
            </div>

            <div className="bg-linear-to-br from-primary-100 to-second-100 rounded-md p-8 border border-primary-200/50">
              <h5 className="font-one text-2xl font-bold text-noir-700 mb-6 text-center">
                Urgence Plomberie 24h/24
              </h5>
              <div className="text-center space-y-4">
                <p className="font-two text-noir-700">
                  Fuite d'eau, canalisation bouchée, panne de chauffe-eau ?
                </p>
                <p className="font-two font-semibold text-primary-500 text-lg">
                  Nous intervenons rapidement !
                </p>

                {/* Zone d'intervention */}
                <div className="bg-white/50 rounded-lg p-4 mt-4">
                  <h4 className="font-one font-bold text-noir-700 mb-2 flex items-center justify-center gap-2">
                    🗺️ Zone d'intervention :
                  </h4>
                  <p className="font-two text-noir-700 text-sm mb-3">
                    Nous intervenons dans toute la région Centre, notamment à
                    Orléans, Blois, Chartres, Bourges et Châteauroux et toute
                    l'ile-de-france.
                  </p>
                  <p className="font-two text-primary-500 text-sm font-medium">
                    Besoin d'un plombier en urgence ? Contactez-nous — nous vous
                    rappelons même si vous laissez un message sur le répondeur.
                  </p>
                </div>

                <Btn href="/contactez-nous">APPELER MAINTENANT</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section pour SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-12 text-center">
            Questions fréquentes - Plomberie
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-md p-6 shadow-lg">
              <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                Combien coûte une intervention plomberie ?
              </h4>
              <p className="font-two text-noir-500">
                Le tarif dépend du type d'intervention. Nous proposons un devis
                gratuit et sans engagement. Nos tarifs sont transparents et
                compétitifs en région Centre et Île-de-France.
              </p>
            </div>
            <div className="bg-white rounded-md p-6 shadow-lg">
              <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                Intervenez-vous en urgence plomberie ?
              </h4>
              <p className="font-two text-noir-500">
                Oui, nous intervenons 24h/24 et 7j/7 pour les urgences plomberie
                : fuites d'eau, canalisations bouchées, pannes de chauffe-eau
                dans toute la région.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section lien vers chauffage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-6">
            Besoin d'un chauffagiste ?
          </h3>
          <p className="font-two text-xl text-noir-700 mb-8 max-w-3xl mx-auto">
            Découvrez également nos services de chauffage : installation de
            chaudières, entretien annuel, dépannage d'urgence et plus encore.
          </p>
          <Btn href="/nos-services/chauffage">VOIR NOS SERVICES CHAUFFAGE</Btn>
        </div>
      </section>

      {/* Section Devis */}
      <DevisSection />
    </div>
  );
}
