import { Section } from "./section";

const flow = ["User", "Product", "AI layer", "Business logic", "Data & APIs"] as const;
const examples = ["Workflow assistants", "Document intelligence", "Support automation", "Knowledge retrieval", "AI-enabled product features"] as const;

export function AiAutomation() {
  return (
    <Section id="ai" innerClassName="ai-section__grid" tone="mist">
      <div className="ai-section__copy" data-reveal>
        <p className="eyebrow">AI & automation</p>
        <h2>AI works best when it is connected to the work around it.</h2>
        <p className="text-large">Syscov designs AI capabilities as part of a real product and operational flow—not as a disconnected feature or a novelty layer.</p>
        <div className="ai-section__examples">
          {examples.map((example) => <span className="tag" key={example}>{example}</span>)}
        </div>
      </div>
      <div aria-label="AI-enabled product flow" className="ai-flow" data-reveal>
        {flow.map((step, index) => (
          <div className="ai-flow__item" key={step}>
            <div className={`ai-flow__node ${step === "AI layer" ? "ai-flow__node--featured" : ""}`}>{step}</div>
            {index < flow.length - 1 && <span aria-hidden="true" className="ai-flow__connector">→</span>}
          </div>
        ))}
      </div>
    </Section>
  );
}
