export const projectCategories = [
  "Tous",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "IA agentique",
  "Data Engineering",
  "Web & Santé",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  features: string[];
  resultsNote: string;
  technologies: string[];
  categories: Exclude<ProjectCategory, "Tous">[];
  github?: string;
  screenshot?: string;
  art: "wind" | "agents" | "news" | "sign" | "architectures" | "stroke" | "health";
};

export const projects: Project[] = [
  {
    slug: "maintenance-predictive-eoliennes",
    title: "Maintenance prédictive des éoliennes",
    shortDescription:
      "Classification de l’état des turbines à partir de signaux vibratoires, pour contribuer à la détection précoce de défaillances potentielles.",
    problem:
      "Les éoliennes produisent des signaux vibratoires riches, mais difficiles à interpréter à l’œil nu. L’enjeu est d’aider à distinguer un état sain d’un état endommagé afin d’orienter la maintenance.",
    approach:
      "Le travail porte sur le traitement de signaux, l’extraction de caractéristiques statistiques, puis l’entraînement de modèles de classification (Random Forest, SVM, XGBoost). Une API FastAPI et un dashboard React exposent le flux pour un usage opérationnel.",
    features: [
      "Analyse et prétraitement de signaux vibratoires",
      "Extraction de caractéristiques statistiques",
      "Classification Healthy / Damaged avec plusieurs familles de modèles",
      "API FastAPI et interface React",
    ],
    resultsNote:
      "Les métriques détaillées et les jeux de données internes ne sont pas publiés ici. Le projet a été développé dans un contexte de stage et de solution applicative.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Random Forest",
      "SVM",
      "XGBoost",
      "FastAPI",
      "React",
    ],
    categories: ["Machine Learning"],
    screenshot: "/images/eoliennes.png",
    github: "https://github.com/Elkantaouisara1/WindGuard-AI-Syst-me-intelligent-de-maintenance-pr-dictive-des-oliennes",
    art: "wind",
  },
  {
    slug: "ai-fraud-detection-system",
    title: "AI Fraud Detection System – Intelligent Banking Fraud Detection Platform",
    shortDescription:
      "Plateforme intelligente de détection de fraude bancaire qui identifie les transactions suspectes et aide à analyser les résultats.",
    problem:
      "La détection de transactions bancaires suspectes nécessite d’analyser des données déséquilibrées et de présenter les alertes de manière compréhensible pour les utilisateurs.",
    approach:
      "Le système entraîne un modèle Random Forest avec Scikit-learn et utilise SMOTE pour traiter le déséquilibre des classes. Une API FastAPI et une interface React avec dashboard interactif exposent les résultats. Un chatbot multi-agent basé sur Ollama assiste les utilisateurs dans leur analyse.",
    features: [
      "Détection de transactions suspectes avec Random Forest",
      "Traitement du déséquilibre des classes avec SMOTE",
      "Dashboard interactif pour consulter les résultats",
      "API backend FastAPI et interface React",
      "Chatbot multi-agent basé sur Ollama pour assister l’analyse",
    ],
    resultsNote:
      "Les métriques de performance et les données d’évaluation ne sont pas publiées ici ; aucun score de détection n’est revendiqué.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "SMOTE",
      "FastAPI",
      "React.js",
      "Ollama",
      "Multi-Agent System",
    ],
    categories: ["Machine Learning", "IA agentique"],
    screenshot: "/images/fraud.png",
    art: "agents",
  },
  {
    slug: "systeme-multi-agents-medical",
    title: "Système multi-agents médical",
    shortDescription:
      "Workflow multi-agents destiné à l’orientation clinique, avec un mécanisme Human-in-the-Loop pour permettre une intervention humaine.",
    problem:
      "L’orientation clinique peut nécessiter plusieurs étapes de raisonnement. Une automatisation totale n’est pas souhaitable : un humain doit pouvoir intervenir dans le processus.",
    approach:
      "Le système s’appuie sur un graphe d’agents (LangGraph) orchestré côté backend FastAPI, avec une interface React. Le Human-in-the-Loop est intégré au workflow pour valider ou infléchir certaines étapes.",
    features: [
      "Orchestration multi-agents",
      "Intervention humaine (Human-in-the-Loop)",
      "API FastAPI",
      "Interface React",
    ],
    resultsNote:
      "Ce projet décrit l’architecture et les fonctionnalités mises en place. Aucun résultat clinique ni score de performance n’est revendiqué ici.",
    technologies: ["Python", "LangGraph", "FastAPI", "React"],
    categories: ["IA agentique"],
    screenshot: "/images/medical-ai.png",
    art: "agents",
  },
  {
    slug: "plateforme-analyse-actualites",
    title: "Plateforme d’analyse d’actualités",
    shortDescription:
      "Collecte automatisée d’articles par web scraping, orchestration des traitements et pipelines ETL pour organiser et analyser les données.",
    problem:
      "Les articles d’actualité sont dispersés et se renouvelent en continu. Sans collecte et structuration, l’analyse reste manuelle et difficile à reproduire.",
    approach:
      "Des jobs de scraping alimentent des pipelines ETL orchestrés avec Apache Airflow. Les données sont stockées via SQL et le déploiement s’appuie sur Docker pour isoler l’environnement.",
    features: [
      "Collecte automatisée par web scraping",
      "Orchestration avec Apache Airflow",
      "Pipelines ETL",
      "Organisation des données en SQL",
      "Conteneurisation Docker",
    ],
    resultsNote:
      "Le périmètre présenté couvre l’architecture de collecte et de traitement. Aucun volume de corpus ni indicateur d’analyse n’est inventé ici.",
    technologies: ["Python", "Airflow", "SQL", "Docker"],
    categories: ["Data Engineering"],
    screenshot: "/images/actualites.png",
    art: "news",
  },
  {
    slug: "reconnaissance-langue-des-signes",
    title: "Site web pour personnes malentendantes",
    shortDescription:
      "Système de reconnaissance de la langue des signes qui détecte les gestes et les traduit en texte et en voix.",
    problem:
      "La communication par signes n’est pas toujours comprise par les interlocuteurs. Ce site web facilite les échanges en reconnaissant les gestes et en les restituant sous forme de texte et de voix.",
    approach:
      "Le pipeline combine MediaPipe pour le suivi des points clés, des modèles PyTorch pour la reconnaissance, l’API OpenAI pour des traitements langagiers, et SQL Server pour la persistance.",
    features: [
      "Détection et suivi des gestes avec MediaPipe",
      "Reconnaissance des signes avec PyTorch",
      "Traduction des gestes en texte et en voix",
      "Intégration de l’API OpenAI",
      "Gestion des données avec SQL Server",
    ],
    resultsNote:
      "Les précisions de reconnaissance et les jeux d’évaluation ne sont pas documentés ici. Seules les briques techniques réellement utilisées sont listées.",
    technologies: ["Python", "PyTorch", "MediaPipe", "OpenAI API", "SQL Server"],
    categories: ["Computer Vision", "Deep Learning"],
    screenshot: "/images/malentendantes.png",
    art: "sign",
  },
  {
    slug: "plateforme-rendez-vous-medicaux",
    title: "Plateforme de prise de rendez-vous médicaux en ligne",
    shortDescription:
      "Plateforme web de santé pour prendre rendez-vous avec des professionnels de santé et acheter des produits médicaux en ligne.",
    problem:
      "La recherche d’un professionnel de santé et la prise de rendez-vous peuvent demander plusieurs démarches. La plateforme centralise les rendez-vous et l’accès à des produits médicaux.",
    approach:
      "Développement d’une application web avec un backend Java Spring Boot et une interface réalisée en HTML, CSS et JavaScript.",
    features: [
      "Prise de rendez-vous avec des médecins",
      "Prise de rendez-vous avec des infirmiers",
      "Prise de rendez-vous avec des laboratoires",
      "Achat de produits médicaux en ligne",
    ],
    resultsNote:
      "La plateforme rassemble les fonctionnalités de rendez-vous médicaux et d’achat de produits médicaux décrites pour le projet.",
    technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    categories: ["Web & Santé"],
    screenshot: "/images/health.png",
    art: "health",
  },
  {
    slug: "comparaison-architectures-deep-learning",
    title: "Comparaison d’architectures Deep Learning",
    shortDescription:
      "Implémentation et comparaison d’architectures adaptées à des données tabulaires, des images et des séquences.",
    problem:
      "Un même réflexe « tout CNN » ou « tout LSTM » n’est pas adapté à tous les types de données. Il faut choisir une architecture en fonction de la structure du signal.",
    approach:
      "Implémentation sous PyTorch de MLP, CNN, LSTM et GRU, puis comparaison qualitative de leur adéquation aux données tabulaires, aux images et aux séquences.",
    features: [
      "MLP pour données tabulaires",
      "CNN pour images",
      "LSTM et GRU pour séquences",
      "Cadre de comparaison d’architectures",
    ],
    resultsNote:
      "Aucune table de scores n’est publiée ici, afin de ne pas inventer de résultats expérimentaux. Le livrable mis en avant est l’implémentation comparative.",
    technologies: ["Python", "PyTorch", "MLP", "CNN", "LSTM", "GRU"],
    categories: ["Deep Learning"],
    github: "https://github.com/Elkantaouisara1/ProjetDeepLearning",

    art: "architectures",
  },
  {
    slug: "prediction-risque-avc",
    title: "Prédiction du risque d’AVC",
    shortDescription:
      "Prétraitement et analyse de données cliniques, entraînement et évaluation de modèles de Machine Learning.",
    problem:
      "Les dossiers cliniques combinent variables numériques et catégorielles. Avant toute prédiction, il faut nettoyer, analyser et préparer ces données de façon reproductible.",
    approach:
      "Le projet s’appuie sur Pandas pour le prétraitement et l’analyse exploratoire, puis sur Scikit-learn pour entraîner et évaluer des modèles de classification du risque.",
    features: [
      "Prétraitement de données cliniques",
      "Analyse exploratoire",
      "Entraînement de modèles de Machine Learning",
      "Évaluation des modèles",
    ],
    resultsNote:
      "Les performances chiffrées ne sont pas affichées, faute de publication confirmée. L’accent est mis sur la démarche de préparation et d’évaluation.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    categories: ["Machine Learning"],
    screenshot: "/images/AVC.png",
    art: "stroke",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
