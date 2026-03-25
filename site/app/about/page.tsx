import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Red Poppy Art House, a community-driven arts venue in San Francisco's Mission District presenting over 140 performances, exhibitions, and workshops annually.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About Red Poppy Art House</h1>
        <p className="text-lg leading-relaxed mb-6">
          Red Poppy Art House is a community-driven arts venue located in San
          Francisco&apos;s vibrant Mission District. We present a vigorous
          performance program spanning multiple disciplines and embracing both
          traditional and contemporary forms.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The Art House also hosts artist residencies, a socially engaged
          professional development track, and assists in curating space for the
          neighborhood-wide bimonthly MAPP happening (Mission Arts &amp;
          Performance Project).
        </p>
        <p className="text-lg leading-relaxed">
          Each year, the Red Poppy hosts over 140 diverse performances,
          exhibitions, workshops, and artist residencies, all powered by
          hundreds of dedicated volunteers who gift their skills to keep this
          community space alive.
        </p>
      </section>
    </main>
  );
}
