import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Post } from '../models/post.model';

@Injectable()
export class TimelineService {

  constructor(private af: AngularFire) { }

  getPosts(): Observable<Post[]> {
    return this.af.database.list('/posts');
  }

}
