import { Router } from '@vaadin/router';

import { onAuthChanged } from './utils/Firebase/auth';
import createRouter from './utils/Router/createRouter';
import getMyParking from './utils/Services/Parkings/getMyParking';
import appState from './utils/State/appState';

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
          path: '/setup',
          component: 'initial-setup',
          action: async () => { await import('./components/initial-setup/initial-setup'); },
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

  onAuthChanged(async (user) => {
    try {
      if (user) {
        appState.token = await user.getIdToken();
        const { response } = await getMyParking();
        appState.parking = response;
        Router.go(appState.parking ? window.location.pathname : '/setup');
      }
      if (!user) Router.go('/login');
    } catch (error) {
      console.log(error);
      if (error.code === 'NO_PARKING') Router.go('/setup');
    }
  });
});
