import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-slate-50 w-full transition-colors duration-300 dark:border-slate-800 dark:bg-black">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-300/90">
            © {currentYear} Júlio Alves. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <SocialLink
              href="https://github.com/juliooalves"
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/julio-alves-dev"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:julio0alves@gmail.com"
              icon={<Mail size={20} />}
              label="Email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-slate-500 transition-all hover:text-slate-900 dark:text-slate-300/80 dark:hover:text-white"
  >
    {icon}
  </a>
);

export default Footer;
