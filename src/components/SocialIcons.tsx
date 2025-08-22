import { Instagram } from "lucide-react";

const SocialIcons = () => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/aurdinaryguy/", label: "Instagram" },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-6">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 hover:border-accent transition-smooth hover-glow"
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;