"use client";
import { useState } from "react";

const GRID_SIZE = 10; 
const FADE_DURATION = 700;

export default function HeroGridBg() {
  const [activeCells, setActiveCells] = useState<Record<number, boolean>>({});
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  const handleHover = (i: number) => {
    setHoveredCell(i); // komórka jest aktualnie hoverowana
    setActiveCells((prev) => ({ ...prev, [i]: true }));

    setTimeout(() => {
      setActiveCells((prev) => {
        if (!prev[i]) return prev;
        const updated = { ...prev };
        delete updated[i];
        return updated;
      });
    }, FADE_DURATION);
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <div
      className={`absolute top-0 right-0 w-full h-full z-10 grid grid-cols-5 md:grid-cols-10 overflow-hidden`}
      // style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
    >
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
        const isActive = !!activeCells[i] || i === hoveredCell;

        return (
          <div
            key={i}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={handleMouseLeave}
            className="aspect-square transition-all duration-700 ease-out"
            style={{ backdropFilter: isActive ? "invert(1)" : "invert(0)" }}
          />
        );
      })}
    </div>
  );
}