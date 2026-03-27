import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const title = tag
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${title} Events`,
    description: `Browse ${title} events at Red Poppy Art House in San Francisco's Mission District.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const title = tag
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-screen">
      {/* Tag Hero */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-earth-warm rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
          <Link
            href="/event"
            className="inline-flex items-center gap-2 text-sm text-poppy-200 hover:text-cream-50 transition-colors mb-6"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            All Events
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium bg-poppy-800/60 text-poppy-200 rounded-full border border-poppy-700/40">
              Tag
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Tag Content */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="bg-surface rounded-2xl border border-cream-200 p-8 md:p-12 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-earth-sage/20 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-7 h-7 text-earth-olive"
                aria-hidden="true"
              >
                <path
                  d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-cream-900 mb-3">
              Events Tagged &quot;{title}&quot;
            </h2>
            <p className="text-cream-700 max-w-md mx-auto mb-6">
              Events matching this tag will appear here as they are published.
              Check back soon, or browse our full events calendar.
            </p>
            <Link
              href="/event"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors"
            >
              Browse All Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
