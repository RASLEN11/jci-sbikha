// Languages/LanguageComponents.js
// Centralized translations for reusable components - JCI Sbikha

export const componentTranslations = {
  en: {
    // ==================== AUTH COMPONENTS (Login/Signup) ====================
    auth: {
      or: 'or',
      continueWithGoogle: 'Continue with Google',
      signupWithGoogle: 'Sign up with Google',
      googleLoginComing: 'Google login coming soon',
      connecting: 'Connecting...',
      
      login: {
        title: 'Welcome Back!',
        subtitle: 'Sign in to access your dashboard',
        emailPlaceholder: 'Email address',
        passwordPlaceholder: 'Password',
        rememberMe: 'Remember me',
        forgotPassword: 'Forgot password?',
        loggingIn: 'Logging in...',
        login: 'Login',
        noAccount: "Don't have an account?",
        signup: 'Sign Up',
        emailRequired: 'Email is required',
        invalidEmail: 'Invalid email address',
        passwordRequired: 'Password is required',
        passwordMinLength: 'Password must be at least 6 characters',
        invalidCredentials: 'Invalid email or password',
        userNotFound: 'No account found with this email',
        accountDeactivated: 'Your account has been deactivated. Please contact support.',
        loginFailed: 'Login failed. Please try again.',
        networkError: 'Network error. Please check your connection.'
      },
      
      signup: {
        title: 'Create Account',
        subtitle: 'Join us to access our services',
        firstNamePlaceholder: 'First name',
        lastNamePlaceholder: 'Last name',
        emailPlaceholder: 'Email address',
        passwordPlaceholder: 'Password',
        confirmPasswordPlaceholder: 'Confirm password',
        agreeToTerms: 'I agree to the',
        termsOfService: 'Terms of Service',
        privacyPolicy: 'Privacy Policy',
        and: 'and',
        creatingAccount: 'Creating Account...',
        createAccount: 'Create Account',
        alreadyHaveAccount: 'Already have an account?',
        login: 'Login',
        firstNameRequired: 'First name is required',
        lastNameRequired: 'Last name is required',
        emailRequired: 'Email is required',
        invalidEmail: 'Invalid email address',
        passwordRequired: 'Password is required',
        passwordMinLength: 'Password must be at least 6 characters',
        confirmPasswordRequired: 'Please confirm your password',
        passwordsDontMatch: 'Passwords do not match',
        mustAgreeToTerms: 'You must agree to the terms',
        passwordWeak: 'Weak',
        passwordMedium: 'Medium',
        passwordStrong: 'Strong',
        passwordsMatch: 'Passwords match',
        welcomeMessage: 'Welcome',
        accountCreated: 'Account created successfully.',
        emailAlreadyUsed: 'Email already registered. Please use a different email or login.',
        registrationFailed: 'Registration failed. Please try again.'
      }
    },

    // ==================== FOOTER COMPONENT - JCI Sbikha ====================
    footer: {
      description: 'JCI Sbikha is a local chapter of Junior Chamber International (JCI), a global non-profit federation of young leaders aged 18 to 40. La Jeune Chambre Économique de Sbikha is committed to developing leadership skills and creating positive change in the community.',
      quickLinks: 'Quick Links',
      resources: 'Resources',
      contact: 'Contact Us',
      copyrightPrefix: '© ',
      copyrightSuffix: ' JCI Sbikha - All rights reserved.',
      copyrightYear: '2025',
      developedBy: 'Developed by',
      quality: 'Quality Policy',
      certifications: 'Certifications',
      partners: 'Partners',
      news: 'News & Events',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      // Navigation links
      home: 'Home',
      about: 'About Us',
      stats: 'Statistics',
      careers: 'Careers',
      locations: 'Locations',
      contactUs: 'Contact Us',
      // Contact info
      emailContact: 'contact@jcisbikha.tn',
      phoneContact: '+216 XX XXX XXX',
      address: 'JCI Sbikha, Tunisia',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      // Badge
      certifiedBadge: 'Leadership Since 2024'
    },

    // ==================== HEADER COMPONENT ====================
    header: {
      home: 'Home',
      about: 'About Us',
      partners: 'Partners',
      news: 'News & Events',
      contact: 'Contact Us',
      services: 'Services',
      clientPortal: 'Client Portal',
      dashboard: 'Dashboard',
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout',
      welcomeBack: 'Welcome back',
      menu: 'Menu',
      close: 'Close'
    },

    // ==================== TOGGLE BUTTONS COMPONENT ====================
    toggleButtons: {
      lightMode: 'Switch to Light Mode',
      darkMode: 'Switch to Dark Mode',
      english: 'Switch to English',
      french: 'Switch to French',
      backToTop: 'Back to top',
      languageToggle: 'Language',
      themeToggle: 'Theme'
    },

    // ==================== PRIVACY POLICY PAGE - JCI Sbikha ====================
    privacyPolicy: {
      hero: {
        badge: 'JCI Sbikha Privacy Policy',
        title: 'Privacy',
        highlight: 'Policy',
        description: 'Last Updated: January 2025 — Your privacy and security are our priority. This policy explains how JCI Sbikha collects, uses, and protects your personal information when you interact with our organization.'
      },
      sidebar: {
        title: 'On This Page',
        items: {
          information: 'Information Collection',
          usage: 'How We Use Data',
          sharing: 'Information Sharing',
          cookies: 'Cookies & Tracking',
          security: 'Data Security',
          rights: 'Your Rights',
          contact: 'Contact Us'
        }
      },
      sections: {
        information: {
          title: 'Information We Collect',
          items: [
            { title: 'Member Identifiers', desc: 'We collect contact details to verify membership and manage JCI Sbikha activities.' },
            { title: 'Participation Data', desc: 'We track event registrations, volunteer activities, and leadership training participation to improve our programs.' },
            { title: 'Account Information', desc: 'Your name, email address, and JCI affiliation details are stored for communication and community management.' }
          ]
        },
        usage: {
          title: 'How We Use Your Information',
          items: [
            { title: 'Organizational Management', desc: 'We use your data to manage memberships, coordinate events, and support local leadership initiatives.' },
            { title: 'Community Engagement', desc: 'Your information helps us notify members about training opportunities, civic projects, and networking events.' },
            { title: 'Service Improvement', desc: 'We analyze participation data to enhance leadership development programs and community impact.' }
          ]
        },
        sharing: {
          title: 'Information Sharing',
          items: [
            { title: 'Board Access', desc: 'JCI Sbikha board members and program coordinators have access to necessary member information for organizational purposes.' },
            { title: 'Third-Party Services', desc: 'We may share data with trusted JCI International partners and event management platforms under strict confidentiality agreements.' },
            { title: 'Legal Requirements', desc: 'We may disclose information if required by law or to protect the rights and safety of our community.' }
          ]
        },
        cookies: {
          title: 'Cookies & Tracking',
          items: [
            { title: 'Essential Cookies', desc: 'We use essential cookies for authentication and session management on our official website.' },
            { title: 'Analytics', desc: 'We may use analytics to understand how members engage with our services and improve user experience.' },
            { title: 'Your Choices', desc: 'You can control cookie settings through your browser preferences, but some features may not function properly.' }
          ]
        },
        security: {
          title: 'Data Security',
          text: 'We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your information. Our systems are secured with firewalls and monitored regularly. However, no method of transmission over the internet is 100% secure, and we encourage you to maintain strong password practices.'
        },
        retention: {
          title: 'Data Retention',
          text: 'We retain your personal information for as long as your membership with JCI Sbikha is active. If you request deletion, we will remove your data within 30 days, except for information we need to retain for legal compliance or fraud prevention.'
        },
        international: {
          title: 'International Data Transfers',
          text: 'As a local chapter of Junior Chamber International, your information may be shared within the JCI global network in accordance with this policy. By joining JCI Sbikha, you consent to the transfer and processing of your data as described herein.'
        },
        rights: {
          title: 'Your Privacy Rights',
          description: 'As a member of the JCI Sbikha community, you have certain rights regarding your personal information:',
          items: [
            { title: 'Right to Access', desc: 'Request a copy of your personal information held by us' },
            { title: 'Right to Rectification', desc: 'Correct inaccurate or incomplete information' },
            { title: 'Right to Erasure', desc: 'Request deletion of your data under certain conditions' },
            { title: 'Right to Restrict', desc: 'Limit how we use your information' },
            { title: 'Data Portability', desc: 'Receive your data in a portable format' },
            { title: 'Right to Object', desc: 'Object to processing of your information' }
          ],
          noticeTitle: 'Exercising Your Rights',
          noticeText: 'To exercise any of these rights, please contact our Data Protection team using the information below. We will respond to your request within 30 days.'
        },
        children: {
          title: "Children's Privacy",
          text: 'JCI Sbikha is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.'
        },
        changes: {
          title: 'Changes to This Policy',
          text: 'We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify members through our official communication channels of any significant changes. Your continued engagement after changes constitutes acceptance of the updated policy.'
        },
        contact: {
          title: 'Contact Our Data Protection Team',
          description: 'If you have any questions about this Privacy Policy or our data practices, please contact us:',
          email: 'privacy@jcisbikha.tn',
          phone: '+216 XX XXX XXX',
          address: 'JCI Sbikha, Tunisia'
        }
      },
      backToHome: 'Back to JCI Sbikha'
    },

    // ==================== TERMS OF SERVICE PAGE - JCI Sbikha ====================
    termsOfService: {
      hero: {
        badge: 'JCI Sbikha Terms of Service',
        title: 'Terms of',
        highlight: 'Service',
        description: 'Last Updated: January 2025 — Please read these Terms of Service carefully before joining JCI Sbikha or using our digital platforms. By engaging with our organization, you agree to be bound by these terms.'
      },
      sidebar: {
        title: 'Contents',
        items: {
          acceptance: 'Acceptance of Terms',
          eligibility: 'Eligibility',
          account: 'Membership Registration',
          conduct: 'Member Conduct',
          ip: 'Intellectual Property',
          termination: 'Termination',
          liability: 'Limitation of Liability',
          contact: 'Contact Us'
        }
      },
      sections: {
        acceptance: {
          title: 'Acceptance of Terms',
          content: 'By joining JCI Sbikha, participating in our events, or using our digital platforms, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not participate in our activities. These terms apply to all members, visitors, and partners.',
          highlights: ['Binding agreement upon joining', 'Applies to all participants', 'Right to refuse participation']
        },
        eligibility: {
          title: 'Eligibility',
          content: 'You must be between 18 and 40 years old to join JCI Sbikha as an active member. By participating in our activities, you represent and warrant that you meet these age requirements. Membership is open to young leaders of all backgrounds committed to civic engagement and leadership development.',
          highlights: ['Age: 18 to 40', 'Open to all backgrounds', 'Membership verification required']
        },
        account: {
          title: 'Membership Registration',
          content: 'When you register as a member of JCI Sbikha, you must provide accurate, complete, and current information. You are solely responsible for maintaining the confidentiality of your membership credentials and for all activities that occur under your profile.',
          highlights: ['Accurate information required', 'Responsibility for account security', 'Notify unauthorized use']
        },
        conduct: {
          title: 'Member Conduct',
          content: 'You agree to uphold the values of Junior Chamber International: respect, integrity, and active citizenship. Any form of discrimination, harassment, or disrespectful behavior is strictly prohibited. Failure to comply with conduct rules may result in warnings, suspension, or permanent removal from the organization.',
          highlights: ['Respect JCI values', 'Treat all members with dignity', 'No discrimination or harassment', 'Active citizenship required']
        },
        ip: {
          title: 'Intellectual Property',
          content: 'All content, logos, and intellectual property of JCI Sbikha and Junior Chamber International are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission from JCI Sbikha.',
          highlights: ['Content is protected', 'No unauthorized reproduction', 'Trademarks are property of JCI International']
        },
        termination: {
          title: 'Termination of Membership',
          content: 'We may terminate or suspend your membership immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service or violate the core values of Junior Chamber International. Membership decisions are final and at the discretion of the JCI Sbikha board.'
        },
        liability: {
          title: 'Limitation of Liability',
          content: 'To the maximum extent permitted by law, JCI Sbikha and its board members shall not be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages arising out of or relating to the participation in our activities or use of our services. All services are provided "as is" and we do not guarantee uninterrupted or error-free operations.'
        },
        disclaimer: {
          title: 'Disclaimer of Warranties',
          content: 'JCI Sbikha provides its services on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied. We do not guarantee that our digital platforms will be free of bugs, errors, or interruptions. Participants assume all risks associated with engagement in our activities.'
        },
        changes: {
          title: 'Changes to Terms',
          content: 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 14 days notice prior to any new terms taking effect through our official communication channels. Your continued engagement with JCI Sbikha after changes constitutes acceptance of the updated terms.'
        },
        governingLaw: {
          title: 'Governing Law',
          content: 'These Terms shall be governed and construed in accordance with the laws of Tunisia, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Tunisia.'
        },
        contact: {
          title: 'Contact Us',
          description: 'If you have any questions about these Terms of Service, please contact our board of directors:',
          email: 'admin@jcisbikha.tn',
          phone: '+216 XX XXX XXX',
          address: 'JCI Sbikha, Tunisia'
        }
      },
      acceptance: {
        text: 'By continuing to participate in JCI Sbikha activities and use our digital platforms, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.'
      },
      backToHome: 'Back to JCI Sbikha'
    }
  },

  fr: {
    // ==================== AUTH COMPONENTS (Login/Signup) ====================
    auth: {
      or: 'ou',
      continueWithGoogle: 'Continuer avec Google',
      signupWithGoogle: "S'inscrire avec Google",
      googleLoginComing: 'Connexion Google bientôt disponible',
      connecting: 'Connexion...',
      
      login: {
        title: 'Bon retour !',
        subtitle: 'Connectez-vous pour accéder à votre tableau de bord',
        emailPlaceholder: 'Adresse email',
        passwordPlaceholder: 'Mot de passe',
        rememberMe: 'Se souvenir de moi',
        forgotPassword: 'Mot de passe oublié ?',
        loggingIn: 'Connexion en cours...',
        login: 'Connexion',
        noAccount: "Vous n'avez pas de compte ?",
        signup: "S'inscrire",
        emailRequired: "L'email est requis",
        invalidEmail: 'Adresse email invalide',
        passwordRequired: 'Le mot de passe est requis',
        passwordMinLength: 'Le mot de passe doit contenir au moins 6 caractères',
        invalidCredentials: 'Email ou mot de passe invalide',
        userNotFound: 'Aucun compte trouvé avec cet email',
        accountDeactivated: 'Votre compte a été désactivé. Veuillez contacter le support.',
        loginFailed: 'Échec de la connexion. Veuillez réessayer.',
        networkError: 'Erreur réseau. Veuillez vérifier votre connexion.'
      },
      
      signup: {
        title: 'Créer un compte',
        subtitle: 'Rejoignez-nous pour accéder à nos services',
        firstNamePlaceholder: 'Prénom',
        lastNamePlaceholder: 'Nom',
        emailPlaceholder: 'Adresse email',
        passwordPlaceholder: 'Mot de passe',
        confirmPasswordPlaceholder: 'Confirmer le mot de passe',
        agreeToTerms: "J'accepte les",
        termsOfService: "Conditions d'utilisation",
        privacyPolicy: 'Politique de confidentialité',
        and: 'et',
        creatingAccount: 'Création du compte...',
        createAccount: 'Créer un compte',
        alreadyHaveAccount: 'Vous avez déjà un compte ?',
        login: 'Connexion',
        firstNameRequired: 'Le prénom est requis',
        lastNameRequired: 'Le nom est requis',
        emailRequired: "L'email est requis",
        invalidEmail: 'Adresse email invalide',
        passwordRequired: 'Le mot de passe est requis',
        passwordMinLength: 'Le mot de passe doit contenir au moins 6 caractères',
        confirmPasswordRequired: 'Veuillez confirmer le mot de passe',
        passwordsDontMatch: 'Les mots de passe ne correspondent pas',
        mustAgreeToTerms: 'Vous devez accepter les conditions',
        passwordWeak: 'Faible',
        passwordMedium: 'Moyen',
        passwordStrong: 'Fort',
        passwordsMatch: 'Les mots de passe correspondent',
        welcomeMessage: 'Bienvenue',
        accountCreated: 'Compte créé avec succès.',
        emailAlreadyUsed: 'Email déjà enregistré. Veuillez utiliser un autre email ou vous connecter.',
        registrationFailed: "Échec de l'inscription. Veuillez réessayer."
      }
    },

    // ==================== FOOTER COMPONENT - JCI Sbikha (FR) ====================
    footer: {
      description: "La Jeune Chambre Économique de Sbikha est une cellule d'une fédération mondiale à but non lucratif des jeunes LEADERS. JCI Sbikha s'engage à développer les compétences en leadership et à créer un changement positif dans la communauté.",
      quickLinks: 'Liens Rapides',
      resources: 'Ressources',
      contact: 'Contactez-nous',
      copyrightPrefix: '© ',
      copyrightSuffix: ' JCI Sbikha - Tous droits réservés.',
      copyrightYear: '2025',
      developedBy: 'Développé par',
      quality: 'Politique Qualité',
      certifications: 'Certifications',
      partners: 'Partenaires',
      news: 'Actualités & Événements',
      terms: "Conditions d'utilisation",
      privacy: 'Politique de confidentialité',
      home: 'Accueil',
      about: 'À propos',
      stats: 'Statistiques',
      careers: 'Carrières',
      locations: 'Emplacements',
      contactUs: 'Contact',
      emailContact: 'contact@jcisbikha.tn',
      phoneContact: '+216 XX XXX XXX',
      address: 'JCI Sbikha, Tunisie',
      hours: 'Lun-Ven: 8h00 - 17h00',
      certifiedBadge: 'Leadership Depuis 2024'
    },

    // ==================== HEADER COMPONENT (FR) ====================
    header: {
      home: 'Accueil',
      about: 'À propos',
      partners: 'Partenaires',
      news: 'Actualités & Événements',
      contact: 'Contactez-nous',
      services: 'Services',
      clientPortal: 'Portail Client',
      dashboard: 'Tableau de Bord',
      login: 'Connexion',
      signup: "Inscription",
      logout: 'Déconnexion',
      welcomeBack: 'Bon retour',
      menu: 'Menu',
      close: 'Fermer'
    },

    // ==================== TOGGLE BUTTONS COMPONENT (FR) ====================
    toggleButtons: {
      lightMode: 'Passer au mode clair',
      darkMode: 'Passer au mode sombre',
      english: "Passer à l'anglais",
      french: 'Passer au français',
      backToTop: 'Retour en haut',
      languageToggle: 'Langue',
      themeToggle: 'Thème'
    },

    // ==================== PRIVACY POLICY PAGE - JCI Sbikha (FR) ====================
    privacyPolicy: {
      hero: {
        badge: 'Politique de Confidentialité JCI Sbikha',
        title: 'Politique de',
        highlight: 'Confidentialité',
        description: 'Dernière mise à jour : Janvier 2025 — Votre vie privée et votre sécurité sont notre priorité. Cette politique explique comment JCI Sbikha collecte, utilise et protège vos informations personnelles lorsque vous interagissez avec notre organisation.'
      },
      sidebar: {
        title: 'Sur cette page',
        items: {
          information: "Collecte d'informations",
          usage: 'Utilisation des données',
          sharing: "Partage d'informations",
          cookies: 'Cookies & Suivi',
          security: 'Sécurité des données',
          rights: 'Vos droits',
          contact: 'Contactez-nous'
        }
      },
      sections: {
        information: {
          title: 'Informations que nous collectons',
          items: [
            { title: 'Identifiants des membres', desc: 'Nous collectons des coordonnées pour vérifier l\'adhésion et gérer les activités de JCI Sbikha.' },
            { title: 'Données de participation', desc: 'Nous suivons les inscriptions aux événements, les activités bénévoles et la participation aux formations pour améliorer nos programmes.' },
            { title: 'Informations du compte', desc: 'Votre nom, adresse email et détails d\'affiliation JCI sont stockés pour la communication et la gestion de la communauté.' }
          ]
        },
        usage: {
          title: 'Comment nous utilisons vos informations',
          items: [
            { title: 'Gestion organisationnelle', desc: 'Nous utilisons vos données pour gérer les adhésions, coordonner les événements et soutenir les initiatives de leadership local.' },
            { title: 'Engagement communautaire', desc: 'Vos informations nous aident à informer les membres sur les opportunités de formation, les projets civiques et les événements de réseautage.' },
            { title: 'Amélioration du service', desc: 'Nous analysons les données de participation pour améliorer les programmes de développement du leadership et l\'impact communautaire.' }
          ]
        },
        sharing: {
          title: 'Partage d\'informations',
          items: [
            { title: 'Accès du conseil', desc: 'Les membres du conseil de JCI Sbikha et les coordinateurs de programme ont accès aux informations nécessaires des membres à des fins organisationnelles.' },
            { title: 'Services tiers', desc: 'Nous pouvons partager des données avec des partenaires de confiance de JCI International et des plateformes de gestion d\'événements dans le cadre d\'accords de confidentialité stricts.' },
            { title: 'Exigences légales', desc: 'Nous pouvons divulguer des informations si requis par la loi ou pour protéger les droits et la sécurité de notre communauté.' }
          ]
        },
        cookies: {
          title: 'Cookies & Suivi',
          items: [
            { title: 'Cookies essentiels', desc: 'Nous utilisons des cookies essentiels pour l\'authentification et la gestion de session sur notre site officiel.' },
            { title: 'Analytique', desc: 'Nous pouvons utiliser des analyses pour comprendre comment les membres interagissent avec nos services et améliorer l\'expérience utilisateur.' },
            { title: 'Vos choix', desc: 'Vous pouvez contrôler les paramètres des cookies via les préférences de votre navigateur, mais certaines fonctionnalités peuvent ne pas fonctionner correctement.' }
          ]
        },
        security: {
          title: 'Sécurité des données',
          text: 'Nous mettons en œuvre des mesures de sécurité conformes aux normes de l\'industrie, y compris le chiffrement, les contrôles d\'accès et les audits de sécurité réguliers pour protéger vos informations. Nos systèmes sont sécurisés par des pare-feu et surveillés régulièrement. Cependant, aucune méthode de transmission sur Internet n\'est sécurisée à 100%, et nous vous encourageons à maintenir de bonnes pratiques de mot de passe.'
        },
        retention: {
          title: 'Conservation des données',
          text: 'Nous conservons vos informations personnelles aussi longtemps que votre adhésion à JCI Sbikha est active. Si vous demandez la suppression, nous supprimerons vos données dans les 30 jours, sauf pour les informations que nous devons conserver pour des raisons légales ou de prévention de la fraude.'
        },
        international: {
          title: 'Transferts internationaux de données',
          text: 'En tant que cellule locale de Junior Chamber International, vos informations peuvent être partagées au sein du réseau mondial JCI conformément à cette politique. En rejoignant JCI Sbikha, vous consentez au transfert et au traitement de vos données comme décrit ici.'
        },
        rights: {
          title: 'Vos droits à la vie privée',
          description: 'En tant que membre de la communauté JCI Sbikha, vous avez certains droits concernant vos informations personnelles :',
          items: [
            { title: 'Droit d\'accès', desc: 'Demander une copie de vos informations personnelles détenues par nous' },
            { title: 'Droit de rectification', desc: 'Corriger des informations inexactes ou incomplètes' },
            { title: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données dans certaines conditions' },
            { title: 'Droit de restriction', desc: 'Limiter la façon dont nous utilisons vos informations' },
            { title: 'Portabilité des données', desc: 'Recevoir vos données dans un format structuré' },
            { title: 'Droit d\'opposition', desc: 'Vous opposer au traitement de vos informations' }
          ],
          noticeTitle: 'Exercer vos droits',
          noticeText: 'Pour exercer l\'un de ces droits, veuillez contacter notre équipe de protection des données en utilisant les informations ci-dessous. Nous répondrons à votre demande dans les 30 jours.'
        },
        children: {
          title: 'Vie privée des enfants',
          text: 'JCI Sbikha ne s\'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d\'informations personnelles auprès d\'enfants de moins de 13 ans. Si vous apprenez qu\'un enfant nous a fourni des informations personnelles, veuillez nous contacter immédiatement.'
        },
        changes: {
          title: 'Modifications de cette politique',
          text: 'Nous pouvons mettre à jour cette politique de confidentialité pour refléter les changements dans nos pratiques ou les exigences légales. Nous informerons les membres via nos canaux de communication officiels de tout changement significatif. Votre engagement continu après les modifications constitue une acceptation de la politique mise à jour.'
        },
        contact: {
          title: "Contacter notre équipe de protection des données",
          description: "Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de données, veuillez nous contacter :",
          email: 'privacy@jcisbikha.tn',
          phone: '+216 XX XXX XXX',
          address: 'JCI Sbikha, Tunisie'
        }
      },
      backToHome: 'Retour à JCI Sbikha'
    },

    // ==================== TERMS OF SERVICE PAGE - JCI Sbikha (FR) ====================
    termsOfService: {
      hero: {
        badge: "Conditions d'utilisation JCI Sbikha",
        title: 'Conditions',
        highlight: "d'utilisation",
        description: "Dernière mise à jour : Janvier 2025 — Veuillez lire attentivement ces conditions d'utilisation avant de rejoindre JCI Sbikha ou d'utiliser nos plateformes numériques. En vous engageant avec notre organisation, vous acceptez d'être lié par ces conditions."
      },
      sidebar: {
        title: 'Contenu',
        items: {
          acceptance: "Acceptation des conditions",
          eligibility: 'Éligibilité',
          account: "Inscription à l'adhésion",
          conduct: 'Conduite des membres',
          ip: 'Propriété intellectuelle',
          termination: 'Résiliation',
          liability: 'Limitation de responsabilité',
          contact: 'Contactez-nous'
        }
      },
      sections: {
        acceptance: {
          title: "Acceptation des conditions",
          content: "En rejoignant JCI Sbikha, en participant à nos événements ou en utilisant nos plateformes numériques, vous acceptez d'être lié par ces conditions d'utilisation et toutes les lois et réglementations applicables. Si vous n'êtes pas d'accord avec une partie de ces conditions, vous ne pouvez pas participer à nos activités. Ces conditions s'appliquent à tous les membres, visiteurs et partenaires.",
          highlights: ['Accord contraignant lors de l\'adhésion', 'S\'applique à tous les participants', 'Droit de refuser la participation']
        },
        eligibility: {
          title: 'Éligibilité',
          content: "Vous devez avoir entre 18 et 40 ans pour rejoindre JCI Sbikha en tant que membre actif. En participant à nos activités, vous déclarez et garantissez que vous répondez à ces exigences d'âge. L'adhésion est ouverte aux jeunes leaders de tous horizons engagés dans l'engagement civique et le développement du leadership.",
          highlights: ['Âge : 18 à 40 ans', 'Ouvert à tous les horizons', 'Vérification de l\'adhésion requise']
        },
        account: {
          title: "Inscription à l'adhésion",
          content: "Lorsque vous vous inscrivez en tant que membre de JCI Sbikha, vous devez fournir des informations exactes, complètes et à jour. Vous êtes seul responsable de la confidentialité de vos identifiants d'adhésion et de toutes les activités qui se produisent sous votre profil.",
          highlights: ['Informations précises requises', 'Responsabilité de la sécurité du compte', 'Notifier toute utilisation non autorisée']
        },
        conduct: {
          title: 'Conduite des membres',
          content: "Vous acceptez de défendre les valeurs de Junior Chamber International : respect, intégrité et citoyenneté active. Toute forme de discrimination, de harcèlement ou de comportement irrespectueux est strictement interdite. Le non-respect des règles de conduite peut entraîner des avertissements, une suspension ou une exclusion permanente de l'organisation.",
          highlights: ['Respecter les valeurs JCI', 'Traiter tous les membres avec dignité', 'Pas de discrimination ou de harcèlement', 'Citoyenneté active requise']
        },
        ip: {
          title: 'Propriété intellectuelle',
          content: "Tout le contenu, les logos et la propriété intellectuelle de JCI Sbikha et de Junior Chamber International sont protégés par les lois sur le droit d'auteur, les marques de commerce et autres lois sur la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées sans autorisation explicite de JCI Sbikha.",
          highlights: ['Le contenu est protégé', 'Pas de reproduction non autorisée', 'Les marques sont la propriété de JCI International']
        },
        termination: {
          title: 'Résiliation de l\'adhésion',
          content: "Nous pouvons résilier ou suspendre votre adhésion immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous violez ces conditions d'utilisation ou les valeurs fondamentales de Junior Chamber International. Les décisions d'adhésion sont définitives et à la discrétion du conseil de JCI Sbikha."
        },
        liability: {
          title: 'Limitation de responsabilité',
          content: "Dans toute la mesure permise par la loi, JCI Sbikha et ses membres du conseil ne seront pas responsables des dommages indirects, punitifs, accessoires, spéciaux, consécutifs ou exemplaires découlant de ou liés à la participation à nos activités ou à l'utilisation de nos services. Tous les services sont fournis « tels quels » et nous ne garantissons pas un fonctionnement ininterrompu ou sans erreur."
        },
        disclaimer: {
          title: 'Clause de non-responsabilité',
          content: 'JCI Sbikha fournit ses services sur une base « TEL QUEL » et « SELON DISPONIBILITÉ » sans aucune garantie d\'aucune sorte, expresse ou implicite. Nous ne garantissons pas que nos plateformes numériques seront exemptes de bugs, d\'erreurs ou d\'interruptions. Les participants assument tous les risques associés à l\'engagement dans nos activités.'
        },
        changes: {
          title: 'Modifications des conditions',
          content: "Nous nous réservons le droit de modifier ou de remplacer ces conditions à tout moment. Si une révision est importante, nous fournirons un préavis d'au moins 14 jours avant l'entrée en vigueur des nouvelles conditions via nos canaux de communication officiels. Votre engagement continu avec JCI Sbikha après les modifications constitue une acceptation des conditions mises à jour."
        },
        governingLaw: {
          title: 'Droit applicable',
          content: 'Les présentes conditions sont régies et interprétées conformément aux lois de la Tunisie, sans égard à ses dispositions en matière de conflit de lois. Toute action en justice ou procédure découlant des présentes conditions sera portée exclusivement devant les tribunaux situés en Tunisie.'
        },
        contact: {
          title: 'Contactez-nous',
          description: "Si vous avez des questions concernant ces conditions d'utilisation, veuillez contacter notre conseil d'administration :",
          email: 'admin@jcisbikha.tn',
          phone: '+216 XX XXX XXX',
          address: 'JCI Sbikha, Tunisie'
        }
      },
      acceptance: {
        text: "En continuant à participer aux activités de JCI Sbikha et à utiliser nos plateformes numériques, vous reconnaissez avoir lu, compris et accepté d'être lié par ces conditions d'utilisation."
      },
      backToHome: 'Retour à JCI Sbikha'
    }
  }
};

export default componentTranslations;