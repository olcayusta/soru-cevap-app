import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-home-icon',
  templateUrl: 'home-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
