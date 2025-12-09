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
    subtitle: 'Découvrez mon parcours'
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
