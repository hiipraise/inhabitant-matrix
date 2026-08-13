export type QuadrantId = "1a" | "1b" | "2a" | "2b";

export interface Quadrant {
  id: QuadrantId;
  level: 1 | 2;
  code: string;
  title: string;
  formula: string;
  domain: string;
  force: "Sacred" | "Shadow";
  image: string;
  definition: string;
  traits: string[];
  accent: "gold" | "crimson";
}

export const quadrants: Quadrant[] = [
  {
    id: "1a",
    level: 1,
    code: "1a",
    title: "The Observatory of Truth",
    formula: "I live with God",
    domain: "Passive Horizon (Shared / External Space)",
    force: "Sacred",
    image: "/images/quadrant-1a.jpg",
    definition:
      "Intellectual assent and unshakeable conviction. You acknowledge the structure of the cosmos, moral law, and the reality of a Supreme Being. You exist within God's world, respecting His overarching rules without necessarily surrendering your personal domain to daily, moment-by-moment guidance.",
    traits: [
      "Holds firm theological or moral conviction",
      "Recognizes order and design in the world",
      "Respects the rules without daily consultation",
      "Belief precedes practice — often by a wide margin",
    ],
    accent: "gold",
  },
  {
    id: "1b",
    level: 1,
    code: "1b",
    title: "The Horizon of Discernment",
    formula: "I live with a Snake",
    domain: "Passive Horizon (Shared / External Space)",
    force: "Shadow",
    image: "/images/quadrant-1b.jpg",
    definition:
      "Moral clarity and environmental awareness. You recognize sin, chaos, and danger as objective facts of the world. You see the snake in the grass, understand boundaries, and know that evil exists — yet it remains an external reality you navigate around rather than a personal threat inside your room.",
    traits: [
      "Names danger and dysfunction accurately",
      "Maintains boundaries against known threats",
      "Treats evil as an environmental fact, not a resident",
      "Vigilant, but not yet personally besieged",
    ],
    accent: "crimson",
  },
  {
    id: "2a",
    level: 2,
    code: "2a",
    title: "The Sanctuary of Indwelling",
    formula: "God lives with me",
    domain: "Active Domain (Personal Territory)",
    force: "Sacred",
    image: "/images/quadrant-2a.jpg",
    definition:
      "Active communion and total submission. You surrender ownership of your interior life. God is not merely a sky overhead; He is an active inhabitant of your home. Every thought, ambition, and action is cleared through Him first. You host the Divine, making your space a living sanctuary.",
    traits: [
      "Submits daily decisions to active guidance",
      "Interior life is governed, not merely informed",
      "Alignment is practiced, not just professed",
      "The domain itself becomes sacred ground",
    ],
    accent: "gold",
  },
  {
    id: "2b",
    level: 2,
    code: "2b",
    title: "The Arena of Combat",
    formula: "A Snake lives with me",
    domain: "Active Domain (Personal Territory)",
    force: "Shadow",
    image: "/images/quadrant-2b.jpg",
    definition:
      "Personal trial, betrayal, and daily warfare. The adversary is no longer on the horizon — it sits at your table. This quadrant represents intimate betrayal, relentless temptation, targeted attacks, and deep personal pain. You are forced into daily combat within your own territory.",
    traits: [
      "Confronts betrayal or temptation at close range",
      "The threat is a resident, not a passerby",
      "Requires active, sustained combat — not avoidance",
      "Demands an audit of how the snake gained entry",
    ],
    accent: "crimson",
  },
];

export const getQuadrant = (id: QuadrantId) =>
  quadrants.find((q) => q.id === id)!;

// ---------------------------------------------------------------------------
// Diagnostic Quiz
// ---------------------------------------------------------------------------

export interface QuizOption {
  label: string;
  value: QuadrantId | "friction-high" | "friction-low";
  weight: Partial<Record<QuadrantId, number>>;
}

export interface QuizStep {
  id: number;
  title: string;
  subtitle: string;
  prompt: string;
  options: QuizOption[];
}

