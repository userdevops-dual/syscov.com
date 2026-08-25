"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionIntro } from "./section";

const projects = [
  { number: "01", title: "Connected operations platform", description: "A single workspace that brings fragmented tools, workflows, and visibility into a clearer operating system.", tags: ["Custom software", "APIs", "Cloud"] },
  { number: "02", title: "Intelligent customer workflow", description: "A customer-facing experience paired with practical automation to keep handoffs clear and work moving.", tags: ["Web platform", "AI systems", "Integrations"] },
  { number: "03", title: "Modernized enterprise system", description: "A structured path to replace legacy friction without losing the operational context teams depend on.", tags: ["Modernization", "Backend", "Security"] },
  { number: "04", title: "Scalable product foundation", description: "A production-minded platform designed to make new product capabilities easier to deliver over time.", tags: ["Mobile", "Infrastructure", "Performance"] },
  { number: "05", title: "Unified data foundation", description: "One dependable source for reporting and product features, instead of numbers that disagree depending on where you look.", tags: ["Data pipelines", "Warehouse", "Reporting"] },
  { number: "06", title: "Secure partner integrations", description: "An integration layer that lets partners connect without widening the surface area of the core system.", tags: ["APIs", "Security", "Access control"] },
  { number: "07", title: "Event-driven operations", description: "A system that reacts as things happen, so the state teams act on is the state the business is actually in.", tags: ["Event queue", "Real-time", "Backend"] },
] as const;

export function ComplexProjects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);
  const [progress, setProgress] = useState(0);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollState = () => {
    const element = scrollerRef.current;
    if (!element) return;
    const maxScroll = element.scrollWidth - element.clientWidth;
    setProgress(maxScroll > 0 ? element.scrollLeft / maxScroll : 0);
    setCanScrollBack(element.scrollLeft > 2);
    setCanScrollForward(element.scrollLeft < maxScroll - 2);
  };
  useEffect(() => { updateScrollState(); }, []);
  const scrollByCard = (direction: number) => scrollerRef.current?.scrollBy({ left: direction * 324, behavior: "smooth" });

  return (
    <Section bleed className="projects-section" id="work">
      <div className="container">
        <SectionIntro split>
          <div>
            <p className="eyebrow">Complex projects</p>
            <h2>Built for work that does not fit inside a simple template.</h2>
          </div>
          <div className="projects-intro__side">
            <p className="text-large">A selection of project patterns where connected engineering makes the difference.</p>
            <div className="projects-controls">
              <button aria-label="Previous project" className="project-arrow" disabled={!canScrollBack} onClick={() => scrollByCard(-1)} type="button">
                <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                  <path d="M13 8H4M7.5 4.5 4 8l3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </button>
              <button aria-label="Next project" className="project-arrow" disabled={!canScrollForward} onClick={() => scrollByCard(1)} type="button">
                <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </button>
            </div>
          </div>
        </SectionIntro>
      </div>
      <div className="projects-viewport" data-reveal>
        <div className="projects-scroll" onPointerDown={(event) => { if (event.pointerType === "mouse") dragStart.current = { x: event.clientX, scrollLeft: event.currentTarget.scrollLeft }; }} onPointerMove={(event) => { if (dragStart.current) { event.currentTarget.scrollLeft = dragStart.current.scrollLeft - (event.clientX - dragStart.current.x); } }} onPointerUp={() => { dragStart.current = null; }} onPointerCancel={() => { dragStart.current = null; }} onScroll={updateScrollState} ref={scrollerRef}>
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span aria-hidden="true" className="project-card__watermark">{project.number}</span>
              <h3>{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
      <div className="container">
        <div aria-hidden="true" className="projects-progress">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }} />
        </div>
      </div>
    </Section>
  );
}
