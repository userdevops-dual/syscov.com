import Link from "next/link";
import { SyscovMark } from "./syscov-mark";
import { contactDetails, siteContent, socialLinks } from "../lib/site-content";
import { capabilityId, services } from "../lib/services";

/** All six services, straight from the one array the nav and pages read. */
const serviceLinks = services.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
}));

const companyLinks = [
  { label: "What we build", href: "/#services" },
  { label: "Build AI with Syscov", href: "/#ai" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Technologies", href: "/#technologies" },
  { label: "How we work together", href: "/#engagement" },
  { label: "Careers", href: "/#careers" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link aria-label="Syscov home" className="brand" href="/">
              <SyscovMark className="brand__mark" gradientId="syscov-mark-footer" title={null} />
              <span>{siteContent.companyName}</span>
            </Link>
            <p>{siteContent.positioning.alternativeTagline}</p>
            <p className="site-footer__disciplines">
              <span>Technology</span>
              <span>Engineering</span>
              <span>AI</span>
              <span>Cloud</span>
              <span>Security</span>
            </p>
          </div>

          <nav aria-label="Services">
            <h2>Services</h2>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link className="footer-link" href={link.href}>
                    {link.label}
                    <span aria-hidden="true" className="link-arrow">
                      <i />
                      <svg fill="none" viewBox="0 0 8 12">
                        <path d="M1.5 1 6.5 6l-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2>Company</h2>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link className="footer-link" href={link.href}>
                    {link.label}
                    <span aria-hidden="true" className="link-arrow">
                      <i />
                      <svg fill="none" viewBox="0 0 8 12">
                        <path d="M1.5 1 6.5 6l-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h2>Get started</h2>
            <ul>
              <li>
                <Link className="footer-link" href="/ai-audit">
                  Book an AI audit
                  <span aria-hidden="true" className="link-arrow">
                    <i />
                    <svg fill="none" viewBox="0 0 8 12">
                      <path d="M1.5 1 6.5 6l-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="/#contact">
                  Start a project
                  <span aria-hidden="true" className="link-arrow">
                    <i />
                    <svg fill="none" viewBox="0 0 8 12">
                      <path d="M1.5 1 6.5 6l-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="footer-link" href="/#careers">
                  Work with us
                  <span aria-hidden="true" className="link-arrow">
                    <i />
                    <svg fill="none" viewBox="0 0 8 12">
                      <path d="M1.5 1 6.5 6l-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  </span>
                </Link>
              </li>
              {/* Rendered only once real, approved details exist — see lib/site-content.ts */}
              {contactDetails.email && (
                <li>
                  <a className="text-link" href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                </li>
              )}
              {contactDetails.phone && (
                <li>
                  <a className="text-link" href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}>
                    {contactDetails.phone}
                  </a>
                </li>
              )}
              {contactDetails.location && <li className="site-footer__muted">{contactDetails.location}</li>}
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a className="text-link" href={link.href} rel="noreferrer noopener" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__deep">
          <h2>Capabilities</h2>
          <div className="site-footer__deep-grid">
            {services.map((service) => (
              <div key={service.slug}>
                <Link className="site-footer__deep-title" href={`/services/${service.slug}`}>
                  {service.name}
                </Link>
                <ul>
                  {service.capabilities.map((capability) => (
                    <li key={capability.title}>
                      <Link
                        className="site-footer__deep-link"
                        href={`/services/${service.slug}#${capabilityId(capability.title)}`}
                      >
                        {capability.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {siteContent.companyName}. All rights reserved.
          </p>
          {/*
            Privacy and Terms previously linked to "/" — a dead link on a page
            visitors expect to be real. They come back when the actual policies
            exist and have their own routes.
          */}
          <p className="site-footer__note">Built and run by the team that would build yours.</p>
        </div>
      </div>
    </footer>
  );
}
