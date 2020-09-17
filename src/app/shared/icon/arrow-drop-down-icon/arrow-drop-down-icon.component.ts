import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-arrow-drop-down-icon',
  templateUrl: 'arrow_drop_down-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowDropDownIconComponent {
}
