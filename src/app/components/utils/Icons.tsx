import "./icons.css";

// ==========================================
// Types & Interfaces
// ==========================================
export interface CustomIconsProps {
  onClick?: () => void;
  isOpen?: boolean; // Controls state-based transformations (e.g., Hamburger to X)
}

// ==========================================
// Icon Components
// All icons utilize a CSS Grid layout of empty divs with borders 
// to create geometric, animated shapes (pixel-art style).
// ==========================================

// 1. Navigation Toggle (Hamburger Menu)
export function NavIcon({ isOpen = false, onClick }: CustomIconsProps) {
  return (
    <button
      onClick={onClick}
      // Accessibility: Dynamically updates label based on state
      aria-label={isOpen ? "Close menu" : "Open menu"} 
      className={`nav-slide-down nav-icon relative grid grid-cols-3 gap-2 p-1 md:p-1.5 rounded-sm cursor-pointer transition-all duration-700 ease-in-out z-10 
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

// 3. Carousel Control: Previous Slide
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
      className="chevron-back grid grid-cols-3 gap-1 p-0.5 rounded-sm cursor-pointer bg-zinc-100 text-neutral-900"
    >
      {[...Array(9)].map((_, i) => (
        <div key={i} className="border-2" />
      ))}
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
      className="chevron-footer-back absolute top-5 left-5 grid grid-cols-3 gap-2 p-1.5 rounded-sm cursor-pointer transition-all duration-700 ease-in-out hover:scale-110 hover:bg-blue-700"
    >
      {[...Array(9)].map((_, i) => (
        <div key={i} className="border-2 md:border-4" />
      ))}
    </button>
  );
}