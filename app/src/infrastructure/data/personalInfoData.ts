import type { PersonalInfo } from '@domain/entities/PersonalInfo';

export const personalInfoData: PersonalInfo = {
  name: 'Sebastián',
  title: 'Full Stack & Mobile Developer',
  bio: 'Ingeniero full stack y mobile: diseño frontends rápidos, APIs sólidas y experiencias móviles listas para producción.',
  email: 'sebastian@example.com',
  phone: '+34 123 456 789',
  location: 'España',
  profileImage: '/profile.jpg',
  socialLinks: {
    github: 'https://github.com/Sebas1705',
    linkedin: 'https://linkedin.com/in/sebastian',
    twitter: 'https://twitter.com/sebastian',
    website: 'https://sebastian.dev'
  }
};
