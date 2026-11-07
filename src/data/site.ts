export const site = {
  name: "Sara El Kantaoui",
  firstName: "Sara",
  initials: "SE",
  role: "Étudiante ingénieure en Data Science & Intelligence Artificielle",
  location: "Casablanca, Maroc",
  school: "EMSI — École Marocaine des Sciences de l'Ingénieur",
  email: "saraelkantaouip@gmail.com",
  phoneDisplay: "+212 6 77 74 33 71",
  phoneHref: "tel:+212677743371",
  github: "https://github.com/Elkantaouisara1",
  githubLabel: "Elkantaouisara1",
  /**
   * Coller ici l’URL réelle du profil LinkedIn, par exemple :
   * "https://www.linkedin.com/in/votre-identifiant"
   * Laisser vide tant que l’URL n’est pas confirmée — le lien n’apparaîtra pas.
   */
  linkedin: "https://www.linkedin.com/in/sara-elkantaoui-4b010027b/",
  cvPath: "/documents/CV_Sara_ElKantaoui_Data_IA.pdf",
  cvFilename: "CV_Sara_ElKantaoui_Data_IA.pdf",
  badge: "Data · Intelligence artificielle · Innovation",
  headline: "De la donnée aux idées qui font avancer.",
  seeking: "À la recherche d’un stage PFE de 6 mois",
  shortBio:
    "Étudiante ingénieure spécialisée en Data Science et Intelligence Artificielle. J’allie traitement de données, Machine Learning et systèmes intelligents pour concevoir des solutions utiles, de bout en bout.",
  about:
    "Je suis étudiante en cycle d’ingénieur à l’EMSI, spécialisée en Data Science et Intelligence Artificielle. Mon parcours m’a menée du développement web à la conception de pipelines de données, puis à des projets de Machine Learning, Deep Learning, Computer Vision et d’IA agentique. J’ai notamment travaillé sur une solution de maintenance prédictive à partir de signaux vibratoires, et je cherche à mettre ces compétences au service de projets concrets pendant un stage PFE de six mois.",
  motivations: [
    {
      title: "Expérience en entreprise",
      text: "Des stages en développement web et en Data Science m’ont appris à livrer dans un cadre réel, avec des contraintes métier et des livrables concrets.",
    },
    {
      title: "Projets de bout en bout",
      text: "J’aime relier la donnée, le modèle et l’interface : prétraitement, entraînement, API et dashboard, jusqu’à un outil utilisable.",
    },
    {
      title: "Solutions fondées sur la donnée",
      text: "Je m’intéresse aux problèmes où l’analyse, le signal ou les flux de données permettent une décision plus fiable et plus précoce.",
    },
    {
      title: "ML, Deep Learning et IA agentique",
      text: "Classification, vision, séquences, RAG et systèmes multi-agents : je construis des approches adaptées au problème, sans surpromettre les résultats.",
    },
  ],
  footerLine: "La donnée, bien comprise, devient une décision plus juste.",
} as const;

export const navItems = [
  { href: "/#accueil", label: "Accueil", id: "accueil" },
  { href: "/#apropos", label: "À propos", id: "apropos" },
  { href: "/#competences", label: "Compétences", id: "competences" },
  { href: "/#experiences", label: "Expériences", id: "experiences" },
  { href: "/#projets", label: "Projets", id: "projets" },
  { href: "/#formation", label: "Formation", id: "formation" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;
