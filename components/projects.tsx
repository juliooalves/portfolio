"use client";

import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "1px",
  });
  return (
    <div id="projects" ref={ref}>
      <SectionHeading
        title="Projects"
        kicker={profile.projectsKicker}
        inView={inView}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4 sm:px-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}
