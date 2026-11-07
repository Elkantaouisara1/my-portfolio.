import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-sara-el-kantaoui.vercel.app"),
  title: {
    default: `${site.name} — Data Science & Intelligence Artificielle`,
    template: `%s · ${site.name}`,
  },
  description:
    "Portfolio de Sara El Kantaoui, étudiante ingénieure en Data Science et Intelligence Artificielle à l’EMSI (Casablanca). Recherche d’un stage PFE de 6 mois.",
  keywords: [
    "Sara El Kantaoui",
    "Data Science",
    "Intelligence Artificielle",
    "Machine Learning",
    "stage PFE",
    "EMSI",
    "Casablanca",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Data Science & IA`,
    description:
      "Étudiante ingénieure en Data Science & IA. Stage PFE 6 mois. Projets de maintenance prédictive, Deep Learning et systèmes multi-agents.",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="min-h-screen font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-bordeaux focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
