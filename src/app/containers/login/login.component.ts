import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';
import * as fromRoot from '../../reducers/app.reducer';
import * as auth from '../../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })

  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {
    // Once logged in, navigate away from the login page
    this.store.select(fromRoot.isLoggedIn).subscribe(loggedIn => {
      if (loggedIn) this.router.navigate(['/timeline']);
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new auth.LoginAction(this.loginForm.value));
    }
  }

}
