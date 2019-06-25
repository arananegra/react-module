import { connectRouter } from 'connected-react-router';
import { loginReducer, LoginState } from 'pods/login/reducer/login.reducer';
import { combineReducers } from 'redux';
import { history } from './createHistory';

export interface State {
  login: LoginState;
  router: any;
}

export const reducers = combineReducers<State>({
  login: loginReducer,
  router: connectRouter(history),
});
