import type { Metadata } from "next";
import { Livvic, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

const livvic = Livvic({
  variable: "--font-livvic",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "FC Plomberie - Chauffage - Sanitaire | Artisan Région Centre & Île-de-France",
    template: "%s | FC Plomberie",
  },
  description:
    "Artisan plombier-chauffagiste en région Centre et Île-de-France. Installation, réparation, dépannage 24h/24. Devis gratuit ✓",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${livvic.variable} ${jost.variable} antialiased`}>
        <div className="fixed top-0 left-0 w-full z-30">
          <Header />
        </div>
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
