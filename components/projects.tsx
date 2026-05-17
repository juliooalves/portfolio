"use client";

import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/project-card";

const mockProjects = [
  {
    title: "SecureChat",
    description: "End-to-end encrypted messaging platform with self-destructing messages and perfect forward secrecy.",
    image: "/images/project-placeholder.svg",
    repoUrl: "https://github.com/example/securechat",
    projectUrl: "https://securechat.example.com",
    path: "go/react/webrtc",
  },
  {
    title: "VulnScanner",
    description: "Automated vulnerability scanning tool for web applications with real-time reporting and CI/CD integration.",
    image: "/images/project-placeholder.svg",
    repoUrl: "https://github.com/example/vulnscanner",
    projectUrl: "https://vulnscanner.example.com",
    path: "python/docker/security",
  },
  {
    title: "LoadBalancer Pro",
    description: "High-performance load balancer with health checks, rate limiting, and WebSocket support.",
    image: "/images/project-placeholder.svg",
    repoUrl: "https://github.com/example/loadbalancer-pro",
    projectUrl: undefined,
    path: "go/k8s/networking",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "1px",
  });
  return (
    <div id="projects" ref={ref}>
      <div
        className={`select-none text-black p-2 py-12 sm:py-16 dark:text-white text-3xl sm:text-[40px] transition-all duration-1000
      ${inView ? "translate-y-0 opacity-1" : "-translate-y-16 opacity-0"}`}
      >
        Projects
        <p className="text-slate-900/90 dark:text-gray-300/90 lg:text-[20px] text-[17px]">
          Take a look into some of my past works{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4 sm:px-6">
        {mockProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
