import { CVData } from './types';

// SHARED DATA (Contact, Images, Links)
const sharedContact = {
  location: "Montréal, QC, Canada",
  phone: "+1 (514) 570-4087",
  email: "amyr.labidi@outlook.com",
  linkedin: "https://linkedin.com/in/amirlabidi",
  behance: "https://behance.net/amirlab",
  instagram: "https://www.instagram.com/amyr.labidy/"
};

// ==========================================
// ENGLISH DATA
// ==========================================
export const cvDataEn: CVData = {
  config: {
    roleTitle: "Lead Industrial Designer",
    roleSubtitle: "Speculative Fabrication",
    systemStatus: "System Active: Core_V4"
  },
  translations: {
    sections: {
      awards: "Awards & Publications",
      certifications: "Certifications & Validation",
      experience: "Professional Scope",
      projects: "Case Studies",
      skills: "Technical Capability",
      education: "Academic Background"
    },
    ui: {
      savePdf: "Save PDF",
      systemStatus: "System Active",
      documentStatus: "DOCUMENT_STATUS: AUTHENTICATED",
      serialRef: "SERIAL_REF",
      copyright: "COPYRIGHT",
      loc: "LOC",
      tel: "TEL"
    }
  },
  name: "Amyr Labidi",
  title: "Bridging technical manufacturing precision with high-fidelity digital product experiences.",
  summary: "Senior Industrial Designer and Educator specializing in the intersection of physical drafting standards and digital interface logic. Over 10 years of experience delivering turnkey solutions for global leaders.",
  contact: sharedContact,
  skillCategories: [
    {
      title: "CAD / Surface Modeling",
      skills: [
        { name: "Rhino 3D (NURBS)", iconName: "" },
        { name: "AutoCAD Technical", iconName: "" },
        { name: "Fusion 360", iconName: "" },
        { name: "Geometric Dimensioning", iconName: "" }
      ]
    },
    {
      title: "Visualization / Drafting",
      skills: [
        { name: "KeyShot Mastering", iconName: "" },
        { name: "Adobe Creative Suite", iconName: "" },
        { name: "Product Sketching", iconName: "" },
        { name: "Technical Illustration", iconName: "" }
      ]
    },
    {
      title: "Strategy / Delivery",
      skills: [
        { name: "Design for Manufacturing", iconName: "" },
        { name: "UX/UI Architecture", iconName: "" },
        { name: "Rapid Prototyping", iconName: "" },
        { name: "Agile Product Cycles", iconName: "" }
      ]
    },
  ],
  certifications: [
    {
      issuer: "Autodesk",
      title: "Autodesk Inventor Certified",
      year: "2026",
      logoSlug: "autodesk",
    },
    {
      issuer: "IBM",
      title: "Enterprise Design Thinking Practitioner",
      year: "2023",
      logoUrl: "https://image2url.com/r2/default/images/1769565620630-d24f3b94-34a7-4061-aae3-ce96b50373c5.png",
    },
    {
      issuer: "A.C.M.T",
      title: "Product Management in UX Frameworks",
      year: "2023",
      logoUrl: "https://image2url.com/r2/default/images/1769565502964-a15b0d7d-11de-42c6-b938-037f34d41fe2.png",
    },
    {
      issuer: "ICTC-CTIC",
      title: "Canadian Certified Technology Professional",
      year: "2022",
      logoUrl: "https://image2url.com/r2/default/images/1769564929334-34e633cb-3742-4b1c-b52b-667752116888.png",
    },
  ],
  awards: [
    {
      project: "FreshNow",
      recognition: "Instant Freeze Bottle",
      institution: "Promotech, France",
      year: "2012"
    },
    {
      project: "Snachair",
      recognition: "Best Design of the Year",
      institution: "Favourite Design Awards",
      year: "2013"
    },
    {
      project: "Snachair",
      recognition: "Best Design of the Year",
      institution: "Design & Design Awards",
      year: "2015"
    },
    {
      project: "Strollon",
      recognition: "Unconventional Vehicles",
      institution: "Book publication",
      year: "2022"
    }
  ],
  experience: [
    {
      title: " Industrial Drafting Educator — Industrial & User-Centered Design",
      company: "ESIDEM Montreal",
      location: "Montreal, QC",
      period: "2025 - Present",
      description: [
        "Architecting curriculum for advanced industrial design principles.",
        "Trained 10+ students per year in professional drafting standards, GD&T, and production-ready documentation.",
        "Embedded user-centered design logic into technical workflows, improving student project clarity and real-world applicability."
      ]
    },
    {
      title: "Senior Product | Retail CX Designer",
      company: "CXG",
      location: "Dubai, UAE (Online)",
      period: "2022 - Present",
      description: [
        "Orchestrated global digital transformation initiatives for high-end retail brands.",
        "Translated business objectives into scalable design systems adopted across multi-region platforms.",
        "Directed the design of enterprise measurement tools supporting thousands of evaluation visits worldwide."
      ]
    },
    {
      title: "Lecturer – Industrial Product Design",
      company: "High School of Sciences and Tech of Design",
      location: "Tunis",
      period: "2017 - 2022",
      description: [
        "Teaching industrial product design with a strong emphasis on real-world constraints, user-centered design, manufacturability.",
        "Delivered 5+ years of industry-focused product design education emphasizing real-world constraints.",
        "Mentored graduates toward professional design standards, contributing to high post-graduation employability."
      ]
    },
    {
      title: "Co-Founder | Industrial Product Designer",
      company: "Crea'LAB® Agency",
      location: "Tunis",
      period: "2016 - 2022",
      description: [
        "Delivered turnkey industrial products for global clients including DELL, BIC, and Microsoft",
        "Defined end-to-end production strategies from concept through manufacturing-ready forms.",
        "Led and coordinated cross-functional teams to align innovation, feasibility, and market constraints."
      ]
    },
    {
      title: "Retail & Spatial Industrial Designer",
      company: "Almia Design",
      location: "Tunis",
      period: "Jan 2014 – Oct 2015",
      description: [
        "Designed modular buffet, kiosk, and retail systems deployed in hotels and restaurant environments.",
        "Developed industrial solutions optimized for high-traffic use, durability, and repeat manufacturing.",
        "Collaborated with architects and production teams to ensure on-site integration and fabrication accuracy."
      ]
    }
  ],
  projects: [
    {
      title: "Philips Sphezor - The Soft Razor",
      tags: ["Industrial", "Prototype", "Device"],
      description: "A compact grooming device focused on softness and ergonomics.",
      imageUrl: "https://image2url.com/r2/default/images/1769543946016-02cd3e38-01b9-42c4-9577-cd11a02e15e7.blob"
    },
    {
      title: "Colgate Unwasted — Foldable Wooden Toothbrush",
      tags: ["Sustainable Design", "Material Innovation"],
      description: "A sustainable oral-care concept integrating natural miswak fibers.",
      imageUrl: "https://image2url.com/r2/default/images/1769919768803-d3e4f075-80ba-47dd-8fac-6badc107c91a.jpg"
    },
    {
      title: "Shahad - The Minimalistic Luxurious Packaging",
      tags: ["Packaging", "Luxury", "Honey"],
      description: "A premium packaging concept combining minimal aesthetics with technical clarity.",
      imageUrl: "https://image2url.com/r2/default/images/1769688228650-6ffe235c-77e6-45c5-82ee-46d7908bf6bb.jpg"
    },
    {
      title: "Adidas Duo — Two Rituals. One Motion.",
      tags: ["Sport Lifestyle", "Daily Use"],
      description: "A modular fragrance system combining perfume and deodorant.",
      imageUrl: "https://image2url.com/r2/default/images/1769685814596-c470b6ce-0a63-43aa-b8ff-8e55729aa37b.jpg"
    }
  ],
  education: [
    {
      institution: "Ecole des Mines de Nancy",
      degree: "Master Degree - Global Design Sciences & Technologies",
      period: "2012 - 2014",
      location: "Nancy, FR"
    },
    {
      institution: "ESSTED - High School of Sciences and Tech of Design",
      degree: "Product Design Bachelor Degree",
      period: "2008 - 2012",
      location: "Tunis, TN"
    }
  ]
};

