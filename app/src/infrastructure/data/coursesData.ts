import type { Course } from '@domain/entities/Course';

export const coursesData: Course[] = [
  {
    id: 'nextjs-masterclass',
    title: {
      es: 'Masterclass de Next.js',
      en: 'Next.js Complete Masterclass',
      fr: 'Masterclass Complète Next.js',
      de: 'Umfassender Next.js-Meisterkurs',
      it: 'Masterclass Completa Next.js',
      pt: 'Masterclass Completa de Next.js',
      nl: 'Volledige Next.js-masterclass',
      pl: 'Pełna Masterclass Next.js',
      ru: 'Полный мастер-класс Next.js',
      ja: 'Next.js完全マスタークラス'
    },
    description: {
      es: 'Next.js avanzado con App Router, Componentes de Servidor y Optimización de Rendimiento',
      en: 'Advanced Next.js with App Router, Server Components, and Performance Optimization',
      fr: 'Next.js avancé avec App Router, Composants Serveur et Optimisation des Performances',
      de: 'Fortgeschrittenes Next.js mit App Router, Server-Komponenten und Leistungsoptimierung',
      it: 'Next.js avanzato con App Router, Componenti Server e Ottimizzazione delle Prestazioni',
      pt: 'Next.js avançado com App Router, Componentes do Servidor e Otimização de Desempenho',
      nl: 'Geavanceerde Next.js met App Router, Server Components en Performance Optimization',
      pl: 'Zaawansowany Next.js z App Router, Server Components i optymalizacją wydajności',
      ru: 'Продвинутый Next.js с App Router, серверными компонентами и оптимизацией производительности',
      ja: 'App Router、サーバーコンポーネント、パフォーマンス最適化を備えた高度なNext.js'
    },
    institution: {
      es: 'Udemy',
      en: 'Udemy',
      fr: 'Udemy',
      de: 'Udemy',
      it: 'Udemy',
      pt: 'Udemy',
      nl: 'Udemy',
      pl: 'Udemy',
      ru: 'Udemy',
      ja: 'Udemy'
    },
    completionDate: new Date('2024-06-15'),
    url: 'https://udemy.com/nextjs-masterclass',
    skills: ['nextjs', 'react', 'typescript']
  },
  {
    id: 'react-patterns',
    title: {
      es: 'Patrones Avanzados de React',
      en: 'Advanced React Patterns',
      fr: 'Modèles Avancés React',
      de: 'Fortgeschrittene React-Muster',
      it: 'Pattern Avanzati di React',
      pt: 'Padrões Avançados de React',
      nl: 'Geavanceerde React-patronen',
      pl: 'Zaawansowane Wzorce React',
      ru: 'Продвинутые паттерны React',
      ja: '高度なReactパターン'
    },
    description: {
      es: 'Hooks personalizados, render props, componentes compuestos y patrones de gestión de estado',
      en: 'Custom hooks, render props, compound components, and state management patterns',
      fr: 'Hooks personnalisés, render props, composants composés et modèles de gestion d\'état',
      de: 'Benutzerdefinierte Hooks, Render Props, zusammengesetzte Komponenten und State-Management-Muster',
      it: 'Hook personalizzati, render props, componenti composti e pattern di gestione dello stato',
      pt: 'Hooks customizados, render props, componentes compostos e padrões de gerenciamento de estado',
      nl: 'Aangepaste hooks, render props, samengestelde componenten en state management-patronen',
      pl: 'Niestandardowe hooki, render props, komponenty złożone i wzorce zarządzania stanem',
      ru: 'Пользовательские хуки, функции рендера, составные компоненты и паттерны управления состоянием',
      ja: 'カスタムフック、レンダープロップス、複合コンポーネント、および状態管理パターン'
    },
    institution: {
      es: 'Egghead.io',
      en: 'Egghead.io',
      fr: 'Egghead.io',
      de: 'Egghead.io',
      it: 'Egghead.io',
      pt: 'Egghead.io',
      nl: 'Egghead.io',
      pl: 'Egghead.io',
      ru: 'Egghead.io',
      ja: 'Egghead.io'
    },
    completionDate: new Date('2024-05-20'),
    url: 'https://egghead.io/react-patterns',
    skills: ['react', 'javascript']
  },
  {
    id: 'nestjs-backend',
    title: {
      es: 'Desarrollo Backend con NestJS',
      en: 'NestJS Backend Development',
      fr: 'Développement Backend NestJS',
      de: 'NestJS-Backend-Entwicklung',
      it: 'Sviluppo Backend NestJS',
      pt: 'Desenvolvimento Backend NestJS',
      nl: 'NestJS-backendontwikkeling',
      pl: 'Programowanie backendu NestJS',
      ru: 'Разработка бэкэнда NestJS',
      ja: 'NestJSバックエンド開発'
    },
    description: {
      es: 'Construcción de APIs backend escalables con NestJS y TypeScript',
      en: 'Building scalable backend APIs with NestJS and TypeScript',
      fr: 'Création d\'API backend évolutives avec NestJS et TypeScript',
      de: 'Aufbau skalierbarer Backend-APIs mit NestJS und TypeScript',
      it: 'Creazione di API backend scalabili con NestJS e TypeScript',
      pt: 'Construindo APIs backend escaláveis com NestJS e TypeScript',
      nl: 'Schaalbare backend-API\'s bouwen met NestJS en TypeScript',
      pl: 'Budowanie skalowalnych API backendu za pomocą NestJS i TypeScript',
      ru: 'Создание масштабируемых API-интерфейсов бэкэнда с помощью NestJS и TypeScript',
      ja: 'NestJSとTypeScriptで拡張可能なバックエンドAPIを構築'
    },
    institution: {
      es: 'Pluralsight',
      en: 'Pluralsight',
      fr: 'Pluralsight',
      de: 'Pluralsight',
      it: 'Pluralsight',
      pt: 'Pluralsight',
      nl: 'Pluralsight',
      pl: 'Pluralsight',
      ru: 'Pluralsight',
      ja: 'Pluralsight'
    },
    completionDate: new Date('2024-03-10'),
    url: 'https://pluralsight.com/nestjs',
    skills: ['nestjs', 'nodejs', 'typescript', 'postgresql']
  },
  {
    id: 'docker-kubernetes',
    title: {
      es: 'Docker y Kubernetes para DevOps',
      en: 'Docker & Kubernetes for DevOps',
      fr: 'Docker et Kubernetes pour DevOps',
      de: 'Docker und Kubernetes für DevOps',
      it: 'Docker e Kubernetes per DevOps',
      pt: 'Docker e Kubernetes para DevOps',
      nl: 'Docker en Kubernetes voor DevOps',
      pl: 'Docker i Kubernetes dla DevOps',
      ru: 'Docker и Kubernetes для DevOps',
      ja: 'DevOps向けDockerおよびKubernetes'
    },
    description: {
      es: 'Orquestación de contenedores y estrategias de despliegue',
      en: 'Container orchestration and deployment strategies',
      fr: 'Orchestration de conteneurs et stratégies de déploiement',
      de: 'Container-Orchestrierung und Bereitstellungsstrategien',
      it: 'Orchestrazione dei container e strategie di distribuzione',
      pt: 'Orquestração de contêineres e estratégias de implantação',
      nl: 'Container-orkestratie en implementatiestrategieën',
      pl: 'Orkiestracja kontenerów i strategie wdrażania',
      ru: 'Оркестрирование контейнеров и стратегии развертывания',
      ja: 'コンテナオーケストレーションと展開戦略'
    },
    institution: {
      es: 'Linux Academy',
      en: 'Linux Academy',
      fr: 'Linux Academy',
      de: 'Linux Academy',
      it: 'Linux Academy',
      pt: 'Linux Academy',
      nl: 'Linux Academy',
      pl: 'Linux Academy',
      ru: 'Linux Academy',
      ja: 'Linux Academy'
    },
    completionDate: new Date('2024-02-28'),
    url: 'https://linuxacademy.com/docker-kubernetes',
    skills: ['docker', 'cicd']
  },
  {
    id: 'react-native-bootcamp',
    title: {
      es: 'Bootcamp React Native 2024',
      en: 'React Native Bootcamp 2024',
      fr: 'Bootcamp React Native 2024',
      de: 'React Native Bootcamp 2024',
      it: 'Bootcamp React Native 2024',
      pt: 'Bootcamp React Native 2024',
      nl: 'React Native Bootcamp 2024',
      pl: 'Bootcamp React Native 2024',
      ru: 'Bootcamp React Native 2024',
      ja: 'React Native Bootcamp 2024'
    },
    description: {
      es: 'Bootcamp completo para crear aplicaciones móviles listas para producción',
      en: 'Full bootcamp for building production-ready mobile apps',
      fr: 'Bootcamp complet pour créer des applications mobiles prêtes pour la production',
      de: 'Vollständiger Bootcamp für die Erstellung produktionsreifer mobiler Apps',
      it: 'Bootcamp completo per la creazione di app mobili pronte per la produzione',
      pt: 'Bootcamp completo para criar aplicativos móveis prontos para produção',
      nl: 'Volledige bootcamp voor het bouwen van productie-klare mobiele apps',
      pl: 'Pełny bootcamp do tworzenia aplikacji mobilnych gotowych do produkcji',
      ru: 'Полный bootcamp для создания мобильных приложений, готовых к продакшену',
      ja: '本番対応のモバイルアプリを構築するための完全なbootcamp'
    },
    institution: {
      es: 'Bootcamp de Codificación',
      en: 'Coding Boot Camp',
      fr: 'Bootcamp Coding',
      de: 'Coding Bootcamp',
      it: 'Coding Boot Camp',
      pt: 'Bootcamp Coding',
      nl: 'Coding Bootcamp',
      pl: 'Coding Bootcamp',
      ru: 'Bootcamp Coding',
      ja: 'Coding Bootcamp'
    },
    completionDate: new Date('2023-12-15'),
    certificateUrl: 'https://certificates.example.com/react-native-2024',
    skills: ['reactnative', 'typescript', 'javascript']
  },
  {
    id: 'aws-solutions-architect',
    title: {
      es: 'AWS Solutions Architect Associate',
      en: 'AWS Solutions Architect Associate',
      fr: 'AWS Solutions Architect Associate',
      de: 'AWS Solutions Architect Associate',
      it: 'AWS Solutions Architect Associate',
      pt: 'AWS Solutions Architect Associate',
      nl: 'AWS Solutions Architect Associate',
      pl: 'AWS Solutions Architect Associate',
      ru: 'AWS Solutions Architect Associate',
      ja: 'AWS Solutions Architect Associate'
    },
    description: {
      es: 'Servicios en la nube de AWS y arquitectura de soluciones',
      en: 'AWS cloud services and solution architecture',
      fr: 'Services cloud AWS et architecture de solutions',
      de: 'AWS-Cloud-Services und Lösungsarchitektur',
      it: 'Servizi cloud AWS e architettura delle soluzioni',
      pt: 'Serviços em nuvem AWS e arquitetura de soluções',
      nl: 'AWS-cloudservices en solution architecture',
      pl: 'Usługi chmury AWS i architektura rozwiązań',
      ru: 'Облачные сервисы AWS и архитектура решений',
      ja: 'AWSクラウドサービスとソリューションアーキテクチャ'
    },
    institution: {
      es: 'AWS',
      en: 'AWS',
      fr: 'AWS',
      de: 'AWS',
      it: 'AWS',
      pt: 'AWS',
      nl: 'AWS',
      pl: 'AWS',
      ru: 'AWS',
      ja: 'AWS'
    },
    completionDate: new Date('2023-11-30'),
    certificateUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate',
    skills: ['aws', 'docker']
  },
  {
    id: 'mongodb-university',
    title: {
      es: 'MongoDB University - M001',
      en: 'MongoDB University - M001',
      fr: 'MongoDB University - M001',
      de: 'MongoDB University - M001',
      it: 'MongoDB University - M001',
      pt: 'MongoDB University - M001',
      nl: 'MongoDB University - M001',
      pl: 'MongoDB University - M001',
      ru: 'MongoDB University - M001',
      ja: 'MongoDB University - M001'
    },
    description: {
      es: 'Fundamentos de MongoDB y desarrollo',
      en: 'MongoDB fundamentals and development',
      fr: 'Fondamentaux de MongoDB et développement',
      de: 'MongoDB-Grundlagen und -Entwicklung',
      it: 'Fondamenti di MongoDB e sviluppo',
      pt: 'Fundamentos do MongoDB e desenvolvimento',
      nl: 'MongoDB-fundamentals en -ontwikkeling',
      pl: 'Podstawy MongoDB i programowanie',
      ru: 'Основы MongoDB и разработка',
      ja: 'MongoDBの基礎と開発'
    },
    institution: {
      es: 'Universidad MongoDB',
      en: 'MongoDB University',
      fr: 'Université MongoDB',
      de: 'MongoDB-Universität',
      it: 'Università MongoDB',
      pt: 'Universidade MongoDB',
      nl: 'MongoDB University',
      pl: 'Uniwersytet MongoDB',
      ru: 'Университет MongoDB',
      ja: 'MongoDB University'
    },
    completionDate: new Date('2023-10-15'),
    certificateUrl: 'https://university.mongodb.com',
    skills: ['mongodb', 'nodejs']
  },
  {
    id: 'typescript-advanced',
    title: {
      es: 'TypeScript Avanzado',
      en: 'Advanced TypeScript',
      fr: 'TypeScript Avancé',
      de: 'Fortgeschrittenes TypeScript',
      it: 'TypeScript Avanzato',
      pt: 'TypeScript Avançado',
      nl: 'Geavanceerde TypeScript',
      pl: 'Zaawansowany TypeScript',
      ru: 'Продвинутый TypeScript',
      ja: '高度なTypeScript'
    },
    description: {
      es: 'Patrones avanzados de TypeScript y dominio del sistema de tipos',
      en: 'Advanced TypeScript patterns and type system mastery',
      fr: 'Modèles TypeScript avancés et maîtrise du système de types',
      de: 'Fortgeschrittene TypeScript-Muster und Typsystem-Beherrschung',
      it: 'Pattern TypeScript avanzati e padronanza del sistema dei tipi',
      pt: 'Padrões avançados de TypeScript e domínio do sistema de tipos',
      nl: 'Geavanceerde TypeScript-patronen en beheersing van het typesysteem',
      pl: 'Zaawansowane wzorce TypeScript i opanowanie systemu typów',
      ru: 'Продвинутые паттерны TypeScript и владение системой типов',
      ja: '高度なTypeScriptパターンと型システムの習得'
    },
    institution: {
      es: 'Frontend Masters',
      en: 'Frontend Masters',
      fr: 'Frontend Masters',
      de: 'Frontend Masters',
      it: 'Frontend Masters',
      pt: 'Frontend Masters',
      nl: 'Frontend Masters',
      pl: 'Frontend Masters',
      ru: 'Frontend Masters',
      ja: 'Frontend Masters'
    },
    completionDate: new Date('2023-09-20'),
    url: 'https://frontendmasters.com/typescript',
    skills: ['typescript', 'javascript']
  },
  {
    id: 'web-performance',
    title: {
      es: 'Fundamentos de Rendimiento Web',
      en: 'Web Performance Fundamentals',
      fr: 'Fondamentaux de la Performance Web',
      de: 'Grundlagen der Webperformanz',
      it: 'Fondamenti delle Prestazioni Web',
      pt: 'Fundamentos de Desempenho Web',
      nl: 'Grondbeginselen van webprestaties',
      pl: 'Podstawy wydajności sieci Web',
      ru: 'Основы веб-производительности',
      ja: 'Webパフォーマンスの基礎'
    },
    description: {
      es: 'Optimización de aplicaciones web para velocidad y eficiencia',
      en: 'Optimizing web applications for speed and efficiency',
      fr: 'Optimisation des applications web pour la vitesse et l\'efficacité',
      de: 'Optimierung von Webanwendungen für Geschwindigkeit und Effizienz',
      it: 'Ottimizzazione delle applicazioni web per velocità ed efficienza',
      pt: 'Otimização de aplicações web para velocidade e eficiência',
      nl: 'Webapplicaties optimaliseren voor snelheid en efficiëntie',
      pl: 'Optymalizacja aplikacji internetowych pod kątem szybkości i wydajności',
      ru: 'Оптимизация веб-приложений для скорости и эффективности',
      ja: 'スピードと効率のためのWebアプリケーションの最適化'
    },
    institution: {
      es: 'Google DevTools',
      en: 'Google DevTools',
      fr: 'Google DevTools',
      de: 'Google DevTools',
      it: 'Google DevTools',
      pt: 'Google DevTools',
      nl: 'Google DevTools',
      pl: 'Google DevTools',
      ru: 'Google DevTools',
      ja: 'Google DevTools'
    },
    completionDate: new Date('2023-08-10'),
    url: 'https://web.dev/performance',
    skills: ['react', 'nextjs', 'tailwind']
  },
  {
    id: 'figma-design-system',
    title: {
      es: 'Sistemas de Diseño con Figma',
      en: 'Design Systems with Figma',
      fr: 'Systèmes de Conception avec Figma',
      de: 'Design-Systeme mit Figma',
      it: 'Sistemi di Design con Figma',
      pt: 'Sistemas de Design com Figma',
      nl: 'Ontwerpsystemen met Figma',
      pl: 'Systemy projektowania za pomocą Figma',
      ru: 'Системы дизайна с помощью Figma',
      ja: 'Figmaを使用したデザインシステム'
    },
    description: {
      es: 'Creación y mantenimiento de sistemas de diseño en Figma',
      en: 'Creating and maintaining design systems in Figma',
      fr: 'Création et maintenance des systèmes de conception dans Figma',
      de: 'Erstellung und Verwaltung von Design-Systemen in Figma',
      it: 'Creazione e manutenzione di sistemi di design in Figma',
      pt: 'Criação e manutenção de sistemas de design no Figma',
      nl: 'Het maken en onderhouden van ontwerpsystemen in Figma',
      pl: 'Tworzenie i utrzymywanie systemów projektowania w Figma',
      ru: 'Создание и поддержка систем дизайна в Figma',
      ja: 'Figmaでのデザインシステムの作成と保守'
    },
    institution: {
      es: 'Taller de Diseño',
      en: 'Design Workshop',
      fr: 'Atelier de Conception',
      de: 'Design-Workshop',
      it: 'Workshop di Design',
      pt: 'Workshop de Design',
      nl: 'Design Workshop',
      pl: 'Workshop Projektowania',
      ru: 'Мастерская дизайна',
      ja: 'デザインワークショップ'
    },
    completionDate: new Date('2023-07-05'),
    skills: ['figma']
  }
];
