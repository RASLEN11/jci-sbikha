// Utils/NewsEvents.js

import {
  FaNewspaper,
  FaUsers,
  FaHandsHelping,
  FaGlobe,
  FaLightbulb,
  FaTrophy,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
} from "react-icons/fa";

export const categories = [
  { id: "all", label: "Tous", icon: <FaNewspaper /> },
  { id: "community", label: "Communauté", icon: <FaUsers /> },
  { id: "leadership", label: "Leadership", icon: <FaTrophy /> },
  { id: "education", label: "Éducation", icon: <FaLightbulb /> },
  { id: "environment", label: "Environnement", icon: <FaGlobe /> },
  { id: "social", label: "Social", icon: <FaHandsHelping /> },
];

export const newsData = [
  {
    id: 1,
    title: "JCI Sbikha lance la 4ème édition de Leadership Academy",
    excerpt:
      "Un programme intensif de développement des compétences de leadership pour les jeunes de la région de Sbikha et ses environs.",
    content:
      "La Jeune Chambre Internationale de Sbikha est fière d'annoncer le lancement de la 4ème édition de Leadership Academy. Ce programme intensif de 8 semaines vise à développer les compétences de leadership, la communication et la gestion de projet chez les jeunes participants.\n\nAu programme : ateliers pratiques, conférences avec des leaders d'opinion, projets communautaires et coaching personnalisé. Les participants auront l'opportunité de mettre en pratique leurs apprentissages à travers des projets concrets au service de la communauté.",
    category: "leadership",
    date: "15 Juin 2026",
    author: "Ahmed Ben Ali",
    readTime: "5 min",
    views: 234,
    likes: 45,
    comments: 12,
    tags: ["Leadership", "Formation", "Jeunesse"],
    featured: true,
  },
  {
    id: 2,
    title: "Campagne de solidarité : Distribution de fournitures scolaires",
    excerpt:
      "Plus de 200 enfants de familles défavorisées ont reçu des kits scolaires complets pour la rentrée.",
    content:
      "Dans le cadre de son engagement social, JCI Sbikha a organisé une campagne de distribution de fournitures scolaires au profit des enfants de familles défavorisées de la région.\n\nCette initiative a permis de distribuer plus de 200 kits scolaires complets incluant cartables, cahiers, stylos, et autres fournitures essentielles. La campagne a été réalisée en partenariat avec des entreprises locales et des donateurs généreux.",
    category: "social",
    date: "1 Septembre 2026",
    author: "Sana Mansouri",
    readTime: "4 min",
    views: 189,
    likes: 67,
    comments: 8,
    tags: ["Solidarité", "Éducation", "Enfants"],
    featured: true,
  },
  {
    id: 3,
    title:
      "Innovation Hub : Un espace de co-working pour les jeunes entrepreneurs",
    excerpt:
      "Ouverture d'un espace moderne de travail collaboratif pour les startups et entrepreneurs locaux.",
    content:
      "JCI Sbikha a inauguré son Innovation Hub, un espace de co-working moderne dédié aux jeunes entrepreneurs et porteurs de projets de la région.\n\nL'espace dispose de bureaux équipés, de salles de réunion, d'un espace de conférence et d'un réseau de mentors pour accompagner les startups. Déjà 15 projets ont trouvé refuge dans ce nouvel espace d'innovation.",
    category: "community",
    date: "20 Juillet 2026",
    author: "Mohamed Trabelsi",
    readTime: "6 min",
    views: 312,
    likes: 89,
    comments: 23,
    tags: ["Innovation", "Entrepreneuriat", "Co-working"],
    featured: false,
  },
  {
    id: 4,
    title: "JCI Sbikha remporte le prix du meilleur projet communautaire",
    excerpt:
      "Le projet 'Sbikha Verte' récompensé lors de la conférence régionale de JCI.",
    content:
      "Lors de la conférence régionale JCI, le projet 'Sbikha Verte' de JCI Sbikha a été récompensé par le prix du meilleur projet communautaire.\n\nCe projet de reboisement et de sensibilisation environnementale a permis de planter plus de 500 arbres et d'organiser des ateliers de sensibilisation dans les écoles de la région. Une reconnaissance bien méritée pour l'engagement de l'équipe.",
    category: "environment",
    date: "10 Mai 2026",
    author: "Leila Bouazizi",
    readTime: "3 min",
    views: 456,
    likes: 112,
    comments: 34,
    tags: ["Environnement", "Prix", "Régional"],
    featured: true,
  },
  {
    id: 5,
    title: "Formation en leadership digital pour 50 jeunes",
    excerpt:
      "Un programme de formation aux compétences numériques et au leadership pour préparer l'avenir.",
    content:
      "JCI Sbikha a lancé un programme de formation en leadership digital destiné à 50 jeunes de la région. Ce programme de 3 mois combine des modules sur les compétences numériques, le leadership et la gestion de projets.\n\nLes participants ont suivi des formations sur les outils numériques, le marketing digital, la gestion de communauté et le leadership. Un programme qui prépare les jeunes aux défis du monde professionnel moderne.",
    category: "education",
    date: "5 Août 2026",
    author: "Karim Saadi",
    readTime: "4 min",
    views: 278,
    likes: 56,
    comments: 15,
    tags: ["Digital", "Formation", "Leadership"],
    featured: false,
  },
  {
    id: 6,
    title: "Grande collecte de sang organisée à Sbikha",
    excerpt:
      "Plus de 100 donneurs ont participé à la campagne de don du sang organisée par JCI Sbikha.",
    content:
      "JCI Sbikha a organisé une grande campagne de don du sang en collaboration avec le centre de transfusion sanguine de la région. Plus de 100 donneurs ont participé à cette action humanitaire.\n\nCette initiative s'inscrit dans le cadre des actions de santé publique menées par l'organisation pour sensibiliser à l'importance du don du sang et sauver des vies.",
    category: "social",
    date: "25 Juin 2026",
    author: "Nadia Gharbi",
    readTime: "3 min",
    views: 156,
    likes: 78,
    comments: 9,
    tags: ["Santé", "Solidarité", "Don du sang"],
    featured: false,
  },
  {
    id: 7,
    title: "Atelier de sensibilisation à l'environnement dans les écoles",
    excerpt:
      "JCI Sbikha sensibilise les élèves à l'importance de la protection de l'environnement.",
    content:
      "Dans le cadre de son engagement environnemental, JCI Sbikha a organisé des ateliers de sensibilisation dans les écoles primaires de Sbikha.\n\nLes élèves ont participé à des activités ludiques et éducatives sur le tri des déchets, le recyclage et l'importance de préserver la nature. Des centaines d'enfants ont été touchés par ce programme.",
    category: "environment",
    date: "15 Mars 2026",
    author: "Ahmed Ben Ali",
    readTime: "4 min",
    views: 201,
    likes: 45,
    comments: 7,
    tags: ["Éducation", "Environnement", "Enfants"],
    featured: false,
  },
  {
    id: 8,
    title: "JCI Sbikha célèbre 8 ans d'impact",
    excerpt:
      "Un événement pour célébrer 8 ans d'engagement au service de la communauté de Sbikha.",
    content:
      "JCI Sbikha a célébré son 8ème anniversaire lors d'un événement réunissant membres, partenaires et amis de l'organisation.\n\nL'occasion de revenir sur les réalisations de ces 8 années, de récompenser les membres méritants et de projeter les ambitions futures de l'organisation pour la région.",
    category: "community",
    date: "5 Janvier 2026",
    author: "Sana Mansouri",
    readTime: "5 min",
    views: 389,
    likes: 134,
    comments: 28,
    tags: ["Anniversaire", "Célébration", "Impact"],
    featured: false,
  },
];

