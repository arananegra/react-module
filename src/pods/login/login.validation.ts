import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from "lc-form-validation";

const loginFormValidationConstraints: ValidationConstraints = {
  fields: {
    username: [{validator: Validators.required}],
    password: [{validator: Validators.required}],
  }
}

export const loginFormValidation = createFormValidation(loginFormValidationConstraints);