/*
import { actionsEnums } from "common";
import { CredentialsEntityVm } from "../login.vm";
import { loginFormValidation } from "../login.validation";
import { FormValidationResult } from "lc-form-validation";
import { validateCredentials } from "../login.api";
import { history } from "../../../createHistory";
import { routerSwitchRoutes } from "core";
import { trackPromise } from 'react-promise-tracker';
import { toast } from 'react-toastify';

export const onSaveHotelEditRequestThunk = (credentials: CredentialsEntityVm): any => {
  return (dispatch) => {
    loginFormValidation.validateForm(credentials).then((formValidationResult: FormValidationResult) => {
      if (formValidationResult.succeeded) {
        trackPromise((validateCredentials(credentials.username, credentials.password).then(
          areValidCredentials => {
            if (areValidCredentials) {
              history.push(routerSwitchRoutes.hotelCollection);
              dispatch(onLoginSucceedAction())
            } else {
              toast.error("Credenciales invalidas");
            }
          }
        )), 'login-button');
      } else {
        toast.warn("Algún campo es erroneo");
      }
    });
  }
}

export const onLoginSucceedAction = (): any => ({
  type: actionsEnums.ON_LOGIN_SUCCEED
});*/
