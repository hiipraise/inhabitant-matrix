const socials = [
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-obsidian py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-2xl tracking-widest2 text-offwhite">
              THE INHABITANT MATRIX
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Domain, Alignment &amp; Adversity — a diagnostic framework for
              agency, moral architecture, and spiritual reality.
            </p>
          </div>

          <div className="flex gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold-bright"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col gap-4 text-xs text-muted/70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} The Inhabitant Matrix. All rights reserved.</p>
          <p className="italic">
            Sovereign. Uncompromising. Architectural. Penetrating.
          </p>
        </div>
      </div>
    </footer>
  );
}
