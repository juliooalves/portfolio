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
    value: "juliooalves73@gmail.com",
    href: "mailto:juliooalves73@gmail.com",
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
    href: "https://www.workana.com/freelancer/0dcc14ca3694538ac18702c1d617cca5",
    icon: BriefcaseBusiness,
    external: true,
  },
] satisfies SocialLink[];

export const primaryContactLink = socialLinks[0];

export const footerSocialLinks = socialLinks.filter(({ label }) =>
  ["GitHub", "LinkedIn", "Email"].includes(label),
);
