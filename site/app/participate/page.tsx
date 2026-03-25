import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Participate",
  description:
    "Get involved with Red Poppy Art House - volunteer, donate, book a performance, or explore internship opportunities.",
};

export default function ParticipatePage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Participate</h1>
        <p className="text-lg leading-relaxed mb-10">
          There are many ways to get involved with the Red Poppy Art House.
          Whether you want to volunteer your time, make a donation, or explore
          professional development opportunities, we welcome your participation.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/participate/volunteer"
            className="block p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">Volunteer</h2>
            <p>
              Join our team of volunteers who help make every event possible.
              Earn a free pass to another Poppy event for every shift worked.
            </p>
          </Link>
          <Link
            href="/participate/give"
            className="block p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">Give</h2>
            <p>
              Support the Art House through donations. Become an official Red
              Poppy Art House Patron with contributions as low as $5-10/month.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
