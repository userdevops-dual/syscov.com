import { Achievements } from "../components/achievements";
import { AiSpotlight } from "../components/ai-spotlight";
import { Careers } from "../components/careers";
import { CaseStudiesTeaser } from "../components/case-studies-teaser";
import { WhatWeBring } from "../components/what-we-bring";
import { ContactSection } from "../components/contact-section";
import { Hero } from "../components/hero";
import { Engagement } from "../components/engagement";
import { ServicesShowcase } from "../components/services-showcase";
import { Technologies } from "../components/technologies";
import { siteContent } from "../lib/site-content";

export default function Home() {
  return (
    <main
      aria-label={`${siteContent.companyName} website`}
      data-site-objective={siteContent.primaryObjective}
      id="top"
    >
      <Hero />
      <ServicesShowcase />
      <AiSpotlight />
      <WhatWeBring />
      <CaseStudiesTeaser />
      <Achievements />
      <Technologies />
      <Engagement />
      <Careers />
      <ContactSection />
    </main>
  );
}
