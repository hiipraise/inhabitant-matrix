"use client";

import { motion } from "framer-motion";
import { rules } from "@/lib/data";

export default function RulesGrid() {
  return (
    <section id="rules" className="relative bg-obsidian py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-bright">
            Operational Guardrails
          </p>
          <h2 className="font-serif text-4xl font-medium text-offwhite md:text-5xl">
            Rules of Engagement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-gold/10 bg-slate/60 p-8 transition-colors duration-500 hover:border-gold/40"
            >
              <div className="mb-6 hairline w-10" />
              <p className="mb-4 text-xs uppercase tracking-widest2 text-gold-bright">
                {rule.number}
              </p>
              <h3 className="mb-4 font-serif text-2xl leading-snug text-offwhite">
                {rule.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {rule.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
