import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { State } from "reducers";
import { onLoginRequestThunk, onUpdateLoginCredentialsActionThunk } from './actions';
import { CredentialsEntityVm, LoginFormErrors } from "./login.vm";
import { LoginComponent } from "./login.component";
import { Redirect } from "react-router-dom";

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

export const LoginContainer = (props) => {

	const {credentials, errors, updateCredentials, onLogin} = useLoginCredentials();
	const {from} = props.location.state || {from: {pathname: '/'}};

	if (credentials.isUserLogged) {
		return <Redirect to={from}/>
	}

	return (
		<>
			<LoginComponent credentials={credentials} errors={errors} onLogin={onLogin}
											updateCredentials={updateCredentials}/>
		</>
	);
}
