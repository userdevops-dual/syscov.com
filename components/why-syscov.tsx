import { Icon, type IconName } from "./icon";
import { Section, SectionIntro } from "./section";

const differentiators: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "layers",
    title: "One team, every layer",
    description:
      "Design, frontend, backend, infrastructure, and AI sit in the same team — so decisions in one layer account for the others.",
  },
  {
    icon: "target",
    title: "Production is the standard",
    description:
      "A prototype that cannot be operated is not finished work. We build toward deployment, observability, and handover from the start.",
  },
  {
    icon: "check",
    title: "Complexity handled honestly",
    description:
      "We say what a project will actually take. Scope, trade-offs, and risk are discussed while they are still cheap to change.",
  },
  {
    icon: "exchange",
    title: "Systems, not screens",
    description:
      "The interface is one part of a product. We design the data, integrations, and logic behind it with the same care.",
  },
  {
    icon: "shield",
    title: "Security considered early",
    description:
      "Access, data handling, and auditability belong in the architecture, not in a review at the end of the build.",
  },
  {
    icon: "handoff",
    title: "Built to be handed over",
    description:
      "Clear structure, documentation, and knowledge transfer — so your team can carry the work forward without us.",
  },
];

export function WhySyscov() {
  return (
    <Section id="why-syscov" tone="mist">
      <SectionIntro>
        <p className="eyebrow">Why Syscov</p>
        <h2>What tends to matter once a project gets real.</h2>
      </SectionIntro>

      <div className="why-grid" data-reveal-stagger>
        {differentiators.map((item) => (
          <article className="why-item" key={item.title} data-reveal>
            <span className="why-item__icon">
              <Icon name={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
