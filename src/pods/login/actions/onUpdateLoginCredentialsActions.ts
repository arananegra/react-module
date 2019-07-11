import { CredentialsEntityVm } from "../login.vm";
import { actionsEnums } from "common/actionEnums";
import { loginFormValidation } from "../login.validation";
import { FieldValidationResult } from "lc-form-validation";
import { onUpdateLoginFieldErrorsThunk } from "./onUpdateLoginErrorsActions";

export interface IUpdateLoginCredentialsAction {
  type: string;
  credentialsToUpdate: CredentialsEntityVm;
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

export const updateLoginCredentialsAction = (credentialsToUpdate: CredentialsEntityVm): IUpdateLoginCredentialsAction => ({
  type: actionsEnums.UPDATE_LOGIN_CREDENTIALS,
  credentialsToUpdate
})