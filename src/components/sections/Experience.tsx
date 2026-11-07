import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experiences"
      tone="powder"
      eyebrow="En entreprise"
      title="Expériences professionnelles"
      intro="Des missions concrètes, du développement web à la Data Science appliquée à la maintenance prédictive."
    >
      <div className="relative space-y-6 before:absolute before:left-[11px] before:top-3 before:hidden before:h-[calc(100%-1.5rem)] before:w-px before:bg-line md:before:block md:pl-10">
        {experiences.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06}>
            <article className="portfolio-card relative rounded-3xl border bg-white p-6 md:p-8">
              <span className="absolute -left-10 top-8 hidden h-3 w-3 rounded-full bg-bordeaux md:block" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bordeaux">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.role}</h3>
              <p className="mt-1 text-sm text-ink/70">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink/80">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bordeaux" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
