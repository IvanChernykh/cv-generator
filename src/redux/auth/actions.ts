import { createActions } from 'redux-actions';

export enum AuthActions {
  SET_LOGGED_IN = 'SET_LOGGED_IN',
}

export const { setLoggedIn } = createActions(AuthActions.SET_LOGGED_IN);
