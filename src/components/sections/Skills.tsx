import { Layers, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

const icons = {
  genai: Sparkles,
  dev: Layers,
};

export function Skills() {
  return (
    <Section
      id="competences"
      eyebrow="Outils & méthodes"
      title="Compétences"
      intro="Un panorama des technologies réellement utilisées dans mes projets et stages — sans pourcentages de maîtrise inventés."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.id as keyof typeof icons] ?? Layers;
          return (
            <Reveal key={group.id} delay={index * 0.04}>
              <article className="portfolio-card h-full rounded-3xl border bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-powder text-bordeaux">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold text-ink">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-blush px-3 py-1 text-xs text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
