import { defaultLoginState, loginReducer, LoginState } from "./login.reducer";
import deepFreeze from 'deep-freeze';
import { CredentialsEntityVm } from "../login.vm";
import { actionsEnums } from "common/actionEnums";
import { IUpdateLoginCredentialsAction } from "../actions";

describe('Login reducer tests', () => {
  it('should return initial state when passing undefined state and some action type', () => {
    // Arrange
    const state = undefined;
    const action = {type: 'some type'};
    let newLoginState: LoginState = deepFreeze(defaultLoginState());
    // Act
    const nextState = loginReducer(state, action);

    // Assert
    expect(nextState).toEqual(newLoginState);
  });

  it('should return updated credentials when UPDATE_LOGIN_CREDENTIALS is called', () => {
    // Arrange

    const defaultState: LoginState = deepFreeze(defaultLoginState());

    const credentials: CredentialsEntityVm = {isUserLogged: false, password: "pako113", username: "pako"};

    const action: IUpdateLoginCredentialsAction = {
      type: actionsEnums.UPDATE_LOGIN_CREDENTIALS,
      credentialsToUpdate: credentials

    };
    // Act
    const nextState = loginReducer(defaultState, action);

    // Assert
    expect(nextState.credentials).toEqual(credentials);
  });
});