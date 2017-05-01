import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';

import { environment } from '../../environments/environment';

import * as fromTimeline from "./timeline.reducer";

export interface State {
  router: fromRouter.RouterState;
  timeline: fromTimeline.State;
};

const reducers = {
  router: fromRouter.routerReducer,
  timeline: fromTimeline.reducer
};

const developmentReducer = compose(
  // Prevent mutation in development
  storeFreeze,
  combineReducers
)(reducers);

const productionReducer = compose(
  combineReducers
)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

// Selectors need awareness of the root state when used in components
// Selectors for timeline
export const getTimelineState = (state: State) => state.timeline;
export const getPosts = createSelector(getTimelineState, fromTimeline.getEntities);
export const getPostIds = createSelector(getTimelineState, fromTimeline.getIds);
export const isTimelineLoading = createSelector(getTimelineState, fromTimeline.isLoading);
