/**
 * Case study catalogue.
 *
 * Codenamed system profiles describing the shape, scale, and architecture of
 * the work — no client names attached. Swap any entry for a real, named project
 * without touching the components: the page is driven entirely by this array.
 */
export const categories = [
  "Multi-Agent Systems",
  "RAG & Search",
  "Real-Time Inference",
  "LLM Platforms",
  "Computer Vision",
  "MLOps & Infra",
  "Data Pipelines",
] as const;

export type Category = (typeof categories)[number];

/** All five dimensions are the same measure — engineering demand, 0–100. */
export type Complexity = {
  scale: number;
  latency: number;
  concurrency: number;
  modelDepth: number;
  integrationDepth: number;
};

export type Project = {
  id: string;
  /** URL segment for the detail page. */
  slug: string;
  name: string;
  category: Category;
  pitch: string;
  complexity: Complexity;
  /** Headline score out of 10. */
  score: number;
  stats: { label: string; value: string }[];
  stack: string[];
  /** Real pipeline stages — length and shape vary per system. */
  flow: string[];
};

export const projects: Project[] = [
  {
    id: "SYS-01", slug: "meridian", name: "Meridian", category: "Multi-Agent Systems",
    pitch: "Runs back-office workflows end to end across 40+ specialised agents, with a supervisor that can halt and roll back a run mid-flight.",
    complexity: { scale: 78, latency: 54, concurrency: 82, modelDepth: 91, integrationDepth: 95 },
    score: 9.2,
    stats: [{ label: "Agents", value: "42" }, { label: "Workflows/day", value: "18k" }, { label: "Rollback window", value: "Full run" }, { label: "Tool integrations", value: "31" }],
    stack: ["TypeScript", "Temporal", "PostgreSQL", "Redis", "Model APIs"],
    flow: ["Intake", "Planner", "Agent pool", "Tool layer", "Supervisor", "Audit log"],
  },
  {
    id: "SYS-02", slug: "lexicon", name: "Lexicon", category: "RAG & Search",
    pitch: "Answers legal research questions over 14M case filings and refuses to answer at all when it cannot cite the passage it used.",
    complexity: { scale: 94, latency: 62, concurrency: 58, modelDepth: 84, integrationDepth: 61 },
    score: 8.8,
    stats: [{ label: "Documents", value: "14.2M" }, { label: "p95 answer", value: "2.4s" }, { label: "Citation coverage", value: "100%" }, { label: "Index refresh", value: "Nightly" }],
    stack: ["Python", "pgvector", "Elasticsearch", "PostgreSQL", "Model APIs"],
    flow: ["Corpus ingest", "Chunk + embed", "Hybrid retrieve", "Rerank", "Cited synthesis"],
  },
  {
    id: "SYS-03", slug: "sentinel", name: "Sentinel", category: "Real-Time Inference",
    pitch: "Scores every transaction for fraud inside the authorisation window, so a slow answer counts as a failed one.",
    complexity: { scale: 81, latency: 97, concurrency: 93, modelDepth: 66, integrationDepth: 72 },
    score: 9.4,
    stats: [{ label: "Throughput", value: "6.2k tx/s" }, { label: "p99 latency", value: "38ms" }, { label: "Features/decision", value: "240" }, { label: "Shadow models", value: "3" }],
    stack: ["Go", "Kafka", "Redis", "Feature store", "Kubernetes"],
    flow: ["Auth event", "Feature store", "Scoring", "Decision", "Async review"],
  },
  {
    id: "SYS-04", slug: "nexus-gateway", name: "Nexus Gateway", category: "LLM Platforms",
    pitch: "Routes every prompt to the cheapest model that will still clear the quality bar, and fails over silently when a provider degrades.",
    complexity: { scale: 72, latency: 79, concurrency: 76, modelDepth: 70, integrationDepth: 88 },
    score: 8.4,
    stats: [{ label: "Providers", value: "9" }, { label: "Routing overhead", value: "11ms" }, { label: "Failover", value: "Automatic" }, { label: "Spend visibility", value: "Per request" }],
    stack: ["TypeScript", "Redis", "PostgreSQL", "OpenTelemetry", "Kubernetes"],
    flow: ["Request", "Policy engine", "Provider router", "Response cache", "Cost ledger"],
  },
  {
    id: "SYS-05", slug: "echo", name: "Echo", category: "Real-Time Inference",
    pitch: "Holds a real phone conversation and books the appointment during it, which means barge-in and recovery matter more than model quality.",
    complexity: { scale: 55, latency: 96, concurrency: 68, modelDepth: 80, integrationDepth: 77 },
    score: 9.0,
    stats: [{ label: "Turn latency", value: "620ms" }, { label: "Barge-in", value: "Supported" }, { label: "Concurrent calls", value: "900" }, { label: "Booking systems", value: "6" }],
    stack: ["Python", "WebRTC", "Streaming ASR/TTS", "Redis", "Model APIs"],
    flow: ["Audio in", "Streaming ASR", "Dialogue state", "Function calling", "Streaming TTS"],
  },
  {
    id: "SYS-06", slug: "cortex", name: "Cortex", category: "LLM Platforms",
    pitch: "Fine-tunes clinical models inside the customer's compliance boundary, so no training record ever leaves their tenancy.",
    complexity: { scale: 68, latency: 41, concurrency: 49, modelDepth: 95, integrationDepth: 84 },
    score: 8.7,
    stats: [{ label: "Data residency", value: "In-tenancy" }, { label: "PHI egress", value: "None" }, { label: "Eval gates", value: "Per release" }, { label: "Lineage", value: "Full" }],
    stack: ["Python", "PyTorch", "Ray", "Object storage", "Kubernetes"],
    flow: ["De-identify", "Curate", "Fine-tune", "Eval gate", "Registry", "Serve"],
  },
  {
    id: "SYS-07", slug: "argus", name: "Argus", category: "Computer Vision",
    pitch: "Catches sub-millimetre defects at line speed, where a missed frame is scrap and a false positive stops the line.",
    complexity: { scale: 64, latency: 92, concurrency: 71, modelDepth: 83, integrationDepth: 66 },
    score: 8.9,
    stats: [{ label: "Inspection rate", value: "120 parts/min" }, { label: "Frame budget", value: "24ms" }, { label: "Precision target", value: "0.3mm" }, { label: "Edge nodes", value: "14" }],
    stack: ["C++", "Python", "TensorRT", "Edge GPU", "MQTT"],
    flow: ["Camera trigger", "Edge preprocess", "Inference", "Defect gate", "PLC signal"],
  },
  {
    id: "SYS-08", slug: "waypoint", name: "Waypoint", category: "Multi-Agent Systems",
    pitch: "Resolves support tickets end to end rather than drafting replies, which means it needs write access and a way to be stopped.",
    complexity: { scale: 70, latency: 58, concurrency: 74, modelDepth: 86, integrationDepth: 90 },
    score: 8.6,
    stats: [{ label: "Actions/ticket", value: "Up to 12" }, { label: "Systems touched", value: "8" }, { label: "Human escalation", value: "Policy-driven" }, { label: "Reversible actions", value: "All" }],
    stack: ["TypeScript", "PostgreSQL", "Queues", "CRM APIs", "Model APIs"],
    flow: ["Ticket", "Intent + policy", "Action planner", "Guarded execution", "Resolution"],
  },
  {
    id: "SYS-09", slug: "vantage", name: "Vantage", category: "RAG & Search",
    pitch: "Serves vector-native search across 54M SKUs where the catalogue changes faster than a nightly index rebuild can keep up with.",
    complexity: { scale: 96, latency: 83, concurrency: 87, modelDepth: 62, integrationDepth: 59 },
    score: 8.8,
    stats: [{ label: "SKUs", value: "54M" }, { label: "p95 search", value: "72ms" }, { label: "Index freshness", value: "< 60s" }, { label: "Peak QPS", value: "9.4k" }],
    stack: ["Go", "Vector index", "Kafka", "Redis", "Kubernetes"],
    flow: ["Catalogue CDC", "Embed", "Live index", "Retrieve + rank", "Serve"],
  },
  {
    id: "SYS-10", slug: "forge", name: "Forge", category: "MLOps & Infra",
    pitch: "Packs 30+ models onto a shared GPU fleet and scales them independently, because idle accelerators are the whole cost problem.",
    complexity: { scale: 85, latency: 74, concurrency: 89, modelDepth: 57, integrationDepth: 76 },
    score: 8.5,
    stats: [{ label: "Models served", value: "34" }, { label: "Cold start", value: "8s" }, { label: "GPU utilisation", value: "Pooled" }, { label: "Scale-to-zero", value: "Per model" }],
    stack: ["Python", "Kubernetes", "KServe", "Prometheus", "Terraform"],
    flow: ["Registry", "Scheduler", "GPU pool", "Autoscaler", "Metrics"],
  },
  {
    id: "SYS-11", slug: "compass", name: "Compass", category: "LLM Platforms",
    pitch: "Turns plain questions into SQL over a 200-table warehouse, and shows the query before it runs so an analyst can veto it.",
    complexity: { scale: 66, latency: 61, concurrency: 52, modelDepth: 88, integrationDepth: 73 },
    score: 8.2,
    stats: [{ label: "Tables", value: "204" }, { label: "Query preview", value: "Always" }, { label: "Row-level security", value: "Enforced" }, { label: "Dialects", value: "3" }],
    stack: ["Python", "dbt", "Snowflake", "PostgreSQL", "Model APIs"],
    flow: ["Question", "Schema retrieval", "SQL synthesis", "Policy check", "Preview + run"],
  },
  {
    id: "SYS-12", slug: "pulse", name: "Pulse", category: "Real-Time Inference",
    pitch: "Serves personalisation features inside a 10ms budget, sitting in the critical path of every page render.",
    complexity: { scale: 79, latency: 98, concurrency: 91, modelDepth: 44, integrationDepth: 63 },
    score: 8.7,
    stats: [{ label: "p99 read", value: "7ms" }, { label: "Feature reads", value: "410k/s" }, { label: "Online/offline parity", value: "Enforced" }, { label: "Regions", value: "4" }],
    stack: ["Go", "Redis", "Kafka", "Feature store", "Kubernetes"],
    flow: ["Event stream", "Feature compute", "Online store", "Serving API", "Client"],
  },
  {
    id: "SYS-13", slug: "ledger-vision", name: "Ledger Vision", category: "Computer Vision",
    pitch: "Extracts structured data from documents in 22 languages, including the scanned and photographed ones nobody wants to handle.",
    complexity: { scale: 76, latency: 55, concurrency: 64, modelDepth: 81, integrationDepth: 70 },
    score: 8.1,
    stats: [{ label: "Languages", value: "22" }, { label: "Pages/day", value: "640k" }, { label: "Low-confidence routing", value: "To review" }, { label: "Field schema", value: "Versioned" }],
    stack: ["Python", "OCR engine", "PyTorch", "Queues", "Object storage"],
    flow: ["Upload", "Deskew + OCR", "Layout model", "Field extract", "Confidence gate", "Review"],
  },
  {
    id: "SYS-14", slug: "bastion", name: "Bastion", category: "MLOps & Infra",
    pitch: "Isolates 800+ B2B tenants on shared AI infrastructure and derives every invoice from a ledger the customer can replay.",
    complexity: { scale: 88, latency: 60, concurrency: 84, modelDepth: 48, integrationDepth: 93 },
    score: 8.6,
    stats: [{ label: "Tenants", value: "820" }, { label: "Isolation", value: "Per tenant" }, { label: "Usage ledger", value: "Append-only" }, { label: "Billing reconciliation", value: "Replayable" }],
    stack: ["TypeScript", "PostgreSQL", "Kafka", "Kubernetes", "Payments integration"],
    flow: ["Tenant request", "Quota + policy", "Inference", "Usage ledger", "Invoice"],
  },
  {
    id: "SYS-15", slug: "mirror", name: "Mirror", category: "Data Pipelines",
    pitch: "Generates synthetic health records that keep the statistical shape of the source without carrying a re-identifiable row.",
    complexity: { scale: 71, latency: 33, concurrency: 45, modelDepth: 87, integrationDepth: 68 },
    score: 7.7,
    stats: [{ label: "Re-identification tests", value: "Per batch" }, { label: "Utility check", value: "Automated" }, { label: "Source egress", value: "None" }, { label: "Audit trail", value: "Immutable" }],
    stack: ["Python", "PyTorch", "PostgreSQL", "Airflow", "Object storage"],
    flow: ["Source profile", "Generate", "Privacy attack test", "Utility eval", "Release"],
  },
  {
    id: "SYS-16", slug: "reviewer", name: "Reviewer", category: "Multi-Agent Systems",
    pitch: "Applies a 400-rule engineering playbook to every pull request and stays quiet when it has nothing worth saying.",
    complexity: { scale: 58, latency: 51, concurrency: 62, modelDepth: 79, integrationDepth: 74 },
    score: 7.4,
    stats: [{ label: "Playbook rules", value: "400+" }, { label: "Median review", value: "90s" }, { label: "Repos", value: "260" }, { label: "Comment precision", value: "Gated" }],
    stack: ["TypeScript", "Git APIs", "PostgreSQL", "Queues", "Model APIs"],
    flow: ["PR event", "Diff analysis", "Rule agents", "Consolidation", "Comment"],
  },
  {
    id: "SYS-17", slug: "watchtower", name: "Watchtower", category: "Computer Vision",
    pitch: "Moderates 12M live streams a day, where the cost of a slow decision is measured in how long harmful content stayed up.",
    complexity: { scale: 97, latency: 89, concurrency: 96, modelDepth: 72, integrationDepth: 65 },
    score: 9.5,
    stats: [{ label: "Streams/day", value: "12M" }, { label: "Detection lag", value: "1.8s" }, { label: "Sampling", value: "Adaptive" }, { label: "Appeal trail", value: "Retained" }],
    stack: ["Go", "Python", "Kafka", "GPU fleet", "Object storage"],
    flow: ["Stream ingest", "Adaptive sample", "Multi-model scan", "Escalation", "Enforcement", "Appeal"],
  },
  {
    id: "SYS-18", slug: "foresight", name: "Foresight", category: "Data Pipelines",
    pitch: "Predicts equipment failure 72 hours ahead from 50k sensors, where a false alarm costs a maintenance crew a day.",
    complexity: { scale: 86, latency: 47, concurrency: 69, modelDepth: 76, integrationDepth: 71 },
    score: 8.3,
    stats: [{ label: "Sensors", value: "50k+" }, { label: "Lead time", value: "72h" }, { label: "Ingest rate", value: "1.1M pts/min" }, { label: "Alert suppression", value: "Learned" }],
    stack: ["Python", "Kafka", "TimescaleDB", "Airflow", "Kubernetes"],
    flow: ["Sensor ingest", "Windowing", "Anomaly model", "Failure forecast", "Work order"],
  },
  {
    id: "SYS-19", slug: "atlas", name: "Atlas", category: "RAG & Search",
    pitch: "Answers multi-hop enterprise questions by traversing a knowledge graph first, because pure vector search cannot follow a chain of reasoning.",
    complexity: { scale: 80, latency: 57, concurrency: 55, modelDepth: 93, integrationDepth: 82 },
    score: 9.1,
    stats: [{ label: "Entities", value: "38M" }, { label: "Hop depth", value: "Up to 5" }, { label: "Answer provenance", value: "Path-traced" }, { label: "Graph refresh", value: "Streaming" }],
    stack: ["Python", "Neo4j", "pgvector", "Kafka", "Model APIs"],
    flow: ["Question", "Entity link", "Graph traverse", "Evidence gather", "Reasoned answer"],
  },
  {
    id: "SYS-20", slug: "babel", name: "Babel", category: "Real-Time Inference",
    pitch: "Translates across 108 languages in real time while holding a customer's own terminology fixed, which generic translation will not do.",
    complexity: { scale: 83, latency: 90, concurrency: 85, modelDepth: 74, integrationDepth: 60 },
    score: 8.4,
    stats: [{ label: "Languages", value: "108" }, { label: "Streaming latency", value: "310ms" }, { label: "Glossary control", value: "Per tenant" }, { label: "Peak RPS", value: "5.6k" }],
    stack: ["Rust", "Python", "gRPC", "Redis", "GPU fleet"],
    flow: ["Text/audio in", "Glossary inject", "Translate", "Terminology check", "Stream out"],
  },
];

export const complexityDimensions = [
  { key: "scale", label: "Scale" },
  { key: "latency", label: "Latency" },
  { key: "concurrency", label: "Concurrency" },
  { key: "modelDepth", label: "Model depth" },
  { key: "integrationDepth", label: "Integration" },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
