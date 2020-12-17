import { Component, Input, HostBinding } from '@angular/core';

import { BottomNavItem } from '../bottom-nav';

@Component({
  selector: 'button[ngx-bottom-nav]',
  templateUrl: './bottom-nav-button.component.html',
  styleUrls: ['./bottom-nav-button.component.scss'],
})
export class BottomNavButtonComponent implements BottomNavItem {
  /**
   * Determines whether labels of inactive buttons are hidden.
   */
  @Input() public hideLabel: boolean;

  /**
   * The icon which is shown on this button.
   */
  @Input() public icon: string;

  /**
   * The label which is shown on this button.
   */
  @Input() public label: string;

  @Input() public routerLink: string;

  @Input() public exact?: boolean;
}
