import React from 'react';

const routesLesson = [
  {
    path: '/lessons/:id',
    component: React.lazy(() => import('../index.jsx'))
  }
];

export default routesLesson;
