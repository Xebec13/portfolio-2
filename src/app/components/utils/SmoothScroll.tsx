"use client"; 

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";



export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  function easeInSine(x: number): number {
  return 1 - Math.cos((x * Math.PI) / 2);
}
  // Opcje zdefiniowane po stronie klienta
  const lenisOptions = {
    duration: 1.5,
    ease:easeInSine,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.8,
    infinite: false,
    anchors: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}