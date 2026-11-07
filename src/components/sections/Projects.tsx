"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectArt } from "@/components/visuals/ProjectArt";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("Tous");

  const visible = useMemo(
    () =>
      filter === "Tous"
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  return (
    <Section
      id="projets"
      eyebrow="Réalisations"
      title="Projets"
      intro={`${projects.length} projets pour explorer des solutions concrètes en intelligence artificielle, data et développement web.`}
    >
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les projets">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={filter === category}
            onClick={() => setFilter(category)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm transition",
              filter === category
                ? "border-bordeaux bg-bordeaux text-white"
                : "border-line bg-white text-ink hover:border-powder",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.04}>
            <article className="portfolio-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white">
              <div className="relative overflow-hidden">
                {project.screenshot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.screenshot}
                    alt={`Capture du projet ${project.title}`}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="transition duration-500 group-hover:scale-[1.03]">
                    <ProjectArt art={project.art} title={project.title} />
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-bordeaux shadow-soft backdrop-blur">
                  {String(index + 1).padStart(2, "0")} <span className="text-leaf">/</span>{" "}
                  {String(visible.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bordeaux">
                  {project.categories.join(" · ")}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-leaf">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{project.shortDescription}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <li key={tech} className="rounded-full bg-blush px-3 py-1 text-xs text-ink/75">
                      {tech}
                    </li>
                  ))}
                  {project.technologies.length > 5 ? (
                    <li className="rounded-full bg-powder px-3 py-1 text-xs text-bordeaux">
                      +{project.technologies.length - 5}
                    </li>
                  ) : null}
                </ul>
                <ul className="mt-4 space-y-1 text-sm text-ink/70">
                  {project.features.slice(0, 3).map((feature) => (
                    <li key={feature}>· {feature}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projets/${project.slug}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-bordeaux px-4 text-sm font-semibold text-white hover:bg-[#3c4736]"
                  >
                    Voir les détails
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-ink hover:border-bordeaux"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
