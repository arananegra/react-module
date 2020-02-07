import { CredentialsEntityVm } from "../login.vm";
import { actionsEnums } from "common/actionEnums";
import { loginFormValidation } from "../login.validation";
import { ValidationResult } from "@lemoncode/fonk";
import { onUpdateLoginFieldErrorsThunk } from "./onUpdateLoginErrorsActions";

export interface IUpdateLoginCredentialsAction {
  type: string;
  credentialsToUpdate: CredentialsEntityVm;
}

export const onUpdateLoginCredentialsActionThunk = (fieldId: string, value: string): Function => {
  return (dispatch, getState) => {
    const credentialsUpdatedFromPage = {
      ...getState().login.credentials,
      [fieldId]: value
    }
    dispatch(updateLoginCredentialsAction(credentialsUpdatedFromPage))
    loginFormValidation
      .validateField(fieldId, value, credentialsUpdatedFromPage)
      .then((fieldValidationResult: ValidationResult) => {
        dispatch(onUpdateLoginFieldErrorsThunk(fieldValidationResult, fieldId, value))
      });
  }
}

export const updateLoginCredentialsAction = (credentialsToUpdate: CredentialsEntityVm): IUpdateLoginCredentialsAction => ({
  type: actionsEnums.UPDATE_LOGIN_CREDENTIALS,
  credentialsToUpdate
})
