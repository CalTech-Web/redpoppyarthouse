import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer at Red Poppy Art House - help with events, engage with the community, and earn free passes to performances.",
};

export default function VolunteerPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Volunteer</h1>
        <p className="text-lg leading-relaxed mb-6">
          The Red Poppy Art House is primarily an artist and volunteer-run
          organization. Volunteers play an integral role in everyday operations,
          from assisting with event productions to stocking up on concessions.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          For every shift worked, each volunteer receives one free pass to
          another Poppy event.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Volunteer Shifts Include</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-8">
          <li>Helping to set up the performance space</li>
          <li>Engaging with guests and community members</li>
          <li>Handling admissions at the door</li>
          <li>Managing concessions at the counter</li>
        </ul>
        <p className="text-lg leading-relaxed">
          To get started, reach out to us at{" "}
          <a
            href="mailto:volunteer@redpoppyarthouse.org"
            className="underline hover:opacity-80"
          >
            volunteer@redpoppyarthouse.org
          </a>
        </p>
      </section>
    </main>
  );
}
