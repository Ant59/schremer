import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Store, StoreModule, combineReducers, provideStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { compose } from '@ngrx/core/compose';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { reducer } from "./reducers/app.reducer";

import { TimelineService } from './services/timeline.service';

import { TimelineEffects } from './effects/timeline.effects';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TimelineComponent } from './containers/timeline/timeline.component';
import { PostComponent } from './components/post/post.component';
import { MessagesComponent } from './containers/messages/messages.component';
import { ProfileComponent } from './containers/profile/profile.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCOl7Gw7w3sDydz0vY7qOMXwObea1O1hag",
  authDomain: "schremer-35170.firebaseapp.com",
  databaseURL: "https://schremer-35170.firebaseio.com",
  projectId: "schremer-35170",
  storageBucket: "schremer-35170.appspot.com",
  messagingSenderId: "815409101642"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TimelineComponent,
    PostComponent,
    MessagesComponent,
    ProfileComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // Store
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // Effects
    EffectsModule.run(TimelineEffects),
    // Routing
    AppRoutingModule,
    RouterStoreModule.connectRouter(),
    // Firebase
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    TimelineService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
