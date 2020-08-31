import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-create-icon',
  templateUrl: 'create-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
