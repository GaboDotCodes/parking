import { Router } from '@vaadin/router';

import { onAuthChanged } from './utils/Firebase/auth';
import createRouter from './utils/Router/createRouter';

import './views/main-view/main-layout';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  const routes = [
    {
      path: '/',
      component: 'main-layout',
      children: [
        {
          path: '/users',
          component: 'users-layout',
          action: async () => { await import('./components/users-layout/users-layout'); },
          children: [
            {
              path: '/register',
              component: 'users-register',
              action: async () => { await import('./components/users-register/users-register'); },
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
