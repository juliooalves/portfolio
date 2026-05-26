"use client";

import ContactCard from "@/components/contact-card";
import SectionHeading from "@/components/section-heading";
import { profile } from "@/lib/profile";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div id="contact" ref={ref} className="pb-16 sm:pb-20 lg:pb-24">
      <SectionHeading
        title="Contact"
        kicker={profile.contactKicker}
        inView={inView}
      />

      <div
        className={`px-4 sm:px-6 transition-all duration-1000 ${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      >
        <ContactCard />
      </div>
    </div>
  );
}
