import Link from "next/link";
import { Section, SectionIntro } from "./section";
import { ServiceArt } from "./service-art";

/**
 * How a team can actually bring Syscov in.
 *
 * This replaces the industries strip, which listed domains without telling a
 * visitor anything they could act on. These are descriptions of how work is
 * structured — not claims about clients, volumes or outcomes — so nothing here
 * needs approval before it can be published.
 */
const models: { title: string; description: string; art: "peaks" | "orbit" | "mesh" | "bloom"; fit: string }[] = [
  {
    title: "End-to-end build",
    description:
      "You have the problem and the mandate, but not the team. We take it from architecture through to production and hand over something your engineers can run without us.",
    fit: "Best when there is no in-house team yet",
    art: "peaks",
  },
  {
    title: "Embedded engineering",
    description:
      "Your team is already building and is missing a discipline — AI, infrastructure, security, or front-end depth. We work inside your process and leave a codebase your engineers recognise.",
    fit: "Best when you have a team but a gap",
    art: "orbit",
  },
  {
    title: "Rescue and takeover",
    description:
      "A build has stalled, or the people who wrote it are gone. We take ownership of what already exists and get it stable before anyone argues about replacing it.",
    fit: "Best when a project is already in trouble",
    art: "mesh",
  },
  {
    title: "Audit and roadmap",
    description:
      "Before committing budget, get a technical read on what the work actually takes — what is buildable in your stack, what it costs, and what to do first.",
    fit: "Best before a decision is made",
    art: "bloom",
  },
];

export function Engagement() {
  return (
    <Section id="engagement" tone="mist">
      <SectionIntro>
        <p className="eyebrow">Working together</p>
        <h2>Four ways teams bring us in.</h2>
        <p className="text-large">
          Most projects start in one of these shapes. If yours does not, say so — the shape matters less than whether
          the problem is one we can actually help with.
        </p>
      </SectionIntro>

      <div className="engagement-grid" data-reveal-stagger>
        {models.map((model) => (
          <article className="engagement-card" data-reveal key={model.title}>
            <span className="engagement-card__art">
              <ServiceArt id={`eng-${model.art}`} name={model.art} />
            </span>
            <h3>{model.title}</h3>
            <p>{model.description}</p>
            <p className="engagement-card__fit">{model.fit}</p>
          </article>
        ))}
      </div>

      <p className="engagement-note" data-reveal>
        Not sure which one fits?{" "}
        <Link className="text-link" href="/#contact">
          Describe the problem
        </Link>{" "}
        and we will tell you which shape it is — including if it is not one for us.
      </p>
    </Section>
  );
}
