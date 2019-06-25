import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { routerSwitchRoutes } from "core/routes";
import { auth } from "../App";
import { State } from "../reducers";

const locationHelper = locationHelperBuilder({});

const userIsAuthenticatedDefaults = {
  authenticatedSelector: (state: State) => {
    if (auth.a) {
      return state.login.credentials.isUserLogged
    } else {
      return true;
    }
  },
  wrapperDisplayName: 'UserIsAuthenticated'
};

const userIsNotAuthenticatedDefaults = {
  authenticatedSelector: (state: State) => !state.login.credentials.isUserLogged,
  wrapperDisplayName: 'UserIsNotAuthenticated'
};


export const userIsAuthenticated = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  redirectPath: routerSwitchRoutes.login
});

export const userIsNotAuthenticated = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || routerSwitchRoutes.hotelCollection,
  allowRedirectBack: false,
});