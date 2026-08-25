import { Icon, type IconName } from "./icon";

const capabilities: { label: string; icon: IconName }[] = [
  { label: "Web platforms", icon: "browser" },
  { label: "Mobile products", icon: "mobile" },
  { label: "AI & automation", icon: "ai" },
  { label: "Cloud systems", icon: "cloud" },
  { label: "Security-minded", icon: "shield" },
  { label: "Full-stack delivery", icon: "layers" },
];

export function CapabilityStrip() {
  return (
    <section aria-label="Syscov capabilities" className="capability-strip">
      <div className="container">
        <ul className="capability-strip__list">
          {capabilities.map((capability) => (
            <li className="capability-strip__item" key={capability.label}>
              <span className="capability-strip__icon">
                <Icon name={capability.icon} />
              </span>
              <span>{capability.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
