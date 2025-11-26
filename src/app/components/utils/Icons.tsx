import "./icons.css";

export interface CustomIconsProps {
  onClick?: () => void;
  isOpen?: boolean;
}

// 1. Nav Icon (Hamburger)
export function NavIcon({ isOpen = false, onClick }: CustomIconsProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"} // accessibility fix
      className={`nav-slide-down nav-icon relative grid grid-cols-3 gap-2 p-1 md:p-1.5 rounded-sm cursor-pointer transition-all duration-700 ease-in-out z-10 
        ${isOpen ? "bg-blue-700 hover:bg-zinc-200 hover:scale-110" : "bg-zinc-200 hover:invert hover:scale-110"}`}
    >
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`border-2 md:border-3 border-current transition-all duration-700 ease-in-out ${isOpen ? "open" : ""}`}
        />
      ))}
    </button>
  );
}

// 2. Next Arrow
export function NextChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next slide"
      className="chevron-next grid grid-cols-2 gap-1 p-1 transition-transform hover:scale-110 cursor-pointer"
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

// 3. Prev Arrow
export function PrevChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous slide"
      className="chevron-prev grid grid-cols-2 gap-1 p-1 transition-transform hover:scale-110 cursor-pointer"
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

// 4. Accordion Chevron (Purely decorative usually, but good to label if interactive)
export function UpDownChevron({ isOpen = false }: CustomIconsProps) {
  return (
    <div 
        className="chevron-up-down pt-1.5 grid grid-cols-3 gap-1"
        aria-hidden="true" // Decorative element inside a larger button
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

// 5. Back Button (General)
export function BackChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Go back"
      className="chevron-back grid grid-cols-3 gap-1 p-0.5 rounded-sm cursor-pointer bg-zinc-100 text-neutral-900"
    >
      {[...Array(9)].map((_, i) => (
        <div key={i} className="border-2" />
      ))}
    </button>
  );
}

// 6. Footer Scroll-to-Top (Back)
export function FooterBackChevron({ onClick }: CustomIconsProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll to top"
      className="chevron-footer-back absolute top-5 left-5 grid grid-cols-3 gap-2 p-1.5 rounded-sm cursor-pointer transition-all duration-700 ease-in-out hover:scale-110 hover:bg-blue-700"
    >
      {[...Array(9)].map((_, i) => (
        <div key={i} className="border-2 md:border-4" />
      ))}
    </button>
  );
}