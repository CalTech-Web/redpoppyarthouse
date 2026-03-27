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

const timelineEvents = [
  {
    year: "2003",
    title: "A Big Empty Room",
    description:
      "Alexander Allende and Todd Brown signed a lease on a storefront at 23rd and Folsom, originally named \"Porfilio Is.\" It began as a working artist studio offering painting classes, Argentine tango, weekly jazz nights, and curated exhibitions.",
  },
  {
    year: "2003",
    title: "The First Mission Arts Party",
    description:
      "A small group of artists staged the first \"Mission Arts Party\" at the end of the year, a bimonthly community arts festival that would later become the Mission Arts & Performance Project (MAPP).",
  },
  {
    year: "2004",
    title: "Red Poppy Is Born",
    description:
      "Todd joined forces with Mark Eisner, a Visiting Scholar in Latin American Studies at Stanford who had founded a nonprofit called \"Red Poppy,\" named for the flower in Pablo Neruda's poetry. Mark was creating a documentary on Neruda and had finished \"The Essential Neruda\" (City Lights). The space was renamed Red Poppy Art House.",
  },
  {
    year: "2006",
    title: "Formalizing the Vision",
    description:
      "Meklit Hadero joined Todd. Through a two-year dual-directorship model, they formalized the Poppy as a fiscally sponsored organization and built the first relationships with funders.",
  },
  {
    year: "2007",
    title: "Fiscal Sponsorship",
    description:
      "The Art House gained fiscal sponsorship through Intersection for the Arts, joining their Arts Incubator program and gaining access to resources for sustainable growth.",
  },
  {
    year: "Today",
    title: "An Intercultural Hub",
    description:
      "The Art House hosts over 150 events annually, attracting ever-increasing participation from artists, cultural thinkers, volunteers, and community members. We are working toward transition to a formalized 501(c)(3) nonprofit organization.",
  },
];

