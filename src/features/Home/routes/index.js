import React from 'react';

const routesHome = [
  {
    path: '/',
    component: React.lazy(() => import('../index')),
    exact: true
  }
];

export default routesHome;
