import React from "react";
import Btn from "./Btn";

export default function DevisSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-linear-to-br from-primary-400 via-primary-500 to-second-500 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main title */}
        <h2 className="font-one text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
          DEMANDEZ VOTRE DEVIS
        </h2>

        {/* Subtitle */}
        <p className="font-two text-xl md:text-2xl text-white/90 mb-10 tracking-widest drop-shadow">
          Gratuit & sans engagement
        </p>

        {/* Call to action button */}
        <div className="flex justify-center">
          <Btn href="/contactez-nous" ariaLabel="Page de contact">
            DEMANDEZ VOTRE DEVIS
          </Btn>
        </div>

        {/* Additional info */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Réponse sous 48h</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/40"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Devis personnalisé</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/40"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Sans engagement</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white/5 to-transparent"></div>
    </section>
  );
}
