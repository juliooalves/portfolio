"use client";
import { useState, useEffect } from "react";
import { ThemeButton } from "@/components/ui/theme-button";

const SECTIONS: { name: string; id: string }[] = [
  { name: "Home", id: "home" },
  { name: "Stacks", id: "stacks" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const TabItem = ({
  sectionName,
  sectionId,
  active,
}: {
  sectionName: string;
  sectionId: string;
  active: boolean;
}) => {
  const scrollToSection = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={`transition-all duration-200 whitespace-nowrap text-xs sm:text-sm lg:text-[15px] px-1
        ${
          active
            ? "text-black dark:text-white font-semibold"
            : "text-slate-500 hover:text-black dark:hover:text-white dark:text-gray-300/90"
        }
        hover:scale-[103%]`}
    >
      {sectionName}
    </button>
  );
};

export default function TopBar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Highlight active nav item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`shadow-lg shadow-slate-700/20 fixed rounded-xl justify-self-center z-30
        top-3 left-1/2 -translate-x-1/2
        text-md bg-slate-50/90 backdrop-blur-md font-sans text-gray-900/90
        dark:bg-black/80 dark:backdrop-blur-md transition-all duration-500
        gap-3 px-3 py-2 flex items-center justify-center border border-slate-200/60 dark:border-white/10
        max-w-[95vw]
        ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
    >
      <nav className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 overflow-x-auto scrollbar-hide">
        {SECTIONS.map((s) => (
          <TabItem
            key={s.id}
            sectionName={s.name}
            sectionId={s.id}
            active={activeSection === s.id}
          />
        ))}
      </nav>
      <div className="w-px h-4 bg-slate-300 dark:bg-white/20 mx-1 flex-shrink-0" />
      <div className="flex-shrink-0">
        <ThemeButton />
      </div>
    </div>
  );
}
