import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import { LoginScene, HotelCollectionScene } from "./scenes";
import { routerSwitchRoutes } from "core/routes";
import { SessionProvider } from "core";

ReactDOM.render(
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={routerSwitchRoutes.login}
          component={LoginScene}
        />
        <Route
          path={routerSwitchRoutes.hotelCollection}
          component={HotelCollectionScene}
        />
      </Switch>
    </HashRouter>
  </SessionProvider>,
  document.getElementById("root")
);
