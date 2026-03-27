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

const pressArticles = [
  {
    title: "Backstage Heroes: The Red Poppy Art House Sustains SF's Underground",
    source: "KQED Arts",
    author: "Hiya Swanhuyser",
    date: "September 13, 2015",
  },
  {
    title: "Two New Albums Are Latest Blooms From S.F.'s Red Poppy Art House",
    source: "KQED Arts",
    author: "Andrew Gilbert",
    date: "June 27, 2015",
  },
  {
    title: "Spontaneous Expression by Red Poppy Art House",
    source: "SFO Museum",
    author: "",
    date: "December 2014",
  },
  {
    title: "How San Francisco helped Meklit Hadero find her voice",
    source: "KALW",
    author: "Martina Castro",
    date: "February 28, 2013",
  },
  {
    title: "Pop! @ Red Poppy Art House",
    source: "The Bold Italic",
    author: "Ari Salomon",
    date: "November 27, 2012",
  },
  {
    title: "Live Shots: Lulacruza at Red Poppy Art House",
    source: "SF Bay Guardian",
    author: "Ariel Soto-Suver",
    date: "April 25, 2012",
  },
  {
    title: "Live Shots: The Destiny Muhammad Jazz Trio at Red Poppy Art House",
    source: "SF Bay Guardian",
    author: "Ariel Soto-Suver",
    date: "November 21, 2011",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative bg-poppy-900 text-cream-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-earth-warm rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.nav variants={fadeUp} custom={0} aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-cream-300">
                <li><Link href="/" className="hover:text-cream-50 transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-cream-100">Blog</li>
              </ol>
            </motion.nav>

            <motion.h1 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Blog &amp; Press
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-xl text-cream-200 max-w-3xl leading-relaxed">
              News, stories, press coverage, and updates from the Red Poppy Art House.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Press & Articles */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-cream-900 mb-10">
            Press &amp; Media Coverage
          </motion.h2>

          <div className="space-y-4">
            {pressArticles.map((article, i) => (
              <motion.div key={article.title} variants={fadeUp} custom={i + 1}>
                <div className="bg-surface rounded-2xl border border-cream-200 p-6 hover:border-poppy-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-cream-900 mb-1">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-cream-600">
                        <span className="font-medium text-poppy-700">{article.source}</span>
                        {article.author && (
                          <>
                            <span>&middot;</span>
                            <span>{article.author}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-cream-500 whitespace-nowrap shrink-0">
                      {article.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Press Contact */}
      <section className="bg-cream-100 texture-paper">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-cream-900 mb-4">
              Press Inquiries
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-cream-700 max-w-xl mx-auto mb-6">
              For press inquiries, high-res images, and/or spots on media guest list,
              please contact Dina Zarif.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <a
                href="mailto:booking@redpoppyarthouse.org"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                Contact Press Team
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Note */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="bg-cream-100 rounded-2xl border border-cream-200 p-10 max-w-2xl mx-auto">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-poppy-50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-poppy-600" aria-hidden="true">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-cream-900 mb-3">
              More Stories Coming Soon
            </h3>
            <p className="text-cream-700 mb-6">
              We are building out our blog with artist spotlights, event recaps, and community stories. Follow us on social media for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.instagram.com/redpoppyart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors"
              >
                Follow @redpoppyart
              </a>
              <a
                href="https://www.facebook.com/RedPoppyArtHouse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold border border-cream-300 text-cream-800 rounded-full hover:bg-cream-200 transition-colors"
              >
                Facebook
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
