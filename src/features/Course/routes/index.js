import React from 'react';

const routesCourse = [
  {
    path: '/courses',
    component: React.lazy(() => import('../index')),
    exact: true
  },
  {
    path: '/courses/create',
    component: React.lazy(() => import('../pages/create'))
  },
  {
    path: '/courses/:id',
    component: React.lazy(() => import('../pages/show'))
  }
];

export default routesCourse;
