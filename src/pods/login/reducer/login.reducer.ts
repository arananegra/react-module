import { actionsEnums, BaseAction } from "common/actionEnums";
import { CredentialsEntityVm, createEmptyCredentials } from "../login.vm";

export type CredentialsState = CredentialsEntityVm;

const defaultCredentialsState = (): CredentialsState => createEmptyCredentials();

export const loginCredentialsReducer = (state: CredentialsState = defaultCredentialsState(), action: BaseAction): CredentialsState => {
    switch (action.type) {
        case actionsEnums.UPDATE_LOGIN_CREDENTIALS:
            console.log(state);
            return handleUsernameLoginNameAction(state, action.payload);
        default:
            return state;
    }
}

const handleUsernameLoginNameAction = (state: CredentialsState, credentials: CredentialsEntityVm): CredentialsState => ({
    ...state,
    ...credentials,
});