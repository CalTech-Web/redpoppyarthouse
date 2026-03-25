import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support Red Poppy Art House through donations. Become a patron with contributions as low as $5-10 per month.",
};

export default function GivePage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Give</h1>
        <p className="text-lg leading-relaxed mb-6">
          The Red Poppy Art House relies on community support through hundreds
          of dedicated volunteers who gift their skills to the Art House, and
          others who invest in the Red Poppy through donating at performances or
          submitting a donation online.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          You can become an official Red Poppy Art House Patron by joining our
          membership base via a small contribution as low as $5-10/month. Your
          contribution serves to sustain the Poppy throughout the year.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Ways to Support the Art House
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
          <li>Monthly patron membership ($5-10/month)</li>
          <li>One-time donations at performances</li>
          <li>Online donations</li>
          <li>Volunteering your time and skills</li>
        </ul>
        <p className="text-lg leading-relaxed">
          We are a member of Intersection for the Arts, a historic arts
          nonprofit that provides people working in arts and culture with fiscal
          sponsorship and resources to grow.
        </p>
      </section>
    </main>
  );
}
