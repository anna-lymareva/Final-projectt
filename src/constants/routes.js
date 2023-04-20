import { APP_ROUTES } from './appRoutes';

export const routes = {
  about: { href: APP_ROUTES.about, component: 'about-page' },
  gallery: { href: APP_ROUTES.gallery, component: 'gallery-page' },
  services: { href: APP_ROUTES.services, component: 'services-page' },
  contacts: { href: APP_ROUTES.contacts, component: 'contacts-page' },
  team: { href: APP_ROUTES.team, component: 'team-page' },
  admin: { href: APP_ROUTES.admin, component: 'admin-page' },
  registration: { href: APP_ROUTES.registration, component: 'registration-page' },
  error: { href: '*', component: 'error-page' },
};
