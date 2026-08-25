"use client";

import { useEffect } from "react";

/**
 * Recipe A's optional spotlight — a soft radial glow that tracks the cursor
 * inside a card. Deliberately limited to the two hero-importance card types;
 * applied everywhere it stops reading as a detail and starts reading as noise.
 */
const SPOTLIGHT_SELECTOR = ".solution-card, .project-card";

export function CardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      const card = (event.target as HTMLElement | null)?.closest<HTMLElement>(SPOTLIGHT_SELECTOR);
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--y", `${event.clientY - bounds.top}px`);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => document.removeEventListener("pointermove", onPointerMove);
  }, []);

  return null;
}
