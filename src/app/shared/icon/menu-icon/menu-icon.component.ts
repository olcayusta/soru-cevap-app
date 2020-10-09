import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: 'menu-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuIconComponent {
}
