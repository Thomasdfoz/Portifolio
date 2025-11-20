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

export interface Navbar {
  about: string;
  work: string;
  contact: string;
}

export interface Footer {
  rights: string;
}

export interface ContactForm {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  whatsappButton: string;
  emailButton: string;
  whatsappMessage: string;
  emailSubject: string;
  emailBody: string;
}

export interface Contact {
  title: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  infoTitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  form: ContactForm;
}

export interface Home {
  title: string;
  description: string;
}

export interface Labels {
  skills: string;
  viewProjects: string;
  projectNotFound: string;
  backToWork: string;
  back: string;
  technologies: string;
  viewProject: string;
  viewProjectDetails: string;
  projectImage: string;
}

export interface AppData {
  profile: Profile;
  skills: Skills;
  projects: Project[];
  contact: Contact;
  navbar: Navbar;
  footer: Footer;
  home: Home;
  labels: Labels;
}
