// Utils/Join.js

import {
  FaUserPlus,
  FaHandsHelping,
  FaTrophy,
  FaGlobe,
  FaRocket,
  FaPhone,
  FaUser,
  FaRegEnvelope,
  FaInfoCircle,
  FaRegComment,
  FaStar,
  FaNetworkWired,
  FaCalendarAlt,
  FaUserGraduate,
  FaHeart
} from 'react-icons/fa';

export const benefits = [
  {
    icon: <FaUserGraduate />,
    title: 'Développement Personnel',
    description: 'Accédez à des formations en leadership, communication et gestion de projet.'
  },
  {
    icon: <FaNetworkWired />,
    title: 'Réseautage',
    description: 'Rejoignez un réseau de 120+ jeunes leaders engagés et connectés.'
  },
  {
    icon: <FaHandsHelping />,
    title: 'Impact Social',
    description: 'Participez à des projets communautaires qui font la différence.'
  },
  {
    icon: <FaGlobe />,
    title: 'Réseau International',
    description: 'Faites partie du réseau JCI présent dans plus de 100 pays.'
  },
  {
    icon: <FaTrophy />,
    title: 'Reconnaissance',
    description: 'Valorisez votre engagement avec des certifications et des prix.'
  },
  {
    icon: <FaRocket />,
    title: 'Innovation',
    description: 'Développez des projets innovants avec le soutien de la communauté.'
  }
];

export const testimonials = [
  {
    name: 'Ahmed Ben Ali',
    role: 'Président JCI Sbikha',
    text: 'Rejoindre JCI Sbikha a été une décision transformative. J\'ai développé des compétences de leadership et rencontré des personnes exceptionnelles.'
  },
  {
    name: 'Sana Mansouri',
    role: 'Membre Active',
    text: 'JCI Sbikha m\'a offert une plateforme pour contribuer à ma communauté et grandir en tant que leader. Une expérience inoubliable.'
  }
];

export const faqs = [
  {
    question: 'Qui peut rejoindre JCI Sbikha ?',
    answer: 'JCI Sbikha est ouverte à tous les jeunes âgés de 18 à 40 ans, passionnés par le leadership, le développement communautaire et l\'innovation sociale.'
  },
  {
    question: 'Y a-t-il des frais d\'adhésion ?',
    answer: 'L\'adhésion à JCI Sbikha est gratuite. Nous croyons que le leadership et l\'engagement communautaire doivent être accessibles à tous.'
  },
  {
    question: 'Quels sont les engagements en tant que membre ?',
    answer: 'En tant que membre, vous êtes invité à participer aux événements, contribuer aux projets communautaires et vous engager activement dans la vie de l\'association.'
  },
  {
    question: 'Comment se déroule le processus d\'adhésion ?',
    answer: 'Après avoir rempli le formulaire d\'adhésion, un membre de notre équipe vous contactera pour un entretien de motivation. Vous serez ensuite intégré à la communauté.'
  }
];

export const heroData = {
  badge: {
    icon: <FaUserPlus />,
    text: "Rejoignez-Nous"
  },
  title: "Devenez Membre de",
  highlight: "JCI Sbikha",
  description: "Rejoignez une communauté dynamique de jeunes leaders engagés pour un changement positif à Sbikha et dans la région.",
  stats: [
    { value: "120+", label: "Membres Actifs" },
    { value: "24+", label: "Événements/An" },
    { value: "8", label: "Années d'Impact" }
  ]
};

export const sectionHeaders = {
  benefits: {
    title: "Pourquoi Rejoindre JCI Sbikha ?",
    subtitle: "Les avantages d'être membre de notre communauté"
  },
  testimonials: {
    title: "Témoignages de Membres",
    subtitle: "Ils ont rejoint JCI Sbikha et témoignent"
  },
  faq: {
    title: "Questions Fréquentes",
    subtitle: "Tout ce que vous devez savoir sur l'adhésion"
  }
};

export const formData = {
  title: "Formulaire d'Adhésion",
  subtitle: "Remplissez ce formulaire pour rejoindre JCI Sbikha. Nous vous contacterons dans les plus brefs délais.",
  successMessage: {
    title: "Inscription envoyée avec succès !",
    description: "Nous vous contacterons dans les 48 heures pour la suite du processus."
  },
  fields: [
    {
      id: "fullName",
      name: "fullName",
      label: "Nom complet",
      type: "text",
      placeholder: "Votre nom et prénom",
      icon: <FaUser />,
      required: true,
      validationMessage: "Veuillez entrer votre nom complet"
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "votre@email.com",
      icon: <FaRegEnvelope />,
      required: true,
      validationMessage: "Veuillez entrer votre email",
      invalidMessage: "Email invalide"
    },
    {
      id: "phone",
      name: "phone",
      label: "Téléphone",
      type: "tel",
      placeholder: "+216 XX XXX XXX",
      icon: <FaPhone />,
      required: true,
      validationMessage: "Veuillez entrer votre numéro de téléphone"
    },
    {
      id: "birthDate",
      name: "birthDate",
      label: "Date de naissance",
      type: "date",
      placeholder: "",
      icon: <FaCalendarAlt />,
      required: false
    },
    {
      id: "profession",
      name: "profession",
      label: "Profession / Études",
      type: "text",
      placeholder: "Votre profession ou domaine d'études",
      icon: <FaInfoCircle />,
      required: false
    },
    {
      id: "motivation",
      name: "motivation",
      label: "Pourquoi souhaitez-vous rejoindre JCI Sbikha ?",
      type: "textarea",
      placeholder: "Dites-nous ce qui vous motive à rejoindre notre communauté...",
      icon: <FaHeart />,
      rows: 3,
      required: true,
      validationMessage: "Veuillez expliquer votre motivation"
    },
    {
      id: "skills",
      name: "skills",
      label: "Compétences et intérêts",
      type: "text",
      placeholder: "Vos compétences, centres d'intérêt...",
      icon: <FaStar />,
      required: false
    },
    {
      id: "message",
      name: "message",
      label: "Message supplémentaire",
      type: "textarea",
      placeholder: "Un message ou une question...",
      icon: <FaRegComment />,
      rows: 3,
      required: false
    }
  ]
};

export const emailRegex = /\S+@\S+\.\S+/;