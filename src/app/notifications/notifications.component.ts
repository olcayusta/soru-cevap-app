import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
