import Link from "next/link";
import { Section } from "./section";
import { ServiceArt, serviceArt } from "./service-art";
import { services } from "../lib/services";

/** The four lead services; the rest are one click away on /services. */
export function ServicesShowcase() {
  const featured = services.filter((service) => service.featured);

  return (
    <Section className="services-home" id="services" tone="mist">
      <div className="services-home__head" data-reveal>
        <div>
          <p className="eyebrow">What we build</p>
          <h2>Technology shaped around the problem, not a preset package.</h2>
        </div>
        <Link className="button button--secondary" href="/services">
          View all services
          <span aria-hidden="true" className="button__arrow">
            <svg fill="none" viewBox="0 0 16 16">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="services-home__grid" data-reveal-stagger>
        {featured.map((service) => (
          <Link className="service-tile" data-reveal href={`/services/${service.slug}`} key={service.slug}>
            <span className="service-tile__body">
              <h3>{service.name}</h3>
              <p>{service.cardDescription ?? service.navDescription}</p>
              <span className="service-tile__more">
                Learn more
                <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </span>
            </span>
            <span className="service-tile__art">
              <ServiceArt id={service.slug} name={serviceArt[service.slug]} />
            </span>
          </Link>
        ))}
      </div>

    </Section>
  );
}
