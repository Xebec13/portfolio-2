import Image from "next/image";

// Definition of component props
interface AboutContentProps {
  content: string[]; // Array of text paragraphs to be displayed
  globalClass?: string;
}

export default function AboutContent({
  content,
  globalClass = "",
}: AboutContentProps) {
  // Logic: Extract the first paragraph to apply specific layout styles (floating image),
  // while keeping the rest of the text in a separate block.
  const firstText = content[0];
  const restText = content.slice(1);

  return (
    // Main Text Container
    <div className={`font-medium text-base ${globalClass} flex flex-col break-normal leading-relaxed`}>

      {/* --- Section 1: Intro with Profile Image --- */}
      <div className="relative">

        {/* Decorative Quote Icon (Top-Left) */}
        {/* Tu zostawiamy absolute, bo ma nachodzić na tło/zdjęcie */}
        <div className="absolute -top-5 left-30 md:left-37 size-15 md:size-20 rotate-180 opacity-80 pointer-events-none select-none">
          <Image
            src="/quote-img.png"
            alt="Quote decoration"
            sizes="(max-width: 768px) 60px, 80px"
            fill
            className="object-contain"
          />
        </div>

        {/* Profile Image: Floated left to allow text wrapping around it */}
        <div className="float-left size-25 md:size-30 lg:size-35 rounded-full bg-zinc-100/40 relative overflow-hidden mr-4 mb-1">
          <Image
            src="/profile-img1.png"
            alt="David"
            fill
            sizes="(max-width: 768px) 100px, 140px"
            className="object-cover"
          />
        </div>

        {/* First Paragraph Text */}
        <p className="relative top-1/2 -translate-y-1/2 indent-10 leading-5 md:leading-7.5 text-sm md:text-base text-justify tracking-[7%] text-neutral-900">
          {firstText}
        </p>

        {/* Clearfix to ensure container height respects floated elements */}
        <div className="clear-both" />
      </div>

      {/* --- Section 2: Remaining Biography Text --- */}
      {/* ZMIANA: Dodano 'flex flex-col', aby elementy układały się jeden pod drugim */}
      <div className="relative space-y-4 mt-5 z-20 flex flex-col">
        {restText.map((txt, i) => (
          <p key={i} className="indent-10 leading-5 md:leading-7.5 text-sm md:text-base text-justify tracking-[7%] relative text-neutral-900">
            {txt}
          </p>
        ))}

        {/* Decorative Quote Icon (Bottom-Right) */}
        {/* ZMIANA: Usunięto 'absolute bottom-0 right-0'. 
            Dodano 'relative', 'self-end' (wyrównanie do prawej) i margines góry 'mt-2'. */}
        <div className="relative bottom-12 self-end size-15 md:size-20 opacity-80 pointer-events-none select-none mt-2">
          <Image
            src="/quote-img.png"
            alt="Quote decoration"
            fill
            sizes="(max-width: 768px) 60px, 80px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}