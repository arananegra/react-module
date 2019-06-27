import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useLoginCredentials } from "../pods/login";
import { animated, useSpring } from 'react-spring'

export interface Props extends RouteComponentProps {
  backingRoute: string
  children: React.ReactElement;
}

export const AppBackLayoutInner = (props: Props) => {

  const {credentials} = useLoginCredentials();

  const navigateBack = (e) => {
    props.history.push(props.backingRoute);
  }

  const springPropsArrow = useSpring({
    config: {tension: 200, friction: 12},
    from: {marginLeft: -50, opacity: 1},
    to: {marginLeft: 0, opacity: 1}
  });

  const springPropsIcon = useSpring({
    config: {duration: 500, tension: 200, friction: 12, delay: 100},
    from: {marginLeft: -30, opacity: 1},
    to: {marginLeft: -5, opacity: 1}
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <animated.div style={springPropsArrow}>
            <IconButton onClick={navigateBack} color="inherit" aria-label="Menu">
              <ArrowBack/>
            </IconButton>
          </animated.div>
          <animated.div style={springPropsIcon}>
            <IconButton color="inherit" aria-label="Menu">
              <AccountCircleIcon/>
            </IconButton>
          </animated.div>
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