/**
 * Card artwork: soft flowing gradient forms that bleed off the bottom of a
 * service tile.
 *
 * No photography has been supplied and stock imagery would misrepresent the
 * work, so these are drawn — layered translucent curves through a blur filter,
 * which reads as liquid/glass rather than as clip-art. Every motif draws from
 * the logo's own violet/indigo ramp so the set stays on brand.
 *
 * Purely decorative; always aria-hidden.
 */
type ArtName =
  | "waves" | "ripple" | "dome" | "swirl" | "shield" | "migrate"
  | "peaks" | "orbit" | "mesh" | "bloom" | "spiral" | "prism";

const ramps: Record<ArtName, [string, string, string]> = {
  waves: ["#b9a2ee", "#7d63d4", "#4a3a94"],
  ripple: ["#a8c2f2", "#8064d8", "#553f9f"],
  dome: ["#c6a6ef", "#9670e0", "#573a9c"],
  swirl: ["#b3aaf4", "#7568d6", "#443583"],
  shield: ["#b6a6ec", "#7462cf", "#3f3184"],
  migrate: ["#cdb2f2", "#8d70dd", "#4f3d9b"],
  peaks: ["#bfa9f0", "#7f66d9", "#463699"],
  orbit: ["#a9b8f3", "#7169d2", "#3f3690"],
  mesh: ["#c4b0f1", "#8a6fd9", "#4b3a97"],
  bloom: ["#d2b4f4", "#9873e2", "#5a3fa4"],
  spiral: ["#aec4f4", "#7a68d6", "#453a92"],
  prism: ["#c9b4f3", "#8672db", "#4a3b9d"],
};

