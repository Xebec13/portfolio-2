"use client"; 

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  
  // Helper: Custom easing function (Sine In) defining the acceleration curve of the scroll
  function easeInSine(x: number): number {
    return 1 - Math.cos((x * Math.PI) / 2);
  }

  // Configuration settings for the Lenis scroll behavior
  const lenisOptions = {
    duration: 1.5,          // Speed/duration of the scroll inertia
    ease: easeInSine,       // Apply the custom math function defined above
    smoothWheel: true,      // Enable smoothing for mouse wheel events
    wheelMultiplier: 1,     // Speed factor for mouse wheel
    touchMultiplier: 1.8,   // Speed factor for touch/mobile interactions
    infinite: false,
    anchors: true,          // Enable native-like anchor link navigation
  };

  return (
    // Global Scroll Provider: Wraps the application content to apply smooth scrolling logic to the root
    <ReactLenis autoRaf={true} root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}