const people = [
  {
    name: "Dina Zarif",
    role: "Director",
    description:
      "Leads the Art House's day-to-day operations, programming vision, and community partnerships.",
  },
  {
    name: "Schuyler Karr",
    role: "Director of Performance Programming",
    description:
      "Curates the diverse performance series spanning music, poetry, dance, and literary events.",
  },
  {
    name: "Zena Allen",
    role: "Artistic Director",
    description:
      "Shapes the artistic vision and guides residencies, exhibitions, and interdisciplinary collaborations.",
  },
  {
    name: "Todd Thomas Brown",
    role: "Founder",
    description:
      "A painter who signed the original lease in 2003 and remains active on the leadership team.",
  },
  {
    name: "Mark Eisner",
    role: "Co-Founder",
    description:
      "Stanford Visiting Scholar, Neruda biographer, and the namesake behind \"Red Poppy\" - drawn from the flower in Neruda's poetry.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-poppy-500 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth-warm rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
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
                About
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
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          >
            A place for slowness and the nuanced intermingling of ideas
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg sm:text-xl text-cream-200 leading-relaxed max-w-2xl"
          >
            The Red Poppy Art House is a room on a corner in the Mission District
            of San Francisco, nestled between a myriad of communities. It carries
            the charm of an old world cafe crossed with a painter&apos;s studio
            and living room.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Introduction */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <p className="text-lg md:text-xl text-cream-800 leading-relaxed mb-6">
                We present a vigorous performance program spanning multiple
                disciplines and embracing both traditional and contemporary forms.
                The organization also hosts artist residencies, a socially engaged
                professional development track, and assists in curating space for
                the neighborhood-wide bimonthly MAPP happening.
              </p>
              <p className="text-lg md:text-xl text-cream-800 leading-relaxed mb-6">
                Operating from a 650-square-foot neighborhood storefront, we
                demonstrate the unique, powerful, and irreplaceable capacity of
                intimate community spaces. Over 150 diverse performances,
                exhibitions, workshops, and artist residencies fill our calendar
                each year.
              </p>
              <p className="text-cream-700 leading-relaxed">
                The Poppy enjoys a sturdy connection to its working-class Latino
                community via the longstanding Mission Arts and Performance Project
                series, a popular weekly family art program, and a professional
                development workshop for artists. We are an alternative model for
                community engagement in the arts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
                Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                Empowering Society Through Creative Processes
              </h2>
              <p className="text-cream-700 leading-relaxed mb-4">
                The Poppy is an artist-driven organization that seeks to empower
                and transform society by addressing current social issues that
                impact our community and society at large through creative
                processes.
              </p>
              <p className="text-cream-700 leading-relaxed">
                More specifically, the intent of Red Poppy Art House is to forge a
                bridge between high caliber artistic work and community life
                through visibility and inclusiveness.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-olive bg-earth-sage/20 rounded-full mb-4">
                Vision
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-6">
                A Space of Encounter
              </h2>
              <p className="text-cream-700 leading-relaxed mb-4">
                Founded in 2003 to serve as an intercultural and multidisciplinary
                &quot;space of encounter&quot; - a hub where multiple
                social-cultural groups could interconnect to experience one another
                and therefore potentiate one another&apos;s endeavors.
              </p>
              <p className="text-cream-700 leading-relaxed">
                We weave a more solid and tolerant social fabric through the arts.
                Every performance, every exhibition, every workshop is an
                invitation to cross boundaries and discover common ground.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Art House Story / Timeline */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                The Art House Story
              </h2>
              <p className="text-cream-700 max-w-2xl mx-auto mb-4">
                What started as a big empty room on a corner has grown into one of
                San Francisco&apos;s most cherished intercultural hubs. Here is
                how that happened.
              </p>
              <Link href="/pages/art-house-story" className="text-sm font-medium text-poppy-700 hover:text-poppy-600 transition-colors">
                Read the full story &rarr;
              </Link>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-cream-300" />

              <div className="space-y-10">
                {timelineEvents.map((event, i) => (
                  <motion.div
                    key={`${event.year}-${event.title}`}
                    variants={fadeUp}
                    custom={i + 1}
                    className="relative pl-12 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-poppy-600 ring-4 ring-cream-100" />

                    <div className="bg-surface rounded-xl border border-cream-200 p-6">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-poppy-700 bg-poppy-50 rounded-full mb-2">
                        {event.year}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-cream-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-cream-700 leading-relaxed text-sm">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* People Section */}
      <section className="bg-cream-50 texture-paper">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium text-poppy-700 bg-poppy-50 rounded-full mb-4">
                People
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                The People Behind the Poppy
              </h2>
              <p className="text-cream-700 max-w-2xl mx-auto mb-4">
                Artists, cultural thinkers, volunteers, and neighbors. The Poppy
                is shaped by the people who walk through its doors and choose to
                stay.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/pages/staff" className="text-sm font-medium text-poppy-700 hover:text-poppy-600 transition-colors">Red Poppy Team &rarr;</Link>
                <Link href="/pages/leadership-team" className="text-sm font-medium text-poppy-700 hover:text-poppy-600 transition-colors">Leadership Team &rarr;</Link>
                <Link href="/pages/community-members" className="text-sm font-medium text-poppy-700 hover:text-poppy-600 transition-colors">Community Members &rarr;</Link>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {people.map((person, i) => (
                <motion.div
                  key={person.name}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-surface rounded-xl border border-cream-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-poppy-50 flex items-center justify-center mb-4">
                    <span className="font-serif text-lg font-bold text-poppy-700">
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-cream-900 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-poppy-700 mb-3">
                    {person.role}
                  </p>
                  <p className="text-sm text-cream-700 leading-relaxed">
                    {person.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="bg-poppy-800 text-cream-50">
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-[0.15em] font-medium bg-poppy-700/60 text-poppy-200 rounded-full mb-4">
                In the Press
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                What Others Have Said
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="bg-poppy-700/40 rounded-xl border border-poppy-600/30 p-6">
                <p className="text-cream-200 text-sm leading-relaxed mb-4 italic">
                  &quot;Backstage Heroes: The Red Poppy Art House Sustains
                  SF&apos;s Underground&quot;
                </p>
                <p className="text-poppy-300 text-xs font-medium uppercase tracking-wider">
                  KQED
                </p>
              </div>
              <div className="bg-poppy-700/40 rounded-xl border border-poppy-600/30 p-6">
                <p className="text-cream-200 text-sm leading-relaxed mb-4 italic">
                  &quot;My Favorite Corner of SF: 23rd and Folsom in the
                  Mission&quot;
                </p>
                <p className="text-poppy-300 text-xs font-medium uppercase tracking-wider">
                  Bold Italic
                </p>
              </div>
              <div className="bg-poppy-700/40 rounded-xl border border-poppy-600/30 p-6 sm:col-span-2 lg:col-span-1">
                <p className="text-cream-200 text-sm leading-relaxed mb-4 italic">
                  &quot;Spontaneous Expression by Red Poppy Art House&quot;
                  exhibition
                </p>
                <p className="text-poppy-300 text-xs font-medium uppercase tracking-wider">
                  SFO Museum
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream-100 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-900 mb-4">
                Come Be Part of This
              </h2>
              <p className="text-cream-700 max-w-xl mx-auto mb-8">
                Whether you want to catch a show, volunteer for a night, or bring
                your art to our stage, the Poppy is your space too.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/event"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors shadow-sm"
                >
                  See What&apos;s On
                </Link>
                <Link
                  href="/participate"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium border-2 border-cream-400 text-cream-800 rounded-full hover:bg-cream-200 transition-colors"
                >
                  Ways to Participate
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
