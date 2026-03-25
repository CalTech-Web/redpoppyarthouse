import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate and Support the Arts",
  description:
    "Support Red Poppy Art House with a donation, patron membership, or Patreon subscription. Your contribution sustains artists and free programs in San Francisco's Mission District.",
  openGraph: {
    title: "Donate and Support the Arts | Red Poppy Art House",
    description:
      "Support Red Poppy Art House with a donation, patron membership, or Patreon subscription. Your contribution sustains artists and free programs in San Francisco's Mission District.",
    url: "https://www.redpoppyarthouse.org/participate/give",
  },
};

export default function GiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
