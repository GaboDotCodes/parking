import { Router } from '@vaadin/router';

import { onAuthChanged } from './utils/Firebase/auth';
import createRouter from './utils/Router/createRouter';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  const routes = [
    {
      path: '/',
      component: 'main-view',
      action: async () => { await import('./views/main-view/main-view'); },
      children: [
        {
          path: '/',
          redirect: '/users/register',
        },
        {
          path: '/users',
          component: 'users-layout',
          action: async () => { await import('./components/users-layout/users-layout'); },
          children: [
            {
              path: '/',
              redirect: '/users/register',
            },
            {
              path: '/register',
              component: 'users-register',
              action: async () => { await import('./components/users-register/users-register'); },
            },
            {
              path: '/search',
              component: 'users-search',
              action: async () => { await import('./components/users-search/users-search'); },
            },
          ],
        },
        {
          path: '/vehicles',
          component: 'vehicles-layout',
          action: async () => { await import('./components/vehicles-layout/vehicles-layout'); },
          children: [
            {
              path: '/',
              redirect: '/vehicles/register',
            },
            {
              path: '/register',
              component: 'vehicles-register',
              action: async () => { await import('./components/vehicles-register/vehicles-register'); },
            },
            {
              path: '/search',
              component: 'vehicles-search',
              action: async () => { await import('./components/vehicles-search/vehicles-search'); },
            },
          ],
        },
        {
          path: '/register',
          component: 'register-layout',
          action: async () => { await import('./components/register-layout/register-layout'); },
          children: [
            {
              path: '/',
              redirect: '/register/ingress',
            },
            {
              path: '/ingress',
              component: 'register-ingress',
              action: async () => { await import('./components/register-ingress/register-ingress'); },
            },
            {
              path: '/exit',
              component: 'register-exit',
              action: async () => { await import('./components/register-exit/register-exit'); },
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      component: 'login-view',
      action: async () => { await import('./views/login-view/login-view'); },
    },
  ];

  createRouter(app, routes);

  onAuthChanged((user) => {
    if (!user) Router.go('/login');
  });
});
