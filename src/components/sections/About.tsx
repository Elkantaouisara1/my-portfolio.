import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { journey } from "@/data/timeline";

export function About() {
  return (
    <Section
      id="apropos"
      tone="blush"
      eyebrow="Parcours"
      title="À propos de moi"
      intro={site.about}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {site.motivations.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="portfolio-card h-full rounded-3xl border bg-white p-6">
              <p className="text-sm font-semibold text-bordeaux">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <h3 className="text-lg font-semibold text-ink">Fil du parcours</h3>
        <ol className="mt-6 space-y-0">
          {journey.map((step, index) => (
            <li key={`${step.year}-${step.title}`} className="grid grid-cols-[auto_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className="mt-1 h-3 w-3 rounded-full bg-bordeaux" />
                {index < journey.length - 1 ? <span className="w-px flex-1 bg-line" /> : null}
              </div>
              <div className="pb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bordeaux">
                  {step.year} · {step.kind}
                </p>
                <p className="mt-1 font-medium text-ink">{step.title}</p>
                <p className="text-sm text-ink/65">{step.place}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
