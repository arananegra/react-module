import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { TextFieldForm } from "common/components";
import { routesLinks } from "core/routes";
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { State } from "reducers";
import { updateLoginCredentialsAction } from './actions';
import { useStyles } from "./login.styles";

export const LoginComponent = () => {
  const dispatch = useDispatch()
  const classes = useStyles({});
  const credentials = useSelector((state: State) => {
    return state.loginCredentials
  });

  const onUpdateCredentialsField = (fieldId: string, value: string) => {
    dispatch(updateLoginCredentialsAction({
      ...credentials,
      [fieldId]: value
    }))
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

            <Button component={Link} to={routesLinks.hotelCollection} variant="contained" color="primary">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}