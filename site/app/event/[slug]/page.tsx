import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title,
    description: `Details for ${title} at Red Poppy Art House in San Francisco's Mission District.`,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-screen">
      {/* Event Hero */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-poppy-500 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
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
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            {title}
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Event Content */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="bg-surface rounded-2xl border border-cream-200 p-8 md:p-12 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-poppy-50 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-7 h-7 text-poppy-600"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 2v4M8 2v4M3 10h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-cream-900 mb-3">
              Event Details Coming Soon
            </h2>
            <p className="text-cream-700 max-w-md mx-auto mb-6">
              Full event information, including time, admission, and artist
              details, will appear here once this event is published.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/event"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors"
              >
                Browse All Events
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-cream-300 text-cream-800 rounded-full hover:bg-cream-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Info */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="grid sm:grid-cols-3 gap-6 text-center text-sm">
            <div>
              <p className="font-semibold text-cream-900">Location</p>
              <p className="text-cream-700">2698 Folsom St @ 23rd St</p>
            </div>
            <div>
              <p className="font-semibold text-cream-900">Admission</p>
              <p className="text-cream-700">Sliding scale $15 - $25</p>
            </div>
            <div>
              <p className="font-semibold text-cream-900">Capacity</p>
              <p className="text-cream-700">49 seats, intimate setting</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
