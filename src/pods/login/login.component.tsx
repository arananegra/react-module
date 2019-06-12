import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { TextFieldForm } from "common/components";
import * as React from "react";
import { useStyles } from "./login.styles";
import { CredentialsEntityVm } from "./login.vm";


export interface LoginProps {
  onLogin? : () => void;
  credentials? : CredentialsEntityVm;
  onUpdateCredentials?: (fieldId: string, value : string) => void;
}


export const LoginComponent = (props: LoginProps) => {
  const { onLogin, credentials, onUpdateCredentials } = props;
  const classes = useStyles(props);
  return (
    <>
      <Card>
        <CardHeader title="login"/>
        <CardContent>
          <div className={classes.formContainer}>
            <TextFieldForm               
              label="Name"
              name="username"               
              value={"Alvaro"}
              onChange={(field, value) => console.log(value)}
              />
            <TextFieldForm 
              label="Password" 
              name="password"
              type="password"               
              value={"credentials.password"}
              onChange={(value) => console.log(value)}
              />
            <Button variant="contained" color="primary" onClick={onLogin}>
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};