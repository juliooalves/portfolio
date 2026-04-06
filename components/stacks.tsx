"use client";

import { useInView } from "react-intersection-observer";
import {
  siJavascript,
  siTypescript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siLinux,
} from "simple-icons";

interface SimpleIcon {
  title: string;
  hex: string;
  path: string;
}

const stacks: SimpleIcon[] = [
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siLinux,
];

function StackCard({
  icon,
  index,
  inView,
}: {
  icon: SimpleIcon;
  index: number;
  inView: boolean;
}) {
  const brandColor = `#${icon.hex}`;

  return (
    <div
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl border cursor-default select-none"
      style={{
        transitionDelay: inView ? `${index * 75}ms` : "0ms",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.92)",
        transition:
          "opacity 0.45s ease, transform 0.45s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        borderColor: "rgba(150,150,150,0.15)",
        background: "rgba(150,150,150,0.04)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = `color-mix(in srgb, ${brandColor} 10%, transparent)`;
        el.style.borderColor = `color-mix(in srgb, ${brandColor} 45%, transparent)`;
        el.style.boxShadow = `0 4px 24px color-mix(in srgb, ${brandColor} 18%, transparent)`;
        el.style.transform = "translateY(-4px) scale(1.04)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(150,150,150,0.04)";
        el.style.borderColor = "rgba(150,150,150,0.15)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0) scale(1)";
      }}
    >
      {/* Icon wrapper */}
      <div
        className="flex items-center justify-center rounded-xl"
        style={{
          width: 56,
          height: 56,
          background: `color-mix(in srgb, ${brandColor} 14%, transparent)`,
        }}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          aria-label={icon.title}
        >
          <path d={icon.path} fill={brandColor} />
        </svg>
      </div>

      {/* Label */}
      <span
        className="text-xs font-semibold text-center leading-tight"
        style={{ opacity: 0.72 }}
      >
        {icon.title}
      </span>
    </div>
  );
}

export default function Stacks() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: "0px",
  });

  return (
    <div
      id="stacks"
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center items-start px-4 py-16 max-w-3xl mx-auto"
    >
      {/* Heading */}
      <div
        className="mb-12"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(-14px)",
          transition: "opacity 0.55s ease, transform 0.55s ease",
        }}
      >
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Stacks
        </h2>
        <p className="text-base text-slate-500 dark:text-gray-400">
          Always searching new technologies to thrive on
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full">
        {stacks.map((icon, i) => (
          <StackCard key={icon.title} icon={icon} index={i} inView={inView} />
        ))}
      </div>
    </div>
  );
}
