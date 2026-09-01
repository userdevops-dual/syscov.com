import type { Metadata } from "next";
import Link from "next/link";
import { EngineeringProof } from "../../components/engineering-proof";
import { FaqAccordion, type FaqItem } from "../../components/faq-accordion";
import { Icon, type IconName } from "../../components/icon";
import { ProcessSteps, type ProcessStep } from "../../components/process-steps";
import { Section, SectionIntro } from "../../components/section";
import { aiAuditOffer } from "../../lib/site-content";
import { VideoBackdrop } from "../../components/video-backdrop";
import { backdrops } from "../../lib/media";

export const metadata: Metadata = {
  title: "AI Audit — Syscov",
  description:
    "A 12-day, fixed-scope AI audit that ends in a prioritised, buildable roadmap — scored for technical feasibility by the engineering team that can also implement it.",
};

const { pricing, timeframe, callLength, callLengthShort } = aiAuditOffer;

const problems: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "cart",
    title: "Tool shopping without a target",
    description:
      "Vendors get evaluated before anyone has agreed which process is actually being changed — so every demo looks equally convincing and none of them can be compared.",
  },
  {
    icon: "exchange",
    title: "Three good arguments, no framework",
    description:
      "Different parts of the business each have a credible AI idea, and no shared way to weigh them against cost, risk, and whether they are buildable at all.",
  },
  {
    icon: "gauge",
    title: "Budget approved, nothing shipped",
    description:
      "The mandate exists and the funding is signed off, but nobody has turned it into sequenced work with estimates a team could start on Monday.",
  },
  {
    icon: "code",
    title: "A roadmap nobody can build",
    description:
      "A strategy document lands, engineering reads it, and the first honest question is whether any of it is possible in the current stack. That question should have come first.",
  },
];

const deliverables: readonly ProcessStep[] = [
  {
    title: "Process & systems map",
    description:
      "How the work runs today — the systems, the handoffs, and the data moving between them. A current-state architecture, not a summary of interviews.",
    items: ["Current-state architecture", "System & data inventory", "Handoff map"],
  },
  {
    title: "Technical feasibility scoring",
    description:
      "Every opportunity scored on whether it can be built in your stack, not only on whether it would be valuable. This is the part most audits leave out.",
    items: ["Stack compatibility", "Data readiness", "Integration effort"],
  },
  {
    title: "Technical landscape scan",
    description:
      "Where build, buy, and the tooling you already own genuinely differ for your case, with the trade-offs and the lock-in stated plainly.",
    items: ["Build vs buy", "Model & vendor options", "Lock-in risk"],
  },
  {
    title: "Prioritised roadmap with engineering estimates",
    description:
      "Sequenced work with estimates grounded in what implementation actually costs — because the team writing them is the team that would do the work.",
    items: ["Sequenced phases", "Effort estimates", "Dependencies"],
  },
  {
    title: "Board-ready action plan",
    description:
      "A short document leadership can decide against: what to do first, what it costs, what it changes, and what to stop doing.",
    items: ["Decision summary", "Cost & timeline", "Success measures"],
  },
];

const differentiators: { icon: IconName; title: string; description: string; href?: string; linkLabel?: string }[] = [
  {
    icon: "layers",
    title: "Built by engineers, not strategists",
    description:
      "The people scoring feasibility are the people who work across the whole stack every day — frontend through infrastructure.",
    href: "/#engineering",
    linkLabel: "See the stack",
  },
  {
    icon: "check",
    title: "Scoped and quoted before it starts",
    description:
      `Every audit is priced for the project in front of it. You get the scope and the figure up front, and neither moves once agreed — ${timeframe}, then it is done.`,
  },
  {
    icon: "target",
    title: "The roadmap is buildable, because we can build it",
    description:
      "Estimates come from implementation experience, and if you want it built, the same team can carry it through.",
    href: "/#services",
    linkLabel: "What we build",
  },
  {
    icon: "shield",
    title: "Security-aware from day one",
    description:
      "Access, data handling, and auditability are considered while options are still on the table — not bolted on after a decision.",
    href: "/#security",
    linkLabel: "How we treat security",
  },
];

