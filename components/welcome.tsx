"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import FlashInfo from "@/components/flash-infos";
import { TypeAnimation } from "react-type-animation";

export default function Welcome() {
  const { isLoaded } = useContext(LoadContext);
  return (
    <div
      id="home"
      className="flex-col w-full min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] items-center text-white pt-16 sm:pt-24 md:pt-32 px-4 sm:px-6 md:px-8"
    >
      {/* Headline */}
      <div
        className={`text-left text-black dark:text-white font-sans leading-tight ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"}`}
        style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}
      >
        <p className="tracking-tight" style={{ fontSize: "1em" }}>Hi, Welcome!</p>
        <p className="tracking-tight" style={{ fontSize: "1em" }}>I'm Júlio Alves and</p>
        <p className="text-green-500 dark:!text-green-400 tracking-tight" style={{ fontSize: "1em" }}>
          This is my
          <TypeAnimation
            sequence={[" ptfli", " prllt", " portfolio"]}
            speed={5}
            repeat={0}
            cursor={true}
          />
        </p>
        <p
          className="pt-4 text-black/70 dark:text-gray-300/85 leading-snug"
          style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.25rem)" }}
        >
          <span className="font-bold">Full Stack Developer that has security on his core.</span>
          <br />
          Building optimal applications for real people with real problems.
        </p>
      </div>

      {/* Badges */}
      <div className="scrollbar-hide flex w-full max-w-2xl gap-2 overflow-x-auto pb-2 mt-4 mb-6 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 md:justify-items-center">
        <FlashInfo name="Open for Work" />
        <FlashInfo name="Freelancer Open" />
        <FlashInfo name="AppSec" />
        <FlashInfo name="DevSecOps" />
        <FlashInfo name="AI Searcher" />
      </div>

    </div>
  );
}
