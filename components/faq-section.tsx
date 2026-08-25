import { FaqAccordion, type FaqItem } from "./faq-accordion";
import { Section, SectionIntro } from "./section";

const faqs: readonly FaqItem[] = [
  {
    question: "What kinds of projects does Syscov take on?",
    answer:
      "Work that has more than one moving part: a product that needs a real backend, a platform that has to talk to systems you already run, an AI capability that only makes sense connected to your data. If a single specialist could finish it alone, you probably do not need us.",
  },
  {
    question: "Can you work with our existing team and codebase?",
    answer:
      "Yes. We regularly join existing engineering teams, take ownership of a defined area, or work alongside an in-house team on a specific layer. The first step is understanding what already exists before proposing changes to it.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "With a conversation about the problem rather than a feature list. From there we typically run a short discovery to establish scope, technical direction, and a delivery plan you can make a decision against — before a larger commitment.",
  },
  {
    question: "How is a project priced?",
    answer:
      "Pricing depends on scope, duration, and how much of the team is involved. We share the basis for an estimate — what is included, what is assumed, and what would change it — rather than a single number without context.",
  },
  {
    question: "Who owns the code and the intellectual property?",
    answer:
      "You do. Ownership of the code, infrastructure, and accounts we set up transfers to you, and we structure the work so your team can operate it without depending on us.",
  },
  {
    question: "What happens after launch?",
    answer:
      "That is agreed before launch, not after. Depending on what you need, we hand over to your team with documentation and support, stay on for an agreed period, or continue as an ongoing engineering partner.",
  },
  {
    question: "Do you sign NDAs and work under our security requirements?",
    answer:
      "Yes. We are happy to work under your agreements and security requirements, and to discuss how access, data handling, and review will work on the project before it begins.",
  },
];

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionIntro align="center">
        <p className="eyebrow">Questions</p>
        <h2>The things people ask before they get in touch.</h2>
      </SectionIntro>

      <FaqAccordion faqs={faqs} />
    </Section>
  );
}
