export const education = [
  {
    title: "Cycle d’ingénieur en Data Science & IA",
    place: "EMSI, Casablanca",
    period: "2024 – Présent",
  },
  {
    title: "Technicienne Spécialisée en Développement Digital",
    place: "",
    period: "2022 – 2024",
  },
  {
    title: "Baccalauréat scientifique, Sciences Mathématiques",
    place: "",
    period: "2022",
  },
] as const;

type Certification = {
  title: string;
  issuer: string;
  period?: string;
};

export const certifications: Certification[] = [
  {
    title: "Oracle Agentic AI Foundations",
    issuer: "Oracle",
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
  },
  {
    title: "Introduction à la programmation orientée objet (en C)",
    issuer: "EPFL",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
  },
  {
    title: "Introduction aux Big Data",
    issuer: "University of California San Diego",
    period: "Juin 2026",
  },
] as const;
