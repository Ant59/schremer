import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TimelineComponent } from './containers/timeline/timeline.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { MessagesComponent } from './containers/messages/messages.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: TimelineComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'messages', component: MessagesComponent },
      //{ path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
