import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events - Performances, Exhibitions, and Workshops",
  description:
    "Browse upcoming events at Red Poppy Art House in San Francisco. Live music, poetry, dance, exhibitions, and workshops Thursday through Sunday. Sliding scale admission $15 to $25.",
  openGraph: {
    title: "Events - Performances, Exhibitions, and Workshops | Red Poppy Art House",
    description:
      "Browse upcoming events at Red Poppy Art House in San Francisco. Live music, poetry, dance, exhibitions, and workshops Thursday through Sunday. Sliding scale admission $15 to $25.",
    url: "https://www.redpoppyarthouse.org/event",
  },
};

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
