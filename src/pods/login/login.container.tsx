import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { State } from "reducers";
import { onLoginRequestThunk, onUpdateLoginCredentialsActionThunk } from './actions';
import { CredentialsEntityVm, LoginFormErrors } from "./login.vm";
import { LoginComponent } from "./login.component";
import { Redirect, useLocation } from "react-router-dom";
import { routerSwitchRoutes } from "core";

export const useLoginCredentials = () => {
	const dispatch = useDispatch();
	const credentials: CredentialsEntityVm = useSelector((state: State) => {
		return state.login.credentials
	});

	const errors: LoginFormErrors = useSelector((state: State) => {
		return state.login.loginErrors
	});

	const updateCredentials = (fieldId: string, value: string) => {
		dispatch(onUpdateLoginCredentialsActionThunk({
			...credentials,
			[fieldId]: value
		}, fieldId, value))
	};

	const onLogin = () => {
		dispatch(onLoginRequestThunk(credentials))
	}
	return {credentials, errors, updateCredentials, onLogin}
}

export const LoginContainer = () => {

	const {credentials, errors, updateCredentials, onLogin} = useLoginCredentials();
	const location = useLocation() as any;
	let fromObject;
	if (location.state) {
		fromObject = location.state.from;
	} else {
		fromObject = {pathname: routerSwitchRoutes.hotelCollection};
	}

	if (credentials.isUserLogged) {
		return <Redirect to={fromObject}/>
	} else {
		return (
			<>
				<LoginComponent credentials={credentials} errors={errors} onLogin={onLogin}
												updateCredentials={updateCredentials}/>
			</>
		);
	}
}
