import { FieldValidationResult } from "lc-form-validation";

export const noEmptyFieldValidator = (value: any, vm: any): FieldValidationResult => {
  const passwordAndUsernameAreValid = Boolean(value);
  const errorInfo = (passwordAndUsernameAreValid) ? '' : 'El campo no puede estar vacío';

  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  fieldValidationResult.type = 'NO_EMPTY_FIELD';
  fieldValidationResult.succeeded = passwordAndUsernameAreValid;
  fieldValidationResult.errorMessage = errorInfo;

  return fieldValidationResult;
}
