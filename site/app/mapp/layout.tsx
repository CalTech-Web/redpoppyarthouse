import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAPP - Mission Arts & Performance Project",
  description:
    "The Mission Arts and Performance Project (MAPP) is a homegrown bi-monthly, multidisciplinary, intercultural happening in San Francisco's Mission District, launched in 2003 by the Red Poppy Art House.",
  openGraph: {
    title: "MAPP - Mission Arts & Performance Project",
    description:
      "A bi-monthly, multidisciplinary, intercultural happening in San Francisco's Mission District since 2003.",
    url: "https://www.redpoppyarthouse.org/mapp",
  },
};

export default function MappLayout({ children }: { children: React.ReactNode }) {
  return children;
}
