import type { Course } from '@domain/entities/Course';

export const coursesData: Course[] = [
  {
    id: 'nextjs-masterclass',
    title: 'Next.js Complete Masterclass',
    description: 'Advanced Next.js with App Router, Server Components, and Performance Optimization',
    institution: 'Udemy',
    completionDate: new Date('2024-06-15'),
    url: 'https://udemy.com/nextjs-masterclass',
    skills: ['nextjs', 'react', 'typescript'],
    category: 'online'
  },
  {
    id: 'react-patterns',
    title: 'Advanced React Patterns',
    description: 'Custom hooks, render props, compound components, and state management patterns',
    institution: 'Egghead.io',
    completionDate: new Date('2024-05-20'),
    url: 'https://egghead.io/react-patterns',
    skills: ['react', 'javascript'],
    category: 'online'
  },
  {
    id: 'nestjs-backend',
    title: 'NestJS Backend Development',
    description: 'Building scalable backend APIs with NestJS and TypeScript',
    institution: 'Pluralsight',
    completionDate: new Date('2024-03-10'),
    url: 'https://pluralsight.com/nestjs',
    skills: ['nestjs', 'nodejs', 'typescript', 'postgresql'],
    category: 'online'
  },
  {
    id: 'docker-kubernetes',
    title: 'Docker & Kubernetes for DevOps',
    description: 'Container orchestration and deployment strategies',
    institution: 'Linux Academy',
    completionDate: new Date('2024-02-28'),
    url: 'https://linuxacademy.com/docker-kubernetes',
    skills: ['docker', 'cicd'],
    category: 'online'
  },
  {
    id: 'react-native-bootcamp',
    title: 'React Native Bootcamp 2024',
    description: 'Full bootcamp for building production-ready mobile apps',
    institution: 'Coding Boot Camp',
    completionDate: new Date('2023-12-15'),
    certificateUrl: 'https://certificates.example.com/react-native-2024',
    skills: ['reactnative', 'typescript', 'javascript'],
    category: 'bootcamp'
  },
  {
    id: 'aws-solutions-architect',
    title: 'AWS Solutions Architect Associate',
    description: 'AWS cloud services and solution architecture',
    institution: 'AWS',
    completionDate: new Date('2023-11-30'),
    certificateUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate',
    skills: ['aws', 'docker'],
    category: 'certification'
  },
  {
    id: 'mongodb-university',
    title: 'MongoDB University - M001',
    description: 'MongoDB fundamentals and development',
    institution: 'MongoDB University',
    completionDate: new Date('2023-10-15'),
    certificateUrl: 'https://university.mongodb.com',
    skills: ['mongodb', 'nodejs'],
    category: 'online'
  },
  {
    id: 'typescript-advanced',
    title: 'Advanced TypeScript',
    description: 'Advanced TypeScript patterns and type system mastery',
    institution: 'Frontend Masters',
    completionDate: new Date('2023-09-20'),
    url: 'https://frontendmasters.com/typescript',
    skills: ['typescript', 'javascript'],
    category: 'online'
  },
  {
    id: 'web-performance',
    title: 'Web Performance Fundamentals',
    description: 'Optimizing web applications for speed and efficiency',
    institution: 'Google DevTools',
    completionDate: new Date('2023-08-10'),
    url: 'https://web.dev/performance',
    skills: ['react', 'nextjs', 'tailwind'],
    category: 'online'
  },
  {
    id: 'figma-design-system',
    title: 'Design Systems with Figma',
    description: 'Creating and maintaining design systems in Figma',
    institution: 'Design Workshop',
    completionDate: new Date('2023-07-05'),
    skills: ['figma'],
    category: 'workshop'
  }
];
