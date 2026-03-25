import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Red Poppy Art House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Poppy Art House - Community Arts Venue in San Francisco",
    description:
      "A community-driven arts venue in San Francisco's Mission District, presenting performances, exhibitions, workshops, and artist residencies.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
