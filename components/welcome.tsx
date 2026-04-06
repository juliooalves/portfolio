"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import FlashInfo from "@/components/flash-infos";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github } from "lucide-react";
import LinkCard from "@/components/link-card";
import WorkanaSvg from "@/images/Workana/Workana_idV4cO5SuW_1.svg";

export default function Welcome() {
  const { isLoaded } = useContext(LoadContext);
  return (
    <div
      id="home"
      className="flex-col w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh]
        items-center text-white mt-16 sm:mt-24 md:mt-32 px-4 sm:px-0"
    >
      {/* Headline */}
      <div
        className={`text-center text-black dark:text-white text-2xl sm:text-3xl md:text-[40px] transition-all duration-1000
          font-sans ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"}`}
      >
        <p>Hi, Welcome!</p>
        <p>I'm Júlio Alves and</p>
        <p className="text-green-500 dark:!text-green-400">
          This is my
          <TypeAnimation
            sequence={[" portfolio"]}
            speed={50}
            repeat={0}
            cursor={true}
          />
        </p>
        <p className="pt-1 text-base sm:text-lg md:text-[20px] text-slate-900/90 dark:text-gray-300/85">
          <span className="font-bold">
            Full Stack Developer that has security on his core.
          </span>
          <br />
          Building optimal applications for real people with real problems.
        </p>
      </div>

      {/* Badges */}
      <div className="grid w-full sm:w-[80%] md:w-[70%] grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-4 justify-items-center">
        <FlashInfo name="Open for Work" />
        <FlashInfo name="Freelancer Open" />
        <FlashInfo name="AppSec" />
        <FlashInfo name="DevSecOps" />
        <FlashInfo name="AI Searcher" />
      </div>

      {/* Link cards */}
      <div className="flex flex-col w-full sm:w-[80%] lg:w-[70%] gap-4 relative mt-12 sm:mt-16 items-center">
        <LinkCard
          platform="GitHub"
          platformLink="github.com/juliooalves"
          username="juliooalves"
          Icon={
            /* GitHub logo from Simple Icons CDN */
            <img
              src="https://cdn.simpleicons.org/github/181717"
              alt="GitHub"
              width={22}
              height={22}
              className="dark:invert"
            />
          }
        />
        <LinkCard
          platform="LinkedIn"
          platformLink="www.linkedin.com/in/julio-alves-dev/"
          username="Júlio Alves"
          Icon={
            /* LinkedIn logo from Simple Icons CDN */
            <img
              src="https://cdn.simpleicons.org/linkedin/0A66C2"
              alt="LinkedIn"
              width={22}
              height={22}
            />
          }
        />
        <LinkCard
          platform="Workana"
          platformLink="workana.com/freelancer/julio-alves"
          username="Júlio Alves"
          Icon={
            <Image
              src={WorkanaSvg}
              alt="Workana"
              width={22}
              height={22}
            />
          }
        />
      </div>
    </div>
  );
}
