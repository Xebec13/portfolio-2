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
  const { name, date, icons, review, images, href, gitHref } = project;


  return (
    <>
      {/* HEADER BUTTON */}
      <button
        onClick={onToggle}
        className="w-full min-h-xl p-2 bg-zinc-100/90 transition-transform transition-filter ease-in-out duration-700 cursor-pointer hover:invert"
      >
        <div className="grid grid-cols-3 place-items-center text-left gap-5 group">
          {/* Project Name */}
          <h3 className="justify-self-start font-medium text-md md:text-xl transition-padding duration-300 ease-in-out group-hover:pl-3">{name}</h3>

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
        <div className="mt-4 space-y-4 p-4 overflow-hidden transition-transform duration-700 ease-in-out">
          {/* Project Review */}
          <p className="text-xl md:text-3xl max-w-2/3 font-semibold">{review}</p>

          {/* Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
            {images.map((src, idx) => (
              <div key={idx} className="relative w-full aspect-3/2 md:aspect-video">
                <Image
                  src={src}
                  alt={`${name} screenshot ${idx + 1}`}
                  fill
                  className="object-cover rounded-md shadow-lg shadow-black/40"
                />
              </div>
            ))}
          </div>

          {/* Tech Icons */}
          <div className="flex flex-wrap gap-3 text-lg">
            {icons.map((icon, idx) => (
              <span key={idx} className="flex items-center justify-center">
                {icon.key}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-2 font-semibold">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-900 text-zinc-200 rounded duration-700 ease-in-out transition-all hover:invert hover:scale-105"
              >
                Live Demo
              </a>
            )}
            {gitHref && (
              <a
                href={gitHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 bg-zinc-200 rounded duration-700 ease-in-out transition-all hover:invert hover:scale-105"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Divider under button */}
      <MiniDivider type="off" />

    </>
  );
}