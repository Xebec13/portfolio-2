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
    <div className={`font-medium text-base text-justify ${globalClass} flex flex-col break-normal leading-relaxed`}>

      {/* --- Section 1: Intro with Profile Image --- */}
      <div className="mb-3 space-x-5 relative">

        {/* Decorative Quote Icon (Top-Left) */}
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
            className="object-cover scale-110"
          />
        </div>

        {/* First Paragraph Text */}
        <p className="relative top-1/2 -translate-y-1/2 indent-10 leading-7.5 tracking-widest text-neutral-900">
          {firstText}
        </p>

        {/* Clearfix to ensure container height respects floated elements */}
        <div className="clear-both" />
      </div>

      {/* --- Section 2: Remaining Biography Text --- */}
      <div className="relative space-y-4 mt-5">
        {restText.map((txt, i) => (
          <p key={i} className="indent-10 leading-7.5 tracking-widest relative z-10 text-neutral-900">
            {txt}
          </p>
        ))}

        {/* Decorative Quote Icon (Bottom-Right) */}
        <div className="absolute bottom-0 md:bottom-5 right-0 size-15 md:size-20 opacity-80 pointer-events-none select-none">
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