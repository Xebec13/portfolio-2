"use client";
import { useEffect, useRef, useState } from "react";

interface MiniDividerProps {
  type?: "main" | "off" | "head";
}

export default function MiniDivider({ type = "off" }: MiniDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = dividerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Odpala, gdy 10% elementu wjedzie na ekran
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const styleClass = {

    off: "border-b border-current opacity-40",


    main: "border-b-2 border-current opacity-100",


    head: "border-b-4 border-current opacity-100",
  }[type];

  return (
    <div
      ref={dividerRef}

      className={`
        w-full transition-transform duration-1000 ease-in-out origin-left
        ${styleClass}
        ${isVisible ? "scale-x-100" : "scale-x-0"}
      `}
    />
  );
}