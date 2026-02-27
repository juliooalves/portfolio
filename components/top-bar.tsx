"use client";
import { useRef, useState, useEffect, type Ref } from "react";
import { ThemeButton } from "@/components/ui/theme-button";
import { useInView } from "react-intersection-observer";

interface TopBarProps {
  ref: Ref<HTMLDivElement>;
  sectionName: string;
}

const TabItems = ({ ref, sectionName }: TopBarProps) => {
  const scrollToSection = (reference) => {
    reference.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => scrollToSection(ref)}
      className=" transition-all duration-100 text-slate-500 hover:text-black dark:hover:text-white dark:text-gray-300/90 hover:scale-[102%] lg:text-[15px] md:text-md text-[14px]  "
    >
      {sectionName}
    </button>
  );
};

export default function TopBar() {
  const Divref = useRef(null);

  const tabItems =
    " transition-all duration-100 text-slate-500 hover:text-black dark:hover:text-white dark:text-gray-300/90 hover:scale-[102%]";
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    return;
  }, []);
  const { ref, inView } = useInView({
    threshold: 0.2,
    once: true,
    rootMargin: "1px",
  });
  return (
    <>
      <div
        ref={Divref}
        className={` shadow-lg shadow-slate-700/20 fixed  rounded-lg justify-self-center z-30 max-h-16 text-md bg-slate-50/95 font-sans text-gray-900/90  duration-500  
      [&>*]:p-0.5 [&>*]:cursor-pointer [&>*]:select-none dark:bg-black/95 transition-all 
      gap-3 p-2 flex justify-center ${isLoaded ? "translate-y-0 opacity-1" : "-translate-y-20 opacity-0"}`}
      >
        <nav className="flex lg:gap-3 md:gap-2 gap-1.5">
          <TabItems ref={Divref} sectionName="Home" />
          <TabItems ref={Divref} sectionName="Stacks" />
          <TabItems ref={Divref} sectionName="Projects" />
          <TabItems ref={Divref} sectionName="About" />
          <TabItems ref={Divref} sectionName="Contact" />
        </nav>
        <ThemeButton />
      </div>
    </>
  );
}