const howItWorks = [
  { step: "01", title: "Discovery call", description: `A free ${callLength} conversation about where you are and whether an audit is the right next step. You leave with a scope and a price.` },
  { step: "02", title: "The audit", description: `${timeframe} of mapping, scoring, and sequencing, run with the people who actually know the work.` },
  { step: "03", title: "Decide, then build", description: "You own the roadmap. Take it in-house, take it elsewhere, or have us build it." },
] as const;

const goodFit = [
  "You have a mandate for AI and budget behind it, but no agreed starting point.",
  "The decision-makers are in the room — this works best with leadership involved.",
  "There is a real process with real data behind it, not a greenfield idea.",
  "You want an answer you can act on, including the option that AI is not the answer.",
];

const notFit = [
  "You are looking for a supplier to validate a decision that has already been made.",
  "There is no budget or mandate yet — a discovery call is more useful than an audit.",
  "You need a single tool implemented and already know exactly which one.",
  "You want a document for a funding round rather than a plan to execute.",
];

const faqs: readonly FaqItem[] = [
  {
    question: "What does the audit cost?",
    answer: `There is no flat rate. Mapping a two-system process is not the same job as mapping twenty, so each audit is scoped and quoted for the project in front of it. You get the figure after the free ${callLength} call, before any commitment, and once agreed it does not change during the work.`,
  },
  {
    question: "How long does it take?",
    answer: `${timeframe} from kick-off to the final action plan. We hold to that because the scope is agreed at the start rather than negotiated as we go — if something material turns up mid-audit we tell you, and you decide what happens to it.`,
  },
  {
    question: "How much of my team's time does it need?",
    answer:
      "Less than you would expect, but it cannot be zero. We need access to the people who actually run the process, plus whoever owns the systems and data. We work around your schedule and keep sessions short and specific.",
  },
  {
    question: "What do I actually receive at the end?",
    answer:
      "A current-state map of your process and systems, feasibility-scored opportunities, a build-versus-buy read, a sequenced roadmap with engineering estimates, and a short action plan your leadership can decide against.",
  },
  {
    question: "We already use some AI tools. Is the audit still useful?",
    answer:
      "Usually more so. Existing tools become part of the current-state map, and a common outcome is getting more out of what you already pay for rather than adding another subscription.",
  },
  {
    question: "Can Syscov build the roadmap as well?",
    answer:
      "Yes, and that is the point of an engineering-led audit — the estimates come from the team that would implement it. There is no obligation to continue with us, and the roadmap is yours either way.",
  },
  {
    question: "How do we start?",
    answer: `A free ${callLength} discovery call. We will tell you honestly whether an audit is worth doing for your situation, and we will say so if it is not. You come out of it with a scope and a price, and no obligation to go ahead.`,
  },
];

