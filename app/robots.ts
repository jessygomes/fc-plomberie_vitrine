import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://artisanat-fcplomberie.fr/sitemap.xml",
    host: "https://artisanat-fcplomberie.fr",
  };
}
