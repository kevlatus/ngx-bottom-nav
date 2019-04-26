import { Component } from '@angular/core';

import {BottomNavItem} from 'bottom-nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: BottomNavItem[] = [
    {icon: 'home', label: 'Home', routerLink: ''},
    {icon: 'help', label: 'Two', routerLink: 'two'},
    {icon: 'help', label: 'Two', routerLink: 'two'},
    {icon: 'help', label: 'Two', routerLink: 'two'},
    // {icon: 'help', label: 'Two', routerLink: 'two'},
  ];
}
