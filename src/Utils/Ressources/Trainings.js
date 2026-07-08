// Utils/Trainings.js

import {
  FaGraduationCap,
  FaTrophy,
  FaUsers,
  FaCertificate,
  FaLaptop,
  FaHandsHelping,
  FaRocket
} from 'react-icons/fa';

export const categories = [
  { id: 'all', label: 'Tous', icon: <FaGraduationCap /> },
  { id: 'leadership', label: 'Leadership', icon: <FaTrophy /> },
  { id: 'digital', label: 'Digital', icon: <FaLaptop /> },
  { id: 'entrepreneurship', label: 'Entrepreneuriat', icon: <FaRocket /> },
  { id: 'softskills', label: 'Soft Skills', icon: <FaHandsHelping /> },
  { id: 'professional', label: 'Professionnel', icon: <FaCertificate /> }
];

export const trainingsData = [
  {
    id: 1,
    title: "Leadership Academy",
    category: "leadership",
    icon: <FaTrophy />,
    description: "Programme de développement du leadership pour les jeunes de 18 à 35 ans.",
    fullDescription: "Leadership Academy est un programme intensif de 8 semaines conçu pour développer les compétences de leadership, la communication et la gestion de projet. Les participants bénéficient d'ateliers pratiques, de coaching individuel et de projets concrets.",
    duration: "8 semaines",
    schedule: "Samedis 9h-17h",
    location: "Centre Culturel de Sbikha",
    format: "Présentiel",
    capacity: 30,
    registered: 25,
    price: "Gratuit",
    instructor: "Ahmed Ben Ali",
    level: "Débutant à Intermédiaire",
    skills: ["Leadership", "Communication", "Gestion de projet", "Travail d'équipe"],
    certification: "Certificat JCI Sbikha",
    status: "Inscriptions Ouvertes",
    featured: true,
    startDate: "15 Octobre 2026",
    image: "leadership",
    color: "#4CC4D1"
  },
  {
    id: 2,
    title: "Marketing Digital pour Entrepreneurs",
    category: "digital",
    icon: <FaLaptop />,
    description: "Maîtrisez les outils du marketing digital pour développer votre activité.",
    fullDescription: "Ce programme de 6 semaines vous apprend à utiliser les outils du marketing digital : réseaux sociaux, SEO, email marketing, publicité en ligne et analytics. Idéal pour les entrepreneurs et porteurs de projets.",
    duration: "6 semaines",
    schedule: "Mercredis 18h-21h",
    location: "Innovation Hub - Sbikha",
    format: "Mixte (Présentiel + En ligne)",
    capacity: 25,
    registered: 18,
    price: "Gratuit",
    instructor: "Nadia Gharbi",
    level: "Intermédiaire",
    skills: ["Marketing digital", "Réseaux sociaux", "SEO", "Analytics"],
    certification: "Certificat JCI Sbikha",
    status: "Inscriptions Ouvertes",
    featured: true,
    startDate: "5 Novembre 2026",
    image: "digital",
    color: "#007aff"
  },
  {
    id: 3,
    title: "Entrepreneuriat & Innovation",
    category: "entrepreneurship",
    icon: <FaRocket />,
    description: "Transformez votre idée en projet entrepreneurial viable.",
    fullDescription: "Ce programme d'accompagnement vous guide à travers toutes les étapes de la création d'entreprise : validation d'idée, business plan, financement, marketing et gestion. Un mentorat personnalisé est proposé.",
    duration: "12 semaines",
    schedule: "Jeudis 18h-21h",
    location: "Innovation Hub - Sbikha",
    format: "Présentiel",
    capacity: 20,
    registered: 12,
    price: "Gratuit",
    instructor: "Karim Saadi",
    level: "Tous niveaux",
    skills: ["Business plan", "Financement", "Marketing", "Gestion"],
    certification: "Certificat JCI Sbikha",
    status: "Inscriptions Ouvertes",
    featured: false,
    startDate: "20 Novembre 2026",
    image: "entrepreneurship",
    color: "#ff9500"
  },
  {
    id: 4,
    title: "Communication & Prise de Parole",
    category: "softskills",
    icon: <FaHandsHelping />,
    description: "Développez vos compétences en communication et prise de parole en public.",
    fullDescription: "Ce programme de 4 semaines vous aide à maîtriser l'art de la communication : expression orale, langage corporel, gestion du stress et persuasion. Des exercices pratiques et des mises en situation sont proposés.",
    duration: "4 semaines",
    schedule: "Lundis 18h-21h",
    location: "Centre Culturel de Sbikha",
    format: "Présentiel",
    capacity: 25,
    registered: 20,
    price: "Gratuit",
    instructor: "Sana Mansouri",
    level: "Débutant",
    skills: ["Communication", "Prise de parole", "Persuasion", "Confiance en soi"],
    certification: "Certificat JCI Sbikha",
    status: "Complet",
    featured: false,
    startDate: "10 Septembre 2026",
    image: "communication",
    color: "#ff3b30"
  },
  {
    id: 5,
    title: "Gestion de Projet pour Leaders",
    category: "leadership",
    icon: <FaTrophy />,
    description: "Apprenez les méthodologies de gestion de projet appliquées au leadership.",
    fullDescription: "Ce programme de 6 semaines vous initie aux méthodologies de gestion de projet (Agile, Scrum, Waterfall) et à leur application dans le contexte du leadership et du management d'équipe.",
    duration: "6 semaines",
    schedule: "Mardis 18h-21h",
    location: "Centre Culturel de Sbikha",
    format: "Présentiel",
    capacity: 25,
    registered: 15,
    price: "Gratuit",
    instructor: "Mohamed Trabelsi",
    level: "Intermédiaire",
    skills: ["Gestion de projet", "Agile", "Scrum", "Leadership"],
    certification: "Certificat JCI Sbikha",
    status: "Inscriptions Ouvertes",
    featured: false,
    startDate: "15 Janvier 2027",
    image: "project",
    color: "#34c759"
  },
  {
    id: 6,
    title: "Compétences Numériques Avancées",
    category: "digital",
    icon: <FaLaptop />,
    description: "Perfectionnez vos compétences numériques pour le monde professionnel.",
    fullDescription: "Ce programme avancé couvre les outils numériques essentiels : analyse de données, automatisation, intelligence artificielle, et cybersécurité. Idéal pour les professionnels souhaitant se perfectionner.",
    duration: "8 semaines",
    schedule: "Vendredis 18h-21h",
    location: "Innovation Hub - Sbikha",
    format: "En ligne",
    capacity: 30,
    registered: 10,
    price: "Gratuit",
    instructor: "Expert en Digital",
    level: "Avancé",
    skills: ["Data Analysis", "AI", "Cybersécurité", "Automatisation"],
    certification: "Certificat JCI Sbikha",
    status: "Inscriptions Ouvertes",
    featured: false,
    startDate: "1 Mars 2027",
    image: "digital-advanced",
    color: "#6c757d"
  },
  {
    id: 7,
    title: "Leadership & Développement Personnel",
    category: "leadership",
    icon: <FaTrophy />,
    description: "Un programme complet pour développer votre potentiel de leader.",
    fullDescription: "Ce programme de 10 semaines explore les dimensions du leadership personnel : intelligence émotionnelle, gestion du stress, prise de décision et développement de la résilience. Une approche holistique du leadership.",
    duration: "10 semaines",
    schedule: "Samedis 9h-13h",
    location: "Centre Culturel de Sbikha",
    format: "Présentiel",
    capacity: 25,
    registered: 22,
    price: "Gratuit",
    instructor: "Ahmed Ben Ali",
    level: "Tous niveaux",
    skills: ["Intelligence émotionnelle", "Résilience", "Décision", "Gestion du stress"],
    certification: "Certificat JCI Sbikha",
    status: "Complet",
    featured: false,
    startDate: "5 Avril 2026",
    image: "personal-leadership",
    color: "#4CC4D1"
  },
  {
    id: 8,
    title: "Entrepreneuriat Social",
    category: "entrepreneurship",
    icon: <FaRocket />,
    description: "Créez un projet entrepreneurial à impact social positif.",
    fullDescription: "Ce programme vous guide dans la création d'un projet entrepreneurial qui répond à un besoin social. Découvrez les modèles d'entreprises sociales, le financement alternatif et la mesure d'impact.",
    duration: "8 semaines",
    schedule: "Mercredis 18h-21h",
    location: "Innovation Hub - Sbikha",
    format: "Mixte (Présentiel + En ligne)",
    capacity: 20,
    registered: 8,
    price: "Gratuit",
    instructor: "Leila Bouazizi",
    level: "Intermédiaire",
    skills: ["Entrepreneuriat social", "Impact", "Financement", "Modèles d'affaires"],
    certification: "Certificat JCI Sbikha",
    status: "Inscriptions Ouvertes",
    featured: false,
    startDate: "10 Mars 2027",
    image: "social-entrepreneurship",
    color: "#ff1493"
  }
];

