import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { TextFieldForm } from "common/components";
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { State } from "reducers";
import { onLoginRequestThunk, onUpdateLoginCredentialsActionThunk, onUpdateLoginErrorsThunk } from './actions';
import { useStyles } from "./login.styles";
import { loginFormValidation } from "./login.validation";
import { validateCredentials } from "./login.api";
import { FormValidationResult } from "lc-form-validation";
import { CredentialsEntityVm, LoginFormErrors } from "./login.vm";

export const useLoginCredentials = () => {
  const dispatch = useDispatch();
  const credentials: CredentialsEntityVm = useSelector((state: State) => {
    return state.loginCredentials
  });

  const errors: LoginFormErrors = useSelector((state: State) => {
    return state.loginErrorsReducer
  });

  const updateCredentials = (fieldId: string, value: string) => {
    dispatch(onUpdateLoginCredentialsActionThunk({
      ...credentials,
      [fieldId]: value
    }))

    loginFormValidation
      .validateField(credentials, fieldId, value)
      .then(fieldValidationResult => {
        dispatch(onUpdateLoginErrorsThunk({
          ...errors,
          [fieldId]: fieldValidationResult
        }))
      });
  };

  const onLogin = () => {
    loginFormValidation.validateForm(credentials).then((formValidationResult: FormValidationResult) => {
      if (formValidationResult.succeeded) {
        validateCredentials(credentials.username, credentials.password).then(
          areValidCredentials =>
            areValidCredentials ?
              dispatch(onLoginRequestThunk())
              :
              alert("Invalid credentials")
        );
      } else {
        alert("error, review the fields");

        dispatch(onUpdateLoginErrorsThunk({
          ...errors,
          ...formValidationResult.fieldErrors
        }))
      }
    });
  }
  return {credentials, errors, updateCredentials, onLogin}
}

export const LoginComponent = () => {
  const classes = useStyles();

  const {credentials, errors, updateCredentials, onLogin} = useLoginCredentials();

  return (
    <>
      <Card>
        <CardHeader title="login"/>
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm
              label="Name"
              name="username"
              value={credentials.username}
              onChange={updateCredentials}
              error={errors.username.errorMessage}
            />
            <TextFieldForm
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={updateCredentials}
              error={errors.password.errorMessage}
            />

            <Button
              onClick={onLogin}
              type="submit"
              style={{outline: 'none'}}
              variant="contained"
              color="primary">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}