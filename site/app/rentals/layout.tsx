import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent the Space",
  description:
    "Rent the Red Poppy Art House, a cozy 650 sq ft venue in San Francisco's Mission District. Seats up to 49, with a kitchen, Pleyel piano, sound equipment, and natural light. Rates from $150.",
  openGraph: {
    title: "Rent the Space | Red Poppy Art House",
    description:
      "Rent the Red Poppy Art House, a cozy 650 sq ft venue in San Francisco's Mission District. Seats up to 49, with a kitchen, Pleyel piano, sound equipment, and natural light.",
    url: "https://www.redpoppyarthouse.org/rentals",
  },
};

export default function RentalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
