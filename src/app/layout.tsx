import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sri Shyam Villas | Premium Hotel in Varanasi — Near Kashi Vishwanath Temple",
  description:
    "Experience Varanasi's warmest welcome at Sri Shyam Villas. A premium boutique hotel offering elegant rooms, modern amenities, and unmatched hospitality — just minutes from the sacred Kashi Vishwanath Temple and Ganges ghats.",
  keywords: [
    "Sri Shyam Villas",
    "hotel in Varanasi",
    "Varanasi hotel",
    "Kashi Vishwanath Temple hotel",
    "boutique hotel Varanasi",
    "premium hotel Varanasi",
    "near Kashi temple hotel",
    "Varanasi accommodation",
    "hotel near Ganges Varanasi",
    "Ganga Aarti hotel",
  ],
  metadataBase: new URL("https://srishyamvillas.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Sri Shyam Villas | Premium Hotel in Varanasi",
    description:
      "Where spirituality meets serenity. Premium boutique hotel near Kashi Vishwanath Temple. Book direct for best rates.",
    type: "website",
    locale: "en_IN",
    url: "https://srishyamvillas.com",
    siteName: "Sri Shyam Villas",
    images: [
      {
        url: "/images/hotel/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Shyam Villas — Premium Boutique Hotel in Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Shyam Villas | Premium Hotel in Varanasi",
    description:
      "Where spirituality meets serenity. Premium boutique hotel near Kashi Vishwanath Temple.",
    images: ["/images/hotel/hero-1.jpg"],
  },
};

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Sri Shyam Villas",
  description:
    "A premium boutique hotel in Varanasi offering warm hospitality, modern amenities, and unmatched comfort near the sacred Kashi Vishwanath Temple and Ganges ghats.",
  url: "https://srishyamvillas.com",
  telephone: "+917307491291",
  email: "srishyamvillas@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D.61/3-A, Siddhagiribagh, Jahumandi",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221010",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.31116,
    longitude: 82.99425,
  },
  image: "https://srishyamvillas.com/images/hotel/hero-1.jpg",
  checkinTime: "13:00",
  checkoutTime: "12:00",
  priceRange: "₹₹",
  starRating: { "@type": "Rating", ratingValue: "4.4" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "200",
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
    { "@type": "LocationFeatureSpecification", name: "Airport Shuttle", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
