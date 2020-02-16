import {Component} from '@angular/core';
import {BottomNavItem} from 'bottom-nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: BottomNavItem[] = [
    {icon: 'home', label: 'Home', routerLink: '', exact: true},
    {icon: 'search', label: 'Search', routerLink: 'search'},
    {icon: 'forum', label: 'Forum', routerLink: 'forum'},
  ];
}
