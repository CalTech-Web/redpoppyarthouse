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

const programs = [
  {
    title: "Performance Series",
    tagline: "Music, poetry, dance, and literary events on our intimate stage",
    description:
      "A diverse and international program of artists working in both traditional and contemporary performing arts. Two to three nights a week, our 49-seat room fills with music, poetry, dance, lectures, and literary events. Sliding scale admission is typically $15 to $25, with door admissions split directly with performing artists.",
    href: "/pages/performance-series",
    color: "poppy",
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
    tagline: "Rotating works and socially engaged installations",
    description:
      "Rather than hosting formal exhibitions, the Poppy presents works throughout the year via informal rotations of art for sale alongside socially engaged large-scale installation pieces. Featured artists have included Paz de la Calzada, Alberto Toscano, Fernando Diaz, Yolanda Lopez, and Adriana Camarena.",
    href: "/pages/exhibitions",
    color: "earth-warm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Artist Residencies",
    tagline: "Free space for artists to rehearse, develop, and explore",
    description:
      "The Art House provides free and accessible space for Artists-in-Residence. Our Crossover Collaborative Residencies, supported by the Kenneth Rainin Foundation and San Francisco Arts Commission, pair choreographer-dancers with composer-musicians for interdisciplinary work. The program moves through four stages, from orientation workshops to raw presentations, community-engaged showings, and final performances.",
    href: "/pages/artist-residencies",
    color: "earth-olive",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "MAPP",
    tagline: "Mission Arts and Performance Project",
    description:
      "Incubated by the Red Poppy Art House in 2003, MAPP is a homegrown bi-monthly, multidisciplinary, intercultural happening across the Mission District. What started as the \"Mission Arts Party\" at the end of 2003 continues today as a neighborhood-wide arts event that brings together community, culture, and creativity on the streets of the Mission.",
    href: "/mapp",
    color: "earth-terracotta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Family Art",
    tagline: "Arte entre Familia - free bilingual art for all ages",
    description:
      "For over a decade, Family Art (also called \"Arte entre Familia\") has offered free, bilingual Spanish and English art programming for families in the Mission District. Held on Saturdays outdoors on the corner of Folsom Street and 23rd Street, the program invites all families with children ages 0 to 5, youth, and adults to explore open-ended art projects in a safe and creative space. Supported by the Sam Mazza Foundation and Art4Moore.",
    href: "/pages/family-art",
    color: "earth-clay",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mission Stoop Fest",
    tagline: "Art and storytelling on front stoops across the neighborhood",
    description:
      "A civil society arts experiment on front stoops of local residences in the Mission District. Traditional and contemporary artists perform while local residents share stories and histories from their doorsteps. The front stoop represents a literal threshold between public and private spheres. Stoop Fest provides a program and map of multiple neighborhood stoops and occurs during the day on the same bi-monthly dates as MAPP.",
    href: "/pages/mission-stoop-fest",
    color: "poppy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SF Youth Theatre",
    tagline: "Cutting-edge theater for children and youth ages 3 to 24",
    description:
      "San Francisco Youth Theatre (SFYT) brings cutting-edge theater to children and youth ages 3 to 24. The program offers classes and performance ensembles, produces adult-performed productions for young audiences, facilitates school residencies, and maintains a repertoire of original productions that engage and inspire the next generation of artists.",
    href: "/pages/san-francisco-youth-theatre",
    color: "earth-warm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "SF International Arts Festival",
    tagline: "A global community of artists under one roof",
    description:
      "Since 2024, Red Poppy Art House has proudly served as a venue for the San Francisco International Arts Festival (SFIAF), continuing our commitment to fostering cross-cultural artistic engagement. SFIAF has coordinated performances from over 700 artistic ensembles from California and 60 other countries.",
    href: "/pages/san-francisco-international-arts-festival",
    color: "earth-terracotta",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "FRESH Festival",
    tagline: "San Francisco's annual festival of experimental performance",
    description:
      "FRESH Festival is San Francisco's annual festival of experimental dance, music, and performance, kicking off the new year with an extravaganza of embodied art, action, and interaction. FRESH Exchanges include RIPE (raw and intimate performance experiments), POTLUCK social practice gatherings with warm food, and the Alternative Conservatory with lectures, panels, and workshops. Affordable social events designed to cultivate, cross-pollinate, and invigorate the performance community.",
    href: "/pages/fresh-festival",
    color: "earth-olive",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-poppy-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-earth-warm rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-poppy-200">
              <li>
                <Link href="/" className="hover:text-cream-50 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-cream-50 font-medium">
                Programs
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
              Programs
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Where art meets community
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            From live performances and exhibitions to neighborhood happenings and
            free family programming, the Poppy hosts over 150 events each year in
            our intimate 49-seat room and on the streets of the Mission District.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Programs Grid */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
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
                Each program reflects the Poppy&apos;s commitment to
                accessibility, inclusiveness, and the intersection of cultural
                and inter-generational artistic engagement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, i) => (
                <motion.div
                  key={program.title}
                  variants={fadeUp}
                  custom={i + 1}
                  className={`rounded-xl border-l-4 p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-cream-800/8 hover:-translate-y-0.5 transition-all duration-300 ${
                    [
                      "bg-[#fdf0eb] border border-earth-terracotta/15 border-l-earth-terracotta/40",
                      "bg-[#fdf6e8] border border-earth-warm/15 border-l-earth-warm/40",
                      "bg-[#f3f7f0] border border-earth-olive/15 border-l-earth-olive/40",
                      "bg-[#f0f3ec] border border-earth-sage/15 border-l-earth-sage/40",
                      "bg-[#f7f0eb] border border-earth-clay/15 border-l-earth-clay/40",
                      "bg-cream-100 border border-cream-300/50 border-l-cream-500/40",
                      "bg-[#fdf6e8] border border-earth-warm/15 border-l-earth-warm/40",
                      "bg-[#f3f7f0] border border-earth-olive/15 border-l-earth-olive/40",
                      "bg-[#fdf0eb] border border-earth-terracotta/15 border-l-earth-terracotta/40",
                    ][i % 9]
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center ${
                      [
                        "bg-earth-terracotta/10 text-earth-terracotta",
                        "bg-earth-warm/10 text-earth-warm",
                        "bg-earth-olive/10 text-earth-olive",
                        "bg-earth-sage/20 text-earth-olive",
                        "bg-earth-clay/10 text-earth-clay",
                        "bg-cream-200 text-cream-700",
                        "bg-earth-warm/10 text-earth-warm",
                        "bg-earth-olive/10 text-earth-olive",
                        "bg-earth-terracotta/10 text-earth-terracotta",
                      ][i % 9]
                    }`}>
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-cream-900">
                        {program.title}
                      </h3>
                      <p className="text-sm text-poppy-700 font-medium mt-0.5">
                        {program.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-cream-700 leading-relaxed mb-4">
                    {program.description}
                  </p>
                  {program.href && (
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-poppy-700 hover:text-poppy-600 transition-colors"
                    >
                      Learn More
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Track Highlight */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full mb-4">
                Professional Development
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                PRESENCE - Development Track
              </h2>
              <p className="text-cream-700 leading-relaxed mb-4">
                PRESENCE is the Red Poppy Art House Development Cohort, a
                socially engaged professional development track offering
                training in community arts presentation through workshops and
                internships.
              </p>
              <p className="text-cream-700 leading-relaxed mb-6">
                Visiting artists and cultural workers lead sessions in a fertile,
                informal space designed for gathering, discussion, and artistic
                cross-pollination. The program prepares emerging cultural
                practitioners for meaningful, community-connected work in the
                arts.
              </p>
              <a
                href="mailto:info@redpoppyarthouse.org"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors"
              >
                Inquire About the Program
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Want to participate?
              </h2>
              <p className="text-cream-200 max-w-lg mx-auto mb-6">
                Whether you want to perform, exhibit, volunteer, or simply attend
                a show, the Poppy welcomes you. Reach out or stop by during hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/participate"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-white transition-colors"
                >
                  Ways to Participate
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border-2 border-cream-200/30 text-cream-100 rounded-full hover:bg-cream-50/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
