/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FaFire,
  FaCogs,
  FaThermometerHalf,
  FaWrench,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import Btn from "@/components/Shared/Btn";
import DevisSection from "@/components/Shared/DevisSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chauffagiste Région Centre & Île-de-France | FC Plomberie - Chauffage - Sanitaire",
  description:
    "Chauffagiste professionnel en région Centre et Île-de-France. Installation chaudière, entretien, dépannage 24h/24. Devis gratuit ✓ Intervention rapide",
  keywords:
    "chauffagiste, région centre, île-de-france, orléans, tours, blois, installation chaudière, entretien chauffage, dépannage urgence, radiateurs, plancher chauffant, orléans, eure-et-loir, chartres, bourges, châteauroux, Cher, Loire-et-Cher, Loiret, Eure, Essonne, Yvelines, Hauts-de-Seine, Val-de-Marne, Val-d'Oise, Seine-et-Marne, Paris Centre",
  openGraph: {
    title: "Chauffagiste Expert | FC Plomberie - Région Centre & Île-de-France",
    description:
      "Chauffagiste professionnel : installation, entretien, dépannage 24h/24. Devis gratuit en région Centre et Île-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fc-plomberie.com/nos-services/chauffage",
  },
};

export default function ServiceChauffagePage() {
  const services = [
    {
      icon: <FaFire size={40} />,
      title: "Installation de chaudières gaz et électriques",
      description:
        "Installation complète de chaudières haute performance, gaz naturel, propane ou électriques. Conseil personnalisé pour choisir l'équipement adapté à vos besoins et votre budget.",
      img: "/images/chauffage-2.jpg",
    },
    {
      icon: <FaCogs size={40} />,
      title: "Entretien et maintenance de systèmes de chauffage",
      description:
        "Entretien annuel obligatoire, nettoyage, réglage et optimisation de vos équipements. Maintenance préventive pour prolonger la durée de vie de vos installations de chauffage.",
      img: "/images/chauffage-3.jpg",
    },
    {
      icon: <FaThermometerHalf size={40} />,
      title: "Installation de radiateurs et planchers chauffants",
      description:
        "Pose de radiateurs haute efficacité, installation de planchers chauffants hydrauliques. Solutions de chauffage modernes et économiques pour votre confort optimal.",
      img: "/images/chauffage-4.jpg",
    },
    {
      icon: <FaWrench size={40} />,
      title: "Dépannage et réparation d'urgence",
      description:
        "Intervention rapide 24h/24 pour panne de chauffage, chaudière en panne, radiateurs défaillants. Diagnostic professionnel et réparation durable de tous dysfonctionnements.",
      img: "/images/chauffage-5.jpg",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Diagnostic",
      description: "Évaluation complète de vos installations",
    },
    {
      step: "2",
      title: "Devis",
      description: "Proposition détaillée et transparente",
    },
    {
      step: "3",
      title: "Installation",
      description: "Travaux réalisés par nos experts",
    },
    {
      step: "4",
      title: "Suivi",
      description: "Maintenance et garantie de nos prestations",
    },
  ];

  return (
    <div className="pt-18">
      {/* Hero Section avec balises H1 SEO */}
      <section className="relative h-[65vh] bg-linear-to-br from-second-500 to-second-400 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/chauffage.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="font-one text-4xl md:text-5xl font-bold mb-6 tracking-wide drop-shadow-2xl text-shadow-lg">
              Chauffagiste Professionnel Région Centre & Île-de-France
            </h1>
            <p className="font-two text-xl md:text-2xl mb-8 drop-shadow-lg text-shadow font-medium">
              Installation chaudière, entretien et dépannage chauffage
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
              Services de Chauffage Professionnels
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-second-500 to-second-400 mx-auto rounded-full"></div>
            <p className="font-two text-lg text-noir-700 max-w-3xl mx-auto mt-4">
              FC Plomberie - Chauffage - Sanitaire intervient rapidement pour
              tous vos besoins en chauffage : installation de chaudières,
              entretien annuel obligatoire, dépannage d'urgence dans toute la
              région Centre-Val de Loire et Île-de-France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-md shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-1"
              >
                {/* Header avec icône */}
                <div className="relative bg-linear-to-r from-second-500 to-second-400 p-6 text-center h-32 overflow-hidden">
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
                    <div className="w-8 h-px bg-linear-to-r from-second-500 to-second-400 group-hover:w-16 transition-all duration-300"></div>
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
              <div className="w-16 h-1 bg-linear-to-r from-second-500 to-primary-500 mx-auto rounded-full mb-6"></div>
            </div>
            <h3 className="font-one text-2xl md:text-3xl font-bold text-white mb-6">
              Votre Chauffagiste de Confiance en Région Centre et Île-de-France
            </h3>
            <p className="text-white text-lg md:text-base font-two leading-relaxed tracking-wide">
              Depuis 2024, FC Plomberie est votre chauffagiste de référence dans
              toute la région Centre-Val de Loire (Orléans, Tours, Blois,
              Chartres, Bourges, Châteauroux...) et en Île-de-France.
              Spécialisés en installation, entretien et dépannage de systèmes de
              chauffage, nous intervenons 24h/24 pour les urgences chauffage.
              Artisan chauffagiste qualifié, nous garantissons des installations
              performantes, un entretien certifié et des dépannages rapides pour
              particuliers et professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Processus avec H3 SEO */}
      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
              Comment se déroule notre intervention chauffage ?
            </h3>
            <div className="w-24 h-1 bg-linear-to-r from-second-500 to-second-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-second-500 to-second-400 rounded-full flex items-center justify-center text-white font-one text-2xl font-bold shadow-lg">
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
                Pourquoi choisir FC Plomberie pour vos installations chauffage ?
              </h4>
              <div className="space-y-4">
                {(
                  [
                    "Entretien annuel obligatoire certifié",
                    "Intervention d'urgence 24h/24, 7j/7",
                    "Devis gratuit et sans engagement",
                    "Équipements haute performance",
                    "Garantie constructeur et main d'œuvre",
                  ] as const
                ).map((avantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-second-500 shrink-0" />
                    <span className="font-two text-noir-700">{avantage}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="tel:0699024075"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-second-500 to-primary-500 text-white font-two font-medium rounded-lg hover:from-second-600 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaPhone />
                  06.99.02.40.75
                </a>
              </div>
            </div>

            <div className="bg-linear-to-br from-second-100 to-primary-100 rounded-md p-8 border border-second-200/50">
              <h5 className="font-one text-2xl font-bold text-noir-700 mb-6 text-center">
                Panne de Chauffage Urgence 24h/24
              </h5>
              <div className="text-center space-y-4">
                <p className="font-two text-noir-700">
                  Chaudière en panne, radiateurs froids, problème de régulation
                  ?
                </p>
                <p className="font-two font-semibold text-second-500 text-lg">
                  Nous intervenons en urgence !
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
                  <p className="font-two text-second-500 text-sm font-medium">
                    Besoin d'un chauffagiste en urgence ? Contactez-nous — nous
                    vous rappelons même si vous laissez un message sur le
                    répondeur.
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
            Questions fréquentes - Chauffage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                Quand faire l'entretien de ma chaudière ?
              </h4>
              <p className="font-two text-noir-500">
                L'entretien annuel de chaudière est obligatoire. Nous
                intervenons rapidement en région Centre et Île-de-France avec un
                certificat de conformité.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                Combien coûte l'installation d'une chaudière ?
              </h4>
              <p className="font-two text-noir-500">
                Le prix varie selon le type de chaudière (gaz, électrique,
                condensation). Nous proposons un devis gratuit personnalisé
                selon votre logement.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                Intervenez-vous pour les pannes de chauffage ?
              </h4>
              <p className="font-two text-noir-500">
                Oui, nous intervenons 24h/24 pour les urgences chauffage :
                chaudière en panne, radiateurs froids, problèmes de régulation
                dans toute la région.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-one text-xl font-bold text-noir-700 mb-3">
                Proposez-vous des planchers chauffants ?
              </h4>
              <p className="font-two text-noir-500">
                Nous installons des planchers chauffants hydrauliques et
                électriques. Solution économique et confortable pour votre
                habitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section lien vers sanitaire */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-6">
            Besoin d'un spécialiste sanitaire ?
          </h3>
          <p className="font-two text-xl text-noir-700 mb-8 max-w-3xl mx-auto">
            Découvrez également nos services sanitaires : installation WC,
            douches à l'italienne, rénovation salle de bains et aménagements
            complets.
          </p>
          <Btn href="/nos-services/sanitaire">VOIR NOS SERVICES SANITAIRE</Btn>
        </div>
      </section>

      {/* Section Devis */}
      <DevisSection />
    </div>
  );
}
