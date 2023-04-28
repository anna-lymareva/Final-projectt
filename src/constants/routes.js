import { APP_ROUTES } from './appRoutes';

export const routes = {
  about: {
    href: APP_ROUTES.about,
    component: 'about-page',
  },
  service: {
    href: APP_ROUTES.service,
    component: 'service-page',
  },
  contacts: {
    href: APP_ROUTES.contacts,
    component: 'contacts-page',
  },
  event: {
    href: APP_ROUTES.event,
    component: 'event-page',
  },
  gallery: {
    href: APP_ROUTES.gallery,
    component: 'gallery-page',
  },
  productView: {
    href: APP_ROUTES.product,
    component: 'product-page',
  },
  admin: {
    href: APP_ROUTES.admin,
    component: 'admin-page',
  },
  signUp: {
    href: APP_ROUTES.signUp,
    component: 'sign-up-page',
  },
  signIn: {
    href: APP_ROUTES.signIn,
    component: 'sign-in-page',
  },
  signOut: {
    href: APP_ROUTES.signOut,
    component: 'sign-out-page',
  },
  error: {
    href: '*',
    component: 'error-page',
  },
};
