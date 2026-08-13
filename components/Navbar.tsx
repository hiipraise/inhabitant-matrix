"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#matrix", label: "The Matrix" },
  { href: "#diagnostic", label: "Diagnostic" },
  { href: "#case-study", label: "Case Study" },
  { href: "#rules", label: "Guardrails" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/90 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-serif text-lg tracking-widest2 text-offwhite"
        >
          T.I.M.
        </a>
        <ul className="hidden items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-gold-bright"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#diagnostic"
          className="hidden rounded-sm border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-bright transition-colors duration-300 hover:bg-gold/10 md:inline-block"
        >
          Take the Diagnostic
        </a>
      </nav>
    </header>
  );
}
