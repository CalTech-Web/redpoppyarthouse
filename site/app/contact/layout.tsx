import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact, Hours, and Location",
  description:
    "Visit Red Poppy Art House at 2698 Folsom Street in San Francisco's Mission District. Find our hours, phone number, email directory, and directions.",
  openGraph: {
    title: "Contact, Hours, and Location | Red Poppy Art House",
    description:
      "Visit Red Poppy Art House at 2698 Folsom Street in San Francisco's Mission District. Find our hours, phone number, email directory, and directions.",
    url: "https://www.redpoppyarthouse.org/contact",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.redpoppyarthouse.org/#localbusiness",
  name: "Red Poppy Art House",
  description:
    "An artist-driven, volunteer-run community arts venue in San Francisco's Mission District presenting over 150 performances, exhibitions, workshops, and artist residencies annually.",
  url: "https://www.redpoppyarthouse.org",
  telephone: "+1-650-731-5383",
  email: "info@redpoppyarthouse.org",
  image: "https://www.redpoppyarthouse.org/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2698 Folsom Street",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94110",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7536,
    longitude: -122.4143,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "19:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/RedPoppyArtHouse",
    "https://www.instagram.com/redpoppyart",
    "https://twitter.com/redpoppyart",
    "https://www.linkedin.com/company/red-poppy-art-house",
    "https://patreon.com/RedPoppy",
  ],
  priceRange: "$15 - $25",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: {
    "@type": "City",
    name: "San Francisco",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      {children}
    </>
  );
}
