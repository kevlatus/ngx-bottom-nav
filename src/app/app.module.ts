import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'bottom-nav';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { RouteHomeComponent } from './components/route-home/route-home.component';
import { RouteSearchComponent } from './components/route-search/route-search.component';
import { RouteForumComponent } from './components/route-forum/route-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteHomeComponent,
    RouteSearchComponent,
    RouteForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BottomNavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
