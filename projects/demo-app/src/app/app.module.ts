import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavModule } from 'ngx-bottom-nav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ForumPageComponent } from './forum-page/forum-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ForumPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BottomNavModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
