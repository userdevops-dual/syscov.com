import type { Metadata, Viewport } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CardSpotlight } from "../components/card-spotlight";
import { ScrollReveal } from "../components/scroll-reveal";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SitePreloader } from "../components/site-preloader";
import { siteContent } from "../lib/site-content";

/** Display face — geometric, technical proportions. Headings only. */
const geist = Geist({ subsets: ["latin"], variable: "--font-display", display: "swap" });
/** Body face — quiet and legible, stays out of the way. */
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
/** Utility face — eyebrows, tags, stat numbers, field labels. Never body copy. */
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: `${siteContent.companyName} — Technology Engineering`,
  description:
    "Syscov is a technology engineering partner for complex digital projects — web platforms, custom software, AI, cloud, and security, from idea through production.",
};

export const viewport: Viewport = {
  /**
   * Tints the browser UI around the page — the address bar on Android Chrome
   * and the status bar on iOS Safari. #211a3d is --graphite-rgb (33 26 61),
   * the logo's dark; keep the two in step if the token ever changes.
   */
  themeColor: "#211a3d",
  colorScheme: "light dark",
};

/**
 * Runs before first paint. It marks the document as JS-capable — scroll-reveal
 * only hides content when something is there to reveal it again — and flags a
 * session that has already seen the intro, so a repeat view never flashes the
 * overlay. The preloader component reads the same flag.
 */
const introFlagScript =
  `document.documentElement.dataset.js="1";` +
  `try{if(sessionStorage.getItem("syscov_intro_played"))document.documentElement.dataset.intro="played"}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the script below stamps data-intro on <html>
    // before React hydrates, which is the point — it must beat first paint.
    <html
      className={`${geist.variable} ${inter.variable} ${mono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introFlagScript }} />
      </head>
      <body>
        <SitePreloader />
        <ScrollReveal />
        <CardSpotlight />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
