import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  tittle: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center'
  },
  spinner: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