export function ServiceArt({ name, id }: { name: ArtName; id: string }) {
  const [light, mid, deep] = ramps[name];
  const g = (suffix: string) => `${id}-${suffix}`;

  return (
    <svg aria-hidden="true" className="service-art" preserveAspectRatio="xMidYMax slice" viewBox="0 0 300 180">
      <defs>
        <linearGradient id={g("a")} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={light} stopOpacity="1" />
          <stop offset="1" stopColor={mid} stopOpacity="1" />
        </linearGradient>
        <linearGradient id={g("b")} x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor={mid} stopOpacity="1" />
          <stop offset="1" stopColor={deep} stopOpacity=".95" />
        </linearGradient>
        <linearGradient id={g("c")} x1="0.2" x2="0.9" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".8" />
          <stop offset="1" stopColor={light} stopOpacity=".95" />
        </linearGradient>
        <filter id={g("blur")} x="-25%" y="-25%" height="150%" width="150%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id={g("soft")} x="-25%" y="-25%" height="150%" width="150%">
          <feGaussianBlur stdDeviation="0.9" />
        </filter>
      </defs>

      {name === "waves" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M-20 168C40 96 92 150 150 104s96-64 176-26v122H-20z" fill={`url(#${g("b")})`} />
          <path d="M-20 180C34 124 96 168 152 128s110-54 172-18v72H-20z" fill={`url(#${g("a")})`} opacity=".92" />
          <path d="M-20 182C48 150 92 184 156 156s108-30 168-6v34H-20z" fill={`url(#${g("c")})`} opacity=".85" />
        </g>
      )}

      {name === "ripple" && (
        <g filter={`url(#${g("soft")})`}>
          <ellipse cx="150" cy="196" fill={`url(#${g("b")})`} rx="190" ry="118" />
          <ellipse cx="150" cy="206" fill={`url(#${g("a")})`} opacity=".9" rx="146" ry="92" />
          <ellipse cx="150" cy="216" fill={`url(#${g("c")})`} opacity=".85" rx="98" ry="62" />
          <ellipse cx="150" cy="226" fill="#ffffff" opacity=".5" rx="52" ry="32" />
        </g>
      )}

      {name === "dome" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M-10 180c0-62 44-104 96-104s92 42 92 104z" fill={`url(#${g("a")})`} />
          <path d="M118 180c0-74 52-124 114-124 34 0 62 12 86 34v90z" fill={`url(#${g("b")})`} opacity=".92" />
          <path d="M56 180c0-40 30-68 66-68s66 28 66 68z" fill={`url(#${g("c")})`} opacity=".8" />
        </g>
      )}

      {name === "swirl" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M-20 180C10 118 84 132 130 96s60-84 190-70v154z" fill={`url(#${g("b")})`} />
          <path d="M-20 180C22 140 88 158 138 124s74-60 182-46v102z" fill={`url(#${g("a")})`} opacity=".9" />
          <path d="M20 180c26-34 74-24 116-48s72-46 184-34v82z" fill={`url(#${g("c")})`} opacity=".8" />
        </g>
      )}

      {name === "shield" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M150 24l120 44v58c0 34-48 54-120 54S30 160 30 126V68z" fill={`url(#${g("b")})`} />
          <path d="M150 58l84 30v40c0 24-34 38-84 38s-84-14-84-38V88z" fill={`url(#${g("a")})`} opacity=".9" />
          <path d="M150 92l46 16v22c0 13-19 21-46 21s-46-8-46-21v-22z" fill={`url(#${g("c")})`} opacity=".85" />
        </g>
      )}

      {name === "migrate" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M-20 180c40-70 96-40 150-76s84-70 190-52v128z" fill={`url(#${g("b")})`} />
          <ellipse cx="86" cy="182" fill={`url(#${g("a")})`} opacity=".92" rx="118" ry="72" />
          <ellipse cx="232" cy="196" fill={`url(#${g("c")})`} opacity=".85" rx="104" ry="66" />
        </g>
      )}

      {name === "peaks" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M-20 180 70 74l58 62 62-88 66 74 64-46v104z" fill={`url(#${g("b")})`} />
          <path d="M-20 180 54 112l52 46 60-58 58 56 96-42v66z" fill={`url(#${g("a")})`} opacity=".92" />
          <path d="M-20 180 44 146l58 24 60-30 66 32 92-24v32z" fill={`url(#${g("c")})`} opacity=".85" />
        </g>
      )}

      {name === "orbit" && (
        <g filter={`url(#${g("soft")})`}>
          <ellipse cx="150" cy="188" fill={`url(#${g("b")})`} rx="176" ry="96" transform="rotate(-9 150 188)" />
          <ellipse cx="150" cy="200" fill={`url(#${g("a")})`} opacity=".9" rx="128" ry="76" transform="rotate(7 150 200)" />
          <ellipse cx="150" cy="212" fill={`url(#${g("c")})`} opacity=".85" rx="78" ry="50" />
        </g>
      )}

      {name === "mesh" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M-20 180C46 128 96 168 152 126s112-46 168-14v68z" fill={`url(#${g("b")})`} />
          <path d="M-20 158C58 186 92 128 156 158s110 26 164-16v38H-20z" fill={`url(#${g("a")})`} opacity=".85" />
          <path d="M-20 180c72-18 96 16 156-4s110 4 164-16v20z" fill={`url(#${g("c")})`} opacity=".8" />
        </g>
      )}

      {name === "bloom" && (
        <g filter={`url(#${g("soft")})`}>
          <ellipse cx="150" cy="214" fill={`url(#${g("b")})`} rx="70" ry="128" transform="rotate(-34 150 214)" />
          <ellipse cx="150" cy="214" fill={`url(#${g("b")})`} rx="70" ry="128" transform="rotate(34 150 214)" />
          <ellipse cx="150" cy="212" fill={`url(#${g("a")})`} opacity=".9" rx="58" ry="112" />
          <ellipse cx="150" cy="222" fill={`url(#${g("c")})`} opacity=".85" rx="88" ry="56" />
        </g>
      )}

      {name === "spiral" && (
        <g fill="none" filter={`url(#${g("soft")})`} strokeLinecap="round">
          <path d="M-10 178c26-70 96-96 160-72s84 96 40 118" stroke={`url(#${g("b")})`} strokeWidth="34" />
          <path d="M22 182c20-48 74-68 120-50s58 66 26 84" stroke={`url(#${g("a")})`} strokeWidth="26" />
          <path d="M62 186c14-28 48-42 78-30s34 40 14 52" stroke={`url(#${g("c")})`} strokeWidth="18" />
        </g>
      )}

      {name === "prism" && (
        <g filter={`url(#${g("soft")})`}>
          <path d="M-20 180 96 52l104 128z" fill={`url(#${g("b")})`} />
          <path d="M78 180 194 62l112 118z" fill={`url(#${g("a")})`} opacity=".9" />
          <path d="M30 180 130 108l96 72z" fill={`url(#${g("c")})`} opacity=".82" />
        </g>
      )}
    </svg>
  );
}

/** Maps a service slug to its motif. */
export const serviceArt: Record<string, ArtName> = {
  "web-platforms": "waves",
  "full-stack-engineering": "swirl",
  "ai-automation": "ripple",
  "cloud-infrastructure": "dome",
  security: "shield",
  modernization: "migrate",
};
