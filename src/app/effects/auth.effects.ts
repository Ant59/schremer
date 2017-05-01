import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as fromRoot from '../reducers/app.reducer';
import * as auth from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private store: Store<fromRoot.State>
  ) { }

  @Effect() login$ = this.actions$
    .ofType(auth.LOGIN)
    .map(action => action.payload)
    .switchMap(payload => this.service.login(payload)
      .then(info => new auth.AuthSuccessAction(info))
      .catch(error => new auth.AuthFailureAction(error))
  );

}
