import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-menu-icon',
  templateUrl: 'menu-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
