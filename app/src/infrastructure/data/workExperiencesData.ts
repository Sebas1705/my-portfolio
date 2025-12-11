import type { WorkExperience } from '@domain/entities/WorkExperience';

export const workExperiencesData: WorkExperience[] = [
  {
    id: 'work-1',
    company: 'Solusoft',
    position: {
      es: 'Junior Full Stack & Mobile Developer',
      en: 'Junior Full Stack & Mobile Developer',
      fr: 'Développeur Full Stack & Mobile Junior',
      de: 'Junior Full-Stack- und Mobile-Entwickler',
      it: 'Sviluppatore Full Stack & Mobile Junior',
      pt: 'Desenvolvedor Full Stack & Mobile Júnior',
      nl: 'Junior Full-Stack- en Mobile-ontwikkelaar',
      pl: 'Junior Programista Full Stack & Mobile',
      ru: 'Младший разработчик Full Stack & Mobile',
      ja: 'ジュニアフルスタック&モバイル開発者'
    },
    description: {
      es: 'Desarrollo de aplicaciones web y móviles con tecnologías modernas. Participación en proyectos full stack y desarrollo nativo/multiplataforma.',
      en: 'Development of web and mobile applications with modern technologies. Participation in full stack projects and native/cross-platform development.',
      fr: 'Développement d\'applications web et mobiles avec des technologies modernes. Participation à des projets full stack et développement natif/multiplateforme.',
      de: 'Entwicklung von Web- und Mobilanwendungen mit modernen Technologien. Teilnahme an Full-Stack-Projekten und Native-/Cross-Platform-Entwicklung.',
      it: 'Sviluppo di applicazioni web e mobili con tecnologie moderne. Partecipazione a progetti full stack e sviluppo nativo/cross-platform.',
      pt: 'Desenvolvimento de aplicações web e móveis com tecnologias modernas. Participação em projetos full stack e desenvolvimento nativo/multiplataforma.',
      nl: 'Ontwikkeling van web- en mobiele applicaties met moderne technologieën. Deelname aan full-stack-projecten en native/cross-platform-ontwikkeling.',
      pl: 'Tworzenie aplikacji internetowych i mobilnych za pomocą nowoczesnych technologii. Udział w projektach full stack i natywnym/wieloplatformowym rozwoju.',
      ru: 'Разработка веб- и мобильных приложений с использованием современных технологий. Участие в полнофункциональных проектах и разработка собственных/кроссплатформенных приложений.',
      ja: '最新のテクノロジーを使用したWebアプリケーションとモバイルアプリケーションの開発。フルスタックプロジェクトとネイティブ/クロスプラットフォーム開発への参加。'
    },
    startDate: new Date('2025-03-01'),
    endDate: undefined,
    location: 'Híbrido',
    companyUrl: 'https://www.solusoft.es/',
    technologies: ['Kotlin', 'Jetpack Compose', 'C#', '.NET', 'SQLServer', 'Git'],
    achievements: [
      {
        es: 'Mantenimiento y mejora continua del sistema de AGEDI',
        en: 'Maintenance and continuous improvement of AGEDI system',
        fr: 'Maintenance et amélioration continue du système AGEDI',
        de: 'Wartung und kontinuierliche Verbesserung des AGEDI-Systems',
        it: 'Manutenzione e miglioramento continuo del sistema AGEDI',
        pt: 'Manutenção e melhoria contínua do sistema AGEDI',
        nl: 'Onderhoud en continue verbetering van AGEDI-systeem',
        pl: 'Konserwacja i ciągłe ulepszanie systemu AGEDI',
        ru: 'Техническое обслуживание и постоянное совершенствование системы АГЕДИ',
        ja: 'AGEDIシステムの保守と継続的改善'
      },
      {
        es: 'Mantenimiento y mejora continua del proyecto de front y back de Sisley',
        en: 'Maintenance and continuous improvement of Sisley frontend and backend project',
        fr: 'Maintenance et amélioration continue du projet frontend et backend Sisley',
        de: 'Wartung und kontinuierliche Verbesserung des Sisley Frontend- und Backend-Projekts',
        it: 'Manutenzione e miglioramento continuo del progetto frontend e backend Sisley',
        pt: 'Manutenção e melhoria contínua do projeto frontend e backend Sisley',
        nl: 'Onderhoud en continue verbetering van Sisley frontend- en backend-project',
        pl: 'Konserwacja i ciągłe ulepszanie projektu frontendu i backendu Sisley',
        ru: 'Техническое обслуживание и постоянное совершенствование проекта переднего и заднего плана Sisley',
        ja: 'Sisleyフロントエンドおよびバックエンドプロジェクトの保守と継続的改善'
      },
      {
        es: 'Continuación del desarrollo de aplicación móvil para Iberext, ampliando funcionalidades de gestión de Sistemas de prevención de incendios',
        en: 'Continued development of mobile application for Iberext, expanding fire prevention systems management features',
        fr: 'Développement continu de l\'application mobile pour Iberext, élargissant les fonctionnalités de gestion des systèmes de prévention des incendies',
        de: 'Fortgesetzte Entwicklung der Mobilanwendung für Iberext mit erweiterten Brandschutzsystemverwaltungsfunktionen',
        it: 'Sviluppo continuato dell\'applicazione mobile per Iberext, espandendo le funzionalità di gestione dei sistemi antincendio',
        pt: 'Desenvolvimento contínuo de aplicativo móvel para Iberext, expandindo funcionalidades de gerenciamento de sistemas de prevenção de incêndio',
        nl: 'Voortgezette ontwikkeling van mobiele applicatie voor Iberext, uitbreiding van beheerfuncties van brandpreventiesystemen',
        pl: 'Dalszy rozwój aplikacji mobilnej dla Iberext, rozszerzenie funkcji zarządzania systemami ochrony przeciwpożarowej',
        ru: 'Продолжение разработки мобильного приложения для Iberext, расширение функций управления системами пожарной безопасности',
        ja: 'Iberextモバイルアプリケーション開発の継続、火災予防システム管理機能の拡張'
      },
      {
        es: 'Desarrollo de la aplicación móvil EPDM - Portal de la Música',
        en: 'Development of EPDM mobile application - Music Portal',
        fr: 'Développement de l\'application mobile EPDM - Portail Musicale',
        de: 'Entwicklung der mobilen EPDM-Anwendung - Musikportal',
        it: 'Sviluppo dell\'applicazione mobile EPDM - Portale Musicale',
        pt: 'Desenvolvimento de aplicativo móvel EPDM - Portal da Música',
        nl: 'Ontwikkeling van EPDM-mobiele applicatie - Muziekportaal',
        pl: 'Opracowanie aplikacji mobilnej EPDM - Portal Muzyki',
        ru: 'Разработка мобильного приложения EPDM - Музыкальный портал',
        ja: 'EDPMモバイルアプリケーション開発 - 音楽ポータル'
      }
    ]
  },
  {
    id: 'work-2',
    company: 'Solusoft',
    position: {
      es: 'Becario Full Stack & Mobile Developer',
      en: 'Intern Full Stack & Mobile Developer',
      fr: 'Stagiaire Développeur Full Stack & Mobile',
      de: 'Praktikant Full-Stack- und Mobile-Entwickler',
      it: 'Tirocinante Sviluppatore Full Stack & Mobile',
      pt: 'Estagiário Desenvolvedor Full Stack & Mobile',
      nl: 'Stagiair Full-Stack- en Mobile-ontwikkelaar',
      pl: 'Stażysta Programista Full Stack & Mobile',
      ru: 'Стажер разработчика Full Stack & Mobile',
      ja: 'インターン フルスタック&モバイル開発者'
    },
    description: {
      es: 'Aprendizaje y desarrollo bajo supervisión en proyectos full stack y móviles. Contribución en el desarrollo de nuevas features y mantenimiento de aplicaciones.',
      en: 'Supervised learning and development in full stack and mobile projects. Contribution to feature development and application maintenance.',
      fr: 'Apprentissage et développement supervisés dans des projets full stack et mobiles. Contribution au développement de nouvelles fonctionnalités et à la maintenance des applications.',
      de: 'Überwachtes Lernen und Entwicklung in Full-Stack- und Mobile-Projekten. Beitrag zur Funktionsentwicklung und Anwendungswartung.',
      it: 'Apprendimento e sviluppo supervisionato in progetti full stack e mobili. Contributo allo sviluppo di nuove funzionalità e alla manutenzione delle applicazioni.',
      pt: 'Aprendizagem e desenvolvimento supervisionados em projetos full stack e móveis. Contribuição para desenvolvimento de novas funcionalidades e manutenção de aplicações.',
      nl: 'Onder toezicht staand leren en ontwikkelen in full-stack- en mobiele projecten. Bijdrage aan ontwikkeling van nieuwe functies en onderhoud van applicaties.',
      pl: 'Nadzorowana nauka i rozwój w projektach full stack i mobilnych. Wkład w rozwój nowych funkcji i utrzymanie aplikacji.',
      ru: 'Контролируемое обучение и разработка в полнофункциональных и мобильных проектах. Вклад в разработку новых функций и обслуживание приложений.',
      ja: '監督下でのフルスタックおよびモバイルプロジェクトの学習と開発。新機能開発とアプリケーション保守への貢献。'
    },
    startDate: new Date('2024-10-01'),
    endDate: new Date('2025-02-28'),
    location: 'Híbrido',
    companyUrl: 'https://www.solusoft.es/',
    technologies: ['Kotlin', 'Jetpack Compose', 'C#', '.NET', 'SQLServer', 'Git'],
    achievements: [
      {
        es: 'Participé en la implementación de nuevas funcionalidades en varios proyectos para AGEDI',
        en: 'Participated in implementing new features across multiple AGEDI projects',
        fr: 'Participation à la mise en œuvre de nouvelles fonctionnalités dans plusieurs projets AGEDI',
        de: 'Teilnahme an der Implementierung neuer Funktionen in mehreren AGEDI-Projekten',
        it: 'Partecipazione all\'implementazione di nuove funzionalità in più progetti AGEDI',
        pt: 'Participação na implementação de novas funcionalidades em vários projetos AGEDI',
        nl: 'Deelname aan implementatie van nieuwe functies in meerdere AGEDI-projecten',
        pl: 'Udział w implementacji nowych funkcji w kilku projektach AGEDI',
        ru: 'Участие в реализации новых функций в нескольких проектах АГЕДИ',
        ja: '複数のAGEDIプロジェクトへの新機能実装への参加'
      },
      {
        es: 'Mantenimiento de proyecto de front y back de Sisley',
        en: 'Maintenance of Sisley frontend and backend project',
        fr: 'Maintenance du projet frontend et backend Sisley',
        de: 'Wartung des Sisley Frontend- und Backend-Projekts',
        it: 'Manutenzione del progetto frontend e backend Sisley',
        pt: 'Manutenção do projeto frontend e backend Sisley',
        nl: 'Onderhoud van Sisley frontend- en backend-project',
        pl: 'Konserwacja projektu frontendu i backendu Sisley',
        ru: 'Техническое обслуживание проекта переднего и заднего плана Sisley',
        ja: 'Sisleyフロントエンドおよびバックエンドプロジェクトの保守'
      },
      {
        es: 'Desarrollo desde cero de aplicación móvil para Iberext, migrada y ampliada desde versión tablet Windows para gestión de Sistemas de prevención de incendios',
        en: 'Full development of mobile application for Iberext, migrated and extended from Windows tablet version for fire prevention systems management',
        fr: 'Développement complet de l\'application mobile pour Iberext, migrée et étendue à partir de la version tablette Windows pour la gestion des systèmes de prévention des incendies',
        de: 'Vollständige Entwicklung der Mobilanwendung für Iberext, migriert und erweitert von der Windows-Tablettenversion für die Brandschutzsystemverwaltung',
        it: 'Sviluppo completo dell\'applicazione mobile per Iberext, migrata e estesa dalla versione tablet Windows per la gestione dei sistemi antincendio',
        pt: 'Desenvolvimento completo de aplicativo móvel para Iberext, migrado e estendido da versão tablet Windows para gerenciamento de sistemas de prevenção de incêndio',
        nl: 'Volledige ontwikkeling van mobiele applicatie voor Iberext, gemigreerd en uitgebreid vanaf Windows-tabletversie voor beheer van brandpreventiesystemen',
        pl: 'Pełny rozwój aplikacji mobilnej dla Iberext, migrowanej i rozszerzonej z wersji tabletu Windows do zarządzania systemami ochrony przeciwpożarowej',
        ru: 'Полная разработка мобильного приложения для Iberext, перенесенного и расширенного с версии планшета Windows для управления системами пожарной безопасности',
        ja: 'Iberext向けモバイルアプリケーションの完全開発、Windowsタブレット版から火災予防システム管理用に移行および拡張'
      }
    ]
  }
];

