"use client";

import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/profile";

export default function AboutCard() {
  const scrollToProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const projects = document.getElementById("projects");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="relative mx-auto max-w-4xl rounded-xl border border-slate-200 bg-slate-100/80 p-5 text-slate-900/90
        transition-all duration-500 hover:border-slate-300 hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-300/10
        dark:border-white/10 dark:bg-white/5 dark:text-gray-300/90 dark:hover:border-white/20 dark:hover:bg-white/[0.07]
        dark:hover:shadow-black/20 sm:p-6 lg:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xl font-bold text-slate-800 dark:border-white/10 dark:bg-black/30 dark:text-gray-100">
            {profile.initials}
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-gray-100">
              {profile.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-gray-400">
              {profile.title}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-gray-400 sm:text-base">
              {profile.aboutSummary}
            </p>
          </div>
        </div>

        <a
          href="#projects"
          onClick={scrollToProjects}
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-200 dark:border-white/10 dark:bg-black/20 dark:text-gray-200 dark:hover:border-white/20 dark:hover:bg-white/10"
        >
          Projects
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {profile.highlights.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-black/20"
          >
            <Icon className="mb-3 text-slate-500 dark:text-gray-400" size={20} />
            <h3 className="text-sm font-semibold text-slate-800 dark:text-gray-200">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-gray-200">
          Core expertise
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.expertise.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-black/20 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
