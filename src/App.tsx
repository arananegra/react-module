import * as React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router/immutable'
import * as ReduxThunk from "redux-thunk";
import { LoginComponent } from 'pods/login/login.component';
import { routerSwitchRoutes } from "core/routes";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import { LoginScene } from 'scenes';
import { reducers } from './reducers'

import { createHashHistory } from "history";

export const history = createHashHistory();

const appReducer = combineReducers({
    reducers,
    router: connectRouter(history)
});

const middlewares = [ReduxThunk["default"], logger, routerMiddleware(history)];


export const store = createStore((appReducer),
    composeWithDevTools(
        applyMiddleware(...middlewares))
);

export const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact={true} path={routerSwitchRoutes.login} component={LoginScene} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}