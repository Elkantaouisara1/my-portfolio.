import { Award, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { certifications, education } from "@/data/education";

export function Education() {
  return (
    <Section
      id="formation"
      tone="blush"
      eyebrow="Parcours académique"
      title="Formation et certifications"
      intro="Un historique fidèle : diplômes, formation en cours et certifications confirmées uniquement."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="portfolio-card rounded-3xl border bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-powder text-bordeaux">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-ink">Formation</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {education.map((item) => (
                <li key={item.title} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  {item.period ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bordeaux">
                      {item.period}
                    </p>
                  ) : null}
                  <p className="mt-1 font-medium text-ink">{item.title}</p>
                  {item.place ? <p className="text-sm text-ink/65">{item.place}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="portfolio-card rounded-3xl border bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-powder text-bordeaux">
                <Award className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-ink">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {certifications.map((item) => (
                <li key={item.title} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bordeaux">
                    {item.period}
                  </p>
                  <p className="mt-1 font-medium text-ink">{item.title}</p>
                  <p className="text-sm text-ink/65">{item.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