// ==========================================
// FRENCH (QUEBEC/TECHNICAL) DATA
// ==========================================
export const cvDataFr: CVData = {
  config: {
    roleTitle: "Designer Industriel Principal",
    roleSubtitle: "Fabrication Spéculative",
    systemStatus: "Système Actif: Core_V4"
  },
  translations: {
    sections: {
      awards: "Distinctions & Publications",
      certifications: "Certifications & Validation",
      experience: "Parcours Professionnel",
      projects: "Études de Cas",
      skills: "Compétences Techniques",
      education: "Formation Académique"
    },
    ui: {
      savePdf: "Enregistrer PDF",
      systemStatus: "Système Actif",
      documentStatus: "STATUT_DOCUMENT: AUTHENTIFIÉ",
      serialRef: "RÉF_SÉRIE",
      copyright: "DROITS",
      loc: "LOC",
      tel: "TÉL"
    }
  },
  name: "Amyr Labidi",
  title: "Allier la précision de la fabrication technique à des expériences de produits numériques haute fidélité.",
  summary: "Designer industriel senior et enseignant spécialisé dans l'intersection des normes de dessin technique et de la logique d'interface numérique. Plus de 10 ans d'expérience dans la livraison de solutions clé en main pour des leaders mondiaux.",
  contact: sharedContact,
  skillCategories: [
    {
      title: "CAO / Modélisation Surfacique",
      skills: [
        { name: "Rhino 3D (NURBS)", iconName: "" },
        { name: "AutoCAD Technique", iconName: "" },
        { name: "Fusion 360", iconName: "" },
        { name: "Cotation & Tolérancement (GD&T)", iconName: "" }
      ]
    },
    {
      title: "Visualisation / Dessin Technique",
      skills: [
        { name: "Maîtrise KeyShot", iconName: "" },
        { name: "Suite Adobe Creative", iconName: "" },
        { name: "Croquis de Produit", iconName: "" },
        { name: "Illustration Technique", iconName: "" }
      ]
    },
    {
      title: "Stratégie / Livraison",
      skills: [
        { name: "Conception pour la Fabrication (DFM)", iconName: "" },
        { name: "Architecture UX/UI", iconName: "" },
        { name: "Prototypage Rapide", iconName: "" },
        { name: "Cycles Produits Agiles", iconName: "" }
      ]
    },
  ],
  certifications: [
    {
      issuer: "Autodesk",
      title: "Certifié Autodesk Inventor",
      year: "2026",
      logoSlug: "autodesk",
    },
    {
      issuer: "IBM",
      title: "Praticien Enterprise Design Thinking",
      year: "2023",
      logoUrl: "https://image2url.com/r2/default/images/1769565620630-d24f3b94-34a7-4061-aae3-ce96b50373c5.png",
    },
    {
      issuer: "A.C.M.T",
      title: "Gestion de Produit dans les Cadres UX",
      year: "2023",
      logoUrl: "https://image2url.com/r2/default/images/1769565502964-a15b0d7d-11de-42c6-b938-037f34d41fe2.png",
    },
    {
      issuer: "ICTC-CTIC",
      title: "Professionnel Certifié en Technologie (Canada)",
      year: "2022",
      logoUrl: "https://image2url.com/r2/default/images/1769564929334-34e633cb-3742-4b1c-b52b-667752116888.png",
    },
  ],
  awards: [
    {
      project: "FreshNow",
      recognition: "Bouteille à Refroidissement Instantané",
      institution: "Promotech, France",
      year: "2012"
    },
    {
      project: "Snachair",
      recognition: "Meilleur Design de l'Année",
      institution: "Favourite Design Awards",
      year: "2013"
    },
    {
      project: "Snachair",
      recognition: "Meilleur Design de l'Année",
      institution: "Design & Design Awards",
      year: "2015"
    },
    {
      project: "Strollon",
      recognition: "Véhicules Non Conventionnels",
      institution: "Publication Livre",
      year: "2022"
    }
  ],
  experience: [
    {
      title: "Enseignant en Dessin Industriel — Conception Industrielle & Centrée Utilisateur",
      company: "ESIDEM Montréal",
      location: "Montréal, QC",
      period: "2025 - Présent",
      description: [
        "Architecture de programmes pour les principes avancés de design industriel.",
        "Formation de plus de 10 étudiants par an aux normes professionnelles de dessin, au GD&T et à la documentation prête pour la production.",
        "Intégration de la logique de conception centrée utilisateur dans les flux techniques, améliorant la clarté des projets étudiants et leur applicabilité concrète."
      ]
    },
    {
      title: "Designer Produit Senior | Designer CX Retail",
      company: "CXG",
      location: "Dubaï, EAU (À distance)",
      period: "2022 - Présent",
      description: [
        "Orchestration d'initiatives mondiales de transformation numérique pour des marques de détail haut de gamme.",
        "Traduction des objectifs d'affaires en systèmes de design évolutifs adoptés sur des plateformes multi-régions.",
        "Direction de la conception d'outils de mesure d'entreprise soutenant des milliers de visites d'évaluation dans le monde."
      ]
    },
    {
      title: "Chargé de Cours – Design de Produit Industriel",
      company: "École Supérieure des Sciences et Technologies du Design",
      location: "Tunis",
      period: "2017 - 2022",
      description: [
        "Enseignement du design de produit industriel avec un accent fort sur les contraintes réelles, la conception centrée utilisateur et la manufacturabilité.",
        "Prestation de plus de 5 ans d'éducation en design de produit axée sur l'industrie.",
        "Mentorat des diplômés vers les normes professionnelles de design, contribuant à une forte employabilité après l'obtention du diplôme."
      ]
    },
    {
      title: "Co-Fondateur | Designer de Produit Industriel",
      company: "Agence Crea'LAB®",
      location: "Tunis",
      period: "2016 - 2022",
      description: [
        "Livraison de produits industriels clé en main pour des clients mondiaux incluant DELL, BIC et Microsoft.",
        "Définition des stratégies de production de bout en bout, du concept aux formes prêtes pour la fabrication.",
        "Direction et coordination d'équipes interfonctionnelles pour aligner innovation, faisabilité et contraintes du marché."
      ]
    },
    {
      title: "Designer Industriel Retail & Spatial",
      company: "Almia Design",
      location: "Tunis",
      period: "Jan 2014 – Oct 2015",
      description: [
        "Conception de systèmes modulaires de buffet, kiosques et vente au détail déployés dans des environnements hôteliers et de restauration.",
        "Développement de solutions industrielles optimisées pour un usage intensif, la durabilité et la fabrication répétitive.",
        "Collaboration avec les architectes et les équipes de production pour assurer l'intégration sur site et la précision de fabrication."
      ]
    }
  ],
  projects: [
    {
      title: "Philips Sphezor - Le Rasoir Doux",
      tags: ["Industriel", "Prototype", "Appareil"],
      description: "Un appareil de toilettage compact axé sur la douceur et l'ergonomie.",
      imageUrl: "https://image2url.com/r2/default/images/1769543946016-02cd3e38-01b9-42c4-9577-cd11a02e15e7.blob"
    },
    {
      title: "Colgate Unwasted — Brosse à Dents en Bois Pliable",
      tags: ["Design Durable", "Innovation Matérielle"],
      description: "Un concept de soin bucco-dentaire durable intégrant des fibres naturelles de miswak.",
      imageUrl: "https://image2url.com/r2/default/images/1769919768803-d3e4f075-80ba-47dd-8fac-6badc107c91a.jpg"
    },
    {
      title: "Shahad - L'Emballage de Luxe Minimaliste",
      tags: ["Emballage", "Luxe", "Miel"],
      description: "Un concept d'emballage premium alliant esthétique minimale et clarté technique.",
      imageUrl: "https://image2url.com/r2/default/images/1769688228650-6ffe235c-77e6-45c5-82ee-46d7908bf6bb.jpg"
    },
    {
      title: "Adidas Duo — Deux Rituels. Un Mouvement.",
      tags: ["Style de Vie Sport", "Usage Quotidien"],
      description: "Un système de fragrance modulaire combinant parfum et déodorant.",
      imageUrl: "https://image2url.com/r2/default/images/1769685814596-c470b6ce-0a63-43aa-b8ff-8e55729aa37b.jpg"
    }
  ],
  education: [
    {
      institution: "École des Mines de Nancy",
      degree: "Maîtrise - Sciences & Technologies du Design Global",
      period: "2012 - 2014",
      location: "Nancy, FR"
    },
    {
      institution: "ESSTED - École Supérieure des Sciences et Technologies du Design",
      degree: "Baccalauréat en Design de Produit",
      period: "2008 - 2012",
      location: "Tunis, TN"
    }
  ]
};

// Default export as French (Quebec)
export const cvData = cvDataFr;