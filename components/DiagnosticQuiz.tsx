"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { quizSteps, getQuadrant, type QuadrantId } from "@/lib/data";

interface Answer {
  stepId: number;
  value: string;
  weight: Partial<Record<QuadrantId, number>>;
}

export default function DiagnosticQuiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const isComplete = answers.length === quizSteps.length;
  const currentStep = quizSteps[stepIndex];

  const handleSelect = (
    value: string,
    weight: Partial<Record<QuadrantId, number>>
  ) => {
    const next = [...answers.filter((a) => a.stepId !== currentStep.id)];
    next.push({ stepId: currentStep.id, value, weight });
    setAnswers(next);

    if (stepIndex < quizSteps.length - 1) {
      setTimeout(() => setStepIndex(stepIndex + 1), 350);
    } else {
      setTimeout(() => setStepIndex(stepIndex + 1), 350); // moves past last step -> report
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setStepIndex(0);
  };

  const report = useMemo(() => {
    if (!isComplete) return null;

    const scores: Record<QuadrantId, number> = { "1a": 0, "1b": 0, "2a": 0, "2b": 0 };
    answers.forEach((a) => {
      (Object.keys(a.weight) as QuadrantId[]).forEach((k) => {
        scores[k] += a.weight[k] ?? 0;
      });
    });

    const level1Winner: QuadrantId = scores["1a"] >= scores["1b"] ? "1a" : "1b";
    const level2Winner: QuadrantId = scores["2a"] >= scores["2b"] ? "2a" : "2b";

    const frictionAnswer = answers.find((a) => a.stepId === 3)?.value;
    const highFriction = frictionAnswer === "friction-high";

    const primaryQuadrant =
      level2Winner === "2a" ? level2Winner : level2Winner; // level 2 always dominant in state map

    let frictionLabel = "";
    let strategy = "";

    if (level1Winner === "1a" && level2Winner === "2b") {
      frictionLabel = "The Denial Gap — Conviction Without Governance";
      strategy =
        "Your Level 1 conviction (1a) is not reaching your Level 2 domain. Audit how the adversary gained entry, and convert professed belief into active, daily submission (2a) rather than allowing 2b to persist unchallenged.";
    } else if (level1Winner === "1b" && level2Winner === "2b") {
      frictionLabel = "The Escalation Gap — Awareness Without Combat Readiness";
      strategy =
        "You already see danger clearly at the horizon (1b), and it has now entered your domain (2b). Stop treating it as a distant fact — name it as a resident combatant and build 2a strength to expel it.";
    } else if (level1Winner === "1a" && level2Winner === "2a") {
      frictionLabel = "Aligned — Conviction Matches Governance";
      strategy =
        "Your Level 1 conviction and Level 2 governance are closely matched. The work now is depth and consistency: guard the sanctuary you've built and remain alert for any snake testing the perimeter.";
    } else {
      frictionLabel = "The Hypocrisy Gap — Belief Ahead of Practice";
      strategy =
        "You recognize danger externally but your private domain is not yet actively hosting either force with full clarity. Bring your Level 1 discernment (1b) into a concrete Level 2 audit — decide what actually governs your private choices.";
    }

    return {
      stateQuadrant: getQuadrant(level2Winner),
      horizonQuadrant: getQuadrant(level1Winner),
      frictionLabel,
      strategy,
      highFriction,
    };
  }, [answers, isComplete]);

  return (
    <section
      id="diagnostic"
      className="relative overflow-hidden bg-obsidian py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-vignette" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-widest2 text-gold-bright">
            Interactive Diagnostic
          </p>
          <h2 className="mb-5 font-serif text-4xl font-medium text-offwhite md:text-5xl">
            Audit Your Domain
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-muted">
            Three questions. No wrong answers — only an honest map of where
            you currently stand.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12 flex items-center justify-center gap-3">
          {quizSteps.map((s, i) => (
            <div
              key={s.id}
              className={`h-1 w-16 rounded-full transition-colors duration-500 ${
                i < stepIndex || isComplete
                  ? "bg-gold-bright"
                  : i === stepIndex
                  ? "bg-gold/50"
                  : "bg-offwhite/10"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border border-gold/10 bg-slate/60 p-8 md:p-12"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold-bright">
                Step {currentStep.id} — {currentStep.title}
              </p>
              <p className="mb-6 text-sm text-muted">{currentStep.subtitle}</p>
              <h3 className="mb-8 font-serif text-2xl leading-snug text-offwhite md:text-3xl">
                {currentStep.prompt}
              </h3>

              <div className="space-y-3">
                {currentStep.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect(opt.value, opt.weight)}
                    className="w-full border border-offwhite/10 bg-obsidian/40 p-5 text-left text-sm leading-relaxed text-offwhite/90 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            report && (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="border border-gold/30 bg-slate/80 p-8 shadow-gold-lg md:p-12"
              >
                <p className="mb-2 text-xs uppercase tracking-widest2 text-gold-bright">
                  Territorial State Report
                </p>
                <h3 className="mb-8 font-serif text-3xl text-offwhite md:text-4xl">
                  Your Domain, Mapped
                </h3>

                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="border border-gold/10 p-5">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                      Horizon (Level 1)
                    </p>
                    <p className="font-serif text-xl text-offwhite">
                      {report.horizonQuadrant.code} —{" "}
                      {report.horizonQuadrant.title}
                    </p>
                  </div>
                  <div className="border border-gold/10 p-5">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                      Domain (Level 2) — Primary Quadrant
                    </p>
                    <p className="font-serif text-xl text-gold-bright">
                      {report.stateQuadrant.code} —{" "}
                      {report.stateQuadrant.title}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="mb-2 text-xs uppercase tracking-widest2 text-gold-bright">
                    Primary Friction
                  </p>
                  <p className="font-serif text-xl italic text-offwhite">
                    {report.frictionLabel}
                  </p>
                </div>

                <div className="mb-10">
                  <p className="mb-2 text-xs uppercase tracking-widest2 text-gold-bright">
                    Actionable Strategy
                  </p>
                  <p className="leading-relaxed text-muted">
                    {report.strategy}
                  </p>
                </div>

                <button
                  onClick={handleRestart}
                  className="border border-offwhite/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-offwhite transition-colors duration-300 hover:border-gold/50 hover:text-gold-bright"
                >
                  Retake the Diagnostic
                </button>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
