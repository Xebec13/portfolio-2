import { BackChevron } from "../utils/Icons";
import { AboutItem } from "./aboutData";

interface AboutOverlayProps {
  isActive: boolean;
  item: AboutItem;
  onClose: () => void;
  index: number;
}

export default function AboutOverlay({ isActive, item, onClose, index }: AboutOverlayProps) {
  // Color styles for each item (mapped by index in aboutData)
  const badgesStyle = [
    "bg-blue-500/40 text-blue-900",   // Coding
    "bg-blue-300/40 text-blue-700",   // Professional
    "bg-zinc-300/40 text-zinc-900",   // Certificates
    "bg-zinc-300/20 text-zinc-500",   // Private
  ];
  const badgeClass = badgesStyle[index] || "bg-zinc-300 text-neutral-900";

  // Origin animation for each item
  const originAnim = [
    "origin-top-left",     // Coding
    "origin-top-right",    // Professional
    "origin-bottom-left",  // Certificates
    "origin-bottom-right", // Private
  ];
  const originClass = originAnim[index] || "origin-top-left";

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center px-8 py-9 lg:px-12 lg:py-10 bg-zinc-100 transform transition-all duration-300 ease-in-out
      ${originClass}
      ${isActive ? "opacity-100 scale-100" : "scale-0 pointer-events-none"}`}
    >
      <div className="inline-flex items-center gap-1 mb-auto">
        {/* Back button */}
        <BackChevron onClick={onClose} />
        <p className="text-md md:text-xl font-semibold uppercase">{item.name}</p>
      </div>


      <div className="max-w-3/4 mb-2">
        {/* First heading */}
        <h3 className="mb-2 mt-3 text-blue-800 text-sm sm:text-md md:text-lg font-semibold">
          {item.headings[0]}
        </h3>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-1">
          {item.badges?.map((badge, idx) => (
            <span
              key={idx}
              className={`py-1 px-3 text-[10px] md:text-md font-semibold rounded-full border ${badgeClass}`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {/* Second heading */}
        <h3 className="text-blue-800 text-sm sm:text-md md:text-lg font-semibold">
          {item.headings[1]}
        </h3>

        {/* Content lines */}
        <div className="space-y-1 font-medium">


          {item.content.map((line, idx) => {
            if (typeof line === "string") {
              return (
                <p key={idx} className="text-xs sm:text-sm md:text-md">
                  {line}
                </p>
              );
            }
            // Open source project block
            return (
              <div key={idx}>
                <a
                  href={line.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 font-semibold underline text-xs md:text-base"
                >
                  {line.name}
                </a>

                <p className="text-sm md:text-base">{line.description}</p>

                {line.contributions?.map((contribution, idx) => (
                  <p key={idx} className="text-xs md:text-sm">
                    {contribution}
                  </p>
                ))}
                <div className="inline-flex gap-1">
                  {line.techStack?.map((tech, idx) => (
                    <p
                      key={idx}
                      className="bg-blue-500/40 text-blue-900 border py-1 px-3 text-[9px] md:text-md font-semibold rounded-full"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}