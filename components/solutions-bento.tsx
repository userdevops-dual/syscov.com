import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon, type IconName } from "./icon";
import { Section, SectionIntro } from "./section";

const solutions: { title: string; description: string; icon: IconName; span: number }[] = [
  { title: "Websites & web platforms", description: "High-performing web experiences shaped around your users and operations.", icon: "browser", span: 5 },
  { title: "Custom software", description: "Purpose-built systems for workflows that off-the-shelf tools cannot solve.", icon: "code", span: 4 },
  { title: "Mobile applications", description: "Useful mobile products with a considered path from launch to scale.", icon: "mobile", span: 3 },
  { title: "AI & AI integrations", description: "Practical AI features connected to the data and tools your team uses.", icon: "ai", span: 4 },
  { title: "APIs & backend", description: "Reliable foundations that connect products, services, and data cleanly.", icon: "exchange", span: 4 },
  { title: "Cloud & infrastructure", description: "Production-ready cloud environments designed for dependable delivery.", icon: "cloud", span: 4 },
  { title: "E-commerce", description: "Commerce experiences engineered for conversion and operations.", icon: "cart", span: 3 },
  { title: "Enterprise systems", description: "Complex, connected systems made clearer for the people who rely on them.", icon: "grid", span: 5 },
  { title: "Performance & modernization", description: "A focused route from legacy friction to a more capable platform.", icon: "gauge", span: 4 },
];

export function SolutionsBento() {
  return (
    <Section id="capabilities">
      <SectionIntro>
        <p className="eyebrow">What we build</p>
        <h2>Technology shaped around the problem, not a preset package.</h2>
        <p className="text-large">
          From a focused product to an interconnected platform, Syscov brings the right engineering disciplines
          together.
        </p>
      </SectionIntro>

      <div className="solutions__grid" data-reveal-stagger>
        {solutions.map((solution) => (
          <article
            className="card solution-card"
            data-reveal
            key={solution.title}
            style={{ "--card-span": solution.span } as CSSProperties}
          >
            <span className="solution-card__icon">
              <Icon name={solution.icon} />
            </span>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </article>
        ))}

        <aside className="solutions-cta" data-reveal>
          <div>
            <p className="eyebrow">Have a complex brief?</p>
            <h3>Not sure where your project fits?</h3>
            <p>Tell us what you are trying to make. We will help identify a practical technical path.</p>
          </div>
          <Link className="button button--primary" href="#contact">
            Talk to Syscov
            <span aria-hidden="true" className="button__arrow">
              <svg fill="none" viewBox="0 0 16 16">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </span>
          </Link>
        </aside>
      </div>
    </Section>
  );
}
