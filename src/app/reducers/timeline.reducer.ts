import { Action } from '@ngrx/store';

import { createSelector } from 'reselect';

import * as timeline from '../actions/timeline.actions';
import { Post } from "../models/post.model";

export interface State {
  ids: string[],
  entities: { [id: string]: Post; },
  loading: boolean,
}

export const initialState: State = {
  ids: [],
  entities: {},
  loading: false,
};

export function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case timeline.LOAD:
      return {...state, loading: true};
    case timeline.LOAD_SUCCESS: {
      // Map the firebase db key to the id of the post object
      const posts = action.payload.map(post => {return {...post, id: post.$key}});
      // Filter for only posts the state didn't already know about
      /* I've done this to prevent the state from reloadingg every post entity
        each time the firebase database is updated, and also prevents the
        possibility of deleted posts from disappearing before one's eyes */
      const newPosts = posts.filter(post => !state.entities[post.id]);
      // Get ids for the new posts
      const newPostIds = newPosts.map(post => post.id).reverse();
      // Collect up the new posts into a map
      const newPostEntities = newPosts.reduce((entities: { [id: string]: Post }, post: Post) => {
        return {...entities, [post.id]: post};
      }, {});

      // Add the new posts to the state
      return {
        ids: [ ...newPostIds, ...state.ids ],
        // TS2.1 allows for object spread - awesome
        entities: { ...state.entities, ...newPostEntities },
        loading: false,
      };
    }
    default:
      return state;
  }
}

// Create selectors
export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const isLoading = (state: State) => state.loading;
