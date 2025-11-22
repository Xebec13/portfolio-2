"use client";
import { useEffect, useRef, useState } from "react";

interface MiniDividerProps {
  type?: "main" | "off" | "head";
}

export default function MiniDivider({ type = "off" }: MiniDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animation run 1 time
        }
      },
      { threshold: 0.1 }
    );

    if (dividerRef.current) observer.observe(dividerRef.current);

    return () => observer.disconnect();
  }, []);

  // dodatkowe wysokości
  const heightClass = {
    off: "border-[0.9px]",
    main: "border-[1.75px]",
    head: "border-3",
    
  }[type];

  return (
    <div
      ref={dividerRef}
      className={`${heightClass} border-current origin-left transition-transform duration-1200 ease-in-out
        ${isVisible ? "scale-x-100" : "scale-x-0"}
      `}
    />
  );
}