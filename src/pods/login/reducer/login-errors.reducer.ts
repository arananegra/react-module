import { actionsEnums, BaseAction } from "common/actionEnums";
import { createDefaultLoginFormErrors, LoginFormErrors } from "../login.vm";

export type LoginErrorsState = LoginFormErrors;

const defaultLoginErrorsState = ():LoginErrorsState  => createDefaultLoginFormErrors();

export const loginErrorsReducer = (state: LoginErrorsState = defaultLoginErrorsState(), action: BaseAction): LoginErrorsState => {
    switch (action.type) {
        case actionsEnums.UPDATE_LOGIN_ERRORS:
            return handleCredentialsChangeAction(action.payload);
    }
    return state;
}

const handleCredentialsChangeAction = (errors: LoginFormErrors): LoginErrorsState => ({
    ...errors,
});