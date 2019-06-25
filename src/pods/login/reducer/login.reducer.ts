import { actionsEnums } from "common/actionEnums";
import { createDefaultLoginVm, CredentialsEntityVm, LoginFormErrors, LoginVm } from "../login.vm";
import { IUpdateLoginCredentialsAction, IUpdateLoginErrorsAction } from "../actions";

export type LoginState = LoginVm;

const defaultLoginState = (): LoginState => createDefaultLoginVm();

export const loginReducer = (state: LoginState = defaultLoginState(), action): LoginState => {
  switch (action.type) {
    case actionsEnums.UPDATE_LOGIN_CREDENTIALS:
      return handleCredentialsChangeAction(state, action);

    case actionsEnums.ON_LOGIN:
      return state;

    case actionsEnums.UPDATE_LOGIN_ERRORS:
      return handleErrorsChangeAction(state, action);
  }
  return state;
}

const handleCredentialsChangeAction = (state: LoginState, action: IUpdateLoginCredentialsAction): LoginState => ({
  ...state,
  credentials: action.credentialsToUpdate,
});

const handleErrorsChangeAction = (state: LoginState, action: IUpdateLoginErrorsAction): LoginState => {
  const newCredentials: CredentialsEntityVm = {
    ...state.credentials,
    [action.fieldId]: action.value
  };

  const newLoginErrors: LoginFormErrors = {
    ...state.loginErrors,
    [action.fieldId]: action.fieldValidationResult
  };

  return {
    ...state,
    credentials: newCredentials,
    loginErrors: newLoginErrors
  };
};