import { actionsEnums } from "common/actionEnums";
import { CredentialsEntityVm, createEmptyCredentials } from "../login.vm";
import { Action } from "redux";

export type CredentialsState = CredentialsEntityVm;

const defaultCredentialsState = (): CredentialsState => createEmptyCredentials();

export const loginCredentialsReducer = (state = defaultCredentialsState(), action: Action): CredentialsState => {
    switch (action.type) {
        case actionsEnums.UPDATE_LOGIN_NAME:
            return handleUsernameLoginNameAction(state, action['username']);

        case actionsEnums.UPDATE_LOGIN_NAME:
            return handlePasswordLoginNameAction(state, action['password']);
    }

    return state;
}

const handleUsernameLoginNameAction = (state: CredentialsState, username: string): CredentialsState => ({
    ...state,
    username,
});

const handlePasswordLoginNameAction = (state: CredentialsState, password: string): CredentialsState => ({
    ...state,
    password,
});