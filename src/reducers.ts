import { connectRouter } from 'connected-react-router';
import { loginReducer, LoginState } from 'pods/login/reducer/login.reducer';
import { combineReducers } from 'redux';
import { history } from './createHistory';
import { hotelCollectionReducer, HotelCollectionState } from "./pods/hotel-collection/reducer/hotel-collection.reducer";

export interface State {
  login: LoginState;
  hotelCollection: HotelCollectionState
  router: any;
}

export const reducers = combineReducers<State>({
  login: loginReducer,
  hotelCollection: hotelCollectionReducer,
  router: connectRouter(history),
});
