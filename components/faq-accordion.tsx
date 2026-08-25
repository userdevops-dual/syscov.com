"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

/**
 * The FAQ accordion, extracted from the home page's FAQ section so other pages
 * reuse the same behaviour (one item open at a time, grid-rows height
 * animation, plus→x indicator) instead of reimplementing it.
 */
export function FaqAccordion({ faqs, idPrefix = "faq" }: { faqs: readonly FaqItem[]; idPrefix?: string }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.question ?? null);

  return (
    <div className="faq-list" data-reveal>
      {faqs.map((faq) => {
        const isOpen = open === faq.question;
        const id = `${idPrefix}-${faq.question.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`;
        return (
          <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
            <h3>
              <button
                aria-controls={id}
                aria-expanded={isOpen}
                className="faq-item__question"
                onClick={() => setOpen(isOpen ? null : faq.question)}
                type="button"
              >
                <span>{faq.question}</span>
                <span aria-hidden="true" className="faq-item__indicator" />
              </button>
            </h3>
            <div className="faq-item__answer" id={id} role="region">
              <div>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
