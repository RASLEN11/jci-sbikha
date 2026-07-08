// Utils/Contact.js
import { FaUser, FaRegEnvelope, FaRegComment } from "react-icons/fa";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaUsers,
  FaHandsHelping,
  FaAward,
  FaCalendarAlt,
  FaPhoneAlt,
  FaInfoCircle,
} from "react-icons/fa";

export const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    details: "Sbikha, Tunisie",
    description: "Nous sommes situés au cœur de la ville de Sbikha",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    details: "+216 XX XXX XXX",
    description: "Lun-Ven : 09:00 - 18:00",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    details: "contact@jcisbikha.org",
    description: "Nous répondons dans les 24h",
  },
  {
    icon: <FaClock />,
    title: "Horaires",
    details: "Lun-Ven : 09:00 - 18:00",
    description: "Fermé le week-end",
  },
];

export const socialLinks = [
  { icon: <FaFacebook />, name: "Facebook", url: "#", color: "#1877f2" },
  { icon: <FaInstagram />, name: "Instagram", url: "#", color: "#e4405f" },
  { icon: <FaLinkedin />, name: "LinkedIn", url: "#", color: "#0a66c2" },
  { icon: <FaYoutube />, name: "YouTube", url: "#", color: "#ff0000" },
  { icon: <FaTwitter />, name: "Twitter", url: "#", color: "#1da1f2" },
  { icon: <FaWhatsapp />, name: "WhatsApp", url: "#", color: "#25d366" },
];

export const stats = [
  { value: "120+", label: "Membres", icon: <FaUsers /> },
  { value: "8", label: "Années d'impact", icon: <FaAward /> },
  { value: "24+", label: "Événements par an", icon: <FaCalendarAlt /> },
  { value: "500+", label: "Bénéficiaires", icon: <FaHandsHelping /> },
];

export const faqs = [
  {
    question: "Comment puis-je devenir membre de JCI Sbikha ?",
    answer:
      "Vous pouvez remplir le formulaire d'adhésion en ligne ou nous contacter directement par email ou téléphone. Un membre de notre équipe vous guidera dans le processus.",
  },
  {
    question: "Quels sont les avantages de rejoindre JCI Sbikha ?",
    answer:
      "En rejoignant JCI Sbikha, vous bénéficiez de formations en leadership, d'opportunités de networking, de participation à des projets communautaires, et d'accès à un réseau international de jeunes leaders.",
  },
  {
    question: "Comment puis-je participer aux événements de JCI Sbikha ?",
    answer:
      "Tous nos événements sont annoncés sur notre site web et nos réseaux sociaux. Vous pouvez vous inscrire directement en ligne ou contacter notre équipe pour plus d'informations.",
  },
  {
    question:
      "JCI Sbikha accepte-t-elle les partenariats avec d'autres organisations ?",
    answer:
      "Absolument ! Nous collaborons activement avec des entreprises, institutions, associations et autres organisations. Contactez-nous pour discuter des opportunités de partenariat.",
  },
];

export const heroData = {
  badge: {
    icon: <FaEnvelope />,
    text: "Contactez-Nous",
  },
  title: "Nous Sommes Là",
  highlight: "Pour Vous",
  description:
    "Une question, une suggestion ou une demande d'information ? N'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.",
};

export const contactFormData = {
  title: "Envoyez-nous un Message",
  subtitle: "Nous vous répondrons dans les plus brefs délais",
  fields: [
    {
      id: "name",
      name: "name",
      label: "Nom complet",
      type: "text",
      placeholder: "Votre nom et prénom",
      icon: <FaUser />,
      required: true,
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "votre@email.com",
      icon: <FaRegEnvelope />,
      required: true,
    },
    {
      id: "subject",
      name: "subject",
      label: "Sujet",
      type: "text",
      placeholder: "Sujet de votre message",
      icon: <FaInfoCircle />,
      required: true,
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Votre message...",
      icon: <FaRegComment />,
      rows: 5,
      required: true,
    },
  ],
};

export const mapData = {
  title: "Retrouvez-Nous",
  subtitle: "Notre localisation à Sbikha",
  location: {
    name: "JCI Sbikha",
    address: "Sbikha, Tunisie",
  },
};

export const ctaData = {
  icon: <FaHandsHelping />,
  title: "Vous Souhaitez Nous Rejoindre ?",
  description:
    "Devenez membre de JCI Sbikha et participez à notre mission de développement des jeunes leaders. Nous sommes impatients de vous accueillir !",
  buttons: [
    {
      text: "Devenir Membre",
      link: "/join",
      variant: "primary",
    },
    {
      text: "En savoir plus",
      link: "/about",
      variant: "secondary",
    },
  ],
};

export const successMessage = {
  title: "Message envoyé avec succès !",
  description: "Nous vous répondrons dans les 24 heures.",
};

export const validationMessages = {
  name: {
    required: "Veuillez entrer votre nom",
  },
  email: {
    required: "Veuillez entrer votre email",
    invalid: "Email invalide",
  },
  subject: {
    required: "Veuillez entrer un sujet",
  },
  message: {
    required: "Veuillez entrer votre message",
  },
};
