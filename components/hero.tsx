import Link from "next/link";
import { CapabilityStrip } from "./capability-strip";
import { HeroBackdrop } from "./hero-backdrop";
import { heroVideo, siteContent } from "../lib/site-content";

export function Hero() {
  const { positioning } = siteContent;
  const [beforeEmphasis, afterEmphasis] = positioning.tagline.split(positioning.emphasis);

  return (
    <section className={heroVideo.mp4 ? "hero hero--video" : "hero"} id="hero">
      <HeroBackdrop />
      <div className="container hero__grid">
        <div className="hero__copy" data-reveal-stagger>
          <p className="hero__eyebrow" data-reveal>
            <span aria-hidden="true" className="hero__status-dot" />
            Technology <span>•</span> Engineering <span>•</span> AI <span>•</span> Cloud
          </p>
          <h1 data-reveal>
            {beforeEmphasis}
            <span className="gradient-text">{positioning.emphasis}</span>
            {afterEmphasis}
          </h1>
          <p className="text-large hero__description" data-reveal>
            Syscov helps turn ambitious digital ideas into thoughtful, scalable technology built for real-world production.
          </p>
          <div className="hero__actions" data-reveal>
            <Link className="button button--primary" href="#contact">
              Talk to an engineer
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
            <Link className="button button--secondary" href="#services">
              See what we build
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <CapabilityStrip />
    </section>
  );
}
