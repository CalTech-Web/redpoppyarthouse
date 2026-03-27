"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useMemo } from "react";
import blogPosts from "@/src/data/blog-posts.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

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

/**
 * Process the contentHtml to convert image src URLs from the WordPress
 * domain to local paths, since we have them mirrored in public/.
 */
function processHtml(html: string): string {
  return html
    .replace(
      /src="https?:\/\/redpoppyarthouse\.org\/wp-content\/uploads\//g,
      'src="/wp-content/uploads/'
    )
    .replace(
      /href="https?:\/\/redpoppyarthouse\.org\/wp-content\/uploads\//g,
      'href="/wp-content/uploads/'
    );
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const posts = blogPosts as BlogPost[];

  const post = useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);

  // Find adjacent posts for navigation
  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts]
  );

  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <main className="min-h-screen bg-cream-50">
        <section className="relative bg-poppy-900 text-cream-50 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-earth-warm rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-poppy-200 hover:text-cream-50 transition-colors mb-6"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Blog
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Post Not Found</h1>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="bg-surface rounded-2xl border border-cream-200 p-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-cream-900 mb-3">
              This post could not be found
            </h2>
            <p className="text-cream-700 mb-6">
              The blog post you are looking for may have been moved or removed.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-colors"
            >
              Browse All Posts
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const imageSrc = getImageSrc(post.image);
  const displayCats = getDisplayCategories(post.categories);
  const processedHtml = processHtml(post.contentHtml);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative bg-poppy-900 text-cream-50 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-earth-warm rounded-full blur-[100px]" />
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-poppy-500 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-poppy-200 hover:text-cream-50 transition-colors mb-8"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Blog
              </Link>
            </motion.div>

            {/* Categories */}
            {displayCats.length > 0 && (
              <motion.div variants={fadeUp} custom={1} className="flex flex-wrap gap-2 mb-4">
                {displayCats.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs font-medium bg-poppy-800/60 text-poppy-100 rounded-full border border-poppy-700/30"
                  >
                    {cat.replace("&amp;", "&")}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              variants={fadeUp}
              custom={2}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.p variants={fadeUp} custom={3} className="text-cream-300 text-sm">
              {formatDate(post.date)}
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Featured Image */}
      {imageSrc && (
        <section className="max-w-4xl mx-auto px-6 -mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-cream-200 mt-8"
          >
            <img
              src={imageSrc}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        </section>
      )}

      {/* Post Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-surface rounded-2xl border border-cream-200 p-6 sm:p-8 md:p-12"
        >
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </motion.div>
      </section>

      {/* Post Navigation */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {prevPost ? (
            <motion.div variants={fadeUp} custom={0}>
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group block bg-surface rounded-2xl border border-cream-200 p-5 hover:border-poppy-200 hover:shadow-lg transition-all duration-300 h-full"
              >
                <span className="text-xs text-cream-500 mb-1 block">Previous Post</span>
                <span className="font-serif text-sm font-bold text-cream-900 group-hover:text-poppy-700 transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}

          {nextPost ? (
            <motion.div variants={fadeUp} custom={1}>
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group block bg-surface rounded-2xl border border-cream-200 p-5 hover:border-poppy-200 hover:shadow-lg transition-all duration-300 h-full text-right"
              >
                <span className="text-xs text-cream-500 mb-1 block">Next Post</span>
                <span className="font-serif text-sm font-bold text-cream-900 group-hover:text-poppy-700 transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}
        </motion.div>
      </section>

      {/* Back to Blog CTA */}
      <section className="bg-cream-100 texture-paper">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-poppy-700 text-cream-50 rounded-full hover:bg-poppy-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
                All Blog Posts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
