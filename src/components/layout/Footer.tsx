import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { navItems, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-blush">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <p className="text-lg font-semibold text-ink">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/70">{site.footerLine}</p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Pied de page">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="text-ink/70 hover:text-bordeaux">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-start gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink hover:border-bordeaux hover:text-bordeaux"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink hover:border-bordeaux hover:text-bordeaux"
            aria-label="E-mail"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-line/80 px-5 py-4 text-center text-xs text-ink/55 sm:px-8">
        © {year} {site.name}. Portfolio personnel — Data Science & Intelligence Artificielle.
      </div>
    </footer>
  );
}
