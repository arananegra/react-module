import { Action } from 'redux';
export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
};

export const actionsEnums = {
  UPDATE_LOGIN_CREDENTIALS: '[0] Update the user or password login credentials',
  ON_LOGIN: '[1] User clicked login button',
}