"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  repoUrl: string;
  projectUrl?: string;
  path?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  repoUrl,
  projectUrl,
  path,
}: ProjectCardProps) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl"
    >
      {/* Main container */}
      <div
        className="relative flex flex-col p-5 rounded-xl
          border border-slate-200 bg-slate-100/80 text-slate-900/90
          dark:border-white/10 dark:bg-white/5
          transition-all duration-500 group-hover:scale-[1.03]
          group-hover:border-slate-300 dark:group-hover:border-white/20
          group-hover:bg-slate-100 dark:group-hover:bg-white/[0.07]
          group-hover:shadow-lg group-hover:shadow-slate-300/10 dark:group-hover:shadow-black/20"
      >
        {/* Project snapshot */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[105%]"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-1 text-slate-800 dark:text-gray-200">{title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Bottom row: path + icon */}
        <div className="mt-auto flex items-center justify-between">
          {path ? (
            <span className="text-[11px] text-slate-400 dark:text-gray-500 font-mono">
              {path}
            </span>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-2">
            {projectUrl && (
              <ExternalLink
                size={14}
                className="text-slate-400 dark:text-gray-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(projectUrl, "_blank", "noopener,noreferrer");
                }}
              />
            )}
            <Github
              size={14}
              className="text-slate-400 dark:text-gray-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
