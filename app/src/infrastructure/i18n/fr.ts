import type { Translations } from '@domain/entities/Language';

export const fr: Translations = {
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    work: 'Expérience Professionnelle',
    education: 'Éducation',
    projects: 'Projets',
    contact: 'Contact'
  },
  hero: {
    greeting: 'Bonjour, je suis',
    title: 'Développeur Full Stack & Mobile',
    description: 'Créer des produits web et mobiles rapides, évolutifs et prêts pour la production',
    cta: 'Voir les Projets',
    ctaSecondary: 'Me Contacter',
    badge: 'Full Stack · Mobile',
    availability: 'Disponible pour collaborer à distance',
    stackLabel: 'Stack de focalisation',
    highlights: {
      fast: 'Expériences web et mobiles axées sur les performances',
      api: 'Architectures API-first avec des contrats clairs',
      delivery: 'Livraison prête pour la production avec CI/CD et observabilité'
    },
    pillars: {
      web: 'Plateformes web',
      mobile: 'Applications mobiles',
      api: 'Backends API-first'
    }
  },
  about: {
    title: 'À Propos de Moi',
    subtitle: 'Découvrez mon histoire',
    description: 'Je suis un développeur full stack passionné par la création de solutions technologiques innovantes et percutantes. Avec plus de 5 ans d\'expérience en développement web et mobile, j\'ai travaillé sur des projets allant des applications d\'entreprise complexes aux startups agiles.\n\nMon approche est de combiner les meilleures pratiques de l\'ingénierie logicielle avec une expérience utilisateur exceptionnelle. Je crois que la technologie doit être accessible, efficace et belle. Spécialisé dans les architectures propres, je me consacre à écrire un code maintenable, évolutif et bien testé.\n\nAu-delà du code, j\'aime encadrer d\'autres développeurs, contribuer à des projets open source et rester à jour avec les dernières tendances technologiques. Quand je ne programme pas, vous me trouverez en train d\'explorer de nouvelles technologies, de lire sur les modèles de conception ou de partager des connaissances avec la communauté des développeurs.'
  },
  work: {
    title: 'Expérience Professionnelle',
    subtitle: 'Mon parcours professionnel',
    current: 'Actuellement',
    projects: 'Projets associés',
    achievements: 'Réalisations clés'
  },
  education: {
    title: 'Éducation',
    subtitle: 'Mon parcours éducatif',
    projects: 'Projets académiques',
    achievements: 'Réalisations clés'
  },
  skills: {
    title: 'Technologies & Compétences',
    subtitle: 'Maîtrise des technologies modernes avec des années d\'expérience pratique',
    allSkills: 'Toutes les Technologies',
    viewAll: 'Voir Toutes les Technologies'
  },
  projects: {
    title: 'Projets',
    subtitle: 'Mes travaux et créations',
    personal: 'Projets Personnels',
    work: 'Projets Professionnels',
    academic: 'Projets Académiques',
    viewDemo: 'Voir la Démo',
    viewCode: 'Voir le Code',
    technologies: 'Technologies'
  },
  contact: {
    title: 'Contact',
    subtitle: 'Parlons de votre projet',
    email: 'Email',
    phone: 'Téléphone',
    location: 'Localisation',
    social: 'Réseaux Sociaux',
    message: 'Vous avez un projet en tête? Contactez-moi!'
  },
  common: {
    learnMore: 'En Savoir Plus',
    readMore: 'Lire Plus',
    showLess: 'Afficher Moins',
    loading: 'Chargement...',
    error: 'Erreur lors du chargement des données',
    back: 'Retour'
  }
};
