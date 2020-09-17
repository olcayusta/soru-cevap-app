import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-cancel-icon',
  templateUrl: 'cancel-24px.svg',
  styles: [`:host {
    display: inline-flex;
    align-items: center;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancelIconComponent {}
