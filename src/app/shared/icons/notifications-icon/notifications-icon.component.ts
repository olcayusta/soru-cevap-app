import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notifications-icon',
  templateUrl: 'notifications-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
