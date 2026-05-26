"use client";

import SectionHeading from "@/components/section-heading";
import { profile } from "@/lib/profile";
import { stacks, type StackIcon } from "@/lib/stacks";
import { useInView } from "react-intersection-observer";

function StackCard({
  icon,
  index,
  inView,
}: {
  icon: StackIcon;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-slate-100/80 p-5 text-slate-900/90
        cursor-default select-none transition-all duration-500
        hover:border-slate-300 hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-300/10
        dark:border-white/10 dark:bg-white/5 dark:text-gray-300/90 dark:hover:border-white/20 dark:hover:bg-white/[0.07]
        dark:hover:shadow-black/20"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(20px) scale(0.92)",
        transitionDelay: inView ? `${index * 75}ms` : "0ms",
      }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600
          transition-colors duration-300 group-hover:text-slate-800
          dark:border-white/10 dark:bg-black/20 dark:text-gray-300 dark:group-hover:text-gray-100"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          aria-label={icon.title}
        >
          <path
            d={icon.path}
            fill={icon.stroke ? "none" : "currentColor"}
            stroke={icon.stroke ? "currentColor" : "none"}
            strokeLinecap={icon.stroke ? "round" : undefined}
            strokeLinejoin={icon.stroke ? "round" : undefined}
            strokeWidth={icon.stroke ? 2 : undefined}
          />
        </svg>
      </div>

      <span className="text-center text-xs font-semibold leading-tight text-slate-500 dark:text-gray-400">
        {icon.title}
      </span>
    </div>
  );
}

export default function Stacks() {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: "0px",
  });
  const { ref: gridRef, inView: gridInView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <div
      id="stacks"
      className="w-full min-h-screen flex flex-col justify-start items-start px-4 pt-10 pb-16 sm:py-16 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <SectionHeading
        ref={headingRef}
        title="Stacks"
        kicker={profile.stacksKicker}
        inView={headingInView}
      />

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full"
      >
        {stacks.map((icon, i) => (
          <StackCard
            key={icon.title}
            icon={icon}
            index={i}
            inView={gridInView}
          />
        ))}
      </div>
    </div>
  );
}
