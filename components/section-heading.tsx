"use client";

import { forwardRef } from "react";

type SectionHeadingProps = {
  title: string;
  kicker: string;
  inView: boolean;
};

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ title, kicker, inView }, ref) => (
    <div
      ref={ref}
      className={`select-none p-2 py-12 text-3xl text-black transition-all duration-1000 dark:text-white sm:py-16 sm:text-[40px]
        ${inView ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"}`}
    >
      {title}
      <p className="text-[17px] text-slate-900/90 dark:text-gray-300/90 lg:text-[20px]">
        {kicker}
      </p>
    </div>
  ),
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
