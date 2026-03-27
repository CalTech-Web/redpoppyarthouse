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

const amenities = [
  {
    title: "Small Kitchen",
    description: "Prep space for catering, refreshments, and event hospitality",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Sound Equipment",
    description: "Quality live performance sound system ready for your event",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Pleyel Piano",
    description: "A French-made Pleyel upright piano available for performances",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M9 19V6l12-3v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Natural Light",
    description: "Beautiful natural light throughout the day with cozy nooks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cancellationPolicy = [
  {
    timeframe: "30+ days in advance",
    refund: "Full refund",
    color: "bg-earth-sage/20 text-earth-olive",
  },
  {
    timeframe: "30 to 7 days in advance",
    refund: "50% refund",
    color: "bg-earth-warm/10 text-earth-warm",
  },
  {
    timeframe: "Less than 7 days",
    refund: "Non-refundable",
    color: "bg-poppy-50 text-poppy-700",
  },
];

export default function RentalsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-earth-warm rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-poppy-400 rounded-full blur-3xl" />
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
                Rentals
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
              Rent the Space
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Your event, our corner
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            A cozy 650-square-foot space seating up to 49, equipped with
            everything you need for an intimate gathering, reception, or
            performance in the heart of the Mission District.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Space Details & Amenities */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            {/* Space Overview */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
                The Space
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                A Room With Character
              </h2>
              <p className="text-cream-700 leading-relaxed mb-4">
                The Red Poppy Art House is a homey 650-square-foot storefront
                venue on the corner of Folsom and 23rd Street. It carries the
                charm of an old world cafe crossed with a painter&apos;s studio
                and living room.
              </p>
              <p className="text-cream-700 leading-relaxed mb-6">
                The space seats up to 49 people and is ideal for receptions,
                private performances, workshops, gatherings, and community
                events. Whether you need a stage for live music or a warm room
                for a celebration, the Poppy provides an intimate setting unlike
                any other.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#fdf6e8] rounded-xl border border-earth-warm/20 border-t-4 border-t-earth-warm/30 p-4 text-center shadow-sm">
                  <div className="font-serif text-3xl font-bold text-earth-warm">650</div>
                  <div className="text-sm text-cream-700">Square feet</div>
                </div>
                <div className="bg-[#f3f7f0] rounded-xl border border-earth-sage/20 border-t-4 border-t-earth-olive/30 p-4 text-center shadow-sm">
                  <div className="font-serif text-3xl font-bold text-earth-warm">49</div>
                  <div className="text-sm text-cream-700">Seats</div>
                </div>
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div variants={fadeUp} custom={1}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-olive bg-earth-sage/20 rounded-full mb-4">
                Amenities
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                What&apos;s Included
              </h2>
              <div className="space-y-4">
                {amenities.map((amenity, i) => {
                  const cardClasses = [
                    "bg-[#fdf6e8] border-l-4 border-l-earth-warm/30 border border-earth-warm/15",
                    "bg-[#f3f7f0] border-l-4 border-l-earth-olive/30 border border-earth-olive/15",
                    "bg-[#fdf0eb] border-l-4 border-l-earth-terracotta/30 border border-earth-terracotta/15",
                    "bg-[#f0f3ec] border-l-4 border-l-earth-sage/30 border border-earth-sage/15",
                  ][i % 4];
                  const iconClasses = [
                    "bg-earth-warm/10 text-earth-warm",
                    "bg-earth-olive/10 text-earth-olive",
                    "bg-earth-terracotta/10 text-earth-terracotta",
                    "bg-earth-sage/20 text-earth-sage",
                  ][i % 4];
                  return (
                    <div
                      key={amenity.title}
                      className={`flex items-start gap-4 rounded-xl p-5 shadow-sm ${cardClasses}`}
                    >
                      <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center mt-0.5 ${iconClasses}`}>
                        {amenity.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-cream-900 mb-1">
                          {amenity.title}
                        </h3>
                        <p className="text-sm text-cream-700">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rates & Policies */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            {/* Rates */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full mb-4">
                Rates
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                Rental Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-[#fdf6e8] rounded-xl border border-earth-warm/15 border-l-4 border-l-earth-warm/40 p-6 shadow-sm">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-semibold text-cream-900">
                      Standard Rental
                    </h3>
                    <span className="font-serif text-2xl font-bold text-poppy-700">
                      ~$150+
                    </span>
                  </div>
                  <p className="text-sm text-cream-700">
                    Rates vary based on event type and day of week. Contact us
                    for a custom quote based on your needs.
                  </p>
                </div>
                <div className="bg-[#fdf0eb] rounded-xl border border-earth-terracotta/15 border-l-4 border-l-earth-terracotta/40 p-6 shadow-sm">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-semibold text-cream-900">
                      Reception Package
                    </h3>
                    <span className="font-serif text-2xl font-bold text-poppy-700">
                      ~$1,200
                    </span>
                  </div>
                  <p className="text-sm text-cream-700">
                    Includes 8 hours of use, covering setup, the event itself,
                    and cleanup time.
                  </p>
                </div>
                <div className="bg-[#f3f7f0] rounded-xl border border-earth-sage/20 border-l-4 border-l-earth-olive/40 p-6 shadow-sm">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-semibold text-cream-900">
                      Nonprofit Rate
                    </h3>
                    <span className="text-sm font-medium text-earth-olive">
                      Reduced
                    </span>
                  </div>
                  <p className="text-sm text-cream-700">
                    Reduced rates are available for non-profit organizations.
                    Mention your nonprofit status when inquiring.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cancellation Policy */}
            <motion.div variants={fadeUp} custom={1}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
                Policies
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                Good to Know
              </h2>

              <div className="bg-cream-50 rounded-xl border border-cream-200 p-6 mb-4">
                <h3 className="font-semibold text-cream-900 mb-3">
                  Cancellation Policy
                </h3>
                <div className="space-y-3">
                  {cancellationPolicy.map((policy) => (
                    <div
                      key={policy.timeframe}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-cream-700">
                        {policy.timeframe}
                      </span>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${policy.color}`}
                      >
                        {policy.refund}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-poppy-50 rounded-xl border border-poppy-100 p-6">
                <div className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-poppy-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 8v4l3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-poppy-900 mb-1">
                      Closing Time
                    </h3>
                    <p className="text-sm text-poppy-800">
                      All rentals must close by 10:00 PM out of respect for the
                      neighbors who live above the space.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Ready to book?
              </h2>
              <p className="text-cream-200 max-w-lg mx-auto mb-6">
                Email us with the date, type of event, and expected number of
                guests, and we will get back to you with availability and a
                custom quote.
              </p>
              <a
                href="mailto:rentals@redpoppyarthouse.org"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                rentals@redpoppyarthouse.org
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
