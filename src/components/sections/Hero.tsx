import { ArrowDownRight, Download, MapPin, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { NeuralField } from "@/components/visuals/NeuralField";

export function Hero() {
  return (
    <section id="accueil" className="hero-grid relative isolate overflow-hidden scroll-mt-24 bg-blush pt-28 sm:pt-36">
      <div className="pointer-events-none absolute -left-36 top-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-28 h-[30rem] w-[30rem] rounded-full bg-leaf/15 blur-3xl" />
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-32">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bordeaux shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-leaf" aria-hidden />
            {site.badge}
          </p>
          <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[4.7rem]">
            {site.headline}
          </h1>
          <p className="mt-6 text-xl font-semibold text-leaf sm:text-2xl">{site.name}</p>
          <p className="mt-4 max-w-xl text-base leading-8 text-ink/75 sm:text-lg">{site.shortBio}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-white/75 px-4 py-2.5 text-sm font-semibold text-ink shadow-soft">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf" />
              </span>
              {site.seeking}
            </p>
            <p className="inline-flex items-center gap-2 px-1 text-sm text-ink/65">
              <MapPin className="h-4 w-4 text-leaf" aria-hidden />
              {site.location} · {site.school}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/#projets">
              Découvrir mes projets
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={site.cvPath} download={site.cvFilename} variant="secondary">
              <Download className="h-4 w-4" aria-hidden />
              Télécharger mon CV
            </Button>
          </div>
          <SocialLinks className="mt-7" />
          {!site.linkedin ? (
            <p className="mt-3 text-xs text-ink/50">
              LinkedIn : coller l’URL dans <code className="rounded bg-blush px-1">src/data/site.ts</code>{" "}
              (champ <code>linkedin</code>).
            </p>
          ) : null}
        </div>
        <div className="float-slow relative mx-auto w-full max-w-[32rem]">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-accent/50 via-white/20 to-leaf/20 blur-2xl" />
          <div className="relative rounded-[2.5rem] border border-white/80 bg-white/55 p-3 shadow-[0_32px_90px_-40px_rgba(0,113,152,0.4)] backdrop-blur-sm sm:p-5">
            <NeuralField />
            <div className="absolute -left-2 top-10 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:-left-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">Mon terrain de jeu</p>
              <p className="mt-1 text-sm font-semibold text-ink">Data <span className="text-leaf">×</span> IA</p>
            </div>
            <div className="absolute -right-1 bottom-10 rounded-2xl border border-white/80 bg-bordeaux px-4 py-3 text-white shadow-card sm:-right-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">En ce moment</p>
              <p className="mt-1 text-sm font-semibold">Construire · apprendre · partager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
