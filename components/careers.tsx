import Link from "next/link";
import { Section } from "./section";
import { openRoles } from "../lib/site-content";

/**
 * Listings come from lib/site-content.ts. While there are none, the section
 * says so plainly and keeps the open-application route — inventing vacancies
 * would waste candidates' time and is not recoverable reputationally.
 */
export function Careers() {
  const hasRoles = openRoles.length > 0;

  return (
    <Section id="careers">
      <div className="careers" data-reveal>
        <div className="careers__copy">
          <p className="eyebrow">Careers</p>
          <h2>Engineers who want the hard half of the problem.</h2>
          <p className="text-large">
            Syscov works on systems where the interesting part is the constraint, not the framework. If that is the
            kind of work you want, we would rather see what you have built than a list of keywords.
          </p>
        </div>

        <div className="careers__roles">
          {hasRoles ? (
            <ul className="role-list">
              {openRoles.map((role) => (
                <li key={role.title}>
                  <div>
                    <h3>{role.title}</h3>
                    <p>
                      {role.discipline} · {role.location} · {role.type}
                    </p>
                  </div>
                  <Link className="text-link" href="/#contact">
                    Apply
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="careers__empty">
              <p className="careers__status">
                <span aria-hidden="true" />
                No open roles right now
              </p>
              <p>
                We still read open applications. Send what you have worked on and what part of it you owned — that
                tells us more than a CV does.
              </p>
              <Link className="button button--secondary" href="/#contact">
                Send an open application
                <span aria-hidden="true" className="button__arrow">
                  <svg fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  </svg>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