export default function AiAuditPage() {
  return (
    <main id="top">
      {/* 1. Hero */}
      <header className="audit-hero has-video">
        <VideoBackdrop video={backdrops.aiAudit} eager />
        <div className="container">
          <p className="eyebrow" data-reveal>
            AI Audit — fixed scope, {timeframe}
          </p>
          <h1 data-reveal>
            Know exactly where AI <span className="gradient-text">earns its place</span> in your business.
          </h1>
          <p className="text-large audit-hero__intro" data-reveal>
            Not a slide deck. Not a vendor list. A prioritised roadmap from the team that can also build it.
          </p>
          <div className="hero__actions" data-reveal>
            <Link className="button button--primary" href="/#contact">
              Book a discovery call
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
            <Link className="button button--secondary" href="#how-it-works">
              See how it works
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
          </div>
          <p className="audit-hero__meta" data-reveal>
            <span>{pricing}</span>
            <i aria-hidden="true" />
            <span>{timeframe}</span>
            <i aria-hidden="true" />
            <span>Free {callLengthShort} call</span>
          </p>
        </div>
      </header>

      {/* 2. The real problem */}
      <Section id="problem" tone="mist">
        <SectionIntro>
          <p className="eyebrow">The real problem</p>
          <h2>AI projects rarely fail at the idea stage.</h2>
          <p className="text-large">
            They fail in the gap between an idea and something a team can actually build. That gap is an engineering
            problem — and it is exactly where most audits stop.
          </p>
        </SectionIntro>

        <div className="problem-grid" data-reveal-stagger>
          {problems.map((problem) => (
            <article className="problem-card" data-reveal key={problem.title}>
              <span className="problem-card__icon">
                <Icon name={problem.icon} />
              </span>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 3. What you get */}
      <Section id="deliverables">
        <SectionIntro>
          <p className="eyebrow">What you get</p>
          <h2>Five deliverables, each one something you can act on.</h2>
          <p className="text-large">
            The audit runs in sequence — each stage feeds the next, and the last one is written for the people who
            approve the budget.
          </p>
        </SectionIntro>
        <ProcessSteps steps={deliverables} />
      </Section>

      {/* 4. Why Syscov */}
      <Section id="why-audit" tone="mist">
        <SectionIntro>
          <p className="eyebrow">Why Syscov</p>
          <h2>Most audits end where the hard part begins.</h2>
          <p className="text-large">
            A roadmap is only worth the estimate behind it. Ours come from a team that ships production software.
          </p>
        </SectionIntro>

        <div className="audit-why" data-reveal-stagger>
          {differentiators.map((item) => (
            <article className="audit-why__item" data-reveal key={item.title}>
              <span className="audit-why__icon">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.href && (
                  <Link className="text-link" href={item.href}>
                    {item.linkLabel}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 5. Representative work — proof behind the estimates */}
      <EngineeringProof />

      {/* 6. How it works */}
      <Section id="how-it-works">
        <SectionIntro align="center">
          <p className="eyebrow">How it works</p>
          <h2>Three steps, and you own the outcome at every one.</h2>
        </SectionIntro>

        <div className="audit-flow" data-reveal>
          {howItWorks.map((item, index) => (
            <div className="audit-flow__item" key={item.step}>
              <div className={`audit-flow__node${index === 1 ? " is-featured" : ""}`}>
                <span className="audit-flow__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < howItWorks.length - 1 && (
                <span aria-hidden="true" className="audit-flow__connector">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Qualification */}
      <Section id="fit" tone="mist">
        <SectionIntro>
          <p className="eyebrow">Is this for you</p>
          <h2>It is worth saying plainly when this is not the right thing to buy.</h2>
        </SectionIntro>

        <div className="fit-grid" data-reveal>
          <div className="fit-column fit-column--yes">
            <h3>
              <span aria-hidden="true" className="fit-column__mark">
                <Icon name="check" />
              </span>
              A good fit if
            </h3>
            <ul>
              {goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="fit-column fit-column--no">
            <h3>
              <span aria-hidden="true" className="fit-column__mark">
                <Icon name="cross" />
              </span>
              Not a fit if
            </h3>
            <ul>
              {notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section id="audit-faq">
        <SectionIntro align="center">
          <p className="eyebrow">Questions</p>
          <h2>What people ask before booking the call.</h2>
        </SectionIntro>
        <FaqAccordion faqs={faqs} idPrefix="audit-faq" />
      </Section>

      {/* 9. Final CTA */}
      <Section id="audit-cta" tone="mist">
        <div className="audit-cta" data-reveal>
          <p className="eyebrow">Start here</p>
          <h2>Find out whether an audit is worth doing.</h2>
          <p className="text-large">
            A free {callLengthShort} call, an honest answer, and a scope and price you can walk away from. If an audit
            is not the right next step for you, we will say so.
          </p>
          <div className="hero__actions audit-cta__actions">
            <Link className="button button--primary" href="/#contact">
              Book a discovery call
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
          </div>
          <p className="audit-hero__meta">
            <span>{pricing}</span>
            <i aria-hidden="true" />
            <span>{timeframe}</span>
            <i aria-hidden="true" />
            <span>Free {callLengthShort} call</span>
          </p>
        </div>
      </Section>
    </main>
  );
}
