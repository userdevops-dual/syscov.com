"use client";

import { useMemo, useState } from "react";
import { CaseStudyCard } from "./case-study-card";
import { categories, projects, type Category } from "../lib/case-studies";

type Filter = Category | "All";

const filters: Filter[] = ["All", ...categories];

/**
 * Client-side category filter over the case study grid.
 *
 * Filtering swaps which cards render rather than animating a shared container,
 * and each card keeps a stable key, so nothing reflows underneath the reader.
 */
export function CaseStudyExplorer() {
  const [active, setActive] = useState<Filter>("All");

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", projects.length]]);
    categories.forEach((category) => {
      map.set(category, projects.filter((project) => project.category === category).length);
    });
    return map;
  }, []);

  // Heaviest systems lead the index, whichever filter is active.
  const ranked = [...projects].sort((a, b) => b.score - a.score);
  const visible = active === "All" ? ranked : ranked.filter((project) => project.category === active);

  return (
    <>
      <div className="case-filter" role="group" aria-label="Filter systems by category">
        {filters.map((filter) => (
          <button
            aria-pressed={active === filter}
            className={`case-filter__pill${active === filter ? " is-active" : ""}`}
            key={filter}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter}
            <span className="case-filter__count">{counts.get(filter) ?? 0}</span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="case-grid__status">
        Showing {visible.length} of {projects.length} systems
        {active !== "All" && ` in ${active}`}.
      </p>

      <div className="case-grid">
        {visible.map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
