"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icon, type IconName } from "./icon";
import { Section, SectionIntro } from "./section";

/**
 * The stack as a systems diagram that happens to read as a services list.
 *
 * A spine threads down through the centre of every layer badge and draws itself
 * as the section scrolls into view; each badge fills with the brand gradient as
 * the line reaches it, and the last layer terminates in a solid node rather
 * than stopping mid-air. That progressive connection is what actually proves
 * the "one connected system" claim the headline makes.
 */
const layers: { name: string; icon: IconName; tags: string[] }[] = [
  { name: "Frontend", icon: "code", tags: ["React", "Next.js", "Responsive interfaces", "Design systems"] },
  { name: "Backend", icon: "server", tags: ["API design", "Business logic", "Service architecture", "Integrations"] },
  { name: "Database", icon: "database", tags: ["Data modelling", "PostgreSQL", "Data access", "Performance"] },
  { name: "Cloud & infra", icon: "cloud", tags: ["Cloud platforms", "CI/CD", "Observability", "Scaling"] },
  { name: "AI & automation", icon: "ai", tags: ["AI workflows", "LLM integration", "Process automation", "Agent systems"] },
  { name: "Security", icon: "shield", tags: ["Secure foundations", "Access control", "Data protection", "Risk-aware delivery"] },
  { name: "Integrations", icon: "link", tags: ["Third-party APIs", "Payments", "CRM systems", "Operational tools"] },
];

export function FullStackEngineering() {
  const stackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  // Measured from the real badge positions so the spine starts and ends dead
  // centre on the first and last badge, whatever the rows wrap to.
  const [rail, setRail] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const measureRail = () => {
      const element = stackRef.current;
      if (!element) return;
      const badges = element.querySelectorAll<HTMLElement>(".stack-row__badge");
      const first = badges[0];
      const last = badges[badges.length - 1];
      if (!first || !last) return;
      const base = element.getBoundingClientRect().top;
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const top = firstRect.top - base + firstRect.height / 2;
      const bottom = lastRect.top - base + lastRect.height / 2;
      setRail({ top, height: Math.max(0, bottom - top) });
    };

    const measureProgress = () => {
      frame = 0;
      const element = stackRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      // The line leads the reader slightly: it fills to ~68% of the viewport.
      const travelled = window.innerHeight * 0.68 - rect.top;
      setProgress(Math.min(1, Math.max(0, travelled / Math.max(rect.height * 0.85, 1))));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measureProgress);
    };
    const onResize = () => {
      measureRail();
      measureProgress();
    };

    measureRail();
    if (reduced) {
      setProgress(1);
    } else {
      measureProgress();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", onResize);
    // Re-measure once webfonts have settled and the rows have their final height.
    const settle = window.setTimeout(onResize, 600);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Section id="engineering" tone="mist">
      <SectionIntro>
        <p className="eyebrow">07 — The stack</p>
        <h2>
          Every layer <span className="gradient-text">connected.</span>
        </h2>
        <p className="text-large">
          A strong product is not a collection of isolated services. Syscov approaches the stack as one connected
          system.
        </p>
      </SectionIntro>

      <div
        className="stack"
        ref={stackRef}
        style={{ "--rail-top": `${rail.top}px`, "--rail-height": `${rail.height}px` } as CSSProperties}
      >
        <span aria-hidden="true" className="stack__rail" />
        <span aria-hidden="true" className="stack__draw" style={{ height: `${progress * rail.height}px` }} />

        {layers.map((layer, index) => {
          // A badge lights up once the line has reached its centre.
          const lit = progress >= (index + 0.5) / layers.length;
          return (
            <article className={`stack-row${lit ? " is-lit" : ""}`} data-reveal key={layer.name}>
              <div className="stack-row__head">
                <span className="stack-row__badge">
                  <Icon name={layer.icon} />
                </span>
                <h3>{layer.name}</h3>
              </div>
              <ul className="stack-row__tags">
                {layer.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}

        <span aria-hidden="true" className={`stack__terminal${progress >= 0.98 ? " is-lit" : ""}`} />
      </div>
    </Section>
  );
}
