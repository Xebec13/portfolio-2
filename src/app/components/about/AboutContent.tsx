interface AboutContentProps {
  content: string[];
  globalClass?: string;
}

export default function AboutContent({
  content,
  globalClass = "",
}: AboutContentProps) {
  return (
    <div className={`flex flex-col gap-5 font-medium text-md md:text-lg lg:text-xl ${globalClass}`}>
      {content.map((txt, i) => (
        <p key={i} className="indent-10">
          {txt}
        </p>
      ))}
    </div>
  );
}