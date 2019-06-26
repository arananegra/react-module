import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { TextFieldForm } from "common/components";
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { State } from "reducers";
import { onLoginRequestThunk, onUpdateLoginCredentialsActionThunk } from './actions';
import { useStyles } from "./login.styles";
import { CredentialsEntityVm, LoginFormErrors } from "./login.vm";
import { useSpring, animated } from 'react-spring'

export const useLoginCredentials = () => {
  const dispatch = useDispatch();
  const credentials: CredentialsEntityVm = useSelector((state: State) => {
    return state.login.credentials
  });

  const errors: LoginFormErrors = useSelector((state: State) => {
    return state.login.loginErrors
  });

  const updateCredentials = (fieldId: string, value: string) => {
    dispatch(onUpdateLoginCredentialsActionThunk({
      ...credentials,
      [fieldId]: value
    }, fieldId, value))
  };

  const onLogin = () => {
    dispatch(onLoginRequestThunk(credentials))
  }
  return {credentials, errors, updateCredentials, onLogin}
}

export const LoginComponent = () => {
  const classes = useStyles();
  const springProps = useSpring({
    config: {duration: 1000},
    from: {opacity: 0},
    to: {opacity: 1}
  });
  const {credentials, errors, updateCredentials, onLogin} = useLoginCredentials();

  return (
    <animated.div style={springProps}>
      <Card>
        <CardHeader title="login"/>
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm
              label="Username"
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
    </animated.div>
  );
}