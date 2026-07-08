// Utils/Projects.js

import {
  FaHandsHelping,
  FaLeaf,
  FaLightbulb,
  FaRocket,
  FaBook,
  FaUserGraduate,
  FaLaptop,
  FaPaintBrush,
  FaDumbbell
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdEco,
} from "react-icons/md";

export const categories = [
  { id: "all", label: "Tous", icon: <FaRocket /> },
  { id: "leadership", label: "Leadership", icon: <FaUserGraduate /> },
  { id: "education", label: "Éducation", icon: <FaBook /> },
  { id: "environment", label: "Environnement", icon: <FaLeaf /> },
  { id: "social", label: "Social", icon: <FaHandsHelping /> },
  { id: "innovation", label: "Innovation", icon: <FaLightbulb /> },
];

export const projectsData = [
  {
    id: 1,
    title: "Leadership Academy",
    category: "leadership",
    icon: <FaUserGraduate />,
    description:
      "Programme intensif de développement des compétences de leadership pour les jeunes de Sbikha.",
    fullDescription:
      "Leadership Academy est un programme de 8 semaines conçu pour développer les compétences de leadership, la communication et la gestion de projet chez les jeunes participants. Le programme combine des ateliers pratiques, des conférences avec des leaders d'opinion, des projets communautaires et du coaching personnalisé.",
    impact: "150+ jeunes formés depuis 2020",
    beneficiaries: "Jeunes âgés de 18 à 35 ans",
    location: "Sbikha, Tunisie",
    duration: "8 semaines",
    status: "En cours",
    image: "leadership",
    color: "#4CC4D1",
    achievements: [
      "85% des participants ont développé leurs compétences en leadership",
      "45+ projets communautaires initiés par les diplômés",
      "Taux de satisfaction de 92%",
      "3 éditions organisées avec succès",
    ],
    testimonials: [
      {
        name: "Ahmed Ben Ali",
        role: "Diplômé 2024",
        text: "Leadership Academy a transformé ma façon de penser et de agir. J'ai acquis des compétences précieuses qui m'ont permis de lancer mon propre projet communautaire.",
      },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Solidarité Scolaire",
    category: "social",
    icon: <FaHandsHelping />,
    description:
      "Distribution de fournitures scolaires et soutien éducatif pour les élèves défavorisés.",
    fullDescription:
      "Solidarité Scolaire est une initiative annuelle qui vise à soutenir les élèves de familles défavorisées en leur fournissant des kits scolaires complets et un accompagnement éducatif. Le programme inclut également des ateliers de soutien scolaire et des activités éducatives.",
    impact: "200+ enfants aidés chaque année",
    beneficiaries: "Élèves du primaire et du secondaire",
    location: "Sbikha et ses environs",
    duration: "Annuel (Septembre)",
    status: "Terminé",
    image: "solidarity",
    color: "#ff3b30",
    achievements: [
      "200+ kits scolaires distribués par édition",
      "50+ bourses d'études attribuées",
      "15 ateliers de soutien scolaire organisés",
      "Taux de réussite scolaire amélioré de 30%",
    ],
    testimonials: [
      {
        name: "Fatma Ben Ahmed",
        role: "Mère d'élève bénéficiaire",
        text: "Grâce à JCI Sbikha, mes enfants ont pu commencer l'année scolaire avec tout le matériel nécessaire. Cela a fait une énorme différence pour notre famille.",
      },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Innovation Hub",
    category: "innovation",
    icon: <FaLightbulb />,
    description:
      "Espace de co-working et d'innovation pour les entrepreneurs et startups locaux.",
    fullDescription:
      "Innovation Hub est un espace de co-working moderne dédié aux jeunes entrepreneurs et porteurs de projets innovants. L'espace offre des bureaux équipés, des salles de réunion, un réseau de mentors et un accès à des opportunités de financement.",
    impact: "15+ startups incubées",
    beneficiaries: "Entrepreneurs, startups, innovateurs",
    location: "Sbikha, Tunisie",
    duration: "Permanent",
    status: "Actif",
    image: "innovation",
    color: "#ff9500",
    achievements: [
      "15 startups accompagnées",
      "50+ emplois créés",
      "3 levées de fonds réussies",
      "Partenariats avec 10 entreprises locales",
    ],
    testimonials: [
      {
        name: "Karim Saadi",
        role: "Fondateur de TechStart",
        text: "L'Innovation Hub nous a fourni l'espace et le soutien nécessaires pour faire décoller notre startup. Un véritable catalyseur de croissance.",
      },
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Sbikha Verte",
    category: "environment",
    icon: <FaLeaf />,
    description:
      "Campagne de reboisement et de sensibilisation à l'environnement.",
    fullDescription:
      "Sbikha Verte est une initiative environnementale qui vise à reboiser la région et à sensibiliser la population à l'importance de la protection de l'environnement. Le projet inclut des campagnes de plantation d'arbres, des ateliers éducatifs et des actions de nettoyage.",
    impact: "500+ arbres plantés",
    beneficiaries: "Communauté locale, écoles, associations",
    location: "Sbikha et ses environs",
    duration: "En cours (2024-2025)",
    status: "En cours",
    image: "green",
    color: "#34c759",
    achievements: [
      "500+ arbres plantés",
      "10 ateliers de sensibilisation organisés",
      "200+ participants aux activités",
      "Partenariat avec 5 associations locales",
    ],
    testimonials: [
      {
        name: "Leila Bouazizi",
        role: "Volontaire",
        text: "Participer à Sbikha Verte m'a permis de contribuer à un avenir plus vert pour notre région. Voir les arbres pousser est une récompense en soi.",
      },
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Leadership Digital",
    category: "education",
    icon: <FaLaptop />,
    description:
      "Formation aux compétences numériques et au leadership digital.",
    fullDescription:
      "Leadership Digital est un programme de formation qui combine les compétences numériques avec le leadership. Les participants apprennent à utiliser les outils numériques, à gérer des communautés en ligne et à développer des stratégies de marketing digital.",
    impact: "50+ jeunes formés",
    beneficiaries: "Jeunes de 18 à 30 ans",
    location: "Sbikha, Tunisie",
    duration: "3 mois",
    status: "Terminé",
    image: "digital",
    color: "#007aff",
    achievements: [
      "50 jeunes certifiés",
      "80% des participants ont amélioré leurs compétences digitales",
      "10 projets digitaux lancés",
      "Taux d'insertion professionnelle de 65%",
    ],
    testimonials: [
      {
        name: "Nadia Gharbi",
        role: "Diplômée 2024",
        text: "Ce programme m'a donné les compétences nécessaires pour décrocher mon premier emploi dans le domaine du marketing digital. Une expérience transformative !",
      },
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Santé pour Tous",
    category: "social",
    icon: <MdHealthAndSafety />,
    description:
      "Campagnes de santé publique et sensibilisation au bien-être.",
    fullDescription:
      "Santé pour Tous est un programme de santé publique qui organise des campagnes de sensibilisation, des dépistages gratuits et des ateliers sur la nutrition et le bien-être. Le programme vise à améliorer la santé et le bien-être de la communauté.",
    impact: "300+ bénéficiaires",
    beneficiaries: "Communauté de Sbikha",
    location: "Sbikha, Tunisie",
    duration: "Annuel",
    status: "En cours",
    image: "health",
    color: "#ff3b30",
    achievements: [
      "300+ consultations médicales gratuites",
      "5 campagnes de dépistage",
      "10 ateliers de nutrition",
      "Partenariat avec 3 cliniques locales",
    ],
    testimonials: [
      {
        name: "Dr. Mohamed Ali",
        role: "Médecin partenaire",
        text: "Les campagnes de santé organisées par JCI Sbikha ont permis de toucher des populations qui n'ont pas accès aux soins de santé de base.",
      },
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Culture et Patrimoine",
    category: "innovation",
    icon: <FaPaintBrush />,
    description:
      "Promotion du patrimoine culturel et artistique de la région.",
    fullDescription:
      "Culture et Patrimoine est un projet qui vise à préserver et promouvoir le riche patrimoine culturel et artistique de Sbikha et de la région. Le projet organise des expositions, des festivals et des ateliers créatifs.",
    impact: "15 événements culturels organisés",
    beneficiaries: "Artistes, artisans, communauté locale",
    location: "Sbikha, Tunisie",
    duration: "Permanent",
    status: "Actif",
    image: "culture",
    color: "#ff1493",
    achievements: [
      "15 événements culturels organisés",
      "50+ artistes locaux impliqués",
      "10 ateliers créatifs",
      "Partenariat avec 5 institutions culturelles",
    ],
    testimonials: [
      {
        name: "Sana Mansouri",
        role: "Artiste locale",
        text: "Grâce à ce projet, j'ai pu exposer mon travail et rencontrer d'autres artistes. Une belle opportunité de valoriser notre patrimoine.",
      },
    ],
    featured: false,
  },
  {
    id: 8,
    title: "Sport et Bien-être",
    category: "social",
    icon: <FaDumbbell />,
    description:
      "Programmes sportifs et activités de bien-être pour la communauté.",
    fullDescription:
      "Sport et Bien-être est un programme qui promeut un mode de vie sain à travers des activités sportives, des tournois et des ateliers de bien-être. Le programme est ouvert à tous les âges et niveaux.",
    impact: "200+ participants",
    beneficiaries: "Tous les âges",
    location: "Sbikha, Tunisie",
    duration: "Annuel",
    status: "Terminé",
    image: "sport",
    color: "#007aff",
    achievements: [
      "200+ participants aux activités",
      "5 tournois sportifs organisés",
      "10 ateliers de bien-être",
      "Partenariat avec 3 clubs sportifs",
    ],
    testimonials: [
      {
        name: "Ali Ben Ahmed",
        role: "Participant",
        text: "Les activités sportives organisées par JCI Sbikha m'ont permis de rester actif et de rencontrer des gens formidables.",
      },
    ],
    featured: false,
  },
  {
    id: 9,
    title: "Entrepreneuriat Jeunesse",
    category: "innovation",
    icon: <FaRocket />,
    description:
      "Programme d'accompagnement à l'entrepreneuriat pour les jeunes.",
    fullDescription:
      "Entrepreneuriat Jeunesse est un programme qui accompagne les jeunes dans la création et le développement de leur entreprise. Le programme offre des formations, du mentorat et un accès à des opportunités de financement.",
    impact: "30+ jeunes entrepreneurs accompagnés",
    beneficiaries: "Jeunes entrepreneurs de 18 à 35 ans",
    location: "Sbikha, Tunisie",
    duration: "6 mois",
    status: "En cours",
    image: "entrepreneurship",
    color: "#34c759",
    achievements: [
      "30 entreprises créées",
      "50+ emplois générés",
      "10 formations dispensées",
      "Partenariat avec 5 institutions financières",
    ],
    testimonials: [
      {
        name: "Mohamed Trabelsi",
        role: "Entrepreneur",
        text: "Le programme d'accompagnement de JCI Sbikha m'a aidé à transformer mon idée en une entreprise viable. Un soutien inestimable.",
      },
    ],
    featured: false,
  },
  {
    id: 10,
    title: "Eco-Responsabilité",
    category: "environment",
    icon: <MdEco />,
    description:
      "Programme de sensibilisation à l'éco-responsabilité et au développement durable.",
    fullDescription:
      "Eco-Responsabilité est un programme qui sensibilise la communauté à l'importance des gestes éco-responsables au quotidien. Le programme inclut des ateliers sur le recyclage, la réduction des déchets et la consommation responsable.",
    impact: "100+ participants",
    beneficiaries: "Communauté de Sbikha",
    location: "Sbikha, Tunisie",
    duration: "En cours",
    status: "Actif",
    image: "eco",
    color: "#34c759",
    achievements: [
      "100+ participants aux ateliers",
      "10 ateliers de sensibilisation",
      "Partenariat avec 3 associations environnementales",
      "200+ kg de déchets recyclés",
    ],
    testimonials: [
      {
        name: "Ahmed Ben Ali",
        role: "Coordinateur",
        text: "L'engagement de la communauté pour l'éco-responsabilité est encourageant. Ensemble, nous faisons une réelle différence.",
      },
    ],
    featured: false,
  },
];

export const heroData = {
  badge: {
    icon: <FaRocket />,
    text: "Nos Projets",
  },
  title: "Des Projets Qui",
  highlight: "Transforment la Communauté",
  description:
    "Découvrez nos initiatives qui créent un impact positif durable à Sbikha et dans la région.",
  stats: [
    { value: "10", label: "Projets Actifs" },
    { value: "500+", label: "Bénéficiaires" },
    { value: "120+", label: "Membres Impliqués" },
  ],
};

export const impactData = {
  title: "Notre Impact",
  subtitle: "Des résultats concrets pour la communauté",
  items: [
    { number: "500+", label: "Bénéficiaires directs" },
    { number: "10", label: "Projets réalisés" },
    { number: "120+", label: "Membres impliqués" },
    { number: "85%", label: "Taux de satisfaction" },
  ],
};

export const ctaData = {
  title: "Vous Voulez Contribuer ?",
  description:
    "Rejoignez-nous dans nos projets et faites partie du changement. Ensemble, nous pouvons créer un impact durable à Sbikha.",
  buttons: [
    {
      text: "Devenir Bénévole",
      link: "/join",
      variant: "primary",
    },
    {
      text: "Proposer un Projet",
      link: "/contact",
      variant: "secondary",
    },
  ],
};

export const sectionHeaders = {
  featured: {
    title: "Projets Phares",
    subtitle: "Nos initiatives les plus marquantes",
  },
  all: {
    title: "Tous Nos Projets",
    subtitle: (count) => `${count} projets pour transformer la communauté`,
  },
};

export const statusConfig = {
  "En cours": {
    color: "#34c759",
    bg: "rgba(52, 199, 89, 0.12)",
  },
  "Terminé": {
    color: "#6c757d",
    bg: "rgba(108, 117, 125, 0.12)",
  },
  "Actif": {
    color: "#4CC4D1",
    bg: "rgba(76, 196, 209, 0.12)",
  },
  "default": {
    color: "#ff9500",
    bg: "rgba(255, 149, 0, 0.12)",
  },
};

export const categoryIconMap = {
  leadership: <FaUserGraduate />,
  education: <FaBook />,
  environment: <FaLeaf />,
  social: <FaHandsHelping />,
  innovation: <FaLightbulb />,
};

export const categoryLabelMap = {
  leadership: "Leadership",
  education: "Éducation",
  environment: "Environnement",
  social: "Social",
  innovation: "Innovation",
};