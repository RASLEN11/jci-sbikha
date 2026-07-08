// Utils/Blog.js

import {
  FaUser,
  FaHeart,
  FaComment,
  FaUsers,
  FaBook,
  FaLeaf,
  FaHandsHelping,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaBookmark,
  FaNewspaper,
} from "react-icons/fa";

export const categories = [
  { id: "all", label: "Tous", icon: <FaNewspaper /> },
  { id: "leadership", label: "Leadership", icon: <FaUser /> },
  { id: "community", label: "Communauté", icon: <FaUsers /> },
  { id: "education", label: "Éducation", icon: <FaBook /> },
  { id: "environment", label: "Environnement", icon: <FaLeaf /> },
  { id: "social", label: "Social", icon: <FaHandsHelping /> },
];

export const blogPosts = [
  {
    id: 1,
    title: "Les 5 compétences clés d'un leader moderne",
    excerpt:
      "Découvrez les compétences essentielles que tout leader doit développer pour réussir dans le monde d'aujourd'hui.",
    content:
      "Dans un monde en constante évolution, les qualités d'un leader doivent s'adapter. Voici les 5 compétences clés qui font la différence...",
    category: "leadership",
    author: "Ahmed Ben Ali",
    date: "15 Juin 2026",
    readTime: "5 min",
    image: "leadership",
    tags: ["Leadership", "Développement personnel", "Compétences"],
    views: 234,
    likes: 45,
    comments: 12,
    featured: true,
  },
  {
    id: 2,
    title: "Comment créer un projet communautaire réussi",
    excerpt:
      "Les étapes clés pour mener à bien un projet qui fait la différence dans votre communauté.",
    content:
      "Créer un projet communautaire demande une préparation minutieuse et une exécution rigoureuse. Voici un guide étape par étape...",
    category: "community",
    author: "Sana Mansouri",
    date: "10 Mai 2026",
    readTime: "7 min",
    image: "community",
    tags: ["Communauté", "Projets", "Impact social"],
    views: 189,
    likes: 67,
    comments: 8,
    featured: false,
  },
  {
    id: 3,
    title: "L'importance de l'éducation pour le développement",
    excerpt:
      "Comment l'éducation transforme les communautés et crée des opportunités pour les jeunes.",
    content:
      "L'éducation est le moteur du développement. Elle permet aux individus de s'épanouir et aux communautés de prospérer...",
    category: "education",
    author: "Mohamed Trabelsi",
    date: "5 Avril 2026",
    readTime: "6 min",
    image: "education",
    tags: ["Éducation", "Développement", "Jeunesse"],
    views: 312,
    likes: 89,
    comments: 23,
    featured: true,
  },
  {
    id: 4,
    title: "5 initiatives écologiques pour votre quartier",
    excerpt:
      "Des actions simples pour rendre votre quartier plus vert et plus durable.",
    content:
      "Protéger l'environnement commence par des gestes simples au niveau local. Voici 5 initiatives à mettre en place...",
    category: "environment",
    author: "Leila Bouazizi",
    date: "20 Mars 2026",
    readTime: "4 min",
    image: "environment",
    tags: ["Environnement", "Écologie", "Durabilité"],
    views: 456,
    likes: 112,
    comments: 34,
    featured: false,
  },
  {
    id: 5,
    title: "La solidarité : un pilier de notre communauté",
    excerpt:
      "Pourquoi la solidarité est essentielle pour construire une communauté forte et résiliente.",
    content:
      "La solidarité est le ciment qui lie les membres d'une communauté. Elle permet de surmonter les défis ensemble...",
    category: "social",
    author: "Karim Saadi",
    date: "15 Février 2026",
    readTime: "5 min",
    image: "solidarity",
    tags: ["Solidarité", "Communauté", "Entraide"],
    views: 278,
    likes: 56,
    comments: 15,
    featured: false,
  },
  {
    id: 6,
    title: "Comment développer votre réseau professionnel",
    excerpt:
      "Stratégies efficaces pour construire un réseau professionnel solide et durable.",
    content:
      "Le networking est essentiel pour le développement professionnel. Découvrez comment construire un réseau de qualité...",
    category: "leadership",
    author: "Nadia Gharbi",
    date: "10 Janvier 2026",
    readTime: "6 min",
    image: "network",
    tags: ["Réseau", "Carrière", "Développement"],
    views: 201,
    likes: 45,
    comments: 7,
    featured: false,
  },
  {
    id: 7,
    title: "Les bénéfices du bénévolat pour les jeunes",
    excerpt:
      "Pourquoi le bénévolat est une expérience enrichissante pour le développement personnel et professionnel.",
    content:
      "Le bénévolat offre de nombreux avantages, tant pour la communauté que pour le bénévole. Découvrez les bénéfices...",
    category: "social",
    author: "Ahmed Ben Ali",
    date: "5 Décembre 2025",
    readTime: "4 min",
    image: "volunteer",
    tags: ["Bénévolat", "Engagement", "Jeunesse"],
    views: 389,
    likes: 134,
    comments: 28,
    featured: false,
  },
  {
    id: 8,
    title: "Innovation sociale : les nouvelles tendances",
    excerpt:
      "Les tendances innovantes qui transforment le secteur social et communautaire.",
    content:
      "L'innovation sociale est en pleine expansion. Découvrez les nouvelles tendances qui façonnent le secteur...",
    category: "community",
    author: "Sana Mansouri",
    date: "20 Novembre 2025",
    readTime: "8 min",
    image: "innovation",
    tags: ["Innovation", "Social", "Tendances"],
    views: 156,
    likes: 78,
    comments: 9,
    featured: false,
  },
];

export const heroData = {
  badge: {
    icon: <FaNewspaper />,
    text: "Blog JCI Sbikha",
  },
  title: "Découvrez Nos",
  highlight: "Articles et Actualités",
  description:
    "Des articles inspirants sur le leadership, la communauté, l'éducation et l'innovation sociale.",
};

export const sectionHeaders = {
  featured: {
    title: "Articles à la Une",
    subtitle: "Nos contenus les plus récents et pertinents",
  },
  all: {
    title: "Tous les Articles",
    subtitle: (count) => `${count} articles disponibles`,
  },
};

export const newsletterData = {
  title: "Abonnez-vous à notre Newsletter",
  text: "Recevez nos derniers articles et actualités directement dans votre boîte mail.",
  placeholder: "Votre adresse email",
  buttonText: "S'abonner",
};

export const paginationConfig = {
  itemsPerPage: 6,
};

export const shareButtons = [
  { icon: <FaFacebook />, name: "Facebook" },
  { icon: <FaTwitter />, name: "Twitter" },
  { icon: <FaLinkedin />, name: "LinkedIn" },
  { icon: <FaWhatsapp />, name: "WhatsApp" },
  { icon: <FaLink />, name: "Link" },
];

export const engagementButtons = [
  { icon: <FaHeart />, label: "Likes" },
  { icon: <FaComment />, label: "Comments" },
  { icon: <FaBookmark />, label: "Bookmark" },
];