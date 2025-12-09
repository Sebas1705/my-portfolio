import type { WorkExperience } from '@domain/entities/WorkExperience';

export const workExperiencesData: WorkExperience[] = [
  {
    id: 'work-1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    description: 'Desarrollo de aplicaciones web empresariales utilizando tecnologías modernas.',
    startDate: new Date('2022-01-01'),
    endDate: undefined,
    location: 'Madrid, España',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    achievements: [
      'Lideré la migración del sistema legacy a arquitectura de microservicios',
      'Reduje el tiempo de carga de la aplicación en un 40%',
      'Implementé sistema de CI/CD que mejoró la eficiencia del equipo en 30%'
    ]
  },
  {
    id: 'work-2',
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    description: 'Desarrollo de interfaces de usuario modernas y responsivas.',
    startDate: new Date('2020-06-01'),
    endDate: new Date('2021-12-31'),
    location: 'Barcelona, España',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    achievements: [
      'Desarrollé la plataforma web desde cero',
      'Implementé diseño responsivo que aumentó usuarios móviles en 50%',
      'Optimicé rendimiento logrando 95+ en Lighthouse'
    ]
  }
];
