import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
export class TimelineComponent implements OnInit {
  posts$: Observable<{ [id: string]: Post; }>;
  postIds$: Observable<string[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.store.dispatch(new timeline.LoadAction);
    this.posts$ = store.select(fromRoot.getPosts);
    this.postIds$ = store.select(fromRoot.getPostIds);
    this.loading$ = store.select(fromRoot.isTimelineLoading);
  }

  ngOnInit() {}

}