export const eventsData = [
  {
    id: 1,
    title: "Leadership Academy 2026 - Session d'Automne",
    description:
      "Rejoignez notre programme de leadership de 8 semaines avec des ateliers pratiques et des mentors experts.",
    date: "15 Octobre 2026",
    time: "09:00 - 17:00",
    location: "Centre Culturel de Sbikha",
    category: "leadership",
    type: "Formation",
    capacity: 50,
    registered: 38,
    price: "Gratuit",
    speakers: ["Ahmed Ben Ali", "Sana Mansouri", "Karim Saadi"],
    tags: ["Leadership", "Formation", "Développement"],
    featured: true,
    status: "Inscriptions Ouvertes",
  },
  {
    id: 2,
    title: "Journée de Solidarité : Distribution Alimentaire",
    description:
      "Distribution de colis alimentaires aux familles vulnérables de Sbikha et ses environs.",
    date: "20 Octobre 2026",
    time: "08:00 - 14:00",
    location: "Salle Polyvalente de Sbikha",
    category: "social",
    type: "Action Sociale",
    capacity: 100,
    registered: 72,
    price: "Gratuit",
    speakers: ["Nadia Gharbi", "Mohamed Trabelsi"],
    tags: ["Solidarité", "Aide", "Communauté"],
    featured: true,
    status: "Inscriptions Ouvertes",
  },
  {
    id: 3,
    title: "Conférence : L'Innovation au Service du Développement Local",
    description:
      "Une conférence sur les innovations qui transforment les communautés locales.",
    date: "5 Novembre 2026",
    time: "14:00 - 18:00",
    location: "Innovation Hub - Sbikha",
    category: "community",
    type: "Conférence",
    capacity: 80,
    registered: 45,
    price: "Gratuit",
    speakers: ["Dr. Karim Saadi", "Leila Bouazizi", "Expert invité"],
    tags: ["Innovation", "Développement", "Technologie"],
    featured: false,
    status: "Inscriptions Ouvertes",
  },
  {
    id: 4,
    title: "Campagne de Reboisement 'Sbikha Verte'",
    description:
      "Journée de plantation d'arbres et de sensibilisation à l'environnement.",
    date: "15 Novembre 2026",
    time: "09:00 - 13:00",
    location: "Parc de la Ville de Sbikha",
    category: "environment",
    type: "Action Environnementale",
    capacity: 60,
    registered: 55,
    price: "Gratuit",
    speakers: ["Ahmed Ben Ali", "Sana Mansouri"],
    tags: ["Environnement", "Écologie", "Solidarité"],
    featured: false,
    status: "Complet",
  },
  {
    id: 5,
    title: "Gala de Reconnaissance des Membres",
    description:
      "Cérémonie annuelle de reconnaissance des membres et partenaires de JCI Sbikha.",
    date: "10 Décembre 2026",
    time: "19:00 - 23:00",
    location: "Salle des Fêtes - Sbikha",
    category: "community",
    type: "Célébration",
    capacity: 120,
    registered: 95,
    price: "Gratuit",
    speakers: ["Équipe JCI Sbikha"],
    tags: ["Reconnaissance", "Célébration", "Partenaires"],
    featured: true,
    status: "Inscriptions Ouvertes",
  },
  {
    id: 6,
    title: "Atelier : Marketing Digital pour Entrepreneurs",
    description:
      "Apprenez les bases du marketing digital pour développer votre activité.",
    date: "25 Novembre 2026",
    time: "10:00 - 16:00",
    location: "Innovation Hub - Sbikha",
    category: "education",
    type: "Formation",
    capacity: 30,
    registered: 18,
    price: "Gratuit",
    speakers: ["Nadia Gharbi", "Expert en Marketing"],
    tags: ["Marketing", "Digital", "Entrepreneuriat"],
    featured: false,
    status: "Inscriptions Ouvertes",
  },
];