export const heroData = {
  badge: {
    icon: <FaGraduationCap />,
    text: "Formations"
  },
  title: "Développez Vos",
  highlight: "Compétences",
  description: "Des formations de qualité pour développer votre leadership, vos compétences digitales et votre potentiel professionnel.",
  stats: [
    { value: 8, label: "Formations" },
    { value: "150+", label: "Participants" },
    { value: 8, label: "Formateurs" }
  ]
};

export const sectionHeaders = {
  featured: {
    title: "Formations à la Une",
    subtitle: "Nos programmes les plus populaires"
  },
  all: {
    title: "Toutes les Formations",
    subtitle: (count) => `${count} formations disponibles`
  }
};

export const benefitsData = {
  title: "Pourquoi Choisir nos Formations ?",
  items: [
    {
      icon: <FaTrophy />,
      title: "Formateurs Qualifiés",
      description: "Des experts passionnés et expérimentés dans leur domaine"
    },
    {
      icon: <FaCertificate />,
      title: "Certification Reconnue",
      description: "Des certificats reconnus par les institutions et entreprises"
    },
    {
      icon: <FaUsers />,
      title: "Réseautage",
      description: "Rejoignez une communauté de 120+ jeunes leaders engagés"
    },
    {
      icon: <FaRocket />,
      title: "100% Gratuit",
      description: "Des formations de qualité accessibles à tous sans frais"
    }
  ]
};

export const statusConfig = {
  "Inscriptions Ouvertes": {
    color: "#34c759",
    bg: "rgba(52, 199, 89, 0.12)"
  },
  "Complet": {
    color: "#ff3b30",
    bg: "rgba(255, 59, 48, 0.12)"
  },
  "default": {
    color: "#ff9500",
    bg: "rgba(255, 149, 0, 0.12)"
  }
};

export const categoryLabelMap = {
  leadership: "Leadership",
  digital: "Digital",
  entrepreneurship: "Entrepreneuriat",
  softskills: "Soft Skills",
  professional: "Professionnel"
};

export const defaultColor = "#4CC4D1";