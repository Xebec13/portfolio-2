"use client"
import { useState, useRef, useEffect } from "react";
import "./icons.css";

// ==========================================
// Types & Interfaces
// ==========================================
export interface CustomIconsProps {
  onClick?: () => void;
  isOpen?: boolean; // Controls state-based transformations (e.g., Hamburger to X)
  className?: string; // Added flexibility for extra styling if needed
}

// 1. Navigation Toggle (Hamburger Menu)
export function NavIcon({ isOpen = false, onClick }: CustomIconsProps) {
  return (
    <button
      onClick={onClick}
      // Accessibility: Dynamically updates label based on state
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={`nav-slide-down nav-icon relative grid grid-cols-3 gap-1.5 p-1 md:p-1.5 rounded-sm cursor-pointer transition-all duration-700 ease-in-out z-10 
        ${isOpen ? "bg-blue-700 hover:bg-zinc-200 hover:scale-110" : "bg-zinc-200 hover:invert hover:scale-110"}`}
    >
      {/* Renders a 3x3 grid. CSS classes in 'icons.css' handle the rotation/hiding of specific cells */}
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`border-2 md:border-3 border-current transition-all duration-700 ease-in-out ${isOpen ? "open" : ""}`}
        />
      ))}
    </button>
  );
}

// 2. Carousel Control: Next Slide
export function NextChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next slide"
      className="chevron-next grid grid-cols-2 gap-1 p-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="border-[2.5px] md:border-3 border-zinc-400"
        />
      ))}
    </button>
  );
}

// 3. Carousel Control: Previous Slide
export function PrevChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous slide"
      className="chevron-prev grid grid-cols-2 gap-1 p-1 transition-transform duration-300 hover:scale-110 cursor-pointer"
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="border-[2.5px] md:border-3 border-zinc-400"
        />
      ))}
    </button>
  );
}

// 4. Accordion Toggle Indicator
// Visual element only (aria-hidden) as it sits inside the main clickable header
export function UpDownChevron({ isOpen = false }: CustomIconsProps) {
  return (
    <div
      className="chevron-up-down pt-1.5 grid grid-cols-3 gap-1"
      aria-hidden="true"
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`border-2 border-current ${isOpen ? "open" : ""}`}
        />
      ))}
    </div>
  );
}

// 5. General Back Button (Modal/Navigation)
export function BackChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Go back"
      className="cursor-pointer"
    >
      <div className="chevron-back grid grid-cols-3 gap-1 p-1 outline-0 cursor-pointer bg-transparent transition-all duration-500 ease-in-out hover:scale-105 hover:bg-zinc-300">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border-2 border-blue-900/80" />
        ))}
      </div>
    </button>
  );
}

// 6. Footer Specific Action (Scroll to Top / Close Contact)
export function FooterBackChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll to top"
      // Positioned absolutely within the footer/modal context
      className="chevron-footer-back absolute top-5 left-5 grid grid-cols-3 gap-1 p-1 cursor-pointer bg-transparent transition-all duration-500 ease-in-out hover:scale-105 hover:bg-blue-700/80"
    >
      {[...Array(9)].map((_, i) => (
        <div key={i} className="border-2" />
      ))}
    </button>
  );
}

// 7. Coding Icon (</>) - Composite of 3 grids
export function CodingIcon({ onClick }: CustomIconsProps) {
  return (
    <div
      onClick={onClick}
      className="coding-icon group flex items-center gap-3 cursor-pointer"
      aria-label="Code symbol"
    >
      {/* Left Bracket (<) - 2x3 Grid */}
      <div className="bracket-left grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border-blue-900/80 border-2" />
        ))}
      </div>

      {/* Slash (/) - 3x3 Grid */}
      <div className="slash grid grid-cols-1 gap-1">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-blue-900/80 border-2" />
        ))}
      </div>

      {/* Right Bracket (>) - 2x3 Grid */}
      <div className="bracket-right grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border-blue-900/80 border-2" />
        ))}
      </div>
    </div>
  );
}

