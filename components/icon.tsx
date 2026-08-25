/**
 * One stroke-icon set for the whole page.
 *
 * Every icon is drawn on the same 16×16 grid with the same stroke weight, so
 * they read as a family. This replaces the unicode glyphs (⌘ ▯ ✦ ◌ …) that
 * rendered inconsistently across platforms and looked like leftover placeholder
 * characters rather than designed marks.
 */
const paths = {
  browser: ["M2.5 3.5h11v9h-11z", "M2.5 6.5h11", "M4.6 5h.01", "M6.4 5h.01"],
  mobile: ["M5 2.5h6a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z", "M7 11.5h2"],
  code: ["M6 4 2.5 8 6 12", "M10 4l3.5 4-3.5 4"],
  exchange: ["M2.5 6h11", "M11 3.5 13.5 6 11 8.5", "M13.5 10h-11", "M5 7.5 2.5 10 5 12.5"],
  ai: [
    "M8 2.2 9.3 6 13 7.3 9.3 8.6 8 12.4 6.7 8.6 3 7.3 6.7 6z",
    "M12.6 11.2l.45 1.25 1.25.45-1.25.45-.45 1.25-.45-1.25-1.25-.45 1.25-.45z",
  ],
  cloud: ["M5 12.5a3.2 3.2 0 0 1 .4-6.4 4.2 4.2 0 0 1 7.9 1.4 2.6 2.6 0 0 1-.6 5z"],
  shield: ["M8 2.2l5 1.9v3.7c0 3.1-2.1 5.4-5 6.1-2.9-.7-5-3-5-6.1V4.1z", "M6 8l1.5 1.5L10.5 6.5"],
  layers: ["M8 2.2 14 5.5 8 8.8 2 5.5z", "M2 8.5 8 11.8l6-3.3", "M2 11.2 8 14.5l6-3.3"],
  database: [
    "M3 4.2c0-1 2.2-1.9 5-1.9s5 .9 5 1.9-2.2 1.9-5 1.9-5-.9-5-1.9z",
    "M3 4.2v7.6c0 1 2.2 1.9 5 1.9s5-.9 5-1.9V4.2",
    "M3 8c0 1 2.2 1.9 5 1.9s5-.9 5-1.9",
  ],
  server: ["M2.5 3h11v4h-11z", "M2.5 9h11v4h-11z", "M4.6 5h.01", "M4.6 11h.01"],
  cart: ["M2 2.5h1.8l1.6 7.4h6.3l1.3-5.2H4.2", "M6.5 13a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8z", "M11.3 13a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8z"],
  grid: ["M2.5 2.5h4.6v4.6H2.5z", "M8.9 2.5h4.6v4.6H8.9z", "M2.5 8.9h4.6v4.6H2.5z", "M8.9 8.9h4.6v4.6H8.9z"],
  gauge: ["M2.5 12a5.5 5.5 0 1 1 11 0", "M8 12 11 6.6"],
  link: ["M6.6 9.4a2.6 2.6 0 0 0 3.7 0l2-2a2.6 2.6 0 0 0-3.7-3.7l-.9.9", "M9.4 6.6a2.6 2.6 0 0 0-3.7 0l-2 2a2.6 2.6 0 0 0 3.7 3.7l.9-.9"],
  spark: ["M8 2v3", "M8 11v3", "M2 8h3", "M11 8h3", "M4 4l2 2", "M10 10l2 2", "M12 4l-2 2", "M6 10l-2 2"],
  users: ["M6 7.6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z", "M1.8 13.2a4.4 4.4 0 0 1 8.4 0", "M10.6 3.3a2.3 2.3 0 0 1 0 4.4", "M11.4 9.4a4.4 4.4 0 0 1 2.8 3.8"],
  pen: ["M11.2 2.6 13.4 4.8 5.6 12.6 2.5 13.5l.9-3.1z", "M9.9 3.9l2.2 2.2"],
  check: ["M13.2 4.4 6.3 11.3 2.8 7.8"],
  cross: ["M4.4 4.4l7.2 7.2", "M11.6 4.4l-7.2 7.2"],
  lock: ["M4 7.2h8v6.3H4z", "M5.8 7.2V5.4a2.2 2.2 0 0 1 4.4 0v1.8"],
  key: ["M9.8 6.2a2.8 2.8 0 1 1-3.6 3.6L2.5 13.5H1v-1.5l3.7-3.7", "M10.7 5.3h.01"],
  list: ["M5.5 4.5h8", "M5.5 8h8", "M5.5 11.5h8", "M2.6 4.5h.01", "M2.6 8h.01", "M2.6 11.5h.01"],
  eye: ["M1.5 8S3.9 3.8 8 3.8 14.5 8 14.5 8 12.1 12.2 8 12.2 1.5 8 1.5 8z", "M8 9.9a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8z"],
  bug: ["M5 5.5a3 3 0 0 1 6 0v3.9a3 3 0 0 1-6 0z", "M2.3 7h2.7", "M11 7h2.7", "M2.6 11h2.6", "M10.8 11h2.6", "M6.2 3.4 5.2 2.2", "M9.8 3.4l1-1.2"],
  target: ["M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z", "M8 11.2A3.2 3.2 0 1 0 8 4.8a3.2 3.2 0 0 0 0 6.4z", "M8 8h.01"],
  handoff: ["M2.5 8h9", "M9 5.5 11.5 8 9 10.5", "M13.5 3v10"],
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className ? `icon ${className}` : "icon"}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths[name].map((d) => (
        <path
          d={d}
          key={d}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
      ))}
    </svg>
  );
}