export const heroData = {
  badge: {
    icon: <FaNewspaper />,
    text: "Actualités & Événements",
  },
  title: "Au Cœur de l'",
  highlight: "Actualité JCI Sbikha",
  description:
    "Restez informé des dernières nouvelles, événements et initiatives de la communauté JCI Sbikha.",
  stats: [
    { icon: <FaNewspaper />, value: 8, label: "Articles" },
    { icon: <FaCalendarAlt />, value: 6, label: "Événements" },
    { icon: <FaUsers />, value: "120+", label: "Membres Actifs" },
  ],
};

export const sectionHeaders = {
  featured: {
    title: "À la Une",
    subtitle: "Les actualités et événements marquants",
  },
  newsletter: {
    title: "Restez Informé",
    text: "Abonnez-vous à notre newsletter pour recevoir les dernières actualités et événements de JCI Sbikha directement dans votre boîte mail.",
  },
};

export const tabs = [
  { id: "all", label: "Toutes", icon: <FaNewspaper /> },
  { id: "news", label: "Actualités", icon: <FaNewspaper /> },
  { id: "events", label: "Événements", icon: <FaCalendarAlt /> },
];

export const newsletterData = {
  placeholder: "Votre adresse email",
  buttonText: "S'abonner",
};

export const modalDefaults = {
  shareButtons: ["Facebook", "Twitter", "LinkedIn", "WhatsApp", "Link"],
};

export const paginationConfig = {
  itemsPerPage: 6,
};

export const statusColors = {
  "Inscriptions Ouvertes": {
    bg: "rgba(52, 199, 89, 0.12)",
    color: "#34c759",
  },
  Complet: {
    bg: "rgba(255, 59, 48, 0.12)",
    color: "#ff3b30",
  },
};

export const eventDetailIcons = {
  time: <FaClock />,
  location: <FaMapMarkerAlt />,
  capacity: <FaUsers />,
  price: <FaTicketAlt />,
};