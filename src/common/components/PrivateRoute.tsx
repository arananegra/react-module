import * as React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useLoginCredentials } from "pods/login";

export const PrivateRoute = ({component: Component, ...rest}) => {
	const {credentials} = useLoginCredentials();
	return (
		<Route {...rest} render={(props) => (
			credentials.isUserLogged
				? <Component {...props}/>
				: <Redirect to={{
					pathname: '/',
					state: {from: props.location}
				}}/>
		)}/>
	)
};
