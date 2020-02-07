import { createDefaultValidationResult, ValidationResult } from "@lemoncode/fonk";

import { types } from "mobx-state-tree";

/*const Credentials = types
  .model("Credentials", {
    username: '',
    password: '',
    isUserLogged: false
  })
  .actions(self => ({
    updateCredentials(credentials) {
      self.username = credentials.username;
      self.password = credentials.password;
    },
    changeAuthFlag(logged: boolean) {
      self.isUserLogged = logged;
    }
  }));*/

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
  username: ValidationResult;
  password: ValidationResult;
}

export const createDefaultLoginFormErrors = (): LoginFormErrors => ({
  username: createDefaultValidationResult(),
  password: createDefaultValidationResult(),
})

export interface LoginVm {
  credentials: CredentialsEntityVm
  loginErrors: LoginFormErrors
}

export const createDefaultLoginVm = (): LoginVm => ({
  credentials: createEmptyCredentials(),
  loginErrors: createDefaultLoginFormErrors()
})
