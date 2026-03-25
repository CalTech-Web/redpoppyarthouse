import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Red Poppy Art House - Our Story, Mission, and People",
  description:
    "Learn about Red Poppy Art House, a volunteer-run arts venue in San Francisco's Mission District since 2003. Discover our mission, founding story, and the people who make it happen.",
  openGraph: {
    title: "About Red Poppy Art House - Our Story, Mission, and People",
    description:
      "Learn about Red Poppy Art House, a volunteer-run arts venue in San Francisco's Mission District since 2003. Discover our mission, founding story, and the people who make it happen.",
    url: "https://www.redpoppyarthouse.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
