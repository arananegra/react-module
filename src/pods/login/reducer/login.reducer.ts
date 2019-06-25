import { actionsEnums, BaseAction } from "common/actionEnums";
import { createDefaultLoginVm, CredentialsEntityVm, LoginFormErrors, LoginVm } from "../login.vm";

export type LoginState = LoginVm;

const defaultLoginState = (): LoginState => createDefaultLoginVm();

export const loginReducer = (state: LoginState = defaultLoginState(), action: BaseAction): LoginState => {
  switch (action.type) {
    case actionsEnums.UPDATE_LOGIN_CREDENTIALS:
      return handleCredentialsChangeAction(state, action.payload);

    case actionsEnums.ON_LOGIN:
      return state;

    case actionsEnums.UPDATE_LOGIN_ERRORS:
      return handleErrorsChangeAction(state, action.payload);
  }
  return state;
}

const handleCredentialsChangeAction = (state: LoginState, credentials: CredentialsEntityVm): LoginState => {
    let returnState: LoginState = {
      loginErrors: state.loginErrors,
      credentials: credentials,
    }
    return returnState
  }
;

const handleErrorsChangeAction = (state: LoginState, errors: LoginFormErrors): LoginState => ({
  loginErrors: errors,
  credentials: state.credentials,
});