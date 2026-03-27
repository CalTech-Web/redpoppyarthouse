import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Press",
  description:
    "News, stories, artist spotlights, event recaps, and press coverage from the Red Poppy Art House - a community arts venue in San Francisco's Mission District.",
  openGraph: {
    title: "Blog & Press | Red Poppy Art House",
    description:
      "News, stories, artist spotlights, event recaps, and press coverage from the Red Poppy Art House.",
    url: "https://www.redpoppyarthouse.org/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
