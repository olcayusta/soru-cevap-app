import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-more-vert-icon',
  templateUrl: 'more_vert-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreVertIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
