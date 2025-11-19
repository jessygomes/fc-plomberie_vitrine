/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | FC Plomberie - Chauffage - Sanitaire",
  description:
    "Politique de confidentialité et protection des données personnelles de FC Plomberie - Chauffage - Sanitaire. Conformité RGPD.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4">
            Politique de Confidentialité
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introduction */}
          <section className="mb-8">
            <div className="space-y-4 font-two text-noir-700">
              <p>
                FC Plomberie - Chauffage - Sanitaire accorde une grande
                importance à la protection de vos données personnelles. Cette
                politique de confidentialité vous informe sur la façon dont nous
                collectons, utilisons et protégeons vos informations.
              </p>
              <p>
                Cette politique est conforme au Règlement Général sur la
                Protection des Données (RGPD) et à la loi "Informatique et
                Libertés".
              </p>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              1. Responsable du traitement des données
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>
                <strong>Responsable :</strong> FC Plomberie - Chauffage -
                Sanitaire
              </p>
              <p>
                <strong>Contact :</strong>{" "}
                <a
                  href="mailto:fc.plomberie45@gmail.com"
                  className="text-primary-500 hover:text-primary-600"
                >
                  fc.plomberie45@gmail.com
                </a>
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
            </div>
          </section>

          {/* Données collectées */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              2. Données personnelles collectées
            </h2>
            <div className="space-y-4 font-two text-noir-700">
              <p>Nous pouvons collecter les données suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Données de contact :</strong> adresse email, numéro de
                  téléphone, adresse postale
                </li>
                <li>
                  <strong>Données techniques :</strong> adresse IP, type de
                  navigateur, pages visitées
                </li>
                <li>
                  <strong>Données liées à votre demande :</strong> nature des
                  travaux, préférences, messages
                </li>
              </ul>
            </div>
          </section>

          {/* Finalités */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              3. Finalités du traitement
            </h2>
            <div className="space-y-4 font-two text-noir-700">
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de devis et d'information</li>
                <li>Vous contacter pour organiser nos interventions</li>
                <li>Gérer la relation client et le suivi des travaux</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Respecter nos obligations légales et comptables</li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              4. Base légale du traitement
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>Le traitement de vos données repose sur :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Votre consentement</strong> pour les demandes de
                  contact et devis
                </li>
                <li>
                  <strong>L'exécution du contrat</strong> pour la réalisation
                  des prestations
                </li>
                <li>
                  <strong>L'intérêt légitime</strong> pour l'amélioration de nos
                  services
                </li>
                <li>
                  <strong>Les obligations légales</strong> pour la conservation
                  des documents comptables
                </li>
              </ul>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              5. Durée de conservation
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>Nous conservons vos données :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Données de contact :</strong> 3 ans après le dernier
                  contact
                </li>
                <li>
                  <strong>Données contractuelles :</strong> 10 ans pour les
                  obligations comptables
                </li>
                <li>
                  <strong>Données techniques :</strong> 13 mois maximum
                </li>
              </ul>
            </div>
          </section>

          {/* Destinataires */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              6. Destinataires des données
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>Vos données peuvent être communiquées à :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Notre personnel autorisé</li>
                <li>Nos prestataires techniques (hébergement, maintenance)</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
              </ul>
              <p>
                Nous ne vendons ni ne louons jamais vos données à des tiers.
              </p>
            </div>
          </section>

          {/* Transferts */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              7. Transferts de données
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>Vos données sont traitées au sein de l'Union Européenne.</p>
              <p>
                En cas de transfert hors UE, nous nous assurerons que des
                garanties appropriées sont mises en place.
              </p>
            </div>
          </section>

          {/* Droits */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              8. Vos droits
            </h2>
            <div className="space-y-4 font-two text-noir-700">
              <p>Vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Droit d'accès :</strong> obtenir une copie de vos
                  données
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger des données
                  inexactes
                </li>
                <li>
                  <strong>Droit d'effacement :</strong> demander la suppression
                  de vos données
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> restreindre le
                  traitement
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos
                  données dans un format lisible
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au
                  traitement
                </li>
                <li>
                  <strong>Droit de retrait du consentement</strong> à tout
                  moment
                </li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à :
                <a
                  href="mailto:fc.plomberie45@gmail.com"
                  className="text-primary-500 hover:text-primary-600 ml-1"
                >
                  fc.plomberie45@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              9. Sécurité des données
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Protéger vos données contre tout accès non autorisé</li>
                <li>
                  Assurer la confidentialité et l'intégrité de vos informations
                </li>
                <li>Prévenir la perte ou la destruction accidentelle</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              10. Cookies et technologies similaires
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>Notre site peut utiliser des cookies pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Améliorer votre expérience de navigation</li>
                <li>Analyser l'audience du site</li>
                <li>Mémoriser vos préférences</li>
              </ul>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les
                cookies.
              </p>
            </div>
          </section>

          {/* Réclamation */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              11. Droit de réclamation
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>
                Si vous estimez que le traitement de vos données n'est pas
                conforme, vous pouvez introduire une réclamation auprès de la
                CNIL :
              </p>
              <p>
                <strong>CNIL</strong>
                <br />
                3 Place de Fontenoy - TSA 80715
                <br />
                75334 PARIS CEDEX 07
                <br />
                <a
                  href="https://www.cnil.fr"
                  className="text-primary-500 hover:text-primary-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="font-one text-2xl font-bold text-noir-700 mb-4 border-b-2 border-primary-500 pb-2">
              12. Modifications de la politique
            </h2>
            <div className="space-y-3 font-two text-noir-700">
              <p>
                Cette politique peut être modifiée à tout moment. Les
                modifications prendront effet dès leur publication sur ce site.
              </p>
              <p>
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
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
