import { Action, handleActions } from 'redux-actions';
import { IAuthState } from './types';
import { setLoggedIn } from './actions';

const defaultState: IAuthState = {
  loggedIn: false,
};

export default handleActions<IAuthState, any>(
  {
    [`${setLoggedIn}`]: (state, { payload }: Action<boolean>) => ({
      ...state,
      loggedIn: payload,
    }),
  },
  defaultState,
);
