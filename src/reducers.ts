import { combineReducers } from 'redux';
import { CredentialsState, loginCredentialsReducer } from 'pods/login/reducer/login.reducer'

export interface State {
    loginCredentialsReducer: CredentialsState;
}

export const reducers = combineReducers<State>({
    loginCredentialsReducer
});
