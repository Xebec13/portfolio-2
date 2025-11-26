interface ContentWrapperProps {
  isExpanded: boolean;       // Controls the open/closed state
  children: React.ReactNode; // The content to be revealed
}

export default function ProjectContentWrapper({ isExpanded, children }: ContentWrapperProps) {
  return (
    // Outer Container: The "Accordion" Animation Logic
    // Uses the CSS Grid trick (0fr -> 1fr) to animate dynamic height smoothly.
    <div
      className={`
        grid overflow-hidden transition-[grid-template-rows] duration-700 ease-in-out
        ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
      `}
    >
      
      {/* 
         Grid Child Wrapper 
         CRITICAL: 'min-h-0' is required for the grid-row transition to function.
         It allows the container to shrink below its content size to 0.
      */}
      <div className="min-h-0">
        
        {/* Actual Content Padding & Layout */}
        <div className="flex flex-col gap-5 px-3 py-2 lg:px-6 lg:py-4">
          {children}
        </div>
      </div>
    </div>
  );
}