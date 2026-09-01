import { Icon, type IconName } from "./icon";

/**
 * Continuously scrolling capability ticker.
 *
 * The list is rendered twice back to back and the track translates by exactly
 * -50%, so the loop is seamless with no jump. `aria-hidden` on the duplicate
 * keeps the repeat out of the accessibility tree. Motion pauses on hover and
 * is disabled entirely under prefers-reduced-motion.
 */
const capabilities: { label: string; icon: IconName }[] = [
  { label: "Web platforms", icon: "browser" },
  { label: "Mobile products", icon: "mobile" },
  { label: "AI & automation", icon: "ai" },
  { label: "Cloud systems", icon: "cloud" },
  { label: "Security-minded", icon: "shield" },
  { label: "Full-stack delivery", icon: "layers" },
  { label: "Custom software", icon: "code" },
  { label: "APIs & backend", icon: "exchange" },
  { label: "Data platforms", icon: "database" },
  { label: "E-commerce", icon: "cart" },
  { label: "Performance", icon: "gauge" },
  { label: "Modernization", icon: "handoff" },
  { label: "Infrastructure", icon: "server" },
  { label: "Enterprise systems", icon: "grid" },
];

function Row({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="capability-strip__list">
      {capabilities.map((capability) => (
        <li className="capability-strip__item" key={capability.label}>
          <span className="capability-strip__icon">
            <Icon name={capability.icon} />
          </span>
          <span>{capability.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function CapabilityStrip() {
  return (
    <section aria-label="Syscov capabilities" className="capability-strip">
      <div className="capability-strip__viewport">
        <div className="capability-strip__track">
          <Row />
          <Row duplicate />
        </div>
      </div>
    </section>
  );
}
