import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-exit-to-app-icon',
  templateUrl: 'exit_to_app-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExitToAppIconComponent {
}
