"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { navItems, site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-blush/75 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/#accueil" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-bordeaux text-sm font-semibold tracking-[0.12em] text-white shadow-soft">
            {site.initials}
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:block">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/70 p-1 shadow-soft backdrop-blur-md lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-[13px] transition",
                active === item.id ? "bg-bordeaux text-white" : "text-ink/70 hover:bg-blush hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={site.cvPath} download={site.cvFilename} variant="primary" className="hidden sm:inline-flex">
            <Download className="h-4 w-4" aria-hidden />
            Télécharger mon CV
          </Button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white/90 text-ink shadow-soft lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-line bg-white px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base",
                  active === item.id ? "bg-powder text-bordeaux" : "text-ink",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={site.cvPath} download={site.cvFilename} className="mt-4 w-full">
              <Download className="h-4 w-4" aria-hidden />
              Télécharger mon CV
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
