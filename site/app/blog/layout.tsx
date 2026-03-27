import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, stories, and updates from the Red Poppy Art House - a community arts venue in San Francisco's Mission District.",
  openGraph: {
    title: "Blog | Red Poppy Art House",
    description:
      "News, stories, and updates from the Red Poppy Art House.",
    url: "https://www.redpoppyarthouse.org/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
