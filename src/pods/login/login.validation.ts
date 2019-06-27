import { createFormValidation, ValidationConstraints } from "lc-form-validation";
import { noEmptyFieldValidator } from "core";

const loginFormValidationConstraints: ValidationConstraints = {
  fields: {
    username: [{validator: noEmptyFieldValidator}],
    password: [{validator: noEmptyFieldValidator}],
  }
}

export const loginFormValidation = createFormValidation(loginFormValidationConstraints);