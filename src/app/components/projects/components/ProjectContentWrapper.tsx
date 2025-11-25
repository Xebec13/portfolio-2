interface ContentWrapperProps {
  isExpanded: boolean;
  children: React.ReactNode;
}

export default function ProjectContentWrapper({ isExpanded, children }: ContentWrapperProps) {
  return (
    <div
      className={`
        grid overflow-hidden transition-[grid-template-rows] duration-700 ease-in-out
        ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
      `}
    >
      
      <div className="min-h-0">
        <div className="flex flex-col gap-5 px-3 py-2 lg:px-6 lg:py-4">
          {children}
        </div>
      </div>
    </div>
  );
}