import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyExplorer } from "../../components/case-study-explorer";
import { Section } from "../../components/section";
import { categories, projects } from "../../lib/case-studies";
import { VideoBackdrop } from "../../components/video-backdrop";
import { backdrops } from "../../lib/media";

export const metadata: Metadata = {
  title: "Case Studies — Syscov",
  description:
    "Twenty system profiles covering multi-agent orchestration, retrieval, real-time inference, LLM platforms, vision, MLOps, and data pipelines — with the architecture and constraints behind each.",
};

const scores = projects.map((project) => project.score);
const range = `${Math.min(...scores).toFixed(1)}–${Math.max(...scores).toFixed(1)}`;

export default function CaseStudiesPage() {
  return (
    <main id="top">
      <header className="case-hero has-video">
        <VideoBackdrop video={backdrops.caseStudies} eager />
        <div className="container">
          <p className="eyebrow" data-reveal>
            Case studies — system index
          </p>
          <h1 data-reveal>
            We build the AI backend your idea is <span className="gradient-text">actually waiting on</span>.
          </h1>
          <p className="text-large case-hero__intro" data-reveal>
            Not demos. Systems that hold up under load, under audit, and under the constraints that only show up in
            production.
          </p>

          {/* Facts about this catalogue — counted from the data, not claimed. */}
          <dl className="case-hero__index" data-reveal>
            <div>
              <dt>Systems</dt>
              <dd>{projects.length}</dd>
            </div>
            <div>
              <dt>Domains</dt>
              <dd>{categories.length}</dd>
            </div>
            <div>
              <dt>Complexity range</dt>
              <dd>{range}</dd>
            </div>
          </dl>
        </div>
      </header>

      <Section className="case-studies-section" id="systems" tone="mist">
        <CaseStudyExplorer />
        <p className="proof-note" data-reveal>
          Systems are listed by codename. Client names, contract details, and commercial outcomes are published only
          with permission — the architecture, constraints, and scale described here are what the work involved.
        </p>
      </Section>

      <Section id="case-cta">
        <div className="audit-cta" data-reveal>
          <p className="eyebrow">Next step</p>
          <h2>Your project isn&rsquo;t a demo. Stop briefing it like one.</h2>
          <p className="text-large">
            Bring us the constraint that worries you most — the latency budget, the compliance boundary, the system
            nobody wants to touch. That is the conversation worth having first.
          </p>
          <div className="hero__actions audit-cta__actions">
            <Link className="button button--primary" href="/#contact">
              Book a scoping call
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
            <Link className="button button--secondary" href="/ai-audit">
              Start with an AI audit
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
