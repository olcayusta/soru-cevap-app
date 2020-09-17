import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-settings-icon',
  templateUrl: 'settings-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsIconComponent {
}
