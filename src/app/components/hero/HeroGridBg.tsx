"use client";
import { useState } from "react";

// Configuration constants for layout and animation timing
const FADE_DURATION = 700;
const GRID_COLUMNS = 10;
const GRID_ROWS = 10;
const TOTAL_CELLS = GRID_COLUMNS * GRID_ROWS; // Total number of grid cells to render

export default function HeroGridBg() {
  // State: Tracks currently active (hovered) cells to manage the visual effect
  const [activeCells, setActiveCells] = useState<Record<number, boolean>>({});

  const handleHover = (index: number) => {
    // Step 1: Activate the cell immediately upon hover
    setActiveCells((prev) => ({ ...prev, [index]: true }));

    // Step 2: Schedule deactivation to create a "fading trail" animation
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
      // Grid Container: Creates a 10-column layout filling the screen.
      // Hidden on mobile for performance; visible and interactive on desktop (md+).
      className="hidden md:grid absolute inset-0 z-10 w-full h-full md:grid-cols-5 lg:grid-cols-10 overflow-hidden pointer-events-auto"
    >
      {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
        const isActive = activeCells[i];

        return (
          <div
            key={i}
            onMouseEnter={() => handleHover(i)}
            className={`
              w-full aspect-square border-transparent transition-all duration-700 ease-out
              transform-gpu will-change-[backdrop-filter]
              ${isActive ? "backdrop-invert" : "backdrop-invert-0"}
            `}
          />
        );
      })}
    </div>
  );
}