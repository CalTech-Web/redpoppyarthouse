import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming events at Red Poppy Art House - live music, theater, exhibitions, workshops, and community gatherings in San Francisco.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Events</h1>
        <p className="text-lg leading-relaxed mb-10">
          The Red Poppy Art House presents a year-round calendar of
          performances, exhibitions, workshops, and community events. Check back
          often for updates on upcoming programming.
        </p>
        <div className="text-center py-12 border rounded-lg">
          <p className="text-lg text-gray-600">
            Event listings coming soon. Check back for upcoming performances and
            exhibitions.
          </p>
        </div>
      </section>
    </main>
  );
}
