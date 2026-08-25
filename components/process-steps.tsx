"use client";

import { useEffect, useRef, useState } from "react";

export type ProcessStep = {
  title: string;
  description: string;
  items: readonly string[];
};

/**
 * The numbered, scroll-filled timeline. Extracted from the home page's Process
 * section so any page can use the identical component rather than growing a
 * one-off timeline that drifts from it.
 */
export function ProcessSteps({ steps }: { steps: readonly ProcessStep[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const element = timelineRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const traveled = window.innerHeight * 0.72 - rect.top;
      setProgress(Math.min(1, Math.max(0, traveled / Math.max(rect.height * 0.82, 1))));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="process-timeline" data-reveal ref={timelineRef}>
      <span aria-hidden="true" className="process-timeline__line" />
      <span aria-hidden="true" className="process-timeline__line-fill" style={{ height: `${progress * 100}%` }} />
      {steps.map((step, index) => (
        <article className="process-step" key={step.title}>
          <span className="process-step__number">{String(index + 1).padStart(2, "0")}</span>
          <div className="process-step__content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <ul>
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
