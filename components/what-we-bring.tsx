import { projects } from "../lib/case-studies";
import { services } from "../lib/services";
import { aiAuditOffer } from "../lib/site-content";
import { Section } from "./section";

/**
 * Statement + supporting figures.
 *
 * Every number here is derived at build time from something already published
 * on this site — the case-study index, the service list, and the audit's
 * agreed turnaround. Nothing is a claim about years in business, headcount, or
 * countries, because none of that has been supplied and inventing it is the
 * one thing this site must not do. If real company figures arrive, they belong
 * in `achievements` in lib/site-content.ts, not hard-coded here.
 */
export function WhatWeBring() {
  const figures = [
    { value: String(projects.length), label: "Systems documented", note: "in the case-study index" },
    { value: String(services.length), label: "Engineering disciplines", note: "held in one team" },
    { value: aiAuditOffer.timeframe.replace(" days", ""), label: "Days", note: "from audit kickoff to decision" },
  ];

  return (
    <Section className="bring" id="what-we-bring" tone="mist">
      <div className="bring__grid">
        <div className="bring__copy" data-reveal>
          <p className="eyebrow">What we bring</p>
          <h2>
            From a brief on a whiteboard to a system that <span className="gradient-text">holds under load</span>.
          </h2>
          <p className="text-large">
            Complex builds rarely fail on a single skill. They fail in the handoffs — between design and engineering,
            between the model and the product, between shipping it and running it. Syscov keeps those disciplines in
            one team so there is no gap to fall through.
          </p>
        </div>

        <dl className="bring__figures" data-reveal-stagger>
          {figures.map((figure) => (
            <div className="bring__figure" data-reveal key={figure.label}>
              <dt>{figure.value}</dt>
              <dd>
                {figure.label}
                <span>{figure.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
