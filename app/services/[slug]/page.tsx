import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AiAutomation } from "../../../components/ai-automation";
import { FullStackEngineering } from "../../../components/full-stack-engineering";
import { Icon } from "../../../components/icon";
import { SecuritySection } from "../../../components/security-section";
import { Section, SectionIntro } from "../../../components/section";
import { TechnologyStack } from "../../../components/technology-stack";
import { VideoBackdrop } from "../../../components/video-backdrop";
import { serviceBackdrops } from "../../../lib/media";
import { capabilityId, getService, services, type ServiceEmbed } from "../../../lib/services";

/** Sections that moved off the home page onto the service they describe. */
const embeds: Record<ServiceEmbed, () => React.ReactElement> = {
  engineering: FullStackEngineering,
  ai: AiAutomation,
  security: SecuritySection,
  technology: TechnologyStack,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: `${service.name} — Syscov`, description: service.intro };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const backdrop = serviceBackdrops[service.slug];

  const [before, after] = service.title.split(service.emphasis);
  const Embedded = service.embed ? embeds[service.embed] : null;

  return (
    <main id="top">
      <header className={backdrop ? "service-hero has-video" : "service-hero"}>
        {backdrop && <VideoBackdrop eager video={backdrop} />}
        <div className="container">
          <p className="eyebrow" data-reveal>
            {service.eyebrow}
          </p>
          <h1 data-reveal>
            {before}
            <span className="gradient-text">{service.emphasis}</span>
            {after}
          </h1>
          <p className="text-large service-hero__intro" data-reveal>
            {service.intro}
          </p>
        </div>
      </header>

      <Section id="covers" tone="mist">
        <SectionIntro>
          <p className="eyebrow">What this covers</p>
          <h2>The work inside this service.</h2>
        </SectionIntro>
      </Section>

      {/* Each capability is its own section rather than a card in a grid, so the
          deep links in the nav and footer land on something substantial. */}
      {service.capabilities.map((capability, index) => (
        <Section
          className={index % 2 === 1 ? "capability capability--alt" : "capability"}
          id={capabilityId(capability.title)}
          key={capability.title}
          tone={index % 2 === 1 ? "mist" : "paper"}
        >
          <div className="capability__grid">
            <div className="capability__copy" data-reveal>
              <p className="capability__index">
                <span className="capability__icon">
                  <Icon name={capability.icon} />
                </span>
                {String(index + 1).padStart(2, "0")} / {service.capabilities.length}
              </p>
              <h2>{capability.title}</h2>
              <p className="capability__pitch">{capability.pitch}</p>
              <p className="capability__description">{capability.description}</p>
            </div>

            <ul className="capability__points" data-reveal>
              {capability.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      {Embedded && <Embedded />}

      <Section id="approach">
        <SectionIntro>
          <p className="eyebrow">How we work on it</p>
          <h2>Three things we hold to.</h2>
        </SectionIntro>
        <ol className="service-approach" data-reveal-stagger>
          {service.approach.map((item, index) => (
            <li className="service-approach__item" data-reveal key={item.title}>
              <span className="service-approach__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="service-cta" tone="mist">
        <div className="audit-cta" data-reveal>
          <p className="eyebrow">Next step</p>
          <h2>Tell us what you are trying to build.</h2>
          <p className="text-large">
            Bring the constraint that worries you most. That is usually the fastest way to work out whether this is the
            right service for the job.
          </p>
          <div className="hero__actions audit-cta__actions">
            <Link className="button button--primary" href="/#contact">
              Start a project
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
            <Link className="button button--secondary" href="/services">
              All services
              <span aria-hidden="true" className="button__arrow">
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
