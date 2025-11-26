"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { useIntro } from "./IntroProvider";

export default function Loader({ children }: { children: React.ReactNode }) {
  const { setIntroFinished } = useIntro();
  const [showLoader, setShowLoader] = useState(true);

  // Scroll Management Logic
  // useLayoutEffect runs synchronously before the browser paints the DOM.
  // This is crucial to prevent the "scroll jump" or flickering effect when the page reloads.
  useLayoutEffect(() => {
    // 1. Disable the browser's default scroll restoration mechanism
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // 2. Force the viewport to the top immediately
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Lifecycle: Hides the loader after a set delay (1200ms) and triggers the main intro animations
    const timer = setTimeout(() => {
      setShowLoader(false);   
      setIntroFinished(true); 
    }, 1200);

    return () => clearTimeout(timer);
  }, [setIntroFinished]);

  return (
    <div className="relative">
      {/* --- Overlay Section --- */}
      {/* Rendered only during the initial loading phase */}
      {showLoader && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none">
          {/* Curtain Element: Performs the exit animation to reveal content */}
          <div className="w-full h-full bg-neutral-900 animate-curtain" />
        </div>
      )}
      
      {/* --- Main Application Content --- */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}