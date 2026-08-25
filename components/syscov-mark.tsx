type SyscovMarkProps = {
  className?: string;
  /** Accessible name. Pass `null` for decorative instances (footer, preloader). */
  title?: string | null;
  /** Unique per instance so the gradient definitions do not collide in the DOM. */
  gradientId?: string;
};

export function SyscovMark({ className, title = "Syscov", gradientId = "syscov-mark-gradient" }: SyscovMarkProps) {
  const labelling = title ? { role: "img" as const, "aria-label": title } : { "aria-hidden": true as const };

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 900 900"
      xmlns="http://www.w3.org/2000/svg"
      {...labelling}
    >
      <defs>
        <linearGradient id={gradientId} x1="120" x2="765" y1="85" y2="790" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B67C4" />
          <stop offset="1" stopColor="#453B8C" />
        </linearGradient>
      </defs>
      <path className="syscov-mark__top" d="m454 20 84 84-84 84-84-84 84-84Z" fill={`url(#${gradientId})`} />
      <path
        className="syscov-mark__left"
        d="m276 199 84 83-173 172 94 94 86-85 84 84-170 170L20 454l256-255Z"
        fill={`url(#${gradientId})`}
      />
      <path
        className="syscov-mark__right"
        d="m632 197 261 261-255 257-84-85 172-172-94-93-86 86-84-84 170-170Z"
        fill={`url(#${gradientId})`}
      />
      <path className="syscov-mark__bottom" d="m458 726 84 84-84 84-84-84 84-84Z" fill={`url(#${gradientId})`} />
    </svg>
  );
}

/**
 * A single bracket piece lifted straight out of the mark — same path data, just
 * cropped to its own bounds so it can be placed on its own. Used to frame the
 * hero's architecture card diagonally, the way the two brackets frame the
 * centre of the logo itself.
 */
const brackets = {
  left: {
    d: "m276 199 84 83-173 172 94 94 86-85 84 84-170 170L20 454l256-255Z",
    viewBox: "20 199 431 518",
    // Violet end of the mark's diagonal, matching where this piece sits in it.
    stops: ["#8674cf", "#6a56b6"],
  },
  right: {
    d: "m632 197 261 261-255 257-84-85 172-172-94-93-86 86-84-84 170-170Z",
    viewBox: "462 197 431 518",
    // Deeper indigo end, so the pair still reads as one continuous gradient.
    stops: ["#5b4da4", "#3d3480"],
  },
} as const;

export function SyscovBracket({
  side,
  className,
  gradientId,
}: {
  side: keyof typeof brackets;
  className?: string;
  gradientId: string;
}) {
  const bracket = brackets[side];
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox={bracket.viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor={bracket.stops[0]} />
          <stop offset="1" stopColor={bracket.stops[1]} />
        </linearGradient>
      </defs>
      <path d={bracket.d} fill={`url(#${gradientId})`} />
    </svg>
  );
}
