import { Router } from '@vaadin/router';

const createRouter = (outlet, routes) => {
  const router = new Router(outlet);
  router.setRoutes(routes);
  return router;
};

export default createRouter;
