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

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TimelineComponent } from './containers/timeline/timeline.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TimelineComponent,
    PostComponent
  ],
  imports: [
  // Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // Store
    //StoreModule.provideStore(reducer),
    //StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // Routing
    AppRoutingModule,
    //RouterStoreModule.connectRouter(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
