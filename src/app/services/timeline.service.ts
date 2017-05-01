import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import * as fromRoot from '../reducers/app.reducer';
import * as timeline from '../actions/timeline.actions';
import { Post } from '../models/post.model';

@Injectable()
export class TimelineService {

  constructor(
    private af: AngularFire,
    private store: Store<fromRoot.State>
  ) { }

  getPosts(): Observable<Post[]> {
    return this.af.database.list('/posts', {
      query: {
        limitToLast: 10,
        orderByKey: true
      }
    });
  }

  addPost(message: string): void {
    const post = {
      body: message,
      user: "username",//this.af.auth.
    };
    const ref = this.af.database.list('/posts').push(post);
    ref.then(() => {
        this.store.dispatch(new timeline.AddPostSuccessAction({...post, id: ref.key}));
      },
      (error: Error) => {
        this.store.dispatch(new timeline.AddPostFailAction(error));
      }
    );
  }

}
