import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BottomNavModule} from 'bottom-nav';

import {AppRoutingModule} from './modules/app-routing.module';
import {AppComponent} from './app.component';
import {RouteHomeComponent} from './components/route-home/route-home.component';
import {RouteTwoComponent} from './components/route-two/route-two.component';
import {BottomNavModule} from '../../projects/bottom-nav/src/lib/bottom-nav.module';

@NgModule({
  declarations: [
    AppComponent,
    RouteHomeComponent,
    RouteTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BottomNavModule,
    BrowserAnimationsModule,
    BottomNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
