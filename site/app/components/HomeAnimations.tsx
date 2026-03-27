"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

/* ─── Count-Up Hook ─── */
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return { count, ref };
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 1: HERO
   ═══════════════════════════════════════════════════════════════ */

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/venue-interior.jpg"
          alt="Red Poppy Art House interior - an intimate performance venue with warm lighting, eclectic furniture, and art-covered walls"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-poppy-900/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 text-xs uppercase tracking-[0.25em] font-medium bg-poppy-800/50 text-poppy-100 rounded-full border border-poppy-600/30 backdrop-blur-sm">
            Since 2003 &middot; Mission District, San Francisco
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-cream-50 mb-8"
        >
          A room on a corner,
          <br />
          <span className="text-poppy-300">where art finds home.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-cream-200/90 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          The Red Poppy Art House is a room on a corner in the Mission District
          of San Francisco, nestled between a myriad of communities. It is a place
          for slowness and the nuanced intermingling of ideas and activities
          generally termed &quot;art.&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/event"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-poppy-600 text-cream-50 rounded-full hover:bg-poppy-500 transition-all duration-300 shadow-lg shadow-poppy-900/30 hover:shadow-xl hover:shadow-poppy-900/40 hover:-translate-y-0.5"
          >
            View Upcoming Events
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border-2 border-cream-200/30 text-cream-100 rounded-full hover:bg-cream-50/10 hover:border-cream-200/50 transition-all duration-300"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-cream-300/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-cream-300/60" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 decorative-line" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2: STATS / LEGACY BAND
   ═══════════════════════════════════════════════════════════════ */

