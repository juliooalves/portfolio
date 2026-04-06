"use client";

import { useInView } from "react-intersection-observer";
export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "1px",
  });
  return (
    <div id="projects" ref={ref}>
      <div
        className={`select-none text-black p-2 py-12 sm:py-16 dark:text-white text-3xl sm:text-[40px] transition-all duration-1000
      ${inView ? "translate-y-0 opacity-1" : "-translate-y-16 opacity-0"}`}
      >
        Projects
        <p className="text-slate-900/90 dark:text-gray-300/90 lg:text-[20px] text-[17px]">
          Take a look into some of my past works{" "}
        </p>
      </div>
    </div>
  );
}
