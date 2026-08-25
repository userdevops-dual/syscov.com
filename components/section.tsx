import type { ReactNode } from "react";

/**
 * The single owner of section-level layout.
 *
 * No section component sets its own vertical padding, max-width container, or
 * background tone — those come from here, driven by the `--section-padding-y`
 * and `--container-width` tokens in globals.css. That makes consistent spacing
 * a structural property of the page rather than something sixteen files each
 * have to remember to copy correctly.
 *
 * `className` is for visual variants only (backgrounds, overflow, grid
 * behaviour). Anything that sets padding-block or width on a `.section` is a
 * bug — it will silently win the specificity fight against the base rule.
 */
type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Alternating page rhythm: paper (white) or mist (tinted). */
  tone?: "paper" | "mist";
  /** Thin divider band — used for the capability and client strips. */
  strip?: boolean;
  /** Opt out of the max-width container, for the one full-bleed section. */
  bleed?: boolean;
  /** Visual variant classes on the <section> element. Never spacing. */
  className?: string;
  /** Classes on the inner container — typically a grid definition. */
  innerClassName?: string;
  label?: string;
};

function cx(...values: (string | false | null | undefined)[]) {
  return values.filter(Boolean).join(" ");
}

export function Section({
  children,
  id,
  tone = "paper",
  strip = false,
  bleed = false,
  className,
  innerClassName,
  label,
}: SectionProps) {
  return (
    <section
      aria-label={label}
      className={cx("section", tone === "mist" && "section--mist", strip && "section--strip", className)}
      id={id}
    >
      {bleed ? children : <div className={cx("container", innerClassName)}>{children}</div>}
    </section>
  );
}

/**
 * The heading block every section opens with. Owns the gap between the intro
 * and the section body (`--section-intro-gap`) and the scroll-reveal hook, so
 * that rhythm is identical everywhere by construction.
 */
type SectionIntroProps = {
  children: ReactNode;
  /** Centred intros are used where the section body is symmetrical. */
  align?: "start" | "center";
  /** Heading left, supporting line right — used by the full-bleed section. */
  split?: boolean;
  className?: string;
};

export function SectionIntro({ children, align = "start", split = false, className }: SectionIntroProps) {
  return (
    <div
      className={cx(
        "section-intro",
        align === "center" && "section-intro--centered",
        split && "section-intro--split",
        className,
      )}
      data-reveal
    >
      {children}
    </div>
  );
}
