import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { useLoginCredentials } from "../pods/login/login.component";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface Props extends RouteComponentProps {
  backingRoute: string
  children: React.ReactElement;
}

export const AppBackLayoutInner = (props: Props) => {

  const {credentials} = useLoginCredentials();

  const navigateBack = (e) => {
    props.history.push(props.backingRoute);
  }

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <IconButton onClick={navigateBack} color="inherit" aria-label="Menu">
            <ArrowBack/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircleIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            {credentials.username}
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};

export const AppBackLayout = withRouter<Props>(AppBackLayoutInner);