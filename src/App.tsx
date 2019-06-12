import * as React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import * as ReduxThunk from "redux-thunk";
import { LoginComponent } from 'pods/login/login.component';
import { LoginScene } from 'scenes';


export const App = () => {
    return (
        <>
            <LoginScene/>
        </>
    );
}