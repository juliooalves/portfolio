"use client";

import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import MainFrame from "@/components/main-frame";
const LaptopScene = dynamic(() => import("@/components/laptop-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#0a0a14] flex items-center justify-center">
      <div className="text-gray-100 font-mono text-md animate-pulse">
        Carregando Portifolio...
      </div>
    </div>
  ),
});

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <MainFrame />
      </div>
    </div>
  );
}
