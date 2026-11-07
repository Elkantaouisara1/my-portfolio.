import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  const items = [
    { href: site.github, label: "GitHub", icon: Github, external: true },
    site.linkedin
      ? { href: site.linkedin, label: "LinkedIn", icon: Linkedin, external: true }
      : null,
    { href: `mailto:${site.email}`, label: "E-mail", icon: Mail, external: false },
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    icon: typeof Github;
    external: boolean;
  }>;

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-bordeaux hover:text-bordeaux"
            aria-label={item.label}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <item.icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
