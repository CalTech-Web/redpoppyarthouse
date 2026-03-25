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

export default function VolunteerPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-earth-warm rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-poppy-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-4"
          >
            <Link
              href="/participate"
              className="inline-flex items-center gap-2 text-sm text-poppy-200 hover:text-cream-50 transition-colors"
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
              Participate
            </Link>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Volunteer at the Poppy
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            The Red Poppy Art House is primarily an artist and volunteer-run
            organization. Volunteers play an integral role in everyday operations,
            from setting up the performance space to welcoming guests at the door.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Why Volunteer */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <p className="text-lg md:text-xl text-cream-800 leading-relaxed mb-6">
                We produce 150 events annually and are always looking for people to
                come out once or twice a month to help. You do not need special
                skills or experience. Just bring yourself and a willingness to be
                part of something good.
              </p>
              <p className="text-cream-700 leading-relaxed">
                Each night at the Poppy requires two volunteers. That means you can
                sign up with a friend and share the experience together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefit Highlight */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-poppy-700/60 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8 text-poppy-200"
                  aria-hidden="true"
                >
                  <path
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5zM5 12a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 00-2-2H5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Your Reward
              </h2>
              <p className="text-cream-200 text-lg max-w-lg mx-auto">
                For every shift you work, you receive one free pass to another
                Poppy event of your choice. Come for the community, stay for the
                show.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What a Shift Looks Like */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-10">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-olive bg-earth-sage/20 rounded-full mb-4">
                What to Expect
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                What a Volunteer Shift Looks Like
              </h2>
              <p className="text-cream-700 max-w-2xl">
                Each event night, two volunteers share the work. One handles
                the door, the other runs the counter.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeUp}
                custom={1}
                className="bg-cream-50 rounded-xl border border-cream-200 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-poppy-50 text-poppy-700 flex items-center justify-center mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-cream-900 mb-2">
                  Admissions at the Door
                </h3>
                <p className="text-sm text-cream-700 leading-relaxed">
                  Welcome guests as they arrive, handle ticket sales and check-ins,
                  and set the warm, inviting tone that makes the Poppy special.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={2}
                className="bg-cream-50 rounded-xl border border-cream-200 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-poppy-50 text-poppy-700 flex items-center justify-center mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-cream-900 mb-2">
                  Concessions at the Counter
                </h3>
                <p className="text-sm text-cream-700 leading-relaxed">
                  Serve drinks and snacks, keep the counter stocked and tidy, and
                  chat with audience members during intermissions and after the show.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 bg-cream-50 rounded-xl border border-cream-200 p-6"
            >
              <h3 className="font-serif text-lg font-bold text-cream-900 mb-2">
                Before the Show
              </h3>
              <p className="text-sm text-cream-700 leading-relaxed">
                You will also help set up the performance space, arrange chairs,
                and engage with guests and community members as they settle in for
                the evening.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sign Up CTA */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                Ready to Help?
              </h2>
              <p className="text-cream-700 max-w-lg mx-auto mb-8">
                Send us an email and we will get you on the schedule. Remember, you
                can bring a friend.
              </p>
              <a
                href="mailto:volunteer@redpoppyarthouse.org"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors shadow-sm"
              >
                Email volunteer@redpoppyarthouse.org
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
