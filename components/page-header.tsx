import type { ReactNode } from "react";

/**
 * Shared opening block for routed pages (AI Audit, Case Studies).
 * Keeps their headers on the same type scale and rhythm as the home page's
 * section intros, so a sub-page never reads like a different site.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="page-header">
      <div className="container">
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h1 data-reveal>{title}</h1>
        {intro && (
          <p className="text-large page-header__intro" data-reveal>
            {intro}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
