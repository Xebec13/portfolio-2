"use client";

import { createContext, useContext, useState, ReactNode } from "react";
// Imports types and the dictionary from the same folder
import { dictionary, Language } from "./translations"; 

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  // Adds 't' to the context type, allowing direct access to translation keys (e.g., t.hero.bio)
  t: typeof dictionary.en; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language state
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pl" : "en"));
  };

  // Magic: Selects the correct part of the dictionary based on current language
  const t = dictionary[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};