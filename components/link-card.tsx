"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  platform: string;
  platformLink: string;
  username: string;
  /** Pass either a Lucide JSX element or a Next/Image element */
  Icon: React.ReactNode;
}

export default function LinkCard({
  platform,
  platformLink,
  username,
  Icon,
}: LinkCardProps) {
  const { isLoaded } = useContext(LoadContext);

  return (
    <a
      href={`https://${platformLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 h-20 w-full sm:w-[80%] lg:w-[90%] p-5
        border border-slate-200 bg-slate-100 text-slate-900/90
        hover:bg-slate-200 hover:border-slate-300
        dark:border-white/10 dark:bg-white/5
        dark:hover:bg-white/10 dark:hover:border-white/20 dark:text-gray-300/90
        rounded-xl transition-all duration-300 hover:scale-[102%] hover:shadow-md
        ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    >
      <span className="shrink-0">{Icon}</span>
      <span className="flex flex-col leading-tight min-w-0">
        <span className="text-[11px] text-slate-400 dark:text-gray-500">{platform}</span>
        <span className="font-semibold text-[14px] truncate">{username}</span>
      </span>
      <ExternalLink size={14} className="ml-auto shrink-0 opacity-40" />
    </a>
  );
}
