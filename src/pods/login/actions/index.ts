import { actionsEnums, BaseAction } from "common/actionEnums";
import { CredentialsEntityVm, LoginFormErrors } from '../login.vm';
import { history } from '../../../createHistory';
import { routerSwitchRoutes } from "core/routes";

export const updateLoginCredentialsAction = (credentialsToUpdate: CredentialsEntityVm): BaseAction<CredentialsEntityVm> => ({
  type: actionsEnums.UPDATE_LOGIN_CREDENTIALS,
  payload: credentialsToUpdate
});

export const updateLoginErrorsAction = (errors: LoginFormErrors): BaseAction<LoginFormErrors> => ({
  type: actionsEnums.UPDATE_LOGIN_ERRORS,
  payload: errors
});

export const onLoginAction = (): any => ({
  type: actionsEnums.ON_LOGIN
});

export const onLoginRequestThunk = (): any => {
  return (dispatch) => {
    history.push(routerSwitchRoutes.hotelCollection);
    dispatch(onLoginAction())
  }
}

export const onUpdateLoginCredentialsActionThunk = (credentialsToUpdate: CredentialsEntityVm): Function => {
  return (dispatch) => {
    dispatch(updateLoginCredentialsAction(credentialsToUpdate))
  }
}

export const onUpdateLoginErrorsThunk = (errors: LoginFormErrors): Function => {
  return (dispatch) => {
    dispatch(updateLoginErrorsAction(errors))
  }
}