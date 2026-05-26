"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import FlashInfo from "@/components/flash-infos";
import { profile } from "@/lib/profile";
import { statusBadges } from "@/lib/status-badges";
import { TypeAnimation } from "react-type-animation";

export default function Welcome() {
  const { isLoaded } = useContext(LoadContext);
  return (
    <div
      id="home"
      className="flex min-h-[100svh] w-full flex-col justify-center px-4 py-20 text-white sm:px-6 sm:py-24 md:px-8 md:py-28"
    >
      {/* Headline */}
      <div
        className={`max-w-4xl text-left font-sans text-4xl font-normal leading-[1.16] text-black dark:text-white sm:text-5xl sm:leading-[1.14] md:text-6xl ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-[60%] opacity-0"}`}
      >
        {profile.welcomeLines.map((line) => (
          <p key={line} className="tracking-normal">
            {line}
          </p>
        ))}
        <p className="tracking-normal text-green-500 dark:!text-green-400">
          This is my
          <TypeAnimation
            sequence={[...profile.portfolioTypingSequence]}
            speed={1}
            repeat={0}
            cursor={true}
          />
        </p>
        <p className="max-w-2xl pt-5 text-base font-normal leading-relaxed text-black/70 dark:text-gray-300/85 sm:text-lg md:text-xl">
          <span className="font-semibold">{profile.heroLead}</span>
          <br />
          {profile.heroSupporting}
        </p>
      </div>

      {/* Badges */}
      <div className="mt-8 flex w-full max-w-3xl flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
        {statusBadges.map((badge) => (
          <FlashInfo key={badge} name={badge} />
        ))}
      </div>
    </div>
  );
}
