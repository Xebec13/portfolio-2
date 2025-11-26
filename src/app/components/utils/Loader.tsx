"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { useIntro } from "./IntroProvider"; // Upewnij się co do ścieżki

export default function Loader({ children }: { children: React.ReactNode }) {
  const { setIntroFinished } = useIntro();
  const [showLoader, setShowLoader] = useState(true);

  // Używamy useLayoutEffect, aby zadziałało zanim przeglądarka "pokaże" klatkę.
  // Dzięki temu unikamy mignięcia na dole strony.
  useLayoutEffect(() => {
    // 1. Wyłączamy zapamiętywanie scrolla przez przeglądarkę
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // 2. Natychmiastowy skok na górę
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Timer Loadera (tak jak miałeś wcześniej)
    const timer = setTimeout(() => {
      setShowLoader(false);   
      setIntroFinished(true); 
    }, 1200);

    return () => clearTimeout(timer);
  }, [setIntroFinished]);

  return (
    <div className="relative">
      {showLoader && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none">
          {/* Kurtyna */}
          <div className="w-full h-full bg-neutral-900 animate-curtain" />
        </div>
      )}
      
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}