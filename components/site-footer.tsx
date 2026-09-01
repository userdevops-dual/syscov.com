import Link from "next/link";
import { SyscovMark } from "./syscov-mark";
import { contactDetails, siteContent, socialLinks } from "../lib/site-content";
import { services } from "../lib/services";

/* The four capability sections now live on their own routes, so the footer
   links to the services rather than to anchors that no longer exist. */
const capabilityLinks = [
  { label: "All services", href: "/services" },
  ...services.slice(0, 4).map((service) => ({ label: service.name, href: `/services/${service.slug}` })),
];

const companyLinks = [
  { label: "What we build", href: "/#services" },
  { label: "AI at Syscov", href: "/#ai" },
  { label: "AI audit", href: "/ai-audit" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Technologies", href: "/#technologies" },
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
          </div>

          <nav aria-label="Capabilities">
            <h2>Capabilities</h2>
            <ul>
              {capabilityLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-link" href={link.href}>
                    {link.label}
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
                  <Link className="text-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <Link className="text-link" href="/#contact">
                  Start a project
                </Link>
              </li>
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

        <div className="site-footer__bottom">
          <p>
            © {year} {siteContent.companyName}. All rights reserved.
          </p>
          <p className="site-footer__legal">
            <Link className="text-link" href="/">
              Privacy
            </Link>
            <Link className="text-link" href="/">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
