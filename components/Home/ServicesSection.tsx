/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Btn from "../Shared/Btn";

export default function ServicesSection() {
  const services = [
    {
      title: "PLOMBERIE",
      subtitle:
        "Installation, réparation et maintenance de vos systèmes de plomberie. Intervention rapide pour fuites, canalisations bouchées et tous travaux de plomberie générale.",
      backgroundImage: "/images/plomberie.jpg", // You'll need to add these images
      gradient: "from-primary-600/80 to-primary-800/90",
      link: "/nos-services/plomberie",
    },
    {
      title: "CHAUFFAGE",
      subtitle:
        "Entretien et installation de systèmes de chauffage. Chaudières, radiateurs, planchers chauffants. Dépannage d'urgence et maintenance préventive.",
      backgroundImage: "/images/chauffage.jpg",
      gradient: "from-second-600/80 to-second-800/90",
      link: "/nos-services/chauffage",
    },
    {
      title: "SANITAIRE",
      subtitle:
        "Aménagement et rénovation de salles de bains. Installation de sanitaires, douches, baignoires. Travaux clé en main pour votre confort quotidien.",
      backgroundImage: "/images/sanitaire.jpg",
      gradient: "from-noir-600/80 to-noir-800/90",
      link: "/nos-services/sanitaire",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full mb-6"></div>
          <p className="font-two text-lg text-noir-700 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins en plomberie,
            chauffage et sanitaire
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-md overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${service.backgroundImage}')`,
                  }}
                />
                {/* Light gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-t ${service.gradient} opacity-60`}
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="font-one text-2xl font-bold text-noir-700 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="font-two text-noir-700 text-center mb-6 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Button */}
                <div className="text-center">
                  <Btn href={service.link}>EN SAVOIR PLUS</Btn>
                </div>
              </div>

              {/* Decorative bottom border */}
              <div className="h-1 bg-linear-to-r from-primary-500 to-second-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="mb-8">
            <p className="font-two text-lg text-noir-600 mb-6">
              Besoin d'une intervention ou d'un devis personnalisé ?
            </p>
            <Btn href="/contactez-nous">CONTACTEZ-NOUS</Btn>
          </div>
        </div> */}
      </div>
    </section>
  );
}
