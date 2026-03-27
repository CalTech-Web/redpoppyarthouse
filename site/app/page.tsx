import {
  HeroSection,
  StatsSection,
  OurStorySection,
  UpcomingEventsSection,
  ProgramsSection,
  MissionSection,
  GetInvolvedSection,
  VisitUsSection,
} from "./components/HomeAnimations";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Full-screen immersive hero */}
      <HeroSection />

      {/* 2. Stats / Legacy Band */}
      <StatsSection />

      {/* 3. Our Story */}
      <OurStorySection />

      {/* 4. Upcoming Events - Priority Feature */}
      <UpcomingEventsSection />

      {/* 5. Programs */}
      <ProgramsSection />

      {/* 6. Mission */}
      <MissionSection />

      {/* 7. Get Involved */}
      <GetInvolvedSection />

      {/* 8. Visit Us / Contact */}
      <VisitUsSection />
    </main>
  );
}
