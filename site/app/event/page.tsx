"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import EventbriteWidget from "../components/EventbriteWidget";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const categories = [
  { name: "Performances", description: "Music, poetry, dance, literary events" },
  { name: "Exhibitions", description: "Rotating works and installations" },
  { name: "Workshops", description: "Hands-on creative sessions" },
  { name: "Residencies", description: "Works-in-progress showings" },
  { name: "MAPP Events", description: "Mission Arts & Performance Project" },
  { name: "Family Art", description: "Free bilingual programs for families" },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-earth-warm rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-poppy-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-poppy-800/60 text-poppy-100 rounded-full border border-poppy-700/40">
              150+ Events Annually
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            What&apos;s Happening at the Poppy
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            Performances two to three nights a week, typically Thursday through
            Sunday. Sliding scale admission, $15 to $25. Every dollar at the door
            is split with the performing artists.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Event Categories */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                custom={i}
                className="group relative"
              >
                <div className="px-4 py-2 bg-surface rounded-full border border-cream-200 text-sm font-medium text-cream-800 hover:border-poppy-200 hover:text-poppy-700 transition-colors cursor-default">
                  {cat.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eventbrite Widget */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-10">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
                Upcoming Events
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                Tickets and Registration
              </h2>
              <p className="text-cream-700 max-w-xl mx-auto">
                Browse our upcoming events below. You can also find us on
                Eventbrite for ticketing and RSVP.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <EventbriteWidget />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Follow */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                Stay in the Loop
              </h2>
              <p className="text-cream-700 max-w-lg mx-auto mb-8">
                Follow us on social media for the latest event announcements,
                artist spotlights, and behind-the-scenes moments from the Art
                House.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://www.instagram.com/redpoppyart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @redpoppyart on Instagram
                </a>
                <a
                  href="https://www.facebook.com/RedPoppyArtHouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium border border-cream-300 text-cream-800 rounded-full hover:bg-cream-100 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Venue Info */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
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

      {/* Booking CTA */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h3 className="font-serif text-2xl font-bold text-cream-900 mb-3">
                Want to Perform Here?
              </h3>
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
