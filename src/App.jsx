import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Suspense fallback={<div>Is lOADING</div>}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              component={route.component}
              {...route}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
