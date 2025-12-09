import type { Translations } from '@domain/entities/Language';

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About Me',
    work: 'Work Experience',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact'
  },
  hero: {
    greeting: 'Hello, I\'m',
    title: 'Full Stack & Mobile Developer',
    description: 'Building fast, scalable web and mobile products with solid APIs',
    cta: 'View Projects',
    ctaSecondary: 'Contact Me',
    badge: 'Full Stack · Mobile',
    availability: 'Available for remote collaboration',
    stackLabel: 'Focus stack',
    highlights: {
      fast: 'Performance-first web and mobile experiences',
      api: 'API-first architectures with clean contracts',
      delivery: 'Production-ready shipping with CI/CD and observability'
    },
    pillars: {
      web: 'Web platforms',
      mobile: 'Mobile apps',
      api: 'API-first backends'
    }
  },
  about: {
    title: 'About Me',
    subtitle: 'Learn more about my journey'
  },
  work: {
    title: 'Work Experience',
    subtitle: 'My professional journey',
    current: 'Present',
    projects: 'Related projects',
    achievements: 'Key achievements'
  },
  education: {
    title: 'Education',
    subtitle: 'My educational background',
    projects: 'Academic projects',
    achievements: 'Key achievements'
  },
  skills: {
    title: 'Technologies & Skills',
    subtitle: 'Mastery of modern technologies with years of hands-on experience',
    allSkills: 'All Technologies',
    viewAll: 'View All Technologies'
  },
  projects: {
    title: 'Projects',
    subtitle: 'My work and creations',
    personal: 'Personal Projects',
    work: 'Work Projects',
    academic: 'Academic Projects',
    viewDemo: 'View Demo',
    viewCode: 'View Code',
    technologies: 'Technologies'
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let\'s talk about your project',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    social: 'Social Media',
    message: 'Have a project in mind? Contact me!'
  },
  common: {
    learnMore: 'Learn More',
    readMore: 'Read More',
    showLess: 'Show Less',
    loading: 'Loading...',
    error: 'Error loading data',
    back: 'Back'
  }
};
