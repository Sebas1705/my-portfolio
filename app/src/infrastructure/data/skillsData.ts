import type { Skill } from '@domain/entities/Skill';

export const skillsData: Skill[] = [
  // Languages
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 5,
    category: 'languages',
    yearsOfExperience: 4,
    description: {
      es: 'TypeScript avanzado para aplicaciones type-safe',
      en: 'Advanced TypeScript for type-safe applications',
      fr: 'TypeScript avancé pour les applications type-safe',
      de: 'Erweitertes TypeScript für typsichere Anwendungen',
      it: 'TypeScript avanzato per applicazioni type-safe',
      pt: 'TypeScript avançado para aplicações type-safe',
      nl: 'Geavanceerde TypeScript voor type-safe applicaties',
      pl: 'Zaawansowany TypeScript dla aplikacji type-safe',
      ru: 'Продвинутый TypeScript для безопасных приложений',
      ja: '型安全なアプリケーション向けの高度なTypeScript'
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 5,
    category: 'languages',
    yearsOfExperience: 6,
    description: {
      es: 'Lenguaje principal para desarrollo web',
      en: 'Core language for web development',
      fr: 'Langage principal pour le développement web',
      de: 'Kernsprache für die Webentwicklung',
      it: 'Linguaggio core per lo sviluppo web',
      pt: 'Linguagem principal para desenvolvimento web',
      nl: 'Kernprogrammeertaal voor webontwikkeling',
      pl: 'Główny język do rozwoju internetowego',
      ru: 'Основной язык веб-разработки',
      ja: 'Web開発のコア言語'
    }
  },
  {
    id: 'python',
    name: 'Python',
    level: 3,
    category: 'languages',
    yearsOfExperience: 2,
    description: {
      es: 'Scripting y automatización',
      en: 'Scripting and automation',
      fr: 'Scripting et automatisation',
      de: 'Scripting und Automatisierung',
      it: 'Scripting e automazione',
      pt: 'Scripting e automação',
      nl: 'Scripting en automatisering',
      pl: 'Skrypty i automatyzacja',
      ru: 'Скриптование и автоматизация',
      ja: 'スクリプティングと自動化'
    }
  },
  {
    id: 'swift',
    name: 'Swift',
    level: 2,
    category: 'languages',
    yearsOfExperience: 1,
    description: {
      es: 'Desarrollo nativo de iOS',
      en: 'Native iOS development',
      fr: 'Développement natif iOS',
      de: 'Native iOS-Entwicklung',
      it: 'Sviluppo nativo iOS',
      pt: 'Desenvolvimento nativo iOS',
      nl: 'Native iOS-ontwikkeling',
      pl: 'Natywny rozwój iOS',
      ru: 'Собственная разработка iOS',
      ja: 'ネイティブiOS開発'
    }
  },
  {
    id: 'java',
    name: 'Java',
    level: 3,
    category: 'languages',
    yearsOfExperience: 2,
    description: {
      es: 'Desarrollo empresarial y Android',
      en: 'Enterprise and Android development',
      fr: 'Développement d\'entreprise et Android',
      de: 'Enterprise- und Android-Entwicklung',
      it: 'Sviluppo aziendale e Android',
      pt: 'Desenvolvimento empresarial e Android',
      nl: 'Enterprise- en Android-ontwikkeling',
      pl: 'Programowanie w przedsiębiorstwie i Android',
      ru: 'Корпоративная и Android-разработка',
      ja: 'エンタープライズおよびAndroid開発'
    }
  },
  
  // Frameworks
  {
    id: 'react',
    name: 'React',
    level: 5,
    category: 'frameworks',
    yearsOfExperience: 5,
    description: {
      es: 'Experto en React con hooks, context, state management',
      en: 'Expert in React with hooks, context, state management',
      fr: 'Expert en React avec hooks, contexte, gestion d\'état',
      de: 'Experte in React mit Hooks, Context, State Management',
      it: 'Esperto in React con hooks, context, gestione dello stato',
      pt: 'Especialista em React com hooks, context, gerenciamento de estado',
      nl: 'Expert in React met hooks, context, state management',
      pl: 'Ekspert w React z hookami, kontekstem, zarządzaniem stanem',
      ru: 'Эксперт в React с хуками, контекстом, управлением состоянием',
      ja: 'フック、コンテキスト、状態管理を備えたReactのエキスパート'
    }
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    level: 4,
    category: 'frameworks',
    yearsOfExperience: 3,
    description: {
      es: 'Framework full-stack con SSR, SSG, y rutas API',
      en: 'Full-stack framework with SSR, SSG, and API routes',
      fr: 'Framework full-stack avec SSR, SSG et routes API',
      de: 'Full-Stack-Framework mit SSR, SSG und API-Routen',
      it: 'Framework full-stack con SSR, SSG e route API',
      pt: 'Framework full-stack com SSR, SSG e rotas de API',
      nl: 'Full-stack framework met SSR, SSG en API-routes',
      pl: 'Framework full-stack z SSR, SSG i trasami API',
      ru: 'Полнофункциональный фреймворк с SSR, SSG и маршрутами API',
      ja: 'SSR、SSG、APIルートを備えたフルスタックフレームワーク'
    }
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 5,
    category: 'frameworks',
    yearsOfExperience: 5,
    description: {
      es: 'Desarrollo de JavaScript/TypeScript del lado del servidor',
      en: 'Server-side JavaScript/TypeScript development',
      fr: 'Développement JavaScript/TypeScript côté serveur',
      de: 'Serverseitige JavaScript/TypeScript-Entwicklung',
      it: 'Sviluppo JavaScript/TypeScript lato server',
      pt: 'Desenvolvimento JavaScript/TypeScript do lado do servidor',
      nl: 'Serverzijdige JavaScript/TypeScript-ontwikkeling',
      pl: 'Programowanie JavaScript/TypeScript po stronie serwera',
      ru: 'Серверная разработка JavaScript/TypeScript',
      ja: 'サーバーサイドのJavaScript/TypeScript開発'
    }
  },
  {
    id: 'nestjs',
    name: 'Nest.js',
    level: 4,
    category: 'frameworks',
    yearsOfExperience: 3,
    description: {
      es: 'Framework Node.js de nivel empresarial',
      en: 'Enterprise-grade Node.js framework',
      fr: 'Framework Node.js de classe entreprise',
      de: 'Node.js-Framework auf Unternehmensebene',
      it: 'Framework Node.js a livello aziendale',
      pt: 'Framework Node.js de nível empresarial',
      nl: 'Node.js-framework op ondernemingsniveau',
      pl: 'Framework Node.js na poziomie przedsiębiorstwa',
      ru: 'Фреймворк Node.js уровня предприятия',
      ja: 'エンタープライズグレードのNode.jsフレームワーク'
    }
  },
  {
    id: 'express',
    name: 'Express',
    level: 4,
    category: 'frameworks',
    yearsOfExperience: 4,
    description: {
      es: 'Framework web ligero para Node.js',
      en: 'Lightweight web framework for Node.js',
      fr: 'Framework web léger pour Node.js',
      de: 'Leichtgewichtiges Web-Framework für Node.js',
      it: 'Framework web leggero per Node.js',
      pt: 'Framework web leve para Node.js',
      nl: 'Licht web framework voor Node.js',
      pl: 'Lekki framework sieci Web dla Node.js',
      ru: 'Легкий веб-фреймворк для Node.js',
      ja: 'Node.js用の軽量Webフレームワーク'
    }
  },
  {
    id: 'reactnative',
    name: 'React Native',
    level: 4,
    category: 'frameworks',
    yearsOfExperience: 3,
    description: {
      es: 'Desarrollo multiplataforma de aplicaciones móviles',
      en: 'Cross-platform mobile development',
      fr: 'Développement mobile multiplateforme',
      de: 'Plattformübergreifende Mobile-Entwicklung',
      it: 'Sviluppo mobile multipiattaforma',
      pt: 'Desenvolvimento móvel multiplataforma',
      nl: 'Cross-platform mobiele ontwikkeling',
      pl: 'Wieloplatformowy rozwój mobilny',
      ru: 'Кроссплатформенная разработка мобильных приложений',
      ja: 'クロスプラットフォームモバイル開発'
    }
  },
  {
    id: 'expo',
    name: 'Expo',
    level: 4,
    category: 'frameworks',
    yearsOfExperience: 2,
    description: {
      es: 'Desarrollo simplificado de React Native',
      en: 'Streamlined React Native development',
      fr: 'Développement rationalisé de React Native',
      de: 'Optimierte React Native-Entwicklung',
      it: 'Sviluppo razionalizzato di React Native',
      pt: 'Desenvolvimento simplificado de React Native',
      nl: 'Vereenvoudigde React Native-ontwikkeling',
      pl: 'Usprawniony rozwój React Native',
      ru: 'Оптимизированная разработка React Native',
      ja: 'キューイットされたReact Native開発'
    }
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 4,
    category: 'frameworks',
    yearsOfExperience: 3,
    description: {
      es: 'Framework CSS basado en utilidades',
      en: 'Utility-first CSS framework',
      fr: 'Framework CSS basé sur les services publics',
      de: 'Utility-First-CSS-Framework',
      it: 'Framework CSS basato su utility',
      pt: 'Framework CSS baseado em utilitários',
      nl: 'Utility-first CSS framework',
      pl: 'Framework CSS oparty na narzędziach',
      ru: 'Фреймворк CSS, ориентированный на утилиты',
      ja: 'ユーティリティファーストのCSSフレームワーク'
    }
  },
  
  // Tools
  {
    id: 'docker',
    name: 'Docker',
    level: 4,
    category: 'tools',
    yearsOfExperience: 3,
    description: {
      es: 'Containerización para despliegues consistentes',
      en: 'Containerization for consistent deployments',
      fr: 'Conteneurisation pour des déploiements cohérents',
      de: 'Containerisierung für konsistente Bereitstellungen',
      it: 'Containerizzazione per distribuzioni coerenti',
      pt: 'Containerização para implantações consistentes',
      nl: 'Containerisatie voor consistente implementaties',
      pl: 'Konteneryzacja do spójnych wdrożeń',
      ru: 'Контейнеризация для согласованных развертываний',
      ja: '一貫したデプロイメント用のコンテナ化'
    }
  },
  {
    id: 'git',
    name: 'Git',
    level: 5,
    category: 'tools',
    yearsOfExperience: 5,
    description: {
      es: 'Sistema de control de versiones',
      en: 'Version control system',
      fr: 'Système de contrôle de version',
      de: 'Versionskontrollsystem',
      it: 'Sistema di controllo della versione',
      pt: 'Sistema de controle de versão',
      nl: 'Versiebeheeringsysteem',
      pl: 'System kontroli wersji',
      ru: 'Система контроля версий',
      ja: 'バージョン管理システム'
    }
  },
  {
    id: 'github',
    name: 'GitHub',
    level: 5,
    category: 'tools',
    yearsOfExperience: 5,
    description: {
      es: 'Plataforma colaborativa de desarrollo',
      en: 'Collaborative development platform',
      fr: 'Plateforme de développement collaborative',
      de: 'Kollaborative Entwicklungsplattform',
      it: 'Piattaforma collaborativa di sviluppo',
      pt: 'Plataforma colaborativa de desenvolvimento',
      nl: 'Samenwerkingsplatform voor ontwikkeling',
      pl: 'Platforma Współpracy Programistów',
      ru: 'Совместная платформа разработки',
      ja: 'コラボレーション開発プラットフォーム'
    }
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    level: 4,
    category: 'tools',
    yearsOfExperience: 3,
    description: {
      es: 'Plataforma DevOps con CI/CD',
      en: 'DevOps platform with CI/CD',
      fr: 'Plateforme DevOps avec CI/CD',
      de: 'DevOps-Plattform mit CI/CD',
      it: 'Piattaforma DevOps con CI/CD',
      pt: 'Plataforma DevOps com CI/CD',
      nl: 'DevOps platform met CI/CD',
      pl: 'Platforma DevOps z CI/CD',
      ru: 'Платформа DevOps с CI/CD',
      ja: 'CI/CDを備えたDevOpsプラットフォーム'
    }
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    level: 4,
    category: 'tools',
    yearsOfExperience: 4,
    description: {
      es: 'Base de datos SQL avanzada',
      en: 'Advanced SQL database',
      fr: 'Base de données SQL avancée',
      de: 'Fortgeschrittene SQL-Datenbank',
      it: 'Database SQL avanzato',
      pt: 'Banco de dados SQL avançado',
      nl: 'Geavanceerde SQL-database',
      pl: 'Zaawansowana baza danych SQL',
      ru: 'Продвинутая SQL база данных',
      ja: '高度なSQLデータベース'
    }
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    level: 3,
    category: 'tools',
    yearsOfExperience: 2,
    description: {
      es: 'Base de datos NoSQL',
      en: 'NoSQL database',
      fr: 'Base de données NoSQL',
      de: 'NoSQL-Datenbank',
      it: 'Database NoSQL',
      pt: 'Banco de dados NoSQL',
      nl: 'NoSQL-database',
      pl: 'Baza danych NoSQL',
      ru: 'База данных NoSQL',
      ja: 'NoSQLデータベース'
    }
  },
  {
    id: 'redis',
    name: 'Redis',
    level: 3,
    category: 'tools',
    yearsOfExperience: 2,
    description: {
      es: 'Almacén de datos en memoria',
      en: 'In-memory data store',
      fr: 'Magasin de données en mémoire',
      de: 'In-Memory-Datenspeicher',
      it: 'Archivio dati in memoria',
      pt: 'Armazenamento de dados em memória',
      nl: 'In-memory gegevensopslag',
      pl: 'Magazyn danych w pamięci',
      ru: 'Хранилище данных в памяти',
      ja: 'インメモリデータストア'
    }
  },
  {
    id: 'aws',
    name: 'AWS',
    level: 3,
    category: 'tools',
    yearsOfExperience: 2,
    description: {
      es: 'Plataforma de servicios en la nube',
      en: 'Cloud services platform',
      fr: 'Plateforme de services cloud',
      de: 'Cloud-Services-Plattform',
      it: 'Piattaforma servizi cloud',
      pt: 'Plataforma de serviços em nuvem',
      nl: 'Cloud services platform',
      pl: 'Platforma usług w chmurze',
      ru: 'Платформа облачных сервисов',
      ja: 'クラウドサービスプラットフォーム'
    }
  },
  {
    id: 'firebase',
    name: 'Firebase',
    level: 4,
    category: 'tools',
    yearsOfExperience: 3,
    description: {
      es: 'Plataforma Backend-as-a-Service',
      en: 'Backend-as-a-Service platform',
      fr: 'Plateforme Backend-as-a-Service',
      de: 'Backend-as-a-Service-Plattform',
      it: 'Piattaforma Backend-as-a-Service',
      pt: 'Plataforma Backend-as-a-Service',
      nl: 'Backend-as-a-Service platform',
      pl: 'Platforma Backend-as-a-Service',
      ru: 'Платформа Backend-as-a-Service',
      ja: 'Backend-as-a-Serviceプラットフォーム'
    }
  },
  {
    id: 'figma',
    name: 'Figma',
    level: 3,
    category: 'tools',
    yearsOfExperience: 2,
    description: {
      es: 'Diseño UI/UX y prototipado',
      en: 'UI/UX design and prototyping',
      fr: 'Conception UI/UX et prototypage',
      de: 'UI/UX-Design und Prototyping',
      it: 'Progettazione UI/UX e prototipazione',
      pt: 'Design UI/UX e prototipagem',
      nl: 'UI/UX-ontwerp en prototyping',
      pl: 'Projektowanie UI/UX i prototypowanie',
      ru: 'Дизайн пользовательского интерфейса и прототипирование',
      ja: 'UI/UXデザインとプロトタイピング'
    }
  },
  {
    id: 'jest',
    name: 'Jest',
    level: 4,
    category: 'tools',
    yearsOfExperience: 3,
    description: {
      es: 'Framework de testing de JavaScript',
      en: 'JavaScript testing framework',
      fr: 'Framework de test JavaScript',
      de: 'JavaScript-Testing-Framework',
      it: 'Framework di test JavaScript',
      pt: 'Framework de testes de JavaScript',
      nl: 'JavaScript-testframework',
      pl: 'Framework testowania JavaScript',
      ru: 'Фреймворк тестирования JavaScript',
      ja: 'JavaScriptテストフレームワーク'
    }
  },
  {
    id: 'vitest',
    name: 'Vitest',
    level: 4,
    category: 'tools',
    yearsOfExperience: 2,
    description: {
      es: 'Framework de testing nativo de Vite',
      en: 'Vite-native testing framework',
      fr: 'Framework de test natif Vite',
      de: 'Vite-natives Test-Framework',
      it: 'Framework di test nativo Vite',
      pt: 'Framework de testes nativo Vite',
      nl: 'Vite-native testframework',
      pl: 'Natywny framework testowania Vite',
      ru: 'Собственный фреймворк тестирования Vite',
      ja: 'Vitenativeテストフレームワーク'
    }
  },
  
  // IDEs
  {
    id: 'vscode',
    name: 'VS Code',
    level: 5,
    category: 'ides',
    yearsOfExperience: 5,
    description: {
      es: 'Editor de código principal',
      en: 'Primary code editor',
      fr: 'Éditeur de code principal',
      de: 'Primärer Code-Editor',
      it: 'Editor di codice principale',
      pt: 'Editor de código principal',
      nl: 'Primaire code-editor',
      pl: 'Główny edytor kodu',
      ru: 'Основной редактор кода',
      ja: 'プライマリコードエディタ'
    }
  },
  {
    id: 'webstorm',
    name: 'WebStorm',
    level: 4,
    category: 'ides',
    yearsOfExperience: 2,
    description: {
      es: 'IDE de JavaScript',
      en: 'JavaScript IDE',
      fr: 'IDE JavaScript',
      de: 'JavaScript-IDE',
      it: 'IDE JavaScript',
      pt: 'IDE JavaScript',
      nl: 'JavaScript IDE',
      pl: 'IDE JavaScript',
      ru: 'IDE JavaScript',
      ja: 'JavaScript IDE'
    }
  },
  {
    id: 'androidstudio',
    name: 'Android Studio',
    level: 3,
    category: 'ides',
    yearsOfExperience: 2,
    description: {
      es: 'IDE de desarrollo de Android',
      en: 'Android development IDE',
      fr: 'IDE de développement Android',
      de: 'Android-Entwicklungs-IDE',
      it: 'IDE per lo sviluppo Android',
      pt: 'IDE de desenvolvimento Android',
      nl: 'Android-ontwikkelings-IDE',
      pl: 'IDE programowania na Android',
      ru: 'IDE для разработки Android',
      ja: 'Android開発IDE'
    }
  },
  {
    id: 'xcode',
    name: 'Xcode',
    level: 2,
    category: 'ides',
    yearsOfExperience: 1,
    description: {
      es: 'IDE de desarrollo de iOS',
      en: 'iOS development IDE',
      fr: 'IDE de développement iOS',
      de: 'iOS-Entwicklungs-IDE',
      it: 'IDE per lo sviluppo iOS',
      pt: 'IDE de desenvolvimento iOS',
      nl: 'iOS-ontwikkelings-IDE',
      pl: 'IDE programowania na iOS',
      ru: 'IDE для разработки iOS',
      ja: 'iOS開発IDE'
    }
  },
  
  // Operating Systems
  {
    id: 'windows',
    name: 'Windows',
    level: 5,
    category: 'os',
    yearsOfExperience: 10,
    description: {
      es: 'SO principal de desarrollo',
      en: 'Primary development OS',
      fr: 'Système d\'exploitation de développement principal',
      de: 'Primäres Entwicklungs-Betriebssystem',
      it: 'Sistema operativo di sviluppo principale',
      pt: 'SO principal de desenvolvimento',
      nl: 'Primair ontwikkelings-besturingssysteem',
      pl: 'Główny system operacyjny programowania',
      ru: 'Основная ОС разработки',
      ja: 'プライマリ開発OS'
    }
  },
  {
    id: 'linux',
    name: 'Linux',
    level: 4,
    category: 'os',
    yearsOfExperience: 4,
    description: {
      es: 'Entorno de servidor y desarrollo',
      en: 'Server and development environment',
      fr: 'Environnement serveur et développement',
      de: 'Server- und Entwicklungsumgebung',
      it: 'Ambiente server e sviluppo',
      pt: 'Ambiente servidor e desenvolvimento',
      nl: 'Server- en ontwikkelingomgeving',
      pl: 'Środowisko serwera i rozwoju',
      ru: 'Серверная среда и среда разработки',
      ja: 'サーバーと開発環境'
    }
  },
  {
    id: 'macos',
    name: 'macOS',
    level: 3,
    category: 'os',
    yearsOfExperience: 2,
    description: {
      es: 'Plataforma de desarrollo de iOS',
      en: 'iOS development platform',
      fr: 'Plateforme de développement iOS',
      de: 'iOS-Entwicklungsplattform',
      it: 'Piattaforma di sviluppo iOS',
      pt: 'Plataforma de desenvolvimento iOS',
      nl: 'iOS-ontwikkelingplatform',
      pl: 'Platforma programowania iOS',
      ru: 'Платформа разработки iOS',
      ja: 'iOS開発プラットフォーム'
    }
  }
];
