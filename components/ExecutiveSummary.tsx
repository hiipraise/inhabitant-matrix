"use client";

import { motion } from "framer-motion";
import { problems } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ExecutiveSummary() {
  return (
    <section className="relative bg-obsidian py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          className="mb-16 flex items-end justify-between gap-6 border-b border-gold/10 pb-8"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-bright">
              Executive Summary
            </p>
            <h2 className="max-w-2xl font-serif text-4xl font-medium text-offwhite md:text-5xl">
              Who occupies your space determines what governs your life.
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left column — Central Idea + Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="space-y-10"
          >
            <div>
              <h3 className="mb-3 font-serif text-2xl text-gold-bright">
                The Central Idea
              </h3>
              <p className="leading-relaxed text-muted">
                Human experience is not merely shaped by what we believe or
                what happens to us; it is governed by the intersection of{" "}
                <span className="text-offwhite">Domain</span> — where agency
                resides — and{" "}
                <span className="text-offwhite">Archetypal Force</span> — the
                nature of what we engage. Most individuals navigate life
                through passive observation. Few transition into active
                inhabitation.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-serif text-2xl text-gold-bright">
                The Core Philosophy
              </h3>
              <ul className="space-y-4 text-muted">
                <li className="leading-relaxed">
                  <span className="font-serif italic text-offwhite">
                    Grammar is Spatial —{" "}
                  </span>
                  moving from &ldquo;I live with&hellip;&rdquo; to
                  &ldquo;&hellip;lives with me&rdquo; is a shift from
                  borrowing space to owning it.
                </li>
                <li className="leading-relaxed">
                  <span className="font-serif italic text-offwhite">
                    Knowledge vs. Indwelling —{" "}
                  </span>
                  intellectual awareness of a principle does not equal lived
                  reality. Alignment requires hosting the virtue; combat
                  requires confronting the shadow at home.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right column — 3 Problems */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            variants={fadeUp}
          >
            <h3 className="mb-6 font-serif text-2xl text-gold-bright">
              Three Problems It Solves
            </h3>
            <div className="space-y-6">
              {problems.map((problem, i) => (
                <div
                  key={problem.title}
                  className="group relative border border-gold/10 bg-slate/60 p-6 transition-colors duration-300 hover:border-gold/30"
                >
                  <span className="mb-2 block font-serif text-sm text-gold-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mb-2 font-serif text-xl text-offwhite">
                    {problem.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">
                    {problem.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
