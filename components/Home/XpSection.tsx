/* eslint-disable react/no-unescaped-entities */
import { MdPermDataSetting } from "react-icons/md";
import { FaBusinessTime, FaMapMarkerAlt } from "react-icons/fa";

export default function XpSection() {
  const features = [
    {
      icon: <MdPermDataSetting size={60} />,
      title: "+ de 30 ans",
      subtitle: "d'expérience",
      description: "Une expertise reconnue dans le domaine",
    },
    {
      icon: <FaBusinessTime size={60} />,
      title: "Travaux",
      subtitle: "durables",
      description: "Solutions pérennes et de qualité",
    },
    {
      icon: <FaMapMarkerAlt size={60} />,
      title: "Région centre",
      subtitle: "& parisienne",
      description: "Service de proximité garanti",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-r from-noir-500 to-noir-700">
        <div className="relative z-10 py-10 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="w-16 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full mb-6"></div>
            </div>

            <p className="text-white text-lg md:text-base font-two leading-relaxed tracking-wide">
              Chez FC Plomberie, nous allions la qualité du travail "à
              l'ancienne", soigné et durable, avec les techniques modernes et
              les matériaux neufs. Chaque chantier est livré propre et clé en
              main, avec un suivi attentif et une garantie de satisfaction :
              nous y retournons si nécessaire !
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Background linear effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 to-second-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon container */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="p-4 bg-linear-to-br from-primary-500 to-second-500 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="font-one text-xl font-bold text-noir-700 mb-1">
                    {feature.title}
                  </h3>
                  <h4 className="font-one text-lg font-semibold text-primary-500 mb-3">
                    {feature.subtitle}
                  </h4>
                  <p className="font-two text-sm text-noir-500/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary-500 to-second-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-noir-700 text-2xl md:text-3xl font-one font-semibold mb-6 leading-relaxed">
                FC Plomberie - Chauffage - Sanitaire met son savoir-faire
                artisanal au service de vos besoins en plomberie, chauffage et
                sanitaire.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
