import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-bottom-nav-button',
  templateUrl: './bottom-nav-button.component.html',
  styleUrls: ['./bottom-nav-button.component.scss']
})
export class BottomNavButtonComponent {
  @Input() public hideLabel: boolean;
  @Input() public icon: string;
  @Input() public label: string;
}
