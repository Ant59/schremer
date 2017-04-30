import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TimelineComponent } from './containers/timeline/timeline.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: TimelineComponent },
      //{ path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
