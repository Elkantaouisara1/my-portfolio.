import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProjectArt } from "@/components/visuals/ProjectArt";
import { getProject, projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <article className="bg-white pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link href="/#projets" className="inline-flex items-center gap-2 text-sm text-ink/70 hover:text-bordeaux">
          <ArrowLeft className="h-4 w-4" />
          Retour aux projets
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux">
          {project.categories.join(" · ")}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/75">{project.shortDescription}</p>
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-line shadow-card">
          {project.screenshot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.screenshot} alt={`Capture du projet ${project.title}`} className="w-full" />
          ) : (
            <ProjectArt art={project.art} title={project.title} />
          )}
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">Problème traité</h2>
          <p className="mt-3 leading-relaxed text-ink/75">{project.problem}</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Approche technique</h2>
          <p className="mt-3 leading-relaxed text-ink/75">{project.approach}</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Fonctionnalités</h2>
          <ul className="mt-3 space-y-2 text-ink/80">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bordeaux" />
                {feature}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Résultats</h2>
          <p className="mt-3 leading-relaxed text-ink/75">{project.resultsNote}</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="rounded-full border border-line bg-blush px-3 py-1 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          {project.github ? (
            <Button href={project.github} target="_blank">
              <Github className="h-4 w-4" />
              Voir sur GitHub
            </Button>
          ) : (
            <p className="rounded-2xl border border-dashed border-line bg-blush px-4 py-3 text-sm text-ink/65">
              Lien GitHub : à ajouter dans <code className="rounded bg-white px-1">src/data/projects.ts</code>{" "}
              (champ <code>github</code> du projet).
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
