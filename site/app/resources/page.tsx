"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const partners = [
  {
    name: "Yerba Buena Gardens Festival",
    description: "An independent presenting organization for free artistic programs taking place in Yerba Buena Gardens.",
    url: "https://ybgfestival.org",
  },
  {
    name: "Litquake",
    description: "San Francisco's premier literary festival, home of the legendary Lit Crawl.",
    url: "https://www.litquake.org",
  },
  {
    name: "Cine+Mas SF",
    description: "San Francisco's Latino Film Festival, showcasing the best of Latin American and Latino cinema.",
    url: "https://cineplusmas.com",
  },
  {
    name: "FRESH Festival",
    description: "A body-based art, action, and interaction festival established in 2010 by ALTERNATIVA.",
    url: null,
  },
  {
    name: "SF International Arts Festival",
    description: "Since 2024, Red Poppy Art House has proudly served as a venue for SFIAF, which has coordinated performances from over 700 artistic ensembles from California and 60 other countries.",
    url: "https://www.sfiaf.org",
  },
];

const supporters = [
  "Intersection for the Arts",
  "California Arts Council",
  "Kenneth Rainin Foundation",
  "San Francisco Arts Commission",
  "Grants for the Arts",
  "Zellerbach Family Foundation",
  "James Irvine Foundation",
  "Sam Mazza Foundation",
  "Center for Cultural Innovation",
  "Fleishhacker Foundation",
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative bg-poppy-900 text-cream-50 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/collage-1.png" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
          <motion.div initial="hidden" animate="visible">
            <motion.nav variants={fadeUp} custom={0} aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-cream-300">
                <li><Link href="/" className="hover:text-cream-50 transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-cream-100">Resources</li>
              </ol>
            </motion.nav>

            <motion.h1 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Resources
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-xl text-cream-200 max-w-3xl leading-relaxed">
              Our community and curatorial partners, supporters, and resources for artists
              and arts organizations in the Bay Area.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Community & Curatorial Partners */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-cream-900 mb-10">
            Community &amp; Curatorial Partners
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {partners.map((partner, i) => (
              <motion.div key={partner.name} variants={fadeUp} custom={i + 1}>
                <div className={`rounded-2xl p-6 shadow-sm backdrop-blur-sm ring-1 ring-white/50 hover:shadow-lg hover:shadow-cream-800/8 hover:-translate-y-0.5 transition-all duration-300 h-full ${["bg-[#fdf6e8]/80 border border-earth-warm/15", "bg-[#f3f7f0]/80 border border-earth-olive/15", "bg-[#fdf0eb]/80 border border-earth-terracotta/15", "bg-[#f0f3ec]/80 border border-earth-sage/15", "bg-[#f7f0eb]/80 border border-earth-clay/15"][i % 5]}`}>
                  <h3 className="font-serif text-lg font-bold text-cream-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-cream-700 leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-poppy-700 hover:text-poppy-600 transition-colors"
                    >
                      Visit Website
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                        <path d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" />
                        <path d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Supporters */}
      <section className="bg-cream-100 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-cream-900 mb-10 text-center">
              Our Supporters
            </motion.h2>

            <motion.div variants={fadeUp} custom={1} className="flex flex-wrap justify-center gap-4">
              {supporters.map((name, i) => (
                <span key={name} className={`rounded-full px-5 py-2.5 text-sm font-medium text-cream-800 shadow-sm ${["bg-[#f3f7f0] border border-earth-sage/20", "bg-[#fdf6e8] border border-earth-warm/15", "bg-[#fdf0eb] border border-earth-terracotta/15", "bg-[#f0f3ec] border border-earth-olive/15"][i % 4]}`}>
                  {name}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fiscal Sponsor */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-cream-900 mb-4">
            Fiscal Sponsor
          </motion.h2>
          <motion.div variants={fadeUp} custom={1} className="bg-gradient-to-r from-[#f3f7f0]/80 to-[#fdf6e8]/80 rounded-2xl border border-earth-sage/20 backdrop-blur-sm ring-1 ring-white/50 p-8 shadow-sm max-w-2xl mx-auto">
            <p className="text-cream-700 leading-relaxed mb-4">
              We are a member of Intersection for the Arts. Intersection for the Arts is a
              historic arts nonprofit that provides people working in arts and culture with
              fiscal sponsorship and resources to grow.
            </p>
            <p className="text-sm text-cream-600">EIN: 94-1593216</p>
            <a
              href="https://theintersection.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-poppy-700 hover:text-poppy-600 transition-colors"
            >
              Visit Intersection for the Arts
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" />
                <path d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
