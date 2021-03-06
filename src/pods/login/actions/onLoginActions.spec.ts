import { CredentialsEntityVm } from "../login.vm";
import { onLoginRequestThunk } from "../actions";
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { loginFormValidation } from "../login.validation";
import * as validateApi from '../login.api';
jest.mock("../../../createHistory");
import { toast } from 'react-toastify';
import { history } from "../../../createHistory";
import { routerSwitchRoutes } from "core/routes";
import { actionsEnums } from "common/actionEnums";

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('On Login actions tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
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
  it('should call to history.push when login is successful', (done) => {
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
  it('should call to onLoginSucceedAction action creator when login is successful', (done) => {
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
        let expectedAction = store.getActions()[0];
        expect(expectedAction.type).toEqual(actionsEnums.ON_LOGIN_SUCCEED);
        done();
      });
  });
  it('should call to toast.error when credentials are invalid', (done) => {
    // Arrange
    const credentials: CredentialsEntityVm = {isUserLogged: false, password: 'test', username: 'admin'};
    const store = getMockStore();

    const validateApiLogin = jest.spyOn(validateApi, 'validateCredentials')
      .mockResolvedValue(false);

    toast.error = jest.fn();
    // Act
    store.dispatch<any>(onLoginRequestThunk(credentials))
      .then(() => {
        // Assert
        expect(toast.error).toHaveBeenCalled();
        done();
      });
  });
});