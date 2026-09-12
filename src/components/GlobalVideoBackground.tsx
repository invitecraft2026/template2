import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import scenicBackground from "@/assets/Animated_scenic_landscape.mp4";

export function GlobalVideoBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 overflow-hidden"
      style={{
        /*
         * Intentionally oversize the background.
         * This prevents white edges/flashes when the
         * mobile browser toolbar expands/collapses.
         */
        top: "-8vh",
        right: "-3vw",
        bottom: "-8vh",
        left: "-3vw",

        transform: "translate3d(0,0,0)",
        WebkitTransform: "translate3d(0,0,0)",

        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",

        willChange: "transform",

        backgroundColor: "#4d1f29",
      }}
    >
    <video
  src={scenicBackground}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  disablePictureInPicture
  controls={false}
  className="absolute inset-0 h-full w-full object-cover object-center"
/>

<div className="absolute inset-0 bg-black/30" />

<div className="absolute inset-0 bg-[#3f101d]/15" />
    </div>,
    document.body
  );
}