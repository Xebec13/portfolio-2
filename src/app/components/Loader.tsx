"use client";

import { useState, useEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // symulacja ładowania strony
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
        {/* Kurtyna */}
        <div className="w-full h-full bg-neutral-900 animate-curtain" />
        
      </div>
    );
  }

  return <>{children}</>;
}