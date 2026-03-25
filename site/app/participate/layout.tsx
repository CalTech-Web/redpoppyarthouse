import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participate - Volunteer, Donate, and Get Involved",
  description:
    "Get involved with Red Poppy Art House. Volunteer at events, donate to support the arts, apply for internships, or book a performance at our Mission District venue.",
  openGraph: {
    title: "Participate - Volunteer, Donate, and Get Involved | Red Poppy Art House",
    description:
      "Get involved with Red Poppy Art House. Volunteer at events, donate to support the arts, apply for internships, or book a performance at our Mission District venue.",
    url: "https://www.redpoppyarthouse.org/participate",
  },
};

export default function ParticipateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
