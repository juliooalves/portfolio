"use client";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div id="about" ref={ref}>
      <div
        className={`select-none text-black p-2 py-12 sm:py-16 dark:text-white text-3xl sm:text-[40px] transition-all duration-1000
          ${inView ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"}`}
      >
        About
        <p className="text-slate-900/90 dark:text-gray-300/90 lg:text-[20px] text-[17px]">
          A little bit about me
        </p>
      </div>
    </div>
  );
}
