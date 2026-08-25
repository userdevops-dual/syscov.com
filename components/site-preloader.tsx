"use client";

import { useEffect, useState } from "react";
import { SyscovMark } from "./syscov-mark";

/**
 * "Converge, then Open" — the four pieces of the mark fly in and snap together,
 * the assembled mark confirms itself with a single pulse, then the two brackets
 * swing apart like doors while the diamonds collapse to the centre point,
 * opening onto the hero underneath.
 *
 * Plays once per session. Reduced-motion visitors get a short crossfade, and a
 * hard failsafe removes the overlay no matter what the animation is doing — a
 * preloader that traps someone on a blank screen is worse than none at all.
 */
const INTRO_FLAG = "syscov_intro_played";
const SEQUENCE_MS = 2000;
const FAILSAFE_MS = 3500;

export function SitePreloader() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    // Set before paint by the inline script in app/layout.tsx on repeat views.
    if (root.dataset.intro === "played") {
      setActive(false);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("preloader-active");

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      root.dataset.intro = "played";
      try {
        window.sessionStorage.setItem(INTRO_FLAG, "1");
      } catch {
        // Private modes can refuse storage; the intro simply replays.
      }
      document.body.classList.remove("preloader-active");
      setActive(false);
    };

    const sequence = window.setTimeout(finish, reduced ? 500 : SEQUENCE_MS);
    const failsafe = window.setTimeout(finish, FAILSAFE_MS);

    return () => {
      window.clearTimeout(sequence);
      window.clearTimeout(failsafe);
      document.body.classList.remove("preloader-active");
    };
  }, []);

  if (!active) return null;

  return (
    <div className="site-preloader" role="status">
      <span className="visually-hidden">Loading Syscov</span>
      <div aria-hidden="true" className="site-preloader__glow" />
      <div aria-hidden="true" className="site-preloader__logo">
        <SyscovMark className="site-preloader__mark" gradientId="syscov-mark-preloader" title={null} />
      </div>
    </div>
  );
}
