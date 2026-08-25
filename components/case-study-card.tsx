import Link from "next/link";
import { ComplexityFingerprint } from "./complexity-fingerprint";
import type { Project } from "../lib/case-studies";

/**
 * Grid card — a compact summary only. The architecture flow, the full stat
 * table and the stack list live on /case-studies/[slug], so the grid stays
 * scannable instead of repeating the whole study twice.
 */
export function CaseStudyCard({ project }: { project: Project }) {
  return (
    <article className="case-card" data-reveal>
      <div className="case-card__top">
        <span className="case-card__id">{project.id}</span>
        <span className="case-card__category">{project.category}</span>
      </div>

      <h3 className="case-card__name">{project.name}</h3>
      <p className="case-card__pitch">{project.pitch}</p>

      <ComplexityFingerprint complexity={project.complexity} score={project.score} />

      <dl className="case-card__stats">
        {project.stats.slice(0, 2).map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      <Link className="case-card__link" href={`/case-studies/${project.slug}`}>
        View case study
        <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
          <path
            d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      </Link>
    </article>
  );
}
