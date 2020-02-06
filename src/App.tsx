import { routerSwitchRoutes } from "core/routes";
import * as React from 'react';
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { HotelCollectionScene, HotelEditScene, LoginScene } from 'scenes';
import { store } from './store';
import { PrivateRoute } from "./common/components/PrivateRoute";

export const auth = ({a: true});

export const App = () => {
	return (
		<Provider store={store}>
			{/*<PersistGate loading={null} persistor={persistor}>*/}
			<Router>
				<Switch>
					<Route exact path={routerSwitchRoutes.login}
								 component={LoginScene}/>
					<PrivateRoute exact={true} path={routerSwitchRoutes.hotelCollection}
												component={HotelCollectionScene}/>
					<PrivateRoute exact={true} path={routerSwitchRoutes.hotelEdit}
												component={HotelEditScene}/>
				</Switch>
			</Router>
			{/*</PersistGate>*/}
		</Provider>
	);
}
