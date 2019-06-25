import {
  createFormValidation, FieldValidationResult,
  ValidationConstraints,
  Validators
} from "lc-form-validation";

const passwordAndUsernameValidator = (value: any, vm: any): FieldValidationResult => {
  const passwordAndUsernameAreValid = Boolean(value);
  const errorInfo = (passwordAndUsernameAreValid) ? '' : 'El campo no puede estar vacío';

  const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
  fieldValidationResult.type = 'NO_EMPTY_FIELD';
  fieldValidationResult.succeeded = passwordAndUsernameAreValid;
  fieldValidationResult.errorMessage = errorInfo;

  return fieldValidationResult;
}

const loginFormValidationConstraints: ValidationConstraints = {
  fields: {
    username: [{validator: passwordAndUsernameValidator}],
    password: [{validator: passwordAndUsernameValidator}],
  }
}

export const loginFormValidation = createFormValidation(loginFormValidationConstraints);