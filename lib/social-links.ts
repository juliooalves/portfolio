import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
};

export const socialLinks = [
  {
    label: "Email",
    value: "julio0alves@gmail.com",
    href: "mailto:julio0alves@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "julio-alves-dev",
    href: "https://www.linkedin.com/in/julio-alves-dev/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "juliooalves",
    href: "https://github.com/juliooalves",
    icon: Github,
    external: true,
  },
  {
    label: "Workana",
    value: "julio-alves",
    href: "https://workana.com/freelancer/julio-alves",
    icon: BriefcaseBusiness,
    external: true,
  },
] satisfies SocialLink[];

export const primaryContactLink = socialLinks[0];

export const footerSocialLinks = socialLinks.filter(({ label }) =>
  ["GitHub", "LinkedIn", "Email"].includes(label),
);
