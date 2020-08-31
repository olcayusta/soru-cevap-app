import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-notifications-icon',
  templateUrl: 'notifications-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
