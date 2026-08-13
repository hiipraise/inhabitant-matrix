"use client";

import { motion } from "framer-motion";
import { caseStudy } from "@/lib/data";

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative bg-slate py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-bright">
            Case Study &amp; Deep Dive
          </p>
          <h2 className="font-serif text-4xl font-medium text-offwhite md:text-5xl">
            Proximity Is Not Possession
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-gold/10 bg-gold/10 md:grid-cols-2">
          {/* Judas */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-obsidian p-8 md:p-12"
          >
            <span className="mb-4 block font-serif text-5xl text-crimson">
              {caseStudy.left.code}
            </span>
            <h3 className="mb-1 font-serif text-3xl text-offwhite">
              {caseStudy.left.name}
            </h3>
            <p className="mb-8 text-sm uppercase tracking-[0.2em] text-muted">
              {caseStudy.left.label}
            </p>
            <ul className="space-y-4">
              {caseStudy.left.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Jesus */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-obsidian p-8 md:p-12"
          >
            <span className="mb-4 block font-serif text-5xl text-gold-bright">
              {caseStudy.right.code}
            </span>
            <h3 className="mb-1 font-serif text-3xl text-offwhite">
              {caseStudy.right.name}
            </h3>
            <p className="mb-8 text-sm uppercase tracking-[0.2em] text-muted">
              {caseStudy.right.label}
            </p>
            <ul className="space-y-4">
              {caseStudy.right.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-offwhite/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-bright" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
