import { BackChevron } from "../icons/Icons";
import { AboutItem, ContentItem } from "../data/aboutData"; // Upewnij się, że importujesz ContentItem
import { CodingIcon, ProfIcon, CertIcon, PersonalIcon } from "../icons/Icons";
interface AboutOverlayProps {
  isActive: boolean;
  item: AboutItem;
  onClose: () => void;
  index: number;
}

export default function AboutOverlay({ isActive, item, onClose, index }: AboutOverlayProps) {

  // Styles mapping for Badges (no changes here)
  const badgesStyle = [
    "bg-blue-600/40 text-blue-950 border-blue-950",
    "bg-blue-600/20 text-blue-800 border-blue-800",
    "bg-zinc-600/20 text-zinc-600 border-zinc-500",
    "bg-zinc-400/20 text-zinc-500 border-zinc-400",
  ];
  const badgeClass = badgesStyle[index] || "bg-zinc-300 text-neutral-900";

  // Animation Origin mapping (no changes here)
  const originAnim = [
    "origin-top-left",
    "origin-top-right",
    "origin-bottom-left",
    "origin-bottom-right",
  ];
  const originClass = originAnim[index] || "origin-center";
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <CodingIcon />;
      case 1: return <ProfIcon />;
      case 2: return <CertIcon />;
      case 3: return <PersonalIcon />;
      default: return null;
    }
  };


  return (
    <div
      data-lenis-prevent="true"
      className={`
        absolute inset-0 z-50 flex flex-col p-6 lg:p-8 bg-zinc-100 
        transform transition-all duration-300 ease-in-out shadow-2xl
        overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400 eye-ref
        ${originClass}
        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}
      `}
    >
      {/* --- Header Section --- */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="inline-flex items-center gap-2 w-full">
          <BackChevron onClick={onClose} />
          <div className="w-full flex flex-row justify-between items-center gap-2">
            <h4 className="text-lg md:text-xl font-bold uppercase tracking-wide text-blue-900/90">{item.name}</h4>
            {getIcon(index)}
          </div>
        </div>
      </div>

      {/* --- Main Content Scrollable Area --- */}
      <div className="flex flex-col gap-6">

        {/* Section 1: Badges */}
        <div>
          <p className="mb-3 text-blue-900/80 text-base md:text-lg font-bold uppercase">
            {item.headings[0]}
          </p>
          <div className="flex flex-wrap gap-1 uppercase">
            {item.badges?.map((badge, idx) => (
              <span
                key={idx}
                className={`py-1 px-3 text-xs md:text-sm font-semibold rounded-full border ${badgeClass}`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Section 2: Detailed List Content (4 DIFFERENT LAYOUTS) */}
        <div>
          {item.headings[1] && (
            <p className="mb-3 mt-2 text-blue-900/80 text-base md:text-lg font-bold uppercase">
              {item.headings[1]}
            </p>
          )}

          <div className="space-y-3 font-medium text-neutral-800">
            {item.content.map((line, idx) => {

              // =========================================================
              // 1. CODING LAYOUT (Index 0) - Complex Project Cards
              // =========================================================
              if (index === 0 && typeof line !== "string") {
                const project = line as ContentItem; // Type assertion for safety
                return (
                  <div key={idx} className="p-2">
                    <div className="flex items-baseline justify-between mb-2">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700/50 font-bold underline decoration-blue-700/80 hover:decoration-transparent text-sm md:text-base capitalize"
                      >
                        {project.name}
                      </a>
                    </div>
                    <p className="text-sm md:text-md text-zinc-700 mb-3 tracking-wide">{project.description}</p>
                    {/* Contributions Mapped List */}
                    {project.contributions && (
                      <ul className="list-disc list-inside space-y-1 mb-3">
                        {project.contributions.map((contribution, i) => (
                          <li
                            key={i}
                            className="text-xs md:text-sm text-zinc-700 tracking-wide"
                          >
                            {contribution}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              // =========================================================
              // 2. PROFESSIONAL LAYOUT (Index 1) - Special Arrays Layout
              // =========================================================
              if (index === 1 && Array.isArray(line)) {
                // Logic: idx 0 -> headings[2], idx 1 -> headings[3]
                const subHeading = item.headings[idx + 2];

                return (
                  <div key={idx} className="mb-4 space-y-1 leading-relaxed">
                    {/* Powiększony tekst nagłówka (zgodnie z prośbą) */}
                    <p className="text-blue-900/40 text-sm md:text-base uppercase font-semibold">
                      {subHeading}
                    </p>

                    {/* Zawartość jako jeden div z wrapem */}
                    <div className="whitespace-nowrap flex flex-wrap gap-4 tracking-widest">
                      {line.map((val, i) => (
                        <span key={i} className="inline-flex items-center gap-4 text-xs ">
                          {val}
                          <div className="size-1 rounded-full bg-blue-900" />
                        </span>
                      ))}

                    </div>
                  </div>
                );
              }

              // =========================================================
              // 3. LEARNING LAYOUT (Index 2) - Paired Arrays Logic
              // =========================================================
              if (index === 2) {
                // Renderujemy WSZYSTKO tylko przy pierwszym przebiegu (idx === 0)
                if (idx === 0 && Array.isArray(line)) {
                  const titles = line; // Pierwsza tablica (Tytuły)
                  // Bezpiecznie pobieramy drugą tablicę (Szczegóły)
                  // Zakładamy, że struktura danych w 'about.ts' jest zawsze poprawna (tablica tablic)
                  const details = (item.content[1] as string[]) || [];

                  return (
                    <div key={idx} className="flex flex-col gap-3">
                      {titles.map((title, i) => (
                        <div key={i} className="space-y-2">
                          {/* Górny wiersz: Tytuł (Bold) */}
                          <p className="text-sm md:text-base font-bold text-zinc-500 uppercase mb-1">
                            {title}
                          </p>
                          {/* Dolny wiersz: Szczegóły (Normal) */}
                          <p className="text-xs md:text-sm text-zinc-600 font-medium capitalize">
                            {details[i] || ""}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                // Przy drugim przebiegu (idx === 1) nie robimy nic, bo już to wyświetliliśmy wyżej
                if (idx === 1) return null;
              }

              // =========================================================
              // 4. PERSONAL LAYOUT (Index 3) - Paired Arrays Logic (NEW)
              // =========================================================
              if (index === 3) {
                // idx 0 -> Pobieramy tematy i opisy
                if (idx === 0 && Array.isArray(line)) {
                  const topics = line; // np. Traveling
                  const facts = (item.content[1] as string[]) || []; // np. Up until now...

                  return (
                    <div key={idx} className="flex flex-col">
                      {topics.map((topic, i) => (
                        <div key={i} className="p-1.5">
                          {/* Topic Title */}
                          <p className="text-base font-bold text-zinc-400 uppercase mb-1 tracking-wide">
                            {topic}
                          </p>
                          {/* Fact Description */}
                          <p className="text-sm md:text-base  text-zinc-600 first-letter:capitalize">
                            {facts[i] || ""}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                // idx 1 -> Pomijamy (już wyświetlone)
                if (idx === 1) return null;
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}