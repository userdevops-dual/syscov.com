import Link from "next/link";
import { Section } from "./section";
import { ServiceArt } from "./service-art";
import { SyscovBracket } from "./syscov-mark";
import { projects } from "../lib/case-studies";

/**
 * The AI pitch.
 *
 * Each card names a category Syscov has actually shipped in, and the count
 * beside it is derived from the published case-study index rather than typed
 * in — so it cannot drift, and it is not a claim beyond what the site already
 * documents.
 */
const pillars = [
  {
    category: "RAG & Search" as const,
    title: "Retrieval & grounding",
    description:
      "Answers tied to your own sources with the citation attached — and a refusal when the passage genuinely is not there.",
    art: "spiral" as const,
  },
  {
    category: "Multi-Agent Systems" as const,
    title: "Agent systems",
    description:
      "Multi-step work that runs end to end, with a supervisor that can halt a run and roll it back mid-flight.",
    art: "prism" as const,
  },
  {
    category: "Real-Time Inference" as const,
    title: "Production inference",
    description:
      "Models serving inside a latency budget, where a slow answer counts for exactly as much as a wrong one.",
    art: "migrate" as const,
  },
];

export function AiSpotlight() {
  return (
    <Section className="ai-pitch" id="ai" label="AI at Syscov">
      <SyscovBracket className="ai-pitch__bracket ai-pitch__bracket--start" gradientId="ai-bracket-start" side="left" />
      <SyscovBracket className="ai-pitch__bracket ai-pitch__bracket--end" gradientId="ai-bracket-end" side="right" />

      <div className="ai-pitch__head" data-reveal>
        <div>
          <p className="eyebrow">AI at Syscov</p>
          <h2>
            AI is easy to demo. <span className="gradient-text">We build the half that has to be right.</span>
          </h2>
        </div>
        <Link className="button button--light" href="/services/ai-automation">
          Learn more
          <span aria-hidden="true" className="button__arrow">
            <svg fill="none" viewBox="0 0 16 16">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="ai-pitch__grid" data-reveal-stagger>
        {pillars.map((pillar) => {
          const count = projects.filter((project) => project.category === pillar.category).length;
          return (
            <article className="ai-card" data-reveal key={pillar.title}>
              <span className="ai-card__art">
                <ServiceArt id={`ai-${pillar.art}`} name={pillar.art} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <p className="ai-card__count">
                {count} documented {count === 1 ? "system" : "systems"}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
