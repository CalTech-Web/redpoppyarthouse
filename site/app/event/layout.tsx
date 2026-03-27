import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Archive - 15 Years of Performances and Community",
  description:
    "Browse over 1,500 events from 2011 to today at Red Poppy Art House in San Francisco's Mission District. Live music, poetry, dance, exhibitions, workshops, and MAPP events. Sliding scale admission $15 to $25.",
  openGraph: {
    title: "Events Archive | Red Poppy Art House",
    description:
      "Browse over 1,500 events from 2011 to today at Red Poppy Art House in San Francisco's Mission District. Live music, poetry, dance, exhibitions, workshops, and MAPP events.",
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
