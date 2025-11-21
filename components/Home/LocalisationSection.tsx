/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocalisationSection() {
  const regions = [
    {
      title: "EN RÉGION CENTRE",
      locations: ["Loiret", "Loire-et-Cher", "L'Eure-et-Loir", "Cher", "Indre"],
      gradient: "from-primary-400 to-primary-500",
    },
    {
      title: "EN RÉGION PARISIENNE",
      locations: [
        "Paris Centre",
        "Seine-et-Marne",
        "Yvelines",
        "Essonne",
        "Val-de-Marne",
        "Hauts-de-Seine",
        "Val-d'Oise",
      ],
      gradient: "from-second-400 to-second-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4 tracking-wide">
            À VOTRE DISPOSITION :
          </h2>
          <div className="w-32 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full mb-6"></div>
          <p className="font-two text-lg text-noir-700 max-w-2xl mx-auto">
            Nous intervenons dans toute la région Centre et parisienne pour tous
            vos besoins en plomberie, chauffage et sanitaire
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-md p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient effect */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${region.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Header */}
              <div className="relative z-10 text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 bg-linear-to-br ${region.gradient} rounded-xl shadow-lg`}
                  >
                    <FaMapMarkerAlt size={30} className="text-white" />
                  </div>
                </div>
                <h3 className="font-one text-xl md:text-2xl font-bold text-noir-700 tracking-wider">
                  {region.title}
                </h3>
              </div>

              {/* Locations List */}
              <div className="relative z-10">
                <div className="">
                  {region.locations.map((location, locationIndex) => (
                    <div
                      key={locationIndex}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group/item"
                    >
                      <div
                        className={`w-2 h-2 bg-linear-to-r ${region.gradient} rounded-full group-hover/item:scale-125 transition-transform duration-300`}
                      ></div>
                      <span className="font-two text-noir-700 text-lg group-hover/item:text-noir-700 transition-colors duration-300">
                        {location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative bottom border */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${region.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-linear-to-r from-primary-500/10 to-second-500/10 rounded-2xl p-8 border border-primary-200/50">
            <h3 className="font-one text-2xl font-bold text-noir-700 mb-4">
              Votre ville n'apparaît pas dans la liste ?
            </h3>
            <p className="font-two text-noir-700 mb-6">
              Contactez-nous ! Nous étudions toutes les demandes et nous
              déplaçons selon vos besoins.
            </p>
            <a
              href="tel:0699024075"
              className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-primary-500 to-second-500 text-white font-two font-medium rounded-lg hover:from-primary-600 hover:to-second-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaMapMarkerAlt />
              06.99.02.40.75
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
