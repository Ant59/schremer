import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as auth from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private service: AuthService
  ) { }

}
