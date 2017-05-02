import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './reducers/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
  userEmail$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
    this.isLoggedIn$ = store.select(fromRoot.isLoggedIn);
    this.userEmail$ = store.select(fromRoot.getAuthEmail);
  }

}
