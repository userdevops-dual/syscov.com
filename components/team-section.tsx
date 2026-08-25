import { teamStats } from "../lib/site-content";
import { Icon, type IconName } from "./icon";
import { Section } from "./section";

const roles: { label: string; icon: IconName }[] = [
  { label: "Product managers", icon: "target" },
  { label: "UI/UX designers", icon: "pen" },
  { label: "Frontend engineers", icon: "code" },
  { label: "Backend engineers", icon: "server" },
  { label: "Mobile developers", icon: "mobile" },
  { label: "AI engineers", icon: "ai" },
  { label: "Cloud & DevOps engineers", icon: "cloud" },
  { label: "QA engineers", icon: "bug" },
];

export function TeamSection() {
  return (
    <Section id="team">
      <div className="team-section__grid">
        <div data-reveal>
          <p className="eyebrow">The team</p>
          <h2>One team with the disciplines a real project actually needs.</h2>
          <p className="text-large">
            Complex work rarely fails on a single skill. It fails in the gaps between them — between design and
            engineering, between the build and production. Syscov keeps those disciplines in one team so the handoffs
            stay short and the context is never lost.
          </p>
        </div>
        <div className="team-roles" data-reveal>
          {roles.map((role) => (
            <span className="role-chip" key={role.label}>
              <Icon name={role.icon} />
              {role.label}
            </span>
          ))}
        </div>
      </div>

      {/* Rendered only once real, measured numbers exist — see lib/site-content.ts */}
      {teamStats.length > 0 && (
        <div className="team-stats" data-reveal data-reveal-stagger>
          {teamStats.map((stat) => (
            <div className="team-stat" key={stat.label}>
              <strong className="gradient-text">{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
