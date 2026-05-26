"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = Omit<Project, "image"> & {
  image: Project["image"] | StaticImageData;
  index?: number;
  inView?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  repoUrl,
  projectUrl,
  path,
  highlights,
  status,
  index = 0,
  inView = true,
}: ProjectCardProps) {
  const href = repoUrl ?? projectUrl;
  const Container = href ? "a" : "article";

  return (
    <Container
      {...(href
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="group relative block overflow-hidden rounded-xl"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(24px) scale(0.96)",
        transition:
          "opacity 0.55s ease, transform 0.55s ease, border-color 0.5s ease, background-color 0.5s ease, box-shadow 0.5s ease",
        transitionDelay: inView ? `${index * 100}ms` : "0ms",
      }}
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
        {image && (
          <div className="relative mb-4 aspect-[16/9] w-full shrink-0 overflow-hidden rounded-lg border border-slate-200/80 dark:border-white/10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[105%]"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col">
          {/* Title */}
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-200">
              {title}
            </h3>
            {status && (
              <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                {status}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-4">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <ul className="mb-4 space-y-1.5 text-xs text-slate-500 dark:text-gray-400">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-gray-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

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
              {repoUrl && (
                <Github
                  size={14}
                  className="text-slate-400 dark:text-gray-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
