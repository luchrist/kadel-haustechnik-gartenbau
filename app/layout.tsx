import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/lib/restaurant";
import { galabau } from "@/lib/galabau";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"]
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

// Die SEO-Texte aus lib/restaurant.ts stammen aus dem Gastro-Generator und
// passen nicht zur Branche, deshalb werden sie hier branchengerecht gesetzt.
const city = restaurant.address.city;
const seoTitle = `${restaurant.name} | Gartenbau & Haustechnik in ${city}`;
const seoDescription = `Gartenbau & Haustechnik in ${city}: Haustechnik- und Elektro-Reparaturen, Bodenverlegung, Flachdachbegrünung, Gartengestaltung, Beregnung, Gartenbeleuchtung, Zaunbau, Teichpflege und Mähroboter. Ein Ansprechpartner für Haus und Garten.`;

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    restaurant.name,
    `Gartenbau & Haustechnik ${city}`,
    `Haustechnik ${city}`,
    `Elektro Reparatur ${city}`,
    `Bodenverlegung ${city}`,
    `Flachdachbegrünung ${city}`,
    `Beregnungsanlage ${city}`,
    `Mähroboter Installation ${city}`,
    `Gartenzaun Montage ${city}`
  ],
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    locale: restaurant.seo.locale
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: restaurant.name,
  description: seoDescription,
  telephone: galabau.contact.phone || restaurant.phone,
  ...(galabau.contact.email || restaurant.email ? { email: galabau.contact.email || restaurant.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    postalCode: restaurant.address.cityLine.match(/\b\d{5}\b/)?.[0] ?? "",
    addressLocality: city,
    addressCountry: "DE"
  },
  ...(galabau.serviceArea.center
    ? {
        geo: {
          "@type": "GeoCoordinates",
          latitude: galabau.serviceArea.center.lat,
          longitude: galabau.serviceArea.center.lng
        }
      }
    : {}),
  areaServed: galabau.serviceArea.places.length
    ? galabau.serviceArea.places.map((place) => ({ "@type": "City", name: place }))
    : { "@type": "City", name: city },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: galabau.services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.label, description: service.teaser }
    }))
  },
  ...(restaurant.mapsUrl ? { hasMap: restaurant.mapsUrl } : {}),
  sameAs: (["instagram", "facebook", "tiktok"] as const)
    .filter((key) => !restaurant.socialMedia.hidden[key] && restaurant.socialMedia[key])
    .map((key) => restaurant.socialMedia[key])
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="grain overflow-x-hidden bg-bone text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
