import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-help-icon',
  templateUrl: 'help_outline-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpIconComponent {
}
