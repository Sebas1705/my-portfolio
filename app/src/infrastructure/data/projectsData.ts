import type { Project } from '@domain/entities/Project';

export const projectsData: Project[] = [
  // Proyectos relacionados con trabajo (privados)
  {
    id: 'project-work-1',
    title: {
      es: 'Sistema AGEDI',
      en: 'AGEDI System',
      fr: 'Système AGEDI',
      de: 'AGEDI-System',
      it: 'Sistema AGEDI',
      pt: 'Sistema AGEDI',
      nl: 'AGEDI-systeem',
      pl: 'System AGEDI',
      ru: 'Система AGEDI',
      ja: 'AGEDIシステム'
    },
    description: {
      es: 'Plataforma de gestión empresarial para AGEDI.',
      en: 'Enterprise management platform for AGEDI.',
      fr: 'Plateforme de gestion d\'entreprise pour AGEDI.',
      de: 'Unternehmensmanagement-Plattform für AGEDI.',
      it: 'Piattaforma di gestione aziendale per AGEDI.',
      pt: 'Plataforma de gerenciamento empresarial para AGEDI.',
      nl: 'Ondernemingsmanagementplatform voor AGEDI.',
      pl: 'Platforma zarządzania przedsiębiorstwem dla AGEDI.',
      ru: 'Платформа управления предприятием для AGEDI.',
      ja: 'AGEDI向けエンタープライズ管理プラットフォーム'
    },
    technologies: ['C#', '.NET', 'SQLServer'],
    startDate: new Date('2024-10-01'),
    type: 'work',
    relatedTo: 'work-1'
  },
  {
    id: 'project-work-1b',
    title: {
      es: 'Sistema AGEDI',
      en: 'AGEDI System',
      fr: 'Système AGEDI',
      de: 'AGEDI-System',
      it: 'Sistema AGEDI',
      pt: 'Sistema AGEDI',
      nl: 'AGEDI-systeem',
      pl: 'System AGEDI',
      ru: 'Система AGEDI',
      ja: 'AGEDIシステム'
    },
    description: {
      es: 'Plataforma de gestión empresarial para AGEDI.',
      en: 'Enterprise management platform for AGEDI.',
      fr: 'Plateforme de gestion d\'entreprise pour AGEDI.',
      de: 'Unternehmensmanagement-Plattform für AGEDI.',
      it: 'Piattaforma di gestione aziendale per AGEDI.',
      pt: 'Plataforma de gerenciamento empresarial para AGEDI.',
      nl: 'Ondernemingsmanagementplatform voor AGEDI.',
      pl: 'Platforma zarządzania przedsiębiorstwem dla AGEDI.',
      ru: 'Платформа управления предприятием для AGEDI.',
      ja: 'AGEDI向けエンタープライズ管理プラットフォーム'
    },
    technologies: ['C#', '.NET', 'SQLServer'],
    startDate: new Date('2024-10-01'),
    type: 'work',
    relatedTo: 'work-2'
  },
  {
    id: 'project-work-2',
    title: {
      es: 'Sistema Sisley',
      en: 'Sisley System',
      fr: 'Système Sisley',
      de: 'Sisley-System',
      it: 'Sistema Sisley',
      pt: 'Sistema Sisley',
      nl: 'Sisley-systeem',
      pl: 'System Sisley',
      ru: 'Система Sisley',
      ja: 'Sisleyシステム'
    },
    description: {
      es: 'Aplicación web y backend para gestión de contenido de Sisley.',
      en: 'Web application and backend for Sisley content management.',
      fr: 'Application web et backend pour la gestion de contenu Sisley.',
      de: 'Webanwendung und Backend für die Sisley-Inhaltsverwaltung.',
      it: 'Applicazione web e backend per la gestione dei contenuti Sisley.',
      pt: 'Aplicação web e backend para gerenciamento de conteúdo Sisley.',
      nl: 'Webtoepassing en backend voor Sisley-inhoudsbeheer.',
      pl: 'Aplikacja internetowa i backend do zarządzania treścią Sisley.',
      ru: 'Веб-приложение и бэкэнд для управления контентом Sisley.',
      ja: 'Sisley向けコンテンツ管理用Webアプリケーションおよびバックエンド'
    },
    technologies: ['React', 'C#', '.NET', 'SQLServer'],
    startDate: new Date('2024-10-01'),
    type: 'work',
    relatedTo: 'work-1'
  },
  {
    id: 'project-work-2b',
    title: {
      es: 'Sistema Sisley',
      en: 'Sisley System',
      fr: 'Système Sisley',
      de: 'Sisley-System',
      it: 'Sistema Sisley',
      pt: 'Sistema Sisley',
      nl: 'Sisley-systeem',
      pl: 'System Sisley',
      ru: 'Система Sisley',
      ja: 'Sisleyシステム'
    },
    description: {
      es: 'Aplicación web y backend para gestión de contenido de Sisley.',
      en: 'Web application and backend for Sisley content management.',
      fr: 'Application web et backend pour la gestion de contenu Sisley.',
      de: 'Webanwendung und Backend für die Sisley-Inhaltsverwaltung.',
      it: 'Applicazione web e backend per la gestione dei contenuti Sisley.',
      pt: 'Aplicação web e backend para gerenciamento de conteúdo Sisley.',
      nl: 'Webtoepassing en backend voor Sisley-inhoudsbeheer.',
      pl: 'Aplikacja internetowa i backend do zarządzania treścią Sisley.',
      ru: 'Веб-приложение и бэкэнд для управления контентом Sisley.',
      ja: 'Sisley向けコンテンツ管理用Webアプリケーションおよびバックエンド'
    },
    technologies: ['React', 'C#', '.NET', 'SQLServer'],
    startDate: new Date('2024-10-01'),
    type: 'work',
    relatedTo: 'work-2'
  },
  {
    id: 'project-work-3',
    title: {
      es: 'Sistema Iberext',
      en: 'Iberext System',
      fr: 'Système Iberext',
      de: 'Iberext-System',
      it: 'Sistema Iberext',
      pt: 'Sistema Iberext',
      nl: 'Iberext-systeem',
      pl: 'System Iberext',
      ru: 'Система Iberext',
      ja: 'Iberextシステム'
    },
    description: {
      es: 'Aplicación móvil para gestión de sistemas de prevención de incendios.',
      en: 'Mobile application for fire prevention systems management.',
      fr: 'Application mobile pour la gestion des systèmes de prévention des incendies.',
      de: 'Mobilanwendung für die Verwaltung von Brandschutzsystemen.',
      it: 'Applicazione mobile per la gestione dei sistemi antincendio.',
      pt: 'Aplicativo móvel para gerenciamento de sistemas de prevenção de incêndio.',
      nl: 'Mobiele toepassing voor brandpreventiesysteembeheer.',
      pl: 'Aplikacja mobilna do zarządzania systemami ochrony przeciwpożarowej.',
      ru: 'Мобильное приложение для управления системами пожарной безопасности.',
      ja: '火災予防システム管理用モバイルアプリケーション'
    },
    technologies: ['Kotlin', 'Jetpack Compose', 'C#', '.NET', 'SQLServer'],
    startDate: new Date('2024-10-01'),
    type: 'work',
    relatedTo: 'work-1'
  },
  {
    id: 'project-work-3b',
    title: {
      es: 'Sistema Iberext',
      en: 'Iberext System',
      fr: 'Système Iberext',
      de: 'Iberext-System',
      it: 'Sistema Iberext',
      pt: 'Sistema Iberext',
      nl: 'Iberext-systeem',
      pl: 'System Iberext',
      ru: 'Система Iberext',
      ja: 'Iberextシステム'
    },
    description: {
      es: 'Aplicación móvil para gestión de sistemas de prevención de incendios.',
      en: 'Mobile application for fire prevention systems management.',
      fr: 'Application mobile pour la gestion des systèmes de prévention des incendies.',
      de: 'Mobilanwendung für die Verwaltung von Brandschutzsystemen.',
      it: 'Applicazione mobile per la gestione dei sistemi antincendio.',
      pt: 'Aplicativo móvel para gerenciamento de sistemas de prevenção de incêndio.',
      nl: 'Mobiele toepassing voor brandpreventiesysteembeheer.',
      pl: 'Aplikacja mobilna do zarządzania systemami ochrony przeciwpożarowej.',
      ru: 'Мобильное приложение для управления системами пожарной безопасности.',
      ja: '火災予防システム管理用モバイルアプリケーション'
    },
    technologies: ['Kotlin', 'Jetpack Compose', 'C#', '.NET', 'SQLServer'],
    startDate: new Date('2024-10-01'),
    type: 'work',
    relatedTo: 'work-2'
  },
  {
    id: 'project-work-4',
    title: {
      es: 'EPDM - Portal de la Música',
      en: 'EPDM - Music Portal',
      fr: 'EPDM - Portail Musicale',
      de: 'EPDM - Musikportal',
      it: 'EPDM - Portale Musicale',
      pt: 'EPDM - Portal da Música',
      nl: 'EPDM - Muziekportaal',
      pl: 'EPDM - Portal Muzyki',
      ru: 'EPDM - Музыкальный портал',
      ja: 'EPDM - 音楽ポータル'
    },
    description: {
      es: 'Aplicación móvil para Portal de la Música con gestión de contenido musical y reproductor integrado.',
      en: 'Mobile application for Music Portal with music content management and integrated player.',
      fr: 'Application mobile pour Portail Musicale avec gestion de contenu musical et lecteur intégré.',
      de: 'Mobilanwendung für Musikportal mit Musikinhaltsverwaltung und integriertem Player.',
      it: 'Applicazione mobile per Portale Musicale con gestione dei contenuti musicali e lettore integrato.',
      pt: 'Aplicativo móvel para Portal da Música com gerenciamento de conteúdo musical e player integrado.',
      nl: 'Mobiele toepassing voor Muziekportaal met muziekinhoudsbeheer en geïntegreerde speler.',
      pl: 'Aplikacja mobilna dla Portalu Muzyki z zarządzaniem treścią muzyczną i wbudowanym odtwarzaczem.',
      ru: 'Мобильное приложение для музыкального портала с управлением музыкальным контентом и встроенным плеером.',
      ja: '音楽コンテンツ管理と統合プレーヤーを備えた音楽ポータル向けモバイルアプリケーション'
    },
    technologies: ['Kotlin', 'Jetpack Compose', '.NET', 'SQLServer'],
    imageUrl: '/projects/epdm.jpg',
    demoUrl: 'https://play.google.com/store/apps/details?id=es.solusoft.epdm&hl=es_419&pli=1',
    startDate: new Date('2025-03-01'),
    type: 'work',
    relatedTo: 'work-1'
  },
  // Proyectos relacionados con academia
  {
    id: 'project-academic-1',
    title: {
      es: 'Desarrollo Web Full Stack',
      en: 'Full Stack Web Development',
      fr: 'Développement Web Full Stack',
      de: 'Full-Stack-Webentwicklung',
      it: 'Sviluppo Web Full Stack',
      pt: 'Desenvolvimento Web Full Stack',
      nl: 'Full-Stack Webontwikkeling',
      pl: 'Tworzenie stron internetowych Full Stack',
      ru: 'Полнофункциональная веб-разработка',
      ja: 'フルスタックWeb開発'
    },
    description: {
      es: 'Proyecto de grado implementando arquitectura web moderna con frontend y backend integrado.',
      en: 'Degree project implementing modern web architecture with integrated frontend and backend.',
      fr: 'Projet de diplôme implémentant une architecture web moderne avec frontend et backend intégrés.',
      de: 'Diplomarbeit zur Implementierung moderner Webarchitektur mit integriertem Frontend und Backend.',
      it: 'Progetto di laurea che implementa un\'architettura web moderna con frontend e backend integrato.',
      pt: 'Projeto de grau implementando arquitetura web moderna com frontend e backend integrados.',
      nl: 'Afstudeerproject dat moderne webarchitectuur implementeert met geïntegreerde frontend en backend.',
      pl: 'Projekt dyplomowy implementujący nowoczesną architekturę internetową z zintegrowanym frontendem i backendem.',
      ru: 'Дипломный проект, реализующий современную веб-архитектуру с интегрированным интерфейсом и бэкэндом.',
      ja: 'フロントエンドとバックエンドが統合された最新のWeb Architectureを実装する学位プロジェクト'
    },
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/projects/fullstack.jpg',
    repoUrl: 'https://github.com/Sebas1705/fullstack-project',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2025-06-30'),
    type: 'academic',
    relatedTo: 'academic-2'
  },
  {
    id: 'project-academic-2',
    title: {
      es: 'Aplicación IA - Machine Learning',
      en: 'AI Application - Machine Learning',
      fr: 'Application IA - Apprentissage Automatique',
      de: 'KI-Anwendung - Maschinelles Lernen',
      it: 'Applicazione IA - Machine Learning',
      pt: 'Aplicação IA - Aprendizado de Máquina',
      nl: 'AI-toepassing - Machine Learning',
      pl: 'Aplikacja AI - Uczenie maszynowe',
      ru: 'Приложение AI - Машинное обучение',
      ja: 'AIアプリケーション - 機械学習'
    },
    description: {
      es: 'Proyecto del máster enfocado en desarrollo de aplicaciones con inteligencia artificial.',
      en: 'Master project focused on developing applications with artificial intelligence.',
      fr: 'Projet de master axé sur le développement d\'applications avec intelligence artificielle.',
      de: 'Masterprojekt mit Fokus auf die Entwicklung von Anwendungen mit künstlicher Intelligenz.',
      it: 'Progetto magistrale incentrato sullo sviluppo di applicazioni con intelligenza artificiale.',
      pt: 'Projeto de mestrado focado no desenvolvimento de aplicações com inteligência artificial.',
      nl: 'Masterproject gericht op de ontwikkeling van toepassingen met kunstmatige intelligentie.',
      pl: 'Projekt magisterski skupiający się na opracowywaniu aplikacji ze sztuczną inteligencją.',
      ru: 'Магистерский проект, сосредоточенный на разработке приложений с искусственным интеллектом.',
      ja: '人工知能を使用したアプリケーション開発に焦点を当てたマスタープロジェクト'
    },
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'scikit-learn'],
    imageUrl: '/projects/ai-app.jpg',
    startDate: new Date('2025-10-01'),
    type: 'academic',
    relatedTo: 'academic-3'
  },
  // Proyectos personales
  {
    id: 'project-personal-1',
    title: {
      es: 'Portfolio Personal',
      en: 'Personal Portfolio',
      fr: 'Portefeuille Personnel',
      de: 'Persönliches Portfolio',
      it: 'Portafoglio Personale',
      pt: 'Portfólio Pessoal',
      nl: 'Persoonlijk Portfolio',
      pl: 'Osobisty Portfel',
      ru: 'Личное портфолио',
      ja: 'パーソナルポートフォリオ'
    },
    description: {
      es: 'Mi portafolio web construido con Astro y clean architecture.',
      en: 'My web portfolio built with Astro and clean architecture.',
      fr: 'Mon portefeuille web construit avec Astro et architecture propre.',
      de: 'Mein Web-Portfolio, das mit Astro und Clean Architecture erstellt wurde.',
      it: 'Il mio portfolio web costruito con Astro e clean architecture.',
      pt: 'Meu portfólio web construído com Astro e arquitetura limpa.',
      nl: 'Mijn webportfolio gebouwd met Astro en schone architectuur.',
      pl: 'Moje portfolio internetowe zbudowane za pomocą Astro i czystej architektury.',
      ru: 'Мой веб-портфель, созданный с помощью Astro и чистой архитектуры.',
      ja: 'Astroとクリーンアーキテクチャで構築されたWebポートフォリオ'
    },
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    imageUrl: '/projects/portfolio.jpg',
    demoUrl: 'https://sebastian.dev',
    repoUrl: 'https://github.com/Sebas1705/my-portfolio',
    startDate: new Date('2024-01-01'),
    type: 'personal'
  },
  {
    id: 'project-personal-2',
    title: {
      es: 'API REST con Clean Architecture',
      en: 'REST API with Clean Architecture',
      fr: 'API REST avec Architecture Propre',
      de: 'REST API mit Clean Architecture',
      it: 'API REST con Clean Architecture',
      pt: 'API REST com Arquitetura Limpa',
      nl: 'REST API met Clean Architecture',
      pl: 'API REST z czystą architekturą',
      ru: 'REST API с чистой архитектурой',
      ja: 'クリーンアーキテクチャを備えたREST API'
    },
    description: {
      es: 'Template de API REST siguiendo principios de clean architecture y DDD.',
      en: 'REST API template following clean architecture and DDD principles.',
      fr: 'Modèle d\'API REST suivant les principes d\'architecture propre et DDD.',
      de: 'REST-API-Vorlage, die Clean Architecture und DDD-Prinzipien befolgt.',
      it: 'Template di API REST seguendo i principi di architettura pulita e DDD.',
      pt: 'Template de API REST seguindo princípios de arquitetura limpa e DDD.',
      nl: 'REST API-sjabloon dat principes van schone architectuur en DDD volgt.',
      pl: 'Szablon API REST podążający za zasadami czystej architektury i DDD.',
      ru: 'Шаблон REST API, следующий принципам чистой архитектуры и DDD.',
      ja: 'クリーンアーキテクチャとDDDの原則に従うREST APIテンプレート'
    },
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Jest'],
    imageUrl: '/projects/api-template.jpg',
    repoUrl: 'https://github.com/Sebas1705/clean-api-template',
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-08-30'),
    type: 'personal'
  },
  {
    id: 'project-personal-3',
    title: {
      es: 'Blog Personal',
      en: 'Personal Blog',
      fr: 'Blog Personnel',
      de: 'Persönliches Blog',
      it: 'Blog Personale',
      pt: 'Blog Pessoal',
      nl: 'Persoonlijke Blog',
      pl: 'Blog Osobisty',
      ru: 'Личный блог',
      ja: 'パーソナルブログ'
    },
    description: {
      es: 'Blog técnico sobre desarrollo de software y buenas prácticas.',
      en: 'Technical blog about software development and best practices.',
      fr: 'Blog technique sur le développement de logiciels et les meilleures pratiques.',
      de: 'Technischer Blog über Softwareentwicklung und Best Practices.',
      it: 'Blog tecnico su sviluppo software e best practice.',
      pt: 'Blog técnico sobre desenvolvimento de software e boas práticas.',
      nl: 'Technische blog over softwareontwikkeling en best practices.',
      pl: 'Blog techniczny o tworzeniu oprogramowania i najlepszych praktykach.',
      ru: 'Технический блог о разработке программного обеспечения и лучших практиках.',
      ja: 'ソフトウェア開発とベストプラクティスに関する技術ブログ'
    },
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/projects/blog.jpg',
    demoUrl: 'https://blog.sebastian.dev',
    repoUrl: 'https://github.com/Sebas1705/tech-blog',
    startDate: new Date('2023-01-01'),
    type: 'personal'
  }
];
