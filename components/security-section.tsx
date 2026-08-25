import { Icon, type IconName } from "./icon";
import { Section, SectionIntro } from "./section";

const flow = ["People", "Access", "Systems", "Controls", "Logs", "Monitoring", "Evidence"] as const;
const controls: { icon: IconName; title: string; description: string }[] = [
  { icon: "lock", title: "Access control", description: "Thoughtful permissions and least-privilege access patterns." },
  { icon: "key", title: "Authentication", description: "Clear identity and sign-in boundaries for the product." },
  { icon: "list", title: "Audit logging", description: "Events that support traceability when it matters." },
  { icon: "shield", title: "Data protection", description: "Sensitive data considered across storage and transit." },
  { icon: "check", title: "Secure delivery", description: "Security included in engineering decisions and handoffs." },
  { icon: "eye", title: "Monitoring", description: "Signals that make system behaviour easier to observe." },
];

export function SecuritySection() {
  return (
    <Section id="security">
      <SectionIntro align="center">
        <p className="eyebrow">Security-minded engineering</p>
        <h2>Security belongs in the system, not at the end of the project.</h2>
        <p className="text-large">We consider the people, access, systems, and evidence around a product from the start—creating a more durable foundation for evolving requirements.</p>
      </SectionIntro>
      <div aria-label="Security control flow" className="security-flow" data-reveal>
        {flow.map((step, index) => (
          <div className="security-flow__item" key={step}>
            <div className="security-flow__node">{step}</div>
            {index < flow.length - 1 && <span aria-hidden="true" className="security-flow__connector">→</span>}
          </div>
        ))}
      </div>
      <div className="security-controls" data-reveal-stagger>
        {controls.map((control) => (
          <div className="security-control" data-reveal key={control.title}>
            <span className="security-control__icon">
              <Icon name={control.icon} />
            </span>
            <div>
              <h3>{control.title}</h3>
              <p>{control.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
