"use client";

import LoadContext from "@/contexts/load-context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

export default function FlashInfo({ name }: { name: string }) {
  const { isLoaded, setIsLoaded } = useContext(LoadContext);
  return (
    <div
      className={` bg-slate-100  border border-slate-300   text-black dark:border-none 
        dark:bg-stone-900 p-2 lg:p-2.5 md:p-2 sm:p-2  dark:text-gray-300/90 mt-2 rounded-lg 
        lg:text-[14px] md:text-[11.5px] text-[10.5px]  transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-1" : "translate-y-20 opacity-0 "}`}
    >
      {name}
    </div>
  );
}
