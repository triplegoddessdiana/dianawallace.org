export type EssayCategory =
  | "Sovereignty"
  | "Technology & Attention"
  | "Myth & Memory"
  | "Culture";

export type EssayStatus = "Written" | "Declared";

export type Essay = {
  slug: string;
  title: string;
  status: EssayStatus;
  date: string; // YYYY-MM-DD
  readingTime: string; // e.g. "6 min"
  category: EssayCategory;
  abstract: string; // 1–2 sentences, VERY important
  body: string[]; // paragraphs (for now)
};

export const ESSAY_CATEGORIES: EssayCategory[] = [
  "Sovereignty",
  "Technology & Attention",
  "Myth & Memory",
  "Culture",
];

// Canon-level essay objects.
// Editorial lock: only "Human Sovereignty" is Written.
// All others are Declared Frames (not renderable at /essays/[slug] yet).
export const ESSAYS: Essay[] = [
  {
    slug: "human-sovereignty",
    title: "Human Sovereignty",
    status: "Written",
    date: "2026-02-01",
    readingTime: "6 min",
    category: "Sovereignty",
    abstract:
      "Human sovereignty is the capacity to choose—especially in small, ordinary moments—before automation chooses for us.",
    body: [
      "Human sovereignty means being the one who decides.",
      "Not just big decisions—small ones too: what you watch, what you read, what you respond to, what you ignore.",
      "The problem is not that machines are smart. The problem is that humans stop noticing when a choice is happening.",
      "When everything becomes fast and automatic, we react instead of decide. We follow momentum instead of intention.",
      "Sovereignty returns the moment you notice: a choice is here.",
    ],
  },
  {
    slug: "the-cost-of-convenience",
    title: "The Cost of Convenience",
    status: "Declared",
    date: "2026-02-03",
    readingTime: "7 min",
    category: "Technology & Attention",
    abstract:
      "Convenience is never free. It is paid for in attention, skill, memory, and the quiet outsourcing of agency.",
    body: [
      "Convenience moves the burden of effort elsewhere—into systems you do not control.",
      "Over time, the trade becomes invisible: you gain speed and lose orientation.",
      "A life that is always optimized begins to feel strangely unchosen.",
    ],
  },
  {
    slug: "attention-is-a-moral-act",
    title: "Attention Is a Moral Act",
    status: "Declared",
    date: "2026-02-06",
    readingTime: "5 min",
    category: "Technology & Attention",
    abstract:
      "Attention is not neutral. What you give it to becomes stronger—inside you and around you.",
    body: [
      "Attention is how you consent, even when you never signed anything.",
      "If your attention is always harvested, your inner life becomes a public resource.",
      "The simplest resistance is to choose what you look at on purpose.",
    ],
  },
  {
    slug: "objects-not-posts",
    title: "Objects, Not Posts",
    status: "Declared",
    date: "2026-02-08",
    readingTime: "4 min",
    category: "Culture",
    abstract:
      "A post is designed to pass. An object is designed to remain. Write like you’re leaving artifacts for a future reader.",
    body: [
      "The internet rewards immediacy, not permanence.",
      "But a real body of work is built from objects—clear, self-contained pieces that can be cited.",
      "If it cannot stand alone, it is not yet finished.",
    ],
  },
  {
    slug: "originators-introduce-frames",
    title: "Originators Introduce Frames",
    status: "Declared",
    date: "2026-02-10",
    readingTime: "6 min",
    category: "Sovereignty",
    abstract:
      "An originator does not merely share opinions. She introduces a frame that makes new thought possible.",
    body: [
      "Opinion competes. Frames reorganize reality.",
      "To introduce a frame is to give others a tool they didn’t have before.",
      "Your work becomes citeable when it gives people language for what they already sensed.",
    ],
  },
  {
    slug: "remembrance-is-orientation",
    title: "Remembrance Is Orientation",
    status: "Declared",
    date: "2026-02-12",
    readingTime: "5 min",
    category: "Myth & Memory",
    abstract:
      "Remembrance is not nostalgia. It is the return of the self to what is true—especially after long forgetting.",
    body: [
      "Nostalgia looks backward for comfort. Remembrance looks inward for truth.",
      "A remembered life is not a perfect life. It is a conscious one.",
      "Memory becomes medicine when it restores direction.",
    ],
  },
  {
    slug: "the-automation-of-speech",
    title: "The Automation of Speech",
    status: "Declared",
    date: "2026-02-14",
    readingTime: "7 min",
    category: "Technology & Attention",
    abstract:
      "When speech is automated, language loses friction—and with it, meaning. What becomes easy to say becomes easier to stop feeling.",
    body: [
      "Friction is part of sincerity.",
      "If language is always suggested, you risk speaking in pre-made sentences.",
      "A human voice returns when you slow down enough to choose your words.",
    ],
  },
  {
    slug: "choice-without-force",
    title: "Choice Without Force",
    status: "Declared",
    date: "2026-02-16",
    readingTime: "6 min",
    category: "Sovereignty",
    abstract:
      "Choice rarely disappears dramatically. It disappears by being replaced—one default at a time.",
    body: [
      "Defaults are powerful because they feel like nobody’s decision.",
      "A default repeated long enough becomes identity.",
      "To reclaim choice, identify the defaults you never agreed to.",
    ],
  },
  {
    slug: "myth-is-a-technology-of-meaning",
    title: "Myth Is a Technology of Meaning",
    status: "Declared",
    date: "2026-02-18",
    readingTime: "6 min",
    category: "Myth & Memory",
    abstract:
      "Myth is not escapism. It is a tool for carrying meaning across time—especially when ordinary language fails.",
    body: [
      "Myth compresses truth into image.",
      "When the world becomes too abstract, myth returns the soul to shape.",
      "A personal canon is a myth you can live inside.",
    ],
  },
  {
    slug: "silence-as-signal",
    title: "Silence as Signal",
    status: "Declared",
    date: "2026-02-20",
    readingTime: "4 min",
    category: "Myth & Memory",
    abstract:
      "Silence is not absence. It is a signal that something real is forming beneath the surface.",
    body: [
      "Not everything should be narrated while it is still becoming.",
      "Silence protects the early stages of truth.",
      "What is sacred often arrives quietly.",
    ],
  },
  {
    slug: "the-citeable-life",
    title: "The Citeable Life",
    status: "Declared",
    date: "2026-02-22",
    readingTime: "5 min",
    category: "Culture",
    abstract:
      "To live in a way others can cite is to live with coherence—so your choices form a pattern, not a performance.",
    body: [
      "Performance is optimized for applause. Coherence is optimized for truth.",
      "A citeable life is one that can be described without contradiction.",
      "Your work strengthens when your life and language agree.",
    ],
  },
  {
    slug: "glow-anyway",
    title: "Glow Anyway",
    status: "Declared",
    date: "2026-02-24",
    readingTime: "3 min",
    category: "Myth & Memory",
    abstract:
      "Glow anyway is not optimism. It is a decision: to remain luminous even when conditions are imperfect.",
    body: [
      "Glow anyway means you do not outsource your light to circumstances.",
      "It is the quiet refusal to become dim just because the world is heavy.",
      "It is a practice, not a mood.",
    ],
  },
];

export function getEssayBySlug(slug: string) {
  return ESSAYS.find((e) => e.slug === slug);
}

export function getWrittenEssays() {
  return ESSAYS.filter((e) => e.status === "Written");
}

export function getDeclaredFrames() {
  return ESSAYS.filter((e) => e.status === "Declared");
}

export function getEssaysByCategory(category: EssayCategory) {
  return ESSAYS.filter((e) => e.category === category);
}
