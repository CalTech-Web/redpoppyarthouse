import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redpoppyarthouse.org"),
  title: {
    default: "Red Poppy Art House - Community Arts Venue in San Francisco",
    template: "%s | Red Poppy Art House",
  },
  description:
    "Red Poppy Art House is an artist-driven, volunteer-run arts venue in San Francisco's Mission District, presenting over 150 performances, exhibitions, workshops, and artist residencies annually.",
  openGraph: {
    title: "Red Poppy Art House - Community Arts Venue in San Francisco",
    description:
      "A community-driven arts venue in San Francisco's Mission District, presenting performances, exhibitions, workshops, and artist residencies.",
    url: "https://www.redpoppyarthouse.org",
    siteName: "Red Poppy Art House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Poppy Art House - Community Arts Venue in San Francisco",
    description:
      "A community-driven arts venue in San Francisco's Mission District, presenting performances, exhibitions, workshops, and artist residencies.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Red Poppy Art House",
  url: "https://www.redpoppyarthouse.org",
  logo: "https://www.redpoppyarthouse.org/opengraph-image",
  description:
    "Red Poppy Art House is an artist-driven, volunteer-run arts venue in San Francisco's Mission District, presenting over 150 performances, exhibitions, workshops, and artist residencies annually since 2003.",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2698 Folsom Street",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94110",
    addressCountry: "US",
  },
  telephone: "+1-650-731-5383",
  email: "info@redpoppyarthouse.org",
  sameAs: [
    "https://www.facebook.com/RedPoppyArtHouse",
    "https://www.instagram.com/redpoppyart",
    "https://twitter.com/redpoppyart",
    "https://www.linkedin.com/company/red-poppy-art-house",
    "https://patreon.com/RedPoppy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
