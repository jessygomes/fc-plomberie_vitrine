import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://artisanat-fcplomberie.fr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: "https://artisanat-fcplomberie.fr/nos-services/plomberie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://artisanat-fcplomberie.fr/nos-services/chauffage",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://artisanat-fcplomberie.fr/nos-services/sanitaire",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://artisanat-fcplomberie.fr/contactez-nous",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://artisanat-fcplomberie.fr/entreprise",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://artisanat-fcplomberie.fr/mentions-legales",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://artisanat-fcplomberie.fr/politique-de-confidentialite",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
