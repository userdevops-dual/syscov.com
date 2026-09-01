import { Section, SectionIntro } from "./section";
import { achievements } from "../lib/site-content";

/**
 * Renders nothing until real milestones exist in lib/site-content.ts.
 *
 * A "company achievements" block is exactly where invented numbers tend to
 * appear, so this section is absent rather than filled with placeholders —
 * an empty page region is honest, a fabricated one is not.
 */
export function Achievements() {
  if (achievements.length === 0) return null;

  return (
    <Section id="achievements" tone="mist">
      <SectionIntro>
        <p className="eyebrow">Achievements</p>
        <h2>What the work has added up to.</h2>
      </SectionIntro>

      <dl className="achievement-grid" data-reveal-stagger>
        {achievements.map((item) => (
          <div className="achievement" data-reveal key={item.label}>
            <dt>{item.value}</dt>
            <dd>
              {item.label}
              {item.note && <span>{item.note}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
