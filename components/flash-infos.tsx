"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";

export default function FlashInfo({ name }: { name: string }) {
  const { isLoaded } = useContext(LoadContext);
  return (
    <div
      className={`shrink-0 whitespace-nowrap bg-slate-100 border border-slate-300 text-black dark:border-none
        dark:bg-stone-900 px-3 py-2 md:p-2.5 dark:text-gray-300/90 mt-2 rounded-lg
        text-[12px] sm:text-[13px] md:text-[14px] transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 "}`}
    >
      {name}
    </div>
  );
}
