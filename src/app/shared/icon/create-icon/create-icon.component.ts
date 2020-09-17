import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-create-icon',
  templateUrl: 'create-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateIconComponent {
}
