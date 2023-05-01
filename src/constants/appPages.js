import { APP_ROUTES } from './appRoutes';

export const appPages = [
  {
    label: 'Главная',
    href: APP_ROUTES.about,
  },
  {
    label: 'Услуги',
    href: APP_ROUTES.service,
  },
  {
    href: APP_ROUTES.gallery,
    label: 'Галерея',
  },
  {
    href: APP_ROUTES.contacts,
    label: 'Контакты',
  },
  {
    href: APP_ROUTES.event,
    label: 'Вакансии',
  },
  {
    href: APP_ROUTES.admin,
    label: 'Admin',
  },
  {
    href: APP_ROUTES.signUp,
    label: 'Регистрация',
  },
  {
    href: APP_ROUTES.signIn,
    label: 'Вход',
  },
  {
    href: APP_ROUTES.signOut,
    label: 'Выход',
  },
];
