import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { TimelineComponent } from './containers/timeline/timeline.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { MessagesComponent } from './containers/messages/messages.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/timeline', pathMatch: 'full' },
      { path: 'timeline', component: TimelineComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
