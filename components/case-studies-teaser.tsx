import Link from "next/link";
import { Section } from "./section";
import { ComplexityFingerprint } from "./complexity-fingerprint";
import { projects } from "../lib/case-studies";

/** Three systems as a taste; the full 20 live on /case-studies. */
export function CaseStudiesTeaser() {
  // The three heaviest systems by complexity score, not the first three by id.
  const featured = [...projects].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <Section className="teaser-dark" id="case-studies">
      <div className="teaser-head" data-reveal>
        <div>
          <p className="eyebrow">Case studies</p>
          <h2>Systems that had to hold up under real load.</h2>
        </div>
        <Link className="button button--light" href="/case-studies">
          View all case studies
          <span aria-hidden="true" className="button__arrow">
            <svg fill="none" viewBox="0 0 16 16">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="teaser-grid" data-reveal-stagger>
        {featured.map((project) => (
          <Link className="teaser-card" data-reveal href={`/case-studies/${project.slug}`} key={project.slug}>
            <span className="teaser-card__top">
              <span className="case-card__id">{project.id}</span>
              <span className="case-card__category">{project.category}</span>
            </span>
            <h3>{project.name}</h3>
            <p>{project.pitch}</p>
            <ComplexityFingerprint complexity={project.complexity} score={project.score} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
