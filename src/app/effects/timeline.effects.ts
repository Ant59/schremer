import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
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
  loadCategories$ = this.actions$
    .ofType(timeline.LOAD)
    .switchMap(() =>
      this.service.getPosts()
        .map((posts: Post[]) => new timeline.LoadSuccessAction(posts))
        .catch(error => of(new timeline.LoadFailAction(error)))
    );
}
