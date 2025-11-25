"use client";

import { useState, useEffect } from "react";
import { useIntro } from "./IntroProvider";

export default function Loader({ children }: { children: React.ReactNode }) {
  const { setIntroFinished } = useIntro();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    
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
          
          <div className="w-full h-full bg-neutral-900 animate-curtain" />
        </div>
      )}
      
     
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}