import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as timeline from '../actions/timeline.actions';
import { Post } from '../models/post.model';
import { TimelineService } from '../services/timeline.service';

@Injectable()
export class TimelineEffects {

  constructor(
    private actions$: Actions,
    private service: TimelineService
  ) { }

  @Effect()
  loadPosts$ = this.actions$
    .ofType(timeline.LOAD)
    .switchMap(() =>
      this.service.getPosts()
        .map((posts: Post[]) => new timeline.LoadSuccessAction(posts))
        .catch(error => of(new timeline.LoadFailAction(error)))
    );

  @Effect({dispatch: false})
  addPost$ = this.actions$
    .ofType(timeline.ADD_POST)
    .map(action => action.payload)
    .switchMap(payload => {
      const ref = this.service.addPost(payload);
      return ref.then(
        () => new timeline.AddPostSuccessAction({
          id: ref.key,
          body: payload,
          user: "username"
        }),
        error => new timeline.AddPostFailAction(error))
    });
}
