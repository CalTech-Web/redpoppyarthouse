"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/event", label: "Events" },
  { href: "/programs", label: "Programs" },
  { href: "/participate", label: "Participate" },
  { href: "/rentals", label: "Rentals" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md border-b border-cream-300/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Poppy flower icon */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 ${
            scrolled ? "bg-poppy-700 group-hover:bg-poppy-600" : "bg-poppy-700/80 group-hover:bg-poppy-600/90 backdrop-blur-sm"
          }`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" fill="#FFF8F0" />
              <path
                d="M12 2C12 2 14 6 14 9C14 9 18 7 18 7C18 7 16 11 14 12C16 13 18 17 18 17C18 17 14 15 12 14C12 17 12 22 12 22C12 22 12 17 12 14C10 15 6 17 6 17C6 17 8 13 10 12C8 11 6 7 6 7C6 7 10 9 10 9C10 6 12 2 12 2Z"
                fill="#FBE0E0"
                stroke="#FFF8F0"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-lg font-bold leading-tight tracking-tight transition-colors duration-300 ${
              scrolled ? "text-poppy-900" : "text-cream-50"
            }`}>
              Red Poppy
            </span>
            <span className={`text-[11px] uppercase tracking-[0.15em] font-medium leading-tight transition-colors duration-300 ${
              scrolled ? "text-cream-700" : "text-cream-200"
            }`}>
              Art House
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                scrolled
                  ? "text-cream-800 hover:text-poppy-700 hover:bg-poppy-50"
                  : "text-cream-100 hover:text-cream-50 hover:bg-cream-50/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/participate/give"
            className={`ml-3 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5 ${
              scrolled
                ? "text-cream-50 bg-poppy-700 hover:bg-poppy-600 hover:shadow-md"
                : "text-cream-50 bg-poppy-600/90 hover:bg-poppy-600 backdrop-blur-sm hover:shadow-md"
            }`}
          >
            Support Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-cream-800 hover:text-poppy-700 hover:bg-poppy-50"
              : "text-cream-100 hover:text-cream-50 hover:bg-cream-50/10"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden bg-cream-50/98 backdrop-blur-md border-t border-cream-200/50 transition-[height,opacity] duration-300 ease-in-out"
        style={{
          height: menuHeight,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-base font-medium text-cream-800 hover:text-poppy-700 hover:bg-poppy-50 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/participate/give"
            onClick={() => setIsOpen(false)}
            className="mt-3 px-4 py-3.5 text-center text-base font-semibold text-cream-50 bg-poppy-700 hover:bg-poppy-600 rounded-full transition-colors shadow-sm"
          >
            Support Us
          </Link>
        </div>
      </div>
    </header>
  );
}
