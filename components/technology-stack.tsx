"use client";

import { useState } from "react";
import { Section, SectionIntro } from "./section";

const categories = [
  {
    name: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Design systems"],
  },
  {
    name: "Backend",
    tools: ["Node.js", "Python", "REST APIs", "GraphQL", "Event queues", "Service architecture"],
  },
  {
    name: "Database",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Data modelling", "Query performance"],
  },
  {
    name: "Cloud",
    tools: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Managed platforms"],
  },
  {
    name: "AI",
    tools: ["LLM integration", "Retrieval pipelines", "Agent workflows", "Vector search", "Evaluation", "Model APIs"],
  },
  {
    name: "DevOps",
    tools: ["CI/CD pipelines", "Infrastructure as code", "Observability", "Automated testing", "Release management", "Incident response"],
  },
] as const;

export function TechnologyStack() {
  const [active, setActive] = useState<string>(categories[0].name);
  const current = categories.find((category) => category.name === active) ?? categories[0];

  return (
    <Section id="technology" tone="mist">
      <SectionIntro>
        <p className="eyebrow">Technology</p>
        <h2>Tools chosen for the problem, not for the résumé.</h2>
        <p className="text-large">
          We work across a deliberately practical set of technologies — mature enough to support production, current
          enough to keep a product moving.
        </p>
      </SectionIntro>

      <div className="technology-tabs" data-reveal role="tablist" aria-label="Technology categories">
        {categories.map((category) => (
          <button
            aria-selected={active === category.name}
            className={`technology-tab${active === category.name ? " is-active" : ""}`}
            id={`tech-tab-${category.name.toLowerCase()}`}
            key={category.name}
            onClick={() => setActive(category.name)}
            role="tab"
            type="button"
          >
            {category.name}
          </button>
        ))}
      </div>

      <div
        aria-labelledby={`tech-tab-${current.name.toLowerCase()}`}
        className="technology-badges"
        data-reveal
        key={current.name}
        role="tabpanel"
      >
        {current.tools.map((tool) => (
          <span className="tech-badge" key={tool}>
            <i aria-hidden="true" />
            {tool}
          </span>
        ))}
      </div>
    </Section>
  );
}
