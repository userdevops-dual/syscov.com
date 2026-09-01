import { heroVideo } from "../lib/site-content";

/**
 * Hero backdrop: real footage when it exists, a drawn animated field until it
 * does. See lib/site-content.ts → heroVideo for what to supply.
 *
 * The <video> needs no JavaScript: muted + playsInline + autoplay is what lets
 * it start on mobile Safari and Chrome. The poster is also painted onto the
 * wrapper as a background image, so it is what shows when the video element is
 * hidden under prefers-reduced-motion rather than leaving a blank panel.
 */
export function HeroBackdrop() {
  const hasVideo = Boolean(heroVideo.mp4);

  return (
    <div
      aria-hidden="true"
      className="hero-backdrop"
      style={heroVideo.poster ? { backgroundImage: `url(${heroVideo.poster})` } : undefined}
    >
      {hasVideo ? (
        <video
          autoPlay
          className="hero-backdrop__video"
          disablePictureInPicture
          loop
          muted
          playsInline
          poster={heroVideo.poster ?? undefined}
          preload="metadata"
        >
          {heroVideo.webm && <source src={heroVideo.webm} type="video/webm" />}
          <source src={heroVideo.mp4!} type="video/mp4" />
        </video>
      ) : (
        <svg className="hero-backdrop__art" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 700">
          <defs>
            <linearGradient id="hero-wire" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="rgb(69 59 140 / .95)" />
              <stop offset="1" stopColor="rgb(69 59 140 / .55)" />
            </linearGradient>
            <radialGradient id="hero-glow">
              <stop offset="0" stopColor="rgb(123 103 196 / .42)" />
              <stop offset="1" stopColor="rgb(123 103 196 / 0)" />
            </radialGradient>
          </defs>

          <circle cx="880" cy="210" fill="url(#hero-glow)" r="360" />
          <circle cx="240" cy="540" fill="url(#hero-glow)" r="300" />

          <g className="hero-backdrop__lanes" fill="none" stroke="url(#hero-wire)" strokeWidth="2">
            {[90, 190, 290, 390, 490, 590].map((y, index) => (
              <path
                d={`M-200 ${y} H320 l60 -46 H760 l60 46 H1400`}
                key={y}
                style={{ animationDelay: `${index * -2.6}s` }}
              />
            ))}
          </g>

          <g className="hero-backdrop__pulses" fill="rgb(33 26 61 / .95)">
            {[90, 290, 490].map((y, index) => (
              <circle cy={y} key={y} r="4.5" style={{ animationDelay: `${index * -3.4}s` }} />
            ))}
          </g>
        </svg>
      )}
      <span className="hero-backdrop__veil" />
    </div>
  );
}
