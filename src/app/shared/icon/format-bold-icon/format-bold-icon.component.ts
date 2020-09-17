import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-format-bold-icon',
  templateUrl: 'format_bold-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormatBoldIconComponent {
}
