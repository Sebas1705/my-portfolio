import type { Project } from '@domain/entities/Project';

export const projectsData: Project[] = [
  // Proyectos relacionados con trabajo
  {
    id: 'project-work-1',
    title: 'Sistema de Gestión Empresarial',
    description: 'Plataforma completa para gestión de recursos empresariales con módulos de inventario, facturación y RRHH.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    imageUrl: '/projects/erp-system.jpg',
    demoUrl: 'https://erp-demo.example.com',
    repoUrl: 'https://github.com/Sebas1705/erp-system',
    startDate: new Date('2022-03-01'),
    endDate: new Date('2023-01-15'),
    type: 'work',
    relatedTo: 'work-1'
  },
  {
    id: 'project-work-2',
    title: 'Dashboard Analytics',
    description: 'Dashboard interactivo para visualización de métricas y KPIs en tiempo real.',
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    imageUrl: '/projects/dashboard.jpg',
    demoUrl: 'https://dashboard-demo.example.com',
    startDate: new Date('2022-09-01'),
    endDate: new Date('2023-03-30'),
    type: 'work',
    relatedTo: 'work-1'
  },
  {
    id: 'project-work-3',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pago y gestión de productos.',
    technologies: ['Vue.js', 'Nuxt', 'Stripe', 'Firebase'],
    imageUrl: '/projects/ecommerce.jpg',
    demoUrl: 'https://shop-demo.example.com',
    repoUrl: 'https://github.com/Sebas1705/ecommerce',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2021-06-30'),
    type: 'work',
    relatedTo: 'work-2'
  },
  // Proyectos relacionados con academia
  {
    id: 'project-academic-1',
    title: 'Sistema de Arquitectura Hexagonal',
    description: 'Proyecto de máster implementando clean architecture y principios SOLID.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
    imageUrl: '/projects/hexagonal.jpg',
    repoUrl: 'https://github.com/Sebas1705/hexagonal-system',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2021-06-30'),
    type: 'academic',
    relatedTo: 'academic-1'
  },
  {
    id: 'project-academic-2',
    title: 'Aplicación Móvil de Gestión',
    description: 'App móvil multiplataforma para gestión de tareas y productividad personal.',
    technologies: ['React Native', 'Redux', 'Firebase', 'TypeScript'],
    imageUrl: '/projects/mobile-app.jpg',
    demoUrl: 'https://app-demo.example.com',
    repoUrl: 'https://github.com/Sebas1705/mobile-task-app',
    startDate: new Date('2018-09-01'),
    endDate: new Date('2019-06-30'),
    type: 'academic',
    relatedTo: 'academic-2'
  },
  // Proyectos personales
  {
    id: 'project-personal-1',
    title: 'Portfolio Personal',
    description: 'Mi portafolio web construido con Astro y clean architecture.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    imageUrl: '/projects/portfolio.jpg',
    demoUrl: 'https://sebastian.dev',
    repoUrl: 'https://github.com/Sebas1705/my-portfolio',
    startDate: new Date('2024-01-01'),
    type: 'personal'
  },
  {
    id: 'project-personal-2',
    title: 'API REST con Clean Architecture',
    description: 'Template de API REST siguiendo principios de clean architecture y DDD.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Jest'],
    imageUrl: '/projects/api-template.jpg',
    repoUrl: 'https://github.com/Sebas1705/clean-api-template',
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-08-30'),
    type: 'personal'
  },
  {
    id: 'project-personal-3',
    title: 'Blog Personal',
    description: 'Blog técnico sobre desarrollo de software y buenas prácticas.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/projects/blog.jpg',
    demoUrl: 'https://blog.sebastian.dev',
    repoUrl: 'https://github.com/Sebas1705/tech-blog',
    startDate: new Date('2023-01-01'),
    type: 'personal'
  }
];
