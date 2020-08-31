import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-settings-icon',
  templateUrl: 'settings-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
