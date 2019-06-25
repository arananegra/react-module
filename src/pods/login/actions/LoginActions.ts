import { actionsEnums } from "../../../common/actionEnums";
import { CredentialsEntityVm } from "../login.vm";
import { loginFormValidation } from "../login.validation";
import { FormValidationResult } from "lc-form-validation";
import { validateCredentials } from "../login.api";
import { history } from "../../../createHistory";
import { routerSwitchRoutes } from "core";

export const onLoginRequestThunk = (credentials: CredentialsEntityVm): any => {
  return (dispatch) => {
    loginFormValidation.validateForm(credentials).then((formValidationResult: FormValidationResult) => {
      if (formValidationResult.succeeded) {
        validateCredentials(credentials.username, credentials.password).then(
          areValidCredentials => {
            if (areValidCredentials) {
              history.push(routerSwitchRoutes.hotelCollection);
              dispatch(onLoginSucceedAction())
            } else {
              alert("Invalid credentials")
            }
          }
        );
      } else {
        alert("error, review the fields");
      }
    });
  }
}

export const onLoginSucceedAction = (): any => ({
  type: actionsEnums.ON_LOGIN_SUCCEED
});