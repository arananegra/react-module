import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { LoadingCircularSpinnerComponent, TextFieldForm } from "common/components";
import * as React from "react";
import { useStyles } from "./login.styles";
import { CredentialsEntityVm, LoginFormErrors } from "./login.vm";
import { animated, useSpring } from 'react-spring'

export interface Props {
  credentials: CredentialsEntityVm;
  errors: LoginFormErrors;
  updateCredentials: (fieldId: string, value: string) => void;
  onLogin: () => void;
}

export const LoginComponent = (props: Props) => {
  const classes = useStyles();
  const springProps = useSpring({
    config: {duration: 1000},
    from: {opacity: 0},
    to: {opacity: 1}
  });
  const {credentials, errors, updateCredentials, onLogin} = props;

  return (
    <animated.div style={springProps}>
      <Card>
        <CardHeader className={classes.tittle} title="login"/>
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm
              label="Username"
              name="username"
              value={credentials.username}
              onChange={updateCredentials}
              error={errors.username.message}
            />
            <TextFieldForm
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={updateCredentials}
              error={errors.password.message}
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
