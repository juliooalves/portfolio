"use client";

import AboutCard from "@/components/about-card";
import SectionHeading from "@/components/section-heading";
import { profile } from "@/lib/profile";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div id="about" ref={ref}>
      <SectionHeading
        title="About"
        kicker={profile.aboutKicker}
        inView={inView}
      />

      <div
        className={`px-4 sm:px-6 transition-all duration-1000 ${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      >
        <AboutCard />
      </div>
    </div>
  );
}
