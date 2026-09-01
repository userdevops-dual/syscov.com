"use client";

import { useEffect, useRef, useState } from "react";
import type { BackdropVideo } from "../lib/media";

/**
 * Decorative video layer for a section.
 *
 * Below-the-fold sections mount with the poster only and attach the source
 * once the section is near the viewport, so a page carries the weight of the
 * clips a visitor actually reaches rather than all of them at once. The hero
 * passes `eager` because it is visible immediately.
 *
 * Autoplay needs muted + playsInline; no JS drives playback itself.
 */
export function VideoBackdrop({ video, eager = false }: { video: BackdropVideo; eager?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(eager);

  useEffect(() => {
    if (active || !ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div
      aria-hidden="true"
      className="video-backdrop"
      ref={ref}
      style={{ backgroundImage: `url(${video.poster})` }}
    >
      {active && (
        <video
          autoPlay
          className="video-backdrop__el"
          disablePictureInPicture
          loop
          muted
          playsInline
          poster={video.poster}
          preload="auto"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
