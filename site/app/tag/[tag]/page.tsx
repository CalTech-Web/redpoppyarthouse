import type { Metadata } from "next";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const title = tag
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${title} Events`,
    description: `Browse events tagged with "${title}" at Red Poppy Art House.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const title = tag
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Tag: {title}</h1>
        <p className="text-lg text-gray-600">
          Events tagged with &quot;{title}&quot; will appear here.
        </p>
      </section>
    </main>
  );
}
