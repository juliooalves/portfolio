"use client";

import { ArrowRight, Code2, ShieldCheck, Terminal } from "lucide-react";

const expertise = [
  "Application Security",
  "Full-Stack Development",
  "DevSecOps",
  "TypeScript",
  "React",
  "Next.js",
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Security-first delivery",
    description: "AppSec habits built into planning, implementation, and review.",
  },
  {
    icon: Code2,
    title: "Full-stack execution",
    description: "Interfaces, APIs, and deployment paths shaped around real use cases.",
  },
  {
    icon: Terminal,
    title: "Practical tooling",
    description: "Automation and diagnostics that keep projects maintainable.",
  },
];

export default function AboutCard() {
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
            JA
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800 dark:text-gray-100">
              Júlio Alves
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-gray-400">
              Full-Stack Developer & Cybersecurity Analyst
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-gray-400 sm:text-base">
              I build web applications with a security mindset from the start,
              balancing practical delivery with maintainable architecture and
              clear user workflows.
            </p>
          </div>
        </div>

        <a
          href="#projects"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-200 dark:border-white/10 dark:bg-black/20 dark:text-gray-200 dark:hover:border-white/20 dark:hover:bg-white/10"
        >
          Projects
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, description }) => (
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
          {expertise.map((item) => (
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
