import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-visibility-icon',
  templateUrl: 'visibility-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityIconComponent {
}
