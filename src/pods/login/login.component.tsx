import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { TextFieldForm } from "common/components";
import * as React from "react";
import { useStyles } from "./login.styles";
import { CredentialsEntityVm } from "./login.vm";


export interface LoginProps {
  credentials: CredentialsEntityVm;
}

export interface LoginDispatchProps {
  onUpdateCredentials: (credentials: CredentialsEntityVm) => void;
}

export const LoginComponent = (props: LoginProps & LoginDispatchProps) => {
  const { credentials, onUpdateCredentials } = props;

  const classes = useStyles(props)

  const onUpdateCredentialsField = (fieldId: string, value: string) => {
    onUpdateCredentials({
      ...credentials,
      [fieldId]: value
    });
  }

  return (
    <>
      <Card>
        <CardHeader title="login" />
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm
              label="Name"
              name="username"
              value={credentials.username}
              onChange={onUpdateCredentialsField}
            />
            <TextFieldForm
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={onUpdateCredentialsField}
            />
            <Button variant="contained" color="primary" onClick={(e) => console.log(e)}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}