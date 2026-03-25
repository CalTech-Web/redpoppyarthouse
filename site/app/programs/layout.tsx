import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the programs at Red Poppy Art House, from live performances and exhibitions to artist residencies, Family Art, MAPP, FRESH Festival, and more in San Francisco's Mission District.",
  openGraph: {
    title: "Programs | Red Poppy Art House",
    description:
      "Explore the programs at Red Poppy Art House, from live performances and exhibitions to artist residencies, Family Art, MAPP, FRESH Festival, and more.",
    url: "https://www.redpoppyarthouse.org/programs",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
