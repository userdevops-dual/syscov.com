import Link from "next/link";
import { Section } from "./section";
import { SyscovBracket } from "./syscov-mark";
import { projects } from "../lib/case-studies";

/**
 * The AI pitch.
 *
 * Each card names a category Syscov has shipped in and shows the shape of the
 * system underneath it, because the pipeline is the part that distinguishes
 * production AI from a prompt. Counts are derived from the published
 * case-study index, not typed in, so they cannot drift.
 */
const pillars = [
  {
    category: "RAG & Search" as const,
    title: "Retrieval & grounding",
    line: "Chunking, embeddings and re-ranking tuned per corpus, so the model answers from your documents with the passage attached.",
    flow: ["Query", "Re-rank", "Cited answer"],
    note: "Refuses rather than guesses",
  },
  {
    category: "Multi-Agent Systems" as const,
    title: "Agent systems",
    line: "Tool calls, held state and a supervisor that can halt a run mid-flight — an agent with write access needs a stop button.",
    flow: ["Plan", "Tool call", "Verify"],
    note: "Supervised, with rollback",
  },
  {
    category: "Real-Time Inference" as const,
    title: "Production inference",
    line: "Model routing, batching and provider failover held inside a p99 latency budget — the slowest one percent of requests, which is the part users actually notice.",
    flow: ["Route", "Model", "Latency budget"],
    note: "Fails over on degrade",
  },
];

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol aria-hidden="true" className="ai-pipeline">
      {steps.map((step, index) => (
        <li key={step}>
          <span className="ai-pipeline__node">{step}</span>
          {index < steps.length - 1 && (
            <svg className="ai-pipeline__link" fill="none" viewBox="0 0 22 8">
              <path d="M0 4h17M14 1l3 3-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

export function AiSpotlight() {
  return (
    <Section className="ai-pitch" id="ai" label="Build AI with Syscov">
      <SyscovBracket className="ai-pitch__bracket ai-pitch__bracket--start" gradientId="ai-bracket-start" side="left" />
      <SyscovBracket className="ai-pitch__bracket ai-pitch__bracket--end" gradientId="ai-bracket-end" side="right" />

      <div className="ai-pitch__head" data-reveal>
        <div>
          <p className="eyebrow">Build AI with Syscov</p>
          <h2>
            We build AI that survives{" "}
            <span className="gradient-text">real users, real data, and real load.</span>
          </h2>
          <p className="ai-pitch__sub">
            Retrieval, agents, evaluation and serving — the parts of an LLM system that decide whether it still works
            on day four hundred, not just on day one.
          </p>
        </div>
        <Link className="button button--light button--compact" href="/services/ai-automation">
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
              <p className="ai-card__kicker">{pillar.category}</p>
              <h3>{pillar.title}</h3>
              <p className="ai-card__line">{pillar.line}</p>
              <Flow steps={pillar.flow} />
              <p className="ai-card__foot">
                <span>{pillar.note}</span>
                <span>
                  {count} in the index
                </span>
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
