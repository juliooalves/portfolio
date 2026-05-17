"use client";

import MainFrame from "@/components/main-frame";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <MainFrame />
      </div>
    </div>
  );
}
