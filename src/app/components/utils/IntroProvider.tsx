"use client";

import { createContext, useContext, useState } from "react";

// ==========================================
// Type Definitions
// ==========================================

// Defines the shape of the Global State context used for animation synchronization
type IntroContextType = {
  introFinished: boolean; // Flag indicating if the startup animation is done
  setIntroFinished: (value: boolean) => void; // State updater function
};

// ==========================================
// Context Initialization
// ==========================================

// Creates the context with default fallback values to prevent runtime errors if used outside a Provider
const IntroContext = createContext<IntroContextType>({
  introFinished: false,
  setIntroFinished: () => {},
});

// ==========================================
// Provider Component
// ==========================================

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  // State: Tracks whether the initial intro animation sequence has completed
  const [introFinished, setIntroFinished] = useState(false);

  return (
    // Expose state and updater to the entire component tree
    <IntroContext.Provider value={{ introFinished, setIntroFinished }}>
      {children}
    </IntroContext.Provider>
  );
};

// ==========================================
// Custom Hook
// ==========================================

// Helper hook to consume the IntroContext easily in any component
export const useIntro = () => useContext(IntroContext);