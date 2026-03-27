"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import pagesData from "@/src/data/pages.json";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

function processHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/https?:\/\/(www\.)?redpoppyarthouse\.org/g, "");
}

// Map slug to breadcrumb parent
const parentMap: Record<string, { label: string; href: string }> = {
  "art-house-story": { label: "About", href: "/about" },
  "mission-vision": { label: "About", href: "/about" },
  staff: { label: "About", href: "/about" },
  "leadership-team": { label: "About", href: "/about" },
  "community-members": { label: "About", href: "/about" },
  "performance-host-team": { label: "About", href: "/about" },
  "press-testimonials": { label: "About", href: "/about" },
  "performance-series": { label: "Programs", href: "/programs" },
  exhibitions: { label: "Programs", href: "/programs" },
  "artist-residencies": { label: "Programs", href: "/programs" },
  "crossover-residencies": { label: "Programs", href: "/programs" },
  "crossover-resident-artists": { label: "Programs", href: "/programs" },
  "family-art": { label: "Programs", href: "/programs" },
  "professional-development-track": { label: "Programs", href: "/programs" },
  "san-francisco-international-arts-festival": { label: "Programs", href: "/programs" },
  "san-francisco-international-arts-festival-2024": { label: "Programs", href: "/programs" },
  "san-francisco-international-arts-festival-2025": { label: "Programs", href: "/programs" },
  "san-francisco-youth-theatre": { label: "Programs", href: "/programs" },
  "mission-stoop-fest": { label: "Programs", href: "/programs" },
  "fresh-festival": { label: "Programs", href: "/programs" },
  "event-production": { label: "Programs", href: "/programs" },
  employment: { label: "Participate", href: "/participate" },
  internships: { label: "Participate", href: "/participate" },
  "performance-booking": { label: "Participate", href: "/participate" },
  "pr-social-media": { label: "Participate", href: "/participate" },
  "a-feast-of-communities": { label: "Programs", href: "/programs" },
};

// Exhibition slugs (parent 339)
const exhibitionSlugs = new Set([
  "adrian-arias-corazones-hearts", "dream-escapes", "adrian-arias-mini-illusion",
  "adrian-arias-paintings-in-pandemic-and-revolution", "adrian-arias-tarot-in-pandemic-and-revolution",
  "a-temporary-collection", "andrea-guskin-hold-me-in-the-palm-of-your-hand",
  "silhouettes-emotion", "ella-noe-in-conversation-with-dance", "suspended",
  "indira-urrutia-soul-tears", "spectrums-prisms", "mara-lea-brown-say-her-name",
  "audience", "renewal", "zhu-zhuye-maman-2", "surface", "past-collection",
  "aqui-no-hay-moscas", "needles", "development-and-maintenance",
  "window-installation-fuego-creador-fire-creator",
  "art-into-auction-by-the-sf-coalition-on-homelessness",
]);

export default function WPPage() {
  const params = useParams();
  const slug = params.slug as string;

  const page = pagesData.find((p) => p.slug === slug);

  if (!page) {
    return (
      <main className="min-h-screen bg-cream-50">
        <section className="relative bg-poppy-900 text-cream-50 pt-32 pb-20">
          <div className="relative max-w-7xl mx-auto px-6 w-full text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-cream-200 mb-8">The page you are looking for does not exist.</p>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-cream-50 text-poppy-900 rounded-full hover:bg-cream-100 transition-colors">
              Go Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const parent = exhibitionSlugs.has(slug)
    ? { label: "Exhibitions", href: "/pages/exhibitions" }
    : parentMap[slug] || null;

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative bg-poppy-900 text-cream-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-earth-warm rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" animate="visible">
            <motion.nav variants={fadeUp} custom={0} aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-cream-300">
                <li><Link href="/" className="hover:text-cream-50 transition-colors">Home</Link></li>
                <li>/</li>
                {parent && (
                  <>
                    <li><Link href={parent.href} className="hover:text-cream-50 transition-colors">{parent.label}</Link></li>
                    <li>/</li>
                  </>
                )}
                <li className="text-cream-100">{page.title}</li>
              </ol>
            </motion.nav>

            <motion.h1 variants={fadeUp} custom={1} className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {page.title}
            </motion.h1>

            {page.excerpt && page.excerpt.length > 10 && page.excerpt !== page.content?.slice(0, 200) && (
              <motion.p variants={fadeUp} custom={2} className="text-xl text-cream-200 max-w-3xl leading-relaxed">
                {page.excerpt.slice(0, 200)}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} custom={0}>
            {page.image && (
              <div className="mb-10 rounded-2xl overflow-hidden border border-cream-200 shadow-sm">
                <img
                  src={page.image.replace(/https?:\/\/(www\.)?redpoppyarthouse\.org/g, "")}
                  alt={page.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            )}

            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: processHtml(page.contentHtml) }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Back navigation */}
      {parent && (
        <section className="bg-cream-100 texture-paper">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <Link
              href={parent.href}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300"
            >
              Back to {parent.label}
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
