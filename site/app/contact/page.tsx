"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
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

function ContactFormSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate(name: string, email: string, message: string) {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) newErrors.message = "Please enter a message";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const validationErrors = validate(name, email, message);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setFormState("submitting");

    // Placeholder - replace FORM_RECEIVER_EMAIL with the actual endpoint
    // For now, show success after a brief delay to simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setFormState("success");
    form.reset();
  }

  return (
    <section className="bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full mb-4">
              Send a Message
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Drop Us a Line
            </h2>
            <p className="text-cream-700 max-w-xl mx-auto">
              Have a question about events, programs, or anything else? Fill out
              the form below and we will get back to you as soon as we can.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            {formState === "success" ? (
              <div className="bg-surface rounded-xl border border-earth-sage/30 p-8 md:p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-earth-sage/20 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-8 h-8 text-earth-olive"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream-900 mb-3">
                  Message Sent
                </h3>
                <p className="text-cream-700 mb-6">
                  Thank you for reaching out. We will get back to you soon.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-cream-300 text-cream-800 rounded-full hover:bg-cream-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface rounded-xl border border-cream-200 p-6 md:p-8 space-y-6"
                noValidate
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-cream-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-cream-50 text-cream-900 placeholder-cream-500 outline-none transition-colors focus:border-poppy-400 focus:ring-2 focus:ring-poppy-100 ${
                      errors.name ? "border-poppy-400" : "border-cream-200"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-poppy-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-cream-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-cream-50 text-cream-900 placeholder-cream-500 outline-none transition-colors focus:border-poppy-400 focus:ring-2 focus:ring-poppy-100 ${
                      errors.email ? "border-poppy-400" : "border-cream-200"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-poppy-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-cream-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border bg-cream-50 text-cream-900 placeholder-cream-500 outline-none transition-colors focus:border-poppy-400 focus:ring-2 focus:ring-poppy-100 resize-y ${
                      errors.message ? "border-poppy-400" : "border-cream-200"
                    }`}
                    placeholder="Tell us what you have in mind..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-poppy-600">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-cream-500">
                    We typically respond within 2 to 3 business days.
                  </p>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-earth-warm rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-poppy-400 rounded-full blur-3xl" />
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
                Contact
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
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
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
                <div className="bg-[#fdf0eb] rounded-xl border border-earth-terracotta/15 border-l-4 border-l-earth-terracotta/30 p-6 shadow-sm">
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
                <div className="bg-[#fdf6e8] rounded-xl border border-earth-warm/15 border-l-4 border-l-earth-warm/30 p-6 shadow-sm">
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
              <div className="bg-[#f3f7f0] rounded-xl border border-earth-sage/20 overflow-hidden shadow-sm">
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
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
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
                  className={`group rounded-xl p-5 border-l-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${["bg-[#fdf6e8] border border-earth-warm/15 border-l-earth-warm/30", "bg-[#f3f7f0] border border-earth-olive/15 border-l-earth-olive/30", "bg-[#fdf0eb] border border-earth-terracotta/15 border-l-earth-terracotta/30"][i % 3]}`}
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

      {/* Contact Form */}
      <ContactFormSection />

      {/* Map / Directions Note */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-serif text-2xl font-bold mb-3">
                Getting Here
              </h2>
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
