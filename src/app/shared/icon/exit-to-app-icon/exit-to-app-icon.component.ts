import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-exit-to-app-icon',
  templateUrl: 'exit_to_app-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExitToAppIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
