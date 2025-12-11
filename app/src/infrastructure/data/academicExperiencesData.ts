import type { AcademicExperience } from '@domain/entities/AcademicExperience';

export const academicExperiencesData: AcademicExperience[] = [
  {
    id: 'academic-1',
    institution: {
      es: 'IES Maestro Matías Bravo',
      en: 'IES Maestro Matías Bravo',
      fr: 'IES Maestro Matías Bravo',
      de: 'IES Maestro Matías Bravo',
      it: 'IES Maestro Matías Bravo',
      pt: 'IES Maestro Matías Bravo',
      nl: 'IES Maestro Matías Bravo',
      pl: 'IES Maestro Matías Bravo',
      ru: 'IES Maestro Matías Bravo',
      ja: 'IES Maestro Matías Bravo'
    },
    degree: {
      es: 'Bachillerato',
      en: 'Baccalaureate',
      fr: 'Baccalauréat',
      de: 'Abitur',
      it: 'Diploma di Maturità',
      pt: 'Bacharelado',
      nl: 'Baccalaureaat',
      pl: 'Matura',
      ru: 'Бакалавриат',
      ja: 'バカロレア'
    },
    field: {
      es: 'Tecnológico',
      en: 'Technology',
      fr: 'Technologie',
      de: 'Technologie',
      it: 'Tecnologia',
      pt: 'Tecnologia',
      nl: 'Technologie',
      pl: 'Technologia',
      ru: 'Технология',
      ja: 'テクノロジー'
    },
    description: {
      es: 'Formación de aprendizaje superior basada en la realización del examen de acceso universitario español. Donde se estudian conocimientos generales enfocados a estudios de ingeniería y tecnologías.',
      en: 'Higher education training based on the Spanish university entrance exam. General knowledge focused on engineering and technology studies.',
      fr: 'Formation d\'enseignement supérieur basée sur l\'examen d\'entrée à l\'université espagnole. Connaissances générales axées sur les études d\'ingénierie et de technologie.',
      de: 'Hochschulbildung basierend auf der spanischen Universitätseingangsprüfung. Allgemeinwissen mit Fokus auf Ingenieur- und Technologiestudien.',
      it: 'Formazione di insegnamento superiore basata sull\'esame di ingresso universitario spagnolo. Conoscenze generali incentrate su studi di ingegneria e tecnologia.',
      pt: 'Formação de ensino superior baseada no exame de entrada da universidade espanhola. Conhecimentos gerais focados em estudos de engenharia e tecnologia.',
      nl: 'Hogeronderwijsvorming gebaseerd op het Spaanse universiteitstoelatingexamen. Algemene kennis gericht op onderwijs in techniek en technologie.',
      pl: 'Szkolenie szkoły wyższej oparte na egzaminie wstępnym na uniwersytet hiszpański. Wiedza ogólna skoncentrowana na studiach inżynierskich i technologicznych.',
      ru: 'Подготовка высшего образования, основанная на испанском экзамене при поступлении в университет. Общие знания, сосредоточенные на инженерных и технологических исследованиях.',
      ja: 'スペインの大学入学試験に基づく高等教育訓練。エンジニアリングとテクノロジーの研究に焦点を当てた一般知識。'
    },
    startDate: new Date('2018-09-01'),
    endDate: new Date('2020-06-30'),
    location: {
      es: 'Valdemoro, Madrid, España',
      en: 'Valdemoro, Madrid, Spain',
      fr: 'Valdemoro, Madrid, Espagne',
      de: 'Valdemoro, Madrid, Spanien',
      it: 'Valdemoro, Madrid, Spagna',
      pt: 'Valdemoro, Madrid, Espanha',
      nl: 'Valdemoro, Madrid, Spanje',
      pl: 'Valdemoro, Madryt, Hiszpania',
      ru: 'Вальдеморо, Мадрид, Испания',
      ja: 'バルデモロ、マドリッド、スペイン'
    },
    achievements: [
      {
        es: 'Aprendizaje de los sistemas digitales',
        en: 'Learning of digital systems',
        fr: 'Apprentissage des systèmes numériques',
        de: 'Erlernen von digitalen Systemen',
        it: 'Apprendimento dei sistemi digitali',
        pt: 'Aprendizagem de sistemas digitais',
        nl: 'Leren van digitale systemen',
        pl: 'Nauka systemów cyfrowych',
        ru: 'Изучение цифровых систем',
        ja: 'デジタルシステムの学習'
      },
      {
        es: 'Establecimiento de lógicas de programación con Processing',
        en: 'Programming logic with Processing',
        fr: 'Logique de programmation avec Processing',
        de: 'Programmierlogik mit Processing',
        it: 'Logica di programmazione con Processing',
        pt: 'Lógica de programação com Processing',
        nl: 'Programmeerlogica met Processing',
        pl: 'Logika programowania z Przetwarzaniem',
        ru: 'Логика программирования с обработкой',
        ja: 'Processingを使用したプログラミングロジック'
      },
      {
        es: 'Matemáticas académicas dirigidas a ingenierías',
        en: 'Academic mathematics for engineering',
        fr: 'Mathématiques académiques pour l\'ingénierie',
        de: 'Akademische Mathematik für das Ingenieurwesen',
        it: 'Matematica accademica per l\'ingegneria',
        pt: 'Matemática acadêmica para engenharia',
        nl: 'Academische wiskunde voor engineering',
        pl: 'Matematyka akademicka dla inżynierii',
        ru: 'Академическая математика для инженерии',
        ja: 'エンジニアリング向けの学問的数学'
      },
      {
        es: 'Física avanzada',
        en: 'Advanced physics',
        fr: 'Physique avancée',
        de: 'Fortgeschrittene Physik',
        it: 'Fisica avanzata',
        pt: 'Física avançada',
        nl: 'Geavanceerde fysica',
        pl: 'Fizyka zaawansowana',
        ru: 'Продвинутая физика',
        ja: '高度な物理学'
      }
    ]
  },
  {
    id: 'academic-2',
    institution: {
      es: 'Universidad Rey Juan Carlos',
      en: 'Rey Juan Carlos University',
      fr: 'Université Rey Juan Carlos',
      de: 'Universität Rey Juan Carlos',
      it: 'Università Rey Juan Carlos',
      pt: 'Universidade Rey Juan Carlos',
      nl: 'Universiteit Rey Juan Carlos',
      pl: 'Uniwersytet Rey Juan Carlos',
      ru: 'Университет Рея Хуана Карлоса',
      ja: 'レイ・フアン・カルロス大学'
    },
    degree: {
      es: 'Grado',
      en: 'Bachelor\'s Degree',
      fr: 'Licence',
      de: 'Bachelor',
      it: 'Laurea',
      pt: 'Bacharelado',
      nl: 'Bachelor',
      pl: 'Licencjat',
      ru: 'Степень бакалавра',
      ja: '学士号'
    },
    field: {
      es: 'Ingeniería Informática',
      en: 'Computer Engineering',
      fr: 'Génie Informatique',
      de: 'Computertechnik',
      it: 'Ingegneria Informatica',
      pt: 'Engenharia de Computadores',
      nl: 'Computertechniek',
      pl: 'Inżynieria Komputerowa',
      ru: 'Компьютерная инженерия',
      ja: 'コンピュータ工学'
    },
    description: {
      es: 'Formación completa en ingeniería informática con especialización en desarrollo de software.',
      en: 'Complete training in computer engineering with specialization in software development.',
      fr: 'Formation complète en génie informatique avec spécialisation en développement de logiciels.',
      de: 'Umfassende Schulung in Computertechnik mit Spezialisierung auf Softwareentwicklung.',
      it: 'Formazione completa in ingegneria informatica con specializzazione in sviluppo software.',
      pt: 'Treinamento completo em engenharia de computadores com especialização em desenvolvimento de software.',
      nl: 'Volledige training in computertechniek met specialisatie in softwareontwikkeling.',
      pl: 'Kompleksowe szkolenie z inżynierii komputerowej ze specjalizacją w tworzeniu oprogramowania.',
      ru: 'Полное обучение компьютерной инженерии со специализацией на разработке программного обеспечения.',
      ja: 'ソフトウェア開発を専門とするコンピュータ工学の完全なトレーニング。'
    },
    startDate: new Date('2020-09-01'),
    endDate: new Date('2025-06-30'),
    location: {
      es: 'Móstoles, Madrid, España',
      en: 'Móstoles, Madrid, Spain',
      fr: 'Móstoles, Madrid, Espagne',
      de: 'Móstoles, Madrid, Spanien',
      it: 'Móstoles, Madrid, Spagna',
      pt: 'Móstoles, Madrid, Espanha',
      nl: 'Móstoles, Madrid, Spanje',
      pl: 'Móstoles, Madryt, Hiszpania',
      ru: 'Мостолес, Мадрид, Испания',
      ja: 'モストレス、マドリッド、スペイン'
    },
    achievements: [
      {
        es: 'Desarrollo de aplicaciones web y móviles',
        en: 'Web and mobile application development',
        fr: 'Développement d\'applications web et mobiles',
        de: 'Entwicklung von Web- und Mobilanwendungen',
        it: 'Sviluppo di applicazioni web e mobili',
        pt: 'Desenvolvimento de aplicativos web e móvel',
        nl: 'Ontwikkeling van web- en mobiele toepassingen',
        pl: 'Opracowywanie aplikacji internetowych i mobilnych',
        ru: 'Разработка веб-приложений и мобильных приложений',
        ja: 'WebおよびモバイルアプリケーションDevelopment'
      },
      {
        es: 'Especialización en arquitectura de software',
        en: 'Specialization in software architecture',
        fr: 'Spécialisation en architecture logicielle',
        de: 'Spezialisierung auf Softwarearchitektur',
        it: 'Specializzazione in architettura software',
        pt: 'Especialização em arquitetura de software',
        nl: 'Specialisatie in software-architectuur',
        pl: 'Specjalizacja w architekturze oprogramowania',
        ru: 'Специализация на архитектуре программного обеспечения',
        ja: 'ソフトウェアアーキテクチャの専門化'
      },
      {
        es: 'Proyectos de fin de grado con tecnologías modernas',
        en: 'Final year projects with modern technologies',
        fr: 'Projets de fin d\'études avec des technologies modernes',
        de: 'Abschlussprojekte mit modernen Technologien',
        it: 'Progetti di laurea con tecnologie moderne',
        pt: 'Projetos finais com tecnologias modernas',
        nl: 'Afstudeerprojecten met moderne technologieën',
        pl: 'Projekty końcowe z nowoczesnych technologii',
        ru: 'Выпускные проекты с современными технологиями',
        ja: '最新のテクノロジーを使用した最終年プロジェクト'
      }
    ]
  },
  {
    id: 'academic-3',
    institution: {
      es: 'BigSchool & Universidad Isabel I',
      en: 'BigSchool & Isabel I University',
      fr: 'BigSchool & Université Isabel I',
      de: 'BigSchool & Universität Isabel I',
      it: 'BigSchool & Università Isabel I',
      pt: 'BigSchool & Universidade Isabel I',
      nl: 'BigSchool & Universiteit Isabel I',
      pl: 'BigSchool & Uniwersytet Isabel I',
      ru: 'BigSchool и Университет Изабель I',
      ja: 'BigSchoolとイサベルI大学'
    },
    degree: {
      es: 'Máster',
      en: 'Master\'s Degree',
      fr: 'Master',
      de: 'Masterabschluss',
      it: 'Laurea Magistrale',
      pt: 'Mestrado',
      nl: 'Masterdiploma',
      pl: 'Magister',
      ru: 'Степень магистра',
      ja: '修士号'
    },
    field: {
      es: 'Desarrollo con Inteligencia Artificial',
      en: 'Development with Artificial Intelligence',
      fr: 'Développement avec Intelligence Artificielle',
      de: 'Entwicklung mit künstlicher Intelligenz',
      it: 'Sviluppo con Intelligenza Artificiale',
      pt: 'Desenvolvimento com Inteligência Artificial',
      nl: 'Ontwikkeling met Kunstmatige Intelligentie',
      pl: 'Rozwój ze Sztuczną Inteligencją',
      ru: 'Разработка с искусственным интеллектом',
      ja: '人工知能による開発'
    },
    description: {
      es: 'Especialización en inteligencia artificial y machine learning aplicado al desarrollo de software.',
      en: 'Specialization in artificial intelligence and machine learning applied to software development.',
      fr: 'Spécialisation en intelligence artificielle et apprentissage automatique appliqués au développement logiciel.',
      de: 'Spezialisierung auf künstliche Intelligenz und maschinelles Lernen, angewendet auf Softwareentwicklung.',
      it: 'Specializzazione in intelligenza artificiale e apprendimento automatico applicati allo sviluppo software.',
      pt: 'Especialização em inteligência artificial e aprendizado de máquina aplicados ao desenvolvimento de software.',
      nl: 'Specialisatie in kunstmatige intelligentie en machine learning toegepast op softwareontwikkeling.',
      pl: 'Specjalizacja w sztucznej inteligencji i uczeniu maszynowym zastosowanym w tworzeniu oprogramowania.',
      ru: 'Специализация на искусственном интеллекте и машинном обучении, применяемых к разработке программного обеспечения.',
      ja: 'ソフトウェア開発に適用された人工知能と機械学習の専門化。'
    },
    startDate: new Date('2025-10-01'),
    location: {
      es: 'Telemática, España',
      en: 'Online, Spain',
      fr: 'Télématique, Espagne',
      de: 'Telematik, Spanien',
      it: 'Telematica, Spagna',
      pt: 'Telemática, Espanha',
      nl: 'Telematica, Spanje',
      pl: 'Telematyka, Hiszpania',
      ru: 'Телематика, Испания',
      ja: 'テレマティクス、スペイン'
    },
    achievements: [
      {
        es: 'Especialización en IA y machine learning',
        en: 'Specialization in AI and machine learning',
        fr: 'Spécialisation en IA et apprentissage automatique',
        de: 'Spezialisierung auf KI und maschinelles Lernen',
        it: 'Specializzazione in IA e apprendimento automatico',
        pt: 'Especialização em IA e aprendizado de máquina',
        nl: 'Specialisatie in AI en machine learning',
        pl: 'Specjalizacja w AI i uczeniu maszynowym',
        ru: 'Специализация на искусственном интеллекте и машинном обучении',
        ja: 'AIと機械学習の専門化'
      },
      {
        es: 'Desarrollo de aplicaciones inteligentes',
        en: 'Development of intelligent applications',
        fr: 'Développement d\'applications intelligentes',
        de: 'Entwicklung intelligenter Anwendungen',
        it: 'Sviluppo di applicazioni intelligenti',
        pt: 'Desenvolvimento de aplicativos inteligentes',
        nl: 'Ontwikkeling van intelligente toepassingen',
        pl: 'Opracowywanie inteligentnych aplikacji',
        ru: 'Разработка интеллектуальных приложений',
        ja: 'インテリジェントアプリケーションの開発'
      },
      {
        es: 'Formación actualizada en tecnologías emergentes',
        en: 'Updated training in emerging technologies',
        fr: 'Formation à jour sur les technologies émergentes',
        de: 'Schulung in aufstrebenden Technologien',
        it: 'Formazione aggiornata su tecnologie emergenti',
        pt: 'Treinamento atualizado em tecnologias emergentes',
        nl: 'Actuele training in opkomende technologieën',
        pl: 'Zaktualizowane szkolenie z technologii wschodzących',
        ru: 'Обновленное обучение новым технологиям',
        ja: '新興技術の最新トレーニング'
      }
    ]
  }
];
