"use client";
import { useState } from "react";

const FADE_DURATION = 700;
const GRID_COLUMNS = 10;
const GRID_ROWS = 10;
const TOTAL_CELLS = GRID_COLUMNS * GRID_ROWS; // 100 kratek

export default function HeroGridBg() {
  const [activeCells, setActiveCells] = useState<Record<number, boolean>>({});

  const handleHover = (index: number) => {
    // Dodajemy komórkę do aktywnych
    setActiveCells((prev) => ({ ...prev, [index]: true }));

    // Usuwamy po czasie (efekt zanikania)
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
      // 'grid-cols-10' tworzy 10 kolumn. Mając 100 elementów, utworzą one automatycznie 10 rzędów.
      className="hidden md:grid absolute inset-0 z-10 w-full h-full grid-cols-10 overflow-hidden pointer-events-auto"
    >
      {Array.from({ length: TOTAL_CELLS }).map((_, i) => {
        const isActive = activeCells[i];

        return (
          <div
            key={i}
            onMouseEnter={() => handleHover(i)}
            className={`
              w-full aspect-square border-transparent transition-all duration-700 ease-out
              /* Optymalizacja dla GPU */
              transform-gpu will-change-[backdrop-filter]
              ${isActive ? "backdrop-invert" : "backdrop-invert-0"}
            `}
          />
        );
      })}
    </div>
  );
}