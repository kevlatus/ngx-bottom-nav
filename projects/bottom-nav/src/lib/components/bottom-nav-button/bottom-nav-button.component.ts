import {Component, Input} from '@angular/core';

/**
 * This component is a Material-style bottom navigation button.
 * It consists of an icon and a descriptive label.
 * *It should only be used by this library's internals.*
 */
@Component({
  selector: 'ngx-bottom-nav-button',
  templateUrl: './bottom-nav-button.component.html',
  styleUrls: ['./bottom-nav-button.component.scss']
})
export class BottomNavButtonComponent {
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
}
