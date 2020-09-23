import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-close-icon',
  templateUrl: 'close-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseIconComponent {
}
