import { Section, SectionIntro } from "./section";

/**
 * Languages and frameworks, split so a reader can tell what Syscov writes in
 * from what it runs on. Kept identical to the stack tags used on the service
 * and case-study pages so the site never contradicts itself.
 *
 * Each entry carries a short monogram rather than the vendor's brand mark.
 * Drawing ~35 third-party logos from memory would produce inaccurate marks —
 * worse-looking than none, and a trademark problem. To use the real ones, drop
 * the official SVGs in /public/media/tech/<slug>.svg and swap `mark` for an
 * <img> here; the layout does not change.
 */
type Tech = { name: string; mark: string };

const groups: { name: string; items: Tech[] }[] = [
  {
    name: "Languages",
    items: [
      { name: "TypeScript", mark: "TS" }, { name: "JavaScript", mark: "JS" },
      { name: "Python", mark: "Py" }, { name: "SQL", mark: "SQL" },
      { name: "Go", mark: "Go" }, { name: "Swift", mark: "Sw" }, { name: "Kotlin", mark: "Kt" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React", mark: "Re" }, { name: "Next.js", mark: "N" },
      { name: "React Native", mark: "RN" }, { name: "Tailwind CSS", mark: "TW" },
      { name: "Design systems", mark: "DS" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", mark: "No" }, { name: "REST APIs", mark: "RE" },
      { name: "GraphQL", mark: "GQ" }, { name: "Event queues", mark: "EQ" },
      { name: "Service architecture", mark: "SA" },
    ],
  },
  {
    name: "Data",
    items: [
      { name: "PostgreSQL", mark: "PG" }, { name: "MySQL", mark: "My" },
      { name: "MongoDB", mark: "Mo" }, { name: "Redis", mark: "Rd" },
      { name: "Vector stores", mark: "VS" }, { name: "Warehouses", mark: "WH" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "AWS", mark: "AW" }, { name: "Google Cloud", mark: "GC" },
      { name: "Azure", mark: "Az" }, { name: "Docker", mark: "Dk" },
      { name: "Kubernetes", mark: "K8" }, { name: "CI/CD", mark: "CI" },
      { name: "Terraform", mark: "TF" },
    ],
  },
  {
    name: "AI",
    items: [
      { name: "Model APIs", mark: "MA" }, { name: "Retrieval pipelines", mark: "RP" },
      { name: "Agent workflows", mark: "AG" }, { name: "Evaluation harnesses", mark: "EV" },
    ],
  },
];

export function Technologies() {
  return (
    <Section id="technologies" tone="mist">
      <SectionIntro>
        <p className="eyebrow">Technologies</p>
        <h2>The languages and frameworks the work is actually built in.</h2>
      </SectionIntro>

      <dl className="tech-list" data-reveal-stagger>
        {groups.map((group) => (
          <div className="tech-row" data-reveal key={group.name}>
            <dt>{group.name}</dt>
            <dd>
              {group.items.map((item) => (
                <span className="tech-chip" key={item.name}>
                  <span aria-hidden="true" className="tech-chip__mark">
                    {item.mark}
                  </span>
                  {item.name}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
