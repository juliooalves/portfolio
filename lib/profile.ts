import { Code2, ShieldCheck, Terminal, type LucideIcon } from "lucide-react";

export type ProfileHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const profile = {
  name: "Júlio Alves",
  initials: "JA",
  title: "Full-Stack Developer & Cybersecurity Student",
  metadataTitle: "Júlio Alves | Full stack Developer",
  metadataDescription: "Dynamic portifolio webpage",
  generator: "Júlio Alves",
  welcomeLines: ["Hi, Welcome!", "I'm Júlio Alves and"],
  portfolioTypingSequence: [" ptfli", " prllt", " portfolio"],
  heroLead: "Full Stack Developer that has security on his core.",
  heroSupporting:
    "Building optimal applications for real people with real problems.",
  aboutKicker: "A little bit about me",
  aboutSummary:
    "I build web applications with a security mindset from the start, balancing practical delivery with maintainable architecture and clear user workflows.",
  projectsKicker: "Take a look into some of my past works",
  stacksKicker: "Always searching new technologies to thrive on",
  contactKicker: "Get in touch",
  expertise: [
    "Full-Stack Development",
    "Application Security",
    "DevSecOps",
    "TypeScript",
    "Node.js",
    "Docker",
  ],
  highlights: [
    {
      icon: ShieldCheck,
      title: "Security-first delivery",
      description:
        "AppSec habits built into planning, implementation, and review.",
    },
    {
      icon: Code2,
      title: "Full-stack execution",
      description:
        "Interfaces, APIs, and deployment paths shaped around real use cases.",
    },
    {
      icon: Terminal,
      title: "Practical tooling",
      description:
        "Automation and diagnostics that keep projects maintainable.",
    },
  ] satisfies ProfileHighlight[],
} as const;
