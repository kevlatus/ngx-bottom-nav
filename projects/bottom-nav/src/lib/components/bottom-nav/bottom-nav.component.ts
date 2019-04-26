import {Component, HostBinding, Input} from '@angular/core';

import {BottomNavItem} from '../../models/bottom-nav';

/**
 * This component is a [Material-style bottom navigation bar]{@link https://material.io/design/components/bottom-navigation.html}.
 * It receives an array of [BottomNavItems]{@link BottomNavItem} in order to render navigation buttons.
 * With [Material theming]{@link https://github.com/latusinski/ngx-drawer-layout#enabling-material-theming}
 * enabled, this component changes its style, when the {@link color} property.
 */
@Component({
  selector: 'ngx-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  /**
   * Navigation items, which are rendered inside the navigation bar.
   */
  @Input() public items: BottomNavItem[] = [];

  /**
   * The color of this navigation bar, following the logic of Angular Material
   */
  @Input() public color: 'primary' | 'accent' | 'warn';

  @HostBinding('class.color-primary')
  get colorPrimary(): boolean {
    return this.color === 'primary';
  }

  @HostBinding('class.color-accent')
  get accentPrimary(): boolean {
    return this.color === 'accent';
  }

  @HostBinding('class.color-warn')
  get warnPrimary(): boolean {
    return this.color === 'warn';
  }

  /**
   * Returns true if the length of {@link items} is greater than 4, which hides labels on inactive items.
   */
  get hideLabels(): boolean {
    return this.items.length > 4;
  }
}
