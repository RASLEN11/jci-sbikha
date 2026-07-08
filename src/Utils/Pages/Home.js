// Utils/Home.js

import {
  FaUsers,
  FaCalendarAlt,
  FaAward,
  FaHandsHelping,
  FaGlobe,
  FaShieldAlt,
  FaEnvelope
} from "react-icons/fa";
import { MdEmojiEvents, MdLightbulb } from "react-icons/md";

export const stats = [
  {
    icon: <FaUsers />,
    value: "120+",
    label: "Membres Actifs",
    description: "Jeunes leaders engagés",
  },
  {
    icon: <FaCalendarAlt />,
    value: "24+",
    label: "Événements 2026",
    description: "Programmes et formations",
  },
  {
    icon: <FaAward />,
    value: "8",
    label: "Projets Communautaires",
    description: "Impact positif durable",
  },
  {
    icon: <FaHandsHelping />,
    value: "500+",
    label: "Bénéficiaires",
    description: "Communauté touchée",
  },
];

export const projects = [
  {
    icon: <MdEmojiEvents />,
    title: "Leadership Academy",
    description:
      "Programme de développement des compétences de leadership pour les jeunes de Sbikha.",
    impact: "+45 participants",
    color: "#4CC4D1",
  },
  {
    icon: <FaHandsHelping />,
    title: "Solidarité Scolaire",
    description:
      "Distribution de fournitures scolaires et soutien éducatif pour les élèves défavorisés.",
    impact: "200 enfants aidés",
    color: "#089DC3",
  },
  {
    icon: <MdLightbulb />,
    title: "Innovation Hub",
    description:
      "Espace de co-working et d'innovation pour les entrepreneurs locaux de la région.",
    impact: "15 startups",
    color: "#121245",
  },
  {
    icon: <FaGlobe />,
    title: "Impact Environnemental",
    description:
      "Campagnes de sensibilisation et actions écologiques pour un Sbikha plus vert.",
    impact: "500 arbres plantés",
    color: "#3B6B7A",
  },
];

export const testimonials = [
  {
    name: "Ahmed Ben Ali",
    role: "Ancien Président",
    quote:
      "JCI Sbikha m'a donné les outils pour devenir un leader dans ma communauté. Une expérience transformative.",
  },
  {
    name: "Sana Mansouri",
    role: "Membre Active",
    quote:
      "L'engagement et la solidarité au sein de JCI Sbikha sont exceptionnels. Chaque projet est une aventure humaine.",
  },
];

export const events = [
  {
    date: "15 Juil 2026",
    title: "Forum des Leaders",
    location: "Sbikha Center",
    type: "Formation",
  },
  {
    date: "20 Juil 2026",
    title: "Journée de Solidarité",
    location: "Écoles de Sbikha",
    type: "Action Sociale",
  },
  {
    date: "5 Août 2026",
    title: "Gala de Reconnaissance",
    location: "Salle des Fêtes",
    type: "Célébration",
  },
];

export const heroData = {
  badge: "JCI Sbikha Officiel",
  title: "JCI Sbikha",
  subtitle: "Leadership & Impact",
  description:
    "Rejoignez une communauté de jeunes leaders engagés pour un changement positif à Sbikha et dans la région. Ensemble, nous construisons l'avenir.",
  buttons: [
    {
      text: "Rejoindre JCI",
      link: "/join",
      variant: "primary",
      icon: true,
    },
    {
      text: "En Savoir Plus",
      link: "/about",
      variant: "secondary",
      icon: false,
    },
  ],
};

export const missionData = {
  badge: "Notre Mission",
  title: "Créer des Leaders pour un",
  highlight: "Monde Meilleur",
  description:
    "JCI Sbikha est une organisation de jeunes leaders dédiée au développement personnel, professionnel et communautaire. Nous croyons que chaque jeune a le potentiel de faire une différence.",
  values: [
    { label: "Leadership", color: "#4CC4D1" },
    { label: "Innovation", color: "#089DC3" },
    { label: "Solidarité", color: "#121245" },
  ],
};

export const sectionHeaders = {
  stats: {
    title: "L'Impact de JCI Sbikha",
    subtitle: "Des chiffres qui témoignent de notre engagement",
  },
  projects: {
    title: "Nos Projets",
    subtitle: "Des initiatives qui transforment la communauté",
    viewAllText: "Voir Tous les Projets",
    viewAllLink: "/projects",
  },
  events: {
    title: "Prochains Événements",
    subtitle: "Rejoignez-nous pour ces moments forts",
  },
  testimonials: {
    title: "Témoignages",
    subtitle: "Ils ont fait l'expérience JCI Sbikha",
  },
};

export const ctaData = {
  title: "Prêt à Faire la Différence ?",
  description:
    "Rejoignez JCI Sbikha et devenez un acteur du changement dans votre communauté. Ensemble, nous pouvons construire un avenir meilleur.",
  buttons: [
    {
      text: "Devenir Membre",
      link: "/join",
      variant: "primary",
    },
    {
      text: "Contactez-nous",
      link: "/contact",
      variant: "secondary",
    },
  ],
  quickLinks: [
    { name: "À Propos", icon: <FaShieldAlt />, to: "/about" },
    { name: "Nos Projets", icon: <FaHandsHelping />, to: "/projects" },
    { name: "Adhérer", icon: <FaUsers />, to: "/join" },
    { name: "Actualités", icon: <FaCalendarAlt />, to: "/news-events" },
    { name: "Contact", icon: <FaEnvelope />, to: "/contact" },
  ],
};