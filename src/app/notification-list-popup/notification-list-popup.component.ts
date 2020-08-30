import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'qa-notification-list-popup',
  templateUrl: './notification-list-popup.component.html',
  styleUrls: ['./notification-list-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationListPopupComponent implements OnInit {

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

}
