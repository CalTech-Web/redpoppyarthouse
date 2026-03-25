import {
  HeroAnimated,
  HeroTitle,
  HeroSubtext,
  HeroCTA,
  TaglineSection,
  CommunityStats,
  UpcomingEventsTeaser,
  ProgramsSection,
  AboutCommunitySection,
  VisitUsSection,
} from "./components/HomeAnimations";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-poppy-900 text-cream-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-poppy-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-earth-warm rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-poppy-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <HeroAnimated>
              <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium bg-poppy-800/60 text-poppy-100 rounded-full border border-poppy-700/40">
                Since 2003 - Mission District, San Francisco
              </span>
            </HeroAnimated>

            <HeroTitle>
              A room on a corner,
              <br />
              <span className="text-poppy-300">where art finds home.</span>
            </HeroTitle>

            <HeroSubtext>
              The Red Poppy Art House is a room on a corner in the Mission
              District of San Francisco, nestled between a myriad of
              communities. A place for slowness and the nuanced intermingling
              of ideas and activities generally termed &quot;art.&quot;
            </HeroSubtext>

            <HeroCTA />
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-poppy-400/30 to-transparent" />
      </section>

      {/* Tagline Divider */}
      <TaglineSection />

      {/* Community Stats */}
      <CommunityStats />

      {/* Upcoming Events Teaser */}
      <UpcomingEventsTeaser />

      {/* Programs Section */}
      <ProgramsSection />

      {/* About / Community Section */}
      <AboutCommunitySection />

      {/* Visit Us Section */}
      <VisitUsSection />
    </main>
  );
}
