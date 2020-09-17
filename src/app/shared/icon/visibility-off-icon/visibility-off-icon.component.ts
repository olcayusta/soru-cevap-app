import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-visibility-off-icon',
  templateUrl: 'visibility_off-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityOffIconComponent {
}
