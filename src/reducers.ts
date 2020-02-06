import { connectRouter } from 'connected-react-router';
import { loginReducer, LoginState } from 'pods/login/reducer/login.reducer';
import { combineReducers } from 'redux';
import { history } from './createHistory';
import { hotelEditReducer, HotelEditState } from "./pods/hotel-edit/reducer/hotel-edit.reducer";
import { hotelCollectionReducer, HotelCollectionState } from "./pods/hotel-collection/reducer/hotel-collection.reducer";
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'

export interface State {
	login: LoginState;
	hotelCollection: HotelCollectionState;
	hotelEdit: HotelEditState;
}

export const reducers = combineReducers<State>({
	login: loginReducer,
	hotelCollection: hotelCollectionReducer,
	hotelEdit: hotelEditReducer,
});

const persistConfig = {
	key: 'root',
	storage,
}

export const persistedReducer = persistReducer(persistConfig, reducers)
