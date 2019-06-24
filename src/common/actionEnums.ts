import { Action } from 'redux';
export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
}

export const actionsEnums = {
  UPDATE_LOGIN_CREDENTIALS: '[0] Update the user or password login credentials',
  UPDATE_LOGIN_ERRORS: '[1] Update the user or password login errors',
  ON_LOGIN: '[2] User clicked login button',
}