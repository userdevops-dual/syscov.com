import type { MetadataRoute } from "next";
import { siteContent } from "../lib/site-content";

/**
 * Web app manifest.
 *
 * `theme_color` is what a browser uses to tint its own chrome. On a normal
 * desktop tab Chrome ignores it entirely — the toolbar there is browser UI and
 * a page cannot colour it. It does apply when the site is installed as an app
 * (standalone window), and on Android Chrome / iOS Safari in a normal tab.
 *
 * Icons are generated from the logo mark and are what make the site
 * installable in the first place; without them the desktop case never fires.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteContent.companyName} — Technology Engineering`,
    short_name: siteContent.companyName,
    description: siteContent.primaryObjective,
    start_url: "/",
    display: "standalone",
    background_color: "#211a3d",
    theme_color: "#211a3d",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
