interface ContentWrapperProps {
  isExpanded: boolean;
  children: React.ReactNode;
}

export default function ProjectContentWrapper({ isExpanded, children }: ContentWrapperProps) {
  return (
    <div
      className="overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out"
      style={{
        maxHeight: isExpanded ? "2000px" : "0px",
        opacity: isExpanded ? 1 : 0.25,
      }}
    >
      <div className="flex flex-col gap-5 px-3 py-2 lg:px-6 lg:py-4">
        {children}
      </div>
      
    </div>
  );
}