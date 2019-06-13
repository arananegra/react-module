import { Theme } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { LoginProps } from "./login.component";

export const useStyles = makeStyles<LoginProps>({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
});