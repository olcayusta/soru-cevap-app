import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-add-icon',
  templateUrl: 'add-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddIconComponent {

  constructor() {
  }
}
