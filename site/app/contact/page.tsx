import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Red Poppy Art House - located at 2698 Folsom St, San Francisco, CA 94110. Phone: (650) 731-5383.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Hours &amp; Location
            </h2>
            <address className="not-italic text-lg leading-relaxed mb-6">
              <p className="font-semibold">Red Poppy Art House</p>
              <p>2698 Folsom St</p>
              <p>San Francisco, CA 94110</p>
            </address>
            <p className="text-lg mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+16507315383" className="underline hover:opacity-80">
                (650) 731-5383
              </a>
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Tentative Hours
            </h3>
            <ul className="space-y-1 text-lg">
              <li>Monday - Thursday: 9:00am - 12:00pm</li>
              <li>Friday - Saturday: 7:00pm - 10:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
            <p className="text-sm mt-2 text-gray-600">
              Hours subject to change. All other times by appointment.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Email</h3>
            <ul className="space-y-1 text-lg">
              <li>
                General:{" "}
                <a
                  href="mailto:info@redpoppyarthouse.org"
                  className="underline hover:opacity-80"
                >
                  info@redpoppyarthouse.org
                </a>
              </li>
              <li>
                Booking:{" "}
                <a
                  href="mailto:booking@redpoppyarthouse.org"
                  className="underline hover:opacity-80"
                >
                  booking@redpoppyarthouse.org
                </a>
              </li>
              <li>
                Volunteer:{" "}
                <a
                  href="mailto:volunteer@redpoppyarthouse.org"
                  className="underline hover:opacity-80"
                >
                  volunteer@redpoppyarthouse.org
                </a>
              </li>
              <li>
                Rentals:{" "}
                <a
                  href="mailto:rentals@redpoppyarthouse.org"
                  className="underline hover:opacity-80"
                >
                  rentals@redpoppyarthouse.org
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
