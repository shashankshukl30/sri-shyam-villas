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
  ],
  openGraph: {
    title: "Sri Shyam Villas | Premium Hotel in Varanasi",
    description:
      "Where spirituality meets serenity. Premium boutique hotel near Kashi Vishwanath Temple.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
