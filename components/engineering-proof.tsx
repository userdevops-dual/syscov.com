import { Icon, type IconName } from "./icon";
import { Section, SectionIntro } from "./section";

/**
 * Representative engineering work.
 *
 * These describe the shape and technical weight of projects Syscov takes on.
 * They carry no client names and no outcome figures, because those are only
 * publishable with permission — each card is badged as an example engagement
 * so nothing here reads as a verified claim. Swap a card for a real, named
 * project without touching the layout.
 */
const projects: {
  icon: IconName;
  category: string;
  title: string;
  problem: string;
  built: string;
  hardPart: string;
  traits: string[];
  stack: string[];
}[] = [
  {
    icon: "exchange",
    category: "Operations platform",
    title: "Real-time dispatch across regions that disagreed with each other",
    problem:
      "Dispatch ran across a call centre, a spreadsheet, and three regional systems that each held a different version of the truth. Every vehicle movement was reconciled by hand at the end of the day.",
    built:
      "An event-driven core owning jobs and vehicles as the single source of truth, the regional systems demoted to adapters behind it, and an offline-first driver app that reconciles itself when signal returns.",
    hardPart:
      "Drivers lose signal for hours at a time. The app had to keep accepting work, record proof of delivery, and resolve conflicts on reconnect without a dispatcher arbitrating every collision by hand.",
    traits: ["Event-driven", "Offline-first", "Conflict resolution", "Multi-region"],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Event queue", "React Native", "AWS"],
  },
  {
    icon: "ai",
    category: "AI in a regulated workflow",
    title: "Document intelligence that has to survive an audit months later",
    problem:
      "Analysts read the same categories of document all day. The decisions that came out of that reading had to stay defensible to an auditor long after everyone had forgotten the detail.",
    built:
      "A retrieval pipeline over the organisation's own records, model output constrained to cited source passages, a human review step at every decision carrying real risk, and an immutable trail of what was shown, suggested, and approved.",
    hardPart:
      "Sensitive records could not leave the tenancy, and “the model said so” is not an audit trail. Every suggestion had to be traceable back to the passage it came from, and every override had to be recorded.",
    traits: ["Retrieval pipeline", "Human-in-the-loop", "PII boundaries", "Immutable audit trail"],
    stack: ["Python", "Vector store", "PostgreSQL", "Model APIs", "Evaluation harness"],
  },
  {
    icon: "layers",
    category: "Modernization",
    title: "Replacing a core system with no cutover window and no spec",
    problem:
      "A system more than a decade old held the business logic nobody had documented. Every change took weeks, because no one could predict what else it would break.",
    built:
      "A strangler migration: real behaviour mapped from production traffic first, a stable interface placed in front of the old system, then capability moved across in slices with both paths running and reconciled until each slice proved itself.",
    hardPart:
      "There was no acceptable downtime and no complete specification to build against. Correctness had to be demonstrated against live traffic rather than argued from a document.",
    traits: ["Strangler pattern", "Dual-write", "Live reconciliation", "Zero-downtime cutover"],
    stack: ["Service interfaces", "PostgreSQL", "CI/CD", "Observability", "Contract tests"],
  },
  {
    icon: "grid",
    category: "Multi-tenant platform",
    title: "Usage-based billing where every invoice has to be defensible",
    problem:
      "Each customer wanted their own configuration, their own integrations, and an invoice they could reconcile line by line — against a platform that had to stay up when any one integration failed.",
    built:
      "A multi-tenant core with per-tenant configuration and isolation, an append-only usage ledger the invoice is derived from rather than stored alongside, and integration adapters that fail independently without taking the platform with them.",
    hardPart:
      "Billing disputes are won or lost on whether the ledger can be replayed. Usage events had to be idempotent, correctly ordered, and reconstructable long after the period closed.",
    traits: ["Multi-tenant isolation", "Append-only ledger", "Idempotent ingestion", "Failure domains"],
    stack: ["TypeScript", "PostgreSQL", "Queues", "Payments integration", "Kubernetes"],
  },
];

export function EngineeringProof() {
  return (
    <Section id="proof">
      <SectionIntro>
        <p className="eyebrow">Representative work</p>
        <h2>The kind of systems the estimates come from.</h2>
        <p className="text-large">
          A roadmap is only worth the engineering behind it. This is the weight of problem Syscov is used to — the
          constraints, not just the feature list.
        </p>
      </SectionIntro>

      <div className="proof-grid" data-reveal-stagger>
        {projects.map((project, index) => (
          <article className="proof-card" data-reveal key={project.title}>
            <div className="proof-card__top">
              <span className="proof-card__icon">
                <Icon name={project.icon} />
              </span>
              <div>
                <p className="proof-card__index">{String(index + 1).padStart(2, "0")}</p>
                <p className="proof-card__category">{project.category}</p>
              </div>
              <span className="proof-card__badge">Example engagement</span>
            </div>

            <h3>{project.title}</h3>

            <dl className="proof-card__detail">
              <dt>The problem</dt>
              <dd>{project.problem}</dd>
              <dt>What we built</dt>
              <dd>{project.built}</dd>
              <dt>The hard part</dt>
              <dd>{project.hardPart}</dd>
            </dl>

            <ul className="proof-card__traits">
              {project.traits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>

            <div className="proof-card__stack">
              {project.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="proof-note" data-reveal>
        Client names and figures are published only with permission. These describe the shape and technical depth of
        work Syscov takes on, not named engagements.
      </p>
    </Section>
  );
}
