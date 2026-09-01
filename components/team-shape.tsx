/**
 * Team topology for an engagement model.
 *
 * The four models differ in exactly one way — who holds which part of the
 * build — so the card shows that rather than a decorative graphic. Each cell is
 * a slot of work: filled means Syscov, outlined means the client's own team,
 * dashed means work whose original owners are gone.
 *
 * Decorative in the accessibility sense (the caption beside it carries the
 * meaning in text), so the diagram itself is aria-hidden.
 */
export type Slot = "us" | "you" | "gone";

export function TeamShape({ slots, caption }: { slots: Slot[]; caption: string }) {
  return (
    <div className="team-shape">
      <div aria-hidden="true" className="team-shape__row">
        {slots.map((slot, index) => (
          <span className={`team-shape__slot team-shape__slot--${slot}`} key={`${slot}-${index}`} />
        ))}
      </div>
      <p className="team-shape__caption">{caption}</p>
    </div>
  );
}
