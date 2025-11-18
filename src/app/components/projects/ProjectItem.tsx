import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { Project } from "./ProjectData";
import MiniDivider from "../divider/MiniDivider";

interface ProjectItemProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProjectItem({ project, isExpanded, onToggle }: ProjectItemProps) {
  const { name, date, icons, review, techReview, keyWords, keyAchi, images, href, gitHref } = project;


  return (
    <>
      {/* HEADER BUTTON */}
      <button
        onClick={onToggle}
        className="w-full min-h-xl p-2 bg-zinc-200/90 transition-transform transition-filter ease-in-out duration-700 cursor-pointer hover:invert"
      >
        <div className="grid grid-cols-3 place-items-center text-left gap-5 group">
          {/* Project Name */}
          <h3 className={`justify-self-start font-medium text-md md:text-xl group-hover:pl-3 transition-all duration-500 ease-in-out  ${isExpanded ? "hidden" : "block"}`}>{name}</h3>
          <h3 className={`justify-self-start font-bold text-xl md:text-3xl group-hover:pl-3 transition-all duration-500 ease-in-out  ${isExpanded ? "block" : "hidden"}`}>{name}</h3>
          {/* Project Tech Icons */}
          <div
            className={`justify-self-start grid grid-cols-2 sm:grid-cols-4 items-center place-items-center place-content-center text-xl gap-3 transition-opacity duration-500 ${isExpanded ? "opacity-0" : "opacity-100"
              }`}
          >
            {icons.map((icon, idx) => (
              <span key={idx} className="inline-flex">
                {icon}
              </span>
            ))}
          </div>

          {/* Date and Chevron */}
          <div className="justify-self-end flex items-center gap-2 font-semibold">
            <span className="text-xs md:text-sm transition-padding duration-300 ease-in-out group-hover:pr-3">{date}</span>
            <IoChevronDown
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                }`}
            />
          </div>
        </div>
      </button>




      {/* EXPANDED CONTENT WRAPPER */}
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out"
        style={{
          maxHeight: isExpanded ? "2000px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="flex flex-col px-4 py-6 lg:px-8 lg:py-12 gap-5">
          {/* Review Content */}
          <div className="place-items-stretch grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-5 lg:gap-x-15">
            {/* Key Words */}
            <ul className="key-font self-center shrink-0 max-w-md lg:max-w-full md:col-start-1 flex items-center text-blue-800 text-sm lg:text-md uppercase whitespace-nowrap overflow-hidden">
              <div className="marquee-track">
                {[...keyWords, ...keyWords, ...keyWords].map((word, idx) => (
                  <li key={idx} className="py-0.5 px-3 inline-flex items-center gap-5">
                    {word}
                    <div className=" bg-blue-800 size-2 rounded-full"></div>
                  </li>
                ))}
              </div>
            </ul>

            {/* Tech Icons */}
            <ul className="key-font self-start row-start-3 lg:row-start-1 lg:col-start-2 flex items-center gap-1 text-xs lg:text-md font-bold uppercase">
              {icons.map((icon, idx) => (
                <li key={idx} className="border bg-blue-500/40 text-blue-900 border-blue-800 py-0.5 px-3 rounded-full">
                  {icon.props["aria-label"]}
                </li>
              ))}
            </ul>
            {/* Project Review */}
            <div className="lg:col-start-1 indent-10 ">
              <p className="text-[clamp(1rem,1.25vw,2.25rem)] font-medium">{review}</p>
            </div>
            <div className="lg:col-start-2 lg:col-span-2 indent-10 ">
              <p className="text-[clamp(1rem,1.25vw,2.25rem)] font-medium">{techReview}</p>
            </div>
          </div>
























          {/* DRUGI div  */}
          <div className="place-items-stretch grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-5 lg:gap-x-15 ">
            <div className="flex flex-col">
              <h4 className="text-2xl uppercase font-bold text-blue-950">Key Achivments</h4>


              {/* Key Achivments */}
              <ul className="space-y-2 mt-4 font-medium">
                {keyAchi.map((achivment, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="relative inline-flex items-center justify-center min-w-5 w-5 h-5">
                      {/* Pulsing background circle */}
                      <div className="absolute inset-0 size-full bg-blue-300 rounded-full opacity-75 animate-ping-long" />
                      {/* Central circle */}
                      <div className="relative inset-0 size-1/2 bg-blue-800 rounded-full" />
                    </div>
                    {achivment}
                  </li>
                ))}
              </ul>


              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-6 font-medium whitespace-nowrap">
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-sm border border-transparent bg-zinc-50 text-blue-700 drop-shadow-md duration-700 ease-out transition-all hover:bg-blue-50 hover:border hover:border-blue-800"
                  >
                    Live Demo
                  </a>
                )}
                {gitHref && (
                  <a
                    href={gitHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-sm border border-transparent bg-zinc-50 text-blue-700 drop-shadow-md  duration-700 ease-out transition-all hover:bg-blue-50 hover:border hover:border-blue-800"
                  >
                    Source Code
                  </a>
                )}

              </div>
            </div>


            {/* Project Images */}
            <div className="col-span-2 self-center flex justify-between">
              {images.map((src, idx) => (
                <div key={idx} className="relative w-75 h-75">
                  <Image
                    src={src}
                    alt={`${name} screenshot ${idx + 1}`}
                    fill
                    className="object-cover rounded-md shadow-lg shadow-black/40"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>


      </div>
      {/* Divider under button */}
      <MiniDivider type="off" />

    </>
  );
}