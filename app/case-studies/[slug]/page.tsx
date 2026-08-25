import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureFlow } from "../../../components/architecture-flow";
import { ComplexityFingerprint } from "../../../components/complexity-fingerprint";
import { Section, SectionIntro } from "../../../components/section";
import { complexityDimensions, getProject, projects } from "../../../lib/case-studies";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: `${project.name} — Case study — Syscov`, description: project.pitch };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((entry) => entry.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const hardest = [...complexityDimensions].sort((a, b) => project.complexity[b.key] - project.complexity[a.key])[0];

  return (
    <main id="top">
      <header className="study-hero">
        <div className="container">
          <p className="eyebrow" data-reveal>
            <Link className="study-hero__back" href="/case-studies">
              Case studies
            </Link>
            <span aria-hidden="true"> / </span>
            {project.id}
          </p>
          <h1 data-reveal>{project.name}</h1>
          <p className="text-large study-hero__intro" data-reveal>
            {project.pitch}
          </p>
          <p className="study-hero__tag" data-reveal>
            {project.category}
          </p>
        </div>
      </header>

      <Section id="profile" tone="mist">
        <div className="study-grid">
          <div data-reveal>
            <SectionIntro>
              <p className="eyebrow">System profile</p>
              <h2>
                Hardest dimension: <span className="gradient-text">{hardest.label.toLowerCase()}</span>.
              </h2>
              <p className="text-large">
                The complexity score is an engineering read, not a marketing one — it weighs what the system actually
                had to survive in production.
              </p>
            </SectionIntro>
            <dl className="study-stats">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="study-fingerprint" data-reveal>
            <ComplexityFingerprint complexity={project.complexity} score={project.score} />
          </div>
        </div>
      </Section>

      <Section id="architecture">
        <SectionIntro>
          <p className="eyebrow">Architecture</p>
          <h2>How a request moves through it.</h2>
        </SectionIntro>
        <div className="study-flow" data-reveal>
          <ArchitectureFlow label={project.name} stages={project.flow} />
        </div>
        <div className="study-stack" data-reveal>
          <p className="case-card__label">Stack</p>
          <div className="case-card__stack">
            {project.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="proof-note" data-reveal>
          Listed by codename. Client names, contract details, and commercial outcomes are published only with
          permission — the architecture, constraints, and scale described here are what the work involved.
        </p>
      </Section>

      <Section id="study-cta" tone="mist">
        <div className="audit-cta" data-reveal>
          <p className="eyebrow">Next</p>
          <h2>Have something with this shape?</h2>
          <div className="hero__actions audit-cta__actions">
            <Link className="button button--primary" href="/#contact">
              Book a scoping call
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
            <Link className="button button--secondary" href={`/case-studies/${next.slug}`}>
              Next: {next.name}
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
