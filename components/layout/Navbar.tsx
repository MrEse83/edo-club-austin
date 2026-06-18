"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bronze/15 bg-parchment/95 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="font-display text-lg font-semibold text-ink">
          {site.shortName}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm font-medium text-ink/80 transition-colors hover:text-coral"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-sm bg-coral px-5 py-2 text-sm font-semibold text-parchment transition-colors hover:bg-coral-dark md:inline-flex"
        >
          Get in touch
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-bronze/15 bg-parchment md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-body text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
