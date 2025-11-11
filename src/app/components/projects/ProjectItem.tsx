"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { iconsMap, TechIcon } from "./ProjectIcon";
import { projectInfo } from "./projectInfo";

interface ProjectItemProps {
  project: typeof projectInfo[number];
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { name, date, icons, review, images, href, gitHref } = project;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <>
      {/* Header row */}
      <button
        onClick={toggleExpand}
        className="w-full flex justify-between items-center p-3 rounded-md transition-all duration-700"
      >
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span>{date}</span>
        </div>
        <IoChevronDown
          className={`transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="mt-4 space-y-4">
          <p>{review}</p>

          {/* Tech icons */}
          <div className="flex gap-3 flex-wrap items-center">
            {icons.map((iconName) => {
              const IconComponent = iconsMap[iconName as TechIcon];
              return IconComponent ? (
                <span key={iconName} className="text-xl">
                  {IconComponent}
                </span>
              ) : null;
            })}
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-3 gap-3 mt-2">
            {images.map((src, idx) => (
              <div key={idx} className="relative w-full h-48 md:h-60">
                <Image
                  src={src}
                  alt={`${name} screenshot ${idx + 1}`}
                  fill
                  className="object-cover rounded-md shadow-lg shadow-black/40"
                />
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-2">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 "
              >
                Live Demo
              </a>
            )}
            {gitHref && (
              <a
                href={gitHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
      <div className="h-0.5 w-full bg-black"></div>
    </>
  );
}