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

const participateOptions = [
  {
    title: "Volunteer",
    description:
      "We produce 150 events a year, and volunteers make every one of them possible. Sign up with a friend, work a shift, and earn a free pass to another Poppy show.",
    href: "/participate/volunteer",
    color: "poppy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Give",
    description:
      "From $5-a-month patron memberships to Patreon support and one-time donations, every contribution sustains the artists and programs that fill this room.",
    href: "/participate/give",
    color: "earth-warm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path
          d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Performance Booking",
    description:
      "If you are an artist working in music, poetry, dance, theater, or any performing discipline, we want to hear from you. Our stage has hosted hundreds of artists across traditions.",
    href: "/pages/performance-booking",
    color: "earth-olive",
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
    title: "Internships",
    description:
      "Gain hands-on experience in event production, community engagement, public relations, and social media through a 9-month internship program with stipend support.",
    href: "/pages/internships",
    color: "earth-terracotta",
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
  {
    title: "Employment",
    description:
      "We occasionally have paid openings for part-time and project-based roles. Reach out to learn about current opportunities at the Art House.",
    href: "/pages/employment",
    color: "earth-clay",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ParticipatePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50 min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/events/janam.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
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
                Participate
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
              Participate
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            This place runs on people who show up
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            The Red Poppy Art House is artist-driven and volunteer-run. That means
            every show, every program, every open door is made possible by people
            in this community who choose to give their time, talent, or support.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Participate Options */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                Ways to Get Involved
              </h2>
              <p className="text-cream-700 max-w-xl mx-auto">
                Pick the path that fits you. There is no wrong way to be part of
                the Poppy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {participateOptions.map((option, i) => (
                <motion.div key={option.title} variants={fadeUp} custom={i + 1}>
                  <Link
                    href={option.href}
                    className={`group block rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-cream-800/8 hover:-translate-y-0.5 transition-all duration-300 h-full backdrop-blur-sm ring-1 ring-white/50 ${["bg-[#fdf0eb]/80 border border-earth-terracotta/15", "bg-[#fdf6e8]/80 border border-earth-warm/15", "bg-[#f3f7f0]/80 border border-earth-olive/15", "bg-[#f0f3ec]/80 border border-earth-sage/15", "bg-[#f7f0eb]/80 border border-earth-clay/15"][i % 5]}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-poppy-50 text-poppy-700 flex items-center justify-center mb-4 group-hover:bg-poppy-100 transition-colors">
                      {option.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-cream-900 mb-3 group-hover:text-poppy-800 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-cream-700 leading-relaxed">
                      {option.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-poppy-700 group-hover:text-poppy-600 transition-colors">
                      {option.href.startsWith("mailto") ? "Email us" : "Learn more"}
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
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship Details */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-olive bg-earth-sage/20 rounded-full mb-4">
                Internships
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                Learn by Doing
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeUp}
                custom={1}
                className="bg-[#f3f7f0]/80 rounded-xl border border-earth-sage/20 p-6 shadow-sm backdrop-blur-sm ring-1 ring-white/50"
              >
                <h3 className="font-serif text-lg font-bold text-cream-900 mb-3">
                  Event Production Internship
                </h3>
                <p className="text-sm text-cream-700 leading-relaxed mb-4">
                  Approximately 20 to 25 hours per month over a 9-month period.
                  Training covers technical production, community engagement, public
                  speaking, personnel management, donor asks, and basic accounting.
                </p>
                <p className="text-sm text-cream-700 leading-relaxed">
                  Includes stipend support upon completion of training, plus free
                  attendance to all 130+ annual performances at the Poppy.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="bg-[#fdf6e8]/80 rounded-xl border border-earth-warm/15 p-6 shadow-sm backdrop-blur-sm ring-1 ring-white/50"
              >
                <h3 className="font-serif text-lg font-bold text-cream-900 mb-3">
                  PR and Social Media Internship
                </h3>
                <p className="text-sm text-cream-700 leading-relaxed mb-4">
                  Gain experience in artist coordination, public relations, social
                  media marketing, web management, and event promotion for a vibrant
                  community arts organization.
                </p>
                <p className="text-sm text-cream-700 leading-relaxed">
                  Contact{" "}
                  <a
                    href="mailto:info@redpoppyarthouse.org"
                    className="text-poppy-700 hover:text-poppy-600 underline transition-colors"
                  >
                    info@redpoppyarthouse.org
                  </a>{" "}
                  to learn more about current openings.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
