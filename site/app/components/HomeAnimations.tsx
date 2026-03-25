"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

/* ─── Hero Animated Wrapper ─── */
export function HeroAnimated({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
      {children}
    </motion.div>
  );
}

export function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={1}
      className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
    >
      {children}
    </motion.h1>
  );
}

export function HeroSubtext({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={2}
      className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl mb-10"
    >
      {children}
    </motion.p>
  );
}

export function HeroCTA() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={3}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Link
        href="/event"
        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-white transition-colors shadow-lg shadow-poppy-900/20"
      >
        View Upcoming Events
      </Link>
      <Link
        href="/about"
        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium border-2 border-cream-200/30 text-cream-100 rounded-full hover:bg-cream-50/10 transition-colors"
      >
        Our Story
      </Link>
    </motion.div>
  );
}

/* ─── Tagline Section ─── */
export function TaglineSection() {
  return (
    <section className="bg-cream-100 border-b border-cream-300/50">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-xl md:text-2xl text-cream-800 italic leading-relaxed"
        >
          &quot;An old world cafe crossed with a painter&apos;s studio and
          living room.&quot;
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Community Stats ─── */
const communityHighlights = [
  {
    stat: "150+",
    label: "Events Annually",
    description: "Performances, exhibitions, workshops, and residencies each year",
  },
  {
    stat: "20+",
    label: "Years in the Mission",
    description: "Serving the neighborhood from the same corner since 2003",
  },
  {
    stat: "49",
    label: "Seats, Infinite Stories",
    description: "An intimate 650 sq ft space where artists and audiences connect",
  },
];

export function CommunityStats() {
  return (
    <section className="bg-cream-50 texture-paper">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {communityHighlights.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              custom={i}
              className="text-center md:text-left"
            >
              <div className="font-serif text-5xl md:text-6xl font-bold text-poppy-700 mb-2">
                {item.stat}
              </div>
              <div className="text-lg font-semibold text-cream-900 mb-2">
                {item.label}
              </div>
              <p className="text-sm text-cream-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Upcoming Events Teaser ─── */
export function UpcomingEventsTeaser() {
  return (
    <section className="bg-surface border-y border-cream-200">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
              What&apos;s Happening
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Upcoming at the Poppy
            </h2>
            <p className="text-cream-700 max-w-2xl mx-auto">
              Two to three nights a week, Thursday through Sunday, our 49-seat
              room fills with music, poetry, dance, and conversation. Sliding
              scale admission, typically $15 to $25. Every dollar at the door
              goes primarily to the performing artists.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <div className="bg-cream-50 rounded-2xl border border-cream-200 p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-poppy-50 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8 text-poppy-600"
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
                  <path
                    d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream-900 mb-3">
                Events Calendar Coming Soon
              </h3>
              <p className="text-cream-700 mb-6 max-w-lg mx-auto">
                We are working on bringing our full events calendar online.
                In the meantime, follow us on social media for the latest
                happenings.
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
                  Follow @redpoppyart
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Programs Section ─── */
const programs = [
  {
    title: "Performance Series",
    description:
      "Diverse and international artists working in traditional and contemporary performing arts, from music and poetry to dance and literary events.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M9 19V6l12-3v13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Exhibitions",
    description:
      "Rotating works and socially engaged large-scale installations featuring artists connected to the Mission District and beyond.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 16l5-5 4 4 3-3 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Artist Residencies",
    description:
      "Free and accessible space for artists-in-residence to rehearse, develop, and explore new collaborative and interdisciplinary work.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Family Art",
    description:
      "Free bilingual (Spanish/English) art programming for families in the Mission District, nurturing creativity across generations for over a decade.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "MAPP",
    description:
      "The Mission Arts and Performance Project - a bi-monthly, multidisciplinary, intercultural happening incubated by the Art House since 2003.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "FRESH Festival",
    description:
      "San Francisco's annual festival of experimental dance, music, and performance, starting the new year with an extravaganza of embodied art.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Mission Stoop Fest",
    description:
      "A civil society arts experiment on front stoops where traditional and contemporary artists perform and local residents share their stories.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Development Track",
    description:
      "PRESENCE, our professional development cohort offering training in community arts presentation through workshops and visiting artist sessions.",
    href: "/programs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M22 10v6M2 10l10-5 10 5-10 5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ProgramsSection() {
  return (
    <section className="bg-cream-50 texture-paper">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-olive bg-earth-sage/20 rounded-full mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Our Programs
            </h2>
            <p className="text-cream-700 max-w-2xl mx-auto">
              From performances and exhibitions to community art programs and
              artist residencies, the Poppy is a space of encounter where
              multiple cultural groups interconnect.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                variants={fadeUp}
                custom={i + 1}
              >
                <Link
                  href={program.href}
                  className="group block bg-surface rounded-xl border border-cream-200 p-6 hover:border-poppy-200 hover:shadow-lg hover:shadow-poppy-900/5 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-poppy-50 text-poppy-700 flex items-center justify-center mb-4 group-hover:bg-poppy-100 transition-colors">
                    {program.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-cream-900 mb-2 group-hover:text-poppy-800 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-cream-700 leading-relaxed">
                    {program.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            custom={programs.length + 1}
            className="text-center mt-10"
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-poppy-700 font-medium hover:text-poppy-600 transition-colors group"
            >
              Explore all programs
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About / Community Section ─── */
export function AboutCommunitySection() {
  return (
    <section className="bg-poppy-800 text-cream-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-earth-warm rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-56 h-56 bg-poppy-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium bg-poppy-700/60 text-poppy-200 rounded-full mb-6">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              A bridge between artistic work and community life
            </h2>
            <p className="text-cream-200 leading-relaxed mb-6">
              The Poppy is an artist-driven organization that seeks to
              empower and transform society by addressing current social
              issues through creative processes. We forge a bridge between
              high caliber artistic work and community life through
              visibility and inclusiveness.
            </p>
            <p className="text-cream-200 leading-relaxed mb-8">
              Founded in 2003 as a &quot;space of encounter,&quot; we
              demonstrate the unique, powerful, and irreplaceable capacity
              of intimate community spaces through hosting over 150 diverse
              events annually.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-white transition-colors"
            >
              Learn Our Story
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <div className="bg-poppy-700/40 rounded-2xl border border-poppy-600/30 p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold mb-6">
                Get Involved
              </h3>
              <div className="space-y-5">
                <Link
                  href="/participate/volunteer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-poppy-600/40 flex items-center justify-center mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-poppy-200"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-cream-50 group-hover:text-poppy-200 transition-colors">
                      Volunteer
                    </div>
                    <p className="text-sm text-cream-300">
                      Help with event productions and earn free passes to
                      Poppy events
                    </p>
                  </div>
                </Link>

                <Link
                  href="/participate/give"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-poppy-600/40 flex items-center justify-center mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-poppy-200"
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
                    <div className="font-semibold text-cream-50 group-hover:text-poppy-200 transition-colors">
                      Donate
                    </div>
                    <p className="text-sm text-cream-300">
                      Support the arts economy of San Francisco with a
                      contribution of any amount
                    </p>
                  </div>
                </Link>

                <Link
                  href="/participate/performance-booking"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-poppy-600/40 flex items-center justify-center mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-poppy-200"
                      aria-hidden="true"
                    >
                      <path
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-cream-50 group-hover:text-poppy-200 transition-colors">
                      Perform
                    </div>
                    <p className="text-sm text-cream-300">
                      Interested in performing at the Poppy? Submit a
                      booking inquiry
                    </p>
                  </div>
                </Link>

                <Link href="/rentals" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-poppy-600/40 flex items-center justify-center mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-poppy-200"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 22V12h6v10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-cream-50 group-hover:text-poppy-200 transition-colors">
                      Rent the Space
                    </div>
                    <p className="text-sm text-cream-300">
                      A cozy 650 sq ft venue with kitchen, piano, and sound
                      equipment
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Visit Us Section ─── */
export function VisitUsSection() {
  return (
    <section className="bg-cream-100 border-t border-cream-200">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full mb-4">
              Visit Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Find Us on the Corner
            </h2>
            <p className="text-cream-700 max-w-xl mx-auto mb-10">
              We are located at 2698 Folsom Street at 23rd Street in San
              Francisco&apos;s Mission District.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-surface rounded-xl border border-cream-200 p-6">
              <div className="font-semibold text-cream-900 mb-2">
                Address
              </div>
              <p className="text-sm text-cream-700">
                2698 Folsom St
                <br />
                San Francisco, CA 94110
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-cream-200 p-6">
              <div className="font-semibold text-cream-900 mb-2">
                Performances
              </div>
              <p className="text-sm text-cream-700">
                Thu - Sat
                <br />
                7:00pm - 10:00pm
              </p>
            </div>
            <div className="bg-surface rounded-xl border border-cream-200 p-6 sm:col-span-2 md:col-span-1">
              <div className="font-semibold text-cream-900 mb-2">
                Contact
              </div>
              <p className="text-sm text-cream-700">
                (650) 731-5383
                <br />
                <a
                  href="mailto:info@redpoppyarthouse.org"
                  className="text-poppy-700 hover:text-poppy-600 transition-colors"
                >
                  info@redpoppyarthouse.org
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
