"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-obsidian grain">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/core-split.jpg')" }}
        role="img"
        aria-label="The Core Split — Level 1 versus Level 2 of the Inhabitant Matrix"
      />
      {/* Dark architectural gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-vignette" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs uppercase tracking-widest2 text-gold-bright"
        >
          A Diagnostic Framework
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-4xl font-serif text-[13vw] font-medium leading-[0.95] tracking-tight text-offwhite sm:text-7xl md:text-8xl"
        >
          The Inhabitant <span className="text-gradient-gold">Matrix</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted md:text-xl"
        >
          Domain, Alignment &amp; Adversity — a diagnostic framework for
          agency, moral architecture, and spiritual reality.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10 max-w-2xl border-l border-gold/40 pl-6 font-serif text-xl italic leading-snug text-offwhite/90 md:text-2xl"
        >
          &ldquo;Grammar is spatial: moving from &lsquo;I live with&hellip;&rsquo;
          to &lsquo;&hellip;lives with me&rsquo; is a shift from borrowing
          space to owning space.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#matrix"
            className="group inline-flex items-center justify-center gap-2 border border-gold-bright bg-gold-bright px-8 py-4 text-xs uppercase tracking-[0.2em] text-obsidian transition-all duration-300 hover:bg-transparent hover:text-gold-bright"
          >
            Explore the Matrix
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#diagnostic"
            className="inline-flex items-center justify-center gap-2 border border-offwhite/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-offwhite transition-all duration-300 hover:border-gold/60 hover:text-gold-bright"
          >
            Take the Diagnostic
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Descend
        </span>
        <span className="h-10 w-px animate-shimmer bg-gradient-to-b from-gold/70 via-gold/20 to-transparent bg-[length:1px_200%]" />
      </motion.div>
    </section>
  );
}
