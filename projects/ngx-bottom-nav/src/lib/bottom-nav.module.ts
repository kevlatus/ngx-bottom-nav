import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { BottomNavButtonComponent } from './bottom-nav-button/bottom-nav-button.component';

@NgModule({
  declarations: [
    BottomNavComponent, //
    BottomNavButtonComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    BottomNavComponent, //
    BottomNavButtonComponent
  ]
})
export class BottomNavModule {}
