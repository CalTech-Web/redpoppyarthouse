"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import blogPosts from "@/src/data/blog-posts.json";

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

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  contentHtml: string;
  excerpt: string;
  image: string | null;
  categories: string[];
  tags: string[];
}

function getImageSrc(image: string | null): string | null {
  if (!image) return null;
  if (image.startsWith("http://redpoppyarthouse.org/wp-content/uploads/")) {
    return image.replace("http://redpoppyarthouse.org", "");
  }
  if (image.startsWith("https://redpoppyarthouse.org/wp-content/uploads/")) {
    return image.replace("https://redpoppyarthouse.org", "");
  }
  return image;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getDisplayCategories(categories: string[]): string[] {
  return categories.filter((c) => c !== "All");
}

const POSTS_PER_PAGE = 12;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const posts = blogPosts as BlogPost[];

  // Sort posts by date, newest first
  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts]
  );

  // Get unique categories (excluding "All")
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach((p) => p.categories.forEach((c) => {
      if (c !== "All") cats.add(c);
    }));
    return ["All", ...Array.from(cats).sort()];
  }, [posts]);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return sortedPosts;
    return sortedPosts.filter((p) => p.categories.includes(activeCategory));
  }, [sortedPosts, activeCategory]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative bg-poppy-900 text-cream-50 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/events/string-skin-breath.png" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16">
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

      {/* Blog Posts */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl font-bold text-cream-900 mb-8">
            Stories &amp; Updates
          </motion.h2>

          {/* Category Filter */}
          <motion.div variants={fadeUp} custom={1} className="flex flex-wrap gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-poppy-700 text-cream-50"
                    : "bg-cream-100 text-cream-700 hover:bg-cream-200 border border-cream-200"
                }`}
              >
                {cat === "All" ? "All Posts" : cat.replace("&amp;", "&")}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post, i) => {
            const imageSrc = getImageSrc(post.image);
            const displayCats = getDisplayCategories(post.categories);

            return (
              <motion.div
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i % 6}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={`group block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-cream-800/8 hover:-translate-y-1 transition-all duration-300 border-t-4 h-full ${["bg-[#fdf6e8] border border-earth-warm/15 border-t-earth-warm/30", "bg-[#f3f7f0] border border-earth-olive/15 border-t-earth-olive/30", "bg-[#fdf0eb] border border-earth-terracotta/15 border-t-earth-terracotta/30", "bg-[#f0f3ec] border border-earth-sage/15 border-t-earth-sage/30", "bg-[#f7f0eb] border border-earth-clay/15 border-t-earth-clay/30", "bg-cream-100 border border-cream-300/50 border-t-cream-500/30"][i % 6]}`}
                >
                  {/* Featured Image */}
                  {imageSrc && (
                    <div className="relative h-48 overflow-hidden bg-cream-100">
                      <img
                        src={imageSrc}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    {/* Categories */}
                    {displayCats.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {displayCats.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-0.5 text-xs font-medium bg-earth-warm/10 text-earth-warm rounded-full"
                          >
                            {cat.replace("&amp;", "&")}
                          </span>
                        ))}
                        {displayCats.length > 2 && (
                          <span className="px-2.5 py-0.5 text-xs font-medium bg-cream-100 text-cream-600 rounded-full">
                            +{displayCats.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Date */}
                    <p className="text-xs text-cream-500 mb-2">{formatDate(post.date)}</p>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-bold text-cream-900 mb-2 group-hover:text-poppy-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-cream-600 line-clamp-3 leading-relaxed">
                      {post.excerpt
                        .replace(/rn/g, " ")
                        .replace(/\n/g, " ")
                        .replace(/\s+/g, " ")
                        .trim()}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-poppy-700 group-hover:gap-2 transition-all">
                      Read more
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.08l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center py-16"
          >
            <p className="text-cream-600 text-lg">No posts found in this category.</p>
          </motion.div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold border border-cream-300 text-cream-800 rounded-full hover:bg-cream-100 transition-all duration-300 hover:-translate-y-0.5"
            >
              Load More Posts
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* Press & Media Coverage */}
      <section className="bg-cream-100 texture-paper">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
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
                  <div className={`rounded-2xl p-6 shadow-sm backdrop-blur-sm ring-1 ring-white/50 hover:shadow-lg hover:shadow-cream-800/8 hover:-translate-y-0.5 transition-all duration-300 ${["bg-[#fdf6e8]/80 border border-earth-warm/15", "bg-[#f3f7f0]/80 border border-earth-olive/15", "bg-[#fdf0eb]/80 border border-earth-terracotta/15"][i % 3]}`}>
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
        </div>
      </section>

      {/* Press Inquiries */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
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
      </section>
    </main>
  );
}
