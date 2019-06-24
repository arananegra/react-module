import { actionsEnums, BaseAction } from "common/actionEnums";
import { createEmptyCredentials, CredentialsEntityVm } from "../login.vm";

export type CredentialsState = CredentialsEntityVm;

const defaultCredentialsState = (): CredentialsState => createEmptyCredentials();

export const loginCredentialsReducer = (state: CredentialsState = defaultCredentialsState(), action: BaseAction): CredentialsState => {
    switch (action.type) {
        case actionsEnums.UPDATE_LOGIN_CREDENTIALS:
            return handleCredentialsChangeAction(action.payload);

        case actionsEnums.ON_LOGIN:
            return state;
    }
    return state;
}

const handleCredentialsChangeAction = (credentials: CredentialsEntityVm): CredentialsState => ({
    ...credentials,
});