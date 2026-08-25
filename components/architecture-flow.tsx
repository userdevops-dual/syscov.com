/**
 * Renders a system's real pipeline from an array of stage names, so every card
 * gets a diagram whose shape follows its own architecture rather than a
 * template repeated twenty times.
 */
export function ArchitectureFlow({ stages, label }: { stages: readonly string[]; label: string }) {
  return (
    <div aria-label={`${label} pipeline: ${stages.join(", then ")}`} className="arch-flow" role="img">
      {stages.map((stage, index) => (
        <span className="arch-flow__stage" key={stage}>
          {index > 0 && (
            <span aria-hidden="true" className="arch-flow__arrow">
              <svg fill="none" viewBox="0 0 16 16">
                <path d="M2 8h11M9.5 4.5 13 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </span>
          )}
          <span className="arch-flow__box">{stage}</span>
        </span>
      ))}
    </div>
  );
}