export const quizSteps: QuizStep[] = [
  {
    id: 1,
    title: "Horizon Audit",
    subtitle: "Level 1 — What do you observe and believe?",
    prompt:
      "When you consider the structure of reality — order versus chaos, good versus danger — which is closer to your honest position?",
    options: [
      {
        label:
          "I hold firm, settled conviction that a moral order and a Supreme Being govern reality.",
        value: "1a",
        weight: { "1a": 2 },
      },
      {
        label:
          "I mostly see danger, dysfunction, and threat when I survey the world around me.",
        value: "1b",
        weight: { "1b": 2 },
      },
      {
        label: "Both are true for me in roughly equal measure.",
        value: "1a",
        weight: { "1a": 1, "1b": 1 },
      },
    ],
  },
  {
    id: 2,
    title: "Sanctuary Audit",
    subtitle: "Level 2 — What actively governs your private choices?",
    prompt:
      "Set aside what you believe or observe. In your private decisions — the ones no one watches — what actually has the final word?",
    options: [
      {
        label:
          "A daily, active submission — my choices are consulted and governed, not just informed.",
        value: "2a",
        weight: { "2a": 2 },
      },
      {
        label:
          "A recurring betrayal, temptation, or conflict I fight inside my own house.",
        value: "2b",
        weight: { "2b": 2 },
      },
      {
        label:
          "Honestly, mostly habit and convenience — neither deep alignment nor open warfare.",
        value: "2a",
        weight: { "2a": 1, "2b": 1 },
      },
    ],
  },
  {
    id: 3,
    title: "Friction Assessment",
    subtitle: "Where is the gap between what you know and what you host?",
    prompt:
      "When you compare what you believe (Step 1) to what you actually host (Step 2), how wide is the gap?",
    options: [
      {
        label:
          "Wide. My convictions and my private reality rarely match up.",
        value: "friction-high",
        weight: {},
      },
      {
        label: "Narrow. What I believe and what I live are closely aligned.",
        value: "friction-low",
        weight: {},
      },
      {
        label: "I've never measured it directly until now.",
        value: "friction-high",
        weight: {},
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Case Study
// ---------------------------------------------------------------------------

export const caseStudy = {
  left: {
    name: "Judas",
    code: "1ab",
    label: "Passive Head Knowledge",
    points: [
      "Walked alongside the Truth for three years — full access to 1a.",
      "Observed the Shadow's danger in the wider world without naming it at home — stalled at 1b.",
      "Never surrendered his private ledger, his ambitions, or his betrayal to active governance.",
      "Proximity to conviction without indwelling collapsed under private pressure.",
    ],
  },
  right: {
    name: "Jesus",
    code: "2ab",
    label: "Active Domain & Indwelling",
    points: [
      "Held unshakeable conviction (1a) that never remained merely intellectual.",
      "Named the adversary precisely, in the wilderness and at the table — full command of 1b.",
      "Submitted every private decision to active governance — the definition of 2a.",
      "Met betrayal and trial inside his own domain and did not flinch from 2b.",
    ],
  },
};

// ---------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------

export const rules = [
  {
    number: "Rule I",
    title: "Never Confuse Horizon for Domain",
    body: "Acknowledging God's existence (1a) does not grant the protection or transformation of indwelling (2a). Belief observed is not the same as ground held.",
  },
  {
    number: "Rule II",
    title: "Do Not Minimize the Snake in 2b",
    body: "When trial or betrayal enters your private space, treating it like a distant environmental factor (1b) leads to destruction. You must face it as an active combatant in your domain.",
  },
  {
    number: "Rule III",
    title: "The Host Holds Responsibility",
    body: "When you move to Level 2, you accept ownership. If a snake lives with you (2b), you must audit how it entered and use your alignment (2a) to drive it out.",
  },
];

// ---------------------------------------------------------------------------
// Executive Summary
// ---------------------------------------------------------------------------

export const problems = [
  {
    title: "The Illusion of Conviction",
    body: "Prevents people from assuming that merely acknowledging a supreme good (1a) means they are actively practicing it (2a).",
  },
  {
    title: "The Victimization Trap",
    body: "Differentiates between external hazards in the environment (1b) and dangerous forces invited into one's personal sanctuary (2b).",
  },
  {
    title: "The Agency Gap",
    body: "Shifts the focus from reacting to an external world to managing and defending one's personal domain.",
  },
];
