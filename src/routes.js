// const { default: routesHome } = require('./features/Home/routes');
import routesHome from './features/Home/routes';
import routesCourse from './features/Course/routes';

const routes = [...routesHome, ...routesCourse];

export default routes;
