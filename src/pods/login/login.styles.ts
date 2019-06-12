import { createStyles, WithStyles, withStyles, Theme } from "@material-ui/core";

export const styles = (theme : Theme) => 
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection:"column", 
      justifyContent: "center",
    }
  });
