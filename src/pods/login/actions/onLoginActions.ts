import { actionsEnums } from "common/actionEnums";
import { CredentialsEntityVm } from "../login.vm";
import { loginFormValidation } from "../login.validation";
import { FormValidationResult } from "lc-form-validation";
import { validateCredentials } from "../login.api";
import { trackPromise } from 'react-promise-tracker';
import { toast } from 'react-toastify';

export const onLoginRequestThunk = (credentials: CredentialsEntityVm) => (dispatch) => (
	loginFormValidation.validateForm(credentials).then((formValidationResult: FormValidationResult) => {
		if (formValidationResult.succeeded) {
			trackPromise((validateCredentials(credentials.username, credentials.password)
				.then((areValidCredentials) => {
						if (areValidCredentials) {
							dispatch(onLoginSucceedAction());
						} else {
							toast.error("Credenciales invalidas");
						}
					}
				)), 'login-button');
		} else {
			toast.error("Algún campo es erroneo");
		}
	})
);

export const onLoginSucceedAction = (): any => ({
	type: actionsEnums.ON_LOGIN_SUCCEED
});
