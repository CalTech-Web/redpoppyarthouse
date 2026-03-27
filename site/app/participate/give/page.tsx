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

export default function GivePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50 min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero/collage-4.png" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
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
              <li>
                <Link href="/participate" className="hover:text-cream-50 transition-colors">
                  Participate
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-cream-50 font-medium">
                Give
              </li>
            </ol>
          </nav>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Support the Poppy
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            Donations of any amount provide pivotal support. Your generosity
            sustains the artists and programs that fill our 49-seat room with
            music, poetry, dance, and conversation every week.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Patron Membership */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
                Membership
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                Become a Patron
              </h2>
              <p className="text-lg text-cream-800 leading-relaxed mb-6">
                Join our membership base with a contribution as low as $5 to $10
                per month. Your steady support helps sustain the Poppy throughout
                the year and makes a significant investment in our transition to a
                formalized 501(c)(3) nonprofit.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="bg-[#fdf6e8]/80 rounded-xl border border-earth-warm/20 p-6 md:p-8 shadow-sm backdrop-blur-sm ring-1 ring-white/50"
            >
              <h3 className="font-serif text-xl font-bold text-cream-900 mb-4">
                Patron Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 shrink-0 rounded-full bg-earth-warm/15 text-earth-warm flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-cream-700 leading-relaxed">
                    Free entry for you and one guest to one performance of your
                    choice per month (RSVP required one week in advance)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 shrink-0 rounded-full bg-earth-warm/15 text-earth-warm flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-cream-700 leading-relaxed">
                    A private meet and greet for you and up to three guests with a
                    featured artist, hosted over dinner at the Art House once per
                    year
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Patreon */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full mb-4">
                Patreon
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                Support Us on Patreon
              </h2>
              <p className="text-cream-700 leading-relaxed mb-8">
                Your Patreon support funds specific needs across the Art House,
                from art materials for our free Family Art program to replacement
                lighting and sound equipment for performances.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="mb-8">
              <h3 className="font-serif text-lg font-bold text-cream-900 mb-4">
                What Your Support Funds
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-[#f3f7f0]/80 rounded-xl border border-earth-sage/20 p-5 shadow-sm backdrop-blur-sm ring-1 ring-white/50">
                  <p className="text-sm font-semibold text-cream-900 mb-1">Family Art</p>
                  <p className="text-xs text-cream-700 leading-relaxed">
                    Art materials for free arts activities for neighborhood youth
                  </p>
                </div>
                <div className="bg-[#fdf6e8]/80 rounded-xl border border-earth-warm/15 p-5 shadow-sm backdrop-blur-sm ring-1 ring-white/50">
                  <p className="text-sm font-semibold text-cream-900 mb-1">Equipment</p>
                  <p className="text-xs text-cream-700 leading-relaxed">
                    Lighting, sound gear, and paint for exhibitions
                  </p>
                </div>
                <div className="bg-[#f0f3ec]/80 rounded-xl border border-earth-olive/15 p-5 shadow-sm backdrop-blur-sm ring-1 ring-white/50">
                  <p className="text-sm font-semibold text-cream-900 mb-1">Residencies</p>
                  <p className="text-xs text-cream-700 leading-relaxed">
                    Free, accessible space for Artists-in-Residence
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="bg-poppy-800 text-cream-50 rounded-xl p-6 md:p-8"
            >
              <h3 className="font-serif text-xl font-bold mb-4">Patreon Rewards</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-poppy-300 mt-2" />
                  <p className="text-cream-200 text-sm leading-relaxed">
                    Invitation to the annual RPAH Patreon Gratitude Dinner
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-poppy-300 mt-2" />
                  <p className="text-cream-200 text-sm leading-relaxed">
                    Private viewings with a complimentary aperitif of any RPAH
                    exhibition, for you and three guests
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-poppy-300 mt-2" />
                  <p className="text-cream-200 text-sm leading-relaxed">
                    Priority entry and reserved seats for RPAH events
                  </p>
                </div>
              </div>
              <a
                href="https://patreon.com/RedPoppy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-6 px-6 py-2.5 text-sm font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-white transition-colors"
              >
                Visit Our Patreon
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                Other Ways to Give
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                variants={fadeUp}
                custom={1}
                className="bg-[#fdf6e8]/80 rounded-xl border border-earth-warm/15 p-6 shadow-sm backdrop-blur-sm ring-1 ring-white/50"
              >
                <h3 className="font-serif text-lg font-bold text-cream-900 mb-2">
                  Online Donations
                </h3>
                <p className="text-sm text-cream-700 leading-relaxed mb-3">
                  Make a one-time or recurring donation of any amount through our
                  fiscal sponsor, Intersection for the Arts, via the Flipcause
                  platform. You may also bring cash, check, or a debit/credit card
                  to any performance.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="bg-[#f3f7f0]/80 rounded-xl border border-earth-sage/20 p-6 shadow-sm backdrop-blur-sm ring-1 ring-white/50"
              >
                <h3 className="font-serif text-lg font-bold text-cream-900 mb-2">
                  Corporate Match via Benevity
                </h3>
                <p className="text-sm text-cream-700 leading-relaxed">
                  If your employer has a corporate matching program, search on
                  Benevity for Intersection for the Arts and select Red Poppy as the
                  recipient. Your donation gets doubled at no extra cost to you.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="bg-[#fdf0eb]/80 rounded-xl border border-earth-terracotta/15 p-6 shadow-sm backdrop-blur-sm ring-1 ring-white/50"
              >
                <h3 className="font-serif text-lg font-bold text-cream-900 mb-2">
                  Wish List
                </h3>
                <p className="text-sm text-cream-700 leading-relaxed">
                  One of the most accessible ways to help the Art House. We
                  maintain a running wish list of items we need. Email{" "}
                  <a
                    href="mailto:info@redpoppyarthouse.org"
                    className="text-poppy-700 hover:text-poppy-600 underline transition-colors"
                  >
                    info@redpoppyarthouse.org
                  </a>{" "}
                  to find out what is currently on the list.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ticket Philosophy */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium bg-poppy-700/60 text-poppy-200 rounded-full mb-4">
                Our Philosophy
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Where Your Ticket Goes
              </h2>
              <p className="text-cream-200 leading-relaxed max-w-2xl mx-auto mb-4">
                Door admissions from shows are always split with performing artists.
                The majority goes directly to the performers, with a small
                percentage supporting Red Poppy operating costs.
              </p>
              <p className="text-cream-200 leading-relaxed max-w-2xl mx-auto">
                We invite you to think of your contribution as a direct
                &quot;audience grant&quot; supporting the arts economy of San
                Francisco. When you walk through our door and pay sliding scale
                admission, you are funding the artists who make this city vibrant.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fiscal Sponsor Note */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-sm text-cream-700">
            Red Poppy Art House is fiscally sponsored by{" "}
            <span className="font-semibold text-cream-800">
              Intersection for the Arts
            </span>{" "}
            (EIN 94-1593216). All donations are tax-deductible to the fullest
            extent of the law.
          </p>
        </div>
      </section>
    </main>
  );
}
