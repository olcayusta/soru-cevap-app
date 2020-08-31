import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-visibility-icon',
  templateUrl: 'visibility-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisibilityIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
