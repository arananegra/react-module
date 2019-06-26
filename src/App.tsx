import { ConnectedRouter } from 'connected-react-router/immutable';
import { routerSwitchRoutes } from "core/routes";
import * as React from 'react';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { HotelCollectionScene, HotelEditScene, LoginScene } from 'scenes';
import { store } from './store';
import { history } from './createHistory';
import { userIsAuthenticated, userIsNotAuthenticated } from "common";

export const auth = ({a: false});

export const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}