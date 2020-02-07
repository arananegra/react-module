import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import * as ReduxThunk from "redux-thunk";
import { persistedReducer } from './reducers';
import { persistStore } from 'redux-persist'

const middlewares = [ReduxThunk["default"], logger];


export const store = createStore((persistedReducer),
	composeWithDevTools(
		applyMiddleware(...middlewares))
);

export const persistor = persistStore(store)
