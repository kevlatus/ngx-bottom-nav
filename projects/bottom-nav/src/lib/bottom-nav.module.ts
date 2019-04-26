import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule, MatRippleModule, MatToolbarModule} from '@angular/material';

import {BottomNavComponent} from './components/bottom-nav/bottom-nav.component';
import {BottomNavButtonComponent} from './components/bottom-nav-button/bottom-nav-button.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BottomNavComponent,
    BottomNavButtonComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [
    BottomNavComponent,
  ]
})
export class BottomNavModule {
}
