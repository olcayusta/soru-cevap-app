import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-home-icon',
  templateUrl: 'home-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeIconComponent {
}
