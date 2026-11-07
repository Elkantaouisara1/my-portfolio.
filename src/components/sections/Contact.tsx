"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { mailtoLink } from "@/lib/utils";

export function Contact() {
  const [draft, setDraft] = useState({ name: "", email: "", subject: "", message: "" });
  const [notice, setNotice] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = draft.subject.trim() || `Contact portfolio — ${draft.name || "recruteur"}`;
    const body = [
      `Nom : ${draft.name}`,
      `E-mail : ${draft.email}`,
      "",
      draft.message,
    ].join("\n");
    setNotice(
      "Aucun serveur d’envoi n’est configuré. Votre client e-mail va s’ouvrir avec le message prérempli. Vous pouvez aussi m’écrire directement.",
    );
    window.location.href = mailtoLink(subject, body);
  }

  return (
    <Section
      id="contact"
      tone="white"
      eyebrow="Prochaine étape"
      title="Construisons quelque chose d’innovant ensemble."
      intro="Vous recrutez pour un stage PFE de 6 mois en Data Science, Intelligence Artificielle, Machine Learning, Deep Learning ou Data Engineering ? Écrivons-nous."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${site.email}`}
            className="portfolio-card flex items-center gap-3 rounded-2xl border bg-blush px-4 py-4 text-sm text-ink"
          >
            <Mail className="h-4 w-4 text-bordeaux" />
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="portfolio-card flex items-center gap-3 rounded-2xl border bg-blush px-4 py-4 text-sm text-ink"
          >
            <Phone className="h-4 w-4 text-bordeaux" />
            {site.phoneDisplay}
          </a>
          <p className="portfolio-card flex items-center gap-3 rounded-2xl border bg-blush px-4 py-4 text-sm text-ink">
            <MapPin className="h-4 w-4 text-bordeaux" />
            {site.location}
          </p>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card flex items-center gap-3 rounded-2xl border bg-blush px-4 py-4 text-sm text-ink"
          >
            <Github className="h-4 w-4 text-bordeaux" />
            {site.github}
          </a>
          {site.linkedin ? (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card flex items-center gap-3 rounded-2xl border bg-blush px-4 py-4 text-sm text-ink"
            >
              <Linkedin className="h-4 w-4 text-bordeaux" />
              LinkedIn
            </a>
          ) : (
            <p className="rounded-2xl border border-dashed border-line bg-blush px-4 py-4 text-sm text-ink/65">
              LinkedIn : à compléter dans <code className="rounded bg-white px-1">src/data/site.ts</code>{" "}
              (propriété <code>linkedin</code>).
            </p>
          )}
          <Button href={mailtoLink("Stage PFE — Data Science & IA")} className="w-full sm:w-auto">
            <Mail className="h-4 w-4" />
            M’envoyer un e-mail
          </Button>
        </div>

        <form
          onSubmit={onSubmit}
          className="portfolio-card rounded-3xl border bg-blush/60 p-6 sm:p-8"
          noValidate
        >
          <p className="text-sm leading-relaxed text-ink/75">
            Ce formulaire n’envoie rien vers un backend. À la soumission, un e-mail prérempli s’ouvre dans
            votre application de messagerie.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              Nom
              <input
                required
                name="name"
                autoComplete="name"
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none ring-bordeaux focus:ring-2"
              />
            </label>
            <label className="text-sm font-medium text-ink">
              E-mail
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={draft.email}
                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none ring-bordeaux focus:ring-2"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-ink">
            Objet
            <input
              required
              name="subject"
              value={draft.subject}
              onChange={(e) => setDraft({ ...draft, subject: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none ring-bordeaux focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Message
            <textarea
              required
              name="message"
              rows={5}
              value={draft.message}
              onChange={(e) => setDraft({ ...draft, message: e.target.value })}
              className="mt-2 w-full resize-y rounded-2xl border border-line bg-white px-4 py-3 text-sm outline-none ring-bordeaux focus:ring-2"
            />
          </label>
          <Button type="submit" className="mt-6">
            Ouvrir un e-mail prérempli
          </Button>
          {notice ? (
            <p className="mt-4 text-sm text-ink/70" role="status">
              {notice}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
