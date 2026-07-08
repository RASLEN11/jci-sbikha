// Utils/Gallery.js

import {
  FaImages,
  FaCamera,
  FaUsers,
  FaGraduationCap,
  FaCalendarAlt,
  FaUser,
  FaDownload,
  FaShare
} from 'react-icons/fa';

export const albums = [
  { id: 'all', label: 'Tous', icon: <FaImages /> },
  { id: 'events', label: 'Événements', icon: <FaCalendarAlt /> },
  { id: 'projects', label: 'Projets', icon: <FaUser /> },
  { id: 'community', label: 'Communauté', icon: <FaUsers /> },
  { id: 'training', label: 'Formations', icon: <FaGraduationCap /> }
];

export const galleryImages = [
  {
    id: 1,
    title: "Leadership Academy 2026",
    description: "Session de formation en leadership avec 50 participants",
    category: 'events',
    date: '15 Juin 2026',
    location: 'Sbikha, Tunisie',
    photographer: 'Ahmed Ben Ali',
    likes: 45,
    views: 234,
    tags: ['Leadership', 'Formation', 'Jeunesse']
  },
  {
    id: 2,
    title: "Distribution de fournitures scolaires",
    description: "Campagne de solidarité avec les enfants de Sbikha",
    category: 'projects',
    date: '1 Septembre 2026',
    location: 'Écoles de Sbikha',
    photographer: 'Sana Mansouri',
    likes: 67,
    views: 189,
    tags: ['Solidarité', 'Éducation', 'Enfants']
  },
  {
    id: 3,
    title: "Innovation Hub - Inauguration",
    description: "Ouverture du nouvel espace de co-working à Sbikha",
    category: 'events',
    date: '20 Juillet 2026',
    location: 'Innovation Hub, Sbikha',
    photographer: 'Mohamed Trabelsi',
    likes: 89,
    views: 312,
    tags: ['Innovation', 'Entrepreneuriat', 'Co-working']
  },
  {
    id: 4,
    title: "Sbikha Verte - Plantation d'arbres",
    description: "Campagne de reboisement avec 200 bénévoles",
    category: 'projects',
    date: '10 Mai 2026',
    location: 'Parc de Sbikha',
    photographer: 'Leila Bouazizi',
    likes: 112,
    views: 456,
    tags: ['Environnement', 'Écologie', 'Bénévolat']
  },
  {
    id: 5,
    title: "Atelier de leadership digital",
    description: "Formation aux compétences numériques pour les jeunes",
    category: 'training',
    date: '5 Août 2026',
    location: 'Centre Culturel de Sbikha',
    photographer: 'Karim Saadi',
    likes: 56,
    views: 278,
    tags: ['Digital', 'Formation', 'Leadership']
  },
  {
    id: 6,
    title: "Journée de solidarité",
    description: "Distribution de repas aux familles vulnérables",
    category: 'community',
    date: '25 Juin 2026',
    location: 'Sbikha, Tunisie',
    photographer: 'Nadia Gharbi',
    likes: 78,
    views: 156,
    tags: ['Solidarité', 'Communauté', 'Entraide']
  },
  {
    id: 7,
    title: "Gala de reconnaissance JCI Sbikha",
    description: "Célébration des 8 ans d'impact de JCI Sbikha",
    category: 'events',
    date: '5 Janvier 2026',
    location: 'Salle des Fêtes, Sbikha',
    photographer: 'Ahmed Ben Ali',
    likes: 134,
    views: 389,
    tags: ['Célébration', 'Reconnaissance', 'Anniversaire']
  },
  {
    id: 8,
    title: "Atelier environnement dans les écoles",
    description: "Sensibilisation des élèves à la protection de l'environnement",
    category: 'training',
    date: '15 Mars 2026',
    location: 'Écoles primaires de Sbikha',
    photographer: 'Sana Mansouri',
    likes: 45,
    views: 201,
    tags: ['Éducation', 'Environnement', 'Enfants']
  },
  {
    id: 9,
    title: "Forum des jeunes leaders",
    description: "Rencontre des jeunes leaders de la région de Sbikha",
    category: 'events',
    date: '15 Octobre 2026',
    location: 'Centre Culturel de Sbikha',
    photographer: 'Mohamed Trabelsi',
    likes: 92,
    views: 345,
    tags: ['Leadership', 'Jeunesse', 'Réseautage']
  },
  {
    id: 10,
    title: "Campagne de nettoyage de la ville",
    description: "Action citoyenne pour une ville plus propre",
    category: 'community',
    date: '20 Avril 2026',
    location: 'Sbikha, Tunisie',
    photographer: 'Leila Bouazizi',
    likes: 73,
    views: 267,
    tags: ['Environnement', 'Citoyenneté', 'Propreté']
  },
  {
    id: 11,
    title: "Formation en entrepreneuriat",
    description: "Programme d'accompagnement des jeunes entrepreneurs",
    category: 'training',
    date: '10 Novembre 2026',
    location: 'Innovation Hub, Sbikha',
    photographer: 'Karim Saadi',
    likes: 88,
    views: 298,
    tags: ['Entrepreneuriat', 'Formation', 'Innovation']
  },
  {
    id: 12,
    title: "Festival culturel de Sbikha",
    description: "Célébration du patrimoine culturel local",
    category: 'community',
    date: '25 Décembre 2026',
    location: 'Place de la Ville, Sbikha',
    photographer: 'Nadia Gharbi',
    likes: 156,
    views: 523,
    tags: ['Culture', 'Patrimoine', 'Festival']
  }
];

export const heroData = {
  badge: {
    icon: <FaCamera />,
    text: "Galerie"
  },
  title: "Nos Moments",
  highlight: "en Images",
  description: "Découvrez les moments forts de JCI Sbikha à travers notre galerie photos."
};

export const sectionHeaders = {
  gallery: {
    title: "Galerie Photos",
    subtitle: (count) => `${count} photos disponibles`
  }
};

export const lightboxButtons = [
  { icon: <FaDownload />, label: "Télécharger" },
  { icon: <FaShare />, label: "Partager" }
];

export const albumLabelMap = {
  all: "Tous",
  events: "Événements",
  projects: "Projets",
  community: "Communauté",
  training: "Formations"
};