import type { IconName } from "../components/icon";

/**
 * The six services. Each gets its own page; the dropdown, the services index,
 * and the pages themselves all read from this one array.
 *
 * `embed` names a section that used to live on the home page and now belongs to
 * the service it actually describes — moved, not duplicated.
 */
export type ServiceEmbed = "engineering" | "ai" | "security" | "technology";

export type Service = {
  slug: string;
  /** Shown on the home services section; the rest live on /services. */
  featured?: boolean;
  name: string;
  navDescription: string;
  /** Longer copy for the home cards; the nav keeps the short line. */
  cardDescription?: string;
  icon: IconName;
  eyebrow: string;
  title: string;
  /** Rendered in the brand gradient inside the title. */
  emphasis: string;
  intro: string;
  capabilities: { icon: IconName; title: string; description: string }[];
  approach: { title: string; description: string }[];
  embed?: ServiceEmbed;
};

export const services: Service[] = [
  {
    slug: "web-platforms",
    cardDescription:
      "Web experiences built on a real backend, not a template with a form bolted on. We handle the interface, the data behind it, and the parts that have to keep working once traffic and content actually grow.",
    featured: true,
    name: "Web & product platforms",
    navDescription: "Web experiences built on a real backend.",
    icon: "browser",
    eyebrow: "Service — Web & product platforms",
    title: "Web products that are built on something.",
    emphasis: "built on something",
    intro:
      "A marketing site and a product platform are not the same job. We build the second kind — the ones with a real backend behind them, real data moving through them, and users whose day stops when they break.",
    capabilities: [
      { icon: "browser", title: "Product web applications", description: "Interfaces with state, permissions, and workflows behind them — not pages with a form bolted on." },
      { icon: "layers", title: "Design systems", description: "A component layer your team can build on without re-deciding spacing and colour every sprint." },
      { icon: "gauge", title: "Performance work", description: "Load, render, and interaction budgets treated as requirements rather than a cleanup task." },
      { icon: "link", title: "Integrations", description: "The systems you already run, connected properly, with failure handled where it happens." },
    ],
    approach: [
      { title: "Architecture before interface", description: "We settle the data and the boundaries first. Screens designed against a shaky model get rebuilt twice." },
      { title: "Increments you can ship", description: "Work arrives in pieces that are genuinely releasable, so progress is visible rather than promised." },
      { title: "Handover is a deliverable", description: "Structure, documentation, and a team that can carry it forward without us." },
    ],
  },
  {
    slug: "full-stack-engineering",
    cardDescription:
      "Every layer treated as one system, because most failures happen in the gaps between them. Front-end, services, data and deployment are designed together, so nobody ends up owning half a problem.",
    featured: true,
    name: "Full-stack engineering",
    navDescription: "Every layer of the stack, treated as one system.",
    icon: "layers",
    eyebrow: "Service — Full-stack engineering",
    title: "One team across every layer of the stack.",
    emphasis: "every layer",
    intro:
      "Most projects do not fail inside a layer. They fail between them — where the interface meets the data model, or where the build meets production. Keeping the whole stack in one team is how those gaps stop appearing.",
    capabilities: [
      { icon: "code", title: "Frontend", description: "Interfaces that hold up as the product grows, built on a system rather than a pile of components." },
      { icon: "server", title: "Backend & APIs", description: "Service boundaries, business logic, and contracts that other systems can depend on." },
      { icon: "database", title: "Data", description: "Models that match how the business actually works, and queries that stay fast as volume grows." },
      { icon: "cloud", title: "Delivery", description: "Pipelines, environments, and observability so shipping is routine instead of an event." },
    ],
    approach: [
      { title: "Decisions in context", description: "A choice in one layer accounts for the others, because the same people own all of them." },
      { title: "Short handoffs", description: "No specification thrown between teams — the gap where requirements get lost simply is not there." },
      { title: "Production is the target", description: "Deployment, monitoring, and operability are designed in, not discovered afterwards." },
    ],
    embed: "engineering",
  },
  {
    slug: "ai-automation",
    cardDescription:
      "Intelligence wired into the work people already do rather than parked beside it. Retrieval over your own sources, evaluation you can actually trust, and a human kept on the decisions that carry risk.",
    featured: true,
    name: "AI & automation",
    navDescription: "Intelligence connected to the work around it.",
    icon: "ai",
    eyebrow: "Service — AI & automation",
    title: "AI that is wired into the work, not beside it.",
    emphasis: "wired into the work",
    intro:
      "An AI feature is only as useful as its access to your data, your systems, and the decisions that already have owners. We build the connective layer that turns a capable model into something your team can actually rely on.",
    capabilities: [
      { icon: "ai", title: "AI product features", description: "Capability built into the product flow, where the user already is, rather than a separate tool." },
      { icon: "database", title: "Retrieval over your data", description: "Answers grounded in your own sources, with citations, so an output can be checked." },
      { icon: "exchange", title: "Process automation", description: "The repetitive middle of a workflow automated, with people kept on the decisions that carry risk." },
      { icon: "check", title: "Evaluation", description: "A way to tell whether a change made the system better, run on every release rather than by impression." },
    ],
    approach: [
      { title: "Start from the process", description: "We map the work before choosing a model. A tool picked before the target process rarely survives contact with it." },
      { title: "Guardrails before launch", description: "Schema, PII boundaries, and citation requirements are part of the build, not a later review." },
      { title: "Measurable, or not shipped", description: "If we cannot tell whether it is working, it does not go to production." },
    ],
    embed: "ai",
  },
  {
    slug: "security",
    name: "Security engineering",
    navDescription: "Access, data, and evidence designed in early.",
    icon: "shield",
    eyebrow: "Service — Security engineering",
    title: "Security designed in, not reviewed at the end.",
    emphasis: "designed in",
    intro:
      "Security added after a system is built is mostly compromise. We consider access, data handling, and auditability while the architecture is still cheap to change — which is the only point at which it is genuinely inexpensive.",
    capabilities: [
      { icon: "lock", title: "Access control", description: "Permissions and least-privilege patterns modelled on how the organisation actually works." },
      { icon: "key", title: "Authentication", description: "Identity and session boundaries that are clear to reason about and to audit." },
      { icon: "list", title: "Audit trails", description: "Events recorded so that a question asked months later has an answer." },
      { icon: "shield", title: "Data protection", description: "Sensitive data considered across storage, transit, and every third party that touches it." },
    ],
    approach: [
      { title: "Threats before controls", description: "We establish what actually needs protecting, so effort lands where the risk is." },
      { title: "Evidence as a by-product", description: "Systems designed so that showing compliance is a query, not a project." },
      { title: "Practical over theatrical", description: "Controls a team will keep using beat controls that get worked around by week three." },
    ],
    embed: "security",
  },
  {
    slug: "cloud-infrastructure",
    cardDescription:
      "Production environments built to be operated, not just launched. Deployment, monitoring and recovery are designed in from the start, so the person on call at 2am is not guessing at what broke.",
    featured: true,
    name: "Cloud & infrastructure",
    navDescription: "Production environments built to be operated.",
    icon: "cloud",
    eyebrow: "Service — Cloud & infrastructure",
    title: "Infrastructure your team can actually operate.",
    emphasis: "actually operate",
    intro:
      "Infrastructure nobody understands is a liability regardless of how modern it is. We build environments that are reproducible, observable, and boring to run — which is the highest compliment infrastructure can be paid.",
    capabilities: [
      { icon: "cloud", title: "Cloud environments", description: "Reproducible infrastructure defined in code, so environments match and drift is visible." },
      { icon: "exchange", title: "CI/CD", description: "Pipelines that make releasing routine, with a rollback path that has actually been tested." },
      { icon: "eye", title: "Observability", description: "Logs, metrics, and traces arranged around the questions you will ask during an incident." },
      { icon: "gauge", title: "Scaling & cost", description: "Capacity that follows demand, with spend attributable to something you can act on." },
    ],
    approach: [
      { title: "Reproducible by default", description: "If it cannot be rebuilt from code, it is a risk waiting for the person who set it up to leave." },
      { title: "Designed for the bad day", description: "Recovery paths, alerting, and runbooks decided before they are needed rather than during." },
      { title: "Right-sized", description: "The simplest infrastructure that meets the requirement, not the most impressive one." },
    ],
    embed: "technology",
  },
  {
    slug: "modernization",
    name: "Modernization",
    navDescription: "A staged route off a system that has stopped moving.",
    icon: "handoff",
    eyebrow: "Service — Modernization",
    title: "A staged route off a system that has stopped moving.",
    emphasis: "staged route",
    intro:
      "Rewrites fail on the cutover, not on the code. We move capability across in slices, keep both paths running until each slice proves itself, and never ask a business to bet a weekend on a big-bang switch.",
    capabilities: [
      { icon: "target", title: "Behaviour mapping", description: "What the system actually does today, established from production traffic rather than stale documentation." },
      { icon: "layers", title: "Strangler migration", description: "A stable interface in front of the old system, with capability moved behind it slice by slice." },
      { icon: "check", title: "Live reconciliation", description: "Both paths running and compared, so correctness is demonstrated rather than argued." },
      { icon: "gauge", title: "Performance recovery", description: "The bottlenecks that made the old system feel slow, found and fixed rather than inherited." },
    ],
    approach: [
      { title: "No cutover weekend", description: "Each slice goes live on its own. Risk arrives in portions small enough to reverse." },
      { title: "Keep the operational context", description: "The undocumented logic in a legacy system is usually there for a reason. We find the reason first." },
      { title: "Leave it changeable", description: "The point is not a new system. It is a system your engineers can change with confidence." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
