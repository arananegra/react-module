import { connectRouter } from 'connected-react-router';
import { CredentialsState, loginCredentialsReducer } from 'pods/login/reducer/login.reducer';
import { combineReducers } from 'redux';
import { history } from './createHistory';
import { loginErrorsReducer, LoginErrorsState } from "./pods/login/reducer/login-errors.reducer";

export interface State {
  loginCredentials: CredentialsState;
  loginErrorsReducer: LoginErrorsState;
  router: any;
}

export const reducers = combineReducers<State>({
  loginCredentials: loginCredentialsReducer,
  loginErrorsReducer: loginErrorsReducer,
  router: connectRouter(history),
});
