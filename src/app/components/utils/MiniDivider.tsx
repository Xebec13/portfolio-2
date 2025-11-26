"use client";
import { useEffect, useRef, useState } from "react";

interface MiniDividerProps {
  type?: "main" | "off" | "head";
}

export default function MiniDivider({ type = "off" }: MiniDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  // State to track if the animation should play (triggers once visible)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = dividerRef.current;
    if (!element) return;

    // Intersection Observer: Monitors when the element enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Performance: Disconnect immediately so the animation runs only once
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Configuration: Maps prop types to specific CSS border styles
  const styleClass = {
    off: "border-b-2 border-current ",
    main: "border-b-3 border-current opacity-100",
    head: "border-b-4 border-current opacity-100",
  }[type];

  return (
    <div
      ref={dividerRef}
      // Animation Logic:
      // Uses 'origin-left' to make the line grow from left to right.
      // Toggles 'scale-x' from 0 to 100 based on the 'isVisible' state.
      className={`
        w-full transition-transform duration-1000 ease-in-out origin-left
        ${styleClass}
        ${isVisible ? "scale-x-100" : "scale-x-0"}
      `}
    />
  );
}