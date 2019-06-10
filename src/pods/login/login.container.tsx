import { routesLinks, SessionContext } from "core";
import { FormValidationResult } from "lc-form-validation";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { validateCredentials } from "./login.api";
import { LoginComponent } from "./login.component";
import { loginFormValidation } from "./login.validation";
import { createDefaultLoginFormErrors, createEmptyCredentials, CredentialsEntityVm, LoginFormErrors } from "./login.vm";

interface Props extends RouteComponentProps {}

const LoginContainerInner = (props: Props) => {
  const [loginFormErrors, setLoginFormErrors] = React.useState<LoginFormErrors>(
    createDefaultLoginFormErrors()
  );
  const [credentials, setCredentials] = React.useState<CredentialsEntityVm>(
    createEmptyCredentials()
  );
  const { history } = props;

  const {updateLogin} = React.useContext(SessionContext);

  const doLogin = () => {
    loginFormValidation.validateForm(credentials).then(formValidationResult => {
      handleFormValidation(formValidationResult);
    });
  };

  const handleFormValidation = (formValidationResult : FormValidationResult) => {
    if (formValidationResult.succeeded) {
      doServerLogin();
    } else {
      showLoginFormErrors(formValidationResult);
    }
  }

  const doServerLogin = () => {
    validateCredentials(credentials.username, credentials.password).then(
      areValidCredentials =>
        areValidCredentials? 
        navigateToHotelCollection()
          : 
          alert("Invalid credentials")
    );
  }

  const navigateToHotelCollection = () => {
    updateLogin(credentials.username);
    history.push(routesLinks.hotelCollection);
  }

  const showLoginFormErrors = (formValidationResult: FormValidationResult) => {
    alert("error, review the fields");
    const updatedLoginFormErrors = {
      ...loginFormErrors,
      ...formValidationResult.fieldErrors
    };
    setLoginFormErrors(updatedLoginFormErrors);
  }  

  const onUpdateCredentialsField = (fieldId: string, value: string) => {
    setCredentials({
      ...credentials,
      [fieldId]: value
    });

    loginFormValidation
      .validateField(credentials, fieldId, value)
      .then(fieldValidationResult => {
        setLoginFormErrors({
          ...loginFormErrors,
          [fieldId]: fieldValidationResult
        });
      });
  };

  return (
    <LoginComponent
      onLogin={doLogin}
      credentials={credentials}
      onUpdateCredentials={onUpdateCredentialsField}
      loginFormErrors={loginFormErrors}
    />
  );
};

export const LoginContainer = withRouter<Props>(LoginContainerInner);
