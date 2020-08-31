import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-help-icon',
  templateUrl: 'help_outline-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
