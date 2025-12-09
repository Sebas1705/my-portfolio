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
    subtitle: 'Get to know my story',
    description: 'I\'m a full stack developer passionate about creating innovative and impactful technology solutions. With over 5 years of experience in web and mobile development, I\'ve worked on projects ranging from complex enterprise applications to agile startups.\n\nMy approach is to combine best practices in software engineering with exceptional user experience. I believe technology should be accessible, efficient, and beautiful. Specialized in clean architectures, I\'m dedicated to writing maintainable, scalable code with excellent test coverage.\n\nBeyond coding, I enjoy mentoring fellow developers, contributing to open source projects, and staying up-to-date with the latest technology trends. When I\'m not programming, you\'ll find me exploring new technologies, reading about design patterns, or sharing knowledge with the development community.'
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
