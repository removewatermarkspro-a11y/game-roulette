import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AvisBoost — Récoltez des avis Google grâce à la gamification",
  description:
    "Boostez vos avis Google avec une roulette interactive. Solution de gamification pour restaurants, cafés et commerces. 30€/mois.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakarta.variable}`}>{children}</body>
    </html>
  );
}
