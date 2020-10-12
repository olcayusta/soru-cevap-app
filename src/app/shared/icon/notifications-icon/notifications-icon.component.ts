import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notifications-icon',
  templateUrl: 'notifications-24px.svg',
  styles: [
    `
      :host {
        display: inline-flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsIconComponent {}
