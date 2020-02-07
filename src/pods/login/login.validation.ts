import { Validators, createFormValidation, ValidationSchema } from '@lemoncode/fonk';

const loginFormValidationConstraints: ValidationSchema = {
  field: {
    username: [Validators.required],
    password: [Validators.required],
  },
}

export const loginFormValidation = createFormValidation(loginFormValidationConstraints);
