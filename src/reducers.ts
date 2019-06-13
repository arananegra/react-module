import { combineReducers } from 'redux';
import { CredentialsState, loginCredentialsReducer } from 'pods/login/reducer/login.reducer'
import { connectRouter } from 'connected-react-router';
import { history } from './createHistory';
export interface State {
    router: any;
    loginCredentials: CredentialsState;
}

export const reducers = combineReducers<State>({
    router: connectRouter(history),
    loginCredentials: loginCredentialsReducer
});
