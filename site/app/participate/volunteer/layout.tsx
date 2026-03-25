import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer at Red Poppy Art House",
  description:
    "Volunteer at Red Poppy Art House in San Francisco. Help with event productions, welcome guests, and earn free passes to performances. We produce 150+ events annually.",
  openGraph: {
    title: "Volunteer at Red Poppy Art House",
    description:
      "Volunteer at Red Poppy Art House in San Francisco. Help with event productions, welcome guests, and earn free passes to performances. We produce 150+ events annually.",
    url: "https://www.redpoppyarthouse.org/participate/volunteer",
  },
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
