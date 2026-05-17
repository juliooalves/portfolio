import {
  footerSocialLinks,
  type SocialLink as SocialLinkType,
} from "@/lib/social-links";

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
            {footerSocialLinks.map((link) => (
              <SocialLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ link }: { link: SocialLinkType }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      aria-label={link.label}
      className="text-slate-500 transition-all hover:text-slate-900 dark:text-slate-300/80 dark:hover:text-white"
    >
      <Icon size={20} />
    </a>
  );
};

export default Footer;
