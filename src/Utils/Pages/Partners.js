// Utils/Partners.js

import {
  FaBuilding,
  FaUniversity,
  FaUsers,
  FaGlobe,
  FaNetworkWired,
  FaLaptop,
  FaLeaf,
  FaShieldAlt,
  FaHospital,
  FaTools,
  FaDumbbell,
  FaPaintBrush,
  FaGraduationCap,
  FaHandsHelping,
  FaHeart,
  FaCrown,
  FaBookOpen,
  FaHandshake,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

export const categories = [
  { id: "all", label: "Tous", icon: <FaGlobe /> },
  { id: "corporate", label: "Entreprises", icon: <FaBuilding /> },
  { id: "institutional", label: "Institutionnel", icon: <FaUniversity /> },
  { id: "community", label: "Communautaire", icon: <FaUsers /> },
  { id: "international", label: "International", icon: <FaNetworkWired /> },
];

export const partners = [
  {
    id: 1,
    name: "TechInnov Tunisia",
    category: "corporate",
    icon: <FaLaptop />,
    logo: "TI",
    description:
      "Leader en solutions technologiques et innovation numérique en Tunisie.",
    partnership:
      "Soutien technologique et infrastructure pour les projets numériques.",
    impact: "40+ étudiants formés aux compétences digitales",
    color: "#089DC3",
    years: "2020 - Présent",
    testimonial:
      "JCI Sbikha est un partenaire de confiance pour la formation des jeunes talents technologiques de la région.",
    achievements: [
      "Formation certifiante en développement",
      "Hackathons organisés",
      "Mentorat pour startups",
    ],
  },
  {
    id: 2,
    name: "GreenEnergy SA",
    category: "corporate",
    icon: <FaLeaf />,
    logo: "GE",
    description:
      "Entreprise spécialisée dans les énergies renouvelables et le développement durable.",
    partnership:
      "Soutien aux initiatives environnementales et campagnes de sensibilisation.",
    impact: "500+ arbres plantés, 3 campagnes de sensibilisation",
    color: "#34c759",
    years: "2021 - Présent",
    testimonial:
      "Travailler avec JCI Sbikha pour un avenir plus vert est une expérience enrichissante.",
    achievements: [
      'Campagne "Sbikha Verte"',
      "Ateliers sur les énergies renouvelables",
      "Installation de panneaux solaires",
    ],
  },
  {
    id: 3,
    name: "FinSecure Bank",
    category: "corporate",
    icon: <FaShieldAlt />,
    logo: "FS",
    description:
      "Banque leader dans les services financiers sécurisés et l'éducation financière.",
    partnership:
      "Éducation financière et inclusion bancaire pour les jeunes.",
    impact: "200+ jeunes formés à la gestion financière",
    color: "#ff9500",
    years: "2019 - Présent",
    testimonial:
      "L'engagement de JCI Sbikha pour l'éducation financière est exemplaire.",
    achievements: [
      "Ateliers de gestion financière",
      "Programme d'épargne pour étudiants",
      "Soutien à l'entrepreneuriat",
    ],
  },
  {
    id: 4,
    name: "MediCare Plus",
    category: "corporate",
    icon: <FaHospital />,
    logo: "MC",
    description:
      "Prestataire de services de santé et de bien-être de premier plan.",
    partnership:
      "Campagnes de santé publique et sensibilisation au bien-être.",
    impact: "300+ bénéficiaires de soins gratuits",
    color: "#ff3b30",
    years: "2022 - Présent",
    testimonial:
      "JCI Sbikha nous aide à toucher les communautés qui ont besoin de soins de santé.",
    achievements: [
      "Campagnes de vaccination",
      "Consultations médicales gratuites",
      "Ateliers de nutrition",
    ],
  },
  {
    id: 5,
    name: "Ministère de la Jeunesse",
    category: "institutional",
    icon: <FaUniversity />,
    logo: "MJ",
    description:
      "Ministère dédié au développement de la jeunesse et des sports.",
    partnership:
      "Programmes de leadership et de développement des compétences.",
    impact: "100+ jeunes formés dans le cadre des programmes nationaux",
    color: "#121245",
    years: "2018 - Présent",
    testimonial:
      "JCI Sbikha est un acteur clé dans la formation des jeunes leaders de la région.",
    achievements: [
      "Programme national de leadership",
      "Certification des compétences",
      "Soutien aux initiatives jeunesse",
    ],
  },
  {
    id: 6,
    name: "Municipalité de Sbikha",
    category: "institutional",
    icon: <FaBuilding />,
    logo: "MS",
    description: "Administration locale de la ville de Sbikha.",
    partnership: "Projets urbains, culturels et communautaires.",
    impact: "5 projets d'amélioration urbaine réalisés",
    color: "#4CC4D1",
    years: "2019 - Présent",
    testimonial:
      "Une collaboration fructueuse pour le développement de notre ville.",
    achievements: [
      "Rénovation d'espaces publics",
      "Événements culturels",
      "Projets de nettoyage et embellissement",
    ],
  },
  {
    id: 7,
    name: "Université de Kairouan",
    category: "institutional",
    icon: <FaGraduationCap />,
    logo: "UK",
    description: "Institution académique de référence dans la région.",
    partnership: "Programmes de formation, recherche et innovation.",
    impact: "150+ étudiants impliqués dans des projets JCI",
    color: "#6c757d",
    years: "2020 - Présent",
    testimonial:
      "JCI Sbikha offre une plateforme exceptionnelle pour l'engagement étudiant.",
    achievements: [
      "Conférences académiques",
      "Projets de recherche",
      "Stages et opportunités",
    ],
  },
  {
    id: 8,
    name: "Centre de Formation Professionnelle",
    category: "institutional",
    icon: <FaTools />,
    logo: "CFP",
    description: "Centre dédié à la formation professionnelle et technique.",
    partnership: "Ateliers de formation et perfectionnement des compétences.",
    impact: "80+ jeunes formés aux métiers techniques",
    color: "#ff9500",
    years: "2021 - Présent",
    testimonial:
      "Une collaboration qui prépare les jeunes aux métiers d'avenir.",
    achievements: [
      "Certification en métiers techniques",
      "Stages pratiques",
      "Insertion professionnelle",
    ],
  },
  {
    id: 9,
    name: "Association Solidarité Sbikha",
    category: "community",
    icon: <FaHandsHelping />,
    logo: "SS",
    description: "Association locale dédiée à la solidarité et l'entraide.",
    partnership:
      "Actions sociales et distribution d'aide aux populations vulnérables.",
    impact: "200+ familles aidées pendant les campagnes",
    color: "#ff3b30",
    years: "2019 - Présent",
    testimonial:
      "JCI Sbikha est un partenaire de premier plan pour nos actions sociales.",
    achievements: [
      "Distribution alimentaire",
      "Aide aux familles vulnérables",
      "Programmes de solidarité",
    ],
  },
  {
    id: 10,
    name: "Club Culturel de Sbikha",
    category: "community",
    icon: <FaPaintBrush />,
    logo: "CCS",
    description:
      "Club dédié à la promotion de la culture et des arts à Sbikha.",
    partnership: "Événements culturels, expositions et festivals.",
    impact: "15 événements culturels organisés",
    color: "#ff1493",
    years: "2020 - Présent",
    testimonial: "Un partenariat qui enrichit la vie culturelle de Sbikha.",
    achievements: [
      "Festival de la musique",
      "Expositions d'art",
      "Ateliers créatifs",
    ],
  },
  {
    id: 11,
    name: "ONG Espoir pour Tous",
    category: "community",
    icon: <FaHeart />,
    logo: "ET",
    description:
      "Organisation non gouvernementale dédiée au développement social.",
    partnership: "Projets de développement social et communautaire.",
    impact: "100+ enfants soutenus dans leur éducation",
    color: "#34c759",
    years: "2021 - Présent",
    testimonial:
      "JCI Sbikha apporte une énergie et un engagement précieux à nos projets.",
    achievements: [
      "Programmes éducatifs",
      "Soutien scolaire",
      "Campagnes de sensibilisation",
    ],
  },
  {
    id: 12,
    name: "Collectif Sportif Sbikha",
    category: "community",
    icon: <FaDumbbell />,
    logo: "CSS",
    description:
      "Collectif pour la promotion du sport et d'un mode de vie sain.",
    partnership: "Événements sportifs, tournois et initiatives de santé.",
    impact: "300+ participants aux événements sportifs",
    color: "#007aff",
    years: "2022 - Présent",
    testimonial:
      "Le partenariat avec JCI Sbikha dynamise notre communauté sportive.",
    achievements: [
      "Tournois de football",
      "Courses de solidarité",
      "Ateliers de santé",
    ],
  },
  {
    id: 13,
    name: "JCI International",
    category: "international",
    icon: <FaGlobe />,
    logo: "JCI",
    description:
      "Jeune Chambre Internationale - Réseau mondial de jeunes leaders.",
    partnership: "Programmes internationaux, échanges et formations.",
    impact: "Accès au réseau de 200+ pays",
    color: "#121245",
    years: "2018 - Présent",
    testimonial:
      "JCI Sbikha est un membre actif et inspirant du réseau JCI mondial.",
    achievements: [
      "Participation aux conférences internationales",
      "Échanges interculturels",
      "Programmes globaux",
    ],
  },
  {
    id: 14,
    name: "AIESEC Tunisia",
    category: "international",
    icon: <FaNetworkWired />,
    logo: "AT",
    description:
      "Organisation internationale de développement des compétences en leadership.",
    partnership: "Échanges de jeunes talents et programmes de développement.",
    impact: "50+ échanges internationaux facilités",
    color: "#ff9500",
    years: "2020 - Présent",
    testimonial:
      "Un partenariat qui ouvre des horizons internationaux aux jeunes.",
    achievements: [
      "Programmes d'échange",
      "Formations en leadership",
      "Projets internationaux",
    ],
  },
  {
    id: 15,
    name: "Rotary Club Tunis",
    category: "international",
    icon: <FaCrown />,
    logo: "RC",
    description: "Organisation internationale de service communautaire.",
    partnership: "Projets communautaires et actions humanitaires.",
    impact: "5 projets conjoints réalisés",
    color: "#8b0000",
    years: "2019 - Présent",
    testimonial:
      "La collaboration avec JCI Sbikha renforce notre impact local.",
    achievements: [
      "Projets humanitaires",
      "Campagnes de santé",
      "Événements de sensibilisation",
    ],
  },
  {
    id: 16,
    name: "UNESCO Tunisie",
    category: "international",
    icon: <FaBookOpen />,
    logo: "UN",
    description:
      "Organisation des Nations Unies pour l'éducation, la science et la culture.",
    partnership: "Programmes éducatifs, culturels et scientifiques.",
    impact: "Projets éducatifs touchant 500+ bénéficiaires",
    color: "#003366",
    years: "2021 - Présent",
    testimonial:
      "JCI Sbikha contribue activement à la promotion de l'éducation et de la culture.",
    achievements: [
      "Ateliers éducatifs",
      "Promotion du patrimoine culturel",
      "Programmes scientifiques",
    ],
  },
];

export const heroData = {
  badge: {
    icon: <FaHandshake />,
    text: "Nos Partenaires",
  },
  title: "Construisons ensemble",
  highlight: "Un Avenir Meilleur",
  description:
    "Découvrez les organisations et institutions qui nous accompagnent dans notre mission de développement des jeunes leaders à Sbikha.",
  stats: [
    { value: "16+", label: "Partenaires Actifs" },
    { value: "5", label: "Années de Collaboration" },
    { value: "2000+", label: "Bénéficiaires Touchés" },
  ],
};

export const benefits = [
  {
    icon: <FaNetworkWired />,
    title: "Visibilité",
    desc: "Accès à notre réseau de 120+ membres et notre communauté élargie",
  },
  {
    icon: <FaHandsHelping />,
    title: "Impact Social",
    desc: "Contribuez directement au développement de la communauté",
  },
  {
    icon: <FaAward />,
    title: "Reconnaissance",
    desc: "Valorisation de votre engagement auprès de nos publics",
  },
  {
    icon: <FaChartLine />,
    title: "Innovation",
    desc: "Accès à des projets innovants et des talents prometteurs",
  },
];

export const ctaData = {
  title: "Vous Souhaitez Nous Rejoindre ?",
  description:
    "Devenez partenaire de JCI Sbikha et contribuez à notre mission de développement des jeunes leaders. Ensemble, nous pouvons faire une différence durable dans la communauté.",
  buttons: [
    {
      text: "Devenir Partenaire",
      link: "/contact",
      variant: "primary",
    },
    {
      text: "Contactez-nous",
      link: "/about",
      variant: "secondary",
    },
  ],
};

export const sectionHeaders = {
  featured: {
    title: "Partenaires Phares",
    subtitle: "Des collaborations qui font la différence",
  },
  all: {
    title: "Tous Nos Partenaires",
    subtitle: (count) => `${count} partenaires engagés à nos côtés`,
  },
  testimonials: {
    title: "Ils Témoignent",
    subtitle: "Ce que nos partenaires disent de notre collaboration",
  },
  benefits: {
    title: "Pourquoi Devenir Partenaire ?",
    subtitle: "Rejoignez notre réseau de partenaires engagés pour un impact durable",
  },
};

export const categoryIconMap = {
  corporate: <FaBuilding />,
  institutional: <FaUniversity />,
  community: <FaUsers />,
  international: <FaGlobe />,
};