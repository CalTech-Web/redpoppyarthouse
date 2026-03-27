"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
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
function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(time: string): string {
  if (!time || time === "00:00") return "";
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m === 0
    ? `${hour} ${ampm}`
    : `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

function getImageSrc(image: string | null): string | null {
  if (!image) return null;
  return image;
}

function cleanDescription(raw: string): string {
  return raw
    .replace(/rn/g, "\n")
    .replace(/\\r\\n|\\n|\\r/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function EventDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const event = useMemo(
    () => events.find((e) => e.slug === slug) ?? null,
    [slug]
  );

  if (!event) {
    return (
      <main className="min-h-screen">
        <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
          <div className="absolute inset-0">
            <img src="/images/venue/performance.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
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
              Event Not Found
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
        </section>

        <section className="bg-cream-50 texture-paper">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
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
                Event Not Found
              </h2>
              <p className="text-cream-700 max-w-md mx-auto mb-6">
                We couldn&apos;t find the event you&apos;re looking for. It may
                have been removed or the link may be incorrect.
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

  const imgSrc = getImageSrc(event.image);
  const startFormatted = formatTime(event.startTime);
  const endFormatted = formatTime(event.endTime);
  const timeStr =
    startFormatted && endFormatted
      ? `${startFormatted} - ${endFormatted}`
      : startFormatted || "";
  const description = cleanDescription(event.description);
  const paragraphs = description
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        {/* Background image (if available) */}
        {imgSrc && (
          <div className="absolute inset-0">
            <img
              src={imgSrc}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-poppy-900/70" />
          </div>
        )}

        {/* Decorative blobs */}
        {!imgSrc && (
          <div className="absolute inset-0">
            <img src="/images/venue/performance.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0}>
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
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="mb-4">
              <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-poppy-800/60 text-poppy-100 rounded-full border border-poppy-700/40">
                {formatDate(event.date)}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={2}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-4xl"
            >
              {event.title}
            </motion.h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* ── Event Content ────────────────────────────────────────── */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              {/* Featured image */}
              {imgSrc && (
                <motion.div
                  variants={fadeUp}
                  custom={0}
                  className="mb-8 rounded-2xl overflow-hidden border border-cream-200"
                >
                  <img
                    src={imgSrc}
                    alt={event.title}
                    className="w-full h-auto"
                  />
                </motion.div>
              )}

              {/* Description */}
              <motion.div variants={fadeUp} custom={1} className="prose-poppy">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-cream-700 leading-relaxed mb-4 text-[15px]"
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside initial="hidden" animate="visible">
              <motion.div
                variants={fadeUp}
                custom={0}
                className="bg-surface rounded-2xl border border-cream-200 p-6 sticky top-24"
              >
                <h2 className="font-serif text-xl font-bold text-cream-900 mb-5">
                  Event Details
                </h2>

                <dl className="space-y-4 text-sm">
                  {/* Date */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-poppy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-4 h-4 text-poppy-600"
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
                    <div>
                      <dt className="font-semibold text-cream-900">Date</dt>
                      <dd className="text-cream-600">
                        {formatDate(event.date)}
                      </dd>
                    </div>
                  </div>

                  {/* Time */}
                  {timeStr && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-poppy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4 text-poppy-600"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M12 7v5l3 3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <dt className="font-semibold text-cream-900">Time</dt>
                        <dd className="text-cream-600">{timeStr}</dd>
                      </div>
                    </div>
                  )}

                  {/* Cost */}
                  {event.cost && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-poppy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4 text-poppy-600"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <dt className="font-semibold text-cream-900">
                          Admission
                        </dt>
                        <dd className="text-cream-600">{event.cost}</dd>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-poppy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-4 h-4 text-poppy-600"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 13a3 3 0 100-6 3 3 0 000 6z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 22s-8-4.5-8-11a8 8 0 1116 0c0 6.5-8 11-8 11z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <dt className="font-semibold text-cream-900">Location</dt>
                      <dd className="text-cream-600">
                        Red Poppy Art House
                        <br />
                        2698 Folsom St @ 23rd St
                        <br />
                        San Francisco, CA
                      </dd>
                    </div>
                  </div>
                </dl>

                {/* Action buttons */}
                <div className="mt-6 space-y-3">
                  {event.links.eventbrite && (
                    <a
                      href={event.links.eventbrite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M15.236 3.046c-1.753.56-3.127 1.736-4.069 3.188-.094.146-.13.157-.3.088a5.344 5.344 0 00-2.867-.476c-2.476.27-4.543 2.14-5.103 4.586a5.514 5.514 0 005.02 6.68c.32.022.643.005.963-.03.153-.017.205.015.268.15.725 1.563 1.866 2.71 3.437 3.376 2.844 1.207 6.13-.103 7.465-2.888a5.494 5.494 0 00-1.19-6.357c-.118-.114-.127-.177-.043-.318a5.474 5.474 0 00.722-3.576c-.322-2.57-2.456-4.628-5.042-4.96a5.6 5.6 0 00-.695-.043c-.19 0-.376.01-.566.03v.55z" />
                      </svg>
                      Get Tickets on Eventbrite
                    </a>
                  )}
                  {event.links.facebook && (
                    <a
                      href={event.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-medium border border-cream-300 text-cream-800 rounded-full hover:bg-cream-100 transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      View on Facebook
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── Venue Info ────────────────────────────────────────────── */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
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
