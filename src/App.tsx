import { ConnectedRouter } from 'connected-react-router/immutable';
import { routerSwitchRoutes } from "core/routes";
import * as React from 'react';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { LoginScene } from 'scenes';
import { store } from './store';
import { history } from './createHistory';
import { test } from './test';

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact={true} path={routerSwitchRoutes.login} component={LoginScene} />
          <Route exact={true} path={routerSwitchRoutes.hotelCollection} component={test} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}