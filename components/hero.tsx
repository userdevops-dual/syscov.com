import Link from "next/link";
import { AiPipelineDiagram } from "./ai-pipeline-diagram";
import { SyscovBracket } from "./syscov-mark";
import { siteContent } from "../lib/site-content";

export function Hero() {
  const { positioning } = siteContent;
  const [beforeEmphasis, afterEmphasis] = positioning.tagline.split(positioning.emphasis);

  return (
    <section className="hero" id="hero">
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
              Start a project
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
            <Link className="button button--secondary" href="#capabilities">
              Explore capabilities
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="hero-architecture" data-reveal>
          <div className="hero-architecture__panel">
            <SyscovBracket
              className="hero-architecture__bracket hero-architecture__bracket--start"
              gradientId="hero-bracket-start"
              side="left"
            />
            <AiPipelineDiagram />
            <SyscovBracket
              className="hero-architecture__bracket hero-architecture__bracket--end"
              gradientId="hero-bracket-end"
              side="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
