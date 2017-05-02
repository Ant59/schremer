import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers/app.reducer';
import * as timeline from '../../actions/timeline.actions';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  posts$: Observable<{ [id: string]: Post; }>;
  postIds$: Observable<string[]>;
  loading$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  userEmail$: Observable<string>;
  schremeForm: FormGroup;

  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder
  ) {
    this.store.dispatch(new timeline.LoadAction);
    this.posts$ = store.select(fromRoot.getPosts);
    this.postIds$ = store.select(fromRoot.getPostIds);
    this.loading$ = store.select(fromRoot.isTimelineLoading);
    this.isLoggedIn$ = store.select(fromRoot.isLoggedIn);
    this.userEmail$ = store.select(fromRoot.getAuthEmail);

    this.initSchremeForm();
  }

  schreme(message: string) {
    this.initSchremeForm();
    this.store.dispatch(new timeline.AddPostAction(message));
  }

  initSchremeForm() {
    this.schremeForm = this.fb.group({
      scheme: ['', Validators.required],
    })
  }

}
