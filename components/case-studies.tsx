import { Section, SectionIntro } from "./section";

/**
 * Illustrative project patterns, each labelled "Example project" in the UI.
 * These describe how Syscov approaches a shape of problem — they are not
 * claimed client engagements, and they carry no invented metrics. Replace a
 * block with a real, approved case study without changing the layout.
 */
const caseStudies = [
  {
    category: "Operations platform",
    title: "Replacing a spreadsheet-shaped process with a real system",
    challenge:
      "A team's day-to-day ran across spreadsheets, inboxes, and three disconnected tools. Nobody could answer basic questions about where work stood without asking someone.",
    solution:
      "A single operational workspace built around the actual process, with integrations pulling the existing tools into one view rather than forcing a rip-and-replace.",
    outcome:
      "The shape of the work becomes visible to the people doing it — which is the precondition for improving anything else about it.",
    scope: ["Custom software", "APIs", "Cloud", "Data modelling"],
    visual: "platform",
  },
  {
    category: "AI-enabled product",
    title: "An AI layer that sits inside the workflow, not beside it",
    challenge:
      "Manual review work scaled linearly with volume. Off-the-shelf AI tools produced plausible output but had no access to the systems or context the decision actually depended on.",
    solution:
      "An AI layer wired into the product's own business logic and data, with retrieval over the team's real sources, human review at the points where judgement matters, and evaluation on every change.",
    outcome:
      "Automation covers the repetitive middle of the process while the decisions that carry risk stay with the people accountable for them.",
    scope: ["AI systems", "Backend", "Integrations", "Evaluation"],
    visual: "flow",
  },
  {
    category: "Modernization",
    title: "Moving off a legacy system without losing what it knew",
    challenge:
      "A long-running system held years of operational logic that no current documentation described. Every change was slow, and every change was risky.",
    solution:
      "Incremental modernization: mapping the real behaviour first, moving capability across in slices behind a stable interface, and keeping both paths running until each slice proved itself.",
    outcome:
      "A platform that engineers can change with confidence, reached without the all-or-nothing cutover that makes these projects fail.",
    scope: ["Modernization", "Architecture", "Security", "Performance"],
    visual: "stack",
  },
] as const;

function CaseVisual({ variant }: { variant: (typeof caseStudies)[number]["visual"] }) {
  return (
    <div aria-hidden="true" className={`case-visual case-visual--${variant}`}>
      <div className="case-visual__chrome">
        <i />
        <i />
        <i />
      </div>

      {variant === "platform" && (
        <div className="case-visual__body case-visual__platform">
          <div className="case-visual__rail">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="case-visual__panels">
            <div className="case-visual__panel case-visual__panel--wide" />
            <div className="case-visual__panel" />
            <div className="case-visual__panel" />
            <div className="case-visual__panel case-visual__panel--tall" />
          </div>
        </div>
      )}

      {variant === "flow" && (
        <div className="case-visual__body case-visual__flow">
          {["Input", "Retrieve", "AI layer", "Review", "System"].map((node) => (
            <span className={`case-visual__node${node === "AI layer" ? " is-primary" : ""}`} key={node}>
              {node}
            </span>
          ))}
        </div>
      )}

      {variant === "stack" && (
        <div className="case-visual__body case-visual__stack">
          {["Legacy behaviour", "Stable interface", "Slice 01", "Slice 02", "New platform"].map((layer, index) => (
            <span className={`case-visual__layer${index > 1 ? " is-new" : ""}`} key={layer}>
              {layer}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <SectionIntro>
        <p className="eyebrow">Selected work</p>
        <h2>Three shapes of problem we are built for.</h2>
        <p className="text-large">
          Each of these is an example pattern rather than a named engagement — the technical approach is real, the
          client details are not ours to publish.
        </p>
      </SectionIntro>

      <div className="case-studies__list">
        {caseStudies.map((study) => (
          <article className="case-study" key={study.title} data-reveal>
            <div className="case-study__visual">
              <CaseVisual variant={study.visual} />
              <span className="case-study__badge">Example project</span>
            </div>

            <div className="case-study__content">
              <p className="eyebrow">{study.category}</p>
              <h3>{study.title}</h3>

              <dl className="case-study__detail">
                <dt>Challenge</dt>
                <dd>{study.challenge}</dd>
                <dt>Solution</dt>
                <dd>{study.solution}</dd>
                <dt>Outcome</dt>
                <dd>{study.outcome}</dd>
              </dl>

              <div className="case-study__scope">
                {study.scope.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
