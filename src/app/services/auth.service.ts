import { Injectable } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) { }

  // Login a user
  public login(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({email, password});
  }

}
