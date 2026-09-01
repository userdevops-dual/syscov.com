import { industries } from "../lib/site-content";
import { Section } from "./section";

/**
 * The domains the published systems run in.
 *
 * This deliberately names industries rather than clients: client marks are
 * publishable only with written permission, and inventing them would undercut
 * everything else on the page. Each entry traces back to a case study or a
 * representative engagement already described on this site — see the
 * `evidence` field on each record in lib/site-content.ts.
 */
export function IndustriesStrip() {
  return (
    <Section className="industries" label="Industries">
      <p className="eyebrow industries__eyebrow" data-reveal>
        Industries
      </p>

      <ul className="industries__grid" data-reveal data-reveal-stagger>
        {industries.map((industry) => (
          <li className="industries__item" data-reveal key={industry.name}>
            <span className="industries__mark" />
            {industry.name}
          </li>
        ))}
      </ul>

      <p className="industries__statement" data-reveal>
        The domains these systems run in. Client names and commercial detail stay private unless a partner has
        approved publication.
      </p>
    </Section>
  );
}
