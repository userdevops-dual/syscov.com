import { CapabilityStrip } from "../components/capability-strip";
import { CaseStudies } from "../components/case-studies";
import { IndustriesStrip } from "../components/industries-strip";
import { ComplexProjects } from "../components/complex-projects";
import { ContactSection } from "../components/contact-section";
import { FaqSection } from "../components/faq-section";
import { Hero } from "../components/hero";
import { ProcessTimeline } from "../components/process-timeline";
import { SolutionsBento } from "../components/solutions-bento";
import { TeamSection } from "../components/team-section";
import { WhySyscov } from "../components/why-syscov";
import { siteContent } from "../lib/site-content";

export default function Home() {
  return (
    <main
      aria-label={`${siteContent.companyName} website`}
      data-site-objective={siteContent.primaryObjective}
      id="top"
    >
      <Hero />
      <CapabilityStrip />
      <SolutionsBento />
      <ComplexProjects />
      <ProcessTimeline />
      <TeamSection />
      <IndustriesStrip />
      <CaseStudies />
      <WhySyscov />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
