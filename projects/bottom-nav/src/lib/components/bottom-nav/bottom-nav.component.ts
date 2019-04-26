import {Component, HostBinding, Input} from '@angular/core';

import {BottomNavItem} from '../../models/bottom-nav';

@Component({
  selector: 'ngx-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  @Input() public items: BottomNavItem[] = [];
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

  get hideLabels(): boolean {
    return this.items.length > 4;
  }
}
