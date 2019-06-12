import { actionsEnums } from "common/actionEnums";

export const updateLoginNameAction = (username: string) => ({
	type: actionsEnums.UPDATE_LOGIN_NAME,
	username: username
});

export const moviesRequestActionCompleted = (password: string) => ({
	type: actionsEnums.UPDATE_LOGIN_PASSWORD,
	password: password
});
