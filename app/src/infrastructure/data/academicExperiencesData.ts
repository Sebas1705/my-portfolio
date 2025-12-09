import type { AcademicExperience } from '@domain/entities/AcademicExperience';

export const academicExperiencesData: AcademicExperience[] = [
  {
    id: 'academic-1',
    institution: 'Universidad Politécnica de Madrid',
    degree: 'Máster',
    field: 'Ingeniería de Software',
    description: 'Especialización en arquitectura de software y desarrollo de aplicaciones empresariales.',
    startDate: new Date('2019-09-01'),
    endDate: new Date('2021-06-30'),
    location: 'Madrid, España',
    gpa: '9.2/10',
    achievements: [
      'Proyecto final: Sistema de gestión empresarial con arquitectura hexagonal',
      'Mejor proyecto de fin de máster del año',
      'Publicación en conferencia internacional'
    ]
  },
  {
    id: 'academic-2',
    institution: 'Universidad de Sevilla',
    degree: 'Grado',
    field: 'Ingeniería Informática',
    description: 'Fundamentos de programación, algoritmos, estructuras de datos y desarrollo de software.',
    startDate: new Date('2015-09-01'),
    endDate: new Date('2019-06-30'),
    location: 'Sevilla, España',
    gpa: '8.5/10',
    achievements: [
      'Premio al mejor expediente académico',
      'Participación en competencias de programación',
      'Desarrollo de aplicación móvil como proyecto final'
    ]
  }
];
