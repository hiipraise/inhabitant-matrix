"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Quadrant } from "@/lib/data";

export default function QuadrantDrawer({
  quadrant,
  onClose,
}: {
  quadrant: Quadrant | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = quadrant ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [quadrant, onClose]);

  const accentColor =
    quadrant?.accent === "crimson" ? "#8B0000" : "#D4AF37";

  return (
    <AnimatePresence>
      {quadrant && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-xl overflow-y-auto border-l border-gold/20 bg-slate"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${quadrant.image}')` }}
                role="img"
                aria-label={quadrant.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close panel"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-offwhite/20 bg-obsidian/60 text-offwhite transition-colors hover:border-gold/60 hover:text-gold-bright"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-5 left-6">
                <span
                  className="font-serif text-6xl font-medium"
                  style={{ color: accentColor }}
                >
                  {quadrant.code}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="mb-2 text-xs uppercase tracking-widest2 text-muted">
                {quadrant.domain}
              </p>
              <h3
                id="drawer-title"
                className="mb-3 font-serif text-3xl text-offwhite md:text-4xl"
              >
                {quadrant.title}
              </h3>
              <p
                className="mb-8 font-serif text-xl italic"
                style={{ color: accentColor }}
              >
                &ldquo;{quadrant.formula}&rdquo;
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4 border-y border-gold/10 py-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    Force
                  </p>
                  <p className="mt-1 font-serif text-lg text-offwhite">
                    {quadrant.force}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    Level
                  </p>
                  <p className="mt-1 font-serif text-lg text-offwhite">
                    Level {quadrant.level} —{" "}
                    {quadrant.level === 1 ? "Passive Horizon" : "Active Domain"}
                  </p>
                </div>
              </div>

              <p className="mb-8 leading-relaxed text-muted">
                {quadrant.definition}
              </p>

              <p className="mb-4 text-xs uppercase tracking-widest2 text-gold-bright">
                Key Behavioral Traits
              </p>
              <ul className="space-y-3">
                {quadrant.traits.map((trait) => (
                  <li key={trait} className="flex gap-3 text-sm text-offwhite/90">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
