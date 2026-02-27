"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import FlashInfo from "@/components/flash-infos";
import GitSvg from "@/images/github-svgrepo-com.svg";
import WorkanaSvg from "@/images/Workana/Workana_idV4cO5SuW_1.svg";
import LinkedinSvg from "@/images/linkedin-161-svgrepo-com.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, ExternalLink } from "lucide-react";
import LinkCard from "@/components/link-card";

export default function About() {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);
  return (
    <div
      className="flex-row   w-full md:w-[90%] sm:w-[80%] min-h-[90%] 
      justify-self-center items-center text-white mt-32  p-2 "
    >
      <div
        className={` justify-self-center text-black dark:text-white text-[40px] transition-all duration-1000  
        font-sans ${isLoaded ? "translate-x-0 opacity-1" : "-translate-x-[230%] opacity-10"}`}
      >
        <p>Hi, Welcome!</p>
        <p className="">I'm Júlio Alves and</p>
        <p className=" text-green-500 dark:!text-green-400 ">
          This is my
          <TypeAnimation
            sequence={[" portiflio", 1000, " prtfoli", 1000, " portifolio"]}
            speed={10}
            repeat={0}
            cursor={true}
            cursorStyle={{ width: "10px", color: "red" }}
          />
        </p>
        <p className="pt-1  lg:text-[20px] text-[16px] text-slate-900/90 dark:text-gray-300/85">
          <span className="font-bold">
            Full Stack Developer that has security on his core.
          </span>
          <br />
          Building optimal applications for real people with real problems.
        </p>
      </div>

      <div className="grid w-[75%] lg:grid-cols-5 md:grid-cols-5 grid-cols-3  mt-3 justify-items-center lg:justify-self-center sm:justify-self-start">
        <FlashInfo name="Open for Work" />
        <FlashInfo name="Freelancer Open" />
        <FlashInfo name="AppSec" />
        <FlashInfo name="DevSecOps" />
        <FlashInfo name="AI Searcher" />
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-rows-1 sm:grid-cols-1  lg:gap-20 md:gap-10 sm:gap-10  relative mt-[22%] justify-items-center ">
        <LinkCard
          platform="GitHub | "
          platformLink="github.com/juliooalves"
          username="juliooalves"
          Icon=<Github size={20} />
        />
        <LinkCard
          platform="Linkedin | "
          platformLink="www.linkedin.com/in/julio-alves-dev/"
          username="Júlio Alves"
          Icon={<Linkedin size={20} />}
        />
        <LinkCard
          platform="Workana | "
          platformLink="workana.com"
          username="Júlio Alves"
          Icon={<Linkedin size={20} />}
        />
      </div>
    </div>
  );
}
