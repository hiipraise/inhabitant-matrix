# The Inhabitant Matrix

A dark-luxury, editorial single-page Next.js (App Router) site for "The Inhabitant Matrix: Domain, Alignment & Adversity."

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Images

Drop these six files into `public/images/` (already referenced throughout the app):

- `core-split.jpg` — hero background (The Core Split)
- `quadrant-1a.jpg` — The Observatory of Truth
- `quadrant-1b.jpg` — The Horizon of Discernment
- `quadrant-2a.jpg` — The Sanctuary of Indwelling
- `quadrant-2b.jpg` — The Arena of Combat
- `unified-matrix.jpg` — currently unused but reserved; add it to `MatrixGrid.tsx` or a new section if you want the 4-panel composite displayed directly

Until real images are added, the browser will show broken-image placeholders where `background-image` is used — the layout itself is unaffected.

## Structure

```
app/
  layout.tsx        — root layout, fonts, metadata
  page.tsx           — assembles all sections
  globals.css         — design tokens, focus states, reduced-motion handling
components/
  Navbar.tsx
  Hero.tsx
  ExecutiveSummary.tsx
  MatrixGrid.tsx       — interactive 2x2 quadrant grid
  QuadrantDrawer.tsx   — side drawer with full quadrant profile
  DiagnosticQuiz.tsx   — 3-step "Audit Your Domain" quiz + report
  CaseStudy.tsx        — Judas vs. Jesus comparison
  RulesGrid.tsx        — 3 operational guardrails
  Footer.tsx
lib/
  data.ts              — single source of truth for all framework content
```

## Notes

- All copy, quadrant definitions, quiz logic, and rules live in `lib/data.ts` — edit there to change content without touching component markup.
- Diagnostic scoring is a simple weighted count across the four quadrants (`DiagnosticQuiz.tsx`); adjust `quizSteps` weights in `lib/data.ts` to tune how answers map to outcomes.
- Reduced-motion is respected globally via `globals.css`.
- Keyboard focus is visible everywhere (gold outline) — the drawer traps focus visually and closes on `Escape`.
- Built with Tailwind CSS utility classes only, per the brief; `framer-motion` handles all transitions.
