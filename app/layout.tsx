import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ehgz — Discover. Book. Experience Cairo.",
  description:
    "The only curated restaurant, café, and bar discovery and booking app built for Cairo. For tourists and locals who know the difference.",
  keywords: [
    "Cairo restaurants",
    "Cairo dining",
    "Egypt food",
    "Cairo booking",
    "Ehgz",
    "Cairo cafes",
    "Egypt tourism",
    "restaurant booking Egypt",
  ],
  openGraph: {
    title: "Ehgz — Discover. Book. Experience Cairo.",
    description:
      "The only curated restaurant, café, and bar discovery and booking app built for Cairo. For tourists and locals who know the difference.",
    url: "https://ehgz.app",
    siteName: "Ehgz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ehgz — Discover. Book. Experience Cairo.",
    description:
      "The only curated restaurant, café, and bar discovery and booking app built for Cairo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#080808] text-[#FAFAF8] font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
