import { routerMiddleware } from 'connected-react-router/immutable';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import * as ReduxThunk from "redux-thunk";
import { reducers } from './reducers';
import { history } from './createHistory';

const middlewares = [ReduxThunk["default"], logger, routerMiddleware(history)];


export const store = createStore((reducers),
    composeWithDevTools(
        applyMiddleware(...middlewares))
);
