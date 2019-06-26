import { ConnectedRouter } from 'connected-react-router/immutable';
import { routerSwitchRoutes } from "core/routes";
import * as React from 'react';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { HotelCollectionScene, HotelEditScene, LoginScene } from 'scenes';
import { persistor, store } from './store';
import { history } from './createHistory';
import { userIsAuthenticated, userIsNotAuthenticated } from "common";
import { PersistGate } from 'redux-persist/integration/react'

export const auth = ({a: true});

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={routerSwitchRoutes.login}
                   component={userIsNotAuthenticated(LoginScene)}/>
            <Route exact={true} path={routerSwitchRoutes.hotelCollection}
                   component={userIsAuthenticated(HotelCollectionScene)}/>
            <Route exact={true} path={routerSwitchRoutes.hotelEdit}
                   component={userIsAuthenticated(HotelEditScene)}/>
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}