"use client";
import { useState } from "react";

const FADE_DURATION = 700;
// We generate enough cells to cover standard screens (10x15 usually covers 16:9 vertical flow)
// You can increase this number if you see gaps on very large vertical screens
const TOTAL_CELLS = 100; 

export default function HeroGridBg() {
  const [activeCells, setActiveCells] = useState<Record<number, boolean>>({});

  const handleHover = (index: number) => {
    // Add cell to active state
    setActiveCells((prev) => ({ ...prev, [index]: true }));

    // Remove cell from active state after duration
    setTimeout(() => {
      setActiveCells((prev) => {
        const newState = { ...prev };
        delete newState[index];
        return newState;
      });
    }, FADE_DURATION);
  };

  return (
    <div
      aria-hidden="true"
      // 'hidden md:grid' -> hides the grid on mobile, shows on desktop
      className="hidden md:grid absolute inset-0 z-10 w-full h-full grid-cols-10 overflow-hidden pointer-events-auto"
    >
      {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
        const isActive = activeCells[i];

        return (
          <div
            key={i}
            onMouseEnter={() => handleHover(i)}
            // 'aspect-square' forces perfect squares
            className={`
              w-full aspect-square border-transparent transition-all duration-700 ease-out
              ${isActive ? "backdrop-invert" : "backdrop-invert-0"}
            `}
          />
        );
      })}
    </div>
  );
}