import { connectRouter } from 'connected-react-router';
import { CredentialsState, loginCredentialsReducer } from 'pods/login/reducer/login.reducer';
import { combineReducers } from 'redux';
import { history } from './createHistory';
export interface State {
  loginCredentials: CredentialsState;
  router: any;
}

export const reducers = combineReducers<State>({
  loginCredentials: loginCredentialsReducer,
  router: connectRouter(history),
});
