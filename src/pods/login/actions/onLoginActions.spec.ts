import { CredentialsEntityVm } from "../login.vm";
import { onLoginRequestThunk } from "../actions";
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { loginFormValidation } from "../login.validation";
import * as validateApi from '../login.api';
import { history } from "../../../createHistory";
import { routerSwitchRoutes } from "core/routes";

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('On Login actions tests', () => {
  it('should call to validateForm with credentials entity', (done) => {
    // Arrange
    const credentials: CredentialsEntityVm = {isUserLogged: false, password: '123', username: 'pako'};
    const store = getMockStore();
    const validateFormStub = jest.spyOn(loginFormValidation, 'validateForm');
    // Act
    store.dispatch<any>(onLoginRequestThunk(credentials))
      .then(() => {
        expect(validateFormStub).toHaveBeenCalledWith(credentials);
        done();
      });
  });

  it('should call to trackPromise and validateCredentials when loginFormValidation.succeeded equals true', (done) => {
    // Arrange
    const credentials: CredentialsEntityVm = {isUserLogged: false, password: '123', username: 'pako'};
    const store = getMockStore();

    const mockValidation: any = {succeeded: true};
    const validateFormStub = jest.spyOn(loginFormValidation, 'validateForm')
      .mockResolvedValue(mockValidation);

    const validateCredentialsSpy = jest.spyOn(validateApi, 'validateCredentials');

    // Act
    store.dispatch<any>(onLoginRequestThunk(credentials))
      .then(() => {
        //Assert
        expect(validateCredentialsSpy).toHaveBeenCalledWith(credentials.username, credentials.password);
        done();
      });
  });
  it('should call to history.push with when login is successful', (done) => {
    // Arrange
    const credentials: CredentialsEntityVm = {isUserLogged: false, password: 'test', username: 'admin'};
    const store = getMockStore();

    const historyPushStub = jest.spyOn(history, 'push');
    const validateApiLogin = jest.spyOn(validateApi, 'validateCredentials')
      .mockResolvedValue(true);
    // Act
    store.dispatch<any>(onLoginRequestThunk(credentials))
      .then(() => {
        // Assert
        expect(historyPushStub).toHaveBeenCalledWith(routerSwitchRoutes.hotelCollection);
        done();
      });

  });
});