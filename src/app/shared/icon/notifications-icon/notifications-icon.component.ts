import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-notifications-icon',
  templateUrl: 'notifications-24px.svg',
  styleUrls: ['./notifications-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
