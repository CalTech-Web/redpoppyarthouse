import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Community resources, partner organizations, and curatorial partners of the Red Poppy Art House in San Francisco's Mission District.",
  openGraph: {
    title: "Resources | Red Poppy Art House",
    description:
      "Community resources, partner organizations, and curatorial partners.",
    url: "https://www.redpoppyarthouse.org/resources",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
