import { FieldValidationResult } from "lc-form-validation";
import { actionsEnums } from "common/actionEnums";

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

export const onUpdateLoginFieldErrorsThunk = (fieldValidationResult: FieldValidationResult, fieldId: string, value: string): Function => {
  return (dispatch) => {
    dispatch(updateLoginErrorsAction(fieldValidationResult, fieldId, value))
  }
}