import { Action } from '@ngrx/store';

import { FirebaseAuthState } from 'angularfire2';

// All actions relevant to todos for use in reducers and dispatches
export const LOGIN =        '[Auth] User Login';
export const LOGOUT =       '[Auth] User Logout';
export const REGISTER =     '[Auth] User Register';
export const AUTH_CHECK =   '[Auth] Authentication Check';
export const AUTH_SUCCESS = '[Auth] Authentication Success';
export const AUTH_FAILURE = '[Auth] Authentication Fail';
export const AUTH_REVOKED = '[Auth] Authentication Revoked';

// Login user
export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: {email: string, password: string}) { }
}

// Successful authentication
export class AuthSuccessAction implements Action {
  readonly type = AUTH_SUCCESS;

  constructor(public payload: FirebaseAuthState) { }
}

// Authentication failed
export class AuthFailureAction implements Action {
  readonly type = AUTH_FAILURE;

  constructor(public payload: Error) { }
}

// Create a union of all actions here
export type Actions
  = LoginAction
  | AuthSuccessAction
  | AuthFailureAction
