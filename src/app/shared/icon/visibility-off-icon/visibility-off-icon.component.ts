import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-visibility-off-icon',
  templateUrl: 'visibility_off-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityOffIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
