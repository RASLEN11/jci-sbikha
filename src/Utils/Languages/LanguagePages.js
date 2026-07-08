// Languages/LanguagePages.js
// Centralized translations for all page components
// REAL DATA for Yura Corporation - Kairouan, Tunisia

export const pageTranslations = {
  en: {
    // ==================== HOME PAGE ====================
    home: {
      hero: {
        badge: 'Yura Corporation Tunisia – Kairouan',
        title: 'Automotive Wiring',
        titleHighlight: 'Excellence',
        description: 'Leading manufacturer of wiring harnesses in Kairouan – serving global OEMs since 2007. 6 plants, 4,200+ employees, and expanding to 8 plants by 2028.',
        stats: {
          countries: 'Export Countries',
          oems: 'Global OEMs',
          employees: 'Employees (Tunisia)',
          export: 'Export Rate'
        },
        buttons: {
          partner: 'Become a Partner',
          learnMore: 'Learn More'
        }
      },
      applications: {
        title: 'Automotive Applications',
        subtitle: 'Our wiring solutions for all vehicle systems – made in Kairouan',
        items: ['Passenger Vehicles', 'Commercial Vehicles', 'Electric Vehicles', 'EV Charging Systems', 'Safety Systems', 'Industrial Vehicles']
      },
      expertise: {
        title: 'Our Expertise',
        subtitle: 'Technical expertise and innovation in automotive wiring – from Kairouan to the world'
      },
      features: {
        wiring: 'Wiring Harnesses',
        wiringDesc: 'Complete wiring systems for Hyundai, Kia, Mercedes, and Stellantis – produced in Kairouan with German precision.',
        electromechanical: 'Electromechanical Assemblies',
        electromechanicalDesc: 'Complex component integration and EV charging systems produced at our new 4th and 5th plants.',
        automated: 'Automated Solutions',
        automatedDesc: 'Industry 4.0 production lines across 6 plants (7th and 8th planned in Metbasta and Sousse by 2026-2028).'
      },
      quality: {
        title: 'Certified Quality Excellence',
        subtitle: 'Our certifications and quality standards',
        certifications: [
          'IATF 16949:2016 Certified',
          'ISO 9001:2015 Certified',
          'ISO 14001 Environmental Management',
          'VDA 6.3 Process Audits',
          'ISO 45001 Health & Safety'
        ],
        conformityRate: 'Conformity Rate',
        customerDefects: 'Customer Defects'
      },
      cta: {
        title: 'Trusted by Global OEMs',
        subtitle: 'Hyundai · Kia · Mercedes · Stellantis – relying on Yura Kairouan for wiring excellence',
        contactSales: 'Contact Sales',
        requestSample: 'Request Sample'
      },
      floatingCards: {
        certified: 'IATF Certified',
        evReady: 'EV Ready',
        kairouan: 'Kairouan Hub'
      }
    },

    // ==================== STATS PAGE ====================
    stats: {
      hero: {
        badge: 'Yura Kairouan Performance Metrics',
        title: 'Numbers That Speak Excellence',
        subtitle: 'Real-time manufacturing statistics and operational excellence metrics'
      },
      production: {
        title: 'Production Excellence',
        subtitle: 'High-volume manufacturing capabilities and global delivery',
        stats: {
          production: {
            title: 'Annual Production',
            value: 'wiring harnesses per year',
            description: '3.2 million wiring harnesses produced annually across 6 plants'
          },
          automation: {
            title: 'Automation Rate',
            value: '% automated processes',
            description: '89% automation rate with 42 robotic assembly lines'
          },
          lines: {
            title: 'Production Lines',
            value: 'active production lines',
            description: '42 Komax cutting/stripping lines, 28 robotic crimping stations'
          },
          shipments: {
            title: 'Monthly Shipments',
            value: 'containers to global clients',
            description: '180+ containers shipped monthly to 25+ countries'
          }
        }
      },
      quality: {
        title: 'Quality Assurance',
        subtitle: 'Industry-leading quality standards and defect prevention',
        stats: {
          qualityRate: {
            title: 'Quality Rate',
            value: '% defect-free products',
            description: '99.85% first-pass yield, 0.2 PPM customer defects'
          },
          ppm: {
            title: 'PPM Rate',
            value: 'parts per million defects',
            description: '15 PPM - Industry-leading quality performance'
          },
          automatedTests: {
            title: 'Automated Tests',
            value: '% automated quality control',
            description: '100% electrical testing with AI vision systems'
          }
        }
      },
      facility: {
        title: 'Facility & Operations',
        subtitle: 'Modern infrastructure across 6 manufacturing sites',
        stats: {
          area: {
            title: 'Total Facility Area',
            value: 'square meters total',
            description: '62,000 m² across 6 plants in Tunisia'
          },
          reach: {
            title: 'Global Reach',
            value: 'countries served',
            description: 'Export to 25+ countries across Europe, Asia, and Africa'
          },
          environmental: {
            title: 'Environmental Impact',
            value: '% waste recycling rate',
            description: '94% waste recycling rate, solar-powered facilities'
          }
        }
      },
      workforce: {
        title: 'Workforce & Expertise',
        subtitle: '4,200+ skilled professionals and continuous development',
        stats: {
          employees: {
            title: 'Total Employees',
            value: 'skilled professionals',
            description: '4,200+ employees across Tunisia operations'
          },
          engineers: {
            title: 'Engineers & Technicians',
            value: 'technical specialists',
            description: '185 engineers, 320 technicians in R&D and production'
          },
          training: {
            title: 'Training Hours',
            value: 'annual training hours',
            description: '35,000+ training hours annually for skill development'
          }
        }
      },
      achievements: {
        title: 'Growth & Achievements',
        subtitle: 'Market expansion and industry recognition since 2007',
        stats: {
          growth: {
            title: 'Yearly Growth',
            value: '% average annual growth',
            description: '22% CAGR since 2015 - Rapid expansion'
          },
          models: {
            title: 'Vehicle Models',
            value: 'automotive models supported',
            description: 'Supporting 200+ vehicle models across 15 major brands'
          },
          delivery: {
            title: 'Delivery Accuracy',
            value: '% on-time delivery rate',
            description: '99.2% on-time delivery - JIT supply chain'
          }
        }
      },
      summary: {
        title: "Tunisia's Automotive Manufacturing Excellence",
        description: 'As the largest automotive wiring harness manufacturer in North Africa, Yura Corporation Kairouan combines Korean engineering precision with Tunisian craftsmanship across 6 state-of-the-art facilities, delivering world-class solutions to global automotive brands since 2007.',
        highlights: ['6 Manufacturing Plants', '25+ Export Countries', '4,200+ Professionals', '3.2M Annual Capacity']
      }
    },

    // ==================== ABOUT PAGE ====================
    about: {
      hero: {
        badge: 'About Yura Kairouan',
        title: 'Pioneering Automotive Wiring Solutions Since 2007',
        subtitle: 'From Local Excellence to Global Automotive Partnership'
      },
      overview: {
        title: 'Our Story',
        description1: 'Established in Kairouan, Tunisia in 2007, Yura Corporation has grown from a single facility with 200 employees to the largest automotive wiring harness manufacturer in North Africa, operating 6 state-of-the-art plants with 4,200+ skilled professionals.',
        description2: 'With over 62,000 m² of manufacturing space, we deliver precision-engineered wiring harnesses and electrical distribution systems to leading automotive brands including Hyundai, Kia, Mercedes-Benz, Stellantis, and Volkswagen across Europe, Asia, and Africa.'
      },
      stats: {
        years: 'Years of Excellence',
        professionals: 'Skilled Professionals',
        capacity: 'Annual Production Capacity'
      },
      coreValues: {
        title: 'Our Core Values',
        subtitle: 'The foundation of our corporate identity and operational philosophy',
        quality: {
          title: 'Zero-Defect Quality',
          description: 'Certified to IATF 16949:2016 standards with 100% electrical testing, AI-powered optical inspection, and real-time quality monitoring across all 6 production facilities.'
        },
        innovation: {
          title: 'Continuous Innovation',
          description: 'Our 85-engineer R&D center in Sousse develops next-gen solutions for EV high-voltage systems, ADAS, and smart wiring architectures for future mobility.'
        },
        sustainability: {
          title: 'Sustainable Manufacturing',
          description: 'ISO 14001 certified with solar-powered plants, 94% waste recycling rate, water conservation systems, and lead-free manufacturing processes.'
        },
        partnership: {
          title: 'Customer Partnership',
          description: 'Co-development programs with global OEMs, just-in-time delivery to 25+ countries, dedicated account teams, and 24/7 technical support.'
        }
      },
      manufacturing: {
        title: 'Manufacturing Excellence',
        description: 'Our Kairouan Industrial Park headquarters integrates Korean engineering excellence with Tunisian craftsmanship across 6 specialized facilities.',
        features: [
          '42 fully automated Komax cutting/stripping lines',
          '28 robotic crimping stations with AI vision systems',
          'Climate-controlled ESD-protected assembly areas (15,000 m²)',
          'In-house UL-approved testing laboratory',
          'Industry 4.0 data integration for real-time monitoring',
          'Dedicated EV high-voltage production line'
        ]
      },
      gallery: {
        title: 'Our Facilities',
        items: ['Plant 1-3: Kairouan Main Campus', 'Plant 4-5: El Fahs EV Center', 'Plant 6: Sousse R&D & Engineering']
      },
      clients: {
        title: 'Our Trusted Partners'
      },
      testimonials: {
        title: 'What our partners say about working with us',
        subtitle: 'Real feedback from our valued customers',
        loading: 'Loading testimonials...',
        empty: 'No testimonials available yet.',
        position: 'Customer'
      },
      cta: {
        title: 'Ready to Partner with Yura Kairouan?',
        description: 'Whether you need standard wiring solutions or custom-developed systems for your next vehicle platform, our engineering team of 185 specialists is ready to collaborate.',
        contact: 'Contact Our Team',
        explore: 'Explore Our Solutions'
      }
    },

    // ==================== CAREERS PAGE ====================
    careers: {
      hero: {
        badge: 'Join Our Engineering Team',
        title: 'Build the Future of Automotive Technology',
        subtitle: 'Be part of Tunisia\'s largest automotive wiring systems manufacturer with 4,200+ employees and work with global vehicle brands'
      },
      stats: {
        engineering: 'Engineers',
        rd: 'Active R&D Projects',
        training: 'Annual Programs',
        team: 'Total Team Members'
      },
      positions: {
        title: 'Open Positions',
        subtitle: 'Join our team of automotive electrical systems specialists and grow your career',
        electrical: {
          title: 'Electrical Design Engineer',
          description: 'Design and develop automotive wiring systems for Hyundai, Kia, Mercedes, and Stellantis vehicle platforms.'
        },
        quality: {
          title: 'Quality Assurance Specialist',
          description: 'Ensure our wiring systems meet IATF 16949 standards and customer-specific requirements.'
        },
        automation: {
          title: 'Automation Technician',
          description: 'Maintain and optimize our 42 Komax automated lines and 28 robotic crimping stations.'
        },
        process: {
          title: 'Process Engineer',
          description: 'Optimize manufacturing processes across 6 production facilities.'
        },
        rd: {
          title: 'R&D Engineer - EV Systems',
          description: 'Develop next-generation high-voltage systems for electric vehicles.'
        },
        logistics: {
          title: 'Supply Chain Coordinator',
          description: 'Manage JIT deliveries to 25+ countries across 3 continents.'
        }
      },
      benefits: {
        title: 'Why Join Yura Kairouan?',
        subtitle: 'We invest in our team\'s growth and provide a rewarding work environment',
        development: {
          title: 'Professional Development',
          description: '35,000+ annual training hours, technical certification programs in automotive electrical systems, and Korean headquarters exchange opportunities.'
        },
        comprehensive: {
          title: 'Comprehensive Benefits',
          description: 'Competitive salary, health insurance for family, performance bonuses, transportation services, and subsidized meals.'
        },
        exposure: {
          title: 'Global Exposure',
          description: 'Work with international automotive brands, collaborate with Korean engineering teams, and contribute to cutting-edge vehicle technologies.'
        }
      },
      process: {
        title: 'Our Hiring Process',
        subtitle: 'Transparent and efficient recruitment for the best talent',
        steps: ['Application', 'Technical Assessment', 'Interviews', 'Offer'],
        stepDescriptions: [
          'Submit your CV and cover letter through our portal',
          'Technical evaluation by our engineering team',
          'Interview with HR and technical managers',
          'Competitive offer for successful candidates'
        ]
      },
      cta: {
        title: 'Ready to Power the Future of Mobility?',
        subtitle: 'Join 4,200+ professionals at Tunisia\'s largest wiring harness manufacturer. Submit your application or contact our HR department.',
        contact: 'Contact HR',
        apply: 'Apply Now'
      }
    },

    // ==================== CONTACT PAGE ====================
    contact: {
      hero: {
        badge: 'Contact Yura Kairouan',
        title: 'Let\'s Start a Conversation',
        subtitle: 'Whether you have a question about our products, need technical support, or want to discuss a partnership, our team of 185 engineers and 320 technicians is ready to assist you.'
      },
      section: {
        title: 'Get in Touch',
        subtitle: 'Multiple ways to reach our team across 6 facilities'
      },
      form: {
        title: 'Send Us a Message',
        subtitle: 'Fill out the form and our team will respond within 24 hours',
        success: 'Thank you for your message! Our team will respond within 24 hours.',
        fields: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number (Optional)',
          subject: 'Subject',
          message: 'Message'
        },
        placeholders: {
          name: 'Enter your name',
          email: 'Enter your email',
          phone: '+216 XX XXX XXX',
          subject: 'What is this regarding?',
          message: 'Write your message here...'
        },
        validation: {
          nameRequired: 'Name is required',
          nameMin: 'Name must be at least 2 characters',
          nameMax: 'Name must be less than 100 characters',
          emailRequired: 'Email is required',
          emailInvalid: 'Invalid email format',
          phoneInvalid: 'Please provide a valid phone number',
          subjectRequired: 'Subject is required',
          subjectMin: 'Subject must be at least 3 characters',
          subjectMax: 'Subject must be less than 255 characters',
          messageRequired: 'Message is required',
          messageMin: 'Message must be at least 10 characters',
          messageMax: 'Message must be less than 5000 characters'
        },
        button: 'Send Message',
        sending: 'Sending...',
        responseTime: 'We typically respond within 24 hours'
      },
      cards: {
        location: {
          title: 'Main Campus',
          content: 'Industrial Zone Sidi Amor\n3100 Kairouan, Tunisia',
          details: 'Main HQ + 3 production plants (35,000 m²)'
        },
        phone: {
          title: 'Contact Center',
          content: '+216 77 412 700',
          details: 'Sun-Thu: 8:00 AM - 5:00 PM (GMT+1)'
        },
        email: {
          title: 'Email Us',
          content: 'contact@yurakairouan.com.tn',
          details: 'Response within 24 hours'
        }
      }
    },

    // ==================== ERROR PAGE ====================
    error: {
      badges: {
        400: '400 Error',
        401: '401 Error',
        403: '403 Error',
        404: '404 Error',
        500: '500 Error',
        503: '503 Error'
      },
      titles: {
        400: 'Bad Request',
        401: 'Unauthorized Access',
        403: 'Access Forbidden',
        404: 'Page Not Found',
        500: 'Server Error',
        503: 'Service Unavailable'
      },
      messages: {
        400: 'The request could not be understood by the server.',
        401: 'Please log in to access this page.',
        403: 'You don\'t have permission to access this page.',
        404: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
        500: 'Something went wrong on our end. Please try again later.',
        503: 'The server is temporarily unable to handle your request.'
      },
      stats: {
        pageNotFound: 'Page Not Found',
        serverIssue: 'Server Issue',
        accessDenied: 'Access Denied',
        unauthorized: 'Unauthorized'
      },
      buttons: {
        goHome: 'Go Home',
        goBack: 'Go Back',
        refresh: 'Refresh'
      },
      redirect: 'Redirecting to homepage in',
      seconds: 'seconds',
      suggestions: {
        title: 'You might want to try these',
        subtitle: 'Here are some helpful suggestions to get you back on track',
        homepage: {
          title: 'Go to Homepage',
          description: 'Return to our main page and start fresh',
          link: 'Visit Homepage'
        },
        search: {
          title: 'Search Our Site',
          description: 'Find what you\'re looking for using our search',
          link: 'Search'
        },
        support: {
          title: 'Contact Support',
          description: 'Get help from our support team',
          link: 'Contact Us'
        }
      },
      help: {
        title: 'Still Need Help?',
        description: 'If you continue to experience issues, please don\'t hesitate to reach out to our support team.',
        contact: 'Contact Support',
        faq: 'View FAQ'
      },
      floatingCards: {
        lost: 'Lost?',
        wrongTurn: 'Wrong Turn',
        navigate: 'Navigate Home'
      }
    },

    // ==================== LOCATIONS PAGE ====================
    locations: {
      hero: {
        badge: '6 Manufacturing Facilities in Tunisia',
        title: 'Our Manufacturing Network',
        subtitle: 'Strategic footprint across Tunisia serving global automotive partners',
        buttons: {
          about: 'About Us',
          partner: 'Become a Partner'
        }
      },
      stats: {
        title: 'Tunisia Operations',
        subtitle: 'Largest wiring harness manufacturer in North Africa',
        sites: 'Manufacturing Plants',
        continents: 'Continents Served',
        certifications: 'Quality Certifications',
        employees: 'Total Employees'
      },
      map: {
        title: 'Our Facilities Across Tunisia',
        subtitle: '6 strategic locations optimized for production and logistics',
        placeholder: 'Interactive Map of Our Facilities',
        clickHint: 'Click on markers to explore our facilities',
        markers: {
          kairouan: 'Kairouan - Main Campus (Plants 1-3)',
          elfahs: 'El Fahs - EV Center (Plants 4-5)',
          sousse: 'Sousse - R&D Center (Plant 6)'
        }
      },
      locations: {
        title: 'Our Manufacturing Facilities',
        subtitle: 'State-of-the-art facilities producing automotive wiring systems',
        sites: [
          {
            title: 'Kairouan Main Campus - Plant 1',
            description: 'Flagship facility with full-scale wiring harness manufacturing and headquarters operations.',
            features: [
              '12,000 m² manufacturing area',
              'IATF 16949:2016 certified',
              '12 Komax automated lines',
              '8 robotic crimping stations'
            ]
          },
          {
            title: 'Kairouan Main Campus - Plant 2',
            description: 'High-volume production facility for passenger vehicle wiring systems.',
            features: [
              '10,000 m² production space',
              'ISO 9001:2015 certified',
              '10 Komax automated lines',
              'JIT delivery hub'
            ]
          },
          {
            title: 'Kairouan Main Campus - Plant 3',
            description: 'Specialized in premium vehicle wiring and complex assemblies.',
            features: [
              '13,000 m² advanced facility',
              'VDA 6.3 certified',
              'ESD-protected assembly areas',
              'Quality testing laboratory'
            ]
          },
          {
            title: 'El Fahs EV Center - Plant 4',
            description: 'Dedicated electric vehicle high-voltage wiring systems.',
            features: [
              '8,000 m² EV-specific facility',
              'High-voltage certification',
              'EV component assembly',
              '600V+ wiring systems'
            ]
          },
          {
            title: 'El Fahs EV Center - Plant 5',
            description: 'Electromechanical assemblies and EV charging components.',
            features: [
              '7,000 m² production space',
              'Electromechanical integration',
              'EV charging systems',
              'Custom wiring solutions'
            ]
          },
          {
            title: 'Sousse R&D Center - Plant 6',
            description: 'Engineering & Innovation hub driving future mobility technology.',
            features: [
              '12,000 m² engineering center',
              '85-engineer R&D team',
              'Prototyping laboratory',
              'UL-approved testing'
            ]
          }
        ]
      },
      cta: {
        title: 'Join Tunisia\'s Largest Wiring Harness Manufacturer',
        description: 'With 6 facilities across Tunisia and 4,200+ employees, we deliver precision wiring solutions to OEMs worldwide with consistent quality standards.',
        join: 'Join Our Team',
        contact: 'Contact Us'
      }
    },

    // ==================== PRODUCTS PAGE ====================
    products: {
      hero: {
        badge: 'Yura Kairouan Products',
        title: 'Precision Automotive Wiring',
        subtitle: 'Engineered for Reliability & Performance',
        buttons: {
          categories: 'View Categories',
          custom: 'Custom Solutions'
        }
      },
      stats: {
        title: 'Global Product Excellence',
        subtitle: 'Trusted by leading automotive manufacturers worldwide',
        models: 'Vehicle Models Supported',
        lines: 'Product Families',
        certifications: 'Quality Certifications',
        countries: 'Export Countries'
      },
      categories: {
        title: 'Product Categories',
        subtitle: 'Comprehensive wiring solutions for all vehicle systems',
        items: [
          {
            title: 'Wiring Harnesses',
            description: 'Complete vehicle wiring systems with custom configurations for passenger cars, SUVs, and commercial vehicles'
          },
          {
            title: 'Electrical Connectors',
            description: 'High-performance sealed and unsealed connectors with IP67/IP69K ratings for harsh environments'
          },
          {
            title: 'Power Distribution',
            description: 'Junction boxes, fuse panels, relay boxes, and power distribution units for modern vehicle architectures'
          },
          {
            title: 'High Voltage Systems',
            description: 'Specialized 600V+ wiring and components for hybrid, plug-in hybrid, and battery electric vehicles'
          },
          {
            title: 'Smart Wiring',
            description: 'Intelligent wiring systems with integrated CAN bus, LIN bus, and ethernet communication capabilities'
          },
          {
            title: 'Safety Systems',
            description: 'Critical safety wiring for airbags, ABS, ESP, ADAS sensors, and autonomous driving systems'
          }
        ],
        explore: 'Explore Products'
      },
      harnesses: {
        title: 'Wiring Harness Systems',
        subtitle: 'Complete vehicle wiring solutions for all applications - 3.2 million units annually',
        items: [
          {
            title: 'Engine Compartment Harness',
            description: 'High-temperature resistant wiring system for engine bay applications with 150°C rating',
            specs: [
              'Temperature rating: -40°C to 150°C',
              'Oil, fuel & chemical resistant',
              'Custom lengths and configurations',
              'IATF 16949 certified production',
              'Abrasion and vibration tested'
            ]
          },
          {
            title: 'Chassis & Underbody Harness',
            description: 'Robust wiring system for vehicle chassis with waterproof and dustproof protection',
            specs: [
              'Abrasion resistant corrugated conduit',
              'IP67/IP69K waterproof connectors',
              'Salt spray and vibration tested',
              'Corrosion resistant terminals',
              '-40°C to 125°C operating range'
            ]
          },
          {
            title: 'Interior & Dashboard Harness',
            description: 'Complete wiring system for vehicle interior with low-emission materials',
            specs: [
              'Low-emission PVC and XLPE materials',
              'Modular design for easy assembly',
              'Quick-connect terminals',
              'Flame retardant UL94 V-0 rated',
              'Sound-dampening options'
            ]
          },
          {
            title: 'High Voltage EV Harness',
            description: 'Orange-colored safety wiring for hybrid and electric vehicle powertrains',
            specs: [
              '600V to 1000V rated',
              'Orange safety sheathing (ISO 19642)',
              'EMI/RFI shielded options',
              'Touch-proof connector systems',
              'ISO 19642 and LV216 compliance'
            ]
          },
          {
            title: 'Door & Seat Harness',
            description: 'Flexible wiring solutions for power windows, mirrors, locks, and seating',
            specs: [
              'High-flex copper strands',
              '3 million cycle bend test certified',
              'Thin-wall insulation',
              'Quick-disconnect connectors',
              'Mass reduction optimized'
            ]
          },
          {
            title: 'Battery Management Harness',
            description: 'Specialized wiring for EV battery packs and management systems',
            specs: [
              'High-voltage interlock loop (HVIL)',
              'Temperature sensor integration',
              'Voltage monitoring circuits',
              'EMI shielded options',
              'ASIL D safety rated'
            ]
          }
        ],
        request: 'Request Details'
      },
      cta: {
        title: 'Custom Wiring Solutions',
        description: 'Need a tailored wiring solution for your specific vehicle platform? Our 85-engineer R&D team can develop custom solutions for your unique requirements.',
        contact: 'Contact Sales',
        sample: 'Request Sample'
      }
    }
  },

  fr: {
    // ==================== HOME PAGE ====================
    home: {
      hero: {
        badge: 'Yura Corporation Tunisie – Kairouan',
        title: 'Câblage automobile',
        titleHighlight: "d'excellence",
        description: 'Leader de la fabrication de faisceaux de câblage à Kairouan – au service des équipementiers mondiaux depuis 2007. 6 usines, plus de 4 200 employés, en expansion vers 8 usines d\'ici 2028.',
        stats: {
          countries: "Pays d'exportation",
          oems: 'Équipementiers mondiaux',
          employees: 'Employés (Tunisie)',
          export: "Taux d'exportation"
        },
        buttons: {
          partner: 'Devenir Partenaire',
          learnMore: 'En savoir plus'
        }
      },
      applications: {
        title: 'Applications Automobiles',
        subtitle: 'Nos solutions de câblage pour tous les systèmes véhicules – fabriquées à Kairouan',
        items: ['Véhicules particuliers', 'Véhicules commerciaux', 'Véhicules électriques', 'Systèmes de recharge EV', 'Systèmes de sécurité', 'Véhicules industriels']
      },
      expertise: {
        title: 'Nos Compétences',
        subtitle: 'Expertise technique et innovation dans le câblage automobile – de Kairouan au monde'
      },
      features: {
        wiring: 'Faisceaux de Câblage',
        wiringDesc: 'Systèmes de câblage complets pour Hyundai, Kia, Mercedes et Stellantis – produits à Kairouan avec précision allemande.',
        electromechanical: 'Assemblages Électromécaniques',
        electromechanicalDesc: 'Intégration de composants complexes et systèmes de recharge EV produits dans nos nouvelles usines 4 et 5.',
        automated: 'Solutions Automatisées',
        automatedDesc: 'Lignes de production Industrie 4.0 sur 6 usines (7ème et 8ème prévues à Metbasta et Sousse en 2026-2028).'
      },
      quality: {
        title: 'Excellence Qualité Certifiée',
        subtitle: 'Nos certifications et standards de qualité',
        certifications: [
          'Certifié IATF 16949:2016',
          'Certifié ISO 9001:2015',
          'ISO 14001 Management Environnemental',
          'Audits de processus VDA 6.3',
          'ISO 45001 Santé & Sécurité'
        ],
        conformityRate: 'Taux de conformité',
        customerDefects: 'Défauts clients'
      },
      cta: {
        title: 'Approuvé par les Équipementiers Mondiaux',
        subtitle: 'Hyundai · Kia · Mercedes · Stellantis – comptent sur Yura Kairouan pour l\'excellence du câblage',
        contactSales: 'Contact Commercial',
        requestSample: 'Demander un Échantillon'
      },
      floatingCards: {
        certified: 'Certifié IATF',
        evReady: 'Prêt pour VE',
        kairouan: 'Hub de Kairouan'
      }
    },

    // ==================== STATS PAGE ====================
    stats: {
      hero: {
        badge: 'Indicateurs de Performance Yura Kairouan',
        title: 'Des Chiffres Qui Parlent d\'Excellence',
        subtitle: 'Statistiques de fabrication en temps réel et indicateurs d\'excellence opérationnelle'
      },
      production: {
        title: 'Excellence en Production',
        subtitle: 'Capacités de fabrication à grand volume et livraison mondiale',
        stats: {
          production: {
            title: 'Production Annuelle',
            value: 'faisceaux par an',
            description: '3,2 millions de faisceaux produits annuellement sur 6 usines'
          },
          automation: {
            title: "Taux d'Automatisation",
            value: '% de processus automatisés',
            description: "89% d'automatisation avec 42 lignes robotisées"
          },
          lines: {
            title: 'Lignes de Production',
            value: 'lignes de production actives',
            description: '42 lignes Komax, 28 stations de sertissage robotisées'
          },
          shipments: {
            title: 'Expéditions Mensuelles',
            value: 'conteneurs vers clients mondiaux',
            description: '180+ conteneurs expédiés mensuellement vers 25+ pays'
          }
        }
      },
      quality: {
        title: 'Assurance Qualité',
        subtitle: 'Normes de qualité leader de l\'industrie et prévention des défauts',
        stats: {
          qualityRate: {
            title: 'Taux de Qualité',
            value: '% produits sans défauts',
            description: '99,85% de rendement, 0,2 PPM défauts clients'
          },
          ppm: {
            title: 'Taux PPM',
            value: 'défauts par million de pièces',
            description: '15 PPM - Performance qualité leader'
          },
          automatedTests: {
            title: 'Tests Automatisés',
            value: '% contrôle qualité automatisé',
            description: '100% tests électriques avec vision IA'
          }
        }
      },
      facility: {
        title: 'Installations & Opérations',
        subtitle: 'Infrastructure moderne sur 6 sites de fabrication',
        stats: {
          area: {
            title: "Superficie Totale",
            value: 'mètres carrés total',
            description: '62 000 m² sur 6 usines en Tunisie'
          },
          reach: {
            title: 'Portée Mondiale',
            value: 'pays desservis',
            description: 'Export vers 25+ pays en Europe, Asie et Afrique'
          },
          environmental: {
            title: 'Impact Environnemental',
            value: '% taux de recyclage',
            description: '94% de recyclage, installations solaires'
          }
        }
      },
      workforce: {
        title: 'Main-d\'œuvre & Expertise',
        subtitle: '4 200+ professionnels qualifiés et développement continu',
        stats: {
          employees: {
            title: 'Employés Totaux',
            value: 'professionnels qualifiés',
            description: '4 200+ employés en Tunisie'
          },
          engineers: {
            title: 'Ingénieurs & Techniciens',
            value: 'spécialistes techniques',
            description: '185 ingénieurs, 320 techniciens en R&D et production'
          },
          training: {
            title: 'Heures de Formation',
            value: 'heures de formation annuelles',
            description: '35 000+ heures de formation annuelles'
          }
        }
      },
      achievements: {
        title: 'Croissance & Réalisations',
        subtitle: 'Expansion du marché et reconnaissance depuis 2007',
        stats: {
          growth: {
            title: 'Croissance Annuelle',
            value: '% croissance annuelle moyenne',
            description: '22% CAGR depuis 2015 - Expansion rapide'
          },
          models: {
            title: 'Modèles de Véhicules',
            value: 'modèles automobiles supportés',
            description: 'Support de 200+ modèles sur 15 grandes marques'
          },
          delivery: {
            title: 'Précision de Livraison',
            value: '% taux de livraison à l\'heure',
            description: '99,2% de livraison à temps - Chaîne JIT'
          }
        }
      },
      summary: {
        title: "L'Excellence Manufacturière Tunisienne",
        description: 'En tant que plus grand fabricant de faisceaux de câblage automobile en Afrique du Nord, Yura Corporation Kairouan combine la précision de l\'ingénierie coréenne avec le savoir-faire tunisien sur 6 installations de pointe, fournissant des solutions de classe mondiale aux marques automobiles internationales depuis 2007.',
        highlights: ['6 Usines de Production', '25+ Pays d\'export', '4 200+ Professionnels', '3,2M Capacité Annuelle']
      }
    },

    // ==================== ABOUT PAGE ====================
    about: {
      hero: {
        badge: 'À propos de Yura Kairouan',
        title: 'Solutions de Câblage Automobile Innovantes Depuis 2007',
        subtitle: "De l'Excellence Locale au Partenariat Automobile Mondial"
      },
      overview: {
        title: 'Notre Histoire',
        description1: 'Établie à Kairouan, Tunisie en 2007, Yura Corporation a évolué d\'une seule installation avec 200 employés pour devenir le plus grand fabricant de faisceaux de câblage automobile en Afrique du Nord, exploitant 6 usines de pointe avec plus de 4 200 professionnels qualifiés.',
        description2: 'Avec plus de 62 000 m² d\'espace de fabrication, nous livrons des faisceaux de câblage et systèmes de distribution électrique de précision aux principales marques automobiles dont Hyundai, Kia, Mercedes-Benz, Stellantis et Volkswagen en Europe, Asie et Afrique.'
      },
      stats: {
        years: "Années d'excellence",
        professionals: 'Professionnels qualifiés',
        capacity: 'Capacité de production annuelle'
      },
      coreValues: {
        title: 'Nos Valeurs Fondamentales',
        subtitle: 'Le fondement de notre identité d\'entreprise et philosophie opérationnelle',
        quality: {
          title: 'Qualité Zéro Défaut',
          description: 'Certifié IATF 16949:2016 avec tests électriques 100%, inspection optique IA et surveillance qualité en temps réel sur les 6 installations.'
        },
        innovation: {
          title: 'Innovation Continue',
          description: 'Notre centre R&D de 85 ingénieurs à Sousse développe des solutions nouvelle génération pour systèmes EV haute tension, ADAS et architectures intelligentes.'
        },
        sustainability: {
          title: 'Fabrication Durable',
          description: 'Certifié ISO 14001 avec usines solaires, taux de recyclage 94%, systèmes de conservation d\'eau et procédés sans plomb.'
        },
        partnership: {
          title: 'Partenariat Client',
          description: 'Programmes de co-développement avec équipementiers mondiaux, livraison JIT vers 25+ pays, équipes dédiées et support technique 24/7.'
        }
      },
      manufacturing: {
        title: 'Excellence Manufacturière',
        description: 'Notre campus du Parc Industriel de Kairouan intègre l\'excellence de l\'ingénierie coréenne avec le savoir-faire tunisien sur 6 installations spécialisées.',
        features: [
          '42 lignes Komax de coupe/dénudage automatisées',
          '28 stations de sertissage robotisées avec vision IA',
          'Zones d\'assemblage climatisées protégées ESD (15 000 m²)',
          'Laboratoire d\'essais interne approuvé UL',
          'Intégration de données Industrie 4.0',
          'Ligne de production dédiée EV haute tension'
        ]
      },
      gallery: {
        title: 'Nos Installations',
        items: ['Usines 1-3: Campus Principal Kairouan', 'Usines 4-5: Centre EV El Fahs', 'Usine 6: Centre R&D Sousse']
      },
      clients: {
        title: 'Nos Partenaires de Confiance'
      },
      testimonials: {
        title: 'Ce que nos partenaires disent de notre collaboration',
        subtitle: 'Retours réels de nos clients précieux',
        loading: 'Chargement des témoignages...',
        empty: 'Aucun témoignage disponible pour le moment.',
        position: 'Client'
      },
      cta: {
        title: 'Prêt à Partenarier avec Yura Kairouan?',
        description: 'Que vous ayez besoin de solutions de câblage standard ou de systèmes sur mesure pour votre prochaine plateforme véhicule, notre équipe d\'ingénieurs de 185 spécialistes est prête à collaborer.',
        contact: 'Contacter Notre Équipe',
        explore: 'Explorer Nos Solutions'
      }
    },

    // ==================== CAREERS PAGE ====================
    careers: {
      hero: {
        badge: 'Rejoignez Notre Équipe d\'Ingénierie',
        title: 'Construisez l\'Avenir de la Technologie Automobile',
        subtitle: 'Faites partie du plus grand fabricant tunisien de systèmes de câblage automobile avec 4 200+ employés et travaillez avec des marques véhicules mondiales'
      },
      stats: {
        engineering: 'Ingénieurs',
        rd: 'Projets R&D Actifs',
        training: 'Programmes Annuels',
        team: 'Membres de l\'Équipe'
      },
      positions: {
        title: 'Postes Ouverts',
        subtitle: 'Rejoignez notre équipe de spécialistes systèmes électriques automobile et développez votre carrière',
        electrical: {
          title: 'Ingénieur Conception Électrique',
          description: 'Concevoir et développer des systèmes de câblage automobile pour les plateformes Hyundai, Kia, Mercedes et Stellantis.'
        },
        quality: {
          title: 'Spécialiste Assurance Qualité',
          description: 'Garantir que nos systèmes de câblage respectent les normes IATF 16949 et les exigences clients.'
        },
        automation: {
          title: 'Technicien Automatisation',
          description: 'Maintenir et optimiser nos 42 lignes automatisées Komax et 28 stations de sertissage robotisées.'
        },
        process: {
          title: 'Ingénieur Procédés',
          description: 'Optimiser les processus de fabrication sur 6 installations de production.'
        },
        rd: {
          title: 'Ingénieur R&D - Systèmes EV',
          description: 'Développer des systèmes haute tension nouvelle génération pour véhicules électriques.'
        },
        logistics: {
          title: 'Coordinateur Supply Chain',
          description: 'Gérer les livraisons JIT vers 25+ pays sur 3 continents.'
        }
      },
      benefits: {
        title: 'Pourquoi Rejoindre Yura Kairouan?',
        subtitle: 'Nous investissons dans la croissance de notre équipe et offrons un environnement de travail gratifiant',
        development: {
          title: 'Développement Professionnel',
          description: '35 000+ heures de formation annuelles, programmes de certification technique et opportunités d\'échange avec le siège coréen.'
        },
        comprehensive: {
          title: 'Avantages Sociaux Complets',
          description: 'Salaire compétitif, assurance santé familiale, primes de performance, service de transport et repas subventionnés.'
        },
        exposure: {
          title: 'Exposition Internationale',
          description: 'Travailler avec des marques automobiles internationales, collaborer avec des équipes d\'ingénierie coréennes et contribuer aux technologies de pointe.'
        }
      },
      process: {
        title: 'Notre Processus de Recrutement',
        subtitle: 'Recrutement transparent et efficace pour les meilleurs talents',
        steps: ['Candidature', 'Évaluation Technique', 'Entretiens', 'Offre'],
        stepDescriptions: [
          'Soumettre CV et lettre via notre portail',
          'Évaluation technique par notre équipe ingénierie',
          'Entretien avec RH et managers techniques',
          'Offre compétitive pour candidats retenus'
        ]
      },
      cta: {
        title: 'Prêt à Alimenter le Futur de la Mobilité?',
        subtitle: 'Rejoignez 4 200+ professionnels chez le plus grand fabricant tunisien de faisceaux. Soumettez votre candidature ou contactez notre département RH.',
        contact: 'Contacter RH',
        apply: 'Postuler Maintenant'
      }
    },

    // ==================== CONTACT PAGE ====================
    contact: {
      hero: {
        badge: 'Contacter Yura Kairouan',
        title: 'Commençons une Conversation',
        subtitle: 'Que vous ayez une question sur nos produits, besoin d\'assistance technique ou souhaitiez discuter d\'un partenariat, notre équipe de 185 ingénieurs et 320 techniciens est prête à vous aider.'
      },
      section: {
        title: 'Restez en Contact',
        subtitle: 'Plusieurs façons de joindre notre équipe sur 6 sites'
      },
      form: {
        title: 'Envoyez-nous un Message',
        subtitle: 'Remplissez le formulaire et notre équipe vous répondra sous 24 heures',
        success: 'Merci pour votre message ! Notre équipe répondra sous 24 heures.',
        fields: {
          name: 'Nom Complet',
          email: 'Adresse Email',
          phone: 'Numéro de Téléphone (Optionnel)',
          subject: 'Sujet',
          message: 'Message'
        },
        placeholders: {
          name: 'Entrez votre nom',
          email: 'Entrez votre email',
          phone: '+216 XX XXX XXX',
          subject: 'À quel sujet?',
          message: 'Écrivez votre message ici...'
        },
        validation: {
          nameRequired: 'Le nom est requis',
          nameMin: 'Le nom doit contenir au moins 2 caractères',
          nameMax: 'Le nom doit contenir moins de 100 caractères',
          emailRequired: 'L\'email est requis',
          emailInvalid: 'Format d\'email invalide',
          phoneInvalid: 'Veuillez fournir un numéro de téléphone valide',
          subjectRequired: 'Le sujet est requis',
          subjectMin: 'Le sujet doit contenir au moins 3 caractères',
          subjectMax: 'Le sujet doit contenir moins de 255 caractères',
          messageRequired: 'Le message est requis',
          messageMin: 'Le message doit contenir au moins 10 caractères',
          messageMax: 'Le message doit contenir moins de 5000 caractères'
        },
        button: 'Envoyer',
        sending: 'Envoi...',
        responseTime: 'Nous répondons généralement sous 24 heures'
      },
      cards: {
        location: {
          title: 'Campus Principal',
          content: 'Zone Industrielle Sidi Amor\n3100 Kairouan, Tunisie',
          details: 'Siège social + 3 usines (35 000 m²)'
        },
        phone: {
          title: 'Centre de Contact',
          content: '+216 77 412 700',
          details: 'Dim-Jeu: 8h00 - 17h00 (GMT+1)'
        },
        email: {
          title: 'Envoyez-nous un Email',
          content: 'contact@yurakairouan.com.tn',
          details: 'Réponse sous 24 heures'
        }
      }
    },

    // ==================== ERROR PAGE ====================
    error: {
      badges: {
        400: 'Erreur 400',
        401: 'Erreur 401',
        403: 'Erreur 403',
        404: 'Erreur 404',
        500: 'Erreur 500',
        503: 'Erreur 503'
      },
      titles: {
        400: 'Mauvaise Requête',
        401: 'Accès Non Autorisé',
        403: 'Accès Interdit',
        404: 'Page Introuvable',
        500: 'Erreur Serveur',
        503: 'Service Indisponible'
      },
      messages: {
        400: 'La requête n\'a pas pu être comprise par le serveur.',
        401: 'Veuillez vous connecter pour accéder à cette page.',
        403: 'Vous n\'avez pas la permission d\'accéder à cette page.',
        404: 'La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.',
        500: 'Quelque chose s\'est mal passé de notre côté. Veuillez réessayer plus tard.',
        503: 'Le serveur est temporairement incapable de traiter votre demande.'
      },
      stats: {
        pageNotFound: 'Page Introuvable',
        serverIssue: 'Erreur Serveur',
        accessDenied: 'Accès Interdit',
        unauthorized: 'Non Autorisé'
      },
      buttons: {
        goHome: 'Accueil',
        goBack: 'Retour',
        refresh: 'Actualiser'
      },
      redirect: 'Redirection vers la page d\'accueil dans',
      seconds: 'secondes',
      suggestions: {
        title: 'Vous pouvez essayer ces liens',
        subtitle: 'Voici quelques suggestions utiles pour vous remettre sur la bonne voie',
        homepage: {
          title: 'Aller à l\'Accueil',
          description: 'Retournez à notre page principale et recommencez',
          link: 'Visiter l\'Accueil'
        },
        search: {
          title: 'Rechercher sur le Site',
          description: 'Trouvez ce que vous cherchez en utilisant notre recherche',
          link: 'Rechercher'
        },
        support: {
          title: 'Contacter le Support',
          description: 'Obtenez de l\'aide de notre équipe de support',
          link: 'Nous Contacter'
        }
      },
      help: {
        title: 'Encore Besoin d\'Aide?',
        description: 'Si vous continuez à rencontrer des problèmes, n\'hésitez pas à contacter notre équipe de support.',
        contact: 'Contacter le Support',
        faq: 'Voir la FAQ'
      },
      floatingCards: {
        lost: 'Perdu?',
        wrongTurn: 'Mauvais virage',
        navigate: 'Naviguer vers la maison'
      }
    },

    // ==================== LOCATIONS PAGE ====================
    locations: {
      hero: {
        badge: '6 Installations de Fabrication en Tunisie',
        title: 'Notré Réseau de Fabrication',
        subtitle: 'Empreinte stratégique à travers la Tunisie au service des partenaires automobiles mondiaux',
        buttons: {
          about: 'À propos',
          partner: 'Devenir Partenaire'
        }
      },
      stats: {
        title: 'Opérations Tunisie',
        subtitle: 'Le plus grand fabricant de faisceaux en Afrique du Nord',
        sites: 'Usines de Production',
        continents: 'Continents Desservis',
        certifications: 'Certifications Qualité',
        employees: 'Employés Totaux'
      },
      map: {
        title: 'Nos Installations à Travers la Tunisie',
        subtitle: '6 emplacements stratégiques optimisés pour la production et la logistique',
        placeholder: 'Carte Interactive de Nos Installations',
        clickHint: 'Cliquez sur les marqueurs pour explorer nos installations',
        markers: {
          kairouan: 'Kairouan - Campus Principal (Usines 1-3)',
          elfahs: 'El Fahs - Centre EV (Usines 4-5)',
          sousse: 'Sousse - Centre R&D (Usine 6)'
        }
      },
      locations: {
        title: 'Nos Installations de Fabrication',
        subtitle: 'Installations de pointe produisant des systèmes de câblage automobile',
        sites: [
          {
            title: 'Campus Kairouan - Usine 1',
            description: 'Installation phare avec capacités complètes de fabrication de faisceaux et siège social.',
            features: [
              '12 000 m² de production',
              'Certifié IATF 16949:2016',
              '12 lignes Komax automatisées',
              '8 stations de sertissage robotisées'
            ]
          },
          {
            title: 'Campus Kairouan - Usine 2',
            description: 'Installation de production haut volume pour véhicules particuliers.',
            features: [
              '10 000 m² de production',
              'Certifié ISO 9001:2015',
              '10 lignes Komax automatisées',
              'Hub logistique JIT'
            ]
          },
          {
            title: 'Campus Kairouan - Usine 3',
            description: 'Spécialisé dans les véhicules premium et assemblages complexes.',
            features: [
              '13 000 m² installation avancée',
              'Certifié VDA 6.3',
              'Zones ESD protégées',
              'Laboratoire de tests qualité'
            ]
          },
          {
            title: 'Centre EV El Fahs - Usine 4',
            description: 'Installation dédiée aux systèmes haute tension pour véhicules électriques.',
            features: [
              '8 000 m² spécifique EV',
              'Certification haute tension',
              'Assemblage composants EV',
              'Systèmes 600V+'
            ]
          },
          {
            title: 'Centre EV El Fahs - Usine 5',
            description: 'Assemblages électromécaniques et composants de recharge EV.',
            features: [
              '7 000 m² de production',
              'Intégration électromécanique',
              'Systèmes de recharge EV',
              'Solutions câblage sur mesure'
            ]
          },
          {
            title: 'Centre R&D Sousse - Usine 6',
            description: 'Pôle d\'Ingénierie & Innovation pour la mobilité future.',
            features: [
              '12 000 m² centre d\'ingénierie',
              '85 ingénieurs R&D',
              'Laboratoire de prototypage',
              'Tests approuvés UL'
            ]
          }
        ]
      },
      cta: {
        title: 'Rejoignez le Plus Grand Fabricant Tunisien de Faisceaux',
        description: 'Avec 6 installations à travers la Tunisie et 4 200+ employés, nous livrons des solutions de câblage de précision aux équipementiers mondiaux avec des standards qualité constants.',
        join: 'Rejoindre Notre Équipe',
        contact: 'Nous Contacter'
      }
    },

    // ==================== PRODUCTS PAGE ====================
    products: {
      hero: {
        badge: 'Produits Yura Kairouan',
        title: 'Câblage Automobile de Précision',
        subtitle: 'Conçu pour la Fiabilité et la Performance',
        buttons: {
          categories: 'Voir Catégories',
          custom: 'Solutions Personnalisées'
        }
      },
      stats: {
        title: 'Excellence Produit Mondiale',
        subtitle: 'Approuvé par les constructeurs automobiles mondiaux',
        models: 'Modèles Supportés',
        lines: 'Familles de Produits',
        certifications: 'Certifications Qualité',
        countries: 'Pays d\'Export'
      },
      categories: {
        title: 'Catégories de Produits',
        subtitle: 'Solutions de câblage complètes pour tous les systèmes automobiles',
        items: [
          {
            title: 'Faisceaux de Câblage',
            description: 'Systèmes de câblage complets pour véhicules particuliers, SUV et utilitaires'
          },
          {
            title: 'Connecteurs Électriques',
            description: 'Connecteurs étanches haute performance avec indices IP67/IP69K pour environnements difficiles'
          },
          {
            title: 'Distribution d\'Énergie',
            description: 'Boîtiers de jonction, panneaux de fusibles, relais pour architectures véhicules modernes'
          },
          {
            title: 'Systèmes Haute Tension',
            description: 'Câblage et composants 600V+ pour véhicules hybrides, hybrides rechargeables et électriques'
          },
          {
            title: 'Câblage Intelligent',
            description: 'Systèmes intelligents avec intégration CAN bus, LIN bus, ethernet'
          },
          {
            title: 'Systèmes de Sécurité',
            description: 'Câblage critique pour airbags, ABS, ESP, capteurs ADAS et conduite autonome'
          }
        ],
        explore: 'Explorer Produits'
      },
      harnesses: {
        title: 'Systèmes de Faisceaux de Câblage',
        subtitle: 'Solutions de câblage complètes pour toutes applications - 3,2 millions d\'unités par an',
        items: [
          {
            title: 'Faisceau Compartiment Moteur',
            description: 'Système résistant aux hautes températures pour compartiment moteur (150°C)',
            specs: [
              'Température: -40°C à 150°C',
              'Résistant huile, carburant et produits chimiques',
              'Longueurs et configurations personnalisées',
              'Production certifiée IATF 16949',
              'Testé abrasion et vibrations'
            ]
          },
          {
            title: 'Faisceau Châssis & Sous-carrosserie',
            description: 'Système robuste avec protection étanche et antipoussière',
            specs: [
              'Conduit ondulé résistant à l\'abrasion',
              'Connecteurs IP67/IP69K étanches',
              'Testé brouillard salin et vibrations',
              'Bornes résistantes à la corrosion',
              'Plage -40°C à 125°C'
            ]
          },
          {
            title: 'Faisceau Intérieur & Tableau de Bord',
            description: 'Système complet avec matériaux à faibles émissions',
            specs: [
              'Matériaux PVC et XLPE faibles émissions',
              'Design modulaire',
              'Bornes à connexion rapide',
              'Ignifuge UL94 V-0',
              'Options insonorisantes'
            ]
          },
          {
            title: 'Faisceau Haute Tension EV',
            description: 'Câblage orange sécurisé pour groupes motopropulseurs électriques',
            specs: [
              '600V à 1000V',
              'Gaine orange ISO 19642',
              'Options blindage EMI/RFI',
              'Systèmes connecteurs anti-contact',
              'Conforme ISO 19642 et LV216'
            ]
          },
          {
            title: 'Faisceau Porte & Siège',
            description: 'Solutions flexibles pour vitres, rétroviseurs, serrures et sièges',
            specs: [
              'Brins cuivre haute flexibilité',
              'Test flexion 3 millions cycles',
              'Isolation paroi mince',
              'Connecteurs déconnexion rapide',
              'Optimisé réduction masse'
            ]
          },
          {
            title: 'Faisceau Gestion Batterie',
            description: 'Câblage spécialisé pour packs batteries EV',
            specs: [
              'Circuit HVIL',
              'Intégration capteurs température',
              'Circuits monitoring voltage',
              'Options blindage EMI',
              'Sécurité ASIL D'
            ]
          }
        ],
        request: 'Demander Détails'
      },
      cta: {
        title: 'Solutions de Câblage Personnalisées',
        description: 'Besoin d\'une solution de câblage adaptée à votre plateforme véhicule spécifique? Notre équipe R&D de 85 ingénieurs peut développer des solutions personnalisées.',
        contact: 'Contact Commercial',
        sample: 'Demander un Échantillon'
      }
    }
  }
};

export default pageTranslations;