import { FieldValidationResult } from "lc-form-validation";

export interface CredentialsEntityVm {
  username: string;
  password: string;
  isUserLogged: boolean;
}

export const createEmptyCredentials = (): CredentialsEntityVm => ({
  username: '',
  password: '',
  isUserLogged: false
});

export interface LoginFormErrors {
  username: FieldValidationResult;
  password: FieldValidationResult;
}

export const createDefaultLoginFormErrors = (): LoginFormErrors => ({
  username: new FieldValidationResult(),
  password: new FieldValidationResult(),
})

export interface LoginVm {
  credentials: CredentialsEntityVm
  loginErrors: LoginFormErrors
}

export const createDefaultLoginVm = (): LoginVm => ({
  credentials: createEmptyCredentials(),
  loginErrors: createDefaultLoginFormErrors()
})