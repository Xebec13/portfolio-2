"use client";

import { useState, useLayoutEffect, useEffect } from "react";
import { useIntro } from "../utils/IntroProvider";
import { useLanguage } from "./LanguageProvider"; 
import { Language } from "../data/uiData";
import IntroButtons from "./IntroButtons";

export default function Loader({ children }: { children: React.ReactNode }) {
  const { setIntroFinished } = useIntro();
  const { setLanguage } = useLanguage();

  const [showLoader, setShowLoader] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // 1. Initial Scroll Reset (Safety Measure)
  // useLayoutEffect runs before the browser paints to ensure we start at the top without flickering.
  useLayoutEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // 2. Scroll Locking Logic
  // This prevents the user from scrolling the content underneath while the loader is visible.
  useEffect(() => {
    if (showLoader) {
      // Disable scrolling on the body
      document.body.style.overflow = "hidden";
      // Double-check position to ensure user is at the top
      window.scrollTo(0, 0);
    } else {
      // Re-enable scrolling once the loader is gone
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  // Handler: Language Selection
  const handleLanguageSelect = (lang: Language) => {
    // Safety Check: Ensure viewport is at the top before starting the exit animation
    window.scrollTo(0, 0);
    
    setLanguage(lang);
    setIsClosing(true); // Triggers the 'animate-curtain' class
  };

  // Handler: Animation Completion
  const handleAnimationEnd = () => {
    if (isClosing) {
      setShowLoader(false);   // This triggers the useEffect cleanup -> re-enables scroll
      setIntroFinished(true); // Signals the rest of the app to start entry animations
    }
  };

  return (
    <div className="relative">
      {/* --- Overlay Section --- */}
      {showLoader && (
        // High Z-index (9999) ensures the loader covers the Navbar (usually z-50).
        // pointer-events-auto is crucial to allow clicking the buttons.
        <div className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-auto text-zinc-100">

          {/* Curtain Element */}
          {/* The 'animate-curtain' class moves this entire container up when isClosing is true */}
          <div
            className={`
                relative w-full h-full bg-neutral-900 flex flex-col items-center justify-center gap-10
                ${isClosing ? "animate-curtain" : ""} 
            `}
            onAnimationEnd={handleAnimationEnd}
          >
            {/* Buttons Container */}
            <div className={`transition-opacity duration-300 ${isClosing ? "opacity-100" : "opacity-100"}`}>
                <IntroButtons onSelect={handleLanguageSelect} />
            </div>

          </div>
        </div>
      )}

      {/* --- Main Application Content --- */}
      {/* Content is rendered but scroll-locked until the loader disappears */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}