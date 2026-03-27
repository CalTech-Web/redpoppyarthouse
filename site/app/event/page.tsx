"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import allEvents from "@/src/data/events.json";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface EventItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  startTime: string;
  endTime: string;
  cost: string;
  description: string;
  excerpt: string;
  image: string | null;
  links: { eventbrite?: string; facebook?: string };
}

const events = allEvents as EventItem[];

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const YEARS = Array.from(
  new Set(events.map((e) => e.date.slice(0, 4)))
).sort((a, b) => Number(b) - Number(a));

const ITEMS_PER_PAGE = 24;

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(time: string): string {
  if (!time || time === "00:00") return "";
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m === 0 ? `${hour} ${ampm}` : `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

function getImageSrc(image: string | null): string | null {
  if (!image) return null;
  return image;
}

function truncateExcerpt(excerpt: string, maxLen = 120): string {
  // Clean up raw whitespace artefacts from WP export
  const cleaned = excerpt
    .replace(/\\r\\n|\\n|\\r|rn/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen).trimEnd() + "...";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function EventsArchivePage() {
  const [activeYear, setActiveYear] = useState<string>(YEARS[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /* Filter events by year + search */
  const filtered = useMemo(() => {
    const lowerSearch = search.toLowerCase().trim();
    return events.filter((e) => {
      const matchYear = e.date.startsWith(activeYear);
      const matchSearch =
        !lowerSearch || e.title.toLowerCase().includes(lowerSearch);
      return matchYear && matchSearch;
    });
  }, [activeYear, search]);

  /* Pagination */
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  /* Reset page when filters change */
  const handleYearChange = (year: string) => {
    setActiveYear(year);
    setPage(1);
  };
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50 min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/venue/performance.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-poppy-200">
              <li>
                <Link href="/" className="hover:text-cream-50 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-cream-50 font-medium">
                Events
              </li>
            </ol>
          </nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-poppy-800/60 text-poppy-100 rounded-full border border-poppy-700/40">
              {events.length.toLocaleString()} Events Since 2011
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Events Archive
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            Over a decade of performances, exhibitions, workshops, and community
            gatherings at the Poppy. Browse by year or search by title.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* ── Filters ──────────────────────────────────────────────── */}
      <section className="bg-cream-50 texture-paper border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          {/* Search */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
            className="mb-6"
          >
            <label htmlFor="event-search" className="sr-only">
              Search events
            </label>
            <div className="relative max-w-md">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-400 pointer-events-none"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                id="event-search"
                type="text"
                placeholder="Search events by title..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface border border-cream-200 rounded-full text-cream-900 placeholder:text-cream-400 focus:outline-none focus:ring-2 focus:ring-poppy-300 focus:border-poppy-300 transition-colors"
              />
            </div>
          </motion.div>

          {/* Year tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap gap-2"
          >
            {YEARS.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors cursor-pointer ${
                  activeYear === year
                    ? "bg-poppy-700 text-cream-50 border-poppy-700"
                    : "bg-surface text-cream-700 border-cream-200 hover:border-poppy-200 hover:text-poppy-700"
                }`}
              >
                {year}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Events Grid ──────────────────────────────────────────── */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          {/* Result count */}
          <p className="text-sm text-cream-500 mb-6">
            {filtered.length === 0
              ? "No events found"
              : `Showing ${(safePage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(
                  safePage * ITEMS_PER_PAGE,
                  filtered.length
                )} of ${filtered.length} events`}
          </p>

          {paged.length > 0 ? (
            <motion.div
              key={`${activeYear}-${search}-${safePage}`}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paged.map((event, i) => {
                const imgSrc = getImageSrc(event.image);
                const startFormatted = formatTime(event.startTime);
                const endFormatted = formatTime(event.endTime);
                const timeStr =
                  startFormatted && endFormatted
                    ? `${startFormatted} - ${endFormatted}`
                    : startFormatted || "";

                return (
                  <motion.div
                    key={event.id}
                    variants={fadeUp}
                    custom={i % 6}
                  >
                    <Link
                      href={`/event/${event.slug}`}
                      className={`group block h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cream-800/8 hover:-translate-y-1 transition-all duration-300 border-t-4 backdrop-blur-sm ring-1 ring-white/50 ${["bg-[#fdf6e8]/80 border border-earth-warm/15 border-t-earth-warm/30", "bg-[#f3f7f0]/80 border border-earth-olive/15 border-t-earth-olive/30", "bg-[#fdf0eb]/80 border border-earth-terracotta/15 border-t-earth-terracotta/30", "bg-[#f0f3ec]/80 border border-earth-sage/15 border-t-earth-sage/30", "bg-[#f7f0eb]/80 border border-earth-clay/15 border-t-earth-clay/30", "bg-cream-100/80 border border-cream-300/50 border-t-cream-500/30"][i % 6]}`}
                    >
                      {/* Image */}
                      {imgSrc ? (
                        <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
                          <img
                            src={imgSrc}
                            alt={event.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-[16/10] bg-gradient-to-br from-[#f3f7f0] to-cream-100 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-poppy-300"
                            viewBox="0 0 24 24"
                            fill="none"
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
                      )}

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs font-medium text-poppy-600 mb-1.5">
                          {formatDate(event.date)}
                        </p>
                        <h3 className="font-serif text-lg font-bold text-cream-900 leading-snug mb-2 group-hover:text-poppy-700 transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        {timeStr && (
                          <p className="text-xs text-cream-500 mb-2">
                            {timeStr}
                          </p>
                        )}
                        {event.cost && (
                          <span className="inline-block px-2 py-0.5 text-xs font-medium bg-earth-warm/10 text-earth-warm rounded-full mb-2">
                            {event.cost}
                          </span>
                        )}
                        <p className="text-sm text-cream-600 leading-relaxed line-clamp-3">
                          {truncateExcerpt(event.excerpt, 140)}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-16">
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
              <h3 className="font-serif text-xl font-bold text-cream-900 mb-2">
                No Events Found
              </h3>
              <p className="text-cream-600 text-sm max-w-sm mx-auto">
                {search
                  ? `No events matching "${search}" in ${activeYear}. Try a different search or year.`
                  : `No events found for ${activeYear}.`}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="px-4 py-2 text-sm font-medium rounded-full border border-cream-200 text-cream-700 hover:border-poppy-200 hover:text-poppy-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Previous
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => {
                  // Show first, last, and pages near current
                  if (p === 1 || p === totalPages) return true;
                  if (Math.abs(p - safePage) <= 2) return true;
                  return false;
                })
                .reduce<(number | "ellipsis")[]>((acc, p, idx, arr) => {
                  if (idx > 0 && p - (arr[idx - 1] as number) > 1) {
                    acc.push("ellipsis");
                  }
                  acc.push(p);
                  return acc;
                }, [])
                .map((item, idx) =>
                  item === "ellipsis" ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className="px-2 text-cream-400 text-sm"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => setPage(item as number)}
                      className={`w-9 h-9 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                        safePage === item
                          ? "bg-poppy-700 text-cream-50"
                          : "text-cream-700 hover:bg-cream-100"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="px-4 py-2 text-sm font-medium rounded-full border border-cream-200 text-cream-700 hover:border-poppy-200 hover:text-poppy-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Venue Info ────────────────────────────────────────────── */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <div className="font-serif text-3xl font-bold text-poppy-200 mb-1">
                Thu - Sun
              </div>
              <p className="text-cream-300 text-sm">Typical performance nights</p>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <div className="font-serif text-3xl font-bold text-poppy-200 mb-1">
                $15 - $25
              </div>
              <p className="text-cream-300 text-sm">Sliding scale admission</p>
            </motion.div>
            <motion.div variants={fadeUp} custom={2}>
              <div className="font-serif text-3xl font-bold text-poppy-200 mb-1">
                49 Seats
              </div>
              <p className="text-cream-300 text-sm">Intimate venue, no bad seat</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Booking CTA ──────────────────────────────────────────── */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-serif text-2xl font-bold text-cream-900 mb-3">
                Want to Perform Here?
              </h2>
              <p className="text-cream-700 max-w-md mx-auto mb-6">
                We welcome artists working in all performing disciplines.
                Tell us about yourself and your work.
              </p>
              <a
                href="mailto:booking@redpoppyarthouse.org"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors shadow-sm"
              >
                Email booking@redpoppyarthouse.org
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
