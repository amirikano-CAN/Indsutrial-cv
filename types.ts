export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  behance: string;
  instagram: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

export interface CertificationItem {
  issuer: string;
  title: string;
  year: string;
  logoSlug?: string | null;
  logoUrl?: string | null;
}

export interface AwardItem {
  project: string;
  recognition: string;
  institution: string;
  year: string;
  url?: string;
}

export type PortfolioCategory = "Industrial" | "Retail" | "Packaging" | "Digital";

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  poster?: string;
  caption?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  year: string;
  tags: string[];
  description: string;
  coverImageUrl: string;
  media?: ProjectMedia[];
}

export interface Translations {
  sections: {
    awards: string;
    certifications: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
  };
  ui: {
    savePdf: string;
    systemStatus: string;
    documentStatus: string;
    serialRef: string;
    copyright: string;
    loc: string;
    tel: string;
    skillStatus: string;
    exportPdf: string;
    switchLang: string;
  };
}

export interface CVData {
  config: {
    roleTitle: string;
    roleSubtitle: string;
    systemStatus: string;
    signatureUrl?: string;
  };
  translations: Translations;
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  awards: AwardItem[];
}