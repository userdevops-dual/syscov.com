/**
 * Background video registry.
 *
 * Source masters live in /public/media/videos (git-ignored — 456MB of 4K, one
 * file above GitHub's 100MB per-file limit). What ships is the compressed set
 * beside them: 720p for the hero, 540p elsewhere, 8 seconds, audio stripped,
 * 3.5-5.4MB each. Regenerate with avconvert if a master is replaced.
 *
 * Every clip is decorative and sits under a heavy scrim, so resolution beyond
 * 540p is not visible — the budget is better spent on load time.
 */
export type BackdropVideo = { src: string; poster: string; label: string };

const clip = (name: string, label: string): BackdropVideo => ({
  src: `/media/${name}.mp4`,
  poster: `/media/posters/${name}.jpg`,
  label,
});

export const backdrops = {
  hero: clip("hud-analysis", "An analytical interface reading a globe"),
  ai: clip("ai-network", "A network of connected nodes"),
  caseStudies: clip("data-matrix", "Streams of shifting data"),
  aiAudit: clip("circuit-chip", "A processor at the centre of a lit circuit board"),
  contact: clip("neon-tunnel", "A corridor of lit panels receding into the dark"),
} as const;

/** One clip per service route. */
export const serviceBackdrops: Record<string, BackdropVideo> = {
  "web-platforms": clip("hero-circuit", "Abstract circuit nodes drifting in low light"),
  "full-stack-engineering": clip("data-grid", "A deep lattice of connected points"),
  "ai-automation": clip("robot-hologram", "A figure reading a holographic display"),
  security: clip("panel-wall", "A wall of lit panels in shallow focus"),
  "cloud-infrastructure": clip("block-structure", "Interlocking structural blocks"),
  modernization: clip("prism-cubes", "Cubes reassembling in dark space"),
};

/**
 * Unused, and deliberately so:
 *   circuit-chip - the chip in frame is labelled "XFCE", a third-party product
 *                  name. Putting it on the site implies an association that
 *                  does not exist.
 *   light-cubes  - light background; it fights the dark scrim every other
 *                  placement relies on.
 * Both remain in /public/media if a use comes up.
 */
export const unusedBackdrops = ["light-cubes"] as const;
