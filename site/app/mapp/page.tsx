"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function MappPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative bg-poppy-900 text-cream-50 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/venue/mapp-collage.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <motion.div initial="hidden" animate="visible">
            <motion.nav variants={fadeUp} custom={0} aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-cream-300">
                <li><Link href="/" className="hover:text-cream-50 transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-cream-100">MAPP</li>
              </ol>
            </motion.nav>

            <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-poppy-800/60 text-poppy-200 rounded-full border border-poppy-700/40 mb-6">
              Since 2003
            </motion.span>

            <motion.h1 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mission Arts &amp; Performance Project
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-xl text-cream-200 max-w-3xl leading-relaxed">
              A homegrown bi-monthly, multidisciplinary, intercultural happening that takes place in the Mission District of San Francisco.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About MAPP */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-cream-900 mb-6">What is MAPP?</h2>
              <p className="text-cream-800 leading-relaxed mb-4 text-lg">
                Launched in 2003, the Mission Arts &amp; Performance Project (MAPP) is a
                homegrown bi-monthly, multidisciplinary, intercultural happening that takes
                place in the Mission District of San Francisco.
              </p>
              <p className="text-cream-700 leading-relaxed mb-4">
                On the first Saturday of every even month of the year, the MAPP transforms
                ordinary spaces - private garages, gardens, living rooms, studios, street
                corners, and small businesses - into pop-up performance and exhibition sites
                for a day/night of intimate-scale artistic and cultural exchange among a
                kaleidoscope of individuals and communities.
              </p>
              <p className="text-cream-700 leading-relaxed mb-6">
                What began as the &quot;Mission Arts Party&quot; staged by a small group of
                artists operating out of the original Red Poppy space has grown into a
                neighborhood-wide community arts festival that continues to this day,
                connecting artists with audiences in the most intimate and unexpected settings.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/venue/mapp-collage.jpg"
                alt="MAPP - Mission Arts and Performance Project collage showing various performances and community events"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-poppy-900/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* How to Participate */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-cream-900 mb-4">
            Be Part of MAPP
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-cream-700 max-w-2xl mx-auto mb-8">
            MAPP is an open, community-driven event. Artists, venues, and community members
            are welcome to participate. If you&apos;d like to host a pop-up event, open your
            space, or perform during MAPP, get in touch.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@redpoppyarthouse.org"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
            >
              Contact Us to Participate
            </a>
            <Link
              href="/participate/volunteer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold border-2 border-cream-300 text-cream-800 rounded-full hover:bg-cream-100 transition-colors"
            >
              Volunteer for MAPP
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
