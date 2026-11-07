# Portfolio — Sara El Kantaoui

Site personnel pour présenter un profil d’ingénieure Data Science & Intelligence Artificielle et candidater à un **stage PFE de 6 mois**.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Le dépôt WindGuard (maintenance prédictive) n’a pas été modifié : ce portfolio est un projet séparé, pensé pour Node.js 18+.

## Lancer le site en local

Dans ce dossier :

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans le navigateur.

Autres commandes :

```bash
npm run build
npm start
npm run lint
```

## Où modifier les informations

Tout le contenu éditorial est centralisé :

| Fichier | Contenu |
| --- | --- |
| `src/data/site.ts` | Nom, e-mail, téléphone, GitHub, LinkedIn, CV, textes hero / about |
| `src/data/skills.ts` | Compétences |
| `src/data/experience.ts` | Stages |
| `src/data/projects.ts` | Projets, GitHub, captures |
| `src/data/education.ts` | Formation et certifications |
| `src/data/timeline.ts` | Chronologie « À propos » |

## Ajouter le CV, LinkedIn, GitHub des projets et captures

1. **CV** — copier le PDF dans `public/documents/CV_Sara_ElKantaoui_Data_IA.pdf`.
2. **LinkedIn** — coller l’URL réelle dans `site.linkedin` (`src/data/site.ts`). Tant que le champ est vide, le lien n’est pas affiché.
3. **GitHub d’un projet** — ajouter `github: "https://github.com/..."` sur l’entrée correspondante dans `src/data/projects.ts`.
4. **Captures** — déposer l’image dans `public/images/`, puis `screenshot: "/images/nom-du-fichier.png"` sur le projet.

## Déploiement sur Vercel

1. Pousser ce dossier sur GitHub.
2. Aller sur [vercel.com](https://vercel.com), importer le dépôt.
3. Framework : Next.js. Commande de build : `next build`. Sortie : `.next`.
4. Déployer. Mettre à jour `metadataBase` dans `src/app/layout.tsx` et l’URL de `src/app/sitemap.ts` avec le domaine réel.

Le formulaire de contact n’utilise pas de backend : il ouvre un e-mail prérempli (`mailto:`).
