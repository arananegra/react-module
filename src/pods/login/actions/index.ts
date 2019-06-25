import { actionsEnums } from "common/actionEnums";
import { CredentialsEntityVm } from '../login.vm';
import { history } from '../../../createHistory';
import { routerSwitchRoutes } from "core/routes";
import { loginFormValidation } from "../login.validation";
import { FieldValidationResult } from "lc-form-validation";

/////////
export interface IUpdateLoginCredentialsAction {
  type: string;
  credentialsToUpdate: CredentialsEntityVm;
}

export const updateLoginCredentialsAction = (credentialsToUpdate: CredentialsEntityVm): IUpdateLoginCredentialsAction => ({
  type: actionsEnums.UPDATE_LOGIN_CREDENTIALS,
  credentialsToUpdate
});

/////////
export interface IUpdateLoginErrorsAction {
  type: string;
  fieldId: string;
  value: any;
  fieldValidationResult: FieldValidationResult;
}

export const updateLoginErrorsAction = (fieldValidationResult: FieldValidationResult, fieldId: string, value: string): IUpdateLoginErrorsAction => ({
  type: actionsEnums.UPDATE_LOGIN_ERRORS,
  fieldId,
  value,
  fieldValidationResult
});
/////////

export const onLoginAction = (): any => ({
  type: actionsEnums.ON_LOGIN
});

export const onLoginRequestThunk = (): any => {
  return (dispatch) => {
    history.push(routerSwitchRoutes.hotelCollection);
    dispatch(onLoginAction())
  }
}

export const onUpdateLoginCredentialsActionThunk = (updatedCredentials: CredentialsEntityVm, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateLoginCredentialsAction(updatedCredentials))
    loginFormValidation
      .validateField(updatedCredentials, fieldId, value)
      .then((fieldValidationResult: FieldValidationResult) => {
        dispatch(onUpdateLoginFieldErrorsThunk(fieldValidationResult, fieldId, value))
      });
  }
}

export const onUpdateLoginFieldErrorsThunk = (fieldValidationResult: FieldValidationResult, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateLoginErrorsAction(fieldValidationResult, fieldId, value))
  }
}