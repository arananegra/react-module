import { ValidationResult } from "@lemoncode/fonk";
import { actionsEnums } from "common/actionEnums";

export interface IUpdateLoginErrorsAction {
  type: string;
  fieldId: string;
  value: any;
  fieldValidationResult: ValidationResult;
}

export const updateLoginErrorsAction = (fieldValidationResult: ValidationResult, fieldId: string, value: string): IUpdateLoginErrorsAction => ({
  type: actionsEnums.UPDATE_LOGIN_ERRORS,
  fieldId,
  value,
  fieldValidationResult
});

export const onUpdateLoginFieldErrorsThunk = (fieldValidationResult: ValidationResult, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateLoginErrorsAction(fieldValidationResult, fieldId, value))
  }
}
