"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  const options = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
