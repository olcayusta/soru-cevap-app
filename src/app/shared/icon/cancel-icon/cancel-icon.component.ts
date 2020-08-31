import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-cancel-icon',
  templateUrl: 'cancel-24px.svg',
  styles: [`:host {
    display: inline-flex;
    align-items: center;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancelIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
