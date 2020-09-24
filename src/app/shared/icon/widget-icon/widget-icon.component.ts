import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-widget-icon',
  templateUrl: 'widgets-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetIconComponent {
}
