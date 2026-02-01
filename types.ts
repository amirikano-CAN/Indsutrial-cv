export interface ContactInfo {
  email: string;
  linkedin: string;
  portfolio: string;
  location: string;
  phone?: string;
}

export interface SkillItem {
  name: string;
  iconName: string; // We will map this to Lucide icons
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
  logoSlug?: string | null; // for SimpleIcons
  logoUrl?: string | null;  // for external image (hosted)
}

export interface AwardItem {
  project: string;
  recognition: string;
  institution: string;
  year: string;
  url?: string;
}

export interface CVData {
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