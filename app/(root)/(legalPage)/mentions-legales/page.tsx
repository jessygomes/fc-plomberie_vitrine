/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | FC Plomberie - Chauffage - Sanitaire",
  description:
    "Mentions légales de FC Plomberie - Chauffage - Sanitaire. Informations légales, conditions d'utilisation et données de l'entreprise.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalePage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
            Mentions Légales
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Identification de l'entreprise */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              1. Identification de l'entreprise
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                <strong>Dénomination sociale :</strong> FC Plomberie - Chauffage
                - Sanitaire SAS
              </p>
              <p>
                <strong>Forme juridique :</strong> SAS, société par actions
                simplifiée
              </p>
              <p>
                <strong>Secteur d'activité :</strong> Travaux d'installation
                d'eau et de gaz en tous locaux
              </p>
              <p>
                <strong>Zone d'intervention :</strong> Région Centre-Val de
                Loire et Île-de-France
              </p>
              <p>
                <strong>Téléphone :</strong>{" "}
                <a
                  href="tel:0699024075"
                  className="text-primary-500 hover:text-primary-600"
                >
                  06.99.02.40.75
                </a>
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:fc.plomberie45@gmail.com"
                  className="text-primary-500 hover:text-primary-600"
                >
                  fc.plomberie45@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Directeur de publication */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              2. Directeur de publication
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                Le directeur de la publication du site web est le représentant
                légal de l'entreprise FC Plomberie - Chauffage - Sanitaire.
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              3. Hébergement du site
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                Ce site est hébergé par un prestataire d'hébergement web
                professionnel.
              </p>
              <p>
                Pour toute question relative à l'hébergement, vous pouvez nous
                contacter aux coordonnées mentionnées ci-dessus.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              4. Propriété intellectuelle
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle.
              </p>
              <p>
                Tous les droits de reproduction sont réservés, y compris pour
                les documents téléchargeables et les représentations
                iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support
                électronique quelconque est formellement interdite sauf
                autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              5. Protection des données personnelles
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                FC Plomberie - Chauffage - Sanitaire s'engage à respecter la
                confidentialité des données personnelles collectées sur ce site.
              </p>
              <p>
                Les informations recueillies sont utilisées uniquement pour
                répondre à vos demandes de devis et de contact.
              </p>
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier
                1978 modifiée et au RGPD, vous disposez d'un droit d'accès, de
                rectification et de suppression des données vous concernant.
              </p>
              <p>
                Pour exercer ces droits, contactez-nous à l'adresse :{" "}
                <a
                  href="mailto:fc.plomberie45@gmail.com"
                  className="text-primary-500 hover:text-primary-600"
                >
                  fc.plomberie45@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              6. Cookies
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                Ce site peut utiliser des cookies pour améliorer l'expérience
                utilisateur et analyser le trafic.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les
                cookies, mais certaines fonctionnalités du site pourraient être
                limitées.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              7. Limitation de responsabilité
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                FC Plomberie - Chauffage - Sanitaire s'efforce de fournir des
                informations exactes et à jour sur ce site.
              </p>
              <p>
                Toutefois, nous ne pouvons garantir l'exactitude, la précision
                ou l'exhaustivité des informations mises à disposition.
              </p>
              <p>
                L'utilisateur reconnaît utiliser ces informations sous sa
                responsabilité exclusive.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              8. Droit applicable
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                Les présentes mentions légales sont régies par le droit
                français.
              </p>
              <p>
                En cas de litige, les tribunaux français seront seuls
                compétents.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              9. Contact
            </h2>
            <div className="space-y-3 font-two text-noir-500">
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez
                nous contacter :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Par téléphone :{" "}
                  <a
                    href="tel:0699024075"
                    className="text-primary-500 hover:text-primary-600"
                  >
                    06.99.02.40.75
                  </a>
                </li>
                <li>
                  Par email :{" "}
                  <a
                    href="mailto:fc.plomberie45@gmail.com"
                    className="text-primary-500 hover:text-primary-600"
                  >
                    fc.plomberie45@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="font-two text-sm text-noir-500">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
