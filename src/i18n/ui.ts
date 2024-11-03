export const languages = [
  {code: 'en', link: '/', icon: 'usa.svg' },
  {code: 'es', link: '/es', icon: 'mexico.svg' },
  {code: 'fr', link: '/fr', icon: 'france.svg' }
];

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.overview': {title: 'Overview', link: '#overview', icon: '' },
    'nav.experience': {title: 'Experience', link: '#experience', icon: '' },
    'nav.projects': {title: 'Projects', link: '#projects', icon: '' },
    'nav.about': {title: 'About', link: '#about', icon: '' },
  },
  es: {
    'nav.overview': {title: 'Descripción', link: '#overview', icon: '' },
    'nav.experience': {title: 'Experiencia', link: '#experience', icon: '' },
    'nav.projects': {title: 'Proyectos', link: '#projects', icon: '' },
    'nav.about': {title: 'Acerca', link: '#about', icon: '' },
  },
  fr: {
    'nav.overview': {title: 'Description', link: '#overview', icon: '' },
    'nav.experience': {title: 'Expérience', link: '#experience', icon: '' },
    'nav.projects': {title: 'Projets', link: '#projects', icon: '' },
    'nav.about': {title: 'À propos', link: '#about', icon: '' },
  }
} as const;