/**
 * The approved site narrative. Keep proof-based content here so individual
 * sections do not drift into generic or unverified marketing claims.
 */
export const siteContent = {
  companyName: "Syscov",
  positioning: {
    tagline: "From Ideas to Production-Ready Technology.",
    alternativeTagline: "Your digital journey starts here.",
    emphasis: "Production-Ready",
  },
  primaryObjective:
    "Present Syscov as a technology engineering partner for complex digital projects, from idea through production.",
  visitorJourney: [
    "Who Syscov is",
    "The problems Syscov understands",
    "Technical depth and capabilities",
    "Relevant work and proof",
    "Trust, process, and execution approach",
    "A clear conversation starter",
  ],
  proofPrinciples: [
    "Lead with capability, experience, technical depth, trust, process, and execution.",
    "Use specific, supportable evidence instead of generic superlatives.",
    "Do not publish client names, metrics, certifications, project counts, or other claims until supplied and approved.",
  ],
} as const;

/**
 * Everything below is deliberately empty or null until Syscov supplies real,
 * approved data. Each section reads these values and renders the corresponding
 * UI only when something real exists, so nothing on the page implies a claim
 * that has not been verified. Filling these in requires no layout changes.
 */

type Optional = string | null;

export const contactDetails: {
  email: Optional;
  phone: Optional;
  /** e.g. "Most inquiries get a response within one business day." Only publish a policy Syscov actually holds to. */
  responsePolicy: Optional;
  location: Optional;
} = {
  email: null,
  phone: null,
  responsePolicy: null,
  location: null,
};

/**
 * Industries strip.
 *
 * Every entry below is derived from work already described elsewhere on this
 * site — the 20 case studies in lib/case-studies.ts and the four representative
 * engagements on the AI Audit page. The `evidence` field records which, so the
 * list stays auditable and nothing here is a claim the site does not already
 * make. Do not add an industry without a published system behind it.
 *
 * This replaces a client-logo strip: named clients and their marks are only
 * publishable with written permission, which is not something to assume.
 */
export const industries: { name: string; evidence: string }[] = [
  { name: "Financial services", evidence: "Sentinel — fraud scoring inside the authorisation window" },
  { name: "Healthcare & life sciences", evidence: "Cortex — clinical fine-tuning inside the compliance boundary" },
  { name: "Legal & compliance", evidence: "Lexicon — legal research over 14M case filings" },
  { name: "Manufacturing & industrial", evidence: "Argus — defect detection at line speed; Foresight — 50k sensors" },
  { name: "Retail & commerce", evidence: "Vantage — vector-native search across 54M SKUs" },
  { name: "Logistics & operations", evidence: "Meridian — back-office workflows; regional dispatch engagement" },
  { name: "B2B SaaS platforms", evidence: "Bastion — 800+ isolated tenants; Forge — shared GPU fleet" },
  { name: "Media & content", evidence: "Watchtower — moderation across 12M live streams a day" },
];

/** Real, measured team numbers only — never "40+" style placeholders. */
export const teamStats: { value: string; label: string }[] = [];

export const socialLinks: { label: string; href: string }[] = [];

/**
 * Hero background video.
 *
 * Drop the files in /public/media and set the paths below — nothing else needs
 * to change. The hero switches to its dark, light-text treatment automatically
 * whenever `mp4` is non-null.
 *
 *   mp4    required. H.264/AAC — the broadest-support format.
 *   webm   optional. VP9/AV1; listed first, so browsers that support it pull
 *          the smaller file and everyone else falls through to the mp4.
 *   poster required in practice. Shown before the first frame decodes, and it
 *          is what visitors with prefers-reduced-motion see instead of motion.
 *
 * Do not ship the raw 4K master. A 4K H.264 loop is tens of megabytes and will
 * dominate load time on the one page that has to make a first impression.
 * Downscale to 1920x1080 (a hero is letterboxed and heavily overlaid, so 4K
 * detail is not visible), cap it at 8-12 seconds, strip the audio track, and
 * aim for under ~4 MB.
 *
 * Left null because no footage has been supplied. It must be footage Syscov
 * owns or holds a commercial licence for — stock clips used without a licence
 * are a real liability on a company site, and generic "tech" footage that
 * implies it shows Syscov's own work or premises would be a false claim.
 */
export const heroVideo: {
  mp4: string | null;
  webm: string | null;
  poster: string | null;
} = {
  mp4: "/media/hud-analysis.mp4",
  webm: null,
  poster: "/media/posters/hud-analysis.jpg",
};

/**
 * Company achievements.
 *
 * Empty until real, verifiable milestones are supplied. Never populate this
 * with round numbers, award names, or "trusted by N teams" style claims that
 * have not been confirmed — the section simply does not render while empty.
 */
export const achievements: { value: string; label: string; note?: string }[] = [];

/**
 * Open roles.
 *
 * Empty until Syscov actually has vacancies. While empty the careers section
 * renders an honest "no open roles right now" state with an open application
 * route, rather than inventing listings.
 */
export const openRoles: { title: string; discipline: string; location: string; type: string }[] = [];

/**
 * AI Audit commercial terms.
 *
 * Note there is deliberately no single price: the audit is scoped and quoted
 * per project after the discovery call, then held fixed for the duration. The
 * page must not imply a published flat rate.
 */
export const aiAuditOffer = {
  pricing: "Priced per project",
  timeframe: "12 days",
  /** Adjectival form — reads as "a free 30-minute call". */
  callLength: "30-minute",
  /** Compact form for the mono meta lines. */
  callLengthShort: "30-min",
} as const;
