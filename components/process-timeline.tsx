import { ProcessSteps, type ProcessStep } from "./process-steps";
import { Section, SectionIntro } from "./section";

const steps: readonly ProcessStep[] = [
  { title: "Discover", description: "We start with the problem, people, constraints, and the outcome worth pursuing.", items: ["Context review", "Goals & constraints", "Opportunity framing"] },
  { title: "Define", description: "The work becomes a focused plan with an understandable scope and technical direction.", items: ["Product scope", "Technical approach", "Delivery plan"] },
  { title: "Design", description: "We shape the experience and system decisions before the build becomes expensive to change.", items: ["User journeys", "Interface direction", "System architecture"] },
  { title: "Build", description: "Engineering moves in purposeful increments, keeping quality and clarity close to the work.", items: ["Working increments", "Code review", "Integrated delivery"] },
  { title: "Validate", description: "The product is tested against the real workflows and conditions it needs to support.", items: ["Quality assurance", "Flow validation", "Release readiness"] },
  { title: "Launch", description: "We prepare the production path with the right checks, observability, and handoff.", items: ["Deployment plan", "Production checks", "Knowledge handover"] },
  { title: "Evolve", description: "After launch, we use what the product teaches us to guide the next useful improvement.", items: ["Performance insight", "Iteration planning", "Ongoing support"] },
];

export function ProcessTimeline() {
  return (
    <Section id="process" tone="mist">
      <SectionIntro>
        <p className="eyebrow">How we work</p>
        <h2>A clear route from the first question to what comes next.</h2>
        <p className="text-large">A connected process keeps complex projects understandable, collaborative, and grounded in the outcome.</p>
      </SectionIntro>
      <ProcessSteps steps={steps} />
    </Section>
  );
}
