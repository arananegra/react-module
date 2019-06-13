import { actionsEnums, BaseAction } from "common/actionEnums";
import { CredentialsEntityVm } from '../login.vm';

export const updateLoginCredentialsAction = (credentialsToUpdate: CredentialsEntityVm): BaseAction<CredentialsEntityVm> => ({
	type: actionsEnums.UPDATE_LOGIN_CREDENTIALS,
	payload: credentialsToUpdate
});
