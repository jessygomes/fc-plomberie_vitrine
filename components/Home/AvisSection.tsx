/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

export default function AvisSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Il y a eu une très bonne intervention, des gens très disponibles et très professionnels. C'est pas toujours le cas, malheureusement. Mais là, j'en prends acte et je n'oublierai pas de faire appel à leurs services quand les besoins se feront sentir. Je vous remercie encore d'être intervenus ce soir, c'est quelque chose que je n'oublierai pas.",
      author: "Marie D.",
      rating: 5,
    },
    {
      text: "Service impeccable ! L'équipe est très professionnelle et à l'écoute. Intervention rapide pour une fuite d'eau urgente. Je recommande vivement leurs services.",
      author: "Jean M.",
      rating: 5,
    },
    {
      text: "Excellent travail sur l'installation de notre nouvelle chaudière. Tout a été fait dans les règles de l'art, avec un suivi parfait. Nous sommes très satisfaits.",
      author: "Sophie L.",
      rating: 5,
    },
    {
      text: "Dépannage d'urgence un dimanche soir, ils ont répondu présent ! Problème résolu rapidement et proprement. Tarif honnête et transparent.",
      author: "Pierre M.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-one text-3xl md:text-4xl font-bold text-noir-700 mb-4 tracking-wider">
            DES CLIENTS SATISFAITS
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-second-500 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current testimonial */}
            <div className="bg-linear-to-br from-primary-500/10 to-second-500/10 rounded-2xl p-8 shadow-lg border border-primary-200/50 relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-4 left-4 text-primary-300 opacity-50">
                <FaQuoteLeft size={40} className="text-noir-500" />
              </div>

              <div className="relative z-10 pt-10">
                <p className="font-two text-noir-700 text-base leading-relaxed mb-2 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-one font-semibold text-noir-700 text-base">
                      - {testimonials[currentIndex].author}
                    </p>
                    {/* <div className="flex items-center gap-1 mt-2">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        )
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Next testimonial preview */}
            <div className="bg-linear-to-br from-primary-500/10 to-second-500/10 rounded-2xl p-8 shadow-lg border border-second-200/50 relative overflow-hidden opacity-75">
              {/* Quote icon */}
              <div className="absolute top-4 left-4 text-second-300 opacity-50">
                <FaQuoteLeft size={40} className="text-noir-500" />
              </div>

              <div className="relative z-10 pt-10">
                <p className="font-two text-noir-700 text-base leading-relaxed mb-6 italic">
                  "{testimonials[(currentIndex + 1) % testimonials.length].text}
                  "
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-one font-semibold text-noir-700 text-lg">
                      -{" "}
                      {
                        testimonials[(currentIndex + 1) % testimonials.length]
                          .author
                      }
                    </p>
                    {/* <div className="flex items-center gap-1 mt-2">
                      {[
                        ...Array(
                          testimonials[(currentIndex + 1) % testimonials.length]
                            .rating
                        ),
                      ].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2 mx-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-500 scale-125"
                      : "bg-primary-500/20 hover:bg-primary-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
