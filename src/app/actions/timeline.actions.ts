import { Action } from '@ngrx/store';

// Get the model
import { Post } from '../models/post.model';

// All actions relevant to todos for use in reducers and dispatches
export const ADD_POST =             '[Timeline] Add Post';
export const ADD_POST_SUCCESS =     '[Timeline] Add Post Success';
export const ADD_POST_FAIL =        '[Timeline] Add Post Fail';
export const REMOVE_POST =          '[Timeline] Remove Post';
export const REMOVE_POST_SUCCESS =  '[Timeline] Remove Post Success';
export const REMOVE_POST_FAIL =     '[Timeline] Remove Post Fail';
export const EDIT_POST =            '[Timeline] Edit Post';
export const EDIT_POST_SUCCESS =    '[Timeline] Edit Post Success';
export const EDIT_POST_FAIL =       '[Timeline] Edit Post Fail';
export const RATE_POST =            '[Timeline] Rate Post';
export const RATE_POST_SUCCESS =    '[Timeline] Rate Post Success';
export const RATE_POST_FAIL =       '[Timeline] Rate Post Fail';
export const LOAD =                 '[Timeline] Load';
export const LOAD_SUCCESS =         '[Timeline] Load Success';
export const LOAD_FAIL =            '[Timeline] Load Fail';

// Add post to timeline
export class AddPostAction implements Action {
  // Readonly is a new typescript modifier for properties that prevents mutation
  readonly type = ADD_POST;

  constructor(public payload: string) { }
}
export class AddPostSuccessAction implements Action {
  readonly type = ADD_POST_SUCCESS;

  constructor(public payload: Post) { }
}
export class AddPostFailAction implements Action {
  readonly type = ADD_POST_FAIL;

  constructor(public payload: any) { }
}

// Remove post from timeline
export class RemovePostAction implements Action {
  readonly type = REMOVE_POST;

  constructor(public payload: string) { }
}
export class RemovePostSuccessAction implements Action {
  readonly type = REMOVE_POST_SUCCESS;

  constructor(public payload: number) { }
}
export class RemovePostFailAction implements Action {
  readonly type = REMOVE_POST_FAIL;

  constructor(public payload: any) { }
}

// Edit post from timeline
export class EditPostAction implements Action {
  readonly type = EDIT_POST;

  constructor(public payload: string) { }
}
export class EditPostSuccessAction implements Action {
  readonly type = EDIT_POST_SUCCESS;

  constructor(public payload: Post) { }
}
export class EditPostFailAction implements Action {
  readonly type = EDIT_POST_FAIL;

  constructor(public payload: any) { }
}

// Rate post from timeline
export class RatePostAction implements Action {
  readonly type = RATE_POST;

  constructor(public payload: any) { } // TODO: Rating model
}
export class RatePostSuccessAction implements Action {
  readonly type = RATE_POST_SUCCESS;

  constructor(public payload: number) { }
}
export class RatePostFailAction implements Action {
  readonly type = RATE_POST_FAIL;

  constructor(public payload: any) { }
}

// Load timeline
export class LoadAction implements Action {
  readonly type = LOAD;
}
export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Post[]) { }
}
export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

// Create a union of all actions here
export type Actions
  = AddPostAction
  | AddPostSuccessAction
  | AddPostFailAction
  | RemovePostAction
  | RemovePostSuccessAction
  | RemovePostFailAction
  | EditPostAction
  | EditPostSuccessAction
  | EditPostFailAction
  | RatePostAction
  | RatePostSuccessAction
  | RatePostFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
