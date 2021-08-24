// const { default: routesHome } = require('./features/Home/routes');
import routesHome from './features/Home/routes';
import routesCourse from './features/Course/routes';
import routesLesson from 'src/features/Lesson/routes';

const routes = [...routesHome, ...routesCourse, ...routesLesson];

export default routes;
