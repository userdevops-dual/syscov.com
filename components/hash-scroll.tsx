"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Delay slightly to let Turbopack / Next.js hydration & layout finish
    const timer1 = setTimeout(scrollToHash, 100);
    const timer2 = setTimeout(scrollToHash, 350);

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const [linkPath, hash] = href.split("#");
      if (!hash) return;

      const currentPath = window.location.pathname;
      const normalizedLinkPath = linkPath === "" ? currentPath : linkPath;

      // If clicking a hash link for the current page
      if (normalizedLinkPath === currentPath) {
        const el = document.getElementById(hash);
        if (el) {
          event.preventDefault();
          window.history.pushState(null, "", `#${hash}`);
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return null;
}
