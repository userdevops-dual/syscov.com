"use client";

import { useEffect } from "react";

/**
 * Recipe H — reveals every `[data-reveal]` element once, on first viewport entry.
 *
 * State is written to `data-revealed` rather than a class: React owns the
 * `className` of these elements and rewrites it wholesale whenever the owning
 * component re-renders, which would silently wipe an imperatively-added class
 * and leave the element invisible.
 *
 * This component lives in the root layout, which mounts once for the whole
 * session. A one-shot querySelectorAll would therefore only ever see the first
 * page's elements — anything rendered later (a client-side route change, or a
 * filtered grid re-rendering its cards) would never be observed and would sit
 * at opacity 0 forever. A MutationObserver picks those up as they arrive.
 *
 * Direct children of a `[data-reveal-stagger]` container are delayed 80ms each,
 * capped at six steps so a long grid never takes over a second to finish.
 */
const SELECTOR = "[data-reveal]:not([data-revealed])";

function reveal(element: HTMLElement) {
  element.dataset.revealed = "true";
}

function applyStagger(element: HTMLElement) {
  const group = element.parentElement;
  if (!group?.hasAttribute("data-reveal-stagger")) return;
  const index = Array.prototype.indexOf.call(group.children, element);
  element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 80}ms`);
}

export function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = reduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              reveal(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
        );

    const register = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach((element) => {
        if (reduced) {
          reveal(element);
          return;
        }
        applyStagger(element);
        observer?.observe(element);
      });
    };

    register(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(SELECTOR)) {
            if (reduced) {
              reveal(node);
            } else {
              applyStagger(node);
              observer?.observe(node);
            }
          }
          register(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
