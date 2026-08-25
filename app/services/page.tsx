import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../../components/icon";
import { services } from "../../lib/services";

export const metadata: Metadata = {
  title: "Services — Syscov",
  description:
    "Web and product platforms, full-stack engineering, AI and automation, security, cloud and infrastructure, and modernization.",
};

export default function ServicesIndexPage() {
  return (
    <main id="top">
      <header className="service-hero">
        <div className="container">
          <p className="eyebrow" data-reveal>
            Services
          </p>
          <h1 data-reveal>
            Six ways we get involved, <span className="gradient-text">one team behind them</span>.
          </h1>
          <p className="text-large service-hero__intro" data-reveal>
            Most projects need more than one of these. They are separated here because it makes them easier to talk
            about — not because they are run by different people.
          </p>

          <div className="service-index" data-reveal-stagger>
            {services.map((service) => (
              <Link className="service-index__card" data-reveal href={`/services/${service.slug}`} key={service.slug}>
                <span className="service-card__icon">
                  <Icon name={service.icon} />
                </span>
                <h2>{service.name}</h2>
                <p>{service.navDescription}</p>
                <span className="service-index__more">
                  Explore
                  <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
}
