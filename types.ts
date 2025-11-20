export interface Project {
  id: string;
  title: string;
  year: number;
  tags: string[];
  imageUrl: string;
  description: string;
  longDescription: string;
  technologies: string[];
  galleryImages: string[];
  videoUrl?: string;
  projectUrl?: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  about: string[];
  avatarUrl: string;
  social: {
    github: string;
    linkedin: string;
    itchio: string;
  };
}

export interface Skills {
  [key: string]: string[];
}

export interface Contact {
  title: string;
  description: string;
  email: string;
  phone?: string;
}

export interface AppData {
  profile: Profile;
  skills: Skills;
  projects: Project[];
  contact: Contact;
}
