// Utils/About.js

import {
  FaUsers,
  FaHandsHelping,
  FaAward,
  FaGlobe,
  FaBullseye,
  FaEye,
  FaHeart,
  FaShieldAlt,
  FaCalendarCheck,
  FaUserGraduate,
  FaLeaf,
  FaLightbulb,
  FaRocket,
  FaHistory,
} from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

export const timelineData = [
  {
    year: "2018",
    title: "Fondation de JCI Sbikha",
    description:
      "Création de la Jeune Chambre Internationale de Sbikha par un groupe de jeunes leaders visionnaires.",
    icon: <FaHistory />,
  },
  {
    year: "2019",
    title: "Premier Projet Communautaire",
    description:
      'Lancement du projet "Solidarité Scolaire" avec la distribution de fournitures aux élèves défavorisés.',
    icon: <FaHandsHelping />,
  },
  {
    year: "2020",
    title: "Adaptation et Résilience",
    description:
      "Transition vers des programmes virtuels pour maintenir l'engagement pendant la pandémie.",
    icon: <FaRocket />,
  },
  {
    year: "2021",
    title: "Expansion des Projets",
    description:
      "Lancement de Leadership Academy et Innovation Hub, touchant plus de 200 bénéficiaires.",
    icon: <FaUserGraduate />,
  },
  {
    year: "2022",
    title: "Reconnaissance Régionale",
    description:
      'JCI Sbikha reçoit le prix du "Meilleur Projet Communautaire" au niveau de la zone.',
    icon: <FaAward />,
  },
  {
    year: "2023",
    title: "Impact Environnemental",
    description:
      'Lancement de la campagne "Sbikha Verte" avec plus de 500 arbres plantés.',
    icon: <FaLeaf />,
  },
  {
    year: "2024",
    title: "Nouveaux Horizons",
    description:
      "Partenariats stratégiques et projets d'envergure pour un impact durable.",
    icon: <FaGlobe />,
  },
  {
    year: "2025",
    title: "Innovation Continue",
    description:
      "Développement de nouveaux programmes et renforcement de la communauté.",
    icon: <FaLightbulb />,
  },
  {
    year: "2026",
    title: "8 Ans d'Impact",
    description:
      "Une communauté de 120+ membres actifs, 24+ événements annuels et 500+ bénéficiaires.",
    icon: <MdCelebration />,
  },
];

export const values = [
  {
    icon: <FaUsers />,
    title: "Leadership",
    description:
      "Nous formons des leaders responsables, capables de faire la différence dans leur communauté.",
    color: "#4CC4D1",
  },
  {
    icon: <FaHandsHelping />,
    title: "Solidarité",
    description:
      "L'entraide et la coopération sont au cœur de toutes nos actions et projets.",
    color: "#089DC3",
  },
  {
    icon: <FaGlobe />,
    title: "Ouverture",
    description:
      "Nous valorisons la diversité et l'ouverture aux autres cultures et perspectives.",
    color: "#121245",
  },
  {
    icon: <FaRocket />,
    title: "Innovation",
    description:
      "Nous encourageons la créativité et l'innovation pour relever les défis actuels.",
    color: "#3B6B7A",
  },
  {
    icon: <FaShieldAlt />,
    title: "Intégrité",
    description:
      "Nous agissons avec transparence, éthique et responsabilité dans toutes nos actions.",
    color: "#2F9DB2",
  },
];

export const teamMembers = [
  {
    name: "Ahmed Ben Ali",
    role: "Président",
    description:
      "Leader passionné avec 5 ans d'expérience dans le développement communautaire.",
    initials: "AB",
  },
  {
    name: "Sana Mansouri",
    role: "Vice-Présidente",
    description:
      "Experte en gestion de projets et développement des compétences.",
    initials: "SM",
  },
  {
    name: "Mohamed Trabelsi",
    role: "Secrétaire Général",
    description:
      "Organisateur hors pair, coordinateur de tous les événements majeurs.",
    initials: "MT",
  },
  {
    name: "Leila Bouazizi",
    role: "Trésorière",
    description:
      "Spécialiste en finance et gestion des ressources pour les projets.",
    initials: "LB",
  },
  {
    name: "Karim Saadi",
    role: "Responsable Projets",
    description:
      "Coordinateur des projets communautaires et programmes de formation.",
    initials: "KS",
  },
  {
    name: "Nadia Gharbi",
    role: "Responsable Communication",
    description:
      "Stratège en communication et relations publiques pour JCI Sbikha.",
    initials: "NG",
  },
];

export const achievements = [
  {
    number: "120+",
    label: "Membres Actifs",
    description: "Une communauté de jeunes leaders engagés",
  },
  {
    number: "24+",
    label: "Événements Annuels",
    description: "Formations, ateliers et actions solidaires",
  },
  {
    number: "8",
    label: "Projets Structurants",
    description: "Initiatives à impact durable",
  },
  {
    number: "500+",
    label: "Bénéficiaires",
    description: "Communauté touchée positivement",
  },
  {
    number: "2000+",
    label: "Heures de Bénévolat",
    description: "Engagement et dévouement des membres",
  },
  {
    number: "3",
    label: "Prix et Reconnaissances",
    description: "Excellence reconnue au niveau régional",
  },
];

export const coreStats = [
  {
    icon: <FaUsers />,
    value: "120+",
    label: "Membres",
    detail: "Jeunes leaders engagés",
  },
  {
    icon: <FaCalendarCheck />,
    value: "8",
    label: "Années",
    detail: "D'impact continu",
  },
  {
    icon: <FaAward />,
    value: "3",
    label: "Prix",
    detail: "Reconnaissance régionale",
  },
  {
    icon: <FaHandsHelping />,
    value: "500+",
    label: "Bénéficiaires",
    detail: "Communauté servie",
  },
];

export const tabs = [
  {
    id: "mission",
    icon: <FaBullseye />,
    label: "Mission & Vision",
  },
  {
    id: "history",
    icon: <FaHistory />,
    label: "Notre Histoire",
  },
  {
    id: "team",
    icon: <FaUsers />,
    label: "Équipe",
  },
  {
    id: "values",
    icon: <FaHeart />,
    label: "Valeurs",
  },
];

export const missionData = {
  title: "Notre Mission",
  description:
    "Développer les compétences de leadership des jeunes de Sbikha et de la région pour créer un impact positif durable dans la communauté.",
  points: [
    "Former des leaders responsables",
    "Réaliser des projets communautaires",
    "Promouvoir la solidarité",
  ],
  icon: <FaBullseye />,
};

export const visionData = {
  title: "Notre Vision",
  description:
    "Être une communauté de référence de jeunes leaders qui inspirent et transforment leur environnement par l'innovation, l'engagement et la solidarité.",
  points: [
    "Communauté inspirante",
    "Innovation constante",
    "Impact durable",
  ],
  icon: <FaEye />,
};

export const joinData = {
  title: "Rejoignez JCI Sbikha",
  description:
    "Devenez partie prenante d'une communauté dynamique de jeunes leaders engagés pour un avenir meilleur à Sbikha et dans la région.",
  benefits: [
    "Développez vos compétences de leadership",
    "Participez à des projets d'impact",
    "Rejoignez un réseau international",
  ],
};