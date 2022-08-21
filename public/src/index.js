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
      ],
    },
  ];

  createRouter(app, routes);

  // onAuthChanged((user) => {
  //   if (user) {
  //     Router.go('/');
  //   } else {
  //     Router.go('/');
  //   }
  // });
});
