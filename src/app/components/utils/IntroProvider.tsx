"use client";

import { createContext, useContext, useState } from "react";


type IntroContextType = {
  introFinished: boolean;
  setIntroFinished: (value: boolean) => void;
};


const IntroContext = createContext<IntroContextType>({
  introFinished: false,
  setIntroFinished: () => {},
});

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <IntroContext.Provider value={{ introFinished, setIntroFinished }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => useContext(IntroContext);