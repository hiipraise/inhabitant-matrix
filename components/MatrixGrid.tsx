"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { quadrants, type Quadrant } from "@/lib/data";
import QuadrantDrawer from "./QuadrantDrawer";

export default function MatrixGrid() {
  const [active, setActive] = useState<Quadrant | null>(null);

  return (
    <section id="matrix" className="relative bg-slate py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-bright">
            Matrix Architecture
          </p>
          <h2 className="mb-5 font-serif text-4xl font-medium text-offwhite md:text-5xl">
            Four Quadrants, Two Axes
          </h2>
          <p className="leading-relaxed text-muted">
            One axis moves from Passive Horizon to Active Domain. The other
            moves from Sacred to Shadow. Select any quadrant to open its full
            diagnostic profile.
          </p>
        </motion.div>

        {/* Axis labels */}
        <div className="mx-auto grid max-w-4xl grid-cols-[auto_1fr] gap-4">
          <div className="hidden md:block" />
          <div className="hidden grid-cols-2 gap-6 px-2 text-center text-xs uppercase tracking-[0.2em] text-muted md:grid">
            <span>Sacred Force</span>
            <span>Shadow Force</span>
          </div>

          <div className="hidden flex-col items-center justify-around md:flex">
            <span className="rotate-180 text-xs uppercase tracking-[0.2em] text-muted [writing-mode:vertical-rl]">
              Level 1 — Passive Horizon
            </span>
            <span className="rotate-180 text-xs uppercase tracking-[0.2em] text-muted [writing-mode:vertical-rl]">
              Level 2 — Active Domain
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {quadrants.map((q, i) => (
              <QuadrantCard
                key={q.id}
                quadrant={q}
                index={i}
                onOpen={() => setActive(q)}
              />
            ))}
          </div>
        </div>
      </div>

      <QuadrantDrawer quadrant={active} onClose={() => setActive(null)} />
    </section>
  );
}

function QuadrantCard({
  quadrant,
  index,
  onOpen,
}: {
  quadrant: Quadrant;
  index: number;
  onOpen: () => void;
}) {
  const accentColor = quadrant.accent === "crimson" ? "#8B0000" : "#D4AF37";

  return (
    <motion.button
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={onOpen}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden border border-gold/10 bg-obsidian text-left transition-all duration-500 hover:border-gold/40 focus-visible:border-gold/40"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
        style={{ backgroundImage: `url('${quadrant.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/10" />

      <div
        className="absolute right-0 top-0 h-16 w-16 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accentColor}33, transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-6 md:p-7">
        <span
          className="mb-3 block font-serif text-4xl font-medium"
          style={{ color: accentColor }}
        >
          {quadrant.code}
        </span>
        <h3 className="mb-1 font-serif text-xl text-offwhite md:text-2xl">
          {quadrant.title}
        </h3>
        <p className="mb-4 text-sm italic text-muted">
          &ldquo;{quadrant.formula}&rdquo;
        </p>
        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-offwhite/70 transition-colors duration-300 group-hover:text-gold-bright">
          Open Profile
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </motion.button>
  );
}
