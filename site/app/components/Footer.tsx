import Link from "next/link";

const navLinks = [
  { href: "/event", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/participate/volunteer", label: "Volunteer" },
  { href: "/participate/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Red Poppy Art House
            </h3>
            <p className="text-sm leading-relaxed">
              A community-driven arts venue in San Francisco&apos;s Mission
              District
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Navigate</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Visit Us</h4>
            <address className="not-italic text-sm leading-relaxed">
              <p>2698 Folsom St</p>
              <p>San Francisco, CA 94110</p>
              <p className="mt-2">
                <a
                  href="tel:+16507315383"
                  className="hover:text-white transition"
                >
                  (650) 731-5383
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@redpoppyarthouse.org"
                  className="hover:text-white transition"
                >
                  info@redpoppyarthouse.org
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
