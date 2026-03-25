"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const emailContacts = [
  {
    label: "General Inquiries",
    email: "info@redpoppyarthouse.org",
    description: "Questions about the Art House, programs, or anything else",
  },
  {
    label: "Booking & PR",
    email: "booking@redpoppyarthouse.org",
    description: "Performance booking inquiries and press requests",
  },
  {
    label: "Rentals",
    email: "rentals@redpoppyarthouse.org",
    description: "Private events, receptions, and space rental",
  },
  {
    label: "Exhibitions",
    email: "exhibitions@redpoppyarthouse.org",
    description: "Exhibition proposals and gallery inquiries",
  },
  {
    label: "Volunteer",
    email: "volunteer@redpoppyarthouse.org",
    description: "Sign up to volunteer at events",
  },
  {
    label: "Artist Payments",
    email: "payments@redpoppyarthouse.org",
    description: "Payment questions for performing artists",
  },
];

const hours = [
  { day: "Monday", time: "9:00am - 12:00pm", type: "office" },
  { day: "Tuesday", time: "9:00am - 12:00pm", type: "office" },
  { day: "Wednesday", time: "9:00am - 12:00pm", type: "office" },
  { day: "Thursday", time: "7:00pm - 10:00pm", type: "performance" },
  { day: "Friday", time: "7:00pm - 10:00pm", type: "performance" },
  { day: "Saturday", time: "7:00pm - 10:00pm", type: "performance" },
  { day: "Sunday", time: "Closed", type: "closed" },
];

export default function ContactPage() {
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
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-poppy-800/60 text-poppy-100 rounded-full border border-poppy-700/40">
              Contact
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            Find Us on the Corner
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            We are at 2698 Folsom Street at 23rd Street in San Francisco&apos;s
            Mission District. Stop by during hours, or send us an email anytime.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Location & Hours */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            {/* Address & Phone */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full mb-4">
                Location
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                Visit the Art House
              </h2>
              <address className="not-italic space-y-4">
                <div className="bg-surface rounded-xl border border-cream-200 p-6">
                  <p className="font-serif text-lg font-bold text-cream-900 mb-1">
                    Red Poppy Art House
                  </p>
                  <p className="text-cream-700">2698 Folsom Street</p>
                  <p className="text-cream-700">
                    at 23rd Street (cross-street)
                  </p>
                  <p className="text-cream-700">San Francisco, CA 94110</p>
                  <p className="text-cream-700 mt-3">
                    Mission District neighborhood
                  </p>
                </div>
                <div className="bg-surface rounded-xl border border-cream-200 p-6">
                  <p className="font-semibold text-cream-900 mb-1">Phone</p>
                  <a
                    href="tel:+16507315383"
                    className="text-poppy-700 hover:text-poppy-600 font-medium transition-colors"
                  >
                    (650) 731-5383
                  </a>
                </div>
              </address>
            </motion.div>

            {/* Hours */}
            <motion.div variants={fadeUp} custom={1}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-olive bg-earth-sage/20 rounded-full mb-4">
                Hours
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                When We&apos;re Open
              </h2>
              <div className="bg-surface rounded-xl border border-cream-200 overflow-hidden">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between px-6 py-3.5 border-b border-cream-100 last:border-b-0 ${
                      h.type === "closed"
                        ? "bg-cream-50"
                        : ""
                    }`}
                  >
                    <span className="font-medium text-cream-900">{h.day}</span>
                    <span className="flex items-center gap-2">
                      {h.type === "performance" && (
                        <span className="w-2 h-2 rounded-full bg-poppy-500" />
                      )}
                      {h.type === "office" && (
                        <span className="w-2 h-2 rounded-full bg-earth-sage" />
                      )}
                      <span
                        className={`text-sm ${
                          h.type === "closed"
                            ? "text-cream-500"
                            : "text-cream-700"
                        }`}
                      >
                        {h.time}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-cream-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-earth-sage" />
                  Office hours
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-poppy-500" />
                  Performance evenings
                </span>
              </div>
              <p className="mt-4 text-sm text-cream-600 bg-cream-100 rounded-lg px-4 py-3">
                Hours are subject to change. All other times by appointment. Call{" "}
                <a
                  href="tel:+16507315383"
                  className="text-poppy-700 hover:text-poppy-600 transition-colors"
                >
                  (650) 731-5383
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@redpoppyarthouse.org"
                  className="text-poppy-700 hover:text-poppy-600 transition-colors"
                >
                  info@redpoppyarthouse.org
                </a>{" "}
                to schedule a time for viewing exhibitions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Email Directory */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                Email Directory
              </h2>
              <p className="text-cream-700 max-w-xl mx-auto">
                Reach the right person by choosing the email below that best
                matches your question.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {emailContacts.map((contact, i) => (
                <motion.a
                  key={contact.email}
                  href={`mailto:${contact.email}`}
                  variants={fadeUp}
                  custom={i + 1}
                  className="group bg-cream-50 rounded-xl border border-cream-200 p-5 hover:border-poppy-200 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-cream-900 mb-1 group-hover:text-poppy-800 transition-colors">
                    {contact.label}
                  </p>
                  <p className="text-sm text-poppy-700 font-medium mb-2">
                    {contact.email}
                  </p>
                  <p className="text-xs text-cream-600 leading-relaxed">
                    {contact.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map / Directions Note */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h3 className="font-serif text-2xl font-bold mb-3">
                Getting Here
              </h3>
              <p className="text-cream-200 max-w-lg mx-auto mb-6">
                We sit at the corner of Folsom and 23rd Street in the heart of
                the Mission District. Street parking is available, and the 12
                Folsom and 48 Quintara-24th Street MUNI lines stop nearby.
              </p>
              <a
                href="https://maps.google.com/?q=2698+Folsom+Street+San+Francisco+CA+94110"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                Open in Google Maps
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
