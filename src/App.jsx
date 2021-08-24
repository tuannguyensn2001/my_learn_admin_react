import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { AppProvider } from 'src/context';
import useAppReducer from 'src/hooks/useAppReducer.js';
import Bootstrap from 'src/Bootstrap.jsx';

function App() {
  const { appState, dispatch } = useAppReducer();

  return (
    <AppProvider
      value={{
        appState,
        dispatch
      }}
    >
      <Suspense fallback={<div>IS LOADING</div>}>
        <Bootstrap />
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
    </AppProvider>
  );
}

export default App;