const stats = [
  { value: 150, suffix: "+", label: "Events Annually" },
  { value: 20, suffix: "+", label: "Years in the Mission" },
  { value: 49, suffix: "", label: "Seats, Infinite Stories" },
  { value: 650, suffix: " sq ft", label: "Intimate Space" },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-serif text-5xl md:text-6xl font-bold text-cream-50 mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-[0.15em] text-poppy-200/80 font-medium">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-poppy-900 relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-poppy-400 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-earth-warm rounded-full blur-[80px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3: OUR STORY
   ═══════════════════════════════════════════════════════════════ */

export function OurStorySection() {
  return (
    <section className="bg-cream-50 texture-paper relative overflow-hidden">
      {/* Decorative poppy accent */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.04]">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-poppy-600">
          <path d="M100 20c0 0 20 40 20 80s-20 80-20 80-20-40-20-80 20-80 20-80z" />
          <path d="M20 100c0 0 40-20 80-20s80 20 80 20-40 20-80 20-80-20-80-20z" />
          <path d="M35 35c0 0 40 10 65 45s25 85 25 85-40-10-65-45-25-85-25-85z" />
          <path d="M165 35c0 0-40 10-65 45s-25 85-25 85 40-10 65-45 25-85 25-85z" />
          <circle cx="100" cy="100" r="15" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Pull Quote Side */}
          <motion.div variants={fadeUp} custom={0}>
            <div className="relative">
              <div className="absolute -top-6 -left-4 text-8xl font-serif text-poppy-200/40 leading-none select-none" aria-hidden="true">
                &ldquo;
              </div>
              <blockquote className="relative z-10 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-poppy-800 leading-[1.2] mb-6">
                An old world cafe crossed with a painter&apos;s studio and living room.
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-poppy-500 to-earth-warm rounded-full" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={fadeUp} custom={1}>
            <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/10]">
              <Image
                src="/images/venue/story.jpg"
                alt="Red Poppy Art House founding - artists and community members gathered in the original space at Folsom and 23rd"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-poppy-900/30 to-transparent" />
            </div>
            <p className="text-cream-800 leading-relaxed mb-4 text-lg">
              In February 2003, Alexander Allende and Todd Brown signed a lease on a big
              empty room on the corner of Folsom and 23rd that had one closet, a bathroom,
              and two layers of decades-old linoleum flooring. Armed with a couple of credit
              cards and basic carpentry skills, they set out to forge a basic artist workspace
              and dance studio.
            </p>
            <p className="text-cream-700 leading-relaxed mb-4">
              The Red Poppy Art House was founded to serve as an intercultural and
              multidisciplinary &quot;space of encounter,&quot; a hub where multiple
              social-cultural groups could interconnect to experience one another and therefore
              potentiate one another&apos;s endeavors while weaving a more solid and tolerant
              social fabric.
            </p>
            <p className="text-cream-700 leading-relaxed mb-8">
              By the end of 2003, a small group of artists staged the first &quot;Mission Arts
              Party&quot; - later renamed the Mission Arts &amp; Performance Project (MAPP) - a
              bimonthly community arts festival that continues to this day. After seven years,
              the organization&apos;s role within the arts ecology has become highly recognized
              and valued among its local community and the broader Bay Area.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Learn Our Story
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4: UPCOMING EVENTS + EVENT MODAL
   ═══════════════════════════════════════════════════════════════ */

interface EventData {
  title: string;
  subtitle: string;
  date: string;
  day: string;
  year: string;
  time: string;
  doors: string;
  artists: { name: string; instrument: string }[];
  description: string;
  fullDescription: string;
  pricing: { label: string; price: string }[];
  ticketUrl: string;
  image: string;
}

const upcomingEvents: EventData[] = [
  {
    title: "Julio Lemos - Brian Rice Duo",
    subtitle: "Intimate Brazilian Grooves",
    date: "Aug 1",
    day: "Friday",
    year: "2025",
    time: "7:30 PM",
    doors: "7:00 PM",
    artists: [
      { name: "Julio Lemos", instrument: "7-string guitar" },
      { name: "Brian Rice", instrument: "Percussion" },
    ],
    description:
      "An unforgettable evening of Brazilian music with renowned 7-string guitarist Julio Lemos and master percussionist Brian Rice.",
    fullDescription:
      "Join us for an unforgettable evening of Brazilian music with renowned 7-string guitarist Julio Lemos and master percussionist Brian Rice, one of the leading American specialists in Brazilian rhythms. Recognized today as one of the leading contemporary Brazilian 7-string guitarists, Julio Lemos follows in the tradition of great masters such as Rafael Rabello and Dino Sete Cordas. Together with Brian Rice, they bring the rich tapestry of Brazilian musical traditions to life in the intimate setting of the Red Poppy Art House.",
    pricing: [
      { label: "Students & Seniors", price: "$25" },
      { label: "Early Bird", price: "$29" },
      { label: "General", price: "$35" },
      { label: "At the Door", price: "$35" },
    ],
    ticketUrl: "https://www.eventbrite.com/e/julio-lemos-brian-rice-duo-tickets-1510843085339",
    image: "/images/events/julio-lemos.png",
  },
  {
    title: "Tango with Winnie Collective",
    subtitle: "3 Minute Mini Dramas on an Exploration of Humanity",
    date: "Aug 16",
    day: "Saturday",
    year: "2025",
    time: "7:30 PM",
    doors: "7:00 PM",
    artists: [
      { name: "Teresa Tam", instrument: "Voice" },
      { name: "Winnie Cheung", instrument: "Piano" },
      { name: "Janice Lee", instrument: "Violin" },
      { name: "C.C. Lee", instrument: "Bandoneon" },
    ],
    description:
      "A celebration of a two-year collaboration with tango musicians in Taiwan. Tango classics performed alongside tango composers of today.",
    fullDescription:
      "Celebration of a two-year collaboration with tango musicians in Taiwan. Tango classics of Troilo, Pugliese, and Gobbi performed alongside tango composers of today. The Winnie Collective brings together an extraordinary ensemble spanning continents, united by their passion for the tango tradition and its evolution. Each piece is a three-minute mini drama - an exploration of humanity through the language of tango, where every note carries the weight of longing, joy, and the complexity of human connection.",
    pricing: [
      { label: "Students & Seniors", price: "$29" },
      { label: "Early Bird", price: "$35" },
      { label: "General", price: "$40" },
      { label: "At the Door", price: "$40" },
    ],
    ticketUrl: "https://www.eventbrite.com/e/tango-with-winnie-collective-tickets-1405565116099",
    image: "/images/events/winnie-collective.jpg",
  },
  {
    title: "Janam",
    subtitle: "Balkan American Blend",
    date: "Sep 21",
    day: "Sunday",
    year: "2025",
    time: "7:00 PM",
    doors: "6:30 PM",
    artists: [
      { name: "Dan Auvil", instrument: "Percussion, Voice" },
      { name: "Sal Beeby", instrument: "Guitar" },
      { name: "Juliana Graffagna", instrument: "Voice, Accordion, Tambura" },
      { name: "Gari Hegedus", instrument: "Oud, Saz, Mandocello, Mandolin" },
      { name: "Shira Kammen", instrument: "Violin, Harp, Voice" },
    ],
    description:
      "Fusing funky Balkan rhythms, gritty Appalachian ballads, arresting vocal harmonies, and enchanting acoustic textures.",
    fullDescription:
      "Fusing funky Balkan rhythms, gritty Appalachian ballads, arresting vocal harmonies, and enchanting acoustic textures, Janam takes you on a labyrinthine musical ride. Drawing from the rich musical traditions of the Balkans, the Appalachian mountains, and beyond, this ensemble weaves together seemingly disparate threads into a tapestry of sound that is both ancient and utterly contemporary. Their performances are journeys without a map, full of surprises, detours, and breathtaking vistas.",
    pricing: [
      { label: "Students & Seniors", price: "$25" },
      { label: "Early Bird", price: "$29" },
      { label: "General", price: "$35" },
      { label: "At the Door", price: "$35" },
    ],
    ticketUrl: "https://www.eventbrite.com/e/janam-tickets-1405610983289",
    image: "/images/events/janam.jpg",
  },
  {
    title: "String, Skin & Breath",
    subtitle: "A Sound Journey Across Continents and Cultures",
    date: "Sep 26",
    day: "Friday",
    year: "2025",
    time: "7:30 PM",
    doors: "7:00 PM",
    artists: [
      { name: "Misha Khalikulov", instrument: "Cello" },
      { name: "Aaron Kierbel", instrument: "Percussion" },
      { name: "Arslen Metouii", instrument: "Kanun" },
      { name: "Daniel Riera", instrument: "Flute/Ewi" },
    ],
    description:
      "An improvised journey weaving melodies and rhythms from around the world - sometimes tender, other times fiery and exuberant.",
    fullDescription:
      "String, Skin & Breath will take you on an improvised journey, weaving melodies and rhythms from around the world. Together, they create a dynamic, spontaneous dialogue - sometimes tender and meditative, other times fiery and exuberant - inviting the audience into a world without borders, where music speaks beyond words. Each instrument brings the voice of a different tradition: the cello's European depth, the kanun's Middle Eastern shimmer, the flute's universal breath, and percussion's primal heartbeat.",
    pricing: [
      { label: "Students & Seniors", price: "$25" },
      { label: "Early Bird", price: "$29" },
      { label: "General", price: "$35" },
      { label: "At the Door", price: "$35" },
    ],
    ticketUrl: "https://www.eventbrite.com/e/string-skin-breath-tickets-1368311920789",
    image: "/images/events/string-skin-breath.png",
  },
];

/* ─── Event Detail Modal ─── */
function EventModal({ event, open, onOpenChange }: { event: EventData; open: boolean; onOpenChange: (open: boolean) => void }) {
  const [month, dayNum] = event.date.split(" ");

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8"
              >
                <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-cream-50 rounded-3xl shadow-2xl">
                  {/* Hero Image Area */}
                  <div className="relative aspect-[2/1] md:aspect-[5/2] overflow-hidden rounded-t-3xl">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Close button */}
                    <Dialog.Close className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-cream-100 hover:bg-black/60 transition-colors flex items-center justify-center z-10">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="sr-only">Close</span>
                    </Dialog.Close>

                    {/* Date badge */}
                    <div className="absolute top-4 left-4 bg-poppy-700/90 backdrop-blur-sm text-cream-50 rounded-xl px-4 py-2.5 text-center min-w-[70px]">
                      <div className="text-xs uppercase font-semibold tracking-wider">{month}</div>
                      <div className="text-3xl font-bold font-serif leading-none">{dayNum}</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-80 mt-0.5">{event.year}</div>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <Dialog.Title className="font-serif text-3xl md:text-4xl font-bold text-cream-50 mb-1 drop-shadow-lg">
                        {event.title}
                      </Dialog.Title>
                      <p className="text-poppy-200 font-medium italic text-lg">
                        {event.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Time & Day Bar */}
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-200 rounded-full text-sm font-medium text-cream-800">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2z" clipRule="evenodd" />
                        </svg>
                        {event.day}, {event.date}, {event.year}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-200 rounded-full text-sm font-medium text-cream-800">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                        </svg>
                        Doors {event.doors} &middot; Show {event.time}
                      </span>
                    </div>

                    {/* Description */}
                    <Dialog.Description asChild>
                      <div>
                        <p className="text-cream-800 leading-relaxed text-base">
                          {event.fullDescription}
                        </p>
                      </div>
                    </Dialog.Description>

                    {/* Artists */}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-cream-900 mb-3">Featuring</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {event.artists.map((artist) => (
                          <div
                            key={artist.name}
                            className="flex items-center gap-3 bg-cream-100 rounded-xl px-4 py-3 border border-cream-200"
                          >
                            <div className="w-8 h-8 rounded-full bg-poppy-100 text-poppy-700 flex items-center justify-center shrink-0">
                              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-cream-900 text-sm">{artist.name}</div>
                              <div className="text-xs text-cream-600">{artist.instrument}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-cream-900 mb-3">Admission</h3>
                      <div className="bg-cream-100 rounded-2xl border border-cream-200 overflow-hidden">
                        <div className="grid grid-cols-2 sm:grid-cols-4">
                          {event.pricing.map((tier, i) => (
                            <div
                              key={tier.label}
                              className={`p-4 text-center ${i < event.pricing.length - 1 ? "border-r border-cream-200" : ""}`}
                            >
                              <div className="font-serif text-2xl font-bold text-poppy-700">{tier.price}</div>
                              <div className="text-xs text-cream-600 mt-1">{tier.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="px-4 py-2.5 bg-cream-200/60 text-center">
                          <p className="text-xs text-cream-700 italic">
                            Sliding scale &middot; Every dollar at the door goes primarily to the performing artists
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Venue Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-cream-700">
                      <span className="flex items-center gap-1.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-500" aria-hidden="true">
                          <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433a19.695 19.695 0 002.683-2.006c1.9-1.7 3.945-4.293 3.945-7.593a7.25 7.25 0 00-14.5 0c0 3.3 2.045 5.893 3.945 7.593a19.695 19.695 0 002.683 2.006 12.21 12.21 0 00.757.433l.281.14.018.008.006.003zM10 11.25a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
                        </svg>
                        2698 Folsom St, SF
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-500" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        49 Seats
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-500" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        ADA Accessible
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-500" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        All Ages
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 flex-1 px-6 py-4 text-base font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                      >
                        Reserve Tickets on Eventbrite
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                          <path d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" />
                          <path d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" />
                        </svg>
                      </a>
                      <Dialog.Close className="inline-flex items-center justify-center px-6 py-4 text-base font-medium border-2 border-cream-300 text-cream-800 rounded-full hover:bg-cream-100 transition-colors">
                        Close
                      </Dialog.Close>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

/* ─── Event Card ─── */
function EventCard({ event, index }: { event: EventData; index: number }) {
  const [open, setOpen] = useState(false);
  const [month, dayNum] = event.date.split(" ");

  return (
    <>
      <motion.div
        variants={fadeUp}
        custom={index + 1}
        className="event-card group bg-surface rounded-2xl border border-cream-200 overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(true); } }}
        aria-label={`View details for ${event.title}`}
      >
        {/* Event Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-poppy-700/90 backdrop-blur-sm text-cream-50 rounded-xl px-3 py-2 text-center min-w-[60px]">
            <div className="text-xs uppercase font-semibold tracking-wider">{month}</div>
            <div className="text-2xl font-bold font-serif leading-none">{dayNum}</div>
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-cream-100 rounded-full px-3 py-1 text-xs font-medium">
            Sliding scale &middot; {event.pricing[0].price} - {event.pricing[event.pricing.length - 1].price}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-cream-600 mb-2">
            <span className="font-medium">{event.day}</span>
            <span>&middot;</span>
            <span>Doors {event.doors}</span>
            <span>&middot;</span>
            <span>Show {event.time}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-cream-900 mb-1 group-hover:text-poppy-700 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-poppy-600 font-medium italic mb-3">
            {event.subtitle}
          </p>
          <p className="text-sm text-cream-700 leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>

          {/* Artists preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {event.artists.slice(0, 3).map((artist) => (
              <span key={artist.name} className="inline-flex items-center px-2.5 py-1 bg-cream-100 rounded-full text-xs text-cream-700 border border-cream-200">
                {artist.name}
              </span>
            ))}
            {event.artists.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-1 bg-cream-100 rounded-full text-xs text-cream-600 border border-cream-200">
                +{event.artists.length - 3} more
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full group-hover:bg-poppy-600 transition-all duration-300 shadow-sm group-hover:shadow-md">
            View Details & Tickets
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </motion.div>

      <EventModal event={event} open={open} onOpenChange={setOpen} />
    </>
  );
}

export function UpcomingEventsSection() {
  return (
    <section className="bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium text-poppy-700 bg-poppy-50 rounded-full border border-poppy-100 mb-4">
              What&apos;s Happening
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-900 mb-5">
              Upcoming at the Poppy
            </h2>
            <p className="text-cream-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Two to three nights a week, Thursday through Sunday, our 49-seat room
              fills with music, poetry, dance, and conversation. Advance tickets available
              on Eventbrite - advance ticket guarantees admission but not a seat (first
              come, first served).
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>

          {/* Artist Support Note */}
          <motion.div
            variants={fadeIn}
            className="text-center bg-cream-100 rounded-2xl border border-cream-200 p-8 mb-10"
          >
            <p className="font-serif text-lg text-cream-800 italic mb-2">
              &quot;Every dollar at the door goes primarily to the performing artists.&quot;
            </p>
            <p className="text-sm text-cream-600">
              Sliding scale admission, typically $15 to $25. Consider your contribution an &quot;audience grant.&quot;
              We encourage guests to consider their admission as a contribution to the local arts economy.
            </p>
          </motion.div>

          {/* Social Follow CTAs */}
          <motion.div variants={fadeUp} custom={5} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/redpoppyart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow @redpoppyart
            </a>
            <a
              href="https://www.facebook.com/RedPoppyArtHouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold border-2 border-cream-300 text-cream-800 rounded-full hover:bg-cream-100 hover:border-cream-400 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5: PROGRAMS
   ═══════════════════════════════════════════════════════════════ */

const programs = [
  {
    emoji: "\uD83C\uDFB5",
    title: "Performance Series",
    description: "Diverse and international artists working in both traditional and contemporary performing arts. The Art House produces an average of 150 multi-disciplinary performance events per year, featuring music, poetry, dance, and literary events.",
    color: "bg-poppy-50 text-poppy-700 border-poppy-100",
  },
  {
    emoji: "\uD83D\uDDBC\uFE0F",
    title: "Exhibitions",
    description: "Rotating works and socially engaged large-scale installations featuring artists connected to the Mission District and beyond. Current exhibition: \"Fracture Zones\" by Andrea Guskin.",
    color: "bg-earth-terracotta/10 text-earth-terracotta border-earth-terracotta/20",
  },
  {
    emoji: "\uD83C\uDFE0",
    title: "Artist Residencies",
    description: "Free and accessible space for artists-in-residence to rehearse, develop, and explore new collaborative and interdisciplinary work. Including A Feast of Communities and Crossover Collaborative Residencies.",
    color: "bg-earth-olive/10 text-earth-olive border-earth-olive/20",
  },
  {
    emoji: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67",
    title: "Family Art",
    description: "Arte entre Familia - free bilingual (Spanish/English) art programming for families in the Mission District, nurturing creativity across generations for over a decade. Supported by Sam Mazza Foundation and Art4Moore.",
    color: "bg-earth-sage/20 text-earth-olive border-earth-sage/30",
  },
  {
    emoji: "\uD83C\uDF10",
    title: "MAPP",
    description: "The Mission Arts and Performance Project - a bi-monthly, multidisciplinary, intercultural happening launched in 2003. On the first Saturday of every even month, MAPP transforms ordinary spaces into pop-up sites for artistic and cultural exchange.",
    color: "bg-poppy-50 text-poppy-700 border-poppy-100",
  },
  {
    emoji: "\uD83C\uDF89",
    title: "FRESH Festival",
    description: "San Francisco's annual festival of experimental dance, music, and performance. A body-based art, action, and interaction festival established in 2010 by ALTERNATIVA.",
    color: "bg-earth-warm/10 text-earth-warm border-earth-warm/20",
  },
  {
    emoji: "\uD83C\uDFE1",
    title: "Mission Stoop Fest",
    description: "A civil society arts experiment on front stoops where traditional and contemporary artists perform and local residents share stories and histories. A daytime sister project to MAPP.",
    color: "bg-earth-clay/10 text-earth-clay border-earth-clay/20",
  },
  {
    emoji: "\uD83D\uDCDA",
    title: "Development Track",
    description: "PRESENCE - a nine-month professional development program closing the gap between the roles of artist, arts administrator, and community builder. Ongoing enrollment with a three-month summer intensive.",
    color: "bg-cream-200 text-cream-800 border-cream-300",
  },
];

export function ProgramsSection() {
  return (
    <section className="bg-cream-100 texture-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium text-earth-olive bg-earth-sage/20 rounded-full border border-earth-sage/30 mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-900 mb-5">
              Our Programs
            </h2>
            <p className="text-cream-700 max-w-3xl mx-auto text-lg leading-relaxed">
              From performances and exhibitions to community art programs and artist
              residencies, the Poppy is a space of encounter where multiple cultural
              groups interconnect.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((program, i) => (
              <motion.div key={program.title} variants={fadeUp} custom={i + 1}>
                <Link
                  href="/programs"
                  className="group flex flex-col h-full bg-surface rounded-2xl border border-cream-200 p-6 hover:border-poppy-200 hover:shadow-xl hover:shadow-poppy-900/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${program.color} border flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform`}>
                    {program.emoji}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-cream-900 mb-2 group-hover:text-poppy-700 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-cream-700 leading-relaxed flex-1">
                    {program.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} custom={9} className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Explore All Programs
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 6: MISSION
   ═══════════════════════════════════════════════════════════════ */

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-poppy-800 text-cream-50 grain-overlay">
      <div className="absolute inset-0">
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] opacity-[0.06]">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-poppy-300">
            <path d="M100 20c0 0 20 40 20 80s-20 80-20 80-20-40-20-80 20-80 20-80z" />
            <path d="M20 100c0 0 40-20 80-20s80 20 80 20-40 20-80 20-80-20-80-20z" />
            <path d="M35 35c0 0 40 10 65 45s25 85 25 85-40-10-65-45-25-85-25-85z" />
            <path d="M165 35c0 0-40 10-65 45s-25 85-25 85 40-10 65-45 25-85 25-85z" />
            <circle cx="100" cy="100" r="15" />
          </svg>
        </div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-earth-warm rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-poppy-400 rounded-full blur-[100px] opacity-10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-poppy-700/50 text-poppy-200 rounded-full border border-poppy-600/30 mb-8">
              Our Mission
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8"
          >
            A bridge between artistic work and community life
          </motion.h2>

          <motion.div variants={fadeUp} custom={2} className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-cream-200 leading-relaxed mb-6">
              The Red Poppy Art House is a neighborhood center for the intersection of
              cultural and inter-generational artistic engagement located in the heart of
              San Francisco&apos;s Mission District. The Poppy is an artist-driven organization
              that seeks to empower and transform society by addressing current social
              issues that impact our community and society at large through creative processes.
            </p>
            <p className="text-lg text-cream-300 leading-relaxed mb-6">
              Operating from a neighborhood storefront, we demonstrate the unique, powerful,
              and irreplaceable capacity of intimate community spaces through hosting over
              150 diverse performances, exhibitions, workshops, and artist residencies annually.
              The intent of Red Poppy Art House is to forge a bridge between high-caliber
              artistic work and community life through visibility and inclusiveness.
            </p>
            <p className="text-base text-cream-400 leading-relaxed mb-10">
              Our desire is to serve as a space of multiplicity, not defined by a singular
              culture or aesthetic, but as a well-spring of socially engaged art and discourse
              that invites growth and transformation. If we had to name our dominant aesthetic,
              we would call it... &quot;slow.&quot;
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={3}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Learn Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 7: GET INVOLVED
   ═══════════════════════════════════════════════════════════════ */

const involvementOptions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Volunteer",
    description: "Help with event productions - admissions at the door or concessions at the counter. Each volunteer receives one free pass to another Poppy event. Call time 6:00 PM.",
    cta: "Sign Up",
    href: "/participate/volunteer",
    color: "bg-poppy-50 text-poppy-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Donate",
    description: "Support the arts economy of San Francisco. Become a Patron on Patreon for as low as $5-$10/month, make a one-time donation, or participate in corporate matching through Benevity.",
    cta: "Give Now",
    href: "/participate/give",
    color: "bg-earth-warm/10 text-earth-warm",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M9 19V6l12-3v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Perform",
    description: "Interested in performing at the Poppy? Submit a booking inquiry. We present a diverse and international program of artists working in both traditional and contemporary performing arts.",
    cta: "Inquire",
    href: "mailto:booking@redpoppyarthouse.org",
    color: "bg-earth-olive/10 text-earth-olive",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Rent the Space",
    description: "A cozy 650 sq ft venue with kitchen, French-made Pleyel piano, professional sound equipment, performance lighting, Wi-Fi, and wheelchair access. 100% of rental funds support programming.",
    cta: "Learn More",
    href: "/rentals",
    color: "bg-earth-terracotta/10 text-earth-terracotta",
  },
];

export function GetInvolvedSection() {
  return (
    <section className="bg-cream-50 texture-paper">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full border border-earth-terracotta/20 mb-4">
              Join Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-900 mb-4">
              Get Involved
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {involvementOptions.map((option, i) => (
              <motion.div key={option.title} variants={fadeUp} custom={i + 1}>
                <Link
                  href={option.href}
                  className="group flex flex-col items-center text-center h-full bg-surface rounded-2xl border border-cream-200 p-8 hover:border-poppy-200 hover:shadow-xl hover:shadow-poppy-900/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl ${option.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {option.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-cream-900 mb-2 group-hover:text-poppy-700 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-cream-700 leading-relaxed mb-6 flex-1">
                    {option.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-poppy-700 group-hover:text-poppy-600 transition-colors">
                    {option.cta}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 8: VISIT US / CONTACT
   ═══════════════════════════════════════════════════════════════ */

export function VisitUsSection() {
  return (
    <section className="bg-surface border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium text-earth-terracotta bg-earth-terracotta/10 rounded-full border border-earth-terracotta/20 mb-4">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-900 mb-4">
              Find Us on the Corner
            </h2>
            <p className="text-cream-700 max-w-xl mx-auto text-lg">
              We are located at 2698 Folsom Street at 23rd Street in San
              Francisco&apos;s Mission District.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <motion.div variants={fadeUp} custom={1}>
              <div className="map-container rounded-2xl overflow-hidden shadow-lg border border-cream-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.3!2d-122.414!3d37.754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3e7e7e7e7e%3A0x0!2s2698+Folsom+St%2C+San+Francisco%2C+CA+94110!5e0!3m2!1sen!2sus!4v1"
                  width="600"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Red Poppy Art House Location"
                />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} custom={2} className="space-y-6">
              <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6 flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-poppy-50 text-poppy-600 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-cream-900 mb-1">Address</h3>
                  <p className="text-cream-700">2698 Folsom St @ 23rd St</p>
                  <p className="text-cream-700">San Francisco, CA 94110</p>
                  <a
                    href="https://maps.google.com/?q=2698+Folsom+St+San+Francisco+CA+94110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-poppy-700 hover:text-poppy-600 font-medium mt-2 transition-colors"
                  >
                    Get Directions
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                      <path d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" />
                      <path d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6 flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-earth-warm/10 text-earth-warm flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-cream-900 mb-1">Hours</h3>
                  <p className="text-cream-700">Performances: Thu - Sat, 7:00pm - 10:00pm</p>
                  <p className="text-cream-700">Office: Mon - Thu, 9:00am - 12:00pm</p>
                  <p className="text-sm text-cream-600 mt-1 italic">Hours subject to change; other times by appointment</p>
                </div>
              </div>

              <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6 flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-earth-olive/10 text-earth-olive flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-cream-900 mb-1">Contact</h3>
                  <p>
                    <a href="tel:+16507315383" className="text-cream-700 hover:text-poppy-700 transition-colors">(650) 731-5383</a>
                  </p>
                  <p>
                    <a href="mailto:info@redpoppyarthouse.org" className="text-poppy-700 hover:text-poppy-600 transition-colors font-medium">info@redpoppyarthouse.org</a>
                  </p>
                  <div className="mt-2 text-sm text-cream-600 space-y-0.5">
                    <p>Booking &amp; PR: <a href="mailto:booking@redpoppyarthouse.org" className="text-poppy-700 hover:text-poppy-600">booking@redpoppyarthouse.org</a></p>
                    <p>Rentals: <a href="mailto:rentals@redpoppyarthouse.org" className="text-poppy-700 hover:text-poppy-600">rentals@redpoppyarthouse.org</a></p>
                    <p>Volunteer: <a href="mailto:volunteer@redpoppyarthouse.org" className="text-poppy-700 hover:text-poppy-600">volunteer@redpoppyarthouse.org</a></p>
                  </div>
                </div>
              </div>

              <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6">
                <div className="flex flex-wrap gap-4 text-sm text-cream-700">
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    ADA Accessible (ramp at 23rd St entrance)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Near 24th St BART
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    All Ages Welcome
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Kids 10 &amp; Under Free
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    All Major Credit Cards
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-poppy-600" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Bring Your Own Food
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