// 8. Professional Icon (Lock / Briefcase structure)
export function ProfIcon({ onClick }: CustomIconsProps) {
  return (
    <div
      onClick={onClick}
      aria-label="Professional skills"
      className="prof-icon group relative flex items-center justify-center cursor-pointer size-8"
    >
      {/* 
        Grid 4 columns x 4 rows = 16 cells.
        Using gap-1 to ensure it fits well within the size-9 container.
      */}
      <div className="briefcase-grid relative size-full grid grid-cols-4 gap-0.5">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="border-2 border-blue-900/80 transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
}

// 9. Certificate Icon (Lock)
export function CertIcon({ onClick }: CustomIconsProps) {
  return (
    <div
      onClick={onClick}
      aria-label="Professional skills"
      className="cert-icon gruop flex flex-col items-center justify-center cursor-pointer"
    >

      <div className="lock-icon w-3 h-2 border-[2.5px] border-b-0 border-blue-900/80 rounded-t-full" />

      {/* THE BODY (Lock Body - 3x3 Grid) */}
      <div className="grid grid-cols-3 gap-1 p-0.5">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="border-2 border-blue-900/80"
          />
        ))}
      </div>
    </div>
  );

}
// ==========================================
// 10. Personal Icon (Interactive Face)
// ==========================================
export function PersonalIcon({ onClick }: CustomIconsProps) {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const faceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // 1. Ensure we have the face reference
      if (!faceRef.current) return;

      // 2. Find the parent button (with 'group' class)
      // This avoids changing parent code!
      const parentButton = faceRef.current.closest('.eye-ref');

      if (!parentButton) return;

      // 3. Check if mouse is hovering the button
      const btnRect = parentButton.getBoundingClientRect();
      const isHoveringButton =
        e.clientX >= btnRect.left &&
        e.clientX <= btnRect.right &&
        e.clientY >= btnRect.top &&
        e.clientY <= btnRect.bottom;

      // 4. If hovering button -> Move eyes
      if (isHoveringButton) {
        // --- Eye position logic (relative to face center, not button) ---
        const faceRect = faceRef.current.getBoundingClientRect();
        const faceCenterX = faceRect.left + faceRect.width / 2;
        const faceCenterY = faceRect.top + faceRect.height / 2;

        const deltaX = e.clientX - faceCenterX;
        const deltaY = e.clientY - faceCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        // Distance: Limit movement to 3px (radius inside the eye white)
        const distance = Math.min(3, Math.hypot(deltaX, deltaY) / 8);

        setPupilPos({
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        });
      } else {
        // 5. If mouse leaves button -> Reset eyes
        setPupilPos({ x: 0, y: 0 });
      }
    };

    // Attach listener to window
    window.addEventListener("mousemove", handleGlobalMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []); // Empty dependency array = runs once on mount

  return (
    <div
      ref={faceRef}
      onClick={onClick}
      // Removed onMouseMove/onMouseLeave here, handled by useEffect
      aria-label="Personal interests"
      className="personal-icon group relative flex items-center justify-center cursor-pointer size-9"
    >

      <div className="smile-icon right-0.5 relative size-full grid grid-cols-5 gap-2">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="border-2 border-blue-900/80"
          />
        ))}
      </div>


      {/* EYES */}
      <div className="absolute top-[25%] w-full flex justify-center gap-1.5 px-1">
        {/* Left */}
        <div className="relative size-2.5 bg-white border border-blue-900/80 rounded-full flex items-center justify-center overflow-hidden">
          <div
            className="w-1 h-1 bg-blue-900 rounded-full transition-transform duration-100 ease-out"
            style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
          />
        </div>
        {/* Right */}
        <div className="relative size-2.5 bg-white border border-blue-900/80 rounded-full flex items-center justify-center overflow-hidden">
          <div
            className="w-1 h-1 bg-blue-900 rounded-full transition-transform duration-100 ease-out"
            style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
          />
        </div>
        <div className="absolute -bottom-2.5 h-0.5 w-1/3 bg-blue-900/80 rounded-full"/>
      </div>
    </div>


  );
}