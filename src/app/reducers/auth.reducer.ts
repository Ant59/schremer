import { Action } from '@ngrx/store';

import { FirebaseAuthState } from 'angularfire2';
import { createSelector } from 'reselect';

import * as auth from '../actions/auth.actions';

export interface State {
  auth: FirebaseAuthState,
  error: Error
}

export const initialState: State = {
  auth: null,
  error: null
};

export function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case auth.AUTH_SUCCESS:
      return {...state, auth: action.payload, error: null};
    case auth.AUTH_FAILURE:
      return {...state, error: action.payload};
    case auth.AUTH_REVOKED:
      return initialState;
    default:
      return state;
  }
}

// Create selectors
export const getAuth = (state: State) => state.auth;
export const getEmail = (state: State) => { if (state.auth) return state.auth.auth.email };
export const isLoggedIn = (state: State) => !!state.auth